import React from 'react';
import Navbar from './components/navbar/navbar'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Navbar />
      <BannerMain
        videoTitle={dadosIniciais.categorias[2].videos[0].titulo}
        url={dadosIniciais.categorias[2].videos[0].url}
        videoDescription={"How's it all gonna end?  This experience takes us on a journey to the end of time, trillions of years into the future, to discover what the fate of our planet and our universe may ultimately be. "}
      />
      <div id="FrontEnd">
        <Carousel
          category={dadosIniciais.categorias[0]}
        />
      </div>
      <div id="BackEnd">
        <Carousel
          category={dadosIniciais.categorias[1]}
        />
      </div>
      <div id="Science">
        <Carousel
          category={dadosIniciais.categorias[2]}
        />   
      </div>   
      <div id="Movies">
        <Carousel
          category={dadosIniciais.categorias[3]}
        />     
      </div>  
      <div id="Docs">
        <Carousel
          category={dadosIniciais.categorias[4]}
        />    
      </div> 
    <div id="Learning">
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />      
    </div>
      <Footer />
            
    </div>
  );
}

export default App;