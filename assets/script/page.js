// YoutubePlayer
let player;

function initYouTubePlayer(videoID) {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoID,
        playerVars: {
            'iv_load_policy': 3,
            'rel': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(e) {
    e.target.mute().playVideo();
}

// Video info
function hideElements() {
    $(".how-to-watch, .preview, .htdonate").addClass("hide");
    $(".embed-container").empty();
}

$("#preview-video").click(function () {
    const videoID = $(this).data("id");
    $(".preview").removeClass("hide");
    $(".embed-container").html('<div id="player"></div>');
    initYouTubePlayer(videoID);
});

$("#online-video").click(function () {
    $(".how-to-watch").removeClass("hide");
});

$(".close").click(function () {
    hideElements();
});

$(".buyacafe").click(function () {
    $(".htdonate").removeClass("hide");
});
