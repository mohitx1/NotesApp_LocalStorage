const addButton=document.querySelector('#add');

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
    })

    //toggle using edit button
    

    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    // textArea.addEventListener('input',(e)=>{
    textArea.addEventListener('change',(e)=>{
        const value =e.target.value;
        // console.log(value);
        mainDiv.innerHTML=value;
    })


    document.body.appendChild(note);
}


addButton.addEventListener('click',()=>{
    addNewNote()
});