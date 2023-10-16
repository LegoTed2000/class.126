song = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modleloaded);
    poseNet.on("pose", gotposses);
}

function draw() {
    image(video, 0, 0, 800, 700);
}

function play_sound() {
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function modleloaded() {
    console.log("It's on");
}

function gotposses(results) {
 if(results.length > 0) {
    console.log(results);
    leftWristx = results[0].pose.leftWrist.x;
    leftWristy = results[0].pose.leftWrist.y;
    console.log("Your left wrist X position is - "+leftWristx+"Your left wrist Y position is - "+leftWristy );

    rightWristx = results[0].pose.rightWrist.x;
    rightWristy = results[0].pose.rightWrist.y;
    console.log("Your right wrist X position is - "+rightWristx+"Your right wrist Y position is - "+rightWristy);
 }
}