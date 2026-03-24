StyleContent = `@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

#spinning_logo {
	animation: rotate-center 1.25s linear infinite forwards;
    margin : 15px;
    max-width : 32px;
    max-height: 32px;
    display : none;
}

    body {
        font-family: Arial, sans-serif;
        background: #f4f6f8;
        margin: 0;
        min-height: 100vh;
    }

    #PokeSearch-Redirect {
        text-decoration: none;
    }

    #PokeSearchWindow {
        position: absolute;
        top: 50px;
        left: 50px;
        min-width: 280px;
        min-height: 200px;
        width: 520px;
        height: auto;
        padding: 12px;

        border: 1px solid #333;
        border-radius: 12px;
        background: white;

        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        resize: both;
        overflow: auto;
    }

    #PokeSearchWindow > header {
        font-size: clamp(14px, 4vw, 20px);
        font-weight: bold;
        text-align: center;

        color : black;

        padding: 8px;
        margin-bottom: 10px;

        border: 1px solid #333;
        border-radius: 8px;
        background: #e9ecef;

        cursor: move;
        user-select: none;
    }

    #PokeSearchWindow > div:first-of-type {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    /* Bloc gauche (texte + image) */
    #PokeSearchWindow > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        flex: 1;
        min-width: 150px;
    }

    #PokeSearchWindow > div > img {
        max-width: min(120px, 15vw);
        max-height: min(120px, 15vh);
        width: auto;
        height: auto;
    }

    #PokeSearchWindow textarea {
        width: min(180px, 25vw);
        min-width: 120px;
        height: 30px;
        resize: none;

        padding: 5px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: clamp(10px, 2vw, 14px);
    }

    #PokeSearchWindow button {
        padding: 6px 12px;
        border-radius: 6px;
        border: none;

        background: #4CAF50;
        color: white;
        cursor: pointer;

        transition: background 0.2s ease;
        font-size: clamp(10px, 2vw, 14px);
    }

    #PokeSearchWindow button:hover {
        background: #45a049;
    }

    #PokeSearch-dataDisplay {
        font-size: clamp(10px, 2.5vw, 14px);
        line-height: 1.4;
        word-break: break-word;
        color : black;
    }

    #PokeSearch-SecondaryWindow {
        margin-top: 10px;
        background: #ffaa89;
        display: block;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }
    
    #PokeSearch-SecondaryWindow header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
        background: #ff976d;
        width: 100%;
    }
    
    #PokeSearch-SecondaryWindow button {
        background: #ff6b3d;
        font-size: clamp(12px, 3vw, 18px);
        padding: 4px 12px;
    }
    
    #PokeSearch-SecondaryWindow button:hover {
        background: #ff5722;
    }
    
    /* Responsive pour petits écrans */
    @media (max-width: 600px) {
        #PokeSearchWindow {
            width: 90vw;
            max-width: 90vw;
            left: 5vw;
        }
        
        #PokeSearchWindow > div:first-of-type {
            flex-direction: column;
        }
        
        #PokeSearchWindow textarea {
            width: 80%;
        }
    }
    
    /* Scrollbar stylisée pour la zone redimensionnable */
    #PokeSearchWindow::-webkit-resizer {
        background: #4CAF50;
        border-radius: 4px;
    }
    
    #PokeSearchWindow::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    
    #PokeSearchWindow::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    
    #PokeSearchWindow::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
    
    #PokeSearchWindow::-webkit-scrollbar-thumb:hover {
        background: #555;
    }`

