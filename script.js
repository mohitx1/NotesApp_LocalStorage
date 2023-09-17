const addButton=document.querySelector('#add');

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    // console.log(textAreaData);
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    // console.log(notes);

    //Setting into LocalStorage
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote=( text = '')=>{

    const note=document.createElement('div');
    note.classList.add('note');

    const htmlData=`
    <div class="operation">
        <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    note.insertAdjacentHTML('afterbegin',htmlData)
    // console.log(note);

    //Storing into variables
    const editButton=note.querySelector('.edit');
    const delButton=note.querySelector('.delete');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

    //deleting the node
    delButton.addEventListener('click',()=>{
        note.remove()
        updateLSData();
    })

    //toggle using edit button
    textArea.value=text;
    mainDiv.innerHTML=text;
    

    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    // textArea.addEventListener('input',(e)=>{
    textArea.addEventListener('change',(e)=>{
        const value =e.target.value;
        // console.log(value);
        mainDiv.innerHTML=value;

        updateLSData();
    })


    document.body.appendChild(note);
}

//Getting data from LocalStorage
const notes= JSON.parse(localStorage.getItem("notes"));

if(notes){notes.forEach((note)=>addNewNote(note))}

addButton.addEventListener('click',()=>{
    addNewNote();
});