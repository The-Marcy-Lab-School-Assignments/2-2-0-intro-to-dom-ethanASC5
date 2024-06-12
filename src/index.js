// Function to create and add an h1 element to the document
const h1Maker = () => {
    // Create a new h1 HTML element
    const h1 = document.createElement('h1');

    // Assign the id attribute "main-heading" to the newly created h1 element
    h1.id = "main-heading";

    // Set the text content of the h1 element to "Hello World!"
    h1.textContent = "Hello World!";

    // Append the h1 element as a child of the body element in the document
    document.body.appendChild(h1);
}
const pTagmaker = () => {
    // Create a new h1 HTML element
    const p = document.createElement('p');

    // Assign the id attribute "main-heading" to the newly created h1 element
    p.id = "main-text";

    // Set the text content of the h1 element to "Hello World!"
    p.textContent = "Look, I'm some text!";


    p.classList.add("boring-text");

    document.body.appendChild(p)

}

// Main function that acts as the entry point of our script
const main = () => {
    // Call the h1Maker function to create and add the h1 element to the document
    h1Maker();
    pTagmaker();
}

// Invoke the main function to execute our script
main()