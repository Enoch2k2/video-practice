var video, showVideo, canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(10, 50);
    var videoButton = createButton('show video');
    videoButton.position(10, 460);
    videoButton.mousePressed(showMyVideo);
    var muteButton = createButton('mute');
    muteButton.position(90, 460);
    muteButton.mousePressed(mute);
    var constraints = {
        video: {
            mandatory: {
                minWidth: 1280,
                minHeight: 720
            },
            optional: [{ maxFrameRate: 10 }]
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
}

function mute() {
    video.elt.muted = !video.elt.muted;
}

function showMyVideo() {
    showVideo = !showVideo;
}

function resizeWindow(){
    canvas.size(mouseX, mouseY);
}

function mouseDragged(){
    canvas.size(mouseX, mouseY);

    return false;
}