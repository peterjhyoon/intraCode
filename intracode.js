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

// For tabbing
function tabOnCode() {
    document.execCommand('insertHTML', false, '&#009');
};

var tabCount = 0;

var currTabNum = 0;


// Creating New Tabs
function updateTabs() {
    tabCount++;
    currTabNum++;
    // reference to + button
    var tabBase = document.querySelector(".workspace");
    var spaceBase = document.querySelector(".supplement-bar");
    // Creating new tab and space
    var newSpace = document.createElement("div");
    var newTab = document.createElement("div");
    newSpace.className = "code-space";
    newTab.className = "workspace-tab";
    newSpace.setAttribute('contenteditable',true);
    newSpace.setAttribute('tab', tabCount);

    // change name context (start with no num, then with num)
    if (tabCount == 1) {
        newTab.textContent = "Untitled";
    }
    else {
        newTab.textContent = "Untitled-" + (currTabNum-1);
    }
    //newTab.textContent = "Untitled-" + tabCount;
    newTab.setAttribute("tab-num",tabCount);
    var closeButton = document.createElement("button");
    closeButton.className = "close-tab";
    closeButton.textContent = "x";
    closeButton.setAttribute("button-num",tabCount);
    // Deleting Tab and Space
    closeButton.onclick = function() {
        // make sure to remove corresponding codespace
        var temp = tabBase.firstElementChild;
        let i = 0
        while (i < closeButton.getAttribute('button-num')) {
            temp = temp.nextElementSibling;
            //console.log(temp);
            if (temp.getAttribute('tab-num') == closeButton.getAttribute('button-num')) {
                tabBase.removeChild(temp);
                document.body.removeChild(newSpace);
                tabCount--;

                // codespace object.style.display = "none"
                break;
            }
            i++;
        }
        displayCodeSpace(closeButton.getAttribute('button-num')-1);
    }
    newTab.appendChild(closeButton);
    if (tabCount >= 2) {
        newTab.onclick = displayCodeSpace(newTab.getAttribute('tab-num'));
    }

    newTab.onclick = function() {
        displayCodeSpace(newTab.getAttribute('tab-num'));
    }
    
    //displayCodeSpace(newTab.getAttribute('tab-num'));
    tabBase.append(newTab);
    // Adding code lines to new space
    line = document.createElement("div");
    line.className = "code-line";
    newSpace.append(line);

    spaceBase.insertAdjacentElement('beforebegin', newSpace);
    /*
        Make sure that Code Space appends appropriately!!!
    */
}

// For First Tab (Edge Case)
if (tabCount > 1) {
    var firstTab = document.querySelector(".code-space");
    firstTab.onclick = displayCodeSpace(firstTab.getAttribute('tab-num'));
}

function displayCodeSpace(tabNum) {
    var spaces = document.querySelector(".code-space");
    let counter = 1;
    while (counter <= tabCount) {
        if (counter == tabNum) {
            spaces.style.display = 'block';
            //console.log("this is the tab to show");
        }
        else {
            spaces.style.display = 'none';
            //console.log("this is the tab to hide");
        }
        spaces = spaces.nextElementSibling;
        counter++;
    }
}

// make sure that the style thing applies *even after last tab closes
// ie) switch to next open tab (edge case)