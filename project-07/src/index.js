import React from 'react';
import ReactDOM from 'react-dom/client';
import cars from './practice';
const root = ReactDOM.createRoot(document.getElementById('root'));

const [honda, tesla] = cars;
const { speedStats: {
  topSpeed : hondaTopSpeed,
} } = honda;
const { speedStats: {
  topSpeed : teslaTopSpeed,
} } = tesla;
const {coloursByPopularity : [hondaTopColour]} = honda;
const {coloursByPopularity : [teslaTopColour]} = tesla;


root.render(

  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);














/*
import animals , { useAnimals } from "./data";
//desturing an array need not to match the name
const [cat, dog, b] = animals;

const [animal , makeSound] = useAnimals(cat);
console.log(animal);
makeSound();
//var cat = anima[0];is same as above
//console.log(cat);
// destructuring an object have to match the property of the object
//name and sound are the property of the object need to match
//const {name , sound} = cat;
//console.log(sound);  meow
//const {name : catName , sound : catSound} = cat;
//console.log(catName); //is cat
//if the value is not given the u can assign the value
/*const {name ="Tom", sound = "annan"} = b;
console.log(name);
console.log(sound);
*/

//const { name, sound, feedingRequrements: { food, water } } = cat;
//console.log(food);
