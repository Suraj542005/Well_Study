

var Board_dict = {
    // Notes Pdf's
    'board1' : "cbse_boards.html",
    'board2' : "gseb_subject.html",
    's1' : "gseb_chemistry.html",
    's2' : "gseb_physics.html",
    's3' : "gseb_english.html",
    's4' : "gseb_maths.html",
    's5' : "gseb_computer.html",
}




function openfile(button) {
    var button_id = button.id;
    var file_url = Board_dict[button_id];
    if(file_url == ""){
        alert("Files will be Added Very Soon.");
    }
    else{
        window.location.href = file_url;
    }
}