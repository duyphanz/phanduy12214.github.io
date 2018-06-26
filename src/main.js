var speak = [
    'Chào bạn',
    'Bạn gì ơi',
    'Đi đâu đó',
    'Sao không trả lời',
    'Thôi chào nha'
];


function getFaceId(){
    if(faceId === 5) {
        faceId = 0
    }
    return ++faceId
}

function playSong() {
    score = 0
    text.innerHTML = 
    `Quẩy lên la la la
    (Bắt đầu đấm vào mặt để tính điểm)
    `
    
    var song = document.getElementById('mySong')
    if (isPlaying) {
        song.pause()
        isPlaying = !isPlaying
    } else {
        song.play()
        isPlaying = !isPlaying
    }
    
    for(let i = 1; i < 6; i++){
        let faceId = 'img' + i
        let face = document.getElementById(faceId)
        face.onclick = function(){
            playGame()
        }
    }

}

function playKiss(id) {
    // text.innerHTML = 'Kissing you Muahhhhhh'
    var kiss = document.getElementById('myKiss')
    kiss.play()
    console.log(speaking(id))
    responsiveVoice.speak(speaking(id), "Vietnamese Male");
}

function playGame(id) {
    // text.innerHTML = 'Hahahahhaaaa'
    _score.innerHTML = ++score + ' Điểm'
    var punch = document.getElementById('myPunch')
    punch.play()

}

function speaking(id) {
    --id
    console.log(id)
    switch (id) {
        case 0:
            return speak[id]
            break;
        case 1:
            return speak[id]
            break;
        case 2:
            return speak[id]
            break;
        case 3:
            return speak[id]
            break;
        case 4:
            return speak[id]
            break;
        
    }
}

function showFace() {
    
    var Id = getFaceId()
    // console.log('Id ' + Id)
    if(Id != 1)
    {
        let temp = Id - 1
        // console.log(temp)
        let oldId = 'img' + temp
        // console.log('old' + oldId)
        let oldFace = document.getElementById(oldId)
        oldFace.hidden = true
    }
    if(Id === 1){
        let _oldFace = document.getElementById('img5')
        _oldFace.hidden = true
    }

    var faceId = 'img' + Id
    

    // console.log(faceId)
    var face = document.getElementById(faceId)
    face.hidden = false
}

function showAllFace() {
    text.innerHTML = 'Đấm vào mặt để nhận quà nhé!'
 
    clearInterval(myInterval)
    for(let i = 1; i < 6; i++){
        let faceId = 'img' + i
        let face = document.getElementById(faceId)
        face.hidden = false
        face.onclick = function(){
            playKiss(i)
        }
    }
}