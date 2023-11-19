const bola = document.querySelector("#bola");
    const input = document.querySelector("#myinput");
const carrosel = document.querySelector("#carrosel")
    input.addEventListener("focus", () => {
      bola.style.display = "none";
      carrosel.style.display = "none";
    
    });

    input.addEventListener("blur", () => {
      bola.style.display = "block";
      carrosel.style.display = "block";
    });
    // filter array 
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "Frango com Fritas",
        src: "/video/frangofritas.jpg",
        desc : "R$39.90"
    },
    {
        id:2,
        name : "Caranguejo",
        src:"/video/OIP (1).jpg",
        desc : "R$69.90"
    },
    {
        id:3,
        name : "Pizza Grande",
        src: "/video/pizzagrande.jpg",
        desc : "R$69.90"
    },
    {
        id:4,
        name : "Feijoada",
        src:"/video/feijoada.jpg",
        desc : "R$25.90"
    },
    {
        id:5,
        name : "Petit Gateau",
        src:"/video/OIP (2).jpg",
        desc : "R$26,90"
    },
    {
        id:6,
        name : "Coca-Cola",
        src:"/video/coca.jpg",
        desc : "R$11,90"
    }
   ];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3 " >
           
           <div class="card size">
           <h4 class="product-title">${curarra[i].name}</h4>
                        <!-- <br> -->
                        
                        <img src="${curarra[i].src}" width="100%" height="320px" class="product-image"/>
                        <div class="product-price-container">
                        <p class="preco product-price">${curarra[i].desc}</p>
                        
                      
                          <button type="button" class="button-hover-background">Adicionar ao carrinho</button>
                        </div>
                    
         
          </div>
       `
   }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});


