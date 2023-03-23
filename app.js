console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let body = document.getElementById("body")
let searchWord = document.getElementById("searchWord");
let submitSearch = document.getElementById("submitSearch");
let image = document.getElementById("image");
let feedbackPara = document.createElement('p');
image.style.display = "none";
body.appendChild(feedbackPara);

//Exercise 2 & 3 & 4 Section
submitSearch.addEventListener("click", function(){
    let QUERY_PARAMS = `?s=${searchWord.value}&api_key=pgsQLA8GteBTgyPuSTeg2bM13LQIMk5u`
    fetch(`https://api.giphy.com/v1/gifs/translate${QUERY_PARAMS}`)
    .then((resolve) => resolve.json())
    .then((body) => image.src = body.data.images.original.url, 
                    image.style.display = "block", 
                    successMessage(searchWord), 
                    clearInput(searchWord))
    .catch((err) => errorMessage(err))
})

function clearInput(input){
    input.value ="";
}

function successMessage(searchWord){
    feedbackPara.innerText = `Successfully obtained a ${searchWord.value} GIF`
}

function errorMessage(searchWord, err){
    feedbackPara.innerText = `Could not obtain a GIF because of ${err}`
}