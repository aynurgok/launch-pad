window.addEventListener('keydown', function(e) {
    const audio =  document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio && !key) {
        return;
    }else {
        audio.play();
        audio.currentTime = 0;
    }
    
});

