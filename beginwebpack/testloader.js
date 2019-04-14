module.exports = function(source){
    console.log("test loader")
    return source+";console.log(123)"
}