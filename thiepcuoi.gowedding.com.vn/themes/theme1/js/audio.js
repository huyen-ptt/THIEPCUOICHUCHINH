$(document).ready(function() {
    var audioPlay = false;
    $('.icon_music').click(function() {
        if (audioPlay) {
            audioPlay = false;
            $('#audio')[0].pause();
        } else {
            audioPlay = true;
            $('#audio')[0].play();
        }
    });
});