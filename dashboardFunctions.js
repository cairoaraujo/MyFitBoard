function openMenu(){
    document.getElementById('menu2').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
    document.getElementById('dashHeader').style.display = 'none'
    document.getElementById('footer').style.marginLeft = '250px';
}

function closeMenu(){
    document.getElementById('menu2').style.width = '0px'
    document.getElementById('content').style.marginLeft = '20px'
    document.getElementById('dashHeader').style.display = 'block'
    document.getElementById('footer').style.marginLeft = '0px';
}