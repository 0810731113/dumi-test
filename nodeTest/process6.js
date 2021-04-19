const exec = require('child_process').exec;
// const child = exec('cat 1.txt | wc -l',
console.log(process.cwd());
console.log(__dirname);
const child = exec(`cat ${__dirname}/*.js`, (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
