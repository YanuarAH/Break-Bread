//toggle  class active
const navbarNav = document.querySelector
('.navbar-nav');

//ketika list di klik
document.querySelector('#list').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//ketika sidebar ingin dihilangkan 
const list = document.querySelector
('#list');

document.addEventListener('click', function(e) {
    if(!list.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})