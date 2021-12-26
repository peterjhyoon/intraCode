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

/* Creating New Files --> use Class (properties i.e. fileName to create a new codespace div)

class File {
    constructor(name, type) {
        this.name = name;
        this.height = height;
    }
}
*/

// Creating New Tabs
function createNewTab() {
    // Loop using Next Element Sibling
    var newTab = document.createElement("button");
    newTab.className = "workspace-button";
    newTab.textContent = "Untitled";
    document.querySelector(".workspace").appendChild(newTab);
}