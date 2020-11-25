console.log("script.js");
window.onscroll=function(){
    myfunction();
}
function myfunction(){
    const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;
    console.log(windowScroll);
    const height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled=(windowScroll / height) * 100;
    document.getElementById("myBar").style.width=scrolled + '%';
}


// function myfunction1(){
//     // element.classList.toggle("dark-mode");
//     console.log("button for dark")
//     document.getElementsById('dark-mode').style.backgroundColor = 'black';
//     document.getElementsById('dark-mode').style.color='white';


//  }
{/* <script> */}
var button=document.getElementsByClassName('darkbutton');

function myFunction1() {
var element = document.body;
element.classList.toggle("dark-mode");
button.innerHTML='light'
}
// </script>