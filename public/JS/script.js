const answer = document.querySelector("input[type=text]");
function formCorrection (e){
    e.preventDefault();
    if (!answer.value){
        alert("Please type the title of the movie")
    }else{
        e.target.submit();
    }
}
document.addEventListener("submit", (event) => formCorrection(event));
