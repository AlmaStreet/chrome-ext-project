// popup.js

document.addEventListener("DOMContentLoaded", () => {
  // Show main content since authentication is disabled.
  document.getElementById("user-info").innerText = "Authentication disabled. Showing main content.";
  document.getElementById("login-button").style.display = "none";
  document.getElementById("tabs-section").style.display = "block";

  // Tab switching logic
  const pendingTab = document.getElementById("pendingTab");
  const signedTab = document.getElementById("signedTab");
  const pendingContent = document.getElementById("pendingContent");
  const signedContent = document.getElementById("signedContent");

  pendingTab.addEventListener("click", () => {
    pendingTab.classList.add("active");
    signedTab.classList.remove("active");
    pendingContent.classList.add("active");
    signedContent.classList.remove("active");
  });

  signedTab.addEventListener("click", () => {
    signedTab.classList.add("active");
    pendingTab.classList.remove("active");
    signedContent.classList.add("active");
    pendingContent.classList.remove("active");
  });

  // When a document item is clicked, update the current active tab's URL.
  const fileUrl = 'file:///Users/Jason/Downloads/sample.pdf';
  const docItems = document.querySelectorAll("#pendingList li, #signedList li");

  docItems.forEach(item => {
    item.addEventListener("click", () => {
      // Use the chrome.tabs.update API to navigate the current tab to the file URL.
      chrome.tabs.update({ url: fileUrl });
    });
  });
});
