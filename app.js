document.addEventListener("DOMContentLoaded", ()=>{
    
    const allNotes = ["C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2"];

    const piano = document.getElementById("piano");
    
    const widthPerNote = window.innerWidth / (allNotes.length - 4);
    const heightPerNote = 120;
    
    const blackNotesWidthPortion = 2;
    const blackNotesHeightPortion = 1.6;

    allNotes.forEach((note) => {

        const node = document.createElement("li");
        node.setAttribute("id", note);

        if (~note.indexOf("#")) {
            node.className = "black";
            node.style.width = (widthPerNote/blackNotesWidthPortion) + "px";
            node.style.height = (heightPerNote/blackNotesHeightPortion) + "px";
        } else {
            node.className = "white";
            node.style.width = widthPerNote + "px";
            node.style.height = heightPerNote + "px";
        }
        
        piano.appendChild(node);
    });

});