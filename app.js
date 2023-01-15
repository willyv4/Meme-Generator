const formSubmissionId = document.getElementById("meme-form-submission");
const memeFormInput = document.querySelectorAll("input");

// Listen for meme form submission
formSubmissionId.addEventListener("click", function (event) {
  event.preventDefault();

  // Get user input from form
  const imgURL = memeFormInput[0].value;
  const topText_UserInput = memeFormInput[1].value;
  const bottomText_UserInput = memeFormInput[2].value;

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
  hoverText.style.visibility = "hidden";
  wrapper.addEventListener("mouseover", function () {
    hoverText.style.visibility = "visible";
    hoverText.style.transition = ".3s";
  });
  wrapper.addEventListener("mouseout", function () {
    hoverText.style.visibility = "hidden";
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
