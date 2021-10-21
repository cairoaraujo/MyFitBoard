function openMenu(){
    document.getElementById('sideMenu').style.width = '250px';
    document.getElementById('mainContent').style.marginLeft = '250px';
    document.getElementById('dashHeader').style.height = '20px';
    document.getElementById('briefChartArea').style.width = '150%';
    document.getElementById('title').style.width = '85%';
    //$(".chartArea").width('60%');
}

function closeMenu(){
    document.getElementById('sideMenu').style.width = '0px';
    document.getElementById('mainContent').style.marginLeft = '0px';
    document.getElementById('dashHeader').style.display = 'block';
    document.getElementById('briefChart').style.width = '100%';
    document.getElementById('briefChart').style.height = '100%';
    //document.getElementById('primeiroGrafico').style.width = '100%';
    //document.getElementById('primeiroGrafico').style.height = '100%';
   //$(".chartArea").width('40%');
}

function changeTheme(){
    if (document.getElementById("theme").checked == true){//DARK THEME
        document.getElementById("mainContent").style.backgroundColor = "#080808"
        document.getElementById("opa").style.backgroundColor = "#080808"
    }
    else{//LIGHT THEME
        document.getElementById("mainContent").style.backgroundColor = "white"
        document.getElementById("opa").style.backgroundColor = "white"
    }
}