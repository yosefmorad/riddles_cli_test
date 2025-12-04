import  readlineSync from  'readline-sync'
import createPlyer from './player/create.js'
import allRidd from './riddles/AllRiddles.js'
import measureSolveTime from './utiles/measureSolve.js';
import addSolveTime from "./utiles/solve_time.js"
import askRiddle from './utiles/askRiddle.js';
import showStats from  "./player/showStats.js"



console.log("wellcome");
let  user_name =  readlineSync.question("enter your name")
const plyer  = createPlyer(user_name)
let allridd = allRidd 


for(let r of allridd){
    // askRiddle(r)
    
    
    
   addSolveTime(plyer , measureSolveTime(() => askRiddle(r)))
    

}
let time =  showStats(plyer)


console.log("good job " ,user_name);

let Average = time / allridd.length
console.log("all time:" ,time  ,  "Average per unit" , Average);

