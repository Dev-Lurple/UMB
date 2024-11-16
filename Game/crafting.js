window.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        Scraper();
        Pickaxe();
        Axe();
        Furnace();
        Iron();
        Chair();
        Table();
    }
});
function Pickaxe(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "r" &&
           world.children[(i - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "r" &&
           world.children[(i - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "r" &&
           world.children[(i - world_row + (i % world_row) - (i % world_row)) + 3].innerText == "r" &&
           world.children[(i + 4)].innerText == "r" &&
           world.children[(i + 2)].innerText == "W" &&
           world.children[((i + 2) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row))].innerText == "W" &&
           world.children[(((i + 2) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row))) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row)].innerText == "W"
        ){
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 1, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 2, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 3, "g", "green");
            ReplaceTile(i + 4, "g", "green");
            ReplaceTile(i + 2, "g", "green");
            ReplaceTile((i + 2) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row), "/", "orange");
            ReplaceTile(((i + 2) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row)) + world_row + ((i + 2) % world_row) - ((i + 2) % world_row), "g", "green");
        }
    }
}
function Axe(){ 
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row))].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "r" &&
            world.children[(i + 2)].innerText == "r" &&
            world.children[(i + 1)].innerText == "W" &&
            world.children[((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row))].innerText == "W" &&
            world.children[(((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row))) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row)].innerText == "W"
        )
        {
            ReplaceTile(i, "g", "green")
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row), "g", "green")
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 1, "g", "green")
            ReplaceTile(i + 2, "g", "green")
            ReplaceTile(i + 1, "g", "green")
            ReplaceTile((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row), "\\", "orange")
            ReplaceTile(((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row)) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row), "g", "green")
        }
    }
}
function Furnace(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row))].innerText == "r" &&
            world.children[((i - world_row + (i % world_row) - (i % world_row)) + 1) - world_row + (i % world_row) - (i % world_row)].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "r" &&
            world.children[(i + 2)].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row) + 1)].innerText == "t" &&
            world.children[(i + 1)].innerText == "c" 
        )
        {
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row) + 1) - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 2, "g", "green");
            ReplaceTile(i + 2, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 1, "f", "grey");
            ReplaceTile(i + 1, "g", "green");
        }
    }
}
function Iron(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "f" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row) + 1)].innerText == "f" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row) + 2)].innerText == "f" &&
            world.children[i + 3].innerText == "f" &&
            world.children[((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row))].innerText == "f" &&
            world.children[((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row) + 1)].innerText == "f" &&
            world.children[i + 1].innerText == "c" &&
            world.children[i + 2].innerText == "i" 
        )        
        {
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 1, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row) + 2, "g", "green");
            ReplaceTile(i + 3, "g", "green");
            ReplaceTile((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row), "g", "green");
            ReplaceTile((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row) + 1, "g", "green");
            ReplaceTile(i + 1, "g", "green");
            ReplaceTile(i + 2, "🝙", "#ababab");
        }
    }
}
function Scraper(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row))].innerText == "r" &&
            world.children[((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)].innerText == "r" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "r" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "r" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "r" &&
            world.children[i + 2].innerText == "r" && 
            world.children[i + 1].innerText == "W" && 
            world.children[((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row))].innerText == "W" && 
            world.children[(((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row))) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row)].innerText == "W" 
        ){
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row)) + 1, "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row)) + 2, "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) + 1, "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) + 2, "g", "green");
            ReplaceTile(i + 2, "g", "green");
            ReplaceTile(i + 1, "g", "green");
            ReplaceTile((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row), "!", "orange");
            ReplaceTile(((i + 1) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row)) + world_row + ((i + 1) % world_row) - ((i + 1) % world_row), "g", "green");
        }
    }
}
function Chair(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "W" && 
            world.children[(i - world_row + (i % world_row) - (i % world_row))].innerText == "W" &&
            world.children[((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)].innerText == "W" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row)].innerText == "W" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "W" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "W" &&
            world.children[i + 2].innerText == "W"
        ){
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) + 1, "⑁", "orange");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) + 2, "g", "green");
            ReplaceTile(i + 2, "g", "green");
        }
    }
}
function Table(){
    for (let i = 0; i < world_size; i++) {
        if(world.children[i].innerText == "W" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row))].innerText == "W" &&
            world.children[((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)].innerText == "W" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) + 1].innerText == "W" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) + 2].innerText == "W" &&
            world.children[(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row)) + 3].innerText == "W" &&
            world.children[(i - world_row + (i % world_row) - (i % world_row)) + 3].innerText == "W" &&
            world.children[i + 3].innerText == "W" 
        ){
            ReplaceTile(i, "g", "green");
            ReplaceTile(i - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) - world_row + (i % world_row) - (i % world_row), "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row) + 1, "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row) + 2, "g", "green");
            ReplaceTile(((i - world_row + (i % world_row) - (i % world_row))) - world_row + (i % world_row) - (i % world_row) + 3, "g", "green");
            ReplaceTile((i - world_row + (i % world_row) - (i % world_row)) + 3, "g", "green");
            ReplaceTile(i + 3, "┬", "orange");
        }        
    }
}