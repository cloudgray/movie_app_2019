import React from 'react';
import PropTypes from "prop-types";

function Fruit({ name, picture, rating }) {
  console.log(name);
  return (
    <div>
      <h2>I love { name }</h2>
      <h4>{rating}/5.0</h4>
      <img src={ picture } alt={name}/>
    </div>  
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const fruitILike = [
  {
    id: 0,
    name: "apple",
    image: "http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg",
    rating: 5
  },
  {
    id: 1,
    name: "pear",
    image: "https://smhttp-ssl-17653.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/f/t/ft165a.jpg",
    rating: 3
  },
  {
    id: 2,
    name: "peach",
    image: "https://media.self.com/photos/5818f68d5e75160437a94292/4:3/w_728,c_limit/peach.jpg",
    rating: 4
  }
]

function renderFruit(fruit) {
  return <Fruit key={fruit.id} 
    name={fruit.name} 
    picture={fruit.image} 
    rating={fruit.rating}
  />
}

function App() {
  return (
    <div>
      {fruitILike.map(renderFruit)}
    </div> 
  );
}

export default App;
