navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-List')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
        rightNav.classList.toggle('class-resp-script');
        navList.classList.toggle('Men-Women-exclusive-script');
        navbar.classList.toggle('Men-Women-exclusive-script');

    })