
import  readlineSync from  'readline-sync'

function askRiddle(riddleObj){
    while(true){
        console.log(riddleObj.name);
        console.log(riddleObj.taskDescription);
        if (riddleObj.choices){
            console.log(riddleObj.choices);}

        let answer = readlineSync.question("enter your answer")
        
        
        if (riddleObj.choices){
            
            
            if(answer === riddleObj.correctAnswer){
                console.log( "good answer");
                break
                 }}
                

        
            
        if(answer === riddleObj.correctAnswer){
                console.log("good answer");
                break
                 
            }
            console.log("wrong answer try again");
            
        }


}

export default askRiddle



