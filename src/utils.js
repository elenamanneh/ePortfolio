// displaying dialogue box
// takes in text and function to call when the text is done displaying
// export function displayDialogue(text, onDisplayEnd) {
//     const dialogueUI = document.getElementById("textbox-container");
//     const dialogue = document.getElementById("dialogue");

//     // display dialogue
//     // when we want to show dialogue, we change style display from none (in css) to block
//     dialogueUI.style.display = "block";

//     let index = 0;
//     let currentText = "";
//     const intervalRef = setInterval(() => {
//         if (index < text.length) {
//             currentText += text[index];
//             dialogue.innerHTML = currentText; // don't use innerHTML to avoid xss, no user input here so okay
//             // cannot use innerText because it will not render html tags
//             index++;
//             return;
//         }
//         clearInterval(intervalRef);
//     }, 5);

//     // close button
//     const closeBtn = document.getElementById("close");

//     function onCloseBtnClick() {
//         onDisplayEnd(); // to set isInDialogue to false without having to pass player in
//         dialogueUI.style.display = "none";
//         dialogue.innerHTML = "";
//         clearInterval(intervalRef);
//         closeBtn.removeEventListener("click", onCloseBtnClick);
//     }

//     closeBtn.addEventListener("click", onCloseBtnClick);

//     addEventListener("keypress", (key) => {
//         if (key.code === "Enter" || key.code === "KeyQ") {
//           closeBtn.click();
//         }
//     });
// }

// utils.js
let activeInterval = null;
let onKeyPressHandler = null;

export function displayDialogue(text, onDisplayEnd, instant = false) {
  const dialogueUI  = document.getElementById("textbox-container");
  const dialogue    = document.getElementById("dialogue");
  const closeBtn    = document.getElementById("close");

  // 1) clear any in-flight typing
  if (activeInterval) {
    clearInterval(activeInterval);
    activeInterval = null;
  }

  // 2) reset content & show UI
  dialogue.innerHTML      = "";
  dialogueUI.style.display = "block";

  // 3) start fresh typing (or dump text instantly)
  if (instant) {
    dialogue.innerHTML = text;
  } else {
    let i = 0, out = "";
    activeInterval = setInterval(() => {
      if (i < text.length) {
        out += text[i++];
        dialogue.innerHTML = out;
      } else {
        clearInterval(activeInterval);
        activeInterval = null;
      }
    }, 5);
  }

  // 4) remove old click & key handlers so they don’t accumulate
  closeBtn.replaceWith(closeBtn.cloneNode(true));
  const newClose = document.getElementById("close");

  if (onKeyPressHandler) {
    document.removeEventListener("keypress", onKeyPressHandler);
  }

  // 5) wire up the new handlers
  function finish() {
    // on close: clear any typing, hide UI, call your callback
    if (activeInterval) {
      clearInterval(activeInterval);
      activeInterval = null;
    }
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
  }

  newClose.addEventListener("click", finish);

  onKeyPressHandler = (e) => {
    if (e.code === "Enter" || e.code === "KeyQ") {
      newClose.click();
    }
  };
  document.addEventListener("keypress", onKeyPressHandler);
}

 

// set camera scale based on window size
export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
        return;
    }
    k.camScale(k.vec2(1.3));
}

