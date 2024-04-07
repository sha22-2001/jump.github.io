let character = document.querySelector('#character');
let block = document.querySelector('#block');
let gameover = document.querySelector('.gameover');
let score = document.querySelector('.gameover h5');
let lose = false;
let cnt=0;
window.addEventListener("keypress",function(event){
    //console.log("click");
    
    if (event.key === " " && lose == false) {
        character.style.animation = "1s jump infinite ease-in-out";
    }
    this.setTimeout(function(){
        if(character.style.animation != "") character.style.animation = "";
    },1000)
     
});


function checkCollision() {
    let characterRect = character.getBoundingClientRect();
    let blockRect = block.getBoundingClientRect();
    if (
        characterRect.top < blockRect.bottom &&
        characterRect.bottom > blockRect.top &&
        characterRect.left < blockRect.right &&
        characterRect.right > blockRect.left
    ) {
        
        block.style.left = `${blockRect.left/6}px`;
        //console.log(blockRect.right);
        return true; // Collision detected
    } else {
        return false; // No collision
    }
}

block.addEventListener("animationiteration", function() {
    cnt++; 
    console.log(cnt);
});

var dead = setInterval(function() {
    if (checkCollision()) {
        block.style.animation="none";
        gameover.style.display="block";
        character.style.backgroundImage = "url(img/ded.png)";
        score.innerHTML=`score : ${cnt*10}`;
    }
    
}, 10); 