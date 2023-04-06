
document.addEventListener("DOMContentLoaded", () => {
 
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();   
    createP(e.target['new-task-description'].value, '#list')
    sortParagrphs(e)
    form.reset()

  })
  
  });
  let form = document.querySelector('form');
function createP(todo, id){
  let p = document.createElement('p')
  let innerP = document.createElement('p')
  p.id = 'list_item'
  let btn = document.createElement('button')  
  let editBtn = document.createElement('button')
  let pen = document.createElement('img')
  pen.src = "https://cdn1.iconfinder.com/data/icons/essential-21/128/Edit-512.png"
  pen.style.width =  '18px' 
  editBtn.addEventListener("click", editText)
  btn.addEventListener("click", deleteTodo)
  btn.textContent = 'X'
  innerP.textContent = `${todo}`
  p.appendChild(innerP)
  document.querySelector(id).appendChild(p)
  p.appendChild(createSelect())
  p.appendChild(createInput())
  p.appendChild(btn)
  editBtn.append(pen)
  p.appendChild(editBtn)

  
}
function deleteTodo(e){
  e.target.parentNode.remove()
}
function createSelect(){
  const drop = document.createElement('select')
  const colors = {high: 'red', medium: 'yellow', low: 'green'}
  for (let color in colors){
    let option = document.createElement("option")
    option.value = color
    option.innerText = color
    option.style.color = colors[color]
    drop.appendChild(option)
  }
  return drop
}
function createInput(e){
  let newForm = document.createElement('form')
  newForm.id = "create_due_date_form"
  newForm.action = "#"
  newForm.method = "POST"
  let box = document.createElement('input')
  box.type = "test"
  box.id = "new_due_date"
  box.placeholder = "Due Date: mmddyyy"
  newForm.appendChild(box)
  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.parentNode.childNodes[0].append(`\nDue Date: ${e.target['new_due_date'].value}`)
    e.target.remove()  
      
  })
  return newForm
}

let count = 0;
function editText(e){
  if(count === 0){
  e.target.style.background = 'red'
  e.target.parentNode.childNodes[0].contentEditable = true
  count++
 }
  else{
  e.target.style.background = 'buttonface'
  e.target.parentNode.childNodes[0].contentEditable = false
  count = 0;
  }
}
let array = []
function sortParagrphs(e){
  let p = e.target
  array.push(p)
  return array
}