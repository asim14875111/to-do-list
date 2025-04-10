
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
    editcompleted1.textContent = 'Edit'
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


  

//   // Functions to delete rows



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

function cancelentries(){
 

  loginform.reset()
}

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


const array = []

function displayEntries()
{
  const tbody = document.getElementById('new-entries')
  
  tbody.innerHTML = ""; 

  // <td  >${entry.newentry}</td>
  data.forEach((entry,index) => {
    const row = document.createElement('tr')
    row.classList = 'tasktodo'
    row.id = "addnewtask"
    row.innerHTML = `
     <input  class="addnewtask"  type="input"  id="myInput-${index}" value="${entry.newentry}" disabled>
 <td type="button" class="cursor-pointer editbutton" id="editinputbtn${index}" onclick="toggleInput(${index})">Edit</td>

    <td class="row2 deleteentry" onclick="deleteitem(${index})">  <img width="30px" src="images/icons8-delete-100.png" alt=""><td>`;
    tbody.appendChild(row)
});
}

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

  // function to dlete item

function deleteitem(index){
  data.splice(index,1);
  const loginform = document.getElementById('loginform')
  loginform.reset()
  displayEntries()
  updatebutton.innerHTML = "Add"}

const updatebutton = document.getElementById('updatebutton')

// function to edit item

function edititem(index){
  const entry = data[index];
document.getElementById('add-entry').value = entry.newentry;
currentEditIndex = index
updatebutton.innerHTML = "save"

const openinp = document.getElementById('editinputbtn')

openinp.addEventListener("click",() =>{
  modal.classList.add("open")})

}
 


// new sortable(dropItems{

// })


// new Sortable(dropItems,{
//   animation: 300,
//   chosenClass: "sortable-chosen",
//   dragClass: "sortable-drag",
// });

// new Sortable(dropitem4,{
//   animation: 300,
//   chosenClass: "sortable-chosen",
//   dragClass: "sortable-drag",
// });



// new Sortable(dropitem,{
//   animation: 370,
//   chosenClass: "sortable-chosen",
//   dragClass: "sortable-drag",

// })
// new Sortable(dropitem3,{
//   animation: 360,
//   chosenClass: "sortable-chosen",
//   dragClass: "sortable-drag",

// });




// const draggables = document.querySelectorAll(".tasktodo");
// const droppables = document.querySelectorAll(".droptarget")


// draggables.forEach((tasktodo) => {
//   tasktodo.addEventListener("dragstart", () =>{
//     tasktodo.classList.add("is-dragging")
//   })
//   tasktodo.addEventListener("dragend", () =>{
//     tasktodo.classList.remove("is-dragging")
//   })

// });



// droppables.forEach((zone) =>{
//   zone.addEventListener("dragover",(e) =>{
//     e.preventDefault();

//     const bottomTask = insertAboveTask(zone,e.clientY);
// const curTask = document.querySelector(".is-dragging");

// if (!bottomTask){
//   zone.appendChild(curTask);
// }else{
//   zone.insertBefore(curTask, bottomTask);
// }

//   });
// })


// const  insertAboveTask = ( zone,mouseY) =>{
// const els = querySelectorAll(".tasktodo:not(.is-dragging)");


// let closestTask = null;
// let closestOffset = Number.NEGATIVE_INFINITY;

// els.forEach((tasktodo) =>{
//   const { top } = tasktodo.getBoundingClientRect();

//   const offset = mouseY - top;
  
// if (offset < 0 && offset > closestOffset){
//   closestOffset = offset;
//   closestTask = tasktodo;
// }

// })

// };


// const boxes = document.querySelectorAll('.box')
// image = document.querySelector('.img') 


// boxes.forEach((box) =>{
//   box.addEventListener("dragover", (e) =>{
//     e.preventDefault()
//   });
// box.addEventListener("drop",()=> {
//   box.appendChild(image)
// } )

// })


// const boxes = document.querySelectorAll('.droptarget')

// dragtobe = document.querySelector('#dragtarget')
// dragtobe2 = document.querySelector('#dragtarget2')

