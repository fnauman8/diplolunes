import React from "react";

const HomePage = (props) =>{
    return (
        
        <main className="holder">

            <div className="homeimg">
                <img src="images/cat.png" alt="Gato"/>
            </div>

            <div classNAme="columnas">
                <div className="bienvenidos">

                <h2>Bienvenidos</h2>
                <p>lorem</p>
                <p>lorem</p>
                </div>
                <div className="testimonios">
                    <h2>Testiminios</h2>
                    <div className="testimomio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Federico Nauman</span>
                    </div>
                </div>
            </div>


        </main>


    );
    }

    export default HomePage;