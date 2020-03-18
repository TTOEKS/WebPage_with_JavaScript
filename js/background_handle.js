const body_element = document.querySelector("div");
const file_path = Array();

/*
    -Image files name-
    airport.jpg
    hawaii.jpg
    plante.jpg
    seal.jpg
    winter.jpg
    autumn.jpg
    dog.jpg
    evening.png
    hintersee.jpg
    landscape.jpg
    landscape_1.jpg
    
*/

// load image path
function load_images() {
    const file_dir = "./resource/"

    file_path.push(`${file_dir}airport.jpg`);
    file_path.push(`${file_dir}hawaii.jpg`);
    file_path.push(`${file_dir}plante.jpg`);
    file_path.push(`${file_dir}seal.jpg`);
    file_path.push(`${file_dir}winter.jpg`);
    file_path.push(`${file_dir}autumn.jpg`);
    file_path.push(`${file_dir}dog.jpg`);
    file_path.push(`${file_dir}evening.png`);
    file_path.push(`${file_dir}hintersee.jpg`);
    file_path.push(`${file_dir}landscape.jpg`);
    file_path.push(`${file_dir}landscape_1.jpg`);


    console.log(file_path.toString());
}

// setting random Image
function setting_images() {
    let rand_int = parseInt(Math.random() * 10) % file_path.length;
    let rand_int_past;

    const image = new Image();
    image.src = file_path[rand_int];
    image.classList.add("bgImages");

    body_element.append(image);
    body_element.style.display = "block";


}

function init() {
    load_images();
    setting_images();

    setInterval(setting_images, 30000);
}

document.body.onload = init();