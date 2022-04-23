const grade1=document.getElementById("nota1");
const grade2=document.getElementById("nota2");
const Button=document.getElementById("boton");
const element=document.getElementById("fondo");
const body=document.getElementById("body");
const Result=document.getElementById("result");
const name1=document.getElementById("name");

function changecolor(element){
    body.style.backgroundColor=element.value;
}

//function grades(){
    //if(Number(grade1.value) && Number(grade2.value) && name1.value){
        //Result.textContent="tu nota es esta"+grade.value;
        //Result.style.color="blue"
    //}else{
        //Result.textContent="Te falta campos por llenar ";
        //Result.style.color="red"
    //}
//}

function finalscore(){
    let one_note = parseFloat(grade1.value);
    let two_note= parseFloat(grade2.value);
    let grade;
    grade=one_note+two_note/2;
    console.log(grade);

    if(one_note >= 4 && two_note <5){
        Result.textContent="Cuadro de honor "+grade;
        Result.style.color="blue"
        setTimeout(function(){
            (Result.textContent="");
        },5000);

    }else if(one_note >3 && two_note<4){
        Result.textContent="Gano la materia esta es la nota"+grade;
        Result.style.color="green"
        setTimeout(function(){
            (Result.textContent="");
        },5000);
    }else if(one_note>2 && two_note<=3){
        Result.textContent="Puede recuperar la materia"+grade;
        setTimeout(function(){
            (Result.textContent="");
        },5000);
    }else if(one_note=1 && two_note<2){
        Result.textContent="Perdio la nota pa "+grade;
        Result.style.color="red"
        setTimeout(function(){
            (Result.textContent="");
        },5000);
    }
}
              

