const customerService = {
  // Proprietes availables in the object.
  // =================== DOM ELEMENTS =========================== //
  questions: [],
  terms: [],
  init: function () {
    console.log("Hello world, I'm customerService.js 📃");

    // We get the DOM elements that we need to interacte with.

    customerService.questions = Array.from(
      document.querySelectorAll(".term__question")
    );

    customerService.terms = document.querySelectorAll(".term-customer-service");

    // For each question ofcustomerService.questions.
    for (let question of customerService.questions) {
      // We add a listener and a handler on the click event.
      question.addEventListener(
        "click",
        customerService.handleSelectedQuestion
      );
    }
  },
  /**
   * Methot that add or remove the display-none CSS class to the <p> elements according to the clicked fake link and the related customerService.terms.
   * @param {Event} event
   * @return {void}
   */
  handleSelectedQuestion: function (event) {
    console.log("customerService.handleSelectQuestion()");

    // We get the DOM element from which the event occured.
    let clickedQuestion = event.currentTarget;

    // We initialaze our index.
    let index = 0;
    // The index is the index of the clickedQuestion.
    index = customerService.questions.indexOf(clickedQuestion);

    // For each question of customerService.questions.
    for (let question of customerService.questions) {
      // If clickedQuestion is identical to question.
      if (clickedQuestion === question) {
        // For each term of customerService.terms.
        for (let term of customerService.terms) {
          // We get all the <p> HTML elements content in term.
          const ps = term.getElementsByTagName("p");
          // For each p of ps.
          for (let p of ps) {
            // If p doesn't contain the display-none class.
            if (!p.classList.contains("display-none")) {
              // We call tools.addDisplayNone() in order to add the display-none class to p.
              tools.addDisplayNone(p);
            }
          }
        }
        // We get all the <p> HTML elements content in the customerService.terms related to the clickedQuestion.
        const ps = customerService.terms[index].getElementsByTagName("p");
        // For each p of ps.
        for (let p of ps) {
          // If the customerService.terms related to the clickedQuestion contain one or many <p> HTML elements.
          if (customerService.terms[index].contains(p)) {
            // We call tools.removeDisplayNone() in order to remove the display-none class from each <p> contains in the customerService.terms related to the clickedQuestion.
            tools.removeDisplayNone(p);
          }
        }
      }
    }
  },
};
