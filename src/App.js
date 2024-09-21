import React from 'react';
import './App.css'; // Импорт стилей
import Head from './components/Head';
import Ingredients from './components/Ingredients';
import CookingSteps from './components/CookingSteps';
import DishImage from './components/DishImage';
import FinalMessage from './components/FinalMessage';

// Импорт изображений из src/assets/images
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';
import image8 from './assets/images/image8.jpg';
import image9 from './assets/images/image9.jpg';
import image10 from './assets/images/image10.jpg';

function App() {
  return (
    <div className="App">
      {/* Левая колонка с изображениями */}
      <div className="side-container left-side">
        <div className="auto-scroll">
          <img src={image4} alt="image4" className="image-item" />
          <img src={image5} alt="image5" className="image-item" />
          <img src={image6} alt="image6" className="image-item" />
          <img src={image7} alt="image7" className="image-item" />
          <img src={image8} alt="image8" className="image-item" />
          <img src={image9} alt="image9" className="image-item" />
          <img src={image10} alt="image10" className="image-item" />
        </div>
      </div>

      {/* Основной контент */}
      <div className="container">
        <div className="container-content">
          <Head />
          <Ingredients />
          <CookingSteps />
          <DishImage />
          <FinalMessage />
        </div>
      </div>

      {/* Правая колонка с изображениями */}
      <div className="side-container right-side">
        <div className="auto-scroll">
        <img src={image4} alt="image4" className="image-item" />
          <img src={image5} alt="image5" className="image-item" />
          <img src={image6} alt="image6" className="image-item" />
          <img src={image7} alt="image7" className="image-item" />
          <img src={image8} alt="image8" className="image-item" />
          <img src={image9} alt="image9" className="image-item" />
          <img src={image10} alt="image10" className="image-item" />
          
        </div>
      </div>
    </div>
  );
}

export default App;