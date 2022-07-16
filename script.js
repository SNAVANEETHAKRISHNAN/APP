
var bcontainer=document.getElementById('bcontainer')

async function getbnamedata(){
    var by_name=document.getElementById('by_name').value
    console.log(by_name)

    let data =await fetch(`https://api.openbrewerydb.org/breweries?byname&search?query=dog&per_page=3`)
    let res=await data.json()
    console.log(res)


    bcontainer.innerHTML=`
    <div class="row g-0">
    <div class="col-md-4">
      <img src="logo.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">BEE WORLD${by_name}</h5>
        <p class="card-text m-0"><small class="text-muted">Name:</small></p>
        <p class="card-text m-0"><small class="text-muted">Type:</small></p>
        <p class="card-text m-0"><small class="text-muted">Phone:</small></p>
        <p class="card-text m-0"><small class="text-muted">Website URL:</small></p>

      </div>
    </div>
  </div>`
}
