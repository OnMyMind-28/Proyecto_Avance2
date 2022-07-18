//CATEGORIA COMIDA
var restaurante = [
    {//JSON 1
        nombreRestaurante: 'Samsung',
        urlImagen: 'img/Comida/Productos/1.food.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 2
        nombreRestaurante: 'Sony',
        urlImagen: 'img/Tecnologia/Empresas/2.emp.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 3
        nombreRestaurante: 'HP',
        urlImagen: 'img/Tecnologia/Empresas/3.emp.png',
        categoria: 'Tecnología',
        calificacion: 5
    },
    {//JSON 4
        nombreRestaurante: 'Apple',
        urlImagen: 'img/Tecnologia/Empresas/4.emp.png',
        categoria: 'Tecnología',
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
        ` <div class=" mt-5 "> 
               <div class="card">
               <div class="Padre grid ">
               <div class="Hijo " align="center" style="background-color: white; height: 100px; width: 600px;">
                <img src="${Res.urlImagen}" class="imgCard card-img-left" align="middle">
                </div>
                <div class="Hijo card-body mt-5" >
                    <h3 class="card-title " onclick="IrRestaurante()">${Res.nombreRestaurante}</h3>
                    <p>Acepta pago online</p>
                    <p class="card-text "> Categoría: ${Res.categoria}</p>
                     <div>
                       ${estrellas}
                       
                    </div>

               </div>
               </div>
            </div>`;
    }); 
}
generarRestaurante()