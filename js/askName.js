let userName = ""
const LS_USERNAME = "userName",
    CN_SHOW = "showing",
    LS_TODOLIST = "todoList";

const userName_form = document.querySelector('.userName-form'),
    textArea = userName_form.querySelector('input'),
    greetings = document.querySelector('.greetings-h3');



function askName() {
    userName_form.addEventListener('submit', handleSubEvent);

}

function handleSubEvent(event) {
    console.log("handleSubEvent Function starting");

    event.preventDefault();
    userName = textArea.value;

    console.log(`handleSubEvent Function end and userName is ${userName}`);
    save_name(userName);

    location.reload();
}

function save_name(user_name) {
    console.log(`save_name function is start params is ${user_name}`);
    return localStorage.setItem(LS_USERNAME, user_name);
}

function load_name() {
    return localStorage.getItem(LS_USERNAME);
}

function init() {
    userName = load_name();
    let user_input = "";

    // Doesn't exist user name in localStorage 
    if (userName == null || userName == "" || userName == "undefined") {
        askName();
        console.log(`user name is not save in localStorage and user input is ${userName} `);
    }
    // Exist user name in localStorage
    else {
        userName_form.removeChild(textArea);
        console.log(`userName of local storage is not null!`);
        greetings.innerHTML = `Welcome ${userName}!!`;

    }

}

init();