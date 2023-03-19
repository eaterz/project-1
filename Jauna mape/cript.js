const uzdevumi=[];

function handleSubmit(event) {
        event.preventDefault();
        
        const uzdevums = document.getElementById("uzdevums").value;
       uzdevumi.push(uzdevums);
       console.log(uzdevumi);
        displayitem();
        //Ar JS izveidot HTML elementu

}

function displayitem(){
        const list = document.getElementById("saraksts");
        list.innerHTML = "";
        uzdevumi.forEach((viensuzdevums,id )=>{
                const newListItem = document.createElement("li");
                newListItem.textContent = viensuzdevums;
                list.appendChild(newListItem);
                const poga = document.createElement("button");
                poga.onclick = () => handledelete(id);
                poga.textContent = "X";
                newListItem.appendChild(poga);

        });

}
displayitem();
function handledelete(id){
        uzdevumi.splice(id,1);
        console.log(uzdevumi);
        let list = document.getElementById("saraksts");
    list.innerHTML = "";
    displayitem();
}

























