// boxes.forEach((droptarget) =>{
//   droptarget.addEventListener("dragover", (e) =>{
//     e.preventDefault()
//   });
//   droptarget.addEventListener("drop",()=>{
//     droptarget.appendChild(dragtobe)
//     droptarget.appendChild(dragtobe2)
//   })




// })
// boxes.forEach((droptarget) =>{
//   droptarget.addEventListener("dragover", (e) =>{
//     e.preventDefault()
//   });
//   droptarget.addEventListener("drop",()=>{
//     droptarget.appendChild(dragtobe2)
//   })

  
// })



// droptarget.addEventListener("drop",()=>{
//   droptarget.appendChild(dragtobe2)
// })



//   function dragStart(event){
//     event.dataTransfer.setData("Text",event.target.id);}

//   function allowDrop(event){
//     event.preventDefault();
//   }

//   function drop(event){
//     event.preventDefault();
//     const data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data))
//   }



// const imgBox = document.getElementsByClassName
// ("imgbox");

// const whiteBoxes = document.getElementsByClassName('whiteBox')


// imgBox.addEventListener('dragstart', ()=>{
// console.log("dragstart has been triggered")
// })

// imgBox.addEventListener('dragend', ()=>{
//   console.log("dragend has been triggered")

// })


// for(whiteBox of whiteBoxes){
//   whiteBox.addEventListener('dragover',()=>{
    
//   })
//   whiteBox.addEventListener('dragenter',()=>{

//   })
//   whiteBox.addEventListener('dragleave',()=>{

//   })
//   whiteBox.addEventListener('drop',()=>{

//   })
// }




// const sortableList = document.querySelector(".droptarget")
// const items = sortableList.querySelectorAll(".tasktodo");


// items.forEach(tasktodo =>{
// tasktodo.addEventListener("dragstart",() =>{
//   tasktodo.classList.add("dragging");
//   setTimeout(() => tasktodo.classList.add("dragging"), 0)
// })
// tasktodo.addEventListener("dragend",() =>{
//   tasktodo.classList.remove("dragging");

// })


// })

// const initSortableList = (e) => {
//   const draggingItem = sortableList.querySelector(".dragging")
//   // Getting all items expect currently dragging and making array of them
// const siblings = [... sortableList.querySelectorAll(".tasktodo:not(.dragging)")]


// // Finding the sibling after which the dragging item should be placed

// let nextSibling = siblings.find(sibling =>{
// return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
// });

// // console.log(nextSibling)

// // Inserting the dragging item before the found sibling
// sortableList.insertBefore(draggingItem,nextSibling)}

// sortableList.addEventListener("dragover",initSortableList)

const dropItems = document.querySelector
('#box-1')
const dropitem = document.querySelector('#box-2')
const dropitem3 = document.querySelector('#box-3')


// Sortable.forEach((sortable,index) => Sortable.setIndex(index))

new Sortable(dropItems,{
  group: "sortable",
animation: 500,
});

new Sortable(dropitem,{
  group: "sortable",
animation: 500,


})
new Sortable(dropitem3,{
  group: "sortable",
animation: 500,

});


// let lists = document.getElementsByClassName("tasktodo");
// let rightBox = document.querySelector("#box-2") 
// let leftbox = document.querySelector("#box-1") 
// let thirdbox = document.querySelector("#box-3")
// for(tasktodo of lists){
//   tasktodo.addEventListener("dragstart", function (e){
//     let selected = e.target
//     console.log("dragstart has been targeted")

// rightBox.addEventListener("dragover", function (e){
//   e.preventDefault()
//   console.log("dragover has been targeted")

// })
// rightBox.addEventListener("drop", function(e){
//   rightBox.appendChild(selected);
// selected = null
// console.log("drop has been targeted")

// })
// leftbox.addEventListener("dragover", function (e){
//   e.preventDefault()
//   console.log("dragover has been targeted")

// })
// leftbox.addEventListener("drop", function(e){
//   leftbox.appendChild(selected);
// selected = null

// console.log("drop has been targeted")

// });

// thirdbox.addEventListener("dragover", function (e){
//   e.preventDefault()
//   console.log("dragover has been targeted")

// })
// thirdbox.addEventListener("drop", function(e){
//   thirdbox.appendChild(selected);
// selected = null
// console.log("drop has been targeted")

// })

// });
// }




