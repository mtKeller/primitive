const { spawn } = require('child_process');

//mode: 0=combo, 1=triangle, 2=rect, 3=ellipse, 4=circle, 5=rotatedrect, 6=beziers, 7=rotatedellipse, 8=polygon
var run = function(res,input,output,numShapes,shapeMode,rep,resize,outputSize,colorAlpha,backgroundColor){
    var name;
    var path = "image_store/processing/";
    if(input){
        name = input
    }
    else{
        name = 'Erba Header.jpg';
    }

    const primitive = spawn("go", ["run","./primitive-gen/main.go",'-i',path + name,'-o','./static/images/rendered/' + name,'-n','100']);
    
    primitive.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    primitive.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
    
    primitive.on('close', (code) => {
        console.log(`Primitive exited with code: ${code}`);
        if(code === 0){
            res.json({filename:name});
        }
        else{
            res.json({
                message: "failed"
            })
        }
    });
}

module.exports = {
    run : run
}