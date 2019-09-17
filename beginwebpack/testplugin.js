const { exec } = require('child_process');

module.exports = class testPlugin{
    apply(compiler){
        console.log('注册')
        compiler.hooks.done.tapAsync("testPlugin",(compilation,callback)=>{
            console.log("test plugin")

            exec('git status', (err, stdout, stderr) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(stdout);
              });
            callback()
        })
    }
}