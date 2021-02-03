fetch("./actors.json")
.then(function(resp){
  
    return resp.json();
})
.then(function(data){
    
    nameReceived(data);
})

function nameReceived(names){
    names.forEach(displayName);

}
function displayName(oneName){
 console.log(oneName)
 const temp = document.querySelector("#actorNames").content;
 const nameCopy = temp.cloneNode(true);

 const appendLocation = document.querySelector(".grids");
 appendLocation.appendChild(nameCopy);
}
