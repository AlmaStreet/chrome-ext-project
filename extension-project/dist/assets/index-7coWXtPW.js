(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{document.getElementById("user-info").innerText="Authentication disabled. Showing main content.",document.getElementById("login-button").style.display="none",document.getElementById("tabs-section").style.display="block";const o=document.getElementById("pendingTab"),n=document.getElementById("signedTab"),c=document.getElementById("pendingContent"),s=document.getElementById("signedContent");o.addEventListener("click",()=>{o.classList.add("active"),n.classList.remove("active"),c.classList.add("active"),s.classList.remove("active")}),n.addEventListener("click",()=>{n.classList.add("active"),o.classList.remove("active"),s.classList.add("active"),c.classList.remove("active")});const e="file:///Users/Jason/Downloads/sample.pdf";document.querySelectorAll("#pendingList li, #signedList li").forEach(i=>{i.addEventListener("click",()=>{window.location.href=e})})});
