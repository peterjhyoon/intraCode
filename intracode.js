

document.addEventListener("keydown", function(event) {
    var lines = document.querySelector(".code-line");
    // Tab for Indent
    if (event.keyCode == 9) {
        tabOnCode();
        event.preventDefault();
    }
    if (event.keyCode == 13) {
        var newLine = document.createElement("div");
        newLine.className = "code-line";
        lines.after(newLine);
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