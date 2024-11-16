let reachedL = false;
let reachedR = false;
let reachedU = false;
let reachedD = false;
// If the player is standing on the edge tile at the start
window.addEventListener("load", () =>{
    if(pIndex % world_row == 0)
        reachedL = true;
    if(pIndex % world_row == world_row - 1)
        reachedR = true;
    if(pIndex < world_row - 1)
        reachedU = true;
    if(pIndex > (world_size - world_row))
        reachedD = true;
});
window.addEventListener("keyup", function(){
    if(pIndex % world_row == 0)
        reachedL = true;
    if(pIndex % world_row == world_row - 1)
        reachedR = true;
    if(pIndex < world_row - 1)
        reachedU = true;
    if(pIndex > (world_size - world_row) )
        reachedD = true;
});
window.addEventListener("keypress", function(){
    if(pIndex % world_row !== 0)
        reachedL = false;
    if(pIndex % world_row !== world_row - 1)
        reachedR = false;
    if(pIndex > world_row - 1)
        reachedU = false;
    if(pIndex < (world_size - world_row) )
        reachedD = false;
});
window.addEventListener("keydown", function(e){
    if(e.key == "a" && reachedL){
        pIndex += world_row - 1;
        Reload();
    }
    if(e.key == "d" && reachedR){
        pIndex -= pIndex % world_row;
        Reload();
    }
    if(e.key == "w" && reachedU){
        pIndex = (world_size - world_row) + (pIndex % world_row);
        Reload();
    }
    if(e.key == "s" && reachedD){
        pIndex = pIndex % world_row;
        Reload();
    }
});
function Reload(){
    // STORE THE PLAYERS POSITION
    localStorage.setItem("player_index", pIndex);
    // STORE INVENTORY
    let inventorySlots;
    for (let i = 0; i < inventory.children.length; i++)
        inventorySlots += inventory.children[i].innerText; 
    localStorage.setItem("inventory", inventorySlots.replace("undefined", ''));
    // STORE ITEM COUNTS
    localStorage.setItem("inv_1", itemAmnt[0]);
    localStorage.setItem("inv_2", itemAmnt[1]);
    localStorage.setItem("inv_3", itemAmnt[2]);
    localStorage.setItem("inv_4", itemAmnt[3]);
    localStorage.setItem("inv_5", itemAmnt[4]);
    localStorage.setItem("inv_6", itemAmnt[5]);
    localStorage.setItem("inv_7", itemAmnt[6]);
    localStorage.setItem("inv_8", itemAmnt[7]);
    // ACTIVE SLOT
    localStorage.setItem("active_slot", currSlot);
    // SELECT RNDM BIOME
    const totalBiomes = 7;
    let randomBiome = Math.floor(Math.random() * (totalBiomes - 1 + 1)) + 1;
    localStorage.setItem("biome", randomBiome);

    this.window.location.reload();
}