function showStats(player){
let total = 0
for (let t of player.times)
    total += t
    
return total / 1000
}

export default showStats