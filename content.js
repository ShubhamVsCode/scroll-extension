const containerSelector =
  "#root > div.MuiBox-root.css-k008qs > main > div.MuiContainer-root.MuiContainer-maxWidthXl.css-18anmv3 > div.MuiBox-root.css-0 > div > div.css-6q7m68";

// Create and style the buttons
const buttonContainer = document.createElement("div");

buttonContainer.style.position = "fixed";

buttonContainer.style.bottom = "20px";
buttonContainer.style.right = "20px";
buttonContainer.style.zIndex = "1000";

const buttonScrollToFirst = document.createElement("button");
buttonScrollToFirst.innerText = "First Video";
buttonScrollToFirst.style.margin = "5px";

const buttonScrollToLast = document.createElement("button");
buttonScrollToLast.innerText = "Last Video";
buttonScrollToLast.style.margin = "5px";

buttonContainer.appendChild(buttonScrollToFirst);
buttonContainer.appendChild(buttonScrollToLast);

document.body.appendChild(buttonContainer);

buttonScrollToFirst.addEventListener("click", () => {
  const containerElement = document.querySelector(containerSelector);
  if (containerElement) {
    const draggableItems = containerElement.querySelectorAll("div");

    if (draggableItems.length > 0) {
      const firstDraggable = draggableItems[0];

      firstDraggable.scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center",
      });
    } else {
      console.log("No draggable items found");
    }
  } else {
    console.log("Container element not found");
  }
});

buttonScrollToLast.addEventListener("click", () => {
  const containerElement = document.querySelector(containerSelector);
  if (containerElement) {
    const draggableItems = containerElement.querySelectorAll("div");
    if (draggableItems.length > 0) {
      const lastDraggable = draggableItems[draggableItems.length - 1];
      lastDraggable.scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center",
      });
    } else {
      console.log("No draggable items found");
    }
  } else {
    console.log("Container element not found");
  }
});

/