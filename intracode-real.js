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

    // Insert Key (not used)
    if(event.keyCode == 45) {
        event.preventDefault();
    }
});

// For tabbing
function tabOnCode() {
    document.execCommand('insertHTML', false, '&#009');
};

var idNum = 0;
var tabNaming = 0;

function updateTabs() {
    idNum++;
    tabNaming++;

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
        newTab.textContent = "Untitled-" + (tabNaming - 1);
    }

    var closeButton = document.createElement('button');
    closeButton.className = "close-tab";
    closeButton.textContent = "x";
    closeButton.id = idNum;
    closeButton.addEventListener('click', deleteTab, false);

    newTab.appendChild(closeButton);

    newTab.addEventListener('click', updateDisplay(Number(newTab.id) - 1), false);

    //newTab.onclick = updateDisplay((Number(newTab.id) - 1));

    //newTab.onclick = updateDisplay(Number(newTab.id) - 1);
    console.log(Number(newTab.id) - 1);

    tabBase.append(newTab);

    spaceBase.insertAdjacentElement('beforebegin', newSpace);
    
    updateDisplay((Number(newTab.id) - 1));
}

// Delete Corresponding Tab + Space, and update the IDs
function deleteTab(evt) {
    indexToDelete = evt.target.id - 1;
    console.log(indexToDelete);

    var tabBase = document.querySelector('.workspace');

    // Deleting Tab
    var parseTab = tabBase.firstElementChild;
    let counter = 0;
    while (counter < document.querySelectorAll('.workspace-tab').length) {
        parseTab = parseTab.nextElementSibling;
        if (counter == indexToDelete) {
            tabBase.removeChild(parseTab);
            break;
        }
        counter++;
    }

    // Deleting Space
    var deleteSpace = document.querySelectorAll('.code-space')[indexToDelete];
    document.body.removeChild(deleteSpace);

    //Update the ID
    let refresh = indexToDelete;
    let updatedTabArr = document.querySelectorAll('.workspace-tab');
    let updatedSpaceArr = document.querySelectorAll('.code-space');

    while (refresh < document.querySelectorAll('.workspace-tab').length) {
        let newID = Number(updatedTabArr[refresh].id) - 1;
        updatedTabArr[refresh].id = newID;
        updatedTabArr[refresh].firstElementChild.id = newID;
        updatedSpaceArr[refresh].id = newID;
        refresh++;
    }

    idNum--;

}

function updateDisplay(tabIndex) {
    var spaceLst = document.querySelectorAll('.code-space');
    for (var i = 0; i < spaceLst.length; i++) {
        if (i == tabIndex) {
            console.log('found');
        }
        else {
            console.log('not found');
        }
    }
}