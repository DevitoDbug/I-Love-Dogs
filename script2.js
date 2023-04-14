//this is a simpler implementation 

const DOG_URL ="https://dog.ceo/api/breeds/image/random"

const doggos = document.querySelector(".image");//the div i want to place the image

async function addNewDoggo(){
    const parse = await fetch(DOG_URL);
    const processedResponse = await parse.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute DOg";
    img.class = "gen-image";

    doggos.innerHTML = img.outerHTML;
}

//adding the event listener
document.querySelector(".button").addEventListener("click", addNewDoggo);
