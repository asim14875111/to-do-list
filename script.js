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
    function deletetask1(){
      const row1 = document.getElementById('dragtarget')
      
      row1.remove()
      
    }
    
   function deletetask2(){
      const row2 = document.getElementById('dragtarget2')
      row2.remove()
    }
      
      function deleteitem(){
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
