var displayMessage = document.getElementById('message');
var button = document.getElementById('button');
var counter = 0;
var Input = document.getElementById('input');

function removeAfterSetTime(){
    location.reload()
}

button.addEventListener('click', () => {
    var input = document.getElementById('input').value.toLocaleLowerCase();
    var split = input.split('')
    Input.value = ""

    for(var i = 0; i<split.length; i++){
        if(split[i] =='a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u'){
        counter++
    } 
    if(counter >1){
        displayMessage.innerHTML = `'${input}' has ${counter} vowels`
    }
    else{
        displayMessage.innerHTML = `'${input}' has ${counter} vowel`
    }
    var timeout = setTimeout(removeAfterSetTime, 2500)
}
})
