let todo = document.getElementById("Todo");
let list = JSON.parse(localStorage.getItem("List")) || []; 


display();

function clear() {
    todo.value = "";
}

function add() {
    let to = todo.value;
    if (to.trim()) { 
        list.push(to);
        localStorage.setItem("List", JSON.stringify(list));
        clear();
        display();
    }
}

function display() {
    let show = "";
    for (let i = 0; i < list.length; i++) {
        show += `
       <tr>
            <td><input id="check-${i}" type="checkbox" onclick="done(${i})"></td>
            <td><h2 id="h2-${i}" class="list">${list[i]}</h2></td>
            <td> <button class="btn btn-outline-danger" onclick="del(${i})">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("List").innerHTML = show;
}

function done(index) {
    let checkbox = document.getElementById(`check-${index}`);
    let h2 = document.getElementById(`h2-${index}`);
    if (checkbox.checked) {
        h2.innerHTML = "Done";
    } else {
        h2.innerHTML = list[index];
    }
}
function del(index){
    list.splice(index,1)
    localStorage.setItem("List",JSON.stringify(list))
    display()
    }