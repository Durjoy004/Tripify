let input = document.querySelector("#input");
let button = document.getElementById('button');
let content = document.getElementById("background");
let locationKey;
window.onload = function() {
    setTimeout(function() {
        alert("Please type correct spelling of location otherwise you will get wrong info\nThank you");
    }, 1500); 
};
button.addEventListener('click', () => {
    let x = input.value;
    let message = x;
    if (message === "") {
        alert('Write the correct location!');
    }
    else {
        localStorage.setItem('message', message);
        window.location.href = "result.html";
    }
    

});


