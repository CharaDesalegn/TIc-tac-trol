let Game_over = false
let level = 3
function AI(){
    update()
    if(Turn == 1 && !Game_over){
        level_indx = rand(true,level)
        if(level_indx==0){
            chat()
        }else if(!Game_over){write("nothing")}
        Game_over_check()
        if(!Game_over){
            if (level_indx == 0){    
                main_brain_where_all_the_good_stuff_happen()
            }else{
                let posible_place = []
                for (let i = 0;i < 3;i++){
                    for (let j = 0;j < 3;j++){
                        if(pos[i][j] == 0){
                            posible_place.push([i,j])
                        }
                    }
                }
                if(posible_place.length != 0){
                    let indx = Math.floor(Math.random()*posible_place.length)
                    pos[posible_place[indx][0]][posible_place[indx][1]] = 5
                    Turn = 0
                }
            }
        }
    }
    Game_over_check()
   
}
function Game_over_check(){
    if(check_v(1) == "X" || check_h(1) == "X" || check_x()[0] == 15  || check_x()[1] == 15){
        if(!Game_over){
        write("win")
        computer+=5
    }
        Game_over = true

    }else if(check_v(1) == "O" || check_h(1) == "O" || check_x()[0] == 3 || check_x()[1] == 3){
        if(!Game_over){
        write("loose")
        player+=5
    }
        Game_over = true
    }
    for (let i = 0;i< 3;i++){
        for (let j = 0;j < 3;j++){
            if(pos[i][j]==0){
                return
            }
        }
    }
    Game_over = true

}

function draw_h(j){
    for (let i = 0;i < 3;i++){
        if(pos[j][i]==0 && Turn == 1){
            pos[j][i] = 5
            Turn = 0
        }
    }
}
function draw_v(j){
    for (let i = 0;i < 3;i++){
        if(pos[i][j]==0 && Turn == 1){
            pos[i][j] = 5
            Turn = 0
        }
    }
}
function draw_x(j){
    for (let i = 0;i < 3;i++){
        if (pos[i][Math.abs(j-i)] == 0)
            pos[i][Math.abs(j-i)] = 5
            Turn = 0
    }
    update()
}
function check_h(reason = 0){
    let posible_statuses = []
    for (let i = 0;i < 3;i++){
        let status = 0
        for (let j = 0;j < 3;j++){
            status+= pos[i][j]
            // console.log(posible_statuses,pos)
        }
        if(status == 2 && reason == 0){
            posible_statuses.push([i,"danger","h"])
        }else if(status == 10 && reason == 0){
            posible_statuses.push([i,"opportunity","h"])
        }else if(status == 15 && reason == 1){
            return "X"
        }else if(status == 3 && reason == 1){
            return "O"
        }
    }
    if (reason == 0 && posible_statuses.length != 0){
        let respose = posible_statuses[0]
        for (let i = 0;i < posible_statuses.length;i++){
            if(posible_statuses[i][1] == "opportunity"){
                return posible_statuses[i]
            }
        }
        // console.log(reason,posible_statuses)
        return respose
    }
}
function check_v(reason = 0){
    let posible_statuses = []
    for (let i = 0;i < 3;i++){
        let status = 0
        for (let j = 0;j < 3;j++){
            status+= pos[j][i]
            // console.log(posible_statuses,pos)
            
        }
        if(status == 2 && reason == 0){
            posible_statuses.push([i,"danger","v"])
        }else if(status == 10 && reason == 0){
            posible_statuses.push([i,"opportunity","v"])
        }else if(status == 15 && reason == 1){
            return "X"
        }else if(status == 3 && reason == 1){
            return "O"
        }
        
    }
    if (reason == 0 && posible_statuses.length != 0){
        let respose = posible_statuses[0]
        for (let i = 0;i < posible_statuses.length;i++){
            if(posible_statuses[i][1] == "opportunity"){
                return posible_statuses[i]
            }
        }
        // console.log(reason,posible_statuses)
        return respose
    }
}
function check_x(reason = 0){
    let status1 = 0
    for (let i = 0;i < 3;i++){
        status1 += pos[i][i]
    }
    let status2 = 0
    for (let i = 0;i < 3;i++){
        status2 += pos[i][2-i]
    }
    return[status1,status2]
}
function main_brain_where_all_the_good_stuff_happen(){
    let info_checked = [check_h(),check_v()]
    if(check_x()[0] == 10){
        draw_x(0)
        return
    }if(check_x()[1] == 10){
        draw_x(2)
        return
    }if(info_checked[1]){
        if(info_checked[1][1] == "opportunity"){
            draw_v(check_v()[0])
            return
        }
    }if (info_checked[0]){
        if(info_checked[0][1] == "opportunity"){
        draw_h(check_h()[0])
        return

        }
    }if(info_checked[1]){
        draw_v(check_v()[0])
        return
    }else if (info_checked[0]){
        draw_h(check_h()[0])
        return
    }
    if(check_x()[0] == 2){
        draw_x(0)
        return
    }if(check_x()[1] == 2){
        draw_x(2)
        return
    }
    if(Turn == 1){
        let posible_place = []
        for (let i = 0;i < 3;i++){
            for (let j = 0;j < 3;j++){
                if(pos[i][j] == 0){
                    posible_place.push([i,j])
                }
            }
        }
        if(posible_place.length != 0){
            let indx = Math.floor(Math.random()*posible_place.length)
            pos[posible_place[indx][0]][posible_place[indx][1]] = 5
            Turn = 0
        }
    }
}
function Game(){
    AI()
    console.log(level)
    if(!Game_over){
    document.getElementById("next").style.boxShadow = "1px 1px 50px black"
    }else{
        document.getElementById("next").style.boxShadow = "1px 1px 50px yellow"
        }
}











setInterval(Game,500)
