//CATEGORIA COMIDA
var restaurante = [
    {//JSON 1
        nombreRestaurante: 'Little Caesars',
        urlImagen: 'img/Comida/Productos/1.food.png',
        categoria: 'Comida',
        calificacion: 4
    },
    {//JSON 2
        nombreRestaurante: 'KFC',
        urlImagen: 'img/Comida/Productos/2.food.png',
        categoria: 'Comida',
        calificacion: 4
    },
    {//JSON 3
        nombreRestaurante: 'Burger King',
        urlImagen: 'img/Comida/Productos/3.food.png',
        categoria: 'Comida',
        calificacion: 5
    },
    {//JSON 4
        nombreRestaurante: 'Taco Bell',
        urlImagen: 'img/Comida/Productos/4.food.png',
        categoria: 'Comida',
        calificacion: 5
    }
   
];
function generarRestaurante(){
    document.getElementById('restaurante').innerHTML = '';//para que al momento de guardar una nueva app no aparezacn nuevamente todas app sino, solo la que estamos guardando
        restaurante.forEach(function(Res, i){
        //para la calificacion con estrellas
        let estrellas = '';
        for (let i = 0; i < Res.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';  
        }for (let i = 0; i < 5-Res.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';  
        }
        
       
        //para mostrar las Res creadas en los en JSON 
        document.getElementById('restaurante').innerHTML += 
        `<div class=""> 
               <div class="card">
                  <img src="${Res.urlImagen}" class="card-img-top app-img" onclick="editarApp(${i})">
                  <div class="card-body">
                    <h5 class="card-title">${Res.nombreRestaurante}</h5>
                    <p class="card-text"> Categoría: ${Res.categoria}</p>
                     <div >
                       <button class="btn btn-warning btn-sm " style="float:center " onclick="comprar()" >Comprar</button> 
                    </div>
                </div>
               </div>
            </div>`;
    }); 
}
generarRestaurante()