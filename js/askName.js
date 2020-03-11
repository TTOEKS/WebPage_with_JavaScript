let userName = ""
const LS_USRNAME = "userName",
    CN_SHOW = "showing";

const userName_form = document.querySelector('.userName-form'),
    textArea = userName_form.querySelector('input'),
    greetings = document.querySelector('.grettings-form');



function askName() {
    userName_form.addEventListener('submit', handleSubEvent);

}

function handleSubEvent(event) {
    console.log("handleSubEvent Function starting");

    event.preventDefault();
    userName = textArea.value;

    console.log(`handleSubEvent Function end and userName is ${userName}`);
    save_name(userName);

}

function save_name(user_name) {
    console.log(`save_name function is start params is ${user_name}`);
    return localStorage.setItem(LS_USRNAME, user_name);
}

function load_name() {
    return localStorage.getItem(LS_USRNAME);
}

function init() {
    userName = load_name();
    let user_input = "";

    // Doesn't exist user name in localStorage 
    if (userName == null || userName == "" || userName == "undefined") {
        askName();
        console.log(`user name is not save in localStorage and user input is ${userName} `);

        save_name(userName);
    }
    // Exist user name in localStorage
    else {
        userName_form.removeChild(textArea);
        console.log(`userName of local storage is not null!`);
        greetings.innerHTML = `Welcome ${userName}!!`;

    }

}

init();