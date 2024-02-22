import React from "react";
import '../style/components/page/HomePage.css'

const HomePage = (props) =>{
    return (
        
        <main className="holder">

<div><img src="images/cat.png" alt="Portada" /></div>
      <div class="columna">
        <div class="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            tempore asperiores similique ad facilis aut ab, vero eum quam
            architecto. Numquam, alias sit delectus maiores nostrum nihil
            perferendis soluta vel?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nobis,
            placeat voluptatibus molestias labore in, alias quasi facere iste
            quisquam minima cumque repudiandae. Ipsum a optio explicabo
            laudantium, pariatur nam.
          </p>
        </div>
        <div class="testimonios">
          <h2>Testimonios</h2>
          <div class="testimonio">
            <span class="cita">Sitio para adopciones de mascotas</span>
            <span class="autor">Federico Nauman</span>
          </div>
        </div>
      </div>

        </main>


    );
    }

    export default HomePage;