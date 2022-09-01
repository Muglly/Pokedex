let quantidade = document.querySelector("#quantidade");
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
})
pegaPokemons(6);
function pegaPokemons(quantidade){
    fetch("https://pokeapi.co/api/v2/pokemon?limit="+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

    let pokemons = [];

    let pokemonBoxs = document.querySelector(".pokemon-boxs");

    allpokemon.results.map(function(val){

        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name,
                imagem:pokemonSingle.sprites.front_default
            });
            
            if(pokemons.length == quantidade){

               pokemonBoxs.innerHTML = "";

                
                
                pokemons.map(function(val){
                    pokemonBoxs.innerHTML+=`
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`" alt="`+val.nome+`">
                        <p>`+val.nome+`</p>
                    </div><!--pokemon-box-->
                    `
                })
            }

            
        })


    })

    pokemons.map((val)=>{
        console.log(val.nome)
    })
})
}