// ==UserScript==
// @name           LeakForums Code Expander
// @version        1.1.0
// @description    Allow expanding of code blocks
// @downloadURL    https://gitlab.com/notmike101/leakforums-code-expander/raw/master/lf-code-expander.user.js
// @updateURL      https://gitlab.com/notmike101/leakforums-code-expander/raw/master/lf-code-expander.meta.js
//
// @author         Mike Orozco / IRDeNial / R00D
// @namespace      leakforums/expandcodeblocks
//
// @include        *://leakforums.net/thread-*
// @include        *://www.leakforums.net/thread-*
// @include        *://*.leakforums.net/thread-*
//
// @grant          metadata
// ==/UserScript==

(function(){function c(a){return a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth}var a,b;for(a=0;a<document.querySelectorAll("div.codeblock").length;++a)c(document.querySelectorAll("div.codeblock")[a].getElementsByTagName("code")[0])&&(b=document.createElement("div"),b.className="codeexpander-"+a,b.setAttribute("style","text-align:center;width:100%;display:block;position:absolute;bottom:0;left: 0;background-image: linear-gradient(to bottom, #252525, #252525);padding: 0;margin: 0;cursor: pointer;"),b.innerHTML = '<p style="color: #38b8d4;font-weight: bold;font-size: 18px;">Click To Expand</p>', document.querySelectorAll("div.codeblock")[a].appendChild(b), document.querySelectorAll("div.codeblock")[a].style.position = "relative"); for (a = 0; a < document.querySelectorAll("div[class^='codeexpander-']").length; ++a)document.querySelectorAll("div[class^='codeexpander-']")[a].addEventListener("click", function () { this.parentNode.querySelector("div.body > code").style.maxHeight = "none"; this.style.display = "none"; });})()