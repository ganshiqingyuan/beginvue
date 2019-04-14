module.exports = class testPlugin{
    apply(compiler){
        console.log('注册')
        compiler.hooks.run.tapAsync("testPlugin",(compilation,callback)=>{
            console.log("test plugin")
            callback()
        })
    }
}