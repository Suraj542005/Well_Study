

var jee_neet_dict = {
    // Notes Pdf's
    'j1' : "mindmaps_xi.html",
    'j2' : "mindmaps_xii.html",
    'j3' : "pyq(chemistry).html",
    'j4' : "pyq(maths).html",
    'j5' : "pyq(physics).html",
    'j6' : "jeemain_imp.html",
    'j7' : "https://youtube.com/playlist?list=PL-Ln-JHaAtIV5YD1Y2tIHG-CNPrr1y0-u&si=9cDR_84Hl2VMEejl",
}




function openfile(button) {
    var button_id = button.id;
    var file_url = jee_neet_dict[button_id];
    if(file_url == ""){
        alert("Files will be Added Very Soon.");
    }
    else{
        window.location.href = file_url;
    }
}