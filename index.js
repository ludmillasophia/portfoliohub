 const form = document.getElementById("formContato");
    const msgSucesso = document.getElementById("msgSucesso");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      msgSucesso.style.display = "block";
      form.reset();
      setTimeout(() => msgSucesso.style.display = "none", 4000);
    });

document.addEventListener('DOMContentLoaded', function() {

    const usuarioGithub = 'ludmillasophia';
    const urlApi = `https://api.github.com/users/${usuarioGithub}/repos?sort=updated`;

    const container = document.getElementById('lista-projetos-github');

    fetch(urlApi)
        .then(response => response.json()) 
        .then(repositorios => {
            container.innerHTML = '';

            repositorios.forEach(repo => {
                const projetoDiv = document.createElement('div');
                projetoDiv.className = 'projeto-item'; 

                const titulo = document.createElement('h3');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.target = '_blank'; 
                link.textContent = repo.name; 
                titulo.appendChild(link);

                const descricao = document.createElement('p');
                descricao.textContent = repo.description || 'Sem descrição.'; 

                projetoDiv.appendChild(titulo);
                projetoDiv.appendChild(descricao);

                container.appendChild(projetoDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar repositórios:', error);
            container.innerHTML = '<p>Não foi possível carregar os projetos. Tente novamente mais tarde.</p>';
        });
});
