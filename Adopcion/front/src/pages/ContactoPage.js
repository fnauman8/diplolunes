import React from "react";
import '../style/components/page/ContactoPage.css'

const ContactoPage = (props) =>{
    return (
        <main class="holder contacto">
        <div>
          <h2>Contacto Rápido</h2>
          <form action="" method="" class="formulario">
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name="" />
            </p>
            <p>
              <label for="email">Email</label>
              <input type="text" name="" id="" />
            </p>
            <p>
              <label for="telefono">Telefono</label>
              <input type="text" name="" id="" />
            </p>
            <p>
              <label for="mensaje">Mensaje</label>
              <textarea name=""></textarea>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
  
        <div class="datos">
          <h2>Otros medios de comunicación</h2>
          <p>Medios:</p>
          <ul>
            <li>Teléfono: 4587-6336</li>
            <li>Email: consulta@adoptando.com</li>
            <li>Facebook: Adoptando Arg</li>
            <li>Twitter: @AdoptandoArg</li>
            <li>Instagram: @AdoptandoArg</li>
          </ul>
        </div>
      </main>
    );
    }

    export default ContactoPage;