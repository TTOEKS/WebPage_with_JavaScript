const body_element = document.querySelector("div");
const file_path = Array();

/*
    -Image files name-
    airport.jpg
    hawaii.jpg
    autumn.jpg
    dog.jpg
    evening.png
    landscape.jpg
    landscape_1.jpg
    landscape_2.jpg
    landscape_3.jpg
    milky_wave.jpg
    ocean.jpg
    sunset.jpg
    autumn.jpg
    silhouette.jpg
    
*/

// load image path
function load_images() {
    const file_dir = "./resource/"

    file_path.push(`${file_dir}airport.jpg`);
    file_path.push(`${file_dir}hawaii.jpg`);
    file_path.push(`${file_dir}autumn.jpg`);
    file_path.push(`${file_dir}dog.jpg`);
    file_path.push(`${file_dir}evening.png`);
    file_path.push(`${file_dir}landscape.jpg`);
    file_path.push(`${file_dir}landscape_1.jpg`);
    file_path.push(`${file_dir}landscape_2.jpg`);
    file_path.push(`${file_dir}landscape_3.jpg`);
    file_path.push(`${file_dir}milky_wave.jpg`);
    file_path.push(`${file_dir}ocean.jpg`);
    file_path.push(`${file_dir}sunset.jpg`);
    file_path.push(`${file_dir}silhouette.jpg`);


    console.log(file_path.toString());
}

// setting random Image
function setting_images() {
    let rand_int = parseInt(Math.random() * 100) % file_path.length;

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