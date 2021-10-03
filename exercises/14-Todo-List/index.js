function del(){
    let parent = document.querySelector('ul');
    let Li = document.querySelectorAll('li');
    let span = document.querySelectorAll('span');
    
    for (let i = 0; i < span.length; i++) {
        const element = span[i];
        element.addEventListener('click',function(){
            
            parent.removeChild(Li[i])
          
        })
    }  
}



let newToDo = document.querySelector('#addToDo');
newToDo.addEventListener('change',function(){
    let parent = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = '<span><i class="fa fa-trash"></i></span>' + newToDo.value;
    parent.appendChild(newLi);
    newToDo.value = ''
    del()

    
})


 del()



