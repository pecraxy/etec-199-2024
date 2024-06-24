
const requestBuilder = (reqMethod, data) => {
        return fetch('http://localhost/aula03-testeIntegracao/Controller/usuario.php', {
            method: reqMethod,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }); 
}

export default requestBuilder;