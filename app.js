document.addEventListener("DOMContentLoaded", () => {

    const synth = new Tone.Sampler({
        'A0': 'A0.[mp3|ogg]',
        'C1': 'C1.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'D#6': 'Ds6.[mp3|ogg]',
        'F#6': 'Fs6.[mp3|ogg]',
        'A6': 'A6.[mp3|ogg]',
        'C7': 'C7.[mp3|ogg]',
        'D#7': 'Ds7.[mp3|ogg]',
        'F#7': 'Fs7.[mp3|ogg]',
        'A7': 'A7.[mp3|ogg]',
        'C8': 'C8.[mp3|ogg]'
    }, {
        'release': 1,
        'baseUrl': './salamander/'
    }).toMaster();

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

    const scale = [
        ["0", "C4", "8t"], 
        ["0:0.5", "D4", "8t"], 
        ["0:1", "E4", "8t"],
        ["0:1.5", "F4", "8t"],
        ["0:2", "G4", "8t"], 
        ["0:2.5", "A4", "8t"], 
        ["0:3", "B4", "8t"], 
        ["0:3.5", "C5", "8t"]
    ];

    const song = [
        // Compass 1
        [0, "G#3", '8n'], ["0:0.33", "C#4", '8n'], ["0:0.66", "E4", '8n'],
        ["0:1", "G#3", '8n'], ["0:1.33", "C#4", '8n'], ["0:1.66", "E4", '8n'],
        ["0:2", "G#3", '8n'], ["0:2.33", "C#4", '8n'], ["0:2.66", "E4", '8n'],
        ["0:3", "G#3", '8n'], ["0:3.33", "C#4", '8n'], ["0:3.66", "E4", '8n'],
        [0, 'C#3', '1m'], [0, 'C#2', '1m'],

        // Compass 2
        ["1:0", "G#3", '8n'], ["1:0.33", "C#4", '8n'], ["1:0.66", "E4", '8n'],
        ["1:1", "G#3", '8n'], ["1:1.33", "C#4", '8n'], ["1:1.66", "E4", '8n'],
        ["1:2", "G#3", '8n'], ["1:2.33", "C#4", '8n'], ["1:2.66", "E4", '8n'],
        ["1:3", "G#3", '8n'], ["1:3.33", "C#4", '8n'], ["1:3.66", "E4", '8n'],
        ["1:0", 'B1', '1m'], ["1:0", 'B2', '1m'],

        // Compass 3
        ["2:0", "A3", '8n'], ["2:0.33", "C#4", '8n'], ["2:0.66", "E4", '8n'],
        ["2:1", "A3", '8n'], ["2:1.33", "C#4", '8n'], ["2:1.66", "E4", '8n'],
        ["2:2", "A3", '8n'], ["2:2.33", "D4", '8n'], ["2:2.66", "F#4", '8n'],
        ["2:3", "A3", '8n'], ["2:3.33", "D4", '8n'], ["2:3.66", "F#4", '8n'],
        ["2:0", 'A1', '1m'], ["2:0", 'A2', '1m'], ["2:2", 'F#1', '1m'], ["2:2", 'F#2', '1m']
    ];

    document.getElementById("playScale").addEventListener("click", (event)=> {
        Tone.Transport.bpm.rampTo(120);
        playSong(scale);
    });

    document.getElementById("playSong").addEventListener("click", (event)=> {
        Tone.Transport.bpm.rampTo(50);
        playSong(song);
    });



    function playSong(song) {
        Tone.Transport.cancel();
        Tone.Transport.clear();
        new Tone.Part((time, note, duration) => {
            synth.triggerAttackRelease(note, duration, time);
        }, song).start(0);
        Tone.Transport.start();
    }

});





