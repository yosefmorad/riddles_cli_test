function measureSolveTime(fn){
    let start = new Date().getTime();



    fn()
    let  end = new Date().getTime();
    let time = end - start;

    return time;
    




}
export default measureSolveTime


 



