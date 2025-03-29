document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    console.log("Selected text in content script:", selectedText);

    chrome.runtime.sendMessage({
        type: 'selectionChanged',
        text: selectedText
    });
});
