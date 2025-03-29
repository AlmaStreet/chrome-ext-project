// Display stored selected text, if available
chrome.storage.local.get('selectedText', (data) => {
    if (data.selectedText) {
      document.getElementById('selectedTextDisplay').textContent = data.selectedText;
    }
  });
  
  document.getElementById('analyzeBtn').addEventListener('click', () => {
    chrome.storage.local.get('selectedText', (data) => {
      const text = data.selectedText || "";
      document.getElementById('result').textContent = "Analyzing text ... " + text;
    });
  });
  
  document.getElementById('annotateBtn').addEventListener('click', () => {
    chrome.storage.local.get('selectedText', (data) => {
      const text = data.selectedText || "";
      document.getElementById('result').textContent = "Annotating text ... " + text;
    });
  });
  