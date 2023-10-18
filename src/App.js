import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";

export default function App() {
  const dataObject = {
    title: 'How to Bake Apple Pie',
    duration: '5mins',
    subject: 'cooking',
    producer: 'Peter Cooper',
    img: 'https://picsum.photos/400/400?a=1'
  }
  const dataObject2 = {
    title: 'How to Learn Portuguese',
    duration: '10mins',
    subject: 'language',
    producer: 'Fernada',
    img: 'https://picsum.photos/400/400?a=2'
  }
   
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject2}/>
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject}/>
              <CardVideo object={dataObject}/>
          </section>
        </main>
         
        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
