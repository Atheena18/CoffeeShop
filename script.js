function showPage(page) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-list').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('contact-form').style.display = 'none';
    if (page === 'home') {
        document.getElementById('home').style.display = 'block'; 
    } else if (page === 'menu') {
        document.getElementById('menu').style.display = 'block'; 
        document.getElementById('menu-list').style.display = 'block'; 
    } else if (page === 'contact') {
        document.getElementById('contact').style.display = 'block'; 
        document.getElementById('contact-form').style.display = 'block';
    }
}


window.onload = function() {
    showPage('home');
};