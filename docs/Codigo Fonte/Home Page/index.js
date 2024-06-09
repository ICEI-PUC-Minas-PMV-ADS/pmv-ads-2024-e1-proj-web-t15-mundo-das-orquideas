function searchCatalog() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    var orchids = [
        { name: "Orquídea Vanilla", link: "infoorquideaVanilla.html" },
        { name: "Orquídea Bambo", link: "infoorquideaBamboo.html" },
        { name: "Orquídea Rainha do Nordeste", link: "infoorquideaRainha.html" },
        { name: "Orquídea Ludisia", link: "infoorquideaLudisia.html" },
        { name: "Orquídea Seidenfadenia Mitrata", link: "infoorquideaSeidenfadenia.html" },
        { name: "Orquídea Grapete", link: "infoorquideaGrapete.html" },
        { name: "Orquídea Brasileira Maxilaria", link: "infoorquideaBrasileira.html" },
        { name: "Orquídea Cattleya Mossiae", link: "infoorquideaCattleya.html" },
        { name: "Orquídea Dendrobium", link: "infoorquideaDendrobium.html" },
        { name: "Orquídea Dendrobium nobile", link: "infoorquideaNobile.html" },
        { name: "Orquídea Epidendrum", link: "infoorquideaEpidendrum.html" },
        { name: "Orquídea Mini chocolate", link: "infoorquideaMini.html" },
        { name: "Orquídea Oncidium sharry baby", link: "infoorquideaOncidium.html" },
        { name: "Orquídea Phalaenopsis", link: "infoorquideaPhalaenopsis.html" },
        { name: "Orquídea Vanda", link: "infoorquideaVanda.html" }
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
