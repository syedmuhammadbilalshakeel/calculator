function foo(num){
    var result = document.getElementById("xyz");
    result.value += num;
}

function number(){
    var result = document.getElementById("xyz");
    result.value = "";
}

function getNumber(){
    var result = document.getElementById("xyz");
    result.value = eval(result.value);
}