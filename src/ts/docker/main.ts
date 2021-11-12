import random from "lodash/random";
import "@src/scss/docker/main.scss";

const calculateNumberOfBubbles = () => {
  return innerWidth / 64;
};

const numberOfBubbles = calculateNumberOfBubbles();
const bubbleContaier = document.getElementById("bubble-container");

for (let i = 0; i < numberOfBubbles; i++) {
  const bubble = document.createElement("span");
  const size = random(10, 60);

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${random(innerWidth)}px`;
  bubble.style.animationDelay = `${random(10)}s`;
  bubble.style.animationDuration = `${random(6, 10)}s`;

  bubbleContaier?.appendChild(bubble);
}
