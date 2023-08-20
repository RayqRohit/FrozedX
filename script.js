(function(){


    let social = document.querySelectorAll('.social div');

    social.forEach(function(social,index){
        social.style.animation = `moveIn 1s cubic-bezier(0.51, 0.92, 0.24, 1.20) forwards ${index/5}s`
    })



    let rocketPieces = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')
    
    let triggerStart = window.innerHeight / 5;
    
    let rocketOffsetTop = rocket.offsetTop;
    
    let thirdOffsetTop = rocketPieces[2].offsetTop;
    
    document.addEventListener('scroll', (e) => {
      if(window.scrollY > (rocketOffsetTop - triggerStart)) {
        rocketPieces[0].classList.add('active');
        rocketPieces[1].classList.add('active');
      } else {
        rocketPieces[0].classList.remove('active');
        rocketPieces[1].classList.remove('active');
      }
    
      if(window.scrollY > (thirdOffsetTop - triggerStart)) {
        rocketPieces[2].classList.add('active');
      } else {
        rocketPieces[2].classList.remove('active');
      }
    })
    




}())