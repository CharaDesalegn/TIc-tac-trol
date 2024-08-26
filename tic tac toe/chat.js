const board = document.getElementById("board")
const my_img = document.getElementById("my_img")
const danger = [
    "You can't outsmart me!",
    "I'm two steps a,head!",
    "Not so fast!",
    "You thought you had me!",
    "Nice try, but not quite!",
    "I'm unbeatable!",
    "Try again, if you dare!",
    "Close, but not close enough!",
    "Think again!",
    "You won’t get past me!"
]
const nothing = [
    "This is getting interesting.",
    "We're neck and neck here.",
    "It’s anyone’s game right now.",
    "Looks like we're evenly matched.",
    "This is a close one.",
    "Neither of us is giving an inch.",
    "It's all still up in the air.",
    "We're both holding our ground.",
    "This could go either way.",
    "What a tight game so far!"
]
const win = [
    "And that's game!",
    "Told you I'd win!",
    "Checkmate! Oh wait, wrong game.",
    "I called it, victory is mine!",
    "You never stood a chance!",
    "Too easy, better luck next time!",
    "Winner, winner, I've got the Xs!",
    "That's how you do it!",
    "Game, set, match!",
    "All wrapped up and won!"
]
const loose = [
    "Well played, you got me!",
    "You outsmarted me this time!",
    "I have to admit, you won fair and square.",
    "Looks like you’re the winner!",
    "You beat me this round!",
    "Congratulations, you’ve won!",
    "I couldn’t keep up with you!",
    "You’ve outplayed me!",
    "You’ve taken the victory!",
    "You got the better of me!"
]
const opportunity = [
    "Maybe I should just play here...",
    "I think this spot is fine.",
    "This seems like a decent move.",
    "I guess I’ll go with this one.",
    "This spot looks okay, I guess.",
    "I’ll just put my mark here.",
    "Not sure if this is the best move, but here goes!",
    "This spot should do.",
    "I think this will work.",
    "I'll just go with this one."
]
const win_img = ["smiling_imp.png","sunglasses.png","kissing_heart.png","zany_face.png"]
const danger_img = ["smirk.png","wink.png","sweat_smile.png","yum.png","sunglasses.png"]
const opportunity_img = ["wink.png","sunglasses.png","face_with_rolling_eyes.png"]
const nothing_img = ["upside_down_face.png","face_with_rolling_eyes.png","confused.png","thinking_face.png"]
const loose_img = ["rage.png","weary.png","anguished.png","angry.png"]
function chat(){
    if (!Game_over){
    board.innerText = ""}
    let info = [check_h(0),check_v(0)]
    if (info[0]){
        if(info[0][1] == "danger"){
            write("danger")
        }
        if(info[0][1] == "opportunity"){
            write("opportunity")
        }
        
    }
    if (info[1]){
        if(info[1][1] == "danger"){
            write("danger")
        }
        if(info[1][1] == "opportunity"){
            write("opportunity")
        }
    }
    if(board.innerText == ""){
        write("nothing")
    }
}
function write(r){
    if(r == "danger"){
        my_img.src = danger_img[rand(false,danger_img.length)]
        board.innerText = danger[rand(false,10)]
    }
    if(r == "opportunity"){
        my_img.src = opportunity_img[rand(false,opportunity_img.length)]
        board.innerText = opportunity[rand(false,10)]
    }else if (r == "win"){
        my_img.src = win_img[rand(false,win_img.length)]
        board.innerText = win[rand(false,10)]
    }else if (r== "nothing"){
        board.innerText = nothing[rand(false,10)]
        my_img.src = nothing_img[rand(false,nothing_img.length)]
    }
    else if (r== "loose"){
        my_img.src = loose_img[rand(false,loose_img.length)]
        board.innerText = loose[rand(false,10)]

    }
    
}