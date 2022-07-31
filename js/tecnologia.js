//CATEGORIA TECNOLOGIA 
var producto = [
    {//JSON 1
        nombreProducto: 'Samsung',
        urlImagen: 'img/Tecnologia/Productos/1.tec.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 2
        nombreProducto: 'Sony',
        urlImagen: 'img/Tecnologia/Productos/2.tec.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 3
        nombreProducto: 'HP',
        urlImagen: 'img/Tecnologia/Productos/3.tec.png',
        categoria: 'Tecnología',
        calificacion: 5
    },
    {//JSON 4
        nombreProducto: 'Apple',
        urlImagen: 'img/Tecnologia/Productos/4.tec.png',
        categoria: 'Tecnología',
        calificacion: 3
    },
     {//JSON 5
        nombreProducto: 'HP',
        urlImagen: 'img/Tecnologia/Productos/1.tec.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
     {//JSON 6
        nombreProducto: 'HP',
        urlImagen: 'img/Tecnologia/Productos/2.tec.png',
        categoria: 'Tecnología',
        calificacion: 2
    },
     {//JSON 7
        nombreProducto: 'HP',
        urlImagen: 'img/Tecnologia/Productos/3.tec.png',
        categoria: 'Tecnología',
        calificacion: 5
    },
     {//JSON 8
        nombreProducto: 'HP',
        urlImagen: 'img/Tecnologia/Productos/4.tec.png',
        categoria: 'Tecnología',
        calificacion: 2
    }
   
];

function generarProducto(){
    document.getElementById('producto').innerHTML = '';//para que al momento de guardar una nueva app no aparezacn nuevamente todas app sino, solo la que estamos guardando
        producto.forEach(function(prod, i){
        //para la calificacion con estrellas
        let estrellas = '';
        for (let i = 0; i < prod.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';  
        }for (let i = 0; i < 5-prod.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';  
        }
        
       
        //para mostrar las emp creadas en los en JSON 
        document.getElementById('producto').innerHTML += 
        `<div class=""> 
               <div class="card">
                  <img src="${prod.urlImagen}" class="card-img-top" ">
                  <div class="card-body">
                    <h5 class="card-title">${prod.nombreProducto}</h5>
                    <p class="card-text"> Categoría: ${prod.categoria}</p>
                     <div >
                     <button onclick="mostrarProducto()">Haz click</button>
                    </div>
                </div>
               </div>
            </div>`;
    }); 
}
generarProducto()
//funcion para ingresar a los productos de la marca
//**********************Mostrar detalles del producto */

function mostrarProducto() {
    document.getElementById('detalle').innerHTML = '';//para que al momento de guardar una nueva app no aparezacn nuevamente todas app sino, solo la que estamos guardando
    producto.forEach(function(det, i){
    //para la calificacion con estrellas
    let estrellas = '';
    for (let i = 0; i < det.calificacion; i++) {
        estrellas += '<i class="fa-solid fa-star"></i>';  
    }for (let i = 0; i < 5-det.calificacion; i++) {
        estrellas += '<i class="fa-regular fa-star"></i>';  
    }
    
   
    //para mostrar las emp creadas en los en JSON 
    document.getElementById('detalle').innerHTML += 
    `<div class=""> 
           <div class="card">
              <img src="${prod.urlImagen}" class="card-img-top" ">
              <div class="card-body">
                <h5 class="card-title">${prod.nombreProducto}</h5>
                <p class="card-text"> Categoría: ${prod.categoria}</p>
                 <div >
                 <button onclick="mostrardetalle()">Haz click</button>
                </div>
            </div>
           </div>
        </div>`;
}); 
}
/*comprar()*/ 
mostrarProducto()

function miFunc() {
    document.getElementById ('nombre-Producto').value = prod.nombreProducto;
  }