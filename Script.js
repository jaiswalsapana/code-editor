document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copy-button");
    const saveButton = document.getElementById("save-button");
    const lockButton = document.getElementById("lock-button");
    const editorContent = document.querySelector(".editor-content");

    let isLocked = false;

    
    editorContent.innerHTML = `hey there welcome to my editor`;

    copyButton.addEventListener("click", function () {
        const text = editorContent.innerText;
            alert("Code copied to clipboard!");
        
    });

    saveButton.addEventListener("click", function () {
        const text = editorContent.innerText;
        alert("Code saved!");
    });

    lockButton.addEventListener("click", function () {
        isLocked = !isLocked;
        editorContent.setAttribute("contenteditable", !isLocked);
        lockButton.innerText = isLocked ? "Unlock" : "Lock";
    });
});
