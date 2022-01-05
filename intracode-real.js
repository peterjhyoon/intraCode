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
        console.log('delete button');
        //let parseSpaces = document.body.querySelector('.code-space');
        var lineCount = document.querySelector(".code-space").childElementCount;
        
        if (lineCount == 1) {
            var firstLine = document.querySelector(".code-line").firstChild;
            if (firstLine.textContent.length <= 0) {
                event.preventDefault();
            }
        }
    }
    // Space Bar
    if(event.keyCode == 32) {
        console.log("poss");
    }
});

function tabOnCode() {
    document.execCommand('insertHTML', false, '&#009');
};

var idNum = 0;

function updateTabs() {
    idNum++;

    var tabBase = document.querySelector('.workspace');
    var spaceBase = document.querySelector('.supplement-bar');

    var newTab = document.createElement('div');
    newTab.className = "workspace-tab";
    var newSpace = document.createElement('div');
    newSpace.className = "code-space";
    newSpace.setAttribute('contenteditable',true);

    // Set ID Nums
    newTab.id = idNum;
    newSpace.id = idNum;

    // Adding Lines for Corresponding Code Space
    var line = document.createElement('div');
    line.className = 'code-line';
    newSpace.appendChild(line);


    if (newTab.id == 1) {
        newTab.textContent = "Untitled";
    }
    else {
        newTab.textContent = "Untitled-" + (newTab.id - 1);
    }

    var closeButton = document.createElement('button');
    closeButton.className = "close-tab";
    closeButton.textContent = "x";
    closeButton.id = idNum;


}