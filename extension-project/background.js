chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background:", message);
    if (message.type === 'selectionChanged') {
        const tabId = sender.tab.id;
        if (message.text && message.text.length > 0) {
            chrome.action.enable(tabId);
            chrome.storage.local.set({ selectedText: message.text });
            console.log("Storing text:", message.text);
        } else {
            chrome.action.disable(tabId);
            chrome.storage.local.remove('selectedText');
            console.log("No text selected; cleared stored text.");
        }
    }
});
