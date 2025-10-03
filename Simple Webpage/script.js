alert("Welcome! to my first webpage"); /* This is a simple alert message that will be displayed when the webpage is loaded */

const heading = document.querySelector('h1'); // Select the first <h1> element in the document

heading.addEventListener('click', () => { // Add a click event listener to the heading
    heading.style.color = 'orange';
}); // Change the color of the heading to orange when clicked

