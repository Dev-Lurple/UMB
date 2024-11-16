let pIndex;
window.addEventListener("load", () =>{
    if(localStorage.player_index === "undefined")
        pIndex = Math.floor(Math.random() * world.children.length);
    else    
        pIndex = Number(localStorage.player_index);

    world.children[pIndex].style.color = "white";
    world.children[pIndex].innerText = "p";

    WaterReaction();
    itemAmntVisual.innerText = itemAmnt.toString().replace(/,/g, "");
});
window.addEventListener("keydown", function(e){
    Scrape(e.key);
    if(e.key == "a"){
        if(pIndex !== 0 && pIndex % world_row !== 0)
           pIndex--;
        // Restore Original Tile
        ReplaceTile(pIndex + 1, tiles[pIndex + 1].innerText, tiles[pIndex + 1].style.color)
    }
    if(e.key == "d"){
        if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1)
            pIndex++;
        // Restore Original Tile
        ReplaceTile(pIndex - 1, tiles[pIndex - 1].innerText, tiles[pIndex - 1].style.color)
    }
    if(e.key == "w"){
        if(pIndex > world_row - 1)
            pIndex -= (world_row + (pIndex % world_row))  - (pIndex % world_row);
        // Restore Original Tile
        ReplaceTile(pIndex + world_row + (pIndex % world_row) - (pIndex % world_row), tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText, tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color);
    }
    if(e.key == "s"){
        if(pIndex < (world_size - world_row))
            pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
        // Restore Original Tile
        ReplaceTile(pIndex - world_row + (pIndex % world_row) - (pIndex % world_row), tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText, tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color)
    }
    //
    Mine(e.key, "t", "\\", "orange", "W");
    Mine(e.key, "W", "\\", "orange");

    Mine(e.key, "i", "/", "#ababab");
    Mine(e.key, "c", "/", "#2e2e2e");
    //
    WaterReaction();
    //
    PlaceDown(e.key, "W", "orange");
    PlaceDown(e.key, "r", "grey");
    PlaceDown(e.key, "s", "lime");
    PlaceDown(e.key, "c", "#2e2e2e");
    PlaceDown(e.key, "i", "#ababab");
    PlaceDown(e.key, "f", "grey");
    PlaceDown(e.key, "🝙", "#ababab");
    PlaceDown(e.key, "⑁", "orange");
    PlaceDown(e.key, "┬", "orange");
    // 
    PickUp("r", "grey", 1, true);
    PickUp("/", "orange", 6);
    PickUp("\\", "orange", 6);
    PickUp("f", "grey", 1, true);
    PickUp("🝙", "#ababab", 1, true)
    PickUp("!", "orange", 9)
    PickUp("⑁", "orange", 1, true)
    PickUp("┬", "orange", 1, true)
    //
    world.children[pIndex].style.color = "white";
    world.children[pIndex].innerText = "p";
    //
    itemAmntVisual.innerText = itemAmnt.toString().replace(/,/g, "");
});
function WaterReaction(){
    if(tiles[pIndex].innerText === "w"){
        let randomDirection = Math.floor(Math.random() * 4);
        switch(randomDirection){
            case 0:
                // LEFT
                if(pIndex !== 0 && pIndex % world_row !== 0)
                    pIndex--;  
                ReplaceTile(pIndex + 1, tiles[pIndex + 1].innerText, tiles[pIndex + 1].style.color);
                setTimeout(() =>{WaterReaction();},250)
                break;
            case 1:    
                // RIGHT
                if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1)
                    pIndex++;
                ReplaceTile(pIndex - 1, tiles[pIndex - 1].innerText, tiles[pIndex - 1].style.color);
                setTimeout(() =>{WaterReaction();},250)
                break;
            case 2:     
                // UP
                if(pIndex > world_row - 1)
                    pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
                ReplaceTile(pIndex + world_row + (pIndex % world_row) - (pIndex % world_row), tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText, tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].style.color);
                setTimeout(() =>{WaterReaction();},250)
                break;
            case 3:
                // DOWN
                if(pIndex < (world_size - world_row))
                    pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
                ReplaceTile(pIndex - world_row + (pIndex % world_row) - (pIndex % world_row), tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText, tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].style.color);
                setTimeout(() =>{WaterReaction();},250)
                break;
        }
        world.children[pIndex].style.color = "white";
        world.children[pIndex].innerText = "p";
    }
}
function PickUp(itm, clr, count, stackable){
    if(tiles[pIndex].innerText == itm){
        for (let i = 0; i < inventory.children.length; i++) {
            if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == itm && stackable){
                inventory.children[i].innerText = itm;
                inventory.children[i].style.color = clr;

                // Durability
                if(count > 1)
                    itemAmnt[i] = count;
                else
                    itemAmnt[i]++;
                break; 
            }
        }
        ReplaceTile(pIndex, "g", "green");
    } 
}
function PlaceDown(key, itm, clr){
    // EXCEPTIONS (so tiles don't get overridden)
    if(world.children[pIndex].innerText != "W" && 
    world.children[pIndex].innerText != "r" &&
    /* world.children[pIndex].innerText != "s"  && */
    world.children[pIndex].innerText != "c" &&
    world.children[pIndex].innerText != "i" &&
    world.children[pIndex].innerText != "f" && 
    world.children[pIndex].innerText != "🝙" && 
    world.children[pIndex].innerText != "⑁" && 
    world.children[pIndex].innerText != "┬"){
        if(key == "a")
            if(pIndex !== world_size - 1 && pIndex % world_row !== world_row - 1 && 
                inventory.children[currSlot - 1].innerText == itm){
                pIndex++;
                ReplaceTile(pIndex - 1, itm, clr);
                if(inventory.children[currSlot - 1].innerText == "s")
                    setTimeout(() => {ReplaceTile(pIndex - 1, "t", "brown");}, 10000);
            }
        if(key == "d")
            if(pIndex !== 0 && pIndex % world_row !== 0 && 
                inventory.children[currSlot - 1].innerText == itm){
                pIndex--;
                ReplaceTile(pIndex + 1, itm, clr);
                if(inventory.children[currSlot - 1].innerText == "s")
                    setTimeout(() => {ReplaceTile(pIndex + 1, "t", "brown");}, 10000);
            }
        if(key == "w")
            if(pIndex < (world_size - world_row) &&
            inventory.children[currSlot - 1].innerText == itm){
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
                ReplaceTile(pIndex - world_row + (pIndex % world_row) - (pIndex % world_row), itm, clr);
                if(inventory.children[currSlot - 1].innerText == "s")
                    setTimeout(() => {ReplaceTile(pIndex - world_row + (pIndex % world_row) - (pIndex % world_row), "t", "brown");}, 10000);
            }
        if(key == "s")
            if(pIndex > world_row - 1 &&
                inventory.children[currSlot - 1].innerText == itm){
                pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
                ReplaceTile(pIndex + world_row + (pIndex % world_row) - (pIndex % world_row), itm, clr);
                if(inventory.children[currSlot - 1].innerText == "s")
                    setTimeout(() => {ReplaceTile(pIndex + world_row + (pIndex % world_row) - (pIndex % world_row), "t", "brown");}, 10000);
            }
  
        if(key == "a" || key == "d" || key == "w" || key == "s"){
            if(inventory.children[currSlot - 1].innerText == itm){
                if(itemAmnt[currSlot - 1] == 1){
                    inventory.children[currSlot - 1].innerText = "0";
                    inventory.children[currSlot - 1].style.color = "white";
                }
                itemAmnt[currSlot - 1]--;
            }
        }
    }
}

