import React from 'react';
import './App.css';
import Cards from './components/Cards';
import image from './Img/cats.png';

function App() {
  return (
    <div>
      <Cards
        title="Заголовок карточки"
        description="Некоторый пример текста, который будет отображаться внутри карточки."
        buttonText="Перейти"
      >
        <img src={image} alt="Изображение" className="card-img-top" />
      </Cards>
    </div>
  );
}

export default App;