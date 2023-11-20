if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var totalAmount = "0,00"
  
  function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
    for (var i = 0; i < removeCartProductButtons.length; i++) {
      removeCartProductButtons[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addProductToCart)
    }
  
    // Botão comprar
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }
  
  function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productName = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
  
    const productsCartNames = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
        updateTotal()
        return
      }
    }
  
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")
  
    newCartProduct.innerHTML =
      `
        <td class="product-identification">
          <img src="${productImage}" alt="${productName}" class="cart-product-image">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)
    updateTotal()
  
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }
  
  function makePurchase() {
    if (totalAmount === "0,00") {
      alert("Seu carrinho está vazio!")
    } else {   
      alert(
        `
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}\n
          Volte sempre :)
        `
      )
  
      document.querySelector(".cart-table tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }
  const bola = document.querySelector("#bola");
const input = document.querySelector("#myinput");

const carrosel = document.querySelector("#carrosel")
  
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
    },
    {
      id:7,
      name : "Pizza Romeu e Julieta",
      src:"/video/pizzaRomeu.jpg",
      desc : "R$25,90"
    },
    {
    id:8,
    name : "Doce de Abóbora",
    src:"/video/receita-de-doce-de-abobora-000-fotor-bg-remover-20231105171022.png",
    desc : "R$11,90"
    },
    {
      id:9,
      name : "Fatia de bolo",
      src:"/video/bolo.jpg",
      desc : "R$12,90"
    },
    {
      id:10,
      name : "Pudim",
      src:"/video/Sobremesas.jpg",
      desc : "R$11,90"
    },
    {
      id:11,
      name : "Pizza de Chocolate",
      src:"/video/pizzachoco.jpg",
      desc : "R$25,90"
    },
    {
      id:12,
      name : "Pespsi em lata",
      src:"/video/pepsi.jpg",
      desc : "R$6,90"
    }
    ];



showgallery(galleryarray);





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
        </div>
       `
   }

}
input.addEventListener("focus", () => {
    bola.style.display = "none";
    carrosel.style.display = "none";
  
  });

  input.addEventListener("blur", () => {
    bola.style.display = "block";
    carrosel.style.display = "block";
  });

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