function Mine(key, itm, tool, clr, discrete){
    if(world.children[pIndex].innerText == itm){
        if(inventory.children[currSlot - 1].innerText == tool){
            // COLLECT
            for (let i = 0; i < inventory.children.length; i++) {
                if(inventory.children[i].innerText == "0" || inventory.children[i].innerText == itm && !discrete || inventory.children[i].innerText == discrete){
                    if(!discrete){
                        inventory.children[i].innerText = itm;
                        inventory.children[i].style.color = clr;
                    }else{
                        inventory.children[i].innerText = discrete;
                        inventory.children[i].style.color = clr;
                    }

                    itemAmnt[i]++;
                    break;
                }
                // Lose Durabilty
                if(inventory.children[i].innerText == tool){
                    itemAmnt[currSlot - 1]--;
                    if(itemAmnt[currSlot - 1] < 1){
                        inventory.children[currSlot - 1].innerText = "0";
                        inventory.children[currSlot - 1].style.color = "white";
                    }
                }
            }
            ReplaceTile(pIndex, "g", "green")
        }
        if(key == "a")
            pIndex++;
        if(key == "d")    
            pIndex--;
        if(key == "w")
            pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
        if(key == "s")
            pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
    }
}


function Scrape(dir){
    window.addEventListener("keydown", function(e){
        if(inventory.children[currSlot - 1].innerText == "!"){
            // Detect No Numbers
            if(!isFinite(e.key)){
                if(tiles[pIndex - 1].innerText == "r")
                    world.children[pIndex - 1].innerText = e.key[0];
                if(tiles[pIndex + 1].innerText == "r")
                    world.children[pIndex + 1].innerText = e.key[0];
                if(tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "r")
                    world.children[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = e.key[0];
                if(tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "r")
                    world.children[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText = e.key[0];
            }
        }
    });
    if(inventory.children[currSlot - 1].innerText == "!"){
        // Block Movement
        if(dir == "a")
            if(tiles[pIndex - 1].innerText == "r")
                pIndex++;
        if(dir == "d")
            if(tiles[pIndex + 1].innerText == "r")
                pIndex--;
        if(dir == "w")
            if(tiles[pIndex - world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "r")
                pIndex += (world_row + (pIndex % world_row)) - (pIndex % world_row);
        if(dir == "s")
            if(tiles[pIndex + world_row + (pIndex % world_row) - (pIndex % world_row)].innerText == "r")
                pIndex -= (world_row + (pIndex % world_row)) - (pIndex % world_row);
    }
}