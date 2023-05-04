var score=0;
function tips(){
  alert("无需键入书名号，歌名全为中文，以QQ音乐中名称为准");
}

function tip(){
  if (document.getElementById('oImg').style.display == "none") {
document.getElementById('oImg').style.display = "block";
  }
 else {
   document.getElementById('oImg').style.display = "none";
 }
}

function tip1(){
  if (document.getElementById('oImg1').style.display == "none") {
document.getElementById('oImg1').style.display = "block";
  }
 else {
   document.getElementById('oImg1').style.display = "none";
 }
}
function tip2(){
  if (document.getElementById('oImg2').style.display == "none") {
document.getElementById('oImg2').style.display = "block";
  }
 else {
   document.getElementById('oImg2').style.display = "none";
 }
}
function tip3(){
  if (document.getElementById('oImg3').style.display == "none") {
document.getElementById('oImg3').style.display = "block";
  }
 else {
   document.getElementById('oImg3').style.display = "none";
 }
}
function tip4(){
  if (document.getElementById('oImg4').style.display == "none") {
document.getElementById('oImg4').style.display = "block";
  }
 else {
   document.getElementById('oImg4').style.display = "none";
 }
}
function answer(){
  var response=prompt("请输入你的回答");
  if(response=="绝配"){
    alert("回答正确！o(*￣▽￣*)ブ");
    score+=1;
  }
  else {
    alert("回答错误/(ㄒoㄒ)/~~这首歌是《绝配》");
  }
}
function answer1(){
  var response=prompt("请输入你的回答");
  if(response=="哭泣的游戏"){
    alert("回答正确！o(*￣▽￣*)ブ");
    score+=1;
  }
  else {
    alert("回答错误/(ㄒoㄒ)/~~这首歌是《哭泣的游戏》");
  }
}
function answer2(){
  var response=prompt("请输入你的回答");
  if(response=="醉"){
    alert("回答正确！o(*￣▽￣*)ブ");
    score+=1;
  }
  else {
    alert("回答错误/(ㄒoㄒ)/~~这首歌是《醉》");
  }
}
function answer3(){
  var response=prompt("请输入你的回答");
  if(response=="哪吒"){
    alert("回答正确！o(*￣▽￣*)ブ");
    score+=1;
  }
  else {
    alert("回答错误/(ㄒoㄒ)/~~这首歌是《哪吒》");
  }
}
function answer4(){
  var response=prompt("请输入你的回答");
  if(response=="侠"){
    alert("回答正确！o(*￣▽￣*)ブ");
    score+=1;
  }
  else {
    alert("回答错误/(ㄒoㄒ)/~~这首歌是《侠》");
  }
}
function yeah(){
  if(score==5){
    alert("你答对了 "+score+" 首歌曲，你是一个忠实的爆米花!!!");
  }
  if(score>1&score<=4){
    alert("你答对了 "+score+" 首歌曲，继续加油吧小爆米花");
  }
  if(score>=0&score<=1){
    alert("你答对了 "+score+" 首歌曲，你不太了解他们哦，请多多关注他们吧！");
  }
}
