let scooter_icon= document.getElementById('scooter-icon');
let big_box= document.getElementById('big-box');
let bool=1;

scooter_icon.addEventListener('click',()=>{
    if(bool){
        big_box.style.display="block";
        bool=0;
    }else{
        big_box.style.display="none";
        bool=1;
    }
});

let dot_bool=[];
let dot=[];
for(let i=1;i<=8;i++){
    dot_bool[i]=1;
    
    dot[i]= document.getElementById('dot'+i);
    dot[i].addEventListener("click",()=>{
        if(dot_bool[i]){
            dot[i].style.backgroundColor="red";
            dot_bool[i]=0;
        }else{
            dot[i].style.backgroundColor="green";
            dot_bool[i]=1;
        }
    })
}

let links= document.querySelectorAll('a:not(.home):not(.logout)');

links.forEach(link => {
    link.addEventListener('click',()=>{
        alert('hello from future');
    });  
});

// login 
let fleet= document.getElementById('fleet');
let password= document.getElementById('password');
let main= document.getElementById('main');
let loginForm= document.getElementById('loginForm');
let form =document.querySelector('form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    if(fleet.value=="ABC_fleet" && password.value=="fleet_ABC"){
        main.style.display="block";
        loginForm.style.display="none";
        console.log('hello')
    }else{
        alert("Incorrect credentials");
    }
});

function logout(){
    fleet.value=null;
    password.value=null;
    main.style.display="none";
    loginForm.style.display="block";
}

