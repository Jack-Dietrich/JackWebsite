async function spinner(speed){
    const spinnerEL = document.getElementById("spinner-el");
    let array = ['|', '/', '-', '\\']
    while(true){

    for(let i = 0 ; i < array.length; i++ ){
        spinnerEL.innerHTML = array[i];
        await sleep(speed);//sleep for a bit

    }

    }


}

//also need a sleep function or characters would be displayed too fast. Credit: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//this is the pattern I want to display I think
// / - \ - 

//function needs to be async so that the sleep function can pause it and we actually see the spinner