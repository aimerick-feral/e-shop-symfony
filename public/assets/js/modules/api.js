const api = {
  // Proprietes availables in the object.
  url: null,
  users: [],
  products: [],
  productAvailability: null,
  productAvailabilityClassName: null,
  displayNoneClassName: null,
  categories: [],
  deliveryModes: [],
  purchases: [],
  purchaseStatus: null,
  purchaseStatusClassName: null,
  addresses: [],
  // =================== DOM ELEMENTS ===========================
  table: null,
  // User
  blockUsersList: null,
  searchUserInput: null,
  // Product
  searchProductInput: null,
  blockProductsList: null,
  // Category
  blockCategoriesList: null,
  searchCategoryInput: null,
  // DeliveryMode
  blockDeliveryModesList: null,
  searchDeliveryModeInput: null,
  // Purchase
  blockPurchasesList: null,
  searchPurchaseInput: null,
  // Address
  blockAddressesList: null,
  searchAddressInput: null,
  // We create a counter to count the number of times that we call the methodes that create HTML elements so we don't duplicate the elements when font.handleSelectColorSwitch() is call.
  counter: null,
  init: function () {
    console.log("Hello world, I'm api.js 🕸️");
    // console.log(location.href);

    // The URL of the link to access the users data for a ROLE_ADMIN.
    api.adminUserHref = "/admin/utilisateurs/";

    // We get the DOM elements that we need to interacte with.

    api.table = document.querySelector(".table");

    // User
    api.blockUsersList = document.getElementById("block-users-list");
    // If the DOM element exist.
    if (api.blockUsersList) {
      // We call api.getUsersForRoleAdmin() to get the users from the API.
      api.getUsersForRoleAdmin();

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchUserInput = document.getElementById("search-user-input");
    // If the DOM element exist.
    if (api.searchUserInput) {
      // We add a listener and a handler on the click event.
      api.searchUserInput.addEventListener("input", api.handleSearchInput);
    }

    // Product
    api.blockProductsList = document.getElementById("block-products-list");
    // If the DOM element exist.
    if (api.blockProductsList) {
      // If the URL of the renrered page is identical to app.url + "admin/produits".
      if (location.href === app.url + "admin/produits") {
        // We call api.getProductsForRoleAdmin() to get the products from the API.
        api.getProductsForRoleAdmin();
      }
      // If the URL of the renrered page is identical to app.url + "admin/produits".
      else if (location.href.includes("admin/categories")) {
        // We call api.getProductsByCategoryForRoleAdmin() with the return value of api.getCategorySlugFromURL() that we call with, in argument, the number of slash in URL to reach to get the categry slug.
        api.getProductsByCategoryForRoleAdmin(api.getCategorySlugFromURL(5));
      }
      // Else if the URL of the renrered page is identical to app.url or app.url + "produits".
      else if (
        location.href === app.url ||
        location.href === app.url + "produits"
      ) {
        // We call api.getProductsForRoleUser() to get the products from the API.
        api.getProductsForRoleUser();
      }
      // Else if the URL contain the given string.
      else if (location.href.includes("produits")) {
        // We call api.getProductsByCategoryForRoleAdmin() with the return value of api.getCategorySlugFromURL() that we call with, in argument, the number of slash in URL to reach to get the categry slug.
        api.getProductsByCategoryForRoleAdmin(api.getCategorySlugFromURL(4));
      }

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchProductInput = document.getElementById("search-product-input");
    // If the DOM element exist.
    if (api.searchProductInput) {
      // We add a listener and a handler on the click event.
      api.searchProductInput.addEventListener("input", api.handleSearchInput);
    }

    // Category
    api.blockCategoriesList = document.getElementById("block-categories-list");
    // If the DOM element exist.
    if (api.blockCategoriesList) {
      // If the URL of the renrered page is identical to app.url + "admin/categories".
      if (location.href === app.url + "admin/categories") {
        // We call api.getCategoriesForRoleAdmin() to get the categories from the API.
        api.getCategoriesForRoleAdmin();
      }
      // Else if the URL of the renrered page is identical to app.url + "categories".
      else if (location.href === app.url + "categories") {
        // We call api.getCategoriesForRoleUser() to get the categories from the API.
        api.getCategoriesForRoleUser();
      }

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchCategoryInput = document.getElementById("search-category-input");
    // If the DOM element exist.
    if (api.searchCategoryInput) {
      // We add a listener and a handler on the click event.
      api.searchCategoryInput.addEventListener("input", api.handleSearchInput);
    }

    // Delivery Modes
    api.blockDeliveryModesList = document.getElementById(
      "block-delivery-modes-list"
    );
    // If the DOM element exist.
    if (api.blockDeliveryModesList) {
      // We call api.getDeliveryModesForRoleAdmin() to get the delivery modes from the API.
      api.getDeliveryModesForRoleAdmin();

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchDeliveryModeInput = document.getElementById(
      "search-delivery-modes-input"
    );
    // If the DOM element exist.
    if (api.searchDeliveryModeInput) {
      // We add a listener and a handler on the click event.
      api.searchDeliveryModeInput.addEventListener(
        "input",
        api.handleSearchInput
      );
    }

    // Purchase
    api.blockPurchasesList = document.getElementById("block-purchases-list");
    // If the DOM element exist.
    if (api.blockPurchasesList) {
      // If the URL of the renrered page is identical to app.url + "admin/commandes".
      if (location.href === app.url + "admin/commandes") {
        // We call api.getPurchasesForRoleAdmin() to get the purchases from the API.
        api.getPurchasesForRoleAmin();
      }
      // Else if the URL contain the given string.
      else if (location.href.includes("utilisateurs")) {
        // We want to extract the user id of the URL.
        // We use the substring() method to extract the part of the URL after the last "/". substring() will return "1/commandes".
        // In the returned string we only need the number. So we use the replace() method to remplace the part of the string we don't need "/commandes" by a empty value.
        let userId = location.href
          .substring(location.href.lastIndexOf("/") - 1)
          .replace("/commandes", "");
        // We call api.getUserPurchasesForRoleAdmin() to get, from the API, the purchases related to the givin user id.
        api.getUserPurchasesForRoleAdmin(userId);
      }
      // Else if the URL of the renrered page is identical to app.url + "commandes".
      else if (location.href === app.url + "commandes") {
        // We call api.getPurchasesOfLoggedInUser() to get, from the API, the purchases of the logged in user.
        api.getPurchasesOfLoggedInUser();
      }

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchPurchaseInput = document.getElementById("search-purchase-input");
    // If the DOM element exist.
    if (api.searchPurchaseInput) {
      // We add a listener and a handler on the click event.
      api.searchPurchaseInput.addEventListener("input", api.handleSearchInput);
    }

    // Address
    api.blockAddressesList = document.getElementById("block-addresses-list");
    // If the DOM element exist.
    if (api.blockAddressesList) {
      // If the URL contrain the given string.
      if (location.href.includes("utilisateurs")) {
        // We want to extract the user id of the URL.
        // We use the substring() method to extract the part of the URL after the last "/". substring() will return "1/commandes".
        // In the returned string we only need the number. So we use the replace() method to remplace the part of the string we don't need "/commandes" by a empty value.
        let userId = location.href
          .substring(location.href.lastIndexOf("/") - 1)
          .replace("/adresses", "");
        // We call api.getUserAddressesForRoleAdmin() to get, from the API, the addresses related to the givin user id.
        api.getUserAddressesForRoleAdmin(userId);
      }
      // Else if the URL of the renrered page is identical to app.url + "adresses".
      else if (location.href === app.url + "adresses") {
        // We call api.getAddressesOfLoggedInUser() to get, from the API, the addresses of the logged in user.
        api.getAddressesOfLoggedInUser();
      }

      // We increment the counter to backup in memory the fact that the module as already been called once.
      api.counter++;
    }

    api.searchAddressInput = document.getElementById("search-address-input");
    // If the DOM element exist.
    if (api.searchAddressInput) {
      // We add a listener and a handler on the click event.
      api.searchAddressInput.addEventListener("input", api.handleSearchInput);
    }
  },
  /**
   * Method that generate a absolute URL from a given path.
   * @param {string} path
   * @return {string} url
   */
  generateUrl: function (path) {
    // console.log("api.generateUrl()");

    // The URL to access the e-shop REST API.
    api.url = app.url + "api/";
    // We return the generated URL.
    return api.url + path;
  },
  /**
   * Method that return a category slug from a URL based on the number of slash before the slug. This number have to be submitted in argument.
   * @param {number} numberOfSlashInURLBeforeSlug
   * @return {string} categorySlug
   */
  getCategorySlugFromURL: function (numberOfSlashInURLBeforeSlug) {
    console.log("api.getCategorySlugFromURL()");

    // We create a empty array to backup each letter of the category slug that we gonna extract from the URL.
    let categorySlug = [];

    // As we have slash in the URL we need to count them so we initialize a counter to 0.
    // The URL look like http://localhost:8080/admin/categories/category-slug/produits. So we count 4 slash before the categorySlug.
    let slashCount = 0;

    // For each letter in location.href.
    for (let letter of location.href) {
      // If the letter is a slash.
      if (letter === "/") {
        // We increment the number of slash counted.
        slashCount++;
      }

      // If the number of slash in the URL is identical to the number total of slash in the current URL.
      if (slashCount === numberOfSlashInURLBeforeSlug) {
        // We push each the letter in categorySlug.
        categorySlug.push(letter);
      }
    }

    // We use the toString() method to convert the categorySlug array in to a string.
    // We use the replace() method to replace the comma by a empty string. This will remove the slash from the string.
    categorySlug = categorySlug.toString().replace("/", "");

    // For each letter in categorySlug.
    for (let letter of categorySlug) {
      // If the letter is a comma.
      if (letter === ",") {
        // We use the replace() method to replace the comma by a empty string. This will remove the comma from the string.
        categorySlug = categorySlug.replace(",", "");
      }
    }

    // We return the category slug.
    return categorySlug;
  },
  /**
   * Methot that get the users from the API.
   * @return {void}
   */
  getUsersForRoleAdmin: async function () {
    // console.log("api.getUsersForRoleAdmin()");

    // We call the API.
    const response = await fetch(api.generateUrl("admin/utilisateurs"));

    console.log(response);
    console.log(response.ok);
    console.log(response.url);

    // If response.ok is false.
    if (!response.ok) {
      console.log(response.status);
      // If the url of the response is different than our api.url.
      if (response.url !== api.url) {
        console.log(response.url);
        // We redirect the user to the page 404.
        // window.location.replace(app.url + "_error/404");
        window.location.replace(app.url + "admin/utilisateurs/creer");
      }
      // We leave api.getUsersForRoleAdmin();
      return;
    }

    // The users will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const users = await response.json();
    console.log(users);

    // We call api.sortUsersEmailsByAscendingOrder() with the results in argument and we backup the returned data in api.users.
    api.users = api.sortUsersEmailsByAscendingOrder(users);
    console.log(api.users);

    // We call api.creatrUserList() by passing him in argument the ordered users.
    api.createUsersList(api.users);
  },
  /**
   * Methot that get the products from the API but only for the ROLE_ADMIN.
   * @return {void}
   */
  getProductsForRoleAdmin: async function () {
    // console.log("api.getProductsForRoleAdmin()");

    // We call the API.
    const response = await fetch(api.generateUrl("admin/produits"));

    // The products will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const products = await response.json();

    // We call api.sortUsersEmailsByAscendingOrder() with the results in argument and we backup the returned data in api.users.
    api.products = api.sortEntitiesNamesByAscendingOrder(products);

    // We call api.createProductsList() by passing him in argument the ordered products.
    api.createProductsList(api.products);
  },
  /**
   * Methot that get the products from the API but only for the ROLE_USER.
   * @return {void}
   */
  getProductsForRoleUser: async function () {
    // console.log("api.getProductsForRoleUser()");

    // We call the API.
    const response = await fetch(api.generateUrl("produits"));

    // The products will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const products = await response.json();

    // We call api.sortUsersEmailsByAscendingOrder() with the results in argument and we backup the returned data in api.products.
    api.products = api.sortEntitiesNamesByAscendingOrder(products);

    // We call api.createProductsList() by passing him in argument the ordered products.
    api.createProductsList(api.products);
  },
  /**
   * Methot that get the categories from the API but only for the ROLE_ADMIN.
   * @return {void}
   */
  getCategoriesForRoleAdmin: async function () {
    // console.log("api.getCategoriesForRoleAdmin()");

    // We call the API.
    const response = await fetch(api.generateUrl("admin/categories"));

    // The categories will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const categories = await response.json();

    // We call api.sortUsersEmailsByAscendingOrder() with the results in argument and we backup the returned data in api.categories.
    api.categories = api.sortEntitiesNamesByAscendingOrder(categories);

    // We call api.createCategoriesList() by passing him in argument the ordered categories.
    api.createCategoriesList(api.categories);
  },
  /**
   * Methot that get the products from the API but only for the ROLE_USER.
   * @return {void}
   */
  getCategoriesForRoleUser: async function () {
    // console.log("api.getCategoriesForRoleUser()");

    // We call the API.
    const response = await fetch(api.generateUrl("categories"));

    // The categories will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const categories = await response.json();

    // We call api.sortUsersEmailsByAscendingOrder() with the results in argument and we backup the returned data in api.categories.
    api.categories = api.sortEntitiesNamesByAscendingOrder(categories);

    // We call api.createCategoriesList() by passing him in argument the ordered categories.
    api.createCategoriesList(api.categories);
  },
  /**
   * Method that get the list of the products related to its category for the ROLE_USER.
   * @param {string} categorySlug
   * @return {void}
   */
  getProductsByCategoryForRoleUser: async function (categorySlug) {
    console.log("api.getProductsByCategoryForRoleUser()");

    // We call the API.
    const response = await fetch(
      api.generateUrl("categories/" + categorySlug + "/produits")
    );

    // The products will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const products = await response.json();

    // We call api.sortEntitiesNamesByAscendingOrder() with the results in argument and we backup the returned data in api.deliveryModes.
    api.products = api.sortEntitiesNamesByAscendingOrder(products);

    // We call api.createProductsList() by passing him in argument the ordered products.
    api.createProductsList(api.products);
  },
  /**
   * Method that get the list of the products related to its category for the ROLE_ADMIN.
   * @param {string} categorySlug
   * @return {void}
   */
  getProductsByCategoryForRoleAdmin: async function (categorySlug) {
    console.log("api.getProductsByCategoryForRoleAdmin()");

    // We call the API.
    const response = await fetch(
      api.generateUrl("admin/categories/" + categorySlug + "/produits")
    );

    // The products will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const products = await response.json();

    // We call api.sortEntitiesNamesByAscendingOrder() with the results in argument and we backup the returned data in api.deliveryModes.
    api.products = api.sortEntitiesNamesByAscendingOrder(products);

    // We call api.createProductsList() by passing him in argument the ordered products.
    api.createProductsList(api.products);
  },
  /**
   * Methot that get the delivery modes from the API.
   * @return {void}
   */
  getDeliveryModesForRoleAdmin: async function () {
    // console.log("api.getDeliveryModesForRoleAdmin()");

    // We call the API.
    const response = await fetch(api.generateUrl("admin/modes-de-livraison"));

    // The delivery modes will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const deliveryModes = await response.json();

    // We call api.sortEntitiesNamesByAscendingOrder() with the results in argument and we backup the returned data in api.deliveryModes.
    api.deliveryModes = api.sortEntitiesNamesByAscendingOrder(deliveryModes);

    // We call api.createDeliveryModesList() by passing him in argument the ordered delivery modes.
    api.createDeliveryModesList(api.deliveryModes);
  },
  /**
   * Methot that get the purchases from the API but only for the ROLE_ADMIN.
   * @return {void}
   */
  getPurchasesForRoleAmin: async function () {
    // console.log("api.getPurchasesForRoleAmin()");

    // We call the API.
    const response = await fetch(api.generateUrl("admin/commandes"));

    // The purchases will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const purchases = await response.json();

    // We call api.sortPurchasesDatesByAscendingOrder() with the results in argument and we backup the returned data in api.purchases.
    api.purchases = api.sortPurchasesDatesByAscendingOrder(purchases);

    // We call api.createPurchasesList() by passing him in argument the ordered purchases.
    api.createPurchasesList(api.purchases);
    console.log(api.purchases);
  },
  /**
   * Methot that get, from the API and only for the ROLE_ADMIN, the purchases related to the user id given in the URL.
   * @param {string} userId
   * @return {void}
   */
  getUserPurchasesForRoleAdmin: async function (userId) {
    // console.log("getUserPurchasesForRoleAdmin");

    // We call the API.
    const response = await fetch(
      api.generateUrl("admin/utilisateurs/" + userId + "/commandes")
    );

    // The purchases will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const purchases = await response.json();

    // We call api.sortPurchasesDatesByAscendingOrder() with the results in argument and we backup the returned data in api.purchases.
    api.purchases = api.sortPurchasesDatesByAscendingOrder(purchases);

    // We call api.createPurchasesList() by passing him in argument the ordered purchases.
    api.createPurchasesList(api.purchases);
  },
  /**
   * Methot that get, from the API, the purchases of the logged in user.
   * @return {void}
   */
  getPurchasesOfLoggedInUser: async function () {
    // console.log("api.getPurchasesOfLoggedInUser()");

    // We call the API.
    const response = await fetch(api.generateUrl("commandes"));

    // The purchases will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const purchases = await response.json();

    // We call api.sortPurchasesDatesByAscendingOrder() with the results in argument and we backup the returned data in api.purchases.
    api.purchases = api.sortPurchasesDatesByAscendingOrder(purchases);

    // We call api.createPurchasesList() by passing him in argument the ordered purchases.
    api.createPurchasesList(api.purchases);
  },
  /**
   * Methot that get, from the API and only for the ROLE_ADMIN, the addresses related to the user id given in the URL.
   * @param {string} userId
   * @return {void}
   */
  getUserAddressesForRoleAdmin: async function (userId) {
    // console.log("getUserAddressesForRoleAdmin()");

    // We call the API.
    const response = await fetch(
      api.generateUrl("admin/utilisateurs/" + userId + "/adresses")
    );

    // The addresses will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const addresses = await response.json();

    // We call api.sortAddressesCitiesByAscendingOrder() with the results in argument and we backup the returned data in api.addresses.
    api.addresses = api.sortAddressesCitiesByAscendingOrder(addresses);

    // We call api.createAddressList() by passing him in argument the ordered addresses.
    api.createAddressesList(api.addresses);
  },
  /**
   * Methot that get, from the API, the adresses of the logged in user.
   * @return {void}
   */
  getAddressesOfLoggedInUser: async function () {
    // console.log("getAddressesOfLoggedInUser()");

    // We call the API.
    const response = await fetch(api.generateUrl("adresses"));

    // The addresses will be the array of object returned by response.
    // We use the method .json to read the body of the request and return as a promise that resolves with the result of parsing the body text as JSON.
    const addresses = await response.json();

    // We call api.sortAddressesCitiesByAscendingOrder() with the results in argument and we backup the returned data in api.addresses.
    api.addresses = api.sortAddressesCitiesByAscendingOrder(addresses);

    // We call api.createAddressList() by passing him in argument the ordered addresses.
    api.createAddressesList(api.addresses);
  },
  /**
   * Methot that sort the array of users pass in argument by ascending order and return the sorted users.
   * @param {Array} users
   * @return {Array} sortedUser
   */
  sortUsersEmailsByAscendingOrder: function (users) {
    // console.log("api.sortUsersEmailsByAscendingOrder()");

    // We create a ordered array by using the .sort() method that sorts the elements, in ascending order, by convert them into strings, then comparing their sequences of UTF-16 code units values.
    const sortedUser = users.sort(function (a, b) {
      // If the email of the first user object is lower than the email of the second user object.
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return 1;
      }
      // If the email of the first user object is uppder than the email of the second user object.
      else if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return -1;
      }
      // In every other case.
      else {
        return 0;
      }
    });

    // We return a array with the ordered users.
    return sortedUser;
  },
  /**
   * Methot that sort the array of entity pass in argument by ascending order and return the sorted entity.
   * @param {Array} data
   * @return {Array} sortedEntity
   */
  sortEntitiesNamesByAscendingOrder: function (data) {
    // console.log("api.sortEntitiesNamesByAscendingOrder()");

    // We create a ordered array by using the .sort() method that sorts the elements, in ascending order, by convert them into strings, then comparing their sequences of UTF-16 code units values.
    const sortedEntity = data.sort(function (a, b) {
      // If the name of the first product object is lower than the name of the second product object.
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      // If the name of the first product object is uppder than the name of the second product object.
      else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      // In every other case.
      else {
        return 0;
      }
    });

    // We return a array with the ordered entity.
    return sortedEntity;
  },
  /**
   * Methot that sort the purchases dates by ascending order and return the sorted results.
   * @param {Array} purchases
   * @return {Array} sortedPurchase
   */
  sortPurchasesDatesByAscendingOrder: function (purchases) {
    // console.log("api.sortPurchasesDatesByAscendingOrder()");

    // We create a ordered array by using the .sort() method that sorts the elements, in ascending order, by convert them into strings, then comparing their sequences of UTF-16 code units values.
    const sortedPurchase = purchases.sort(function (a, b) {
      // If the name of the first product object is lower than the name of the second product object.
      if (a.createdAt.toLowerCase() < b.createdAt.toLowerCase()) {
        return 1;
      }
      // If the reference of the first product object is uppder than the reference of the second product object.
      else if (a.createdAt.toLowerCase() > b.createdAt.toLowerCase()) {
        return -1;
      }
      // In every other case.
      else {
        return 0;
      }
    });

    // We return a array with the sorted purchases.
    return sortedPurchase;
  },
  /**
   * Methot that sort the array of addresses pass in argument by ascending order and return the sorted addresses.
   * @param {Array} adresses
   * @return {Array} sortedAddresses
   */
  sortAddressesCitiesByAscendingOrder: function (adresses) {
    // console.log("api.sortAddressesCitiesByAscendingOrder()");

    // We create a ordered array by using the .sort() method that sorts the elements, in ascending order, by convert them into strings, then comparing their sequences of UTF-16 code units values.
    const sortedAddresses = adresses.sort(function (a, b) {
      // If the email of the first user object is lower than the email of the second user object.
      if (a.city.toLowerCase() < b.city.toLowerCase()) {
        return 1;
      }
      // If the email of the first user object is uppder than the email of the second user object.
      else if (a.city.toLowerCase() > b.city.toLowerCase()) {
        return -1;
      }
      // In every other case.
      else {
        return 0;
      }
    });

    // We return a array with the ordered addresses.
    return sortedAddresses;
  },
  /**
   * Methot that create and return HTML elements that contain the users data.
   * @param {Array} users
   * @return {void}
   */
  createUsersList: function (users) {
    // console.log("api.createUsersList()");

    // The path of the folder where the user pictures are located.
    const userPicturesFolderPath = "/assets/uploads/pictures/users/";

    // If the window size is higher or equal to 320px and inferior to 992px.
    if (
      window.innerWidth >= responsive.window320Px &&
      window.innerWidth < responsive.window992Px
    ) {
      // For each user of users.
      for (let user of users) {
        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "admin-preview admin-preview_color_blue");
        // We insert the <div> inside blockUsersList, before its first child.
        api.blockUsersList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
        <img class="page__picture-entity" src="${
          userPicturesFolderPath + user.picture
        }" alt="image {{ ${user.firstName} }}"/>
            <p>${user.civilityTitle}</p>
      			<p>${user.firstName}</p>
      			<p>${user.lastName}</p>
      			<p>${user.email}</p>
      			<p>${JSON.stringify(user.roles)}</p>
      			<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
              api.adminUserHref + user.id + "/adresses"
            }">Adresses</a>
      			<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
              api.adminUserHref + user.id + "/commandes"
            }">Commandes</a>
      			<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
              api.adminUserHref + user.id
            }">Détails</a>
      			<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
              api.adminUserHref + user.id + "/mettre-a-jour"
            }">Modifier</a>
      			<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
              api.adminUserHref + user.id + "/supprimer"
            }">Supprimer</a>
        `;
      }
    }
    // Else if the window size is higher or equal to 992px.
    else if (window.innerWidth >= responsive.window992Px) {
      // We create a HTML element with the <thead> tag name.
      const thead = document.createElement("thead");
      // We insert the <thead> inside the <table>, before its first child.
      api.table.insertAdjacentElement("afterbegin", thead);
      // We set some HTML elements inside the <thead>.
      thead.innerHTML = `
          <tr>
            <th>Photo</th>
            <th>Civilité</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>E-mail</th>
            <th>Rôle(s)</th>
            <th>Adresses</th>
            <th>Commandes</th>
            <th>Actions</th>
          </tr>
        `;

      // For each email of api.userEmails.
      for (let user of users) {
        // We create a HTML element with the <tbody> tag name.
        const tbody = document.createElement("tbody");
        // We insert a <thead> after the <tbody>.
        thead.insertAdjacentElement("afterend", tbody);

        // If the counter is superior to 1 that mean that the data is already display.
        if (api.counter > 1) {
          // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
          tools.removeElementsFromDOM(thead, tbody);
        }

        // We set some HTML inside the <tbody>.
        tbody.innerHTML = `
            <tr>
                <td><img class="page__picture-entity" src="${
                  userPicturesFolderPath + user.picture
                }" alt="image-{{ user.firstName }}"/></td>
                <td>${user.civilityTitle}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${JSON.stringify(user.roles)}</td>
                <td>
                    <a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
                      api.adminUserHref + user.id + "/adresses"
                    }">Adresses</a>
                </td>
                <td>
                    <a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
                      api.adminUserHref + user.id + "/commandes"
                    }">Commandes</a>
                </td>
                <td>
                    <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                      api.adminUserHref + user.id
                    }">Détails</a>
                    <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                      api.adminUserHref + user.id + "/mettre-a-jour"
                    }">Modifier</a>
                    <a class="page__link page__link-delete page__link_text_uppercase page__link_background-color_red page__link_color_white" href="${
                      api.adminUserHref + user.id + "/supprimer"
                    }">Supprimer</a>
                </td>
            </tr>
        `;
      }
    }

    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that create and return HTML elements that contain the products data.
   * @param {Array} products
   * @return {void}
   */
  createProductsList: function (products) {
    // console.log("api.createProductsList()");

    // The path of the folder where the products pictures are located.
    const productPicturesFolderPath = "/assets/uploads/pictures/products/";
    // The URL of the link to access the products data for a ROLE_ADMIN.
    const adminProductHref = "/admin/produits/";
    // The URL of the link to access the products data for a ROLE_USER.
    const productHref = "/produits/";

    // If the URL of the renrered page is identical to app.url + "admin/produits".
    if (location.href === app.url + "admin/produits") {
      // If the window size is higher or equal to 320px and inferior to 992px.
      if (
        window.innerWidth >= responsive.window320Px &&
        window.innerWidth < responsive.window992Px
      ) {
        // For each product of products.
        for (let product of products) {
          // If the availability of the product is identical to "Disponible".
          if (product.availability === "Disponible") {
            // We set the value "Disponible" to the product availability.
            api.productAvailability = "Disponible";
            // We set the className value for the product availability.
            api.productAvailabilityClassName =
              "availability available availability__avialable_color_green";
          }
          // Else if the availability of the product is identical to "Indisponible".
          else if (product.availability === "Indisponible") {
            // We set the value "Indisponible" to the product unavailability.
            api.productAvailability = "Indisponible";
            // We set the className value for the product unavailability.
            api.productAvailabilityClassName =
              "availability unavailable availability__unavailable_color_red";
          }

          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockProductsList, before its first child.
          api.blockProductsList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <img class="page__picture-entity" src="${
              productPicturesFolderPath + product.picture
            }" alt="image ${product.name}"/>
            <p>${product.name}</p>
      		  <p>Référence ${product.reference}</p>
            <p>${product.category.name}</p>
            <p>${tools.toAmount(product.price)}</p>
           <p class="${api.productAvailabilityClassName}">${
            api.productAvailability
          }</p>
      			  <a class="page__link page__link-detail page__link_text_uppercase  page__link_background-color_blue page__link_color_white" href="${
                adminProductHref + product.slug
              }">Détails</a>
      			  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                adminProductHref + product.slug + "/mettre-a-jour"
              }">Modifier</a>
      		  	<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                adminProductHref + product.id + "/supprimer"
              }">Supprimer</a>
          `;
        }
      }
      // Else if the window size is higher or equal to 992px.
      else if (window.innerWidth >= responsive.window992Px) {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Image</th>
					  <th>Nom</th>
					  <th>Référence</th>
					  <th>Prix</th>
					  <th>Catégorie</th>
					  <th>Disponibilité</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each product of products.
        for (let product of products) {
          // If the availability of the product is identical to "Disponible".
          if (product.availability === "Disponible") {
            // We set the value "Disponible" to the product availability.
            api.productAvailability = "Disponible";
            // We set the className value for the product availability.
            api.productAvailabilityClassName =
              "availability available availability__avialable_color_green";
          }
          // Else if the availability of the product is identical to "Indisponible".
          else if (product.availability === "Indisponible") {
            // We set the value "Indisponible" to the product unavailability.
            api.productAvailability = "Indisponible";
            // We set the className value for the product unavailability.
            api.productAvailabilityClassName =
              "availability unavailable availability__unavailable_color_red";
          }

          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
					  <tr>
						  <td>
							  <img class="page__picture-entity" src="${
                  productPicturesFolderPath + product.picture
                }" alt="image ${product.name}"/>
						  </td>
						  <td>${product.name}</td>
						  <td>${product.reference}</td>
						  <td>${tools.toAmount(product.price)}</td>
						  <td>${product.category.name}</td>
						  <td class="${api.productAvailabilityClassName}">${
            api.productAvailability
          }</td>
						  <td>
							  <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                  adminProductHref + product.slug
                }">Détails</a>
							  <a class="page__link page__link_text_uppercase    page__link_background-color_safety-orange page__link_color_white" href="${
                  adminProductHref + product.slug + "/mettre-a-jour"
                }?returnToAdminProductList=true">Modifier</a>
							  <a class="page__link page__link-delete page__link_text_uppercase  page__link_background-color_red page__link_color_white" href="${
                  adminProductHref + product.id + "/supprimer"
                }">Supprimer</a>
						  </td>
					  </tr>
          `;
        }
      }
    }
    // If the URL of the renrered page is identical to app.url + "admin/produits".
    else if (location.href.includes("admin/categories")) {
      // If the window size is higher or equal to 320px and inferior to 992px.
      if (
        window.innerWidth >= responsive.window320Px &&
        window.innerWidth < responsive.window992Px
      ) {
        // For each product of products.
        for (let product of products) {
          // If the availability of the product is identical to "Disponible".
          if (product.availability === "Disponible") {
            // We set the value "Disponible" to the product availability.
            api.productAvailability = "Disponible";
            // We set the className value for the product availability.
            api.productAvailabilityClassName =
              "availability available availability__avialable_color_green";
          }
          // Else if the availability of the product is identical to "Indisponible".
          else if (product.availability === "Indisponible") {
            // We set the value "Indisponible" to the product unavailability.
            api.productAvailability = "Indisponible";
            // We set the className value for the product unavailability.
            api.productAvailabilityClassName =
              "availability unavailable availability__unavailable_color_red";
          }

          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockProductsList, before its first child.
          api.blockProductsList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <img class="page__picture-entity" src="${
              productPicturesFolderPath + product.picture
            }" alt="image ${product.name}"/>
            <p>${product.name}</p>
      		  <p>Référence ${product.reference}</p>
            <p>${product.category.name}</p>
            <p>${tools.toAmount(product.price)}</p>
           <p class="${api.productAvailabilityClassName}">${
            api.productAvailability
          }</p>
      			  <a class="page__link page__link-detail page__link_text_uppercase  page__link_background-color_blue page__link_color_white" href="/admin/categories/${
                product.category.slug
              }/produits/${product.slug}">Détails</a>
      			  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                adminProductHref +
                product.slug +
                "/mettre-a-jour?returnToAdminCategoryProductList=true"
              }">Modifier</a>
      		  	<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                adminProductHref + product.id + "/supprimer"
              }">Supprimer</a>
          `;
        }
      }
      // Else if the window size is higher or equal to 992px.
      else if (window.innerWidth >= responsive.window992Px) {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Image</th>
					  <th>Nom</th>
					  <th>Référence</th>
					  <th>Prix</th>
					  <th>Catégorie</th>
					  <th>Disponibilité</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each product of products.
        for (let product of products) {
          // If the availability of the product is identical to "Disponible".
          if (product.availability === "Disponible") {
            // We set the value "Disponible" to the product availability.
            api.productAvailability = "Disponible";
            // We set the className value for the product availability.
            api.productAvailabilityClassName =
              "availability available availability__avialable_color_green";
          }
          // Else if the availability of the product is identical to "Indisponible".
          else if (product.availability === "Indisponible") {
            // We set the value "Indisponible" to the product unavailability.
            api.productAvailability = "Indisponible";
            // We set the className value for the product unavailability.
            api.productAvailabilityClassName =
              "availability unavailable availability__unavailable_color_red";
          }

          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
					  <tr>
						  <td>
							  <img class="page__picture-entity" src="${
                  productPicturesFolderPath + product.picture
                }" alt="image ${product.name}"/>
						  </td>
						  <td>${product.name}</td>
						  <td>${product.reference}</td>
						  <td>${tools.toAmount(product.price)}</td>
						  <td>${product.category.name}</td>
						  <td class="${api.productAvailabilityClassName}">${
            api.productAvailability
          }</td>
						  <td>
							  <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="/admin/categories/${
                  product.category.slug
                }/produits/${product.slug}">Détails</a>
							  <a class="page__link page__link_text_uppercase    page__link_background-color_safety-orange page__link_color_white" href="${
                  adminProductHref +
                  product.slug +
                  "/mettre-a-jour?returnToAdminCategoryProductList=true"
                }">Modifier</a>
							  <a class="page__link page__link-delete page__link_text_uppercase  page__link_background-color_red page__link_color_white" href="${
                  adminProductHref + product.id + "/supprimer"
                }">Supprimer</a>
						  </td>
					  </tr>
          `;
        }
      }
    }
    // Else if the URL of the renrered page is identical to app.url.
    else if (location.href === app.url) {
      // For each product of products.
      for (let product of products) {
        // If the availability of the product is identical to "Disponible".
        if (product.availability === "Disponible") {
          // We set a empty value to the product availability.
          api.productAvailability = "";
          // We set the className value for the product availability.
          api.productAvailabilityClassName =
            "availability available availability__avialable_color_green";
          // We set a className to null to leave the add to cart button in case of availability.
          api.displayNoneClassName = null;
        }
        // Else if the availability of the product is identical to "Indisponible".
        else if (product.availability === "Indisponible") {
          // We set the value "Indisponible" to the product unavailability.
          api.productAvailability = "Indisponible";
          // We set the className value for the product unavailability.
          api.productAvailabilityClassName =
            "availability unavailable availability__unavailable_color_red";
          // We set a className to "display-none" to remove the add to cart button in case of unavailability.
          api.displayNoneClassName = "display-none";
        }

        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "product-preview");
        // We insert the <div> inside blockProductsList, before its first child.
        api.blockProductsList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
          <a class="link-picture" href="${productHref + product.slug}">
						<img class="page__picture" src="${
              productPicturesFolderPath + product.picture
            }" alt="image ${product.name}"/>
					</a>
					<p>${product.name}</p>
					<p>${tools.toAmount(product.price)}</p>
						<a class="page__link-cart page__link_background-color_blue ${
              api.displayNoneClassName
            }" href="/panier/ajouter/produits/${product.id}?returnToHome=true" >
							<img class="page__icon page__icon-cart page__icon_color_white ${
                api.displayNoneClassName
              }" src="/assets/images/icons/cart.svg" alt="image-cart"/>
						</a>
					<p class="${api.productAvailabilityClassName}">${api.productAvailability}</p>
        `;
      }
    }
    // Else if the URL of the renrered page is identical to app.url + "produits".
    else if (location.href === app.url + "produits") {
      // For each product of products.
      for (let product of products) {
        // If the availability of the product is identical to "Disponible".
        if (product.availability === "Disponible") {
          // We set a empty value to the product availability.
          api.productAvailability = "";
          // We set the className value for the product availability.
          api.productAvailabilityClassName =
            "availability available availability__avialable_color_green";
          // We set a className to null to leave the add to cart button in case of availability.
          api.displayNoneClassName = null;
        }
        // Else if the availability of the product is identical to "Indisponible".
        else if (product.availability === "Indisponible") {
          // We set the value "Indisponible" to the product unavailability.
          api.productAvailability = "Indisponible";
          // We set the className value for the product unavailability.
          api.productAvailabilityClassName =
            "availability unavailable availability__unavailable_color_red";
          // We set a className to "display-none" to remove the add to cart button in case of unavailability.
          api.displayNoneClassName = "display-none";
        }

        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "product-preview");
        // We insert the <div> inside blockProductsList, before its first child.
        api.blockProductsList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
          <a class="link-picture" href="${productHref + product.slug}">
						<img class="page__picture" src="${
              productPicturesFolderPath + product.picture
            }" alt="image ${product.name}"/>
					</a>
					<p>${product.name}</p>
					<p>${tools.toAmount(product.price)}</p>
						<a class="page__link-cart page__link_background-color_blue ${
              api.displayNoneClassName
            }" href="/panier/ajouter/produits/${
          product.id
        }?returnToProductList=true" >
							<img class="page__icon page__icon-cart page__icon_color_white ${
                api.displayNoneClassName
              }" src="/assets/images/icons/cart.svg" alt="image-cart"/>
						</a>
					<p class="${api.productAvailabilityClassName}">${api.productAvailability}</p>
        `;
      }
    }
    // Else if the URL contain the given string.
    else if (location.href.includes("produits")) {
      // For each product of products.
      for (let product of products) {
        // If the availability of the product is identical to "Disponible".
        if (product.availability === "Disponible") {
          // We set a empty value to the product availability.
          api.productAvailability = "";
          // We set the className value for the product availability.
          api.productAvailabilityClassName =
            "availability available availability__avialable_color_green";
          // We set a className to null to leave the add to cart button in case of availability.
          api.displayNoneClassName = null;
        }
        // Else if the availability of the product is identical to "Indisponible".
        else if (product.availability === "Indisponible") {
          // We set the value "Indisponible" to the product unavailability.
          api.productAvailability = "Indisponible";
          // We set the className value for the product unavailability.
          api.productAvailabilityClassName =
            "availability unavailable availability__unavailable_color_red";
          // We set a className to "display-none" to remove the add to cart button in case of unavailability.
          api.displayNoneClassName = "display-none";
        }

        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "product-preview");
        // We insert the <div> inside blockProductsList, before its first child.
        api.blockProductsList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
          <a class="link-picture" href="/categories/${
            product.category.slug
          }/produits/${product.slug}">
						<img class="page__picture" src="${
              productPicturesFolderPath + product.picture
            }" alt="image ${product.name}"/>
					</a>
					<p>${product.name}</p>
					<p>${tools.toAmount(product.price)}</p>
						<a class="page__link-cart page__link_background-color_blue ${
              api.displayNoneClassName
            }" href="/panier/ajouter/produits/${
          product.id
        }?returnToProductList=true" >
							<img class="page__icon page__icon-cart page__icon_color_white ${
                api.displayNoneClassName
              }" src="/assets/images/icons/cart.svg" alt="image-cart"/>
						</a>
					<p class="${api.productAvailabilityClassName}">${api.productAvailability}</p>
        `;
      }
    }

    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that create and return HTML elements that contain the categories data.
   * @param {Array} categories
   * @return {void}
   */
  createCategoriesList: function (categories) {
    // console.log("api.createCategoriesList()");

    // The URL of the link to access the categories data for a ROLE_ADMIN.
    const adminCategoryHref = "/admin/categories/";
    // The URL of the link to access the categories data for a ROLE_USER.
    const userCategoryHref = "/categories/";

    // If the URL of the renrered page is identical to app.url + "admin/produits".
    if (location.href === app.url + "admin/categories") {
      // If the window size is higher or equal to 320px and inferior to 992px.
      if (
        window.innerWidth >= responsive.window320Px &&
        window.innerWidth < responsive.window992Px
      ) {
        // For each category of categories.
        for (let category of categories) {
          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockCategoriesList, before its first child.
          api.blockCategoriesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <p>${category.name}</p>
						  <a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
                adminCategoryHref + category.slug + "/produits"
              }">Liste  des
							${category.name}s</a>
						  <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                adminCategoryHref + category.slug
              }">Détails</a>
						  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                adminCategoryHref + category.slug + "/mettre-a-jour"
              }">Modifier</a>
						  <a class=" page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                adminCategoryHref + category.id + "/supprimer"
              }">Supprimer</a>
          `;
        }
      }
      // Else if the window size is higher or equal to 992px.
      else if (window.innerWidth >= responsive.window992Px) {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Nom</th>
					  <th>Produits</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each category of categories.
        for (let category of categories) {
          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${category.name}</td>
							<td>
								<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="${
                  adminCategoryHref + category.slug + "/produits"
                }">Liste des
								${category.name}s</a>
							</td>
							<td>
								<a class="page__link page__link-detail page__link_text_uppercase  page__link_background-color_blue page__link_color_white" href="${
                  adminCategoryHref + category.slug
                }">Détails</a>
								<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                  adminCategoryHref + category.slug + "/mettre-a-jour"
                }">Modifier</a>
								<a class="page__link page__link-delete page__link_text_uppercase page__link_background-color_red page__link_color_white" href="${
                  adminCategoryHref + category.id + "/supprimer"
                }">
								Supprimer</a>
							</td>
						</tr>
          `;
        }
      }
    }
    // Else if the URL of the renrered page is identical to app.url + "categories".
    else if (location.href === app.url + "categories") {
      // For each category of categories.
      for (let category of categories) {
        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "card card_color_blue");
        // We insert the <div> inside blockCategoriesList, before its first child.
        api.blockCategoriesList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
          <h3>
						<a class="page__link page__link_text_uppercase card__link page__link_color_blue" href="${
              userCategoryHref + category.slug + "/produits"
            }">${category.name}</a>
					</h3>
        `;
      }
    }

    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that create and return HTML elements that contain the delivery modes data.
   * @param {Array} delieveryModes
   * @return {void}
   */
  createDeliveryModesList: function (delieveryModes) {
    // console.log("api.createDeliveryModesList()");

    // The path of the folder where the delivery modes pictures are located.
    const deliveryModePicturesFolderPath =
      "/assets/uploads/pictures/delivery-modes/";
    // The URL of the link to access the delivery modes data for a ROLE_ADMIN.
    const adminDeliveryModeHref = "/admin/modes-de-livraison/";

    // If the window size is higher or equal to 320px and inferior to 992px.
    if (
      window.innerWidth >= responsive.window320Px &&
      window.innerWidth < responsive.window992Px
    ) {
      // For each delieveryMode of delieveryModes.
      for (let delieveryMode of delieveryModes) {
        // We create a HTML element with the <div> tag name.
        let div = document.createElement("div");
        // We set className to the <div>.
        div.setAttribute("class", "admin-preview admin-preview_color_blue");
        // We insert the <div> inside blockDeliveryModesList, before its first child.
        api.blockDeliveryModesList.insertAdjacentElement("afterbegin", div);
        // We set HTML elements in the <div>.
        div.innerHTML = `
        	<img class="page__picture-entity page__picture-delivery-mode" src="${
            deliveryModePicturesFolderPath + delieveryMode.picture
          }" alt="image ${delieveryMode.name}"/>
						<p>${delieveryMode.name}</p>
						<p>${delieveryMode.description}</p>
						<p>${tools.toAmount(delieveryMode.price)}</p>
						<p>Offert à partit de ${tools.toAmount(
              delieveryMode.minCartAmountForFreeDelivery
            )}</p>
						  <a class="page__link page__link_text_uppercase page__link-detail page__link_background-color_blue page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id
              }">Détails</a>
						  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id + "/mettre-a-jour"
              }">Modifier</a>
						  <a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id + "/supprimer"
              }">Supprimer</a>
          `;
      }
    }
    // Else if the window size is higher or equal to 992px.
    else if (window.innerWidth >= responsive.window992Px) {
      // We create a HTML element with the <thead> tag name.
      const thead = document.createElement("thead");
      // We insert the <thead> inside the <table>, before its first child.
      api.table.insertAdjacentElement("afterbegin", thead);
      // We set some HTML elements inside the <thead>.
      thead.innerHTML = `
        <tr>
          <th>Image</th>
					<th>Nom</th>
					<th>Description</th>
					<th>Prix</th>
					<th>Offert à partir de</th>
					<th>Actions</th>
        </tr>
        `;

      // For each delieveryMode of delieveryModes.
      for (let delieveryMode of delieveryModes) {
        // We create a HTML element with the <tbody> tag name.
        const tbody = document.createElement("tbody");
        // We insert a <thead> after the <tbody>.
        thead.insertAdjacentElement("afterend", tbody);

        // If the counter is superior to 1 that mean that the data is already display.
        if (api.counter > 1) {
          // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
          tools.removeElementsFromDOM(thead, tbody);
        }

        // We set some HTML inside the <tbody>.
        tbody.innerHTML = `
        	<tr>
						<td>
							<img class="page__picture-entity page__picture-delivery-mode" src="${
                deliveryModePicturesFolderPath + delieveryMode.picture
              }" alt="image ${delieveryMode.name}"/>
						</td>
						<td>${delieveryMode.name}</td>
						<td>${delieveryMode.description}</td>
						<td>${tools.toAmount(delieveryMode.price)}</td>
						<td>${tools.toAmount(delieveryMode.minCartAmountForFreeDelivery)}</td>
						<td>
							<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id
              }">Détails</a>
							<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id + "/mettre-a-jour"
              }">Modifier</a>
							<a class="page__link page__link-delete page__link_text_uppercase page__link_background-color_red page__link_color_white" href="${
                adminDeliveryModeHref + delieveryMode.id + "/supprimer"
              }">Supprimer</a>
						</td>
					</tr>
        `;
      }
    }

    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that create and return HTML elements that contain the purchases data.
   * @param {Array} purchases
   * @return {void}
   */
  createPurchasesList: function (purchases) {
    // console.log("api.createPurchasesList()");

    // If the window size is higher or equal to 320px and inferior to 992px.
    if (
      window.innerWidth >= responsive.window320Px &&
      window.innerWidth < responsive.window992Px
    ) {
      // If the URL of the renrered page is identical to app.url + "admin/produits".
      if (location.href === app.url + "admin/commandes") {
        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          // div.setAttribute("class", "card-purchase card-purchase_color_blue");
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockPurchasesList, before its first child.
          api.blockPurchasesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <p>${purchase.reference}</p>
            <p>${tools.formatDateTime(purchase.createdAt)}</p>
            <p>${tools.toAmount(purchase.total)}</p>
            <p class="${api.purchaseStatusClassName}">${purchase.status}</p>
              <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                "/admin/commandes/" + purchase.reference
              }">Détails</a>
						  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                api.adminuserhref +
                purchase.user.id +
                "/commandes/" +
                purchase.reference +
                "/mettre-a-jour"
              }?returnToAdminPurchaseList=true">Modifier</a>
						  <a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                "/admin/commandes/" + purchase.id + "/supprimer"
              }">Supprimer</a>
          `;
        }
      }
      // Else if the URL contrain the given string.
      else if (location.href.includes("utilisateurs")) {
        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockPurchasesList, before its first child.
          api.blockPurchasesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <p>${purchase.reference}</p>
            <p>${tools.formatDateTime(purchase.createdAt)}</p>
            <p>${tools.toAmount(purchase.total)}</p>
            <p class="${api.purchaseStatusClassName}">${purchase.status}</p>
              <a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                api.adminuserhref +
                purchase.user.id +
                "/commandes/" +
                purchase.reference
              }">Détails</a>
						  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                api.adminuserhref +
                purchase.user.id +
                "/commandes/" +
                purchase.reference +
                "/mettre-a-jour"
              }?returnToAdminPurchaseList=true">Modifier</a>
						  <a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                "/admin/commandes/" + purchase.id + "/supprimer"
              }">Supprimer</a>
          `;
        }
      }
      // Else if the URL of the renrered page is identical to app.url + "commandes"
      else if (location.href === app.url + "commandes") {
        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "card-purchase card-purchase_color_blue");
          // We insert the <div> inside blockPurchasesList, before its first child.
          api.blockPurchasesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
            <p>${purchase.reference}</p>
            <p>${tools.formatDateTime(purchase.createdAt)}</p>
            <p>${tools.toAmount(purchase.total)}</p>
            <p class="${api.purchaseStatusClassName}">${purchase.status}</p>
              <a class="page__link page__link-detail page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_blue page__link_color_white" href="${
                "/commandes/" + purchase.reference
              }">Détails</a>
          `;
        }
      }
    }
    // Else if the window size is higher or equal to 992px.
    else if (window.innerWidth >= responsive.window992Px) {
      // If the URL of the renrered page is identical to app.url + "admin/produits".
      if (location.href === app.url + "admin/commandes") {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Référence</th>
					  <th>Date</th>
					  <th>Prix Total</th>
					  <th>Statut</th>
					  <th>Facture</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${purchase.reference}</td>
							<td>${tools.formatDateTime(purchase.createdAt)}</td>
							<td>${tools.toAmount(purchase.total)}</td>
			        <td class="${api.purchaseStatusClassName}">${purchase.status}</td>
							<td>
								<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="#">
									Facture PDF</a>
							</td>
							<td>
								<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                  "/admin/commandes/" + purchase.reference
                }">Détails</a>
								<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                  api.adminuserhref +
                  purchase.user.id +
                  "/commandes/" +
                  purchase.reference +
                  "/mettre-a-jour"
                }?returnToAdminPurchaseList=true">
									Modifier</a>
								<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                  "/admin/commandes/" + purchase.id + "/supprimer"
                }">Supprimer</a>
							</td>
						</tr>
          `;
        }
      }
      // Else if the URL contain the given string.
      else if (location.href.includes("utilisateurs")) {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Référence</th>
					  <th>Date</th>
					  <th>Prix Total</th>
					  <th>Statut</th>
					  <th>Facture</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${purchase.reference}</td>
							<td>${tools.formatDateTime(purchase.createdAt)}</td>
							<td>${tools.toAmount(purchase.total)}</td>
			        <td class="${api.purchaseStatusClassName}">${purchase.status}</td>
							<td>
								<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="#">
									Facture PDF</a>
							</td>
							<td>
								<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                  api.adminuserhref +
                  purchase.user.id +
                  "/commandes/" +
                  purchase.reference
                }">Détails</a>
								<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                  api.adminuserhref +
                  purchase.user.id +
                  "/commandes/" +
                  purchase.reference +
                  "/mettre-a-jour"
                }?returnToAdminPurchaseList=true">
									Modifier</a>
								<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                  "/admin/commandes/" + purchase.id + "/supprimer"
                }">Supprimer</a>
							</td>
						</tr>
          `;
        }
      }
      // Else if the URL of the renrered page is identical to app.url + "commandes"
      else if (location.href === app.url + "commandes") {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Référence</th>
					  <th>Date</th>
					  <th>Prix Total</th>
					  <th>Statut</th>
					  <th>Facture</th>
					  <th>Actions</th>
          </tr>
        `;

        // For each purchase of purchases.
        for (let purchase of purchases) {
          // If the status of the purchase is identical to the value of the PHP constant STATUS_PENDING_CHECKOUT of the Purchase entity.
          if (purchase.status === "Payée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Payée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__paid status__paid_color_green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_IN_PROGRESS of the Purchase entity.
          else if (purchase.status === "En cours de préparation") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "En cours de préparation";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__in-progress status__in-progress_color_safety-orange";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_SEND of the Purchase entity.
          else if (purchase.status === "Expédiee") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Expédiee";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__send status__send_color_purple";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_DELIVER of the Purchase entity.
          else if (purchase.status === "Livrée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Livrée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__deliver status__deliver_color_slimy-green";
          }
          // Else if the status of the purchase is identical to the value of the PHP constant STATUS_ANNUL of the Purchase entity.
          else if (purchase.status === "Annulée") {
            // We set the value of the PHP constant to the purchase status.
            api.purchaseStatus = "Annulée";
            // We set the className value for the purchase status.
            api.purchaseStatusClassName =
              "status status__annul status__annul_color_red";
          }

          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${purchase.reference}</td>
							<td>${tools.formatDateTime(purchase.createdAt)}</td>
							<td>${tools.toAmount(purchase.total)}</td>
			        <td class="${api.purchaseStatusClassName}">${purchase.status}</td>
							<td>
								<a class="page__link page__link_text page__link_font-weight_normal page__link_padding-and-margin_0 page__link_color_blue" href="#">
									Facture PDF</a>
							</td>
							<td>
								<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
                  "/commandes/" + purchase.reference
                }">Détails</a>
							</td>
						</tr>
          `;
        }
      }
    }

    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that create and return HTML elements that contain the addresses data.
   * @param {Array} addresses
   * @return {void}
   */
  createAddressesList: function (addresses) {
    // console.log("createAddressesList");

    // The URL of the link to access the addresses data for a ROLE_USER.
    const userAddressHref = "/adresses/";

    // If the window size is higher or equal to 320px and inferior to 992px.
    if (
      window.innerWidth >= responsive.window320Px &&
      window.innerWidth < responsive.window992Px
    ) {
      // If the URL contrain the given string.
      if (location.href.includes("utilisateurs")) {
        // For each addresse of addresses.
        for (let addresse of addresses) {
          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "admin-preview admin-preview_color_blue");
          // We insert the <div> inside blockAddressesList, before its first child.
          api.blockAddressesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
          	<p>${addresse.firstName} ${addresse.lastName}</p>
          	<p>${addresse.streetNumber} ${addresse.streetName}</p>
          	<p>${addresse.zipCode} - ${addresse.city}</p>
          	<p>${addresse.country}</p>
          	<p>${addresse.phoneNumber}</p>
						<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
              api.adminUserHref +
              addresse.user.id +
              userAddressHref +
              addresse.id
            }">Détails</a>
						<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
              api.adminUserHref +
              addresse.user.id +
              userAddressHref +
              addresse.id +
              "/mettre-a-jour"
            }">Modifier</a>
						<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
              api.adminUserHref +
              addresse.user.id +
              userAddressHref +
              addresse.id +
              "/supprimer"
            }">Supprimer</a>
          `;
        }
      }
      // Else if the URL of the renrered page is identical to app.url + "adresses".
      else if (location.href === app.url + "adresses") {
        // For each addresse of addresses.
        for (let addresse of addresses) {
          // We create a HTML element with the <div> tag name.
          let div = document.createElement("div");
          // We set className to the <div>.
          div.setAttribute("class", "card-address card-address_color_blue");
          // We insert the <div> inside blockAddressesList, before its first child.
          api.blockAddressesList.insertAdjacentElement("afterbegin", div);
          // We set HTML elements in the <div>.
          div.innerHTML = `
          	<p>${addresse.firstName} ${addresse.lastName}</p>
          	<p>${addresse.streetNumber} ${addresse.streetName}</p>
          	<p>${addresse.zipCode} - ${addresse.city}</p>
          	<p>${addresse.country}</p>
          	<p>${addresse.phoneNumber}</p>
						<a class="page__link page__link-detail page__link_text_uppercase page__link_background-color_blue page__link_color_white" href="${
              userAddressHref + addresse.id
            }">Détails</a>
						<a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
              userAddressHref + addresse.id
            }/mettre-a-jour">Modifier</a>
						<a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
              userAddressHref + addresse.id
            }/supprimer">Supprimer</a>
          `;
        }
      }
    }
    // Else if the window size is higher or equal to 992px.
    else if (window.innerWidth >= responsive.window992Px) {
      // If the URL contrain the given string.
      if (location.href.includes("utilisateurs")) {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Prénom</th>
						<th>Nom</th>
						<th>Numéro de rue</th>
						<th>Nom de rue</th>
						<th>Code postal</th>
						<th>Ville</th>
						<th>Pays</th>
						<th>Numéro de téléphone mobile</th>
						<th>Actions</th
          </tr>
        `;

        // For each addresse of addresses.
        for (let addresse of addresses) {
          // We create a HTML element with the <tbody> tag name.
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${addresse.firstName}</td>
							<td>${addresse.lastName}</td>
							<td>${addresse.streetNumber}</td>
							<td>${addresse.streetName}</td>
							<td>${addresse.zipCode}</td>
							<td>${addresse.city}</td>
							<td>${addresse.country}</td>
							<td>${addresse.phoneNumber}</td>
							<td>
                <a class="page__link page__link-detail page__link_text_uppercase  page__link_background-color_blue page__link_color_white" href="${
                  api.adminUserHref +
                  addresse.user.id +
                  userAddressHref +
                  addresse.id
                }">Détails</a>
							  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                  api.adminUserHref +
                  addresse.user.id +
                  userAddressHref +
                  addresse.id +
                  "/mettre-a-jour"
                }">Modifier</a>
							  <a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                  api.adminUserHref +
                  addresse.user.id +
                  userAddressHref +
                  addresse.id +
                  "/supprimer"
                }">Supprimer</a>
              </td>
						</tr>
          `;
        }
      }
      // Else if the URL of the renrered page is identical to app.url + "adresses".
      else if (location.href === app.url + "adresses") {
        // We create a HTML element with the <thead> tag name.
        const thead = document.createElement("thead");
        // We insert the <thead> inside the <table>, before its first child.
        api.table.insertAdjacentElement("afterbegin", thead);
        // We set some HTML elements inside the <thead>.
        thead.innerHTML = `
          <tr>
            <th>Prénom</th>
						<th>Nom</th>
						<th>Numéro de rue</th>
						<th>Nom de rue</th>
						<th>Code postal</th>
						<th>Ville</th>
						<th>Pays</th>
						<th>Numéro de téléphone mobile</th>
						<th>Actions</th
          </tr>
        `;

        // For each addresse of addresses.
        // If the counter is superior to 1 that mean that the data is already display.
        for (let addresse of addresses) {
          const tbody = document.createElement("tbody");
          // We insert a <thead> after the <tbody>.
          thead.insertAdjacentElement("afterend", tbody);

          // If the counter is superior to 1 that mean that the data is already display.
          if (api.counter > 1) {
            // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
            tools.removeElementsFromDOM(thead, tbody);
          }

          // We set some HTML inside the <tbody>.
          tbody.innerHTML = `
            <tr>
							<td>${addresse.firstName}</td>
							<td>${addresse.lastName}</td>
							<td>${addresse.streetNumber}</td>
							<td>${addresse.streetName}</td>
							<td>${addresse.zipCode}</td>
							<td>${addresse.city}</td>
							<td>${addresse.country}</td>
							<td>${addresse.phoneNumber}</td>
							<td>
                <a class="page__link page__link-detail page__link_text_uppercase  page__link_background-color_blue page__link_color_white" href="${
                  userAddressHref + addresse.id
                }">Détails</a>
							  <a class="page__link page__link_text_uppercase page__link_background-color_safety-orange page__link_color_white" href="${
                  userAddressHref + addresse.id
                }">Modifier</a>
							  <a class="page__link page__link-delete page__link_text_uppercase page__link_margin-bottom_1em page__link_background-color_red page__link_color_white" href="${
                  userAddressHref + addresse.id
                }/supprimer">Supprimer</a>
              </td>
						</tr>
          `;
        }
      }
    }
    // We call font.init() to set the right colors to the HTML Elements.
    font.init();
  },
  /**
   * Methot that get the input on which the user is searching, the value of the search and call the right method to start the search according this value.
   * @param {Event} event
   * @return {void}
   */
  handleSearchInput: function (event) {
    // console.log("api.handleSearchInput()");

    // We get the reference to the object onto which the event was dispatched, and is value and we convert the value to lower case.
    const searchedValue = event.target.value.toLowerCase();

    //  We call  api.cleanDOMForSearchResults() so that when we start a new search the HTML elements where tha data has already been display is remove from the DOM in order display the new data.
    api.cleanDOMForSearchResults();

    // If the field in which the user is searching is identical to api.searchUserInput.
    if (event.target === api.searchUserInput) {
      // We call api.searchUserByEmail() with the searchedValue in argument to find the searched user by it's e-mail.
      api.searchUserByEmail(searchedValue);
    }
    // Else if the field in which the user is searching is identical to api.searchProductInput.
    else if (event.target === api.searchProductInput) {
      // We call api.searchEntityByName() with the searchedValue and api.products in argument to find the searched product by it's name.
      api.searchEntityByName(searchedValue, api.products);
    }
    // Else if the field in which the user is searching is identical to api.searchCategoryInput.
    else if (event.target === api.searchCategoryInput) {
      // We call api.searchEntityByName() with the searchedValue and api.categories in argument to find the searched category by it's name.
      api.searchEntityByName(searchedValue, api.categories);
    }
    // Else if the field in which the user is searching is identical to api.searchDeliveryModeInput.
    else if (event.target === api.searchDeliveryModeInput) {
      // We call api.searchEntityByName() with the searchedValue and api.deliveryModes in argument to find the searched delivery modes by it's name.
      api.searchEntityByName(searchedValue, api.deliveryModes);
    }
    // Else if the field in which the user is searching is identical to api.searchPurchaseInput.
    else if (event.target === api.searchPurchaseInput) {
      // We call api.searchPurchaseByReference() with the searchedValue in argument to find the searched purchase by it's reference.
      api.searchPurchaseByReference(searchedValue);
    }
    // Else if the field in which the user is searching is identical to api.searchAddressInput.
    else if (event.target === api.searchAddressInput) {
      // We call api.searchAddressByCity() with the searchedValue in argument to find the searched addresse by it's city.
      api.searchAddressByCity(searchedValue);
    }
  },
  /**
   * Methot that remove from the DOM the HTML elements where tha data is display.
   * @return {void}
   */
  cleanDOMForSearchResults: function () {
    // console.log("api.cleanDOMForSearchResults()");

    // If the URL of the renrered page is identical to app.url + "admin/utilisateurs" or to app.url + "admin/produits" or to app.url + "admin/categories" or to app.url + "admin/modes-de-livraison" or to app.url + "admin/commandes" or if the URL contrain the given string.
    if (
      location.href === app.url + "admin/utilisateurs" ||
      location.href === app.url + "admin/produits" ||
      location.href === app.url + "admin/categories" ||
      location.href === app.url + "admin/modes-de-livraison" ||
      location.href === app.url + "admin/commandes" ||
      location.href.includes("admin/categories") ||
      location.href.includes("utilisateurs")
    ) {
      // We select all the card by theirs class name.
      const adminPreviews = document.querySelectorAll(".admin-preview");
      // For each adminPreview of adminPreviews.
      for (let adminPreview of adminPreviews) {
        // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
        tools.removeElementsFromDOM(adminPreview);
      }

      // We drop the content of the <table> to start a new search from scratch.
      api.table.innerHTML = "";
    }
    // Else if the URL of the renrered page is identical to app.url or to app.url + "produits".
    else if (
      location.href === app.url ||
      location.href === app.url + "produits" ||
      location.href.includes("produits")
    ) {
      // We select all the card by theirs class name.
      const productPreviews = document.querySelectorAll(".product-preview");
      // For each adminPreview of adminPreviews.
      for (let productPreview of productPreviews) {
        // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
        tools.removeElementsFromDOM(productPreview);
      }
    }
    // Else if the URL of the renrered page is identical to app.url + "categories".
    else if (location.href === app.url + "categories") {
      // We select all the card by theirs class name.
      const cards = document.querySelectorAll(".card");
      // For each adminPreview of adminPreviews.
      for (let card of cards) {
        // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
        tools.removeElementsFromDOM(card);
      }
    }
    // Else if the URL of the renrered page is identical to app.url + "commandes".
    else if (location.href === app.url + "commandes") {
      // We select all the card by theirs class name.
      const purchaseCards = document.querySelectorAll(".card-purchase");
      // For each purchaseCard of purchaseCards.
      for (let purchaseCard of purchaseCards) {
        // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
        tools.removeElementsFromDOM(purchaseCard);
      }

      // We drop the content of the <table> to start a new search from scratch.
      api.table.innerHTML = "";
    }
    // Else if the URL of the renrered page is identical to app.url + "adresses".
    else if (location.href === app.url + "adresses") {
      // We select all the card by theirs class name.
      const cardAddresses = document.querySelectorAll(".card-address");
      // For each cardAddresse of cardAddresses.
      for (let cardAddresse of cardAddresses) {
        // We call tools.removeElementsFromDOM() to remove one or many elements from the DOM.
        tools.removeElementsFromDOM(cardAddresse);
      }

      // We drop the content of the <table> to start a new search from scratch.
      api.table.innerHTML = "";
    }
  },
  /**
   * Methot that filter the users by theirs e-mail according to the searched e-mail and call api.createUsersList() with the array of filtered users in argument to display them.
   * @param {String} searchedEmail
   * @return {void}
   */
  searchUserByEmail: function (searchedEmail) {
    // console.log("api.searchUserByEmail()");

    // We filter each user object of api.users and if the user emails, that we convert in lower case, is includes in the search we add him in the new array filteredUsers.
    const filteredUsers = api.users.filter((myObject) =>
      myObject.email.toLowerCase().includes(searchedEmail)
    );

    // We call api.creatrUserList() by passing him in argument the filtered data.
    api.createUsersList(filteredUsers);
  },
  /**
   * Methot that filter the entity by theirs name according to the searched name.
   * @param {String} searchedName
   * @param {Array} data
   * @return {void}
   */
  searchEntityByName: function (searchedName, data) {
    // console.log("api.searchEntityByName()");

    // We filter each entity object and if the entity name, that we convert in lower case, is includes in the search we add him in the new array filteredEntity.
    const filteredEntity = data.filter((myObject) =>
      myObject.name.toLowerCase().includes(searchedName)
    );

    // If the URL of the renrered page is identical to app.url + "admin/produits" or to app.url or to app.url + "produits" or if the URL include the given string.
    if (
      location.href === app.url + "admin/produits" ||
      location.href === app.url ||
      location.href === app.url + "produits" ||
      location.href.includes("produits")
    ) {
      // We call api.createProductsList() by passing him in argument the filtered data.
      api.createProductsList(filteredEntity);
    }
    // Else if the URL of the renrered page is identical to app.url + "admin/categories" or to app.url or to app.url + "categories"
    else if (
      location.href === app.url + "admin/categories" ||
      location.href === app.url + "categories"
    ) {
      // We call api.createProductsList() by passing him in argument the filtered data.
      api.createCategoriesList(filteredEntity);
    }
    // Else if the URL of the renrered page is identical to app.url + "admin/modes-de-livraison".
    else if (location.href === app.url + "admin/modes-de-livraison") {
      // We call api.createProductsList() by passing him in argument the filtered data.
      api.createDeliveryModesList(filteredEntity);
    }
  },
  /**
   * Methot that filter the purchase by theirs references according to the searched reference.
   * @param {String} searchedReference
   * @return {void}
   */
  searchPurchaseByReference: function (searchedReference) {
    // console.log("api.searchPurchaseByReference()");

    // We filter each purchase object and if the purchase reference, that we convert in lower case, is includes in the search we add him in the new array filteredPurchases.
    const filteredPurchases = api.purchases.filter((myObject) =>
      myObject.reference.toLowerCase().includes(searchedReference)
    );

    // We call api.createPurchasesList() by passing him in argument the filtered data.
    api.createPurchasesList(filteredPurchases);
  },
  /**
   * Methot that filter the addresses by theirs city according to the searched city.
   * @param {String} searchedCity
   * @return {void}
   */
  searchAddressByCity: function (searchedCity) {
    // console.log("api.searchAddressByCity()");

    // We filter each addresses object and if the addresses city, that we convert in lower case, is includes in the search we add him in the new array filteredPurchases.
    const filteredAddresses = api.addresses.filter((myObject) =>
      myObject.city.toLowerCase().includes(searchedCity)
    );

    // We call api.createAddressesList() by passing him in argument the filtered data.
    api.createAddressesList(filteredAddresses);
  },
};
