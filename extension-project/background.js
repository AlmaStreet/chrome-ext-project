// background.js

const OFFSCREEN_DOCUMENT_PATH = '/offscreen.html';
let creatingOffscreenDocument;

async function hasOffscreenDocument() {
  const matchedClients = await clients.matchAll();
  return matchedClients.some(
    (c) => c.url === chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)
  );
}

async function setupOffscreenDocument() {
  if (!(await hasOffscreenDocument())) {
    if (!creatingOffscreenDocument) {
      creatingOffscreenDocument = chrome.offscreen.createDocument({
        url: OFFSCREEN_DOCUMENT_PATH,
        reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
        justification: 'Authentication'
      });
    }
    await creatingOffscreenDocument;
    creatingOffscreenDocument = null;
  }
}

function sendAuthRequest() {
  return new Promise(async (resolve, reject) => {
    await setupOffscreenDocument();

    // Create an iframe reference to the offscreen document
    const offscreenIframeUrl = chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = offscreenIframeUrl;
    document.body.appendChild(iframe);

    // Listen for a response from the offscreen document
    function handleIframeMessage({ data }) {
      try {
        const result = JSON.parse(data);
        window.removeEventListener('message', handleIframeMessage);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }
    window.addEventListener('message', handleIframeMessage, false);

    // Trigger the authentication flow in the offscreen document
    iframe.contentWindow.postMessage({ initAuth: true }, new URL(offscreenIframeUrl).origin);
  });
}

// Example: Trigger authentication and log the result.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'firebase-auth') {
    sendAuthRequest().then(sendResponse).catch(sendResponse);
    return true; // Keep the message channel open for async response
  }
});
