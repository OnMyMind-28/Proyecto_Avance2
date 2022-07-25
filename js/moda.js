//CATEGORIA TECNOLOGIA 
var empresa = [
    {//JSON 1
        nombreEmpresa: 'Carrion',
        urlImagen: 'img/Moda/Tiendas/1.shop.png',
        categoria: 'Moda',
        calificacion: 4
    },
    {//JSON 2
        nombreEmpresa: 'Mendels',
        urlImagen: 'img/Moda/Tiendas/2.shop.png',
        categoria: 'Moda',
        calificacion: 4
    },
    {//JSON 3
        nombreEmpresa: 'Payless',
        urlImagen: 'img/Moda/Tiendas/3.shop.png',
        categoria: 'Moda',
        calificacion: 5
    },
    {//JSON 4
        nombreEmpresa: 'Mango',
        urlImagen: 'img/Moda/Tiendas/4.shop.png',
        categoria: 'Moda',
        calificacion: 5
    }
   
];
function generarempresa(){
    document.getElementById('empresa').innerHTML = '';//para que al momento de guardar una nueva app no aparezacn nuevamente todas app sino, solo la que estamos guardando
        empresa.forEach(function(emp, i){
        //para la calificacion con estrellas
        let estrellas = '';
        for (let i = 0; i < emp.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';  
        }for (let i = 0; i < 5-emp.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';  
        }
        
       
        //para mostrar las emp creadas en los en JSON 
        document.getElementById('empresa').innerHTML += 
        `<div class=""> 
               <div class="card">
                  <img src="${emp.urlImagen}" class="card-img-top app-img" onclick="editarApp(${i})">
                  <div class="card-body">
                    <h5 class="card-title">${emp.nombreEmpresa}</h5>
                    <p class="card-text"> Categoría: ${emp.categoria}</p>
                     <div >
                      <a href="Salud.html"><button class="btn btn-warning btn-sm " style="float:center " onclick="comprar()" >Comprar</button> </a>
                    </div>
                </div>
               </div>
            </div>`;
    }); /*Para el boton de compras el direccionamineto al producto se hara mediante el indice*/ 
}
generarempresa()
//funcion para ingresar a los productos de la marca
function Irempresa() {
    
}


