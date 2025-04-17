
function Deleteitem() {
  const deleteButton = document.querySelectorAll('.deleteitem');


  deleteButton.forEach(function (button) {
     button.addEventListener('click', function () {

        const taskRow = button.closest('.tasktodo');
           taskRow.remove();
        
// console.log('Clicked')

     });
  });
}

function toggleEnable(id){
   var textbox = document.getElementById(id);
   if(textbox.disabled){
      document.getElementById(id).disabled = false;
   }
   else{

      document.getElementById(id).disabled = true;}
}



const openBtn = document.getElementById('openModal')
const addentries = document.getElementById('updatebutton')
const cancel = document.getElementById('closeModal')
const modal = document.getElementById('modal')


openBtn.addEventListener("click", () => {
  modal.classList.add("open")
});


addentries.addEventListener("click", () => {
  modal.classList.remove("open")
});

cancel.addEventListener("click", () => {
  modal.classList.remove("open")
});


function cancelentries(){
  loginform.reset()
}

// Creating array to stores new entries 

let data = []

// Adding new entries

function addEntry() {
  const newentry = document.getElementById('add-entry').value
  const entry = {
     newentry
  }


  data.push(entry)

  displayEntries()
  loginform.reset()
}


// Modify your displayEntries function to call attachDeleteHandlers

function displayEntries() {
  const tbody = document.getElementById('new-entries');
  tbody.innerHTML = "";

  data.forEach((entry, index) => {
     const row = document.createElement('tr');
     row.className = 'tasktodo';
     row.innerHTML = `
     <td><input class="addnewtask" type="input" id="myInput-${index}" value="${entry.newentry}" disabled></td>
     <td><button class="editbutton" id="editinputbtn${index}" onclick="toggleInput(${index})">Edit</button></td>
     <td><button class="deleteentry"><img width="30px" src="images/icons8-delete-100.png" alt=""></button></td>`;
     tbody.appendChild(row);
  });
 // Attach handlers to new entries
  attachDeleteHandlers();
}


function attachDeleteHandlers() {


  // Select all the buttons with "deleteentry" class

  const deleteButtons = document.querySelectorAll('.deleteentry');

  // Adding loop through all the delete functions

  deleteButtons.forEach(function (button) {
     // Adding click event listner to each delete button 
     button.addEventListener('click', function () {

        // When the delete button is clicked, find the closet entry with class "tasktodo"

        const taskRow = button.closest('.tasktodo');

        // getting the parent container of taskrow 
        // Parent element: that hold all the newly added entries
        const parentContainer = taskRow.parentElement;
        // Checking if the task row is in new-entries container
        if (parentContainer.id === "new-entries") {

           // If the new added entry is in new-entries container
           // then the index of taskrow in the parentcontainer

           const index = Array.from(parentContainer.children).indexOf(taskRow);

           // Remove the item from the data array using the foundindex 
           data.splice(index, 1);

           // update the entries

           displayEntries();
        } else {
           // if the item is in diffrent box just remove it
           taskRow.remove();
        }
     });
  });
}


// / Initialize Sortable on each container
const containers = document.querySelectorAll('.droptarget, #new-entries');

containers.forEach(function (container) {
  new Sortable(container, {      
     // Allow drag-and-drop between these containers
     group: "sortable",
     animation: 500, // Smooth animation when sorting


     //  Define the onEnd event, which happens when the item is dropped
     onEnd: function (event) {

        // Checking if the item was dragged from 'new-entries' and dropped into differnt box
        if (event.from.id === "new-entries" && event.from !== event.to) {
           // Getting old index of new entry where it was before and delete if from there
           data.splice(event.oldIndex, 1);
        }

   // Reattach deletehandlers to delete buttons work and they are been dropped into new box
        attachDeleteHandlers();
     }
  });
});


function toggleInput(index){

  var inputfield = document.getElementById(`myInput-${index}`);
  var btntoeditinpt = document.getElementById(`editinputbtn${index}`)
  inputfield.disabled = !inputfield.disabled

  if (inputfield.disabled)
     {
     btntoeditinpt.textContent = "Edit" 

  } else {
     btntoeditinpt.textContent = "Save"
  }
};

const loginform = document.getElementById('loginform')
loginform.addEventListener('submit', (ev) => {
  ev.preventDefault()
});

 // function to delete item
function deleteitem(index) {
  data.splice(index, 1);
}


const hamburger = document.querySelector(".hamburger")
const boxes = document.querySelector(".boxes")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  boxes.classList.toggle("active")

})






