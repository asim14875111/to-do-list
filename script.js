  // Functions to delete rows
  function deletetask1(){
    const row1 = document.getElementById('dragtarget')
    row1.remove()}
  
 function deletetask2(){
    const row2 = document.getElementById('dragtarget2')
    row2.remove()
  }
    
    function deleteitem3(){
      const row3 = document.getElementById('dragtarget3')
      row3.remove() 
    }
    function deleteprogress1(){
      const progress1 = document.getElementById('dragtarget4')
      progress1.remove() 
    }  

    function deleteprogress2(){
      const progress2 = document.getElementById('dragtarget5')
      progress2.remove()
    }
    function deleteprogress3(){
      const progress3 = document.getElementById('dragtarget6')
      progress3.remove()
    }
    function deleteprogress3(){
      const progress3 = document.getElementById('dragtarget6')
      progress3.remove()
    }
    function completed1(){
      const completed1 = document.getElementById('dragtarget7')
      completed1.remove()
    }

    function deletecompletedtask(){
      const completedtask = document.getElementById('dragtarget8')
      completedtask.remove() 
    }


    function deleterow(){
      const deleterow = document.getElementById('dragtarget9')
      deleterow.remove()
    }
 


    const inputfield = document.getElementById('first-input');
    const editButton = document.getElementById('editButton');

    editButton.addEventListener('click', function(){
      inputfield.disabled = !inputfield.disabled;
      if(inputfield.disabled){
        editButton.textContent = 'Edit'
      }else{
        editButton.textContent = "Save"
      }
    })

    // 2nd row starts

    const secondinputfield = document.getElementById('2nd-input-field');
    const editbutton = document.getElementById('editbutton');

    editbutton.addEventListener('click', function(){
secondinputfield.disabled = !secondinputfield.disabled;
      if(secondinputfield.disabled){
        editbutton.textContent = 'Edit'
      }else{
        editbutton.textContent = "Save"
      }
    })

    // 3rd row starts

    const editinput = document.getElementById('editinput');
    const edittask = document.getElementById('edittask');


    edittask.addEventListener('click', function(){
      editinput.disabled = !editinput.disabled;
             if(editinput.disabled){
              edittask.textContent = 'Edit'
             }else{
              edittask.textContent = "Save"
             }
           })


          //  4th row
     
    const editablefirstprogess = document.getElementById('editablefirstprogess');
    const editprogress1 = document.getElementById('editprogress1');


    editprogress1.addEventListener('click', function(){
      editablefirstprogess.disabled = !editablefirstprogess.disabled;
             if(editablefirstprogess.disabled){
              editprogress1.textContent = 'Edit'
             }else{
              editprogress1.textContent = "Save"
             }
           })

          //  5th row

 const editablesecondprogess = document.getElementById('editablesecondprogess');
   const editprogress2 = document.getElementById('editprogress2');
    
  editprogress2.addEventListener('click', function(){
  editablesecondprogess.disabled = !editablesecondprogess.disabled;
if(editablesecondprogess.disabled){
  editprogress2.textContent = 'Edit'
   }else{
  editprogress2.textContent = "Save"
                   }
                 })

                //  6th row

  const editablethirdprogess = document.getElementById('editablethirdprogess');
 const editprogress3 = document.getElementById('editprogress3');
          
 editprogress3.addEventListener('click', function(){
 editablethirdprogess.disabled = !editablethirdprogess.disabled;
  if(editablethirdprogess.disabled){
   editprogress3.textContent = 'Edit'
  }else{
   editprogress3.textContent = "Save"
                         }
                       })
    
  //  7th row

 const editableone = document.getElementById('editableone');
 const editcompleted1 = document.getElementById('editcompleted1');
                
 editcompleted1.addEventListener('click', function(){
  editableone.disabled = !editableone.disabled;
    if(editableone.disabled){
    editcompleted1.textContent = 'Edit'
   }else{
 editcompleted1.textContent = "Save"
 }
   })
          
  //  8th row


 const editabletwo = document.getElementById('editabletwo');
  const editcompleted2 = document.getElementById('editcompleted2');
                      
 editcompleted2.addEventListener('click', function(){
  editabletwo.disabled = !editabletwo.disabled;
 if(editabletwo.disabled){
    editcompleted2.textContent = 'Edit'
    }else{
   editcompleted2.textContent = "Save"
 }
 })
       
 //  9th row 
   const editablethree = document.getElementById('editablethree');
   const editcompleted3 = document.getElementById('editcompleted3');
 editcompleted3.addEventListener('click', function(){
  editablethree.disabled = !editablethree.disabled;
 if(editablethree.disabled){
  editcompleted3.textContent = 'Edit'
}else{
 editcompleted3.textContent = "Save"
      }
})



const openBtn = document.getElementById('openModal')
const addentries = document.getElementById('updatebutton')
const cancel = document.getElementById('closeModal')
const modal = document.getElementById('modal')


openBtn.addEventListener("click",() =>{
  modal.classList.add("open")
});


addentries.addEventListener("click",() =>{
  modal.classList.remove("open")
});

cancel.addEventListener("click",() =>{
  modal.classList.remove("open")
});


function cancelentries(){
  loginform.reset()
}

let data = []


function addEntry(){
  const newentry = document.getElementById('add-entry').value
const entry = {newentry}


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

  attachDeleteHandlers(); // Attach handlers to new entries
}




function attachDeleteHandlers() {


  // Select all the buttons with "deleteentry" class

  const deleteButtons = document.querySelectorAll('.deleteentry');

// Adding loop through all the delete functions

  deleteButtons.forEach(function(button) {
    // Adding click event listner to each delete button 
    button.addEventListener('click', function() {

// When the delete button is clicked, find the closet entry with class "tasktodo"

const taskRow = button.closest('.tasktodo');


// getting the parent container of taskrow 
// Parent element: that hold all the new added entries
      const parentContainer = taskRow.parentElement;
      // Checking if the task row is in new-entries container
      if (parentContainer.id === "new-entries") {

        // If the new added entry is in new-entries container then the index of taskrow in the parentcontainer

        const index = Array.from(parentContainer.children).indexOf(taskRow);

        // Remove the item from the data array using the foundindex 
        data.splice(index, 1);    

        // update the entries

        displayEntries();          
      } else
     {
        // if the item is in diffrent box just remove it
        taskRow.remove();
    }
    });
  });
}




// / Initialize Sortable on each container
const containers = document.querySelectorAll('.droptarget, #new-entries');

containers.forEach(function(container) {
  new Sortable(container, {
 // Allow drag-and-drop between these containers
    group: "sortable",    
    animation: 500, // Smooth animation when sorting



//  Define the onEnd event, which happens when the item is dropped
    onEnd: function(event) {


      // Checking if the item was dragged from 'new-entries' and dropped into differnt box
      if (event.from.id === "new-entries" && event.from !== event.to){
        // Getting old index of new entry where it was before and delete if from there
        data.splice(event.oldIndex,1);
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

if(inputfield.disabled){
  btntoeditinpt.textContent = "Edit"

}
else{
  btntoeditinpt.textContent = "Save"
}
};




const loginform = document.getElementById('loginform')
loginform.addEventListener('submit', (ev) =>{
  ev.preventDefault()});

//   // function to delete item
function deleteitem(index){
  data.splice(index,1);
}



