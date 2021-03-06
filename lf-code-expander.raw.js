(function () {
    var i, expanderDiv;

    function isOverflowed(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    for (i = 0; i < document.querySelectorAll('div.codeblock').length; ++i) {
        if (isOverflowed(document.querySelectorAll('div.codeblock')[i].getElementsByTagName("code")[0])) {
            expanderDiv = document.createElement('div');
            expanderDiv.className = "codeexpander-" + i;
            expanderDiv.setAttribute('style', 'text-align:center;width:100%;display:block;position:absolute;bottom:0;left: 0;background-image: linear-gradient(to bottom, #252525, #252525);padding: 0;margin: 0;cursor: pointer;');
            expanderDiv.innerHTML = '<p style="color: #e24f44;font-size: 14px;padding:5px 0;>Click To Expand</p>';

            document.querySelectorAll('div.codeblock')[i].appendChild(expanderDiv);
            document.querySelectorAll('div.codeblock')[i].style.position = 'relative';
        }
    }

    for (i = 0; i < document.querySelectorAll("div[class^='codeexpander-']").length; ++i) {
        document.querySelectorAll("div[class^='codeexpander-']")[i].addEventListener('click', function () {
            this.parentNode.querySelector('div.body > code').style.maxHeight = 'none';
            this.style.display = 'none';
        });
    }
})();