document.addEventListener("DOMContentLoaded", ()=>{

    const synth = new Tone.Synth().toMaster();
    
    const allNotes = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5"];

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

        // Option 1 with predefined note duration
        // https://github.com/Tonejs/Tone.js/wiki/Time
        /*
        node.addEventListener("click", (event)=> {
            synth.triggerAttackRelease(note, "3");
        });
        */

        // Option 2 with human release time
        node.addEventListener("mousedown", (event)=> {
            synth.triggerAttack(note);
        });

        node.addEventListener("mouseup", (event)=> {
            synth.triggerRelease();
        });
        
        piano.appendChild(node);
    });

});