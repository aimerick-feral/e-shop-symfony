const tools = {
  init: function () {
    console.log("Hello world, I'm tools.js 🧰");
  },
  /**
   * Method that add the display-none CSS classes to one or many elements.
   * @param {Element} element
   * @return {void}
   */
  addDisplayNone: function (...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to add the display-none class to element.
      element.classList.add("display-none");
    }
  },
  /**
   * Method that remove the display-none CSS class from one or many elements in order to display him.
   * @param {Element} element
   * @return {void}
   */
  removeDisplayNone: function (...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API order to remove the display-none class from element.
      element.classList.remove("display-none");
    }
  },
  /**
   * Method that toggle the display-none CSS class to one or many elements in order to display him.
   * @param {Element} element
   * @return {void}
   */
  toggleDisplayNone: function (...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API order to toggle the display-none class to element.
      element.classList.toggle("display-none");
    }
  },
  /**
   * Method that add a CSS class to one or many elements.
   * @param {String} className
   * @param  {...Element} elements
   * @return {void}
   */
  addClassToElements: function (className, ...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to add the className to element.
      element.classList.add(className);
    }
  },
  /**
   * Method that remove a CSS class from one or many elements.
   * @param {String} className
   * @param  {...Element} elements
   * @return {void}
   */
  removeClassFromElements: function (className, ...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to remove the className from element.
      element.classList.remove(className);
    }
  },
  /**
   * Method that toggle a CSS class to one or many elements.
   * @param {String} className
   * @param  {...Element} elements
   * @return {void}
   */
  toggleClassToElements: function (className, ...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to toggle the className to element.
      element.classList.toggle(className);
    }
  },
  /**
   * Method that add one or many CSS classes to one element.
   * @param  {Element} element
   * @param {...String} classNames
   * @return {void}
   */
  addClassesToElement: function (element, ...classNames) {
    // For each className of classNames.
    for (let className of classNames) {
      // We use the classList API in order to add the className to element.
      element.classList.add(className);
    }
  },
  /**
   * Method that remove one or many CSS classes from one element.
   * @param  {Element} element
   * @param {...String} classNames
   * @return {void}
   */
  removeClassesFromElement: function (element, ...classNames) {
    // For each className of classNames.
    for (let className of classNames) {
      // We use the classList API in order to remove the className from element.
      element.classList.remove(className);
      // console.log(className.length + " " + className);
    }
  },
  /**
   * Method that toggle one or many CSS classes to one element.
   * @param  {Element} element
   * @param {...String} classNames
   * @return {void}
   */
  toggleClassesToElement: function (element, ...classNames) {
    // For each className of classNames.
    for (let className of classNames) {
      // We use the classList API in order to toggle the className to element.
      element.classList.toggle(className);
    }
  },
  /**
   * Method that remove a disabled attribute from one or many inputs.
   * @param {Element} inputs
   * @return {void}
   */
  removeDisabledAttribute: function (...inputs) {
    // For each input of form.inputs.
    for (let input of inputs) {
      // We remove the disabled attribute.
      input.removeAttribute("disabled");
    }
  },
  /**
   * Method that set a disabled attribute to one or many inputs.
   * @param {Element} inputs
   * @return {void}
   */
  setDisabledAttribute: function (...inputs) {
    // For each input of form.inputs.
    for (let input of inputs) {
      // We remove the disabled attribute.
      input.setAttribute("disabled", "");
    }
  },
  /**
   * Method that check one or many inputs.
   * @param  {Element} inputs
   * @return {void}
   */
  checkInputs: function (...inputs) {
    // For each input of inputs
    for (let input of inputs) {
      // We check the input.
      input.checked = true;
    }
  },
  /**
   * Method that uncheck one or many inputs.
   * @param  {Element} inputs
   * @return {void}
   */
  uncheckInputs: function (...inputs) {
    // For each input of inputs
    for (let input of inputs) {
      // We uncheck the input.
      input.checked = false;
    }
  },
  /**
   * Methot that set on a element a new color for the before property.
   * @param {Element} element
   * @param {string} color
   * @return {void}
   */
  setColorToBeforeProperty: function (element, color) {
    // We set the property of the CSS variable.
    element.style.setProperty("--before", color);
  },
  /**
   * Methot that remove one or many elements from the DOM.
   * @param {HTMLElement} elements
   * @return {void}
   */
  removeElementsFromDOM: function (...elements) {
    // For each element of elements
    for (let element of elements) {
      // We use te JS method remove() to remove the element from the DOM.
      element.remove();
    }
  },
  /**
   * Method that from a integer which is a price in cents return string which is a amount with the symbol of the currency initialize in parameter.
   * @param {number} centsPrice
   * @param {string} currencySymbol
   * @return {string}
   */
  toAmount: function (centsPrice, currencySymbol = "€") {
    // We convert the cents price to a decimal price.
    let decimalPrice = centsPrice / 100;
    // We use the toString methot to convert the integer in a string and the replace method to replace the comma by a dot.
    let amount = decimalPrice.toString().replace(".", ",");

    // We return the amount with the symbol of the currency.
    return amount + " " + currencySymbol;
  },
  /**
   *
   * @param {string} date
   * @return {string}
   */
  formatDateTime: function (date) {
    // yyyy/mm/dd
    // mm/dd/yyyy
    // dd/mm/yyyy

    // console.log(date);
    // date is a string like for exemple : 2022-06-19T09:04:28+00:00

    // A string is like a array so we can extract some strings of it.
    // We extract the year.
    let year = date[0] + date[1] + date[2] + date[3];
    // We extract the mounth.
    let mounth = date[5] + date[6];
    // We extract the date.
    let day = date[8] + date[9];

    // We return the date with the format dd/mm/yyyy.
    return day + "/" + mounth + "/" + year;
  },
};
