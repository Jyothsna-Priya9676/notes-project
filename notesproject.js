const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

showNotes();

function createNote() {
    let note = document.createElement("p");
    let img = document.createElement("img");

    note.className = "input-box";
    note.setAttribute("contenteditable", "true");

    img.src = "https://cdn-icons-png.flaticon.com/128/2438/2438317.png";

    note.appendChild(img);
    notesContainer.appendChild(note);

    updateStorage();
}
createBtn.addEventListener("click", createNote);
notesContainer.addEventListener("click", function (e) {
    if (e.target === notesContainer) {
        createNote();
    }
});
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});
notesContainer.addEventListener("keyup", function () {
    updateStorage();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
