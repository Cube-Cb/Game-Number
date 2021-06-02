const progressbar = document.getElementById("progressbar");
const firstCard = document.getElementById("firstCard");
const secondCard = document.getElementById("secondCard");
const trueSound = new Audio("audio/true.mp3");
const falseSound = new Audio("audio/false.mp3");
const finishSound = new Audio("audio/finish.mp3");
trueSound.volume = 0.05;
falseSound.volume = 0.05;
finishSound.volume = 0.05;
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function settingCards() {
  const firstNum = randomNumber(1, 10);
  const secondNum = randomNumber(1, 10);
  if (firstNum == secondNum) {
    settingCards();
    return;
  }
  firstCard.innerText = firstNum;
  secondCard.innerText = secondNum;
}
firstCard.onclick = () => {
  const firstNum = Number(firstCard.innerText);
  const secondNum = Number(secondCard.innerText);
  if (firstNum > secondNum) {
    firstCard.classList.add("success");
    trueSound.play();
    progressbar.style.width =
      Number(progressbar.style.width.replace("px", "").replace("%", "")) +
      10 +
      "%";
  } else {
    firstCard.classList.add("danger");
    falseSound.play();
    progressbar.style.width = 0;
  }
  if (progressbar.style.width == "100%") {
    progressbar.style.width = 0;
    levelNum.innerText++;
    finishSound.play();
  }
  glass.classList.add("active");
  setTimeout(() => {
    settingCards();
    glass.classList.remove("active");
    firstCard.classList.remove("success");
    firstCard.classList.remove("danger");
  }, 1500);
};
secondCard.onclick = () => {
  const firstNum = Number(firstCard.innerText);
  const secondNum = Number(secondCard.innerText);
  if (firstNum > secondNum) {
    secondCard.classList.add("danger");
    falseSound.play();
    progressbar.style.width = 0;
  } else {
    secondCard.classList.add("success");
    trueSound.play();
    progressbar.style.width =
      Number(progressbar.style.width.replace("px", "").replace("%", "")) +
      10 +
      "%";
  }
  if (progressbar.style.width == "100%") {
    progressbar.style.width = 0;
    levelNum.innerText++;
    finishSound.play();
  }
  glass.classList.add("active");
  setTimeout(() => {
    settingCards();
    glass.classList.remove("active");
    secondCard.classList.remove("success");
    secondCard.classList.remove("danger");
  }, 1500);
};

settingCards();
