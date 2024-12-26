const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
];

const content = [
  {
    heading: "Introduction",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 1",
    link: "page1.html",
  },
  {
    heading: "About",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 2",
    link: "page2.html",
  },
  {
    heading: "Contact Us",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 3",
    link: "page3.html",
  },
  {
    heading: "What we Offer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 4",
    link: "page4.html",
  },
  {
    heading: "Join Us",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 5",
    link: "page5.html",
  },
  {
    heading: "Sports",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 6",
    link: "page6.html",
  },
  {
    heading: "My Name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 7",
    link: "page7.html",
  },
  {
    heading: "Hehe",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, quaerat fugiat. Nobis sequi quia repudiandae recusandae, numquam ducimus reprehenderit accusantium tempore cumque voluptas asperiores eos aliquam totam unde quaerat omnis exercitationem facere non.",
    buttonText: "Button 8",
    link: "page8.html",
  },
];

let currentIndex = 0;
let isScrolling = false;
let lastScrollTime = 0;
const throttleDelay = 1000;

const imageElement = document.getElementById("active-image");
const headingElement = document.getElementById("active-heading");
const descriptionElement = document.getElementById("active-description");
const buttonElement = document.getElementById("active-button");

function updateContent(index) {
  imageElement.classList.add("hidden");
  document.querySelector(".content-container").classList.add("hidden");

  setTimeout(() => {
    imageElement.src = images[index];
    headingElement.textContent = content[index].heading;
    descriptionElement.textContent = content[index].description;
    buttonElement.textContent = content[index].buttonText;
    buttonElement.setAttribute(
      "onclick",
      `redirectTo('${content[index].link}')`
    );

    imageElement.classList.remove("hidden");
    document.querySelector(".content-container").classList.remove("hidden");
  }, 500);
}

function redirectTo(link) {
  window.location.href = link;
}

const scrollArea = document.querySelector(".scroll-area");

scrollArea.addEventListener("wheel", (event) => {
  const now = new Date().getTime();

  if (isScrolling || now - lastScrollTime < throttleDelay) {
    return;
  }

  lastScrollTime = now;
  isScrolling = true;

  if (event.deltaY > 0) {
    currentIndex = (currentIndex + 1) % images.length;
  } else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  updateContent(currentIndex);

  setTimeout(() => {
    isScrolling = false;
  }, 800);
});
