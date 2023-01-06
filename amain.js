function setup()
{

  video = createCapture(VIDEO);
  video.size(550,500);
  canvas = createCanvas(550,500);
  canvas.position(550,100);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {

    console.log("model Loaded");
  }