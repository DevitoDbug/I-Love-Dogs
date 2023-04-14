const DOG_URL ="https://dog.ceo/api/breeds/image/random"

const doggos = document.querySelector(".image");
console.log(doggos);

function addNewDoggo(){
    const promise  = fetch(DOG_URL);
    promise.then(function(respose){
        const processingPromise = respose.text();
        return processingPromise;
    })
    .then(function(processedResponse){
        const dogObject = JSON.parse(processedResponse);
        const img = document.createElement("img");
        img.src = dogObject.message;
        img.alt = "Cute doggo";
        img.className = "gen-image";
        doggos.innerHTML = img.outerHTML;
    }).catch(function (error){
        //handling the error
        alert("Sorry! something went wrong with the sever");
    });
}
document.querySelector("button").addEventListener("click",addNewDoggo);
