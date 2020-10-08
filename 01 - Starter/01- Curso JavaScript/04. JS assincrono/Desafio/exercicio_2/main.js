var ulElement = document.querySelector('ul');
var input = document.querySelector('input');

function renderRepositories(repositories){
    ulElement.innerHTML = "";
    
    for(repositorie of repositories){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repositorie.name);

        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }
}

function listRepositories(){
    var user = input.value; //pega  o valor recebido no input

    if(!user) return;


    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){ 
        renderRepositories(response.data);
    })

}
