

  // Functions to delete rows
  function deletetask1(){
    const row1 = document.getElementById('dragtarget')
    
    row1.remove()
    
  }
  
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
        editButton.textContent = 'edit'
      }else{
        editButton.textContent = "save"
      }
    })

    // 2nd row starts

    const secondinputfield = document.getElementById('2nd-input-field');
    const editbutton = document.getElementById('editbutton');

    editbutton.addEventListener('click', function(){
secondinputfield.disabled = !secondinputfield.disabled;
      if(secondinputfield.disabled){
        editbutton.textContent = 'edit'
      }else{
        editbutton.textContent = "save"
      }
    })

    // 3rd row starts

    const editinput = document.getElementById('editinput');
    const edittask = document.getElementById('edittask');


    edittask.addEventListener('click', function(){
      editinput.disabled = !editinput.disabled;
             if(editinput.disabled){
              edittask.textContent = 'edit'
             }else{
              edittask.textContent = "save"
             }
           })


          //  4th row
     
    const editablefirstprogess = document.getElementById('editablefirstprogess');
    const editprogress1 = document.getElementById('editprogress1');


    editprogress1.addEventListener('click', function(){
      editablefirstprogess.disabled = !editablefirstprogess.disabled;
             if(editablefirstprogess.disabled){
              editprogress1.textContent = 'edit'
             }else{
              editprogress1.textContent = "save"
             }
           })

          //  5th row

          const editablesecondprogess = document.getElementById('editablesecondprogess');
          const editprogress2 = document.getElementById('editprogress2');
    
    
          editprogress2.addEventListener('click', function(){
            editablesecondprogess.disabled = !editablesecondprogess.disabled;
                   if(editablesecondprogess.disabled){
                    editprogress2.textContent = 'edit'
                   }else{
                    editprogress2.textContent = "save"
                   }
                 })

                //  6th row

                const editablethirdprogess = document.getElementById('editablethirdprogess');
                const editprogress3 = document.getElementById('editprogress3');
          
          
                editprogress3.addEventListener('click', function(){
                  editablethirdprogess.disabled = !editablethirdprogess.disabled;
                         if(editablethirdprogess.disabled){
                          editprogress3.textContent = 'edit'
                         }else{
                          editprogress3.textContent = "save"
                         }
                       })
    
                      //  7th row

                      const editableone = document.getElementById('editableone');
                      const editcompleted1 = document.getElementById('editcompleted1');
                
                
                      editcompleted1.addEventListener('click', function(){
                        editableone.disabled = !editableone.disabled;
                               if(editableone.disabled){
                                editcompleted1.textContent = 'edit'
                               }else{
                                editcompleted1.textContent = "save"
                               }
                             })
          
                            //  8th row


                            const editabletwo = document.getElementById('editabletwo');
                            const editcompleted2 = document.getElementById('editcompleted2');
                      
                      
                            editcompleted2.addEventListener('click', function(){
                              editabletwo.disabled = !editabletwo.disabled;
                                     if(editabletwo.disabled){
                                      editcompleted2.textContent = 'edit'
                                     }else{
                                      editcompleted2.textContent = "save"
                                     }
                                   })
                
                                  //  9th row 

                                  const editablethree = document.getElementById('editablethree');
                                  const editcompleted3 = document.getElementById('editcompleted3');
                            
                            
                                  editcompleted3.addEventListener('click', function(){
                                    editablethree.disabled = !editablethree.disabled;
                                           if(editablethree.disabled){
                                            editcompleted3.textContent = 'edit'
                                           }else{
                                            editcompleted3.textContent = "save"
                                           }
                                         })

                                        

      const taskInput = document.getElementById('taskInput');
     const taskList = document.getElementById('taskList')
                                         
  function addTask(){
    const taskText = taskInput.value;
    if(taskText !== ''){
    const item = document.querySelector('li');
    item.textContent = taskText;
     taskList.appendChild(item)
     taskInput.value = '' }
 }  



 function deletelist(){
  const item = document.querySelector('li');

  item.remove()
}
function dragStart(event) {
  // Storring data which is being dragged & holding the data 
  event.dataTransfer.setData("Text", event.target.id);
}



//   Function to drop selected element

function drop(event) {
// Getting data from the function drag start where we set the data by targetting id

  const data = event.dataTransfer.getData("Text");

  // Adding appendchild to drop element at target position
  event.target.appendChild(document.getElementById(data))
}


//  Function to allow element to be dropped


function allowDrop(event) {
  // stops the element at the position where you want to drop it.
  event.preventDefault();}

  

  // Functions to delete rows



const openBtn = document.getElementById('openModal')
const closeBtn = document.getElementById('updatebutton')
const cancel = document.getElementById('closeModal')

const modal = document.getElementById('modal')


openBtn.addEventListener("click",() =>{
  modal.classList.add("open")
})

closeBtn.addEventListener("click",() =>{
  modal.classList.remove("open")
})

cancel.addEventListener("click",() =>{
  modal.classList.remove("open")
})



let data =[]
currentEditIndex = null

function addEntry(){
  const newentry = document.getElementById('add-entry').value
const entry = {
  newentry}


if(currentEditIndex !== null){
  data[currentEditIndex] = entry;
  currentEditIndex = null
}
else{
  data.push(entry)
  // console.log(entry)

}

displayEntries()
loginform.reset()
updatebutton.innerHTML = "add"


}


function displayEntries(){
  const tbody = document.getElementById('new-entries')

  tbody.innerHTML = "";

  data.forEach((entry,index) => {
    const row = document.createElement("tr")
    row.innerHTML = `
    <td class="row2">${entry.newentry}<td>
    <td class="row2"  onclick="edititem(${index})" >
 <img id="openinput" width="23px" height="20px"  src="images/icons8-edit-document-24.png" alt=""><td>
    <td class="row2 deleteentry" onclick="deleteitem(${index})">  <img width="30px" height="30px" src="images/icons8-delete-100.png" alt=""><td>`;
    tbody.appendChild(row)
  })
}





const loginform = document.getElementById('loginform')
loginform.addEventListener('submit', (ev) =>{
  ev.preventDefault()
})


function deleteitem(index){
  data.splice(index,1);
  const loginform = document.getElementById('loginform')
  loginform.reset()
  displayEntries()
  updatebutton.innerHTML = "Add"}

const updatebutton = document.getElementById('updatebutton')

function edititem(index){
  const entry = data[index];
document.getElementById('add-entry').value = entry.newentry;
currentEditIndex = index
updatebutton.innerHTML = "save"

}

// openinput

const openinp = document.getElementById('openinput')

openinp.addEventListener("click",() =>{
  modal.classList.add("open")
})