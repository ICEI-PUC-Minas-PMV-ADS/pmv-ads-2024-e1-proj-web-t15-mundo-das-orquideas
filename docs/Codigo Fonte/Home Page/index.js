// function searchCatalog() {
//     var searchInput = document.getElementById('searchInput').value.toLowerCase();
//     var searchResults = document.getElementById('searchResults');
//     searchResults.innerHTML = '';

//     var orchids = [
//         { name: "Orquídea Vanilla", link: "infoorquideaVanilla.html" },
//         { name: "Orquídea Bambo", link: "infoorquideaBamboo.html" },
//         { name: "Orquídea Rainha do Nordeste", link: "infoorquideaRainha.html" },
//         { name: "Orquídea Ludisia", link: "infoorquideaLudisia.html" },
//         { name: "Orquídea Seidenfadenia Mitrata", link: "infoorquideaSeidenfadenia.html" },
//         { name: "Orquídea Grapete", link: "infoorquideaGrapete.html" },
//         { name: "Orquídea Brasileira Maxilaria", link: "infoorquideaBrasileira.html" },
//         { name: "Orquídea Cattleya Mossiae", link: "infoorquideaCattleya.html" },
//         { name: "Orquídea Dendrobium", link: "infoorquideaDendrobium.html" },
//         { name: "Orquídea Dendrobium nobile", link: "infoorquideaNobile.html" },
//         { name: "Orquídea Epidendrum", link: "infoorquideaEpidendrum.html" },
//         { name: "Orquídea Mini chocolate", link: "infoorquideaMini.html" },
//         { name: "Orquídea Oncidium sharry baby", link: "infoorquideaOncidium.html" },
//         { name: "Orquídea Phalaenopsis", link: "infoorquideaPhalaenopsis.html" },
//         { name: "Orquídea Vanda", link: "infoorquideaVanda.html" }
//     ];

//     orchids.forEach(function (orchid) {
//         if (orchid.name.toLowerCase().includes(searchInput)) {
//             var link = document.createElement('a');
//             link.href = orchid.link;
//             link.textContent = orchid.name;
//             searchResults.appendChild(link);
//             searchResults.appendChild(document.createElement('br'));
//         }
//     });


//     document.getElementById('perfilButton').addEventListener('click', function () {
//         // Verifica se o token existe no localStorage
//         const token = localStorage.getItem('token');

//         if (token) {
//             // Usuário está logado, redireciona para a página de perfil
//             window.location.href = "../Perfil/perfil.html";
//         } else {
//             // Usuário não está logado, exibe alerta
//             const userResponse = confirm("Usuário não logado. Deseja fazer login?");
//             if (userResponse) {
//                 // Usuário escolheu fazer login
//                 window.location.href = "../cadastro/login.html";
//             } else {
//                 // Usuário escolheu não fazer login
//                 window.location.href = "../Home Page/index.html";
//             }
//         }
//     });
// }

function searchCatalog() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    var orchids = [
        { name: "Orquídea Vanilla", link: "../Catálogo/infoorquideaVanilla.html" },
        { name: "Orquídea Bambo", link: "../Catálogo/infoorquideaBamboo.html" },
        { name: "Orquídea Rainha do Nordeste", link: "../Catálogo/infoorquideaRainha.html" },
        { name: "Orquídea Ludisia", link: "../Catálogo/infoorquideaLudisia.html" },
        { name: "Orquídea Seidenfadenia Mitrata", link: "../Catálogo/infoorquideaSeidenfadenia.html" },
        { name: "Orquídea Grapete", link: "../Catálogo/infoorquideaGrapete.html" },
        { name: "Orquídea Brasileira Maxilaria", link: "../Catálogo/infoorquideaBrasileira.html" },
        { name: "Orquídea Cattleya Mossiae", link: "../Catálogo/infoorquideaCattleya.html" },
        { name: "Orquídea Dendrobium", link: "../Catálogo/infoorquideaDendrobium.html" },
        { name: "Orquídea Dendrobium nobile", link: "../Catálogo/infoorquideaNobile.html" },
        { name: "Orquídea Epidendrum", link: "../Catálogo/infoorquideaEpidendrum.html" },
        { name: "Orquídea Mini chocolate", link: "../Catálogo/infoorquideaMini.html" },
        { name: "Orquídea Oncidium sharry baby", link: "../Catálogo/infoorquideaOncidium.html" },
        { name: "Orquídea Phalaenopsis", link: "../Catálogo/infoorquideaPhalaenopsis.html" },
        { name: "Orquídea Vanda", link: "../Catálogo/infoorquideaVanda.html" }
        
    ];

    orchids.forEach(function(orchid) {
        if (orchid.name.toLowerCase().includes(searchInput)) {
            var link = document.createElement('a');
            link.href = orchid.link;
            link.textContent = orchid.name;
            searchResults.appendChild(link);
            searchResults.appendChild(document.createElement('br'));
        }
    });
}

document.getElementById('perfilButton').addEventListener('click', function() {
    // Verifica se o token existe no localStorage
    const token = localStorage.getItem('token');

    if (token) {
        // Usuário está logado, redireciona para a página de perfil
        window.location.href ="../Perfil/perfil.html";
    } else {
        // Usuário não está logado, exibe alerta
        const userResponse = confirm("Usuário não logado. Deseja fazer login?");
        if (userResponse) {
            // Usuário escolheu fazer login
            window.location.href = "../cadastro/login.html";
        } else {
            // Usuário escolheu não fazer login
            window.location.href = "../Home Page/index.html";
        }
    }
});