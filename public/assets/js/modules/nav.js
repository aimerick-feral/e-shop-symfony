const nav = {
  // Proprietes availables in the object.
  // =================== DOM ELEMENTS =========================== //
  links: [],
  init: function () {
    console.log("Hello world, I'm nav.js");

    // We get the DOM elements that we need to interacte with.

    nav.links = document.querySelectorAll(".nav__link");

    // We set a index to 0 wich will be inferior to the length off the nav.links and we increment the index in order to switch to the next nav.links.
    for (let index = 0; index < nav.links.length; index++) {
      // If the current nav.links is identical to the current URL.
      if (nav.links[index].href === location.href) {
        // We call tools.addClassToElements() in order to add a className to one or many elements.
        tools.addClassToElements("active", nav.links[index]);
      }
    }
  },
};
