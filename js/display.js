
let allMain=document.querySelectorAll('.main');
export function displayGames(response,location) {
    let allGames='';
    for (let i = 0; i < response.length; i++) {
        allGames+=` <div class="col-xl-3  col-lg-4 col-md-6">
          <div class="card border-1 position-relative border-black rounded-2 ">
            <img src="${response[i].thumbnail}" class="p-3 main-color" alt="">
            <div class="card-body pt-0 main-color text-white">
              <h3 class="d-flex justify-content-between align-items-center h5"><span class="tital">${response[i].title}</span>
                <span class="free">Free</span>
              </h3>
              <p class="text-center">
                ${response[i].short_description.length > 6 ? response[i].short_description.split(" ").slice(0,8).join(' '): response[i].short_description}
              </p>
            </div>
            <div class="card-footer p-2 main-color2 text-white  d-flex justify-content-between">
              <span class="bg-spacific me-1 rounded-2 p-1">${response[i].genre}</span>
              <span class="bg-spacific rounded-2 p-1">${response[i].platform}</span>
            </div>
            <div class="layer"></div>
          </div>

        </div>`
        
    }
     allMain[location].innerHTML=allGames;
}
export function displayDetailes(response) 
{
    let details='';
    details=`
            <div class="col-md-4">
          <img src="${response.thumbnail}" class="w-100" alt="">
        </div>
        <div class="col-md-8">
          <h2>Tital: <span>${response.title}</span></h2>
          <p class="font-p">Platform: <span class="span-details">${response.platform}</span></p>
          <p class="font-p">Category: <span class="span-details">${response.genre}</span></p>
          <p class="font-p">Status: <span class="span-details">${response.status}</span></p>
          <p class="para">${response.description}</p>
          <a class="btn text-white fw-medium btn-outline-warning" href="${response.game_url}">Show Game</a>
        </div>`
        document.querySelector('.main-detailes').innerHTML=details;
        
}