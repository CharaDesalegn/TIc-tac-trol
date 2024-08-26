const my_window = document.getElementById("window")
const grid = []
const pos = []
let player = 0
let computer = 0
let Turn = 0
for (let i = 0;i < 3;i++){
    let row = []
    let roow = []
    for (let j = 0;j < 3;j++){
        b = document.createElement("button")
        row.push(b)
        roow.push(0)
        my_window.append(b)
    }
    pos.push(roow)
    grid.push(row)
}
// pos[0][0] = 5
function update(){
    // console.log(check_h(0),check_v(0))
    document.getElementById("you").innerText = player
    document.getElementById("computer").innerText = computer
    for (let i = 0;i < 3;i++){
        for (let j = 0;j < 3;j++){
            grid[i][j].addEventListener("click",()=>{
                if(pos[i][j] == 0 && Turn == 0){pos[i][j] = 1;Turn = 1}})   
        }
    }
    // console.table(pos)
    draw()
}
function draw(){
    for (let i = 0;i < 3;i++){
        for (let j = 0;j < 3;j++){
            if(pos[i][j]==1){
                grid[i][j].innerText = "O"
                grid[i][j].style.color = "#2980B9"
            }else if(pos[i][j]==5){
                grid[i][j].innerText = "X"
                grid[i][j].style.color = "#F1C40F"

            }else{
                grid[i][j].innerText = ""
            }
        }
    }
}
function reset(){
    if(level>1){
        if(check_v(1) == "O" || check_h(1) == "O" || check_x()[0] == 3 || check_x()[1] == 3){
            level-=1 
        }   
    }
    if(Game_over){
        for (let i = 0;i < 3;i++){
            for (let j = 0;j < 3;j++){
                pos[i][j] = 0
            }
        }
        Game_over = false
    }

}
function rand(per,len){
    if(per){
        return Math.floor(Math.random()*len)
    }else{
        return Math.floor(Math.random()*len)
    }
}