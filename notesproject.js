const notescontainer = document.querySelector(".notes-cotainer");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
    notescontainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

showNotes();

createbtn.addEventListener("click", () => {

    let note = document.createElement("div");
    note.className = "note";

    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");

    img.src = "https://cdn-icons-png.flaticon.com/128/2438/2438317.png";

    note.appendChild(inputbox);
    note.appendChild(img);

    notescontainer.appendChild(note);

    inputbox.focus();

    updateStorage();

});

notescontainer.addEventListener("click", function(e){

    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.classList.contains("input-box")){

        notes=document.querySelectorAll(".input-box");

        notes.forEach(nt=>{

            nt.onkeyup=function(){
                updateStorage();
            }

        });

    }

});

document.addEventListener("keydown",event=>{

    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

});
