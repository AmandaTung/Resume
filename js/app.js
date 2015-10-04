function setHeight(){
  var h =window.screen.availHeight;
  document.getElementById("Home").style.height=h-70+"px";
  document.getElementById("Information").style.height=h-70+"px";
  document.getElementById("Skills").style.height=h-70+"px";
  document.getElementById("Experience").style.height=h-70+"px";
}
window.onload=function(){
  setHeight();
}
var Content_Original=document.getElementById('Content').innerHTML;
function changeOne(){
  document.getElementById('Content').innerHTML=Content_Original;
}
function changeTwo(){
  document.getElementById('Content').innerHTML='Blog : http://www.lofter.com/blog/amandatung?act=dashboardclick_20130514_04'
}
/*function changeThree(){
  document.getElementById(’Content’).innerHTML=’123455’;
}*/
