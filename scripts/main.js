var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpeg') {
      myImage.setAttribute ('src','images/2.jpeg');
    } else {
      myImage.setAttribute ('src','images/1.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('输入你的名字吧.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '凌子爱' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '凌子爱' + storedName;
}

myButton.onclick = function() {
  setUserName();
}