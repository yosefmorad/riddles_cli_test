import  readlineSync from  'readline-sync'
import createPlyer from './playerData/create.js'
import allRidd from './riddles/AllRiddles.js'
import measureSolveTime from './utiles/measureSolve.js';
import addSolveTime from "./utiles/solve_time.js"
import askRiddle from './utiles/askRiddle.js';



console.log("wellcome");
let  user_name =  readlineSync.question("enter your name")
const plyer  = createPlyer(user_name)
let allridd = allRidd 


for(let r of allridd){
    // askRiddle(r)
    
    
    
   addSolveTime(plyer , measureSolveTime(() => askRiddle(r)))
    

}
let total = 0
for (let t of plyer.times){
    total += t
    
}
console.log("good job " ,user_name);

let Average = total / 1000 /allridd.length
console.log("all time:" ,total / 1000  ,  "Average per unit" , Average);

