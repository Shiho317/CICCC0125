const textInput = document.querySelector('#add-input');
const submitBtn = document.querySelector('#add-btn');
const noteList = document.querySelector('#list');
const newList = document.createElement('li');


const getTextValue = (e) => {
  e.preventDefault();

  const noteValue = textInput.value;

  if(noteValue){
    newList.innerHTML = 
    `<p>${noteValue}<p>
    <p><i class="fa fa-pencil"></i><i class="fa fa-times"></i></p>`

    noteList.appendChild(newList);
  }else{
    return null
  }

  textInput.value='';
  
};

submitBtn.addEventListener('click', getTextValue);

const hide = document.querySelector('#hide-list');
const hideLabel = document.querySelector('#hide-list label')

const toggleVisible = (e) => {
  e.preventDefault();

  const on = 'Hide Notes';
  const off = 'Show Notes';

  if(hideLabel.innerHTML === on){
    noteList.classList.add('hidden');
    hideLabel.innerHTML = off;
  }else if(hideLabel.innerHTML === off){
    noteList.classList.remove('hidden');
    hideLabel.innerHTML = on;
  }
};

hide.addEventListener('click', toggleVisible);

const edit = document.querySelectorAll('.fa-pencil');
const deleted = document.querySelectorAll('.fa-times');

const deleteNotes = (e) => {
  e.preventDefault();

  console.log(e.target)
}

console.log(deleted)

deleted.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', function(e){
    e.preventDefault();

    const getIndex = [].slice.call(deleted).indexOf(deleteBtn);
    deleted[getIndex].parentElement.parentElement.innerHTML = null
    
  })
})

