let fetchData = fetch("./actors.json")
.then(function(response){
  
    return response.json();
})
.then(function(data){
    
    nameReceived(data);
    
})

function nameReceived(names){
    names.forEach(displayName);

}
function displayName(oneName){
 
 const temp = document.querySelector("#actorNames").content;
 const nameCopy = temp.cloneNode(true);

 nameCopy.querySelector("h3").textContent = oneName.fullname;


  nameCopy.querySelector("article.actors").addEventListener("click", (e) =>showDetails(oneName))

 
 const appendLocation = document.querySelector(".grids");
 appendLocation.appendChild(nameCopy);
}

 function showDetails(data){
  console.log(data)
   modal.querySelector(".modal-name").textContent = data.movie;
   modal.classList.remove("hide");
  
} 

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
})
