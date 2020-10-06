var ulElement = document.querySelector('ul');
var input = document.querySelector('input');

function renderRepositories(){
    for(repositorio of repositorios){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repositorio.name);

        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }
}
axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error);
    })