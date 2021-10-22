
let userInfo = {
    userName: "Cairo",
    userWeight: 90,
    userHeight: 1.90,
    userTmb: 2500
}
console.log("IUHAHAHS")
function setUserData(){
    document.getElementById("username").innerHTML = userInfo.userName;
    document.getElementById("userWeight").innerHTML =userInfo.userWeight.toFixed(2) + " kg";
    document.getElementById("userHeight").innerHTML = userInfo.userHeight.toFixed(2) + " m";
    document.getElementById("userTmb").innerHTML = userInfo.userTmb.toFixed(0) + " kcal";
}
setUserData();
