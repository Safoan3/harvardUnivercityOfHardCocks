const CockButton = document.getElementById("cock_button")
const CockIMage = document.getElementById("cockimage")
const cockDesc = document.getElementById("lol")
const imagesA = [
    ["images/cockimage/black_cock.png", "black cock","dangerous cock never do the gang sign 💀"],
   ["images/cockimage/hard_cock.png","hard cock","its very erects. You can deep throat it no problem"],
    ["images/cockimage/mini_cock.png", "mini cock","its very small and its not enough to satisfy someone. But it not gonna suck it self"],
    ["images/cockimage/small_cock.png", "small cock","A little bigger then mini cock and its more erect. Its very sensitive to touch. Wont even last 0.52 secounds"],
    ["images/cockimage/soft_cock.png", "soft cock","Rare cock but its the softest of them all. There is nothing you can do to make it hard due to the owner of this cock having 2% body fat."],
    ["images/cockimage/white_cock.png", "white cock","The most friendly cock."]
];

let print = console.log

let currentImageIndex = 0;

CockButton.onclick = function(){
    currentImageIndex = (currentImageIndex + 1) % imagesA.length;
    const newImageUrl = imagesA[currentImageIndex];
    CockIMage.src = newImageUrl[0];
    CockButton.textContent = newImageUrl[1]
    cockDesc.textContent = newImageUrl[2]
}