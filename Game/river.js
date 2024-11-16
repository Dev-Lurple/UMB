// Set the random colors initially
river.forEach((e) =>{
    let greens = Math.floor(Math.random() * (255 - 210 + 1)) + 210;
    let blues = Math.floor(Math.random() * (240 - 220 + 1)) + 220;
    e.style.color = `rgb(0, ${greens}, ${blues})`;
});
setInterval(() => {
    // Set the random colors every 1 second
    river.forEach((e) =>{
        if(e.innerText == "w"){ 
            let greens = Math.floor(Math.random() * (255 - 210 + 1)) + 210;
            let blues = Math.floor(Math.random() * (240 - 220 + 1)) + 220;
            e.style.color = `rgb(0, ${greens}, ${blues})`;
        }
    });
}, 1000);

Fish();
function Fish(){
    let fishAmnt = 5;
    if(localStorage.biome == 4){
        fishAmnt = 100;
    }
    let initialIndexes = [];
    for (let index = 0; index < fishAmnt; index++) {
        let rndmWaterTile = Math.floor(Math.random() * river.length);
        river[rndmWaterTile].innerText = '𓆟';
        initialIndexes.push(rndmWaterTile);
    }
    initialIndexes.forEach((f, i) =>{
        setInterval(() => {
            let randomDirection = Math.floor(Math.random() * 4);
            switch(randomDirection){
                case 0:
                    if(initialIndexes[i] !== 0){
                        initialIndexes[i]--;
                        // LEFT
                        river[initialIndexes[i] + 1].innerText = 'w';
                    }
                    break;
                case 1:
                    if(initialIndexes[i] !== river.length){
                        initialIndexes[i]++;
                        // RIGHT
                        river[initialIndexes[i] - 1].innerText = 'w';
                    }
                    break;
                case 2:
                    if(initialIndexes[i] < river.length - world_row){
                        initialIndexes[i] += (world_row + (initialIndexes[i] % world_row))  - (initialIndexes[i] % world_row);
                        // DOWN
                        river[initialIndexes[i] - world_row + (initialIndexes[i] % world_row) - (initialIndexes[i] % world_row)].innerText = 'w';
                    }
                    break;
                case 3:
                    if(initialIndexes[i] > world_row){
                        initialIndexes[i] -= (world_row + (initialIndexes[i] % world_row))  - (initialIndexes[i] % world_row);
                        // UP
                        river[initialIndexes[i] + world_row + (initialIndexes[i] % world_row) - (initialIndexes[i] % world_row)].innerText = 'w';
                    }
                    break;
                }
                setTimeout(() => {//⛏
                    river[initialIndexes[i]].innerText = '𓆟';
                }, 150);
                setTimeout(() => {
                    river[initialIndexes[i]].innerText = '𓆝';
                }, 500);
        }, 500);
    });
}