createbtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");

    img.src = "https://cdn-icons-png.flaticon.com/128/2438/2438317.png";

    notescontainer.appendChild(inputbox);
    inputbox.appendChild(img);

    // Place cursor inside the note
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(inputbox);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);

    inputbox.focus();

    updateStorage();
});
