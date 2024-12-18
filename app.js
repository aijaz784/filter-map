let products = [
     {id: 1, name: "Product 1", price: "$20", description: "This is an amazing product.", Image:"car.jpg" },
     {id: 2, name: "Product 2", price: "$30", description: "This product is very popular." , Image:"car.jpg" },
     {id: 3, name: "Product 3", price: "$40", description: "This is a high-quality product.", Image:"car.jpg"  },
     {id: 4, name: "Product 4", price: "$50", description: "Customers love this product.", Image:"car.jpg"  }
   ];
   
   function render(){
    let container= document.getElementById("product-container")
    container.innerHTML=""
     products.map((product) => {

      let div= document.createElement("div");

      div.className="card";

      div.innerHTML=`
       <div><img src="${product.Image}" alt=""></div>
       <h2>${product.name}</h2>
       <div>${product.price}</div>
       <div>${product.description}</div>
       <div><button onclick="deleteProduct(${product.id})">delete</button></div>
       `
       container.appendChild(div)
     });

      
   }
   
   function deleteProduct(productId){
    products=products.filter((product)=>{
      return product.id!==productId;

    })
    render()
    
   }
   
render()
  //  document.getElementById("product-container").innerHTML = productCards.join("");
   


