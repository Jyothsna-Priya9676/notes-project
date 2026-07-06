const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load saved notes
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Save notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create new note
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

// Button click → create note
createBtn.addEventListener("click", createNote);

// Click delete icon → remove note
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Save while typing
notesContainer.addEventListener("keyup", updateStorage);

// Optional: Enter behavior fix
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
