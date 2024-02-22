import React from "react";
import '../style/components/page/NosotrosPage.css'

const NosotrosPage = (props) =>{
    return (
        <main class="holder">
      <div>
        <h2>Historia</h2>
        <p class="pnosotros">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          neque aut nemo nihil modi, tempora, necessitatibus, odio eaque quaerat
          quia temporibus recusandae consequatur. Itaque, debitis consequuntur
          dolorum iste dignissimos quasi.
        </p>
        <p class="pnosotros">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui libero
          reprehenderit pariatur velit iste accusantium assumenda illo debitis.
          Culpa dolore soluta veritatis consequatur iure eaque ut autem
          expedita, quaerat fuga?
        </p>
      </div>

      <div class="staff">
        <h2>Staff</h2>
        <div class="personas">
          <div class="persona">
            <img src="images/foto1.png" alt="Nestor Sanchez" />
            <h5>Nestor Sanchez</h5>
            <h6>Founder</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat iure vitae, impedit aliquam natus vero reprehenderit et
              at vel iusto nihil nemo inventore quam, numquam libero ipsum
              voluptates quo?
            </p>
          </div>
          <div class="persona">
            <img src="images/foto2.png" alt="Carla Martinez" />
            <h5>Carla Martinez</h5>
            <h6>Directora</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat iure vitae, impedit aliquam natus vero reprehenderit et
              at vel iusto nihil nemo inventore quam, numquam libero ipsum
              voluptates quo?
            </p>
          </div>
          <div class="persona">
            <img src="images/foto3.png" alt="Sergio Ferder" />
            <h5>Sergio Ferder</h5>
            <h6>Gerente General</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat iure vitae, impedit aliquam natus vero reprehenderit et
              at vel iusto nihil nemo inventore quam, numquam libero ipsum
              voluptates quo?
            </p>
          </div>
          <div class="persona">
            <img src="images/foto4.png" alt="Lucia Mancucci" />
            <h5>Lucia Mancucci</h5>
            <h6>Directora de proyecto</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat iure vitae, impedit aliquam natus vero reprehenderit et
              at vel iusto nihil nemo inventore quam, numquam libero ipsum
              voluptates quo?
            </p>
          </div>
          <div class="persona">
            <img src="images/foto5.png" alt="Silvina Saiquita" />
            <h5>Silvina Saiquita</h5>
            <h6>Directora Sanidad</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              repellat iure vitae, impedit aliquam natus vero reprehenderit et
              at vel iusto nihil nemo inventore quam, numquam libero ipsum
              voluptates quo?
            </p>
          </div>
        </div>
      </div>
    </main>

    );
    }

    export default NosotrosPage;