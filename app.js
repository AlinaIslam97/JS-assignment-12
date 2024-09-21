// Question 01

var mainContent = document.getElementById("main-content");

var children = mainContent.children;
for (var i = 0; i < children.length; i++) {
  console.log(children[i].innerHTML);
}

var renderElements = document.getElementsByClassName("render");
var renderOutput = '';
for (var i = 0; i < renderElements.length; i++) {
  renderOutput += renderElements[i].innerHTML + '<br>';
}
document.write("<h2>Render Elements:</h2>");
document.write(renderOutput);

document.getElementById("first-name").value = "John";

document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "john.doe@example.com";

// Question 02

var formContentNode = document.getElementById("form-content");
var formContentNodeType = formContentNode.nodeType;
document.write("Node type of 'form-content': " + formContentNodeType + "<br>");

var lastNameNode = document.getElementById("lastName");
var lastNameNodeType = lastNameNode.nodeType;
var lastNameChildNodeType = lastNameNode.firstChild.nodeType;
document.write("Node type of 'lastName': " + lastNameNodeType + "<br>");
document.write("Node type of child node of 'lastName': " + lastNameChildNodeType + "<br>");

lastNameNode.firstChild.nodeValue = "Last Name: Doe";
document.write("Updated 'lastName': " + lastNameNode.innerHTML + "<br>");

var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;

document.write("First child of 'main-content': " + mainContent.firstElementChild.innerHTML + "<br>");
document.write("Last child of 'main-content': " + mainContent.lastElementChild.innerHTML + "<br>");

var lastNameNextSibling = lastNameNode.nextElementSibling;
var lastNamePreviousSibling = lastNameNode.previousElementSibling;

document.write("Next sibling of 'lastName': " + (lastNameNextSibling ? lastNameNextSibling.innerHTML : "None") + "<br>");
document.write("Previous sibling of 'lastName': " + (lastNamePreviousSibling ? lastNamePreviousSibling.innerHTML : "None") + "<br>");

var emailNode = document.getElementById("email");
var emailParentNode = emailNode.parentNode;
var emailParentNodeType = emailParentNode.nodeType;
document.write("Parent node of 'email': " + emailParentNode.tagName + "<br>");
document.write("Node type of parent node of 'email': " + emailParentNodeType + "<br>");