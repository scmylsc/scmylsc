function opennav(){

    var tik = document.getElementById("checkbox");  
    var text= document.getElementById("navid");
    var icon = document.getElementById("menu-icon");
    if(tik.checked == true){
        text.style.display = "none";
        text.style.transition = "all 2s";
        icon.className = "fa fa-bars";
    }
    if(tik.checked == false){

        text.style.transition = "all 2s";
        text.style.display = "block";
       icon.className = "fa fa-close";

    }    

}
function sendmsg(){
    var phone_number = document.getElementById("phonenumbertext").value;
    var link = "https://wa.me/"+phone_number;
    window.open(link);
}
function sendmsgbu(){
    var link = "https://wa.me/"+"9390558027";
    window.open(link);
}
function test(){
    var icon = document.getElementById("menu-icon");
    var text= document.getElementById("navid");
    icon.className = "fa fa-bars";
    text.style.display = "none";
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}