

document.addEventListener("keydown", function(event) {
    var lines = document.querySelector(".code-line");
    // Tab for Indent
    if (event.keyCode == 9) {
        tabOnCode();
        event.preventDefault();
    }
    if (event.keyCode == 13) {
        event.preventDefault();
        var newLine = document.createElement("div");
        newLine.className = "code-line";
        newLine.contentEditable = true;
        lines.after(newLine);
        // move cursor to next div!!
    }
    // Up key --> move up a line (div)
    if (event.keyCode == 38) {
        console.log();
    }
    // Down key
    if (event.keyCode == 40) {
        console.log(this);
    }

});

function getCurrLine(line) {
    var lines = document.querySelector(".code-line");

}

// For tabbing
function tabOnCode() {
    document.execCommand('insertHTML', false, '&#009');
}

function moveCursor() {
    
}