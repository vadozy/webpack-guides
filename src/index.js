import _ from 'lodash';
import './style.css';
import IconWebpack from './icon-webpack.png';
import Data from './data.xml';

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = IconWebpack;
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
