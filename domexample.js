document.getElementById("main-header").style.background = "red";
document.getElementById("main-header").style.height = "100px";
document.getElementById("main-header").innerHTML = "Hello Guillermo! Do you play bass?";

const allPTag = document.getElementsByTagName("p")[0].style.background = "green"
console.log(allPTag)

document.getElementsByClassName("subheader")[1].innerHTML = "It's raining in Argentina"

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

const alerter = () => alert("BOOM!")

document.getElementById("main-header").addEventListener('click', alerter)

const button = document.querySelector('.redirect');

console.log(button)

button.addEventListener('click', () => {
    document.location.href = 'http://www.google.com';
})