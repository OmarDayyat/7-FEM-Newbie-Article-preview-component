const shareIcon = document.querySelector(".share-icon");
const shareBtn = document.querySelector(".share-btn");
const socialMediaBar = document.querySelector(".social-media");

// function show() {
//   shareIcon.style.backgroundColor = "#fff";
//   shareBtn.style.backgroundColor = "hsl(217, 19%, 35%)";
//   socialMediaBar.style.opacity = 1;
// }

shareBtn.addEventListener('click', () => {
  socialMediaBar.classList.toggle("social-media-show");
  shareBtn.classList.toggle("share-btn-active");
  shareIcon.classList.toggle("share-icon-active");
})

