document.addEventListener("DOMContentLoaded", () => {

    const synth = new Tone.Synth().toMaster();

    const allNotes = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
        "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
        "C6"];

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
            node.style.width = (widthPerNote / blackNotesWidthPortion) + "px";
            node.style.height = (heightPerNote / blackNotesHeightPortion) + "px";
        } else {
            node.className = "white";
            node.style.width = widthPerNote + "px";
            node.style.height = heightPerNote + "px";
        }

        piano.appendChild(node);
    });

    const MAJOR_SCALES = [
        ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
        ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"],
        ["E4", "F#4", "G#4", "A4", "B4", "C#5", "D#5", "E5"],
        ["F4", "G4", "A4", "A#4", "C5", "D5", "E5", "F5"],
        ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5"],
        ["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5"],
        ["B4", "C#5", "D#5", "E5", "F#5", "G#5", "A#5", "B5"]
    ];

    const song = [
        ["0", "C4", "8t"], 
        ["0:0.5", "D4", "8t"], 
        ["0:1", "E4", "8t"],
        ["0:1.5", "F4", "8t"],
        ["0:2", "G4", "8t"], 
        ["0:2.5", "A4", "8t"], 
        ["0:3", "B4", "8t"], 
        ["0:3.5", "C5", "8t"]
    ];

    playSong(song);

    function playSong(song) {
        Tone.Transport.cancel();
        Tone.Transport.clear();
        new Tone.Part((time, note, duration) => {
            synth.triggerAttackRelease(note, duration, time);
        }, song).start(0);
        Tone.Transport.start();
    }

});





