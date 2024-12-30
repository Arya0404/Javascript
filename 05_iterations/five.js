// foreach looop

const coding = ["js", "cpp", "python", "java", "ruby"]
/*
coding.forEach( function (item) {
    console.log(item);
})
*/

/*
coding.forEach( (item) => (
    console.log(item)
))
*/

/*
function printMe(item){
    console.log(item)
}
*/

/*
coding.forEach(printMe)

coding.forEach((item, index, arr) =>{
    console.log(item,index, arr)
})
    */

const myCoding = [
    {
        languageName: "Javascript",
        exeFile: ".js"
    },
    {
        languageName: "C++",
        exeFile: ".cpp"
    },
    {
        languageName: "python",
        exeFile: ".py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})