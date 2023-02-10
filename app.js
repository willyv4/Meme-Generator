const form = document.getElementById("meme-generating-form");
const memeFormInput = document.querySelectorAll("input");

// Listen for meme form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input from form
  const imgInput = memeFormInput[0];
  const imgURL = memeFormInput[0].value;
  const topText_UserInput = memeFormInput[1].value;
  const bottomText_UserInput = memeFormInput[2].value;
  const urlRegex = /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim;

  if (!imgURL) {
    imgInput.style.borderColor = "red";
    imgInput.style.boxShadow = "0px 0px 8px -3px red";
    imgInput.value = "NO URL ENTERED";
    return false;
  } else if (!urlRegex.test(imgURL)) {
    imgInput.style.borderColor = "red";
    imgInput.style.boxShadow = "0px 0px 10px -8px red";
    imgInput.value = "INVALID URL";
    return false;
  } else {
    imgInput.style.borderColor = "grey";
    imgInput.style.boxShadow = "none";
  }
  // create a div to wrap each element
  let userGeneratedContent = document.getElementById("user-generated-content");
  let wrapper = document.createElement("div");
  wrapper.classList.add("content-container");
  userGeneratedContent.appendChild(wrapper);

  // Place image and user text in wrapper
  let createImage = document.createElement("img");
  createImage.src = imgURL;
  createImage.classList.add("meme-pics");
  wrapper.append(createImage);

  // Place top and bottom text onto image

  //   // create top text
  let topTexts = document.createElement("p");
  topTexts.textContent = topText_UserInput;
  topTexts.classList.add("top-text");
  wrapper.appendChild(topTexts);

  //   // create bottom text
  let bottomTexts = document.createElement("p");
  bottomTexts.textContent = bottomText_UserInput;
  bottomTexts.classList.add("bottom-text");
  wrapper.appendChild(bottomTexts);

  //  // hover text to delete
  let hoverText = document.createElement("p");
  hoverText.textContent = "X";
  hoverText.classList.add("hover-text");
  hoverText.style.opacity = 0;
  hoverText.style.transition = "opacity 0.3s ease";
  wrapper.addEventListener("mouseover", function () {
    hoverText.style.opacity = 1;
  });
  wrapper.addEventListener("mouseout", function () {
    hoverText.style.opacity = 0;
  });
  wrapper.append(hoverText);

  // reset form
  let form = document.getElementById("meme-generating-form");
  form.reset();

  // Remove meme from page
  wrapper.addEventListener("click", function () {
    wrapper.remove();
  });
});
