const responsive = {
  // Proprietes availables in the object.
  // =================== DOM ELEMENTS =========================== //
  header: null,
  bugerMenu: [],
  openingButton: null,
  closingButton: null,
  menuNavMobile: null,
  footer: null,
  page: null,
  init: function () {
    console.log("Hello world, I'm responsive.js 📱🖥️");

    // The range of screen sizes.
    responsive.window320Px = 320;
    responsive.window992Px = 992;

    // We get the DOM elements that we need to interacte with.

    responsive.header = document.querySelector(".header");

    // All the burger menu buttons.
    responsive.bugerMenu = document.querySelectorAll(".burger-menu");
    // If the DOM elements exist.
    if (responsive.bugerMenu) {
      // For each button of responsive.bugerMenu.
      for (let button of responsive.bugerMenu) {
        // We add a listener and a handler on the click event.
        button.addEventListener("click", responsive.handleSelectedNavButton);
      }
    }
    responsive.openingButton = document.getElementById("opening-button");
    responsive.closingButton = document.getElementById("closing-button");
    responsive.menuNavMobile = document.querySelector(".nav-mobile");
    responsive.footer = document.querySelector(".footer");
    responsive.page = document.querySelector(".page");

    // When the app is loaded we call responsive.applyResponsive() to add or remove some CSS classes to the elements.
    responsive.applyResponsive();
  },
  /**
   *  Method that show or hide some elements according to the window witdh.
   * @return {void}
   */
  applyResponsive: function () {
    // console.log("responsive.applyResponsive()");

    // If the DOM elements exist.
    if (responsive.bugerMenu && responsive.menuNavMobile) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(responsive.closingButton, "burger-menu");
      // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
      tools.addDisplayNone(responsive.closingButton);
      // If the window size is higher or equal to 320px and inferior to 992px.
      if (
        window.innerWidth >= responsive.window320Px &&
        window.innerWidth < responsive.window992Px
      ) {
        // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
        tools.addDisplayNone(responsive.menuNavMobile);
      }
      // Else if the window size is higher or equal to 992px.
      else if (window.innerWidth >= responsive.window992Px) {
        // We call tools.removeDisplayNone() in order to remove the display-none class from one or many elements.
        tools.removeDisplayNone(responsive.menuNavMobile);
      }
    }
  },
  /**
   * Method that get the DOM element on witch we click and call the right method according to the clicked element.
   * @param {Event} event
   * @return {void}
   */
  handleSelectedNavButton: function (event) {
    // console.log("responsive.handleSelectedNavButton()");

    // We get the DOM element form which the event occured.
    let selectedButton = event.currentTarget;

    // If selectedButton === responsive.openingButton.
    if (selectedButton === responsive.openingButton) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(responsive.openingButton, "burger-menu");
      // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
      tools.addDisplayNone(responsive.openingButton);
      // We call tools.removeDisplayNone() in order to remove the display-none class from one or many elements.
      tools.removeDisplayNone(responsive.closingButton);
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(responsive.closingButton, "burger-menu");
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(responsive.footer, "footer");
      // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
      tools.addDisplayNone(responsive.footer);

      // If the DOM element exist.
      if (responsive.menuNavMobile) {
        // We call tools.toggleClassToElements() in order to toggle a className to one or many elements.
        tools.toggleDisplayNone(responsive.menuNavMobile);

        // If the DOM element exist.
        if (responsive.page) {
          // We call tools.toggleClassToElements() in order to toggle a className to one or many elements.
          tools.toggleClassToElements("page", responsive.page);
          // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
          tools.addDisplayNone(responsive.page);
        }
      }
    }
    // Else if selectedButton isresponsive.closingButton.
    else if (selectedButton === responsive.closingButton) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(responsive.closingButton, "burger-menu");
      // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
      tools.addDisplayNone(responsive.closingButton);
      // We call tools.removeDisplayNone() in order to remove the display-none class from one or many elements.
      tools.removeDisplayNone(responsive.openingButton);
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(responsive.openingButton, "burger-menu");
      // We call tools.removeDisplayNone() in order to remove the display-none class from one or many elements.
      tools.removeDisplayNone(responsive.footer);
      // We call tools.addClassToElements() in order to add className to the element.
      tools.addClassToElements("footer", responsive.footer);

      // If the DOM element exist.
      if (responsive.menuNavMobile) {
        // We call tools.toggleClassToElements() in order to toggle a className to one or many elements.
        tools.toggleDisplayNone(responsive.menuNavMobile);

        // If the DOM element exist.
        if (responsive.page) {
          // We call tools.toggleClassToElements() in order to toggle a className to one or many elements.
          tools.toggleClassToElements("page", responsive.page);
          // We call tools.removeDisplayNone() in order to remove the display-none class from one or many elements.
          tools.removeDisplayNone(responsive.page);
        }
      }
    }
  },
};
