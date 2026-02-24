Ans to the ques no.1
====================
1. getElementByID() - this function returns a single element that matches with the ID
2. getElementsByClassName() - this function returns a HTML collection that matches with the Class Name
3. querySelector() - this function returns the first element of the selector
4. querySelectorAll() - this function returns all the elements in a NodeList of the passing selector

Ans to the ques no.2
====================
const newElement = document.createElement("div")
const container = document.getElementById("job-card-container")
container.appendChild(newElement)

Ans to the ques no.3
====================
Event bubbling is a process when a event is fired on a child node it propagates to its parent node gradually through a DOM tree

Example -
<body>
    <div>
        <button> Click Here </button>
    </div>
</body>

Here, when we click at the  <button>, it gradually propagates to <div> and <body>

Ans to the ques no.4
====================
Event delegation is a process where we can declare 1 event listener to the parent node instead of adding multiple listeners to the child nodes
It is useful to write clean and less code and improve performance

Ans to the ques no.5
====================
preventDefault() stops a default action of a element. It does not stops a node to propagate but stops its behavior
stopPropagation() stops a child node to propagate. It does not stops parent Nodes behavior