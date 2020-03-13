const todoList = document.querySelector('.todolist-ul'),
    todo_form = document.querySelector('.todo-form'),
    todo_textArea = todo_form.querySelector('input'),
    todo_button = todo_form.querySelector('#todo-button');

let array_todoList = Array();


function check_localStorage() {
    const check_LS = localStorage.getItem(LS_USERNAME);

    // Local Storage is empty
    if (check_LS == null || check_LS == "" || check_LS == "undefined") {
        console.log('Local Storage to saving userName is empty!');

        return false;

    }
    // Local Storage is empty 
    else {
        console.log(`get Item in local storage ${check_LS}!`);
        return true;
    }
}

function enter_handle() {
    todo_form.addEventListener("submit", makeList);
}

// make toDo list 
function makeList(event) {
    console.log('makeList function starting!');

    event.preventDefault();
    const job = todo_textArea.value;
    console.log(`User job is ${job}`);

    if (job != "") {
        // if user input same context
        if (check_same_item(job)) {
            alert('jobList have your request already!');
        } else {
            array_todoList.push(job);
            console.log(array_todoList);
        }

        // make input text clear
        todo_textArea.value = "";
    }

    save_array(array_todoList);
    build_todolist();


}

function save_array(array_item) {
    localStorage.setItem(LS_TODOLIST, array_item);
}

function load_array() {
    console.log("load_array function start");
    temp = localStorage.getItem(LS_TODOLIST);
    if (temp == null) {
        console.log('LS_TODOLIST is empty');
    } else {
        array_todoList = temp.split(",");
        build_todolist();
    }
}

// if array_todoList have user input return true
function check_same_item(input) {
    const array_length = array_todoList.length;
    if (array_length > 0) {
        for (let i = 0; i < array_length; i++) {
            if (input == array_todoList[i]) {
                return true;
            }
        }
    }

    return false;
}

function build_todolist() {
    const array_length = array_todoList.length;
    let output = ""
    if (array_length > 0) {
        for (let i = 0; i < array_length; i++) {
            output += `<li> ${array_todoList[i]} </li>`;
        }
    }

    todoList.innerHTML = output;
}

function init() {
    // Local Storage is not emptys -> display todoList blank
    if (check_localStorage()) {
        load_array();
        console.log("check_localStorage return true");
        enter_handle();
    }
    // Local Storage is empty -> do not display todoList blakc;
    else {
        console.log("check_localStorage return false");
        document.body.removeChild(todo_form);

    }
}

init();