document.body = document.createElement("body");
const world_size = 1600;
const world_row = 64;

let treeAmnt;
let rockAmnt;
let woodAmnt;

// Normal
if(localStorage.biome == 1){
    treeAmnt = 400;
    rockAmnt = 15;
    woodAmnt = 12;
}
// Weathered
if(localStorage.biome == 2){
    treeAmnt = 50;
    rockAmnt = 5;
    woodAmnt = 0;
}
// Foresty
if(localStorage.biome == 3){
    treeAmnt = 900;
    rockAmnt = 25;
    woodAmnt = 300;
}
// Ocean
if(localStorage.biome == 4){
    treeAmnt = 0;
    rockAmnt = 0;
    woodAmnt = 0;
}
// Desert, Icy, Cave
let tiles = [];
let river = [];
const world = document.createElement("p");
document.body.appendChild(world);
    for (let index = 0; index < world_size + 1; index++) {
        if (index % world_row === 0)
            world.innerHTML += "\n";
        
        if(localStorage.biome < 5){
            let greenShade = Math.floor(Math.random() * (252 - 150 + 1)) + 150;
            world.innerHTML += `<span style="color:rgb(0, ${greenShade}, 0);">g</span>`;
        }
        // Desert
        if(localStorage.biome == 5){
            let orangeShade = Math.floor(Math.random() * (252 - 150 + 1)) + 150;
            world.innerHTML += `<span style="color:rgb(250, ${orangeShade}, 0);">s</span>`;
        }
        // Icy
        if(localStorage.biome == 6){
            let whiteShade = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
            world.innerHTML += `<span style="color:rgb(${whiteShade}, ${whiteShade}, ${whiteShade});">s</span>`;
        }
        // Cave
        if(localStorage.biome == 7)
            world.innerHTML += `<span style="color:rgb(${28}, ${28}, ${28});">s</span>`;

        tiles.push(world.children[index]);
    }
tiles.pop();
world.lastChild.remove();
    
if(localStorage.biome == 1 || localStorage.biome == 2 || localStorage.biome == 3){
    NewTile("t", "", treeAmnt, "g");
    NewTile("r", "grey", rockAmnt, "g");
    NewTile("W", "orange", woodAmnt, "g");
    Water();
}
// Ocean
if(localStorage.biome == 4){
    Water();
}
// Desert
if(localStorage.biome == 5){
    NewTile("C", "green", 50, "s");
}
// Icy
if(localStorage.biome == 6){
    NewTile("I", "blue", 600, "s");
}
// Cave
if(localStorage.biome == 7){
    NewTile("i", "#ababab", 50, "s");
    NewTile("c", "#2e2e2e", 50, "s");
    rockAmnt = 450;
    NewTile("r", "grey", rockAmnt, "s");
}

function Water() {
    let startingIndex = RndmTile();
    
    let min_s = world_row;
    let max_s = world_row * 7;
    // Ocean
    if(localStorage.biome == 4){
        startingIndex = -1;
        min_s = world_row * 50;
        max_s = world_row * 50;
    }
    let randomSize = Math.floor(Math.random() * (max_s - min_s + 1)) + min_s;

    // Horizontal
    for (let i = 1; i <= randomSize; i++) {
        if(startingIndex + i <= (world_size - 1)){
            ReplaceTile(startingIndex + i, "w", "cyan");
            river.push(world.children[startingIndex + i]);
        }
    }
    // Clumps
    let randomAmnt_c = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    for (let index = 0; index < randomAmnt_c; index++) {
        let startingIndex_c = Math.floor(Math.random() * ((world_size - 1) - (world_row - 1)));

        ReplaceTile(startingIndex_c, "w", "cyan");
        ReplaceTile(startingIndex_c + 1, "w", "cyan");
        ReplaceTile(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row), "w", "cyan");
        ReplaceTile(startingIndex_c + (world_row + (startingIndex_c % world_row)) - (startingIndex_c % world_row) + 1, "w", "cyan");
    }
}

function NewTile(type, clr, amnt, canReplace) {
    for (let index = 0; index < amnt; index++) {
        let rndmIndex = RndmTile();
        if (world.children[rndmIndex].innerText == canReplace) {
            if(type == "t"){
                let rndmClr = Math.floor(Math.random() * 100);
                if(rndmClr < 90)
                    tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = "brown";
                else
                    tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = "maroon";
            }
            else
                tiles[rndmIndex].style.color = world.children[rndmIndex].style.color = clr;
            tiles[rndmIndex].innerText = world.children[rndmIndex].innerText = type;
        }
    }
}