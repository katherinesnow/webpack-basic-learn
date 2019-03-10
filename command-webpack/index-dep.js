// import { join } from 'lodash';
import isEqual from 'lodash.isequal'
import './style.css'

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML ='hello world';
  element.classList.add('hello')
  console.log(333)
  return element;
}

document.body.appendChild(component());