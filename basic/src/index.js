import _ from 'lodash';
import './style.css';
import Icon from './icon-mini.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 将图像添加到我们现有的div
  var myIcon = new Image();
  myIcon.src = Icon
  element.appendChild(myIcon)

  return element;
}

document.body.appendChild(component());