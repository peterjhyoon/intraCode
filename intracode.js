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
function updateTabs() {
    tabCount++;
    // reference to + button
    var tabBase = document.querySelector(".workspace");
    var spaceBase = document.querySelector(".code-space");
    console.log(tabBase);

    // Creating new tab and space
    //var newSpace = document.createElement("div");
    var newTab = document.createElement("div");
    //newSpace.className = "code-space";
    newTab.className = "workspace-tab";
    //newSpace.setAttribute('contenteditable',true);
    //newSpace.setAttribute('tab', tabCount);

    // change name context (start with no num, then with num)
    newTab.textContent = "Untitled-" + tabCount;
    newTab.setAttribute("tab-num",tabCount+1);
    var closeButton = document.createElement("button");
    closeButton.className = "close-tab";
    closeButton.textContent = "x";
    closeButton.setAttribute("button-num",tabCount+1);
    // Deleting Tab
    closeButton.onclick = function() {
        // make sure to remove corresponding codespace
        var temp = tabBase.firstElementChild;
        let i = 0
        while (i < closeButton.getAttribute('button-num')) {
            temp = temp.nextElementSibling;
            console.log(temp);
            if (temp.getAttribute('tab-num') == closeButton.getAttribute('button-num')) {
                tabBase.removeChild(temp);
                // codespace object.style.display = "none"
                break;
            }
            i++;
        }
    }
    newTab.appendChild(closeButton);
    tabBase.append(newTab);

    /*
        Make sure that Code Space appends appropriately!!!
    */
}