var minhaPromise = function(){
     return new Promise(function(resolve,reject){ //resolve e reject também são funções
         var xhr = new XMLHttpRequest();
         xhr.open('GET', 'https://api.github.com/users/diego3g');
         xhr.send(null);

         xhr.onreadystatechange = function(){
             if(xhr.readyState === 4){
                 if(xhr.status === 200){ // 200 é o status de sucesso
                     resolve(JSON.parse(xhr.responseText));
                 } else {
                     reject('Erro na requisição');
                 }
             }
         }
     });
}
minhaPromise()
    .then(function(response){ // resolve vai invocar o .then
        console.log(response);
    })
    .catch(function(error){ // reject irá chamar o .catch
        console.warn(error);
    });