HtmlDivContent = `<header>DexSearch</header>
            <div>
                <div>
                    <p id="PokeSearch-dataDisplay">No Data<br>No Data<br>No Data</p>
                    <img id="PokeSearch-ImgDisplay" src=""/>
                </div>
                <textarea id="PokeSearch-TxtArea" placeholder="Ditto"></textarea>
                <button onclick="gatherInfos()">Search</button>
            </div>
            <div id="PokeSearch-SecondaryWindow">
                <header><button onclick="toggleSecondary()">+</button></header>
                <div id="PokeSearch-SecondaryContent" style="display: none; padding: 10px; text-align: center;">
                    <p id="PokeSearch-SecondaryDataDisplay"><strong style="color : rgb(155, 155, 155)">[WIP for PokemonShowdown Connect]</strong></p>
                    <!-- <img id="spinning_logo" src="https://pokemonshowdown.com/images/icon.png">
                    <button id="PokeSearch-ConnectButton" onclick="connect()">Connect</button> -->
                </div>
            </div>`

styleDiv = document.createElement("style")
styleDiv.innerHTML = StyleContent

document.head.appendChild(styleDiv)

divDiv = document.createElement("div")
divDiv.id = "PokeSearchWindow"
divDiv.innerHTML = HtmlDivContent;

document.body.appendChild(divDiv)

