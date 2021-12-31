"use strict";

function generateAvatar(
  text,
  foregroundColor = "white",
  backgroundColor = "black"
) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "bold 100px Assistant";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text.slice(0, 2), canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
}
const users = ["hamed ostovar ", "jonas eshmit"];
const avatarWrapper = document.querySelector(".avatars");
users?.forEach((el) => {
  const img = document.createElement("img");
  img.src = generateAvatar(
    el
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase(),
    "white",
    `rgb(${generateRandomColor(0, 255)},${generateRandomColor(
      0,
      255
    )},${generateRandomColor(0, 255)})`
  );
  avatarWrapper.appendChild(img);
});
function generateRandomColor(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}
