// popup.js

document.addEventListener("DOMContentLoaded", () => {
  // Immediately show the main content (authentication is disabled)
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

  // Get all document list items in both pending and signed lists.
  const docItems = document.querySelectorAll("#pendingList li, #signedList li");

  // For each list item, extract the file name from its data-file-url attribute and update its content.
  docItems.forEach(item => {
    const fileUrl = item.getAttribute("data-file-url");
    if (fileUrl) {
      // Extract the file name (the part after the last '/')
      const fileName = fileUrl.split('/').pop();
      // Set the inner HTML to include the file icon and file name.
      item.innerHTML = `<i class="fa-solid fa-file"></i> ${fileName}`;
    }

    // When a document is clicked, update the current tab's URL to the file URL.
    item.addEventListener("click", () => {
      chrome.tabs.update({ url: fileUrl });
    });
  });
});
