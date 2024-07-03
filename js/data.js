
        import {load} from './main.js'
       export  async function getGames(catagory)
         {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '5bd69dd9c3msh0bf29e72b8a7b34p1b5b78jsn0c11e1fed56e',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            load.classList.remove('d-none')
            const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catagory}`,options);
            const response= await api.json();
            load.classList.add('d-none')
           return response; 
        
        }
        
       
       export  async function getDetailes(id)
         {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '5bd69dd9c3msh0bf29e72b8a7b34p1b5b78jsn0c11e1fed56e',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            load.classList.remove('d-none')
            const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
            const response= await api.json();
            load.classList.add('d-none')
           return response; 
        
        }
       
       
    
     
