document.addEventListener("keydown", function(event) {
    // Tab for Indent
    if (event.keyCode == 9) {
        tabOnCode();
        event.preventDefault();
    }
    // Enter key --> auto indent text when on new line
    if (event.keyCode == 13) {
        console.log("Make sure auto indent feature is allowed");
    }
    // Del Key --> if space count = 4, count as indent and delete 4
    if(event.keyCode == 8) {
        // Cannot Delete Line Count
        var lineCount = document.querySelector(".code-space").childElementCount;
        if (lineCount == 1) {
            var firstLine = document.querySelector(".code-line").firstChild;
            if (firstLine == null || firstLine.textContent.length <= 0) {
                event.preventDefault();
            }
        }
    }
    // Space Bar
    if(event.keyCode == 32) {
        console.log("poss");
    }
});

// For tabbing
function tabOnCode() {
    document.execCommand('insertHTML', false, '&#009');
};

var tabCount = 0;

// Creating New Tabs
function createNewTab() {
    tabCount++;
    // reference to + button
    var tabBase = document.querySelector(".workspace");
    console.log(tabBase);
    var newTab = document.createElement("div");
    newTab.className = "workspace-tab";
    newTab.textContent = "Untitled-" + tabCount;
    newTab.setAttribute("tab-num",tabCount+1);
    var closeButton = document.createElement("button");
    closeButton.className = "close-tab";
    closeButton.textContent = "x";
    closeButton.setAttribute("button-num",tabCount+1);
    // deleting tab
    closeButton.onclick = function() {
        var tabToDelete;
        var temp = tabBase.firstElementChild;
        /*
        while (temp.nextElementSibling != null) {
            if (temp.nextElementSibling.getAttribute('tab-num') == closeButton.getAttribute("button-num")) {
                tabToDelete = temp.nextElementSibling;
                break;
            }
        }
        tabBase.removeChild(tabToDelete);
        console.log(closeButton.getAttribute('button-num'));*/
    }
    newTab.appendChild(closeButton);
    tabBase.append(newTab);
}