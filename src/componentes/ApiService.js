/*Lista de endpoints da API:

GET

api/autor -> Retorno: Array de autores (nome, livro, preço, id)
api/autor/livro -> Retorno: Array de livros (livro, id)
api/autor/nome -> Retorno: Array de nomes (nome, id)
api/autor/:id -> Retorno: Autor com respectivo id (nome, livro, preço, id)

POST

api/autor -> Criação de autor (Retorna o autor inteiro do banco)

PATCH

api/autor/:id -> Atualiza um autor no banco (Retorna o autor inteiro)

DELETE

api/autor/:id -> Remove o autor do banco*/

//-- Pode ser usado o npm install axios

const ApiService = {

    ListaAutores : () =>{
        return fetch('http://localhost:8000/api/autor')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    CriaAutor : autor => {
        return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    ListaNomes: () =>{
        return fetch('http://localhost:8000/api/autor/nome')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers: { 'content-type' : 'application/json'},})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    TrataErros : res =>{
        if(!res.ok){

            throw Error(res.responseText);
        }
        return res;
    } 

}
export default ApiService;