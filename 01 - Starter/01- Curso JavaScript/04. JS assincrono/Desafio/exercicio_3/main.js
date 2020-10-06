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
function renderLoading(loading){
    ulElement.innerHTML = "";

    var liElement = document.createElement('li');
    var textLoading = document.createTextNode('Carregando...');

    liElement.appendChild(textLoading);
    ulElement.appendChild(liElement);

}

function renderError(loading){
       ulElement.innerHTML = "";

        var liElement = document.createElement('li');
        var textError = document.createTextNode("Usuário inexistente");

        liElement.style.color = "#F00";

        liElement.appendChild(textError);
        ulElement.appendChild(liElement);
}
function listRepositories(){
    var user = input.value; //pega  o valor recebido no input

    if(!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){ 
        renderRepositories(response.data);
    })
    .catch(function(){
        renderError();
    });

}
