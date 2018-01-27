var video, showVideo, canvas, videoButton, muteButton, invertButton;
var window400, window600;
var invert = false;
function setup() {
    canvas = createCanvas(400, 400);

    videoButton = createButton('show video');
    videoButton.position(10, 430);
    videoButton.mousePressed(showMyVideo);

    muteButton = createButton('mute');
    muteButton.position(90, 430);
    muteButton.mousePressed(mute);

    invertButton = createButton('invert');
    invertButton.position(140, 430);
    invertButton.mousePressed(invertVideo);
    
    window400 = createButton('400 x 400');
    window400.position(10, 460);
    window400.mousePressed(resizeWindow400);

    window600 = createButton('600 x 600');
    window600.position(85, 460);
    window600.mousePressed(resizeWindow600);

    var constraints = {
        video: {
            mandatory: {
                minWidth: 1280,
                minHeight: 720
            }
        },
        audio: true
    }

    video = createCapture(constraints, function(stream) {
        console.log(stream);
    });
    video.elt.muted = true;
    showVideo = false;
    video.hide();
}

function draw() {
    if (showVideo) {
        image(video, 0, 0, width, height);
    } else {
        background(51);
    }
    if (invert) {
        filter(INVERT);
    }
}

function mute() {
    video.elt.muted = !video.elt.muted;
    return false;
}

function showMyVideo() {
    showVideo = !showVideo;
    return false;
}

function resizeWindow400(){
    canvas.size(400, 400);
    videoButton.position(10, 430);
    muteButton.position(90, 430);
    invertButton.position(140, 430);
    window400.position(10, 460);
    window600.position(85, 460);
    return false;
}

function resizeWindow600() {
    canvas.size(600, 600);
    videoButton.position(10, 630);
    muteButton.position(90, 630);
    invertButton.position(140, 630);
    window400.position(10, 660);
    window600.position(85, 660);
    return false;
}

function invertVideo(){
    invert = !invert;
    return false;
}