HTML Tags and Elements Used:

<table> (ID: "myTable"):
Represents an HTML table used to display tabular data.
ID "myTable" is used to select the table element in JavaScript.
<button> (ID: "button"):
Represents a clickable button.
ID "button" is used to select the button element in JavaScript.
<tr>:
Represents a table row within the table.
Used to create new rows for student data.
<td>:
Represents a table data/cell within a table row.
Used to create cells for student data and buttons (Delete and Edit).
<input> (type: "checkbox"):
Represents a checkbox input element.
Used for selecting student rows and triggering the "yellow" function.
<img>:
Represents an image.
Used to display an image ("down.png") in student rows.
<th>:
Represents a table header cell within a table row.
Used to add header cells for the "DELETE" and "EDIT" columns.
<br>:
Represents a line break.
Used for adding line breaks in various places.


In JavaScript, there are several commonly used tags and elements that are used to interact with the HTML structure of a web page. These tags are used to access, manipulate, and modify elements on the page. Here's an explanation of some of the key JavaScript tags and elements:

Title(t1):
Constructor function for creating Title objects.
Accepts a single parameter t1 (title) and sets it as a property of the object.

yellow(checkBox):
Function triggered when a checkbox is clicked.
Changes the background color of selected rows to yellow.
Creates "Delete" and "Edit" buttons dynamically.
Enables the main button if necessary.

onDelete(deleted):
Function triggered when the "Delete" button is clicked.
Deletes the selected student row and updates the row count.
Disables the main button if necessary.

onEdit(edited):
Function triggered when the "Edit" button is clicked.
Prompts the user to edit the information for the selected student.

addNewStudent():
Function for adding a new student row to the table.
Creates new <tr> elements and populates them with data.
Event Listener (Table.addEventListener):
Listens for clicks on elements within the table.
Toggles the display of additional information when the down arrow (<img>) is clicked.


document:
The document object represents the web page itself and provides access to the HTML document's structure and content.
It is the top-level object that allows you to interact with and manipulate the elements on the web page.

getElementById:
This is not a tag but a method provided by the document object.
getElementById is used to select and retrieve an HTML element with a specific id attribute from the document.
It returns a reference to the selected element, allowing you to manipulate it with JavaScript.

Event Listeners:
JavaScript can attach event listeners to HTML elements to respond to user interactions (e.g., clicks, keypresses).
Event listeners are often used to trigger specific JavaScript functions when events occur.
Common event listeners include addEventListener and inline event attributes (e.g., onClick, onLoad).

DOM Manipulation:
JavaScript can be used to dynamically modify the Document Object Model (DOM), which represents the structure of an HTML document.
Common DOM manipulation tasks include adding, removing, or modifying HTML elements and their attributes.

Creating HTML Elements:
JavaScript allows you to create new HTML elements dynamically using methods like document.createElement.
You can set the properties and content of these elements before appending them to the DOM.

innerHTML:
The innerHTML property of an HTML element allows you to get or set the HTML content of the element.
It can be used to insert or replace HTML content within an element.

innerHTML for buttons:
In your code, you use the innerHTML property to set the HTML content of buttons dynamically, creating "Delete" and "Edit" buttons.
innerHTML for table cells:
You use the innerHTML property to set the content of table cells (<td>) with data like student names, advisor names, and more.

createElement:
The document.createElement method is used to create new HTML elements.
You can specify the element type (e.g., td, button) and then manipulate and append these elements to the DOM as needed.

Event Handling Functions:
Functions like yellow, onDelete, and onEdit are defined in your code and are associated with event handling.
These functions are called when specific events occur, such as clicking a checkbox, a delete button, or an edit button.

prompt:
The prompt function displays a dialog box that allows the user to input text.
In your code, it is used to prompt the user to edit student information when the "Edit" button is clicked.

addEventListener:
This method is used to attach event listeners to HTML elements.
In your code, it's used to listen for clicks on elements within the table and toggle the display of additional information when the down arrow (<img>) is clicked.
These JavaScript tags and elements are fundamental for interacting with HTML documents and creating dynamic and responsive web applications. They enable you to manipulate the DOM, respond to user interactions, and enhance the functionality of your web pages.