/*
module_script = document.createElement("script")
module_script.type = "module"
module_script.innerHTML = "import '---------------------/FromAPI.js';"
document.body.appendChild(module_script)
*/
MissingNoSpriteSrc = "https://www.pngkey.com/png/full/343-3434526_missingno-missingno-sprite.png"
        
        // Fonction de redimensionnement qui ajuste les proportions
        function setupResizeObserver() {
            const windowElement = document.getElementById("PokeSearchWindow");
            
            // Observer pour détecter les changements de taille
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const width = entry.contentRect.width;
                    const height = entry.contentRect.height;
                    
                    // Ajuster les proportions des éléments en fonction de la taille
                    adjustElementsProportions(width, height);
                }
            });
            
            resizeObserver.observe(windowElement);
        }
        
        function adjustElementsProportions(width, height) {
            const textarea = document.getElementById("PokeSearch-TxtArea");
            const buttons = document.querySelectorAll("#PokeSearchWindow button");
            const dataDisplay = document.getElementById("PokeSearch-dataDisplay");
            const img = document.getElementById("PokeSearch-ImgDisplay");
            
            // Ajuster la taille du textarea proportionnellement
            if (width < 400) {
                textarea.style.width = "120px";
                textarea.style.fontSize = "10px";
            } else if (width < 600) {
                textarea.style.width = "160px";
                textarea.style.fontSize = "12px";
            } else {
                textarea.style.width = "180px";
                textarea.style.fontSize = "14px";
            }
            
            // Ajuster la taille des boutons
            buttons.forEach(button => {
                if (width < 400) {
                    button.style.padding = "4px 8px";
                    button.style.fontSize = "10px";
                } else if (width < 600) {
                    button.style.padding = "5px 10px";
                    button.style.fontSize = "12px";
                } else {
                    button.style.padding = "6px 12px";
                    button.style.fontSize = "14px";
                }
            });
            
            // Ajuster la taille de la police du texte
            if (width < 400) {
                dataDisplay.style.fontSize = "10px";
            } else if (width < 600) {
                dataDisplay.style.fontSize = "12px";
            } else {
                dataDisplay.style.fontSize = "14px";
            }
            
            // Ajuster la taille de l'image
            if (width < 400) {
                img.style.maxWidth = "80px";
                img.style.maxHeight = "80px";
            } else if (width < 600) {
                img.style.maxWidth = "100px";
                img.style.maxHeight = "100px";
            } else {
                img.style.maxWidth = "120px";
                img.style.maxHeight = "120px";
            }
        }
        
        function dragElement(element) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            let header = element.querySelector("header");
            header.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                element.style.top = (element.offsetTop - pos2) + "px";
                element.style.left = (element.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

        dragElement(document.getElementById("PokeSearchWindow"))
        
        function toggleSecondary() {
            const secondaryContent = document.getElementById("PokeSearch-SecondaryContent");
            const button = document.querySelector("#PokeSearch-SecondaryWindow header button");
            
            if (secondaryContent.style.display === "none") {
                secondaryContent.style.display = "block";
                button.textContent = "-";
            } else {
                secondaryContent.style.display = "none";
                button.textContent = "+";
            }
        }
        
        function randomPokemon() {
            const randomId = Math.floor(Math.random() * 1025) + 1;
            gatherInfos(randomId.toString());
        }
        
        async function getSprite(name = "Ditto") {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const json = await res.json()
            document.getElementById("PokeSearch-ImgDisplay").src = json.sprites.front_default;
        }

        async function gatherInfos(name = "") {
            const txta = document.getElementById("PokeSearch-TxtArea")
            const dtDisp = document.getElementById("PokeSearch-dataDisplay")
            const button = document.querySelector("#PokeSearchWindow button")


            if (!name && txta.value == "") {
                const randomId = Math.floor(Math.random() * 1025) + 1
                return gatherInfos(randomId)
            }


            name = name || txta.value.toLowerCase().trim()


            dtDisp.innerHTML = "🔎 Loading..."
            button.disabled = true

            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

                if (!(res.ok)) {
                    dtDisp.innerHTML = `The name was either spelled wrong, the pokemon isn't in the database of pokeapi.co yet or it's a pokemon with forms,<br>in that case type the pokemon name with the form next to it`
                    button.disabled = false
                    return false
                }

                const json = await res.json()

                let abilities = ""
                let stats = ""
                let types = ""
                let BST = 0
                const stats_name = ["- HP : ","- ATK : ","- DEF : ","- Spe.ATK : ","- Spe.DEF : ","- SPE : "]
                let pokename = json.name

                for (let i = 0; i < json.abilities.length; i++) {
                    abilities += json.abilities[i].ability.name + (i === json.abilities.length - 1 ? "" : " / ")
                }

                types = json.types.map(t => t.type.name).join(" / ")

                for (let e = 0; e < json.stats.length; e++) {
                    stats += stats_name[e] + json.stats[e].base_stat + "<br>"
                    BST += json.stats[e].base_stat
                }

                dtDisp.innerHTML = `Name : <a target="_blank" id="PokeSearch-Redirect" href="https://bulbapedia.bulbagarden.net/wiki/${pokename.split("-")[0].trim()}">${pokename}</a><br>No. ${json.id}<br>
                Abilities : ${abilities}<br>
                Stats : <br>${stats}<br> - BST : ${BST} - <br>
                Types : ${types}`

                document.getElementById("PokeSearch-ImgDisplay").src = json.sprites.front_default

            } catch (error) {
                dtDisp.innerHTML = "Error while fetching data...<br>Check your internet, it might be the cause"
            }

            button.disabled = false
        }

        function connect() {
            const dtDisplay = document.getElementById("PokeSearch-SecondaryDataDisplay")
            const imgSpin = document.getElementById("spinning_logo")
            const connectBtn = document.getElementById("PokeSearch-ConnectButton")

            if (false) {//if (window.location.host != "play.pokemonshowdown.com" ) {
                dtDisplay.innerHTML = "You are not on PokemonSHowdown right now, please go to <a href='https://play.pokemonshowdown.com'>play.pokemonshowdown.com</a> to use this feature..."
                return false
            }
            
            imgSpin.style.display = "none"
            connectBtn.style.display = "none"

            dtDisplay.innerHTML = "No data"
        }

        document.getElementById("PokeSearch-TxtArea").addEventListener("keypress", e => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                gatherInfos()
            }
        });

        let img = document.getElementById("PokeSearch-ImgDisplay")
        img.src = "https://static.wikia.nocookie.net/character-stats-and-profiles/images/6/62/MissingNo.png/revision/latest?cb=20250611135644"
        
        ////////////////////////////From API//////////////////




        // Initialiser l'observateur de redimensionnement
        setupResizeObserver();
        // Ajuster les proportions initiales
        adjustElementsProportions(520, 300);