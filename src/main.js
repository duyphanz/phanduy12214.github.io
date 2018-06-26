var speak = [
    'Chúc Như sống lâu nghìn tuổi',
    'Mong Như mau thành chính quả',
    'Chúc mày luôn vui vẻ và xinh đẹp nha mãi yêu',
    'Chưa đủ điểm thì đừng đòi quà',
    'Thôi chào nha'
];

var rs = [
    'Đen thôi, đỏ quên đi -_-',
    'Hay là thử thêm phát nữa ta?',
    'Trò này ez, tại bố không thích nhận quà thôi!',
    'Click banh chuột mà không win, really?'
]

function getRandom() {
    return Math.floor(Math.random()*4)
}

function getFaceId(){
    if(faceId === 5) {
        faceId = 0
    }
    return ++faceId
}

function playSong() {
    
    text.innerHTML = 'Quẩy lên la la la'
    
    responsiveVoice.speak('Quẩy lên la la la', "Vietnamese Male", {volume: 1});
    text1.innerHTML = "Đấm vào mặt đủ 150 điểm liên hệ nhận quà"
    var song = document.getElementById('mySong')
    song.volume = 0.5
    song.play()
   
    for(let i = 1; i < 6; i++){
        let faceId = 'img' + i
        let face = document.getElementById(faceId)
        face.onclick = function(){
            playGame()
        }
    }

    if(!myInterval){
        myInterval = setInterval(() => {
            showFace()
            let temp = ' [ Còn ' +  timeRemaining + ' giây ]'
            text.innerHTML = 'Quẩy lên la la la' + temp
            timeRemaining -= 2
        }, 2000)
    }

}

function playKiss(id) {
    text.innerHTML = '[' + speaking(id) + ']'
    var kiss = document.getElementById('myKiss')
    
    kiss.play()
    responsiveVoice.speak(speaking(id), "Vietnamese Male", {volume: 1});
    
    
}

function playGame() {
    // text.innerHTML = 'Hahahahhaaaa'
    _score.innerHTML = ++score + '/150'

    _score.className = "animated rubberBand infinite"
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
    text.innerHTML = 'Đấm tiếp vào mặt để nhận lời chúc nhé!'
    responsiveVoice.speak('Đấm tiếp vào mặt để nhận lời chúc nhé', "Vietnamese Male", {volume: 1});
 
    
    for(let i = 1; i < 6; i++){
        let faceId = 'img' + i
        let face = document.getElementById(faceId)
        face.hidden = false
        face.onclick = function(){
            playKiss(i)
        }
    }
}