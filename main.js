var images = [
  "pepe.png",
  "https://imgc.cc/2023/06/22/64944b607f95b.jpg",
  "https://imgc.cc/2023/06/22/64942239d8f48.jpg",
  "scene.png"
  
];
var currentIndex = 0;
var imgElement = document.getElementById("image");

function updateImage() {
  imgElement.src = images[currentIndex];
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// 更新图片的源，每3秒执行一次
setInterval(updateImage, 3000);
