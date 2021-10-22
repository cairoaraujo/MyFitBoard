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
        document.getElementById("mainContent").style.backgroundColor = "#414141"
        document.getElementById("mainContent").style.color = "#ffffff"

        document.getElementById("chartsContainer").style.backgroundColor = "#2e2e2e"

        document.getElementById("welcomeMsg").style.backgroundColor = "#2e2e2e"
        document.getElementById("welcomeMsg").style.color = "#ffffff"
        document.getElementById("welcomeMsg").style.color = "#ffffff"
        
    }
    else{//LIGHT THEME
        document.getElementById("mainContent").style.backgroundColor = "#F5F5F5"
        document.getElementById("mainContent").style.color = "#000000"

        document.getElementById("chartsContainer").style.backgroundColor = "#FFFFFF"

        document.getElementById("welcomeMsg").style.backgroundColor = "#FFFFFF"
        document.getElementById("welcomeMsg").style.color = "#FA70A1"
    }
}