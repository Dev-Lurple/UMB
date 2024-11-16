function RndmTile(){
    return Math.floor(Math.random() * (world_size - 1));
}
function ReplaceTile(index, value, clr){
    tiles[index].innerText = world.children[index].innerText = value;
    tiles[index].style.color = world.children[index].style.color = clr;
}