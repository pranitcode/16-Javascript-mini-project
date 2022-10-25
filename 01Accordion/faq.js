

const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
  {
    id: 4,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];



const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

// show and hide ans
// 1. first hide all and then show selected options

function showFaq(id, element) {
  faqData.forEach(() => {
    element.style.display = "none";
  });
  if (faqs.includes(id)) element.style.display = "block";
}




function createFaq() {
  // faqQuestions
  faqData.forEach((e) => {
    const faqBody = document.createElement("div");
    accordianBody.appendChild(faqBody);
    faqBody.className = "faq";
    queElenent(faqBody, e);
    ansElement(faqBody, e);
  });


  // faq Question element
  function queElenent(div, e) {
    const faqHeader = document.createElement("div");
    console.log(faqHeader)
    faqHeader.id = e.id;


    faqHeader.className = "faq_header " + e.id;
    faqHeader.style.cursor = "pointer";
    faqHeader.innerHTML = `<h3 id= ${e.id} >${e.question}</h3> +`;
    div.appendChild(faqHeader);
  }
  // faq ans
  function ansElement(div, e, i) {
    const faqAns = document.createElement("p");
    faqAns.className = "hidden";
    faqAns.textContent = e.answer;

    div.appendChild(faqAns);
  }
}
createFaq();

function btnStatusUpdate() {
  // target all faq question header, then [] loop over FaqHeader
  const FaqHeader = document.querySelectorAll(".faq_header");
// console.log( FaqHeader)
  FaqHeader.forEach((element) => {
    // adding click event on every faq questionn header
    element.addEventListener("click", (e) => {
      // after clicking, check if id of target element id present or not
      // if present then remove the id from faqs array using splice method
      // else add id of element in faqs array
      // console.log(e.target)
      console.log(element)
      if (faqs.includes(e.target.id)) {
        const idIndex = faqs.indexOf(e.target.getAttribute("id"));
        faqs.splice(idIndex, 1);
      } else {
        faqs.push(e.target.getAttribute("id"));
      }
      console.log(element)
      /// passing id and faq answer element in showFaq to toggle (hide or show) the answer element.
      showFaq(e.target.id, element.parentElement.childNodes[1]);
      console.log(element.parentElement.childNodes[1])
    });
  });
}


btnStatusUpdate();