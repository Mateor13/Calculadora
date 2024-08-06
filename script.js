const visor = document.querySelector('.visor');
const botones=document.querySelectorAll('.boton');

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const valor =boton.textContent;
        if(valor==="C"){
            visor.textContent='';
            visor.style.color='black';
            return;
        }
        else if (valor ==="="){
            try{
                visor.textContent=eval(visor.textContent);
            }catch (error){
                visor.textContent='ERROR';
                visor.style.color='red';
                set
            }
            return;
        }
        if (valor==='←'){
            visor.textContent = visor.textContent.slice(0,-1);
            return;
        }
        else{
            if((visor.textContent==='ERROR')||(visor.textContent==='0')||(visor.textContent==='Infinity')){
                visor.textContent="";
            }
            visor.textContent +=valor;
        }
    })
});
