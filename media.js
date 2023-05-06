function myFunction(x) {
  if (x.matches) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

// Create a MediaQueryList object
const mmObj = window.matchMedia("(max-width: 500px)")

// Call the match function at run time:
myFunction(mmObj);

// Add the match function as a listener for state changes:
mmObj.addListener(myFunction)
const contactList = document.querySelector(".contact-list").a;

if (window.matchMedia("(max-width: 1500px)")){
  contactList.textContent = "";

}
