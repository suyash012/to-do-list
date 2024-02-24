const labelbutton= document.querySelector("#write");
const input=document.querySelector(".listitem")

function addtask(){
    if(labelbutton.value===""){
        alert("write something")
    }
    
    else{
        const newtask=document.createElement('li');
        newtask.textContent=labelbutton.value;
        input.appendChild(newtask);
    }
}
