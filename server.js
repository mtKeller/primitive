const { spawn } = require('child_process');

const primitive = spawn("go", ["run","./primitive-gen/main.go",'-i','image_store/Erba Header.jpg','-o','test.png','-n','100']);

primitive.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

primitive.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

primitive.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});