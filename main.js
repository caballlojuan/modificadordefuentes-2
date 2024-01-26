function setup()
{
    video=createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(350,300);
    canvas.position(530,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}


function draw()
    {
background('red')
    }

function modelLoaded()
{
    console.log('poseNet se inicializo');
}

function gotPoses(results)
{
if (results.length>0){
    console.log(results);
}
}