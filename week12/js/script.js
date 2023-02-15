function countOdd(){
    let x = document.getElementById("start1").value;
    let y = document.getElementById("end1").value;
    let odd = 0;
    
    for(let i = x; i <= y; i++){
        if(i%2 != 0){
            odd++;
        }
    }
    document.getElementById("answer1").value = odd;
}
function countOdd2(){
    let x = document.getElementById("start2");
    let y = document.getElementById("end2");
    let odd = 0;
    if(x.value =="" || y.value =="" || isNaN(x.value) || isNaN(y.value)){
        odd = "Not a Number";
    }
    else{
    for(let i = x; i <= y; i++){
        if(i%2 != 0){
            odd++;
        }
    }
}
    document.getElementById("answer2").value = odd;
}

function power(){
    let x = document.getElementById("x1");
    let y = document.getElementById("y1");
    let p = 1;
    if(x.value =="" || y.value =="" || isNaN(x.value) || isNaN(y.value)){
        p = "Not a Number";
    }
    else if(y.value > 0){
        for(let i =1; i <= y.value && p != Infinity; i++){
            p = p * x.value;
        }
    }
    else if(y.value < 0){
        let z = y.value * -1;
    for(let i = 1; i <= z; i++){
        p = p * 1/x.value
        }
    }
    document.getElementById("answer3").value = p;
}

function subString(){
    let x = document.getElementById("string1").value;
    let y = document.getElementById("string2").value;
    let z;
    if(x == "" || y == "" ){
       z = "Empty";
    }
    else if(x.length  < 18 || y.length  < 26){
       z = "Error";
    }else {
        z = x.substring(11 , 14) + " " + y.substring(11 , 22);
    }  
    document.getElementById("string3").value = z;
}

function prime(){
    let x = document.getElementById("primestart").value;
    let y = document.getElementById("primeend").value;
    let z;
    let m = [];
    if(x == "" || y == "" || isNaN(x) || isNaN(y)){
        m[0] = "Not a Number";
    }else{
        let index = 0;
        for(let i = x ; i <= y; i++){
            let mid = i/2;
            let f = true;
            for(let j = 2; j <= mid; j++){
                if(i %j == 0){
                    f = false;
                    break;
                }
            }
            if(f && i != 1){
              m[index] = i;
              index++;
            }
        }
    }
    document.getElementById("prime").innerHTML= m;
}
