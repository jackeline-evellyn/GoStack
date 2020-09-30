var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos =[
    'Fazer café',
    'Estudar JavaScript',
    'Acessar a comunidade Rocketseat'
];

function renderTodos(){
    listElement.innerHTML = ''; // vai remover todo código HTML da UL

    for(todo of todos){ //um for especifico para arrays
                        //sendo [todo] uma variável 
                       //e [todos] o array a ser percorrido

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');       
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText); //adicionou o todoText dentro do todoElement
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);


    }
}
renderTodos();

function addTodo(){ //Função para adicionar novo todo
    var todoText = inputElement.value; //pega o valor do input

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;