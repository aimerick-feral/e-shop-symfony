const mode = {
  // Proprietes availables in the object.
  colors: [],
  backgroundColor: null,
  // =================== DOM ELEMENTS ===========================
  body: null,
  switch: null,
  fontSwitchSliders: [],
  switchModeSlider: null,
  switchModeBefore: null,
  inputs: [],
  quantityIcons: [],
  init: function () {
    console.log("Hello world, I'm mode.js ⚫⚪");

    // All the colors of the app set in the CSS.
    // We use getComputedStyle(document.documentElement).getPropertyValue() to get the value of our CSS variables.
    mode.colors = {
      black: getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      ),
      white: getComputedStyle(document.documentElement).getPropertyValue(
        "--white"
      ),
    };

    // We get the DOM elements that we need to interacte with.

    mode.body = document.body;

    // The dark and light mode switch.
    mode.switch = document.getElementById("mode-switch-input");
    // If the DOM element exist.
    if (mode.switch) {
      // We add a listener and a handler on the click event.
      mode.switch.addEventListener(
        "click",
        mode.handleSelectBackgroundColorSwitch
      );
    }
    mode.switchModeSlider = document.querySelector(".switch__slider-mode");
    mode.switchModeBefore = window.getComputedStyle(
      mode.switchModeSlider,
      "::before"
    );
    // console.log(mode.switchModeSlider);
    // console.log(mode.switchModeBefore);
    mode.fontSwitchSliders = document.querySelectorAll(
      ".switch__slider-font-color"
    );

    mode.inputs = document.querySelectorAll(".form-field__input");
    mode.quantityIcons = document.querySelectorAll(".page__icon-quantity");

    // When the app is loaded we load to the page the mode.backgroundColor which is backup in localSatorage.
    mode.loadMode();

    // When the app is loaded we check or uncheck the switch according to the localStorage data.
    mode.handleCheckedSwitch();
  },
  /**
   * Method that get the backgroundColor which is back up in localStorage and call the switchBackgroundColor() method to change the color with the value of backgroundColor.
   * @return {void}
   */
  loadMode: function () {
    // console.log("mode.loadMode()");

    // We get the value backup in localStorage.
    mode.backgroundColor = localStorage.getItem("mode");

    // If mode.backgroundColor is dark.
    if (mode.backgroundColor && mode.backgroundColor === "dark") {
      // We call the mode.switchBackgroundColor() method to change the color with the value of mode.backgroundColor.
      mode.switchBackgroundColor(mode.backgroundColor);
      // We call mode.switchElementsColor() to switch the color of the elements.
      mode.switchElementsColor();
    }
    // Else we don't have a value for mode.backgroundColor or the value is not dark.
    else {
      // We set the value light to mode.backgroundColor.
      mode.backgroundColor = "light";
      // We set a value by default to the mode key in localStorage.
      localStorage.setItem("mode", mode.backgroundColor);
      // We call the mode.switchBackgroundColor() method to change the color with the value of mode.backgroundColor.
      mode.switchBackgroundColor(mode.backgroundColor);
      // We call mode.switchElementsColor() to switch the color of the elements.
      mode.switchElementsColor();
    }
  },
  /**
   * Method that check or uncheck the switch according to the localStorage data.
   * @return {void}
   */
  handleCheckedSwitch: function () {
    // console.log("mode.handleCheckedSwitch()");

    // If this the value of mode is light.
    if (mode.backgroundColor === "light") {
      // If the DOM element exist.
      if (mode.backgroundColor) {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(mode.switch);
      }
      // Else we dont have a mode item in localStorage.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(mode.switch);
      }
    }
    // Else the value of mode is dark.
    else if (mode.backgroundColor === "dark") {
      // We call tools.checkInputs() to check the input.
      tools.checkInputs(mode.switch);
    }
  },
  /**
   * Method that, according to the current value, set the localStorage value of the mode item, set the value of mode.backgroundColor and call mode.switchBackgroundColor() with this value.
   * @param {Event} event
   * @return {void}
   */
  handleSelectBackgroundColorSwitch: function (event) {
    // console.log("mode.handleSelectBackgroundColorSwitch()");

    // We get the DOM element form which the event occured.
    let selectedSwitch = event.currentTarget;

    // If the mode item in localStorage have the dark value.
    if (mode.backgroundColor === "dark") {
      // We set the value light to mode.backgroundColor.
      mode.backgroundColor = "light";
      // We backup in localStorage the new value of the mode.
      localStorage.setItem("mode", mode.backgroundColor);
      // We call the mode.switchBackgroundColor() method to change the background color with the value of mode.backgroundColor.
      mode.switchBackgroundColor(mode.backgroundColor);
      // We call mode.switchElementsColor() to switch the color of the elements.
      mode.switchElementsColor();
    }
    // Else if the mode item in localStorage have the light value.
    else if (mode.backgroundColor === "light") {
      // We set the value dark to mode.backgroundColor.
      mode.backgroundColor = "dark";
      // We backup in localStorage the new value of the mode.
      localStorage.setItem("mode", mode.backgroundColor);
      // We call the mode.switchBackgroundColor() method to change the background color with the value of mode.backgroundColor.
      mode.switchBackgroundColor(mode.backgroundColor);
      // We call mode.switchElementsColor() to switch the color of the elements.
      mode.switchElementsColor();
    }
  },
  /**
   * Method that switch the current background color to a new background color.
   * @param {string} newBackgroundColor
   * @return {void}
   */
  switchBackgroundColor: function (newBackgroundColor) {
    // console.log("mode.switchBackgroundColor()");

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(mode.body, "dark", "light");

    // If the newBackgroundColor is different than the mode.backgroundColor.
    if (newBackgroundColor !== mode.backgroundColor) {
      // We call tools.toggleClassToElements() in order to toggle the className to one or many element.
      tools.toggleClassToElements(newBackgroundColor, mode.body);
    }
    // Else the newBackgroundColor is not different than the mode.backgroundColor.
    else {
      // We call tools.addClassToElements() in order to add className to the element.
      tools.addClassToElements(mode.backgroundColor, mode.body);
    }
  },
  /**
   * Method that switch the color of the DOM elements according to the localStorage data.
   * @return {void}
   */
  switchElementsColor: function () {
    // console.log("mode.switchElementsColor()");

    // If the DOM element exist.
    if (chart.statsTitle) {
      // We use the reload() method to reload the current URL.
      location.reload();
    }

    // If the mode item in localStorage have the dark value.
    if (mode.backgroundColor === "dark") {
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(mode.switchModeSlider, mode.colors.black);

      // For each fontSwitchSlider of mode.fontSwitchSliders.
      for (let fontSwitchSlider of mode.fontSwitchSliders) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          fontSwitchSlider,
          "switch__slider-font-color_background-color_black",
          "switch__slider-font-color_background-color_white"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          fontSwitchSlider,
          "switch__slider-font-color_background-color_white"
        );
      }

      // For each input of mode.inputs.
      for (let input of mode.inputs) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          input,
          "form-field__input_color_black",
          "form-field__input_color_white"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_white");
      }

      // For each icon of mode.quantityIcons.
      for (let icon of mode.quantityIcons) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          icon,
          "page__icon_color_black",
          "page__icon_color_white",
          "page__icon_color_blue",
          "page__icon_color_green",
          "page__icon_color_red",
          "page__icon_color_safety-orange",
          "page__icon_color_purple",
          "page__icon_color_yellow",
          "page__icon_color_slimy-green"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_white");
      }
    }

    // Else if the mode item in localStorage have the light value.
    else if (mode.backgroundColor === "light") {
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(mode.switchModeSlider, mode.colors.white);

      // For each fontSwitchSlider of mode.fontSwitchSliders.
      for (let fontSwitchSlider of mode.fontSwitchSliders) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          fontSwitchSlider,
          "switch__slider-font-color_background-color_black",
          "switch__slider-font-color_background-color_white"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          fontSwitchSlider,
          "switch__slider-font-color_background-color_black"
        );
      }

      // For each input of mode.inputs.
      for (let input of mode.inputs) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          input,
          "form-field__input_color_black",
          "form-field__input_color_white"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_black");
      }

      // For each icon of mode.quantityIcons.
      for (let icon of mode.quantityIcons) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(
          icon,
          "page__icon_color_black",
          "page__icon_color_white",
          "page__icon_color_blue",
          "page__icon_color_green",
          "page__icon_color_red",
          "page__icon_color_safety-orange",
          "page__icon_color_purple",
          "page__icon_color_yellow",
          "page__icon_color_slimy-green"
        );
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_black");
      }
    }
  },
};
