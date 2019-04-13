module.exports = class testPlugin{
    apply(compiler){
        compiler.hooks.run.tapAsync("testPlugin",(compilation,callback)=>{
            console.log("test plugin")
            callback()
        })
    }
}