const font = {
  // Proprietes availables in the object.
  colors: {},
  color: null,
  themes: [],
  // ===================== CSS CLASSE NAMES =====================
  // Buttons
  buttonClassNames: [],
  buttonBackgroundColorClassNames: [],
  buttonColorClassNames: [],
  // Links
  linkClassNames: [],
  linkBackgroundColorClassNames: [],
  linkColorClassNames: [],
  // Icons
  iconColorClassNames: [],
  // Header and header elements
  headerBackgroundColorClassNames: [],
  headerTitleColorClassNames: [],
  headerIconColorClassNames: [],
  burgerMenuBackgroundColorClassNames: [],
  menuNavMobileLinksColorClassNames: [],
  // Footer
  footerBackgroundColorClassNames: [],
  // Cards
  cardColorClassNames: [],
  adminPreviewColorClassNames: [],
  adminDetailColorClassNames: [],
  cardAddressColorClassNames: [],
  cardPurchaseColorClassNames: [],
  // Borders
  totalBorderColorClassNames: [],
  purchaseTotalBorderColorClassNames: [],
  // Product avaibilities
  productAvailabilityColorClassNames: [],
  // Order status
  statusColorClassNames: [],
  // Error messages
  errorMessageColorClassNames: [],
  // Customer service questions
  customerServiceQuestionsClassNames: [],
  // User email
  userEmailClassNames: [],
  // =================== DOM ELEMENTS ===========================
  colorSwitchs: [],
  fontSwitchs: [],
  themeSwitchs: [],
  blueSwitch: null,
  greenSwitch: null,
  redSwitch: null,
  orangeSwitch: null,
  purpleSwitch: null,
  yellowSwitch: null,
  knickSwitch: null,
  knickSwitchSlider: null,
  knickSwitchBefore: null,
  lakersSwitch: null,
  lakersSwitchSlider: null,
  lakersSwitchBefore: null,
  spiderManSwitch: null,
  spiderManSwitchSlider: null,
  spiderManSwitchBefore: null,
  jamaicaSwitch: null,
  jamaicaSwitchSlider: null,
  jamaicaSwitchBefore: null,
  goldenStateWarriorsSwitch: null,
  goldenStateWarriorsSwitchSlider: null,
  goldenStateWarriorsSwitchBefore: null,
  flashSwitch: null,
  flashSwitchSlider: null,
  flashSwitchBefore: null,
  forestSwitch: null,
  forestSwitchSlider: null,
  forestSwitchBefore: null,
  header: null,
  burgerMenus: [],
  openingButton: null,
  closingButton: null,
  burgerMenuImageBar: null,
  burgerMenuImageUncheckMark: null,
  menuNavMobileLinks: [],
  headerTitle: null,
  menuNavDesktopLinks: [],
  headerCartIcon: null,
  circle: null,
  footer: null,
  footerTitles: [],
  footerLinks: [],
  copyright: null,
  cartLinks: [],
  cartButtonImages: [],
  cards: [],
  cardsLinks: [],
  adminPreviews: [],
  adminDetails: [],
  tables: null,
  deleteProductIcons: [],
  total: null,
  searchButtons: [],
  addToCartLinks: null,
  detailLinks: [],
  createButtons: [],
  createLinks: [],
  reactivateUserAccountLinks: [],
  purchaseLink: null,
  contactEmailLink: null,
  forgottenPasswordLink: null,
  registerLink: null,
  mobileLoginLink: null,
  mobileLogoutLink: null,
  mobileRegistrationLink: null,
  desktopLoginLink: null,
  desktopLogoutLink: null,
  desktopRegistrationLink: null,
  termsOfServiceLink: null,
  errorMessages: [],
  productAviabilityElements: [],
  addressCards: [],
  checkedIcons: [],
  deleteLinks: [],
  pursueShoppingLink: null,
  textLinks: null,
  purchaseCards: null,
  purchaseStatusElements: [],
  purchaseTotal: null,
  purchaseTotalReminder: null,
  customerServiceQuestions: [],
  userEmail: null,
  init: function () {
    console.log("Hello world, I'm font.js 🔵🟢🔴🟠🟣🟡");

    // All the colors of the app set in the CSS.
    // We use getComputedStyle(document.documentElement).getPropertyValue() to get the value of our CSS variables.
    font.colors = {
      black: getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      ),
      white: getComputedStyle(document.documentElement).getPropertyValue(
        "--white"
      ),
      blue: getComputedStyle(document.documentElement).getPropertyValue(
        "--blue"
      ),
      green: getComputedStyle(document.documentElement).getPropertyValue(
        "--green"
      ),
      red: getComputedStyle(document.documentElement).getPropertyValue("--red"),
      safetyOrange: getComputedStyle(document.documentElement).getPropertyValue(
        "--safety-orange"
      ),
      electricPurple: getComputedStyle(
        document.documentElement
      ).getPropertyValue("--electric-purple"),
      mango: getComputedStyle(document.documentElement).getPropertyValue(
        "--mango"
      ),
      slimyGreen: getComputedStyle(document.documentElement).getPropertyValue(
        "--slimy-green"
      ),
      sepia: getComputedStyle(document.documentElement).getPropertyValue(
        "--sepia"
      ),
    };

    // All the themes.
    font.themes = [
      "knick",
      "lakers",
      "spider-man",
      "jamaica",
      "golden-state-warriors",
      "flash",
      "forest",
    ];

    // All the buttons class names.
    font.buttonClassNames = [
      "page__button_background-color_blue",
      "page__button_background-color_green",
      "page__button_background-color_red",
      "page__button_background-color_safety-orange",
      "page__button_background-color_electric-purple",
      "page__button_background-color_mango",
      "page__button_background-color_slimy-green",
      "page__button_background-color_dodger-blue",
      "page__button_color_black",
      "page__button_color_white",
      "page__button_color_blue",
      "page__button_color_electric-purple",
      "page__button_color_red",
      "page__button_color_slimy-green",
      "page__button_color_mango",
      "page__button_color_sepia",
    ];

    // All the button background color class names.
    font.buttonBackgroundColorClassNames = [
      "page__button_background-color_blue",
      "page__button_background-color_green",
      "page__button_background-color_red",
      "page__button_background-color_safety-orange",
      "page__button_background-color_electric-purple",
      "page__button_background-color_mango",
      "page__button_background-color_slimy-green",
      "page__button_background-color_dodger-blue",
    ];

    // All the button color class names.
    font.buttonColorClassNames = [
      "page__button_color_black",
      "page__button_color_white",
      "page__button_color_blue",
      "page__button_color_green",
      "page__button_color_red",
      "page__button_color_safety-orange",
      "page__button_color_electric-purple",
      "page__button_color_mango",
      "page__button_color_slimy-green",
      "page__button_color_sepia",
    ];

    // All the link class names.
    font.linkClassNames = [
      "page__link_background-color_blue",
      "page__link_background-color_green",
      "page__link_background-color_red",
      "page__link_background-color_safety-orange",
      "page__link_background-color_electric-purple",
      "page__link_background-color_mango",
      "page__link_background-color_dodger-blue",
      "page__link_background-color_white",
      "page__link_background-color_slimy-green",
      "page__link_color_black",
      "page__link_color_white",
      "page__link_color_blue",
      "page__link_color_green",
      "page__link_color_red",
      "page__link_color_safety-orange",
      "page__link_color_electric-purple",
      "page__link_color_mango",
      "page__link_color_slimy-green",
      "page__link_color_sepia",
    ];

    // All the link background color class names.
    font.linkBackgroundColorClassNames = [
      "page__link_background-color_blue",
      "page__link_background-color_green",
      "page__link_background-color_red",
      "page__link_background-color_safety-orange",
      "page__link_background-color_electric-purple",
      "page__link_background-color_mango",
      "page__link_background-color_dodger-blue",
      "page__link_background-color_white",
      "page__link_background-color_slimy-green",
    ];

    // All the link color class names.
    font.linkColorClassNames = [
      "page__link_color_black",
      "page__link_color_white",
      "page__link_color_blue",
      "page__link_color_green",
      "page__link_color_red",
      "page__link_color_safety-orange",
      "page__link_color_electric-purple",
      "page__link_color_mango",
      "page__link_color_slimy-green",
      "page__link_color_sepia",
    ];

    // All the icon color class names.
    font.iconColorClassNames = [
      "page__icon_color_black",
      "page__icon_color_white",
      "page__icon_color_blue",
      "page__icon_color_green",
      "page__icon_color_red",
      "page__icon_color_safety-orange",
      "page__icon_color_electric-purple",
      "page__icon_color_mango",
      "page__icon_color_slimy-green",
      "page__icon_color_sepia",
    ];

    // All the header background color class names.
    font.headerBackgroundColorClassNames = [
      "header_background-color_blue",
      "header_background-color_green",
      "header_background-color_red",
      "header_background-color_safety-orange",
      "header_background-color_electric-purple",
      "header_background-color_mango",
      "header_background-color_slimy-green",
    ];

    // All the header title color class names.
    font.headerTitleColorClassNames = [
      "header__title_color_black",
      "header__title_color_white",
      "header__title_color_blue",
      "header__title_color_electric-purple",
      "header__title_color_red",
      "header__title_color_slimy-green",
      "header__title_color_mango",
      "header__title_color_sepia",
    ];

    // All the header title color class names.
    font.headerIconColorClassNames = [
      "header__icon_color_black",
      "header__icon_color_white",
      "header__icon_color_blue",
      "header__icon_color_green",
      "header__icon_color_red",
      "header__icon_color_safety-orange",
      "header__icon_color_electric-purple",
      "header__icon_color_mango",
      "header__icon_color_slimy-green",
      "header__icon_color_sepia",
    ];

    // All the burger menu background color class names.
    font.burgerMenuBackgroundColorClassNames = [
      "burger-menu_background-color_blue",
      "burger-menu_background-color_green",
      "burger-menu_background-color_red",
      "burger-menu_background-color_safety-orange",
      "burger-menu_background-color_electric-purple",
      "burger-menu_background-color_mango",
      "burger-menu_background-color_slimy-green",
    ];

    // All the nav mobile link color class names.
    font.menuNavMobileLinksColorClassNames = [
      "nav-mobile__item_color_blue",
      "nav-mobile__item_color_blue:last-child",
      "nav-mobile__item_color_green",
      "nav-mobile__item_color_green:last-child",
      "nav-mobile__item_color_red",
      "nav-mobile__item_color_red:last-child",
      "nav-mobile__item_color_safety-orange",
      "nav-mobile__item_color_safety-orange:last-child",
      "nav-mobile__item_color_electric-purple",
      "nav-mobile__item_color_electric-purple:last-child",
      "nav-mobile__item_color_mango",
      "nav-mobile__item_color_mango:last-child",
      "nav-mobile__item_color_slimy-green",
      "nav-mobile__item_color_slimy-green:last-child",
    ];

    // All the footer background color class names.
    font.footerBackgroundColorClassNames = [
      "footer_background-color_blue",
      "footer_background-color_green",
      "footer_background-color_red",
      "footer_background-color_safety-orange",
      "footer_background-color_electric-purple",
      "footer_background-color_mango",
      "footer_background-color_slimy-green",
    ];

    // All the card color class names.
    font.cardColorClassNames = [
      "card_border-color_blue",
      "card_border-color_green",
      "card_border-color_red",
      "card_border-color_safety-orange",
      "card_border-color_electric-purple",
      "card_border-color_mango",
      "card_border-color_slimy-green",
    ];

    // All the admin preview color class names.
    font.adminPreviewColorClassNames = [
      "admin-preview_border-color_blueblue",
      "admin-preview_border-color_bluegreen",
      "admin-preview_border-color_bluered",
      "admin-preview_border-color_bluesafety-orange",
      "admin-preview_border-color_bluepurple",
      "admin-preview_border-color_blueyellow",
      "admin-preview_border-color_blueslimy-green",
    ];

    // All the admin detail color class names.
    font.adminDetailColorClassNames = [
      "admin-detail_border-color_blue",
      "admin-detail_border-color_green",
      "admin-detail_border-color_red",
      "admin-detail_border-color_safety-orange",
      "admin-detail_border-color_electric-purple",
      "admin-detail_border-color_mango",
      "admin-detail_border-color_slimy-green",
    ];

    // All the total border color class names.
    font.totalBorderColorClassNames = [
      "total_border-color_blue",
      "total_border-color_green",
      "total_border-color_red",
      "total_border-color_safety-orange",
      "total_border-color_electric-purple",
      "total_border-color_mango",
      "total_border-color_slimy-green",
    ];

    // All the product availability color class names.
    font.productAvailabilityColorClassNames = [
      "availability__avialable_color_green",
      "availability__unavailable_color_red",
      "availability_color_safety-orange",
      "availability_color_mango",
      "availability_color_blue",
      "availability_color_slimy-green",
    ];

    // All the card address color class names.
    font.cardAddressColorClassNames = [
      "card-address_border-color_blue",
      "card-address_border-color_green",
      "card-address_border-color_red",
      "card-address_border-color_safety-orange",
      "card-address_border-color_electric-purple",
      "card-address_border-color_mango",
      "card-address_border-color_slimy-green",
    ];

    // All the card purchase color class names.
    font.cardPurchaseColorClassNames = [
      "card-purchase_border-color_blue",
      "card-purchase_border-color_green",
      "card-purchase_border-color_red",
      "card-purchase_border-color_safety-orange",
      "card-purchase_border-color_electric-purple",
      "card-purchase_border-color_mango",
      "card-purchase_border-color_slimy-green",
    ];

    // All the status color class names.
    font.statusColorClassNames = [
      "status__paid_color_green",
      "status__paid_color_safety-orange",
      "status__paid_color_mango",
      "status__paid_color_blue",
      "status__paid_color_slimy-green",
      "status__in-progress_color_safety-orange",
      "status__in-progress_color_mango",
      "status__in-progress_color_blue",
      "status__in-progress_color_slimy-green",
      "status__send_color_electric-purple",
      "status__send_color_safety-orange",
      "status__send_color_mango",
      "status__send_color_blue",
      "status__send_color_slimy-green",
      "status__deliver_color_slimy-green",
      "status__deliver_color_safety-orange",
      "status__deliver_color_mango",
      "status__deliver_color_blue",
      "status__annul_color_red",
      "status__annul_color_safety-orange",
      "status__annul_color_mango",
      "status__annul_color_blue",
      "status__annul_color_slimy-green",
      "status_color_safety-orange",
      "status_color_mango",
      "status_color_blue",
      "status_color_slimy-green",
    ];

    // All the purchase total border color class names.
    font.purchaseTotalBorderColorClassNames = [
      "purchase-total_border-color_blue",
      "purchase-total_border-color_green",
      "purchase-total_border-color_red",
      "purchase-total_border-color_safety-orange",
      "purchase-total_border-color_electric-purple",
      "purchase-total_border-color_mango",
      "purchase-total_border-color_slimy-green",
    ];

    // All the error message color class names.
    font.errorMessageColorClassNames = [
      "error-message_color_red",
      "error-message_color_safety-orange",
      "error-message_color_mango",
      "error-message_color_blue",
      "error-message_color_slimy-green",
    ];

    // All the customer service question color class names.
    font.customerServiceQuestionsClassNames = [
      "term__question_color_blue",
      "term__question_color_green",
      "term__question_color_red",
      "term__question_color_safety-orange",
      "term__question_color_electric-purple",
      "term__question_color_mango",
      "term__question_color_white",
    ];

    // All the user email color class names.
    font.userEmailClassNames = [
      "term__user-email_color_blue",
      "term__user-email_color_green",
      "term__user-email_color_red",
      "term__user-email_color_safety-orange",
      "term__user-email_color_electric-purple",
      "term__user-email_color_mango",
      "term__user-email_color_slimy-green",
      "term__user-email_color_white",
    ];

    // We get the DOM elements that we need to interacte with.

    // All the switchs exept mode.switch.
    font.colorSwitchs = document.querySelectorAll(".switch__input-color");
    // For each colorSwitch of font.colorSwitchs.
    for (let colorSwitch of font.colorSwitchs) {
      // We add a listener and a handler on the click event.
      colorSwitch.addEventListener("click", font.handleColorsSwtich);
    }

    // All the font color switchs.
    font.fontSwitchs = document.querySelectorAll(".switch__input-font-color");
    font.themeSwitchs = document.querySelectorAll(".switch__input-theme");
    font.blueSwitch = document.getElementById("blue-switch-input");
    font.greenSwitch = document.getElementById("green-switch-input");
    font.redSwitch = document.getElementById("red-switch-input");
    font.orangeSwitch = document.getElementById("orange-switch-input");
    font.purpleSwitch = document.getElementById("purple-switch-input");
    font.yellowSwitch = document.getElementById("mango-switch-input");

    // All the theme switchs.
    font.knickSwitch = document.getElementById("knick-switch-input");
    font.knickSwitchSlider = document.querySelector(".switch__slider-knick");
    font.knickSwitchBefore = window.getComputedStyle(
      font.knickSwitchSlider,
      "::before"
    );
    font.lakersSwitch = document.getElementById("lakers-switch-input");
    font.lakersSwitchSlider = document.querySelector(".switch__slider-lakers");
    font.lakersSwitchBefore = window.getComputedStyle(
      font.lakersSwitchSlider,
      "::before"
    );
    font.spiderManSwitch = document.getElementById("spider-man-switch-input");
    font.spiderManSwitchSlider = document.querySelector(
      ".switch__slider-spider-man"
    );
    font.spiderManSwitchBefore = window.getComputedStyle(
      font.spiderManSwitchSlider,
      "::before"
    );
    font.jamaicaSwitch = document.getElementById("jamaica-switch-input");
    font.jamaicaSwitchSlider = document.querySelector(
      ".switch__slider-jamaica"
    );
    font.jamaicaSwitchBefore = window.getComputedStyle(
      font.jamaicaSwitchSlider,
      "::before"
    );
    font.goldenStateWarriorsSwitch = document.getElementById(
      "golden-state-warriors-switch-input"
    );
    font.goldenStateWarriorsSwitchSlider = document.querySelector(
      ".switch__slider-golden-state-warriors"
    );
    font.goldenStateWarriorsSwitchBefore = window.getComputedStyle(
      font.goldenStateWarriorsSwitchSlider,
      "::before"
    );
    font.flashSwitch = document.getElementById("flash-switch-input");
    font.flashSwitchSlider = document.querySelector(".switch__slider-flash");
    font.flashSwitchBefore = window.getComputedStyle(
      font.flashSwitchSlider,
      "::before"
    );
    font.forestSwitch = document.getElementById("forest-switch-input");
    font.forestSwitchSlider = document.querySelector(".switch__slider-forest");
    font.forestSwitchBefore = window.getComputedStyle(
      font.forestSwitchSlider,
      "::before"
    );

    // The elements.
    font.header = document.querySelector(".header");
    font.burgerMenus = document.querySelectorAll(".burger-menu");
    font.openingButton = document.getElementById("opening-button");
    font.closingButton = document.getElementById("closing-button");
    font.burgerMenuImageBar = document.getElementById("burger-menu-bar");
    font.burgerMenuImageUncheckMark = document.getElementById(
      "burger-menu-uncheck-mark"
    );
    font.menuNavMobileLinks = document.querySelectorAll(".nav-mobile__item");
    font.headerTitle = document.querySelector(".header__title");
    font.menuNavDesktopLinks = document.querySelectorAll(".nav-desktop__item");
    font.headerCartIcon = document.getElementById("header-cart-icon");
    font.circle = document.querySelector(".circle");
    font.footer = document.querySelector(".footer");
    font.footerLinks = font.footer.getElementsByClassName("page__link");
    font.footerTitles = document.querySelectorAll(".footer__title");
    font.copyright = document.querySelector(".block-footer__copyright");
    font.cartLinks = document.querySelectorAll(".page__link-cart");
    font.cartButtonImages = document.querySelectorAll(".page__icon-cart");
    font.cards = document.querySelectorAll(".card");
    font.cardsLinks = document.querySelectorAll(".card__link");
    font.adminPreviews = document.querySelectorAll(".admin-preview");
    font.adminDetails = document.querySelectorAll(".admin-detail");
    font.tables = document.querySelectorAll(".table");
    font.total = document.querySelector(".total");
    font.deleteProductIcons = document.querySelectorAll(".page__icon-delete");
    font.searchButtons = document.querySelectorAll(".page__button-search");
    font.addToCartLinks = document.querySelectorAll(".page__link-add-to-cart");
    font.detailLinks = document.querySelectorAll(".page__link-detail");
    font.createButtons = document.querySelectorAll(".page__button-create");
    font.createLinks = document.querySelectorAll(".page__link-create");
    font.reactivateUserAccountLinks = document.querySelectorAll(
      ".page__link-reactivate-account"
    );
    font.purchaseLink = document.getElementById("purchase-link");
    font.contactEmailLink = document.getElementById("contact-email-link");
    font.forgottenPasswordLink = document.getElementById(
      "forgotten-password-link"
    );
    font.registerLink = document.getElementById("register-link");
    font.mobileLoginLink = document.getElementById("mobile-login-link");
    font.mobileLogoutLink = document.getElementById("mobile-logout-link");
    font.mobileRegistrationLink = document.getElementById(
      "mobile-registration-link"
    );
    font.desktopLoginLink = document.getElementById("desktop-login-link");
    font.desktopLogoutLink = document.getElementById("desktop-logout-link");
    font.desktopRegistrationLink = document.getElementById(
      "desktop-registration-link"
    );
    font.termsOfServiceLink = document.getElementById("terms-of-service-link");
    font.errorMessages = document.querySelectorAll(".error-message");
    font.productAviabilityElements = document.querySelectorAll(".availability");
    font.addressCards = document.querySelectorAll(".card-address");
    font.checkedIcons = document.querySelectorAll(".page__icon-checked");
    font.deleteLinks = document.querySelectorAll(".page__link-delete");
    font.pursueShoppingLink = document.getElementById("pursue-shooping-link");
    font.textLinks = document.querySelectorAll(".page__link-text ");
    font.purchaseCards = document.querySelectorAll(".card-purchase");
    font.purchaseStatusElements = document.querySelectorAll(".status");
    font.purchaseTotal = document.querySelector(".purchase-total");
    font.purchaseTotalReminder = document.querySelector(
      ".purchase-total-reminder"
    );
    font.customerServiceQuestions =
      document.querySelectorAll(".term__question");
    font.userEmail = document.getElementById("user-email");

    // When the app is loaded we load to the page the font.color which is backup in localSatorage.
    font.loadFont();

    // When the app is loaded we check or uncheck the switch according to the localStorage data.
    font.checkRightColorSwitchsOnLoad();

    // We call font.switchColorForContrast() to change the color of some elements according to the value of font.color.
    font.switchColorForContrast();
  },
  /**
   * Method that get the color back up in localStorage and call the font.switchColor() method to change the color with the value of font.
   * @return {void}
   */
  loadFont: function () {
    console.log("font.loadFont()");

    // We get the value backup in localStorage.
    font.color = localStorage.getItem("font");

    // If we value for the item font in localStorage.
    if (font.color) {
      // If the font item in localStorage is strictly equal to "knick".
      if (font.color === "knick") {
        // We call font.switchToKnickTheme() to apply the knick theme.
        font.switchToKnickTheme();
      }
      // Else if the font item in localStorage is strictly equal to "lakers".
      else if (font.color === "lakers") {
        // We call font.switchToLakersTheme() to apply the lakers theme.
        font.switchToLakersTheme();
      }
      // Else if the font item in localStorage is strictly equal to "spider-man".
      else if (font.color === "spider-man") {
        // We call font.switchToMarioTheme() to apply the spider-man theme.
        font.switchToMarioTheme();
      }
      // Else if the font item in localStorage is strictly equal to "jamaica".
      else if (font.color === "jamaica") {
        // We call font.switchToJamaicaTheme() to apply the jamaica theme.
        font.switchToJamaicaTheme();
      }
      // Else if the font item in localStorage is strictly equal to "golden-state-warriors".
      else if (font.color === "golden-state-warriors") {
        // We call font.switchToGoldenStateWarriorsTheme() to apply the golden State Warriors theme.
        font.switchToGoldenStateWarriorsTheme();
      }
      // Else if the font item in localStorage is strictly equal to "flash".
      else if (font.color === "flash") {
        // We call font.switchToFlashTheme() to apply the flash theme.
        font.switchToFlashTheme();
      }
      // Else if the font item in localStorage is strictly equal to "forest".
      else if (font.color === "forest") {
        // We call font.switchToForestTheme() to apply the forest theme.
        font.switchToForestTheme();
      }
      // Else we switch to the current value of the font item in localStorage.
      else {
        // We call font.switchColor() method to change the color with the value of font.color.
        font.switchColor(font.color);
      }
    }
    // Else we don't have any value for the font item in localStorage.
    else {
      // We set a value by default to the font key in localStorage.
      localStorage.setItem("font", "blue");
      // We set the value blue to font.color.
      font.color = "blue";
      // We call font.switchColor() method to change the color with the value of font.color.
      font.switchColor(font.color);
    }
  },
  /**
   * Method that check or uncheck the switch according to the localStorage data.
   * @return {void}
   */
  checkRightColorSwitchsOnLoad: function () {
    console.log("font.checkRightColorSwitchsOnLoad()");

    // We get the value backup in localStorage.
    font.color = localStorage.getItem("font");

    // If a value for the item font exist in localStorage.
    if (font.color) {
      // If the font item in localStorage is strictly equal to "blue".
      if (font.color === "blue") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.blueSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.blueSwitch);
      }
      // Else the font item in localStorage is not blue.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.blueSwitch);
      }

      // If the font item in localStorage is strictly equal to "green".
      if (font.color === "green") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.greenSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.greenSwitch);
      }
      // Else the font item in localStorage is not green.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.greenSwitch);
      }

      // If the font item in localStorage is strictly equal to "red".
      if (font.color === "red") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.redSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.redSwitch);
      }
      // Else the font item in localStorage is not red.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.redSwitch);
      }

      // If the font item in localStorage is strictly equal to "safety-orange".
      if (font.color === "safety-orange") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.orangeSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.orangeSwitch);
      }
      // Else the font item in localStorage is not safety-orange.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.orangeSwitch);
      }

      // If the font item in localStorage is strictly equal to "electric-purple".
      if (font.color === "electric-purple") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.purpleSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.purpleSwitch);
      }
      // Else the font item in localStorage is not purple.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.purpleSwitch);
      }

      // If the font item in localStorage is strictly equal to "mango".
      if (font.color === "mango") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.yellowSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
        tools.setDisabledAttribute(font.yellowSwitch);
      }
      // Else the font item in localStorage is not yellow.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.yellowSwitch);
      }

      // If the font item in localStorage is strictly equal to "knick".
      if (font.color === "knick") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.knickSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.knickSwitch);
      }
      // Else the font item in localStorage is not knick.
      else {
        // We call tools.uncheckInputs() to uncheck the switch
        tools.uncheckInputs(font.knickSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "lakers".
      if (font.color === "lakers") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.lakersSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.lakersSwitch);
      }
      // Else the font item in localStorage is not lakers.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.lakersSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "spider-man".
      if (font.color === "spider-man") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.spiderManSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.spiderManSwitch);
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.flashSwitchSlider,
          "switch__slider-theme_background-color_mango-flash-2"
        );
        // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
        tools.setColorToBeforeProperty(font.flashSwitchSlider, font.colors.red);
      }
      // Else the font item in localStorage is not spider-man.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.spiderManSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "jamaica".
      if (font.color === "jamaica") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.jamaicaSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.jamaicaSwitch);
      }
      // Else the font item in localStorage is not jamaica.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.jamaicaSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "golden-state-warriors"
      if (font.color === "golden-state-warriors") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.goldenStateWarriorsSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.goldenStateWarriorsSwitch);
      }
      // Else the font item in localStorage is not golden-state-warriors.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.goldenStateWarriorsSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "flash".
      if (font.color === "flash") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.flashSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.flashSwitch);
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.spiderManSwitchSlider,
          "switch__slider-theme_background-color_blue-spider-man-2"
        );
        // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
        tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#ff0000");
      }
      // Else the font item in localStorage is not flash.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.flashSwitch);
      }

      // Else if the font item in localStorage is strictly equal to "forest".
      if (font.color === "forest") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.forestSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.forestSwitch);
      }
      // Else the font item in localStorage is not forest.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.forestSwitch);
      }

      // For each color of font.themes.
      for (let theme of font.themes) {
        // If font.color is strictly equal to theme.
        if (font.color === theme) {
          // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
          tools.setDisabledAttribute(mode.switch);
        }
      }
    }
  },
  /**
   * Method that get call the methods to switch the colors according to the clicked switch.
   * @param {Event} event
   * @return {void}
   */
  handleColorsSwtich: function (event) {
    console.log("font.handleColorsSwtich()");

    // We get the DOM element from which the event occured.
    let clickedSwitch = event.currentTarget;

    // For each fontSwitch of font.fontSwitchs.
    for (let fontSwitch of font.fontSwitchs) {
      // If clickedSwitch is strictly equal to fontSwitch.
      if (clickedSwitch === fontSwitch) {
        // For each color of font.themes.
        for (let theme of font.themes) {
          // If font.color is strictly equal to theme.
          if (font.color === theme) {
            // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
            tools.removeClassesFromElement(mode.body, theme);
            // We backup in localStorage the new value of the mode.
            localStorage.setItem("mode", "light");
            // When the app is loaded we load to the page the mode.backgroundColor which is backup in localSatorage.
            mode.loadMode();
            // When the app is loaded we check or uncheck the switch according to the localStorage data.
            mode.checkRightColorSwitchOnLoad();
            // If font.color is strictly equal to "knick".
            if (font.color === "knick") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.knickSwitchSlider,
                font.colors.safetyOrange
              );
            }
            // Else if font.color is strictly equal to "lakers".
            else if (font.color === "lakers") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.lakersSwitchSlider,
                font.colors.mango
              );
            }
            // Else if font.color is strictly equal to "spider-man".
            else if (font.color === "spider-man") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.spiderManSwitchSlider,
                font.color.blue
              );
            }
            // Else if font.color is strictly equal to "jamaica".
            else if (font.color === "jamaica") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.jamaicaSwitchSlider,
                font.colors.mango
              );
            }
            // Else if font.color is strictly equal to "golden-state-warriors".
            else if (font.color === "golden-state-warriors") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.goldenStateWarriorsSwitchSlider,
                font.colors.blue
              );
            }
            // Else if font.color is strictly equal to "flash".
            else if (font.color === "flash") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.flashSwitchSlider,
                font.colors.mango
              );
            }
            // Else if font.color is strictly equal to "forest".
            else if (font.color === "forest") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.forestSwitchSlider,
                font.colors.slimyGreen
              );
            }
          }
        }
      }
    }

    // For each themeSwitch of font.themeSwitchs.
    for (let themeSwitch of font.themeSwitchs) {
      // For each fontSwitch of font.fontSwitchs.
      for (let fontSwitch of font.fontSwitchs) {
        // If the selected switch is strictly equal to themeSwitch or strictly equal to fontSwitch.
        if (clickedSwitch === themeSwitch || clickedSwitch === fontSwitch) {
          // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
          tools.removeClassesFromElement(
            font.spiderManSwitchSlider,
            "switch__slider-theme_background-color_blue-spider-man-2"
          );
          // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
          tools.setColorToBeforeProperty(
            font.spiderManSwitchSlider,
            font.colors.blue
          );
          // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
          tools.removeClassesFromElement(
            font.flashSwitchSlider,
            "switch__slider-theme_background-color_mango-flash-2"
          );
          // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
          tools.setColorToBeforeProperty(
            font.flashSwitchSlider,
            font.colors.mango
          );
          // If clickedSwitch is strictly equal to themeSwitch.
          if (clickedSwitch === themeSwitch) {
            // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
            tools.setDisabledAttribute(mode.switch, clickedSwitch);
            // We backup in localStorage the new value of the mode.
            localStorage.setItem("mode", "dark");
            // When the app is loaded we load to the page the mode.backgroundColor which is backup in localSatorage.
            mode.loadMode();
            // When the app is loaded we check or uncheck the switch according to the localStorage data.
            mode.checkRightColorSwitchOnLoad();
          }
          // Else if clickedSwitch is strictly equal to fontSwitch.
          else if (clickedSwitch === fontSwitch) {
            // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
            tools.removeDisabledAttribute(mode.switch);
          }
        }
      }
    }

    // If clickedSwitch is strictly equal to font.blueSwitch.
    if (clickedSwitch === font.blueSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.blueSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value blue to font.color.
      font.color = "blue";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.greenSwitch.
    if (clickedSwitch === font.greenSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.greenSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value green to font.color.
      font.color = "green";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.redSwitch.
    if (clickedSwitch === font.redSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.redSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value red to font.color.
      font.color = "red";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.orangeSwitch.
    if (clickedSwitch === font.orangeSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.orangeSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value safety-orange to font.color.
      font.color = "safety-orange";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.purpleSwitch.
    if (clickedSwitch === font.purpleSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.purpleSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value purple to font.color.
      font.color = "electric-purple";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.yellowSwitch.
    if (clickedSwitch === font.yellowSwitch) {
      // We call tools.setDisabledAttribute() to set the disabled attribute to the element.
      tools.setDisabledAttribute(font.yellowSwitch);
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We set the value yellow to font.color.
      font.color = "mango";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If clickedSwitch is strictly equal to font.knickSwitch.
    if (clickedSwitch === font.knickSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the elements.
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#0000ff");
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value knick to font.color.
      font.color = "knick";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToKnickTheme() to apply the knick theme.
      font.switchToKnickTheme();
    }

    // If clickedSwitch is strictly equal to font.lakersSwitch.
    if (clickedSwitch === font.lakersSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#0000ff");
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value lakers to font.color.
      font.color = "lakers";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToLakersTheme() to apply the lakers theme.
      font.switchToLakersTheme();
    }

    // If clickedSwitch is strictly equal to font.spiderManSwitch.
    if (clickedSwitch === font.spiderManSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.flashSwitchSlider,
        "switch__slider-theme_background-color_mango-flash-2"
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#ff0000");
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value spider-man to font.color.
      font.color = "spider-man";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToMarioTheme() to apply the spider-man theme.
      font.switchToMarioTheme();
    }

    // If clickedSwitch is strictly equal to font.jamaicaSwitch.
    if (clickedSwitch === font.jamaicaSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.goldenStateWarriorsSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#0000ff");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value jamaica to font.color.
      font.color = "jamaica";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToJamaicaTheme() to apply the jamaica theme.
      font.switchToJamaicaTheme();
    }

    // If clickedSwitch is strictly equal to font.goldenStateWarriorsSwitch.
    if (clickedSwitch === font.goldenStateWarriorsSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.flashSwitch,
        font.forestSwitch
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#0000ff");
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value golden-state-warriors to font.color.
      font.color = "golden-state-warriors";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToGoldenStateWarriorsTheme() to apply the golden State Warriors theme.
      font.switchToGoldenStateWarriorsTheme();
    }

    // If clickedSwitch is strictly equal to font.flashSwitch.
    if (clickedSwitch === font.flashSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.forestSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.jamaicaSwitch,
        font.goldenStateWarriorsSwitch,
        font.forestSwitch
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.spiderManSwitchSlider,
        "switch__slider-theme_background-color_blue-spider-man-2"
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#ff0000");
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.forestSwitchSlider, "#009933");
      // We set the value flash to font.color.
      font.color = "flash";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToFlashTheme() to apply the Flash theme.
      font.switchToFlashTheme();
    }

    // If clickedSwitch is strictly equal to font.forestSwitch.
    if (clickedSwitch === font.forestSwitch) {
      // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
      tools.removeDisabledAttribute(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.goldenStateWarriorsSwitch,
        font.jamaicaSwitch,
        font.flashSwitch
      );
      // We call tools.uncheckInputs() to uncheck several switchs.
      tools.uncheckInputs(
        font.blueSwitch,
        font.greenSwitch,
        font.redSwitch,
        font.orangeSwitch,
        font.purpleSwitch,
        font.yellowSwitch,
        font.knickSwitch,
        font.lakersSwitch,
        font.spiderManSwitch,
        font.goldenStateWarriorsSwitch,
        font.jamaicaSwitch,
        font.flashSwitch
      );
      // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
      tools.setColorToBeforeProperty(font.knickSwitchSlider, "#ff6600");
      tools.setColorToBeforeProperty(font.lakersSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.spiderManSwitchSlider, "#0000ff");
      tools.setColorToBeforeProperty(
        font.goldenStateWarriorsSwitchSlider,
        "#0000ff"
      );
      tools.setColorToBeforeProperty(font.jamaicaSwitchSlider, "#fbbc05");
      tools.setColorToBeforeProperty(font.flashSwitchSlider, "#fbbc05");
      // We set the value forest to font.color.
      font.color = "forest";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToForestTheme() to apply the golden State Warriors theme.
      font.switchToForestTheme();
    }

    // For each fontSwitch of font.fontSwitchs.
    for (let fontSwitch of font.fontSwitchs) {
      // If clickedSwitch is strictly equal to fontSwitch.
      if (clickedSwitch === fontSwitch) {
        // We call font.switchColorForContrast() to change the color of some elements according to the value of font.color.
        font.switchColorForContrast();
      }
    }
  },
  /**
   * Method that switch the current font.color of the DOM elements to a newColor.
   * @param {String} newColor
   * @return {void}
   */
  switchColor: function (newColor) {
    console.log("font.switchColor()");

    // For each className of font.headerBackgroundColorClassNames.
    for (let className of font.headerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(font.header, className);
    }
    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_" + newColor
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each className of font.burgerMenuBackgroundColorClassNames.
      for (let className of font.burgerMenuBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.openingButton, className);
        tools.removeClassesFromElement(font.closingButton, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.openingButton,
        "burger-menu_background-color_" + newColor
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.closingButton,
        "burger-menu_background-color_" + newColor
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // For each className of font.menuNavMobileLinksColorClassNames.
      for (let className of font.menuNavMobileLinksColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_" + newColor);
    }

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_color_black",
      "circle_color_white",
      "circle_color_blue",
      "circle_color_green",
      "circle_color_red",
      "circle_color_safety-orange",
      "circle_color_electric-purple",
      "circle_color_mango",
      "circle_color_slimy-green"
    );
    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.circle, "circle_color_" + newColor);

    // For each className of font.footerBackgroundColorClassNames.
    for (let className of font.footerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(font.footer, className);
    }
    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_" + newColor
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // For each buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames.
      for (let buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          searchButton,
          buttonBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_" + newColor
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(createButton, buttonClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_dodger-blue",
        "page__button_color_white"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(createLink, linkClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_dodger-blue",
        "page__link_color_white"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          reactivateUserAccountLink,
          linkClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_green",
        "page__link_color_black"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // For each linkBackgroundColorClassName of font.linkBackgroundColorClassNames.
      for (let linkBackgroundColorClassName of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          addToCartLink,
          linkBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each linkBackgroundColorClassName of font.linkBackgroundColorClassNames.
      for (let linkBackgroundColorClassName of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.purchaseLink,
          linkBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_" + newColor
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // For each linkBackgroundColorClassName of font.linkBackgroundColorClassNames.
      for (let linkBackgroundColorClassName of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          detailLink,
          linkBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(detailLink, "page__link_background-color_blue");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // For each className of font.cardColorClassNames.
      for (let className of font.cardColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_" + newColor);
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cardsLink, linkColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_" + newColor);
    }

    // For each adminPreview of font.adminPreviews.
    for (let adminPreview of font.adminPreviews) {
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blue" + newColor
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // For each className of font.adminDetailColorClassNames.
      for (let className of font.adminDetailColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(adminDetail, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminDetail,
        "admin-detail_border-color_" + newColor
      );
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        input,
        "form-field__input_color_black",
        "form-field__input_color_white",
        "form-field__input_color_safety-orange",
        "form-field__input_color_mango",
        "form-field__input_color_red",
        "form-field__input_color_blue",
        "form-field__input_color_mango-jamaica",
        "form-field__input_color_blue-golden-sate-warriors",
        "form-field__input_color_mango-flash",
        "form-field__input_color_slimy-green-forest"
      );
      // If mode.backgroundColor is strictly equal to "light".
      if (mode.backgroundColor === "light") {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_black");
      }
      // Else if mode.backgroundColor is strictly equal to "dark".
      else if (mode.backgroundColor === "dark") {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_white");
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_background-color_blue",
        "table_background-color_green",
        "table_background-color_red",
        "table_background-color_safety-orange",
        "table_background-color_electric-purple",
        "table_background-color_mango",
        "table_background-color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(table, "table_background-color_" + newColor);
    }

    // If the DOM element exist.
    if (font.pursueShoppingLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.pursueShoppingLink,
          linkColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_" + newColor
      );
    }

    // For each deleteProductIcon of font.deleteProductIcons.
    for (let deleteProductIcon of font.deleteProductIcons) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(deleteProductIcon, iconColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(deleteProductIcon, "page__icon_color_red");
    }

    // If the DOM element exist.
    if (font.total) {
      // For each className of font.totalBorderColorClassNames.
      for (let className of font.totalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.total, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_" + newColor);
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // For each linkBackgroundColorClassName of font.linkBackgroundColorClassNames.
      for (let linkBackgroundColorClassName of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cartLink, linkBackgroundColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        cartLink,
        "page__link_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.contactEmailLink,
          linkColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.forgottenPasswordLink,
          linkColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.registerLink, linkColorClassName);
      }
      // If newColor is strictly equal to "blue", or "green", or "electric-purple", or "mango".
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "electric-purple" ||
        newColor === "mango"
      ) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.registerLink,
          "page__link_color_safety-orange"
        );
      }
      // Else if new color is strictly equal to "red" or "safety-orange".
      else if (newColor === "red" || newColor === "safety-orange") {
        // If the window size is higher or equal to 320px and inferior to 992px.
        if (
          window.innerWidth >= responsive.window320Px &&
          window.innerWidth < responsive.window992Px
        ) {
          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.registerLink,
            "page__link_color_safety-orange"
          );
        }
        // Else if the window size is higher or equal to 992px.
        else if (window.innerWidth >= responsive.window992Px) {
          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(font.registerLink, "page__link_color_blue");
        }
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames.
      for (let buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.loginButton,
          buttonBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames.
      for (let buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.registrationButton,
          buttonBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.termsOfServiceLink,
          linkColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopLoginLink,
          linkColorClassName
        );
      }
      // If newColor is strictly equal to "blue", or "red", or "safety-orange", or "electric-purple" or "mango".
      if (
        newColor === "blue" ||
        newColor === "red" ||
        newColor === "safety-orange" ||
        newColor === "electric-purple" ||
        newColor === "mango"
      ) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopLoginLink,
          "page__link_color_green"
        );
      }
      // Else if new color is strictly equal to "green".
      else if (newColor === "green") {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopLoginLink,
          "page__link_color_blue"
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopLogoutLink,
          linkColorClassName
        );
      }
      // If newColor is strictly equal to "blue", or "green", or "safety-orange" or "mango".
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "safety-orange" ||
        newColor === "mango"
      ) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopLogoutLink,
          "page__link_color_red"
        );
      }
      // Else if new color is strictly equal to "red" or "electric-purple".
      else if (newColor === "red" || newColor === "electric-purple") {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopLogoutLink,
          "page__link_color_blue"
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopRegistrationLink,
          linkColorClassName
        );
      }
      // If newColor is strictly equal to "blue", or "green", or "electric-purple" or "mango".
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "electric-purple" ||
        newColor === "mango"
      ) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopRegistrationLink,
          "page__link_color_safety-orange"
        );
      }
      // Else if new color is strictly equal to "red" or "safety-orange".
      else if (newColor === "red" || newColor === "safety-orange") {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          font.desktopRegistrationLink,
          "page__link_color_blue"
        );
      }
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // For each className of font.errorMessageColorClassNames.
      for (let className of font.errorMessageColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(errorMessage, className);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_red");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // For each className of font.productAvailabilityColorClassNames.
      for (let className of font.productAvailabilityColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(productAviabilityElement, className);
      }
      // If productAviabilityElement contain the davailable class.
      if (productAviabilityElement.classList.contains("available")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          productAviabilityElement,
          "availability__avialable_color_green"
        );
      }
      // Else if productAviabilityElement contain the unavailable class.
      else if (productAviabilityElement.classList.contains("unavailable")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          productAviabilityElement,
          "availability__unavailable_color_red"
        );
      }
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // For each cardAddressColorClassName of font.cardAddressColorClassNames.
      for (let cardAddressColorClassName of font.cardAddressColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(addressCard, cardAddressColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addressCard,
        "card-address_border-color_" + newColor
      );
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(checkedIcon, iconColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_green");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(deleteLink, linkClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(textLink, linkColorClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_" + newColor);
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // For each cardPurchaseColorClassName of font.cardPurchaseColorClassNames.
      for (let cardPurchaseColorClassName of font.cardPurchaseColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          purchaseCard,
          cardPurchaseColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_" + newColor
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // For each statusColorClassName of font.statusColorClassNames.
      for (let statusColorClassName of font.statusColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          purchaseStatusElement,
          statusColorClassName
        );
      }
      // If purchaseStatusElement contain the davailable class.
      if (purchaseStatusElement.classList.contains("status__paid")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          purchaseStatusElement,
          "status__paid_color_green"
        );
      }
      // Else if purchaseStatusElement contain the unavailable class.
      else if (
        purchaseStatusElement.classList.contains("status__in-progress")
      ) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          purchaseStatusElement,
          "status__in-progress_color_safety-orange"
        );
      }
      // Else if purchaseStatusElement contain the unavailable class.
      else if (purchaseStatusElement.classList.contains("status__send")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          purchaseStatusElement,
          "status__send_color_electric-purple"
        );
      }
      // Else if purchaseStatusElement contain the unavailable class.
      else if (purchaseStatusElement.classList.contains("status__deliver")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          purchaseStatusElement,
          "status__deliver_color_slimy-green"
        );
      }
      // Else if purchaseStatusElement contain the unavailable class.
      else if (purchaseStatusElement.classList.contains("status__annul")) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          purchaseStatusElement,
          "status__annul_color_red"
        );
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // For each purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames.
      for (let purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.purchaseTotal,
          purchaseTotalBorderColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // For each purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames.
      for (let purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.purchaseTotalReminder,
          purchaseTotalBorderColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.addNewAddressLink,
          linkColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames.
      for (let buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.contactButton,
          buttonBackgroundColorClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_" + newColor
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // For each buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames.
      for (let buttonBackgroundColorClassName of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or several elements.
        tools.removeClassFromElements(
          buttonBackgroundColorClassName,
          form.purchaseConfirmAddressesButton,
          form.purchaseConfirmDeliveryModeButton,
          form.purchaseConfirmButton
        );
      }
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "page__button_background-color_" + newColor,
        form.purchaseConfirmAddressesButton,
        form.purchaseConfirmDeliveryModeButton,
        form.purchaseConfirmButton
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let customerServiceQuestionsClassName of font.customerServiceQuestionsClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          customerServiceQuestion,
          customerServiceQuestionsClassName
        );
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.userEmail) {
      // For each userEmailClassName of font.userEmailClassNames.
      for (let userEmailClassName of font.userEmailClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.userEmail, userEmailClassName);
      }
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.userEmail,
        "term__user-email_color_" + newColor
      );
    }
  },
  /**
   * Method that remove multiple CSS classes from multiple elements to handle their color contrast.
   * @return {void}
   */
  removeClassesFromElementsForContrast: function () {
    console.log("font.removeClassesFromElementsForContrast()");

    // For each headerTitleColorClassName of font.headerTitleColorClassNames.
    for (let headerTitleColorClassName of font.headerTitleColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        font.headerTitle,
        headerTitleColorClassName
      );
    }

    // For each headerIconColorClassName of font.headerIconColorClassNames.
    for (let headerIconColorClassName of font.headerIconColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        font.headerCartIcon,
        headerIconColorClassName
      );
    }

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each headerIconColorClassName of font.headerIconColorClassNames.
      for (let headerIconColorClassName of font.headerIconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.burgerMenuImageBar,
          headerIconColorClassName
        );
        tools.removeClassesFromElement(
          font.burgerMenuImageUncheckMark,
          headerIconColorClassName
        );
      }
    }

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_black",
        "nav-desktop__item_color_white",
        "nav-desktop__item_color_blue",
        "nav-desktop__item_color_electric-purple",
        "nav-desktop__item_color_red",
        "nav-desktop__item_color_slimy-green",
        "nav-desktop__item_color_mango",
        "nav-desktop__item_color_sepia"
      );
    }

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_background-color_black",
      "circle_background-color_white",
      "circle_background-color_blue",
      "circle_background-color_green",
      "circle_background-color_red",
      "circle_background-color_safety-orange",
      "circle_background-color_electric-purple",
      "circle_background-color_mango",
      "circle_background-color_slimy-green",
      "circle_background-color_sepia"
    );

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        footerTitle,
        "footer__title_color_black",
        "footer__title_color_white",
        "footer__title_color_blue",
        "footer__title_color_electric-purple",
        "footer__title_color_red",
        "footer__title_color_slimy-green",
        "footer__title_color_mango",
        "footer__title_color_sepia"
      );
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(footerLink, linkColorClassName);
      }
    }

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      font.copyright,
      "block-footer__copyright_color_black",
      "block-footer__copyright_color_white",
      "block-footer__copyright_color_blue",
      "block-footer__copyright_color_electric-purple",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_slimy-green",
      "block-footer__copyright_color_mango",
      "block-footer__copyright_color_sepia"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(searchButton, buttonColorClassName);
      }
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(createButton, buttonColorClassName);
      }
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(createLink, linkColorClassName);
      }
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(addToCartLink, linkColorClassName);
      }
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.purchaseLink, linkColorClassName);
      }
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(detailLink, linkColorClassName);
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_color_black",
        "table_color_white",
        "table_color_blue",
        "table_color_electric-purple",
        "table_color_red",
        "table_color_slimy-green",
        "table_color_mango",
        "table_color_sepia"
      );
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cartButtonImage, iconColorClassName);
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(form.loginButton, buttonColorClassName);
      }
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.registrationButton,
          buttonColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.contactButton,
          buttonColorClassName
        );
      }
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // For each buttonColorClassName of font.buttonColorClassNames.
      for (let buttonColorClassName of font.buttonColorClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or several elements.
        tools.removeClassFromElements(
          buttonColorClassName,
          form.purchaseConfirmAddressesButton,
          form.purchaseConfirmDeliveryModeButton,
          form.purchaseConfirmButton
        );
      }
    }
  },
  /**
   * Method that switch the color of some elements according to the value of font.color.
   * @return {void}
   */
  switchColorForContrast: function () {
    console.log("font.switchColorForContrast()");

    // For each themeSwitch of font.themeSwitchs.
    for (let themeSwitch of font.themeSwitchs) {
      // If a themeSwitch is checked.
      if (themeSwitch.checked) {
        // console.log("return");
        // We leave font.switchColorForContrast().
        return;
      }
    }

    // We call font.removeClassesFromElementsForContrast() in order to remove multiple CSS classes from multiple elements.
    font.removeClassesFromElementsForContrast();

    // All the colors for black writing.
    let blackWritingColors = ["green", "safety-orange", "mango"];
    // All the colors for white writing.
    let whiteWritingColors = ["blue", "red", "electric-purple"];

    // For each blackWritingColor of blackWritingColors.
    for (let blackWritingColor of blackWritingColors) {
      // For each whiteWritingColor of whiteWritingColors.
      for (let whiteWritingColor of whiteWritingColors) {
        // If font.color is strictly equal to blackWritingColor.
        if (font.color === blackWritingColor) {
          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.headerTitle,
            "header__title_color_black"
          );

          // If the DOM elements exist.
          if (font.burgerMenus) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageBar,
              "header__icon_color_black"
            );
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageUncheckMark,
              "header__icon_color_black"
            );
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.headerCartIcon,
            "header__icon_color_black"
          );

          // For each menuNavDesktopLink of font.menuNavDesktopLinks.
          for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              menuNavDesktopLink,
              "nav-desktop__item_color_black"
            );
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.circle,
            "circle_background-color_black"
          );

          // For each footerTitle of font.footerTitles.
          for (let footerTitle of font.footerTitles) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(footerTitle, "footer__title_color_black");
          }

          // For each footerLink of font.footerLinks.
          for (let footerLink of font.footerLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(footerLink, "page__link_color_black");
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.copyright,
            "block-footer__copyright_color_black"
          );

          // For each searchButton of font.searchButtons.
          for (let searchButton of font.searchButtons) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(searchButton, "page__button_color_black");
          }

          // For each createButton of font.createButtons.
          for (let createButton of font.createButtons) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(createButton, "page__button_color_white");
          }

          // For each createLink of font.createLinks.
          for (let createLink of font.createLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(createLink, "page__link_color_white");
          }

          // For each addToCartLink of font.addToCartLinks.
          for (let addToCartLink of font.addToCartLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(addToCartLink, "page__link_color_black");
          }

          // If the DOM element exist.
          if (font.purchaseLink) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.purchaseLink,
              "page__link_color_black"
            );
          }

          // For each detailLink of font.detailLinks.
          for (let detailLink of font.detailLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(detailLink, "page__link_color_white");
          }

          // For each table of font.tables.
          for (let table of font.tables) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(table, "table_color_black");
          }

          // For each cartButtonImage of font.cartButtonImages.
          for (let cartButtonImage of font.cartButtonImages) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              cartButtonImage,
              "page__icon_color_black"
            );
          }

          // If the DOM element exist.
          if (form.loginButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.loginButton,
              "page__button_color_black"
            );
          }

          // If the DOM element exist.
          if (form.registrationButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.registrationButton,
              "page__button_color_black"
            );
          }

          // If the DOM element exist.
          if (form.contactButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.contactButton,
              "page__button_color_black"
            );
          }

          // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
          if (
            form.purchaseConfirmAddressesButton ||
            form.purchaseConfirmDeliveryModeButton ||
            form.purchaseConfirmButton
          ) {
            // We call tools.addClassToElements() in order to add a className to one or several elements.
            tools.addClassToElements(
              "page__button_color_black",
              form.purchaseConfirmAddressesButton,
              form.purchaseConfirmDeliveryModeButton,
              form.purchaseConfirmButton
            );
          }
        }
        // Else if font.color is strictly equal to whiteWritingColor.
        else if (font.color === whiteWritingColor) {
          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.headerTitle,
            "header__title_color_white"
          );

          // If the DOM elements exist.
          if (font.burgerMenus) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageBar,
              "header__icon_color_white"
            );
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageUncheckMark,
              "header__icon_color_white"
            );
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.headerCartIcon,
            "header__icon_color_white"
          );

          // For each menuNavDesktopLink of font.menuNavDesktopLinks.
          for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              menuNavDesktopLink,
              "nav-desktop__item_color_white"
            );
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.circle,
            "circle_background-color_white"
          );

          // For each footerTitle of font.footerTitles.
          for (let footerTitle of font.footerTitles) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(footerTitle, "footer__title_color_white");
          }

          // For each footerLink of font.footerLinks.
          for (let footerLink of font.footerLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(footerLink, "page__link_color_white");
          }

          // We call tools.addClassesToElement() in order to add one or several classNames to the element.
          tools.addClassesToElement(
            font.copyright,
            "block-footer__copyright_color_white"
          );

          // For each searchButton of font.searchButtons.
          for (let searchButton of font.searchButtons) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(searchButton, "page__button_color_white");
          }

          // For each createButton of font.createButtons.
          for (let createButton of font.createButtons) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(createButton, "page__button_color_white");
          }

          // For each createLink of font.createLinks.
          for (let createLink of font.createLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(createLink, "page__link_color_white");
          }

          // For each addToCartLink of font.addToCartLinks.
          for (let addToCartLink of font.addToCartLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(addToCartLink, "page__link_color_white");
          }

          // If the DOM element exist.
          if (font.purchaseLink) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              font.purchaseLink,
              "page__link_color_white"
            );
          }

          // For each detailLink of font.detailLinks.
          for (let detailLink of font.detailLinks) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(detailLink, "page__link_color_white");
          }

          // For each table of font.tables.
          for (let table of font.tables) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(table, "table_color_white");
          }

          // For each cartButtonImage of font.cartButtonImages.
          for (let cartButtonImage of font.cartButtonImages) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              cartButtonImage,
              "page__icon_color_white"
            );
          }

          // If the DOM element exist.
          if (form.loginButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.loginButton,
              "page__button_color_white"
            );
          }

          // If the DOM element exist.
          if (form.registrationButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.registrationButton,
              "page__button_color_white"
            );
          }

          // If the DOM element exist.
          if (form.contactButton) {
            // We call tools.addClassesToElement() in order to add one or several classNames to the element.
            tools.addClassesToElement(
              form.contactButton,
              "page__button_color_white"
            );
          }

          // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
          if (
            form.purchaseConfirmAddressesButton ||
            form.purchaseConfirmDeliveryModeButton ||
            form.purchaseConfirmButton
          ) {
            // We call tools.addClassToElements() in order to add a className to one or several elements.
            tools.addClassToElements(
              "page__button_color_white",
              form.purchaseConfirmAddressesButton,
              form.purchaseConfirmDeliveryModeButton,
              form.purchaseConfirmButton
            );
          }
        }
      }
    }
  },
  /**
   * Method that remove multiple CSS classes from multiple elements.
   * @return {void}
   */
  removeClassesFromElements: function () {
    console.log("font.removeClassesFromElements()");

    // For each className of font.headerBackgroundColorClassNames.
    for (let className of font.headerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(font.header, className);
    }

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each className of font.burgerMenuBackgroundColorClassNames.
      for (let className of font.burgerMenuBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.openingButton, className);
        tools.removeClassesFromElement(font.closingButton, className);
      }

      // For each headerIconColorClassName of font.headerIconColorClassNames.
      for (let headerIconColorClassName of font.headerIconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.burgerMenuImageBar,
          headerIconColorClassName
        );
        tools.removeClassesFromElement(
          font.burgerMenuImageUncheckMark,
          headerIconColorClassName
        );
      }
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // For each className of font.menuNavMobileLinksColorClassNames.
      for (let className of font.menuNavMobileLinksColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each headerTitleColorClassName of font.headerTitleColorClassNames.
    for (let headerTitleColorClassName of font.headerTitleColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        font.headerTitle,
        headerTitleColorClassName
      );
    }

    // For each headerIconColorClassName of font.headerIconColorClassNames.
    for (let headerIconColorClassName of font.headerIconColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        font.headerCartIcon,
        headerIconColorClassName
      );
    }

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_black",
        "nav-desktop__item_color_white",
        "nav-desktop__item_color_blue",
        "nav-desktop__item_color_red",
        "nav-desktop__item_color_electric-purple",
        "nav-desktop__item_color_slimy-green",
        "nav-desktop__item_color_mango",
        "nav-desktop__item_color_sepia"
      );
    }

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_background-color_black",
      "circle_background-color_white",
      "circle_background-color_blue",
      "circle_background-color_green",
      "circle_background-color_red",
      "circle_background-color_safety-orange",
      "circle_background-color_electric-purple",
      "circle_background-color_mango",
      "circle_background-color_slimy-green",
      "circle_background-color_sepia",
      "circle_color_black",
      "circle_color_white",
      "circle_color_blue",
      "circle_color_green",
      "circle_color_red",
      "circle_color_safety-orange",
      "circle_color_electric-purple",
      "circle_color_mango",
      "circle_color_slimy-green"
    );

    // For each className of font.footerBackgroundColorClassNames.
    for (let className of font.footerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(font.footer, className);
    }

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        footerTitle,
        "footer__title_color_black",
        "footer__title_color_white",
        "footer__title_color_blue",
        "footer__title_color_red",
        "footer__title_color_electric-purple",
        "footer__title_color_slimy-green",
        "footer__title_color_mango",
        "footer__title_color_sepia"
      );
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(footerLink, linkColorClassName);
      }
    }

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      font.copyright,
      "block-footer__copyright_color_black",
      "block-footer__copyright_color_white",
      "block-footer__copyright_color_blue",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_electric-purple",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_slimy-green",
      "block-footer__copyright_color_mango",
      "block-footer__copyright_color_sepia"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(searchButton, buttonClassName);
      }
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(createButton, buttonClassName);
      }
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.linkClassName
        tools.removeClassesFromElement(createLink, linkClassName);
      }
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          reactivateUserAccountLink,
          linkClassName
        );
      }
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(addToCartLink, linkClassName);
      }
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.purchaseLink, linkClassName);
      }
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(detailLink, linkClassName);
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_background-color_blue",
        "table_background-color_green",
        "table_background-color_red",
        "table_background-color_safety-orange",
        "table_background-color_electric-purple",
        "table_background-color_mango",
        "table_background-color_slimy-green",
        "table_color_black",
        "table_color_white",
        "table_color_blue",
        "table_color_electric-purple",
        "table_color_red",
        "table_color_slimy-green",
        "table_color_mango",
        "table_color_sepia"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.pursueShoppingLink,
          linkColorClassName
        );
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(quantityIcon, iconColorClassName);
      }
    }

    // For each deleteProductIcon of font.deleteProductIcons.
    for (let deleteProductIcon of font.deleteProductIcons) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(deleteProductIcon, iconColorClassName);
      }
    }

    // If the DOM elements exist.
    if (font.total) {
      // For each className of font.totalBorderColorClassNames.
      for (let className of font.totalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.total, className);
      }
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // For each linkBackgroundColorClassName of font.linkBackgroundColorClassNames.
      for (let linkBackgroundColorClassName of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cartLink, linkBackgroundColorClassName);
      }
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cartButtonImage, iconColorClassName);
      }
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // For each className of font.cardColorClassNames.
      for (let className of font.cardColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(cardsLink, linkColorClassName);
      }
    }

    // For each adminPreview of font.adminPreviews.
    for (let adminPreview of font.adminPreviews) {
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // For each className of font.adminDetailColorClassNames.
      for (let className of font.adminDetailColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(adminDetail, className);
      }
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
      tools.removeClassesFromElement(
        input,
        "form-field__input_color_black",
        "form-field__input_color_white",
        "form-field__input_color_safety-orange",
        "form-field__input_color_mango",
        "form-field__input_color_blue",
        "form-field__input_color_mango-jamaica",
        "form-field__input_color_blue-golden-sate-warriors",
        "form-field__input_color_mango-flash",
        "form-field__input_color_slimy-green-forest"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.contactEmailLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(form.loginButton, buttonClassName);
      }
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.forgottenPasswordLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.registerLink, linkColorClassName);
      }
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.mobileLoginLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.mobileLogoutLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.mobileRegistrationLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopLoginLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopLogoutLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.desktopRegistrationLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.registrationButton,
          buttonClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.termsOfServiceLink,
          linkColorClassName
        );
      }
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // For each className of font.errorMessageColorClassNames.
      for (let className of font.errorMessageColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(errorMessage, className);
      }
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // For each className of font.productAvailabilityColorClassNames.
      for (let className of font.productAvailabilityColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(productAviabilityElement, className);
      }
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // For each cardAddressColorClassName of font.cardAddressColorClassNames.
      for (let cardAddressColorClassName of font.cardAddressColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(addressCard, cardAddressColorClassName);
      }
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // For each iconColorClassName of font.iconColorClassNames.
      for (let iconColorClassName of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(checkedIcon, iconColorClassName);
      }
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // For each linkClassName of font.linkClassNames.
      for (let linkClassName of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(deleteLink, linkClassName);
      }
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(textLink, linkColorClassName);
      }
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // For each cardPurchaseColorClassName of font.cardPurchaseColorClassNames.
      for (let cardPurchaseColorClassName of font.cardPurchaseColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          purchaseCard,
          cardPurchaseColorClassName
        );
      }
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // For each statusColorClassName of font.statusColorClassNames.
      for (let statusColorClassName of font.statusColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          purchaseStatusElement,
          statusColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // For each purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames.
      for (let purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.purchaseTotal,
          purchaseTotalBorderColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // For each purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames.
      for (let purchaseTotalBorderColorClassName of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          font.purchaseTotalReminder,
          purchaseTotalBorderColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // For each linkColorClassName of font.linkColorClassNames.
      for (let linkColorClassName of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          form.addNewAddressLink,
          linkColorClassName
        );
      }
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(form.contactButton, buttonClassName);
      }
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // For each buttonClassName of font.buttonClassNames.
      for (let buttonClassName of font.buttonClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or several elements.
        tools.removeClassFromElements(
          buttonClassName,
          form.purchaseConfirmAddressesButton,
          form.purchaseConfirmDeliveryModeButton,
          form.purchaseConfirmButton
        );
      }
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // For each customerServiceQuestionsClassName of font.customerServiceQuestionsClassNames.
      for (let customerServiceQuestionsClassName of font.customerServiceQuestionsClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(
          customerServiceQuestion,
          customerServiceQuestionsClassName
        );
      }
    }

    // If the DOM element exist.
    if (font.userEmail) {
      // For each userEmailClassName of font.userEmailClassNames.
      for (let userEmailClassName of font.userEmailClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
        tools.removeClassesFromElement(font.userEmail, userEmailClassName);
      }
    }
  },
  /**
   * Methot that remove all the CSS classes form the body element.
   * @return {void}
   */
  removeAllClassesFromBody: function () {
    console.log("font.removeAllClassesFromBody()");

    // We call tools.removeClassesFromElement() in order to remove one or several classNames from the element.
    tools.removeClassesFromElement(
      mode.body,
      "dark",
      "light",
      "knick",
      "lakers",
      "spider-man",
      "jamaica",
      "golden-state-warriors",
      "flash",
      "forest"
    );
  },
  /**
   * Metho that switch to the knick theme.
   * @return {void}
   */
  switchToKnickTheme: function () {
    console.log("font.switchToKnickTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "knick");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.knickSwitchSlider, font.colors.blue);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_safety-orange"
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_safety-orange",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_blue",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_safety-orange");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_blue");

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_blue");

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_blue"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_blue",
      "circle_color_safety-orange"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_safety-orange"
    );

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_blue");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_blue"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_blue"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_blue"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_white",
        "page__link_color_blue"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_safety-orange",
        "table_color_blue"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_safety-orange"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          deleteProductIcon,
          "page__icon_color_safety-orange"
        );
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_safety-orange");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_safety-orange");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        cartLink,
        "page__link_background-color_safety-orange"
      );
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartButtonImage, "page__icon_color_blue");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_safety-orange");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_safety-orange");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_bluesafety-orange"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminDetail,
        "admin-detail_border-color_safety-orange"
      );
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_safety-orange");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.registerLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_safety-orange"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        errorMessage,
        "error-message_color_safety-orange"
      );
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_safety-orange"
      );
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addressCard,
        "card-address_border-color_safety-orange"
      );
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_safety-orange");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_safety-orange"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseStatusElement,
        "status_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the lakers theme.
   * @return {void}
   */
  switchToLakersTheme: function () {
    console.log("font.switchToLakersTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "lakers");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(
      font.lakersSwitchSlider,
      font.colors.electricPurple
    );

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_mango");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_mango",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_electric-purple",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_mango");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.headerTitle,
      "header__title_color_electric-purple"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.headerCartIcon,
      "header__icon_color_electric-purple"
    );

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_electric-purple"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_electric-purple",
      "circle_color_mango"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_mango");

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        footerTitle,
        "footer__title_color_electric-purple"
      );
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_electric-purple");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_electric-purple"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_electric-purple"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_electric-purple"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_mango",
        "page__link_color_electric-purple"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_mango",
        "page__link_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_mango",
        "page__link_color_electric-purple"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_mango",
        "table_color_electric-purple"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_mango"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(deleteProductIcon, "page__icon_color_mango");
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_mango");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_mango");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartLink, "page__link_background-color_mango");
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        cartButtonImage,
        "page__icon_color_electric-purple"
      );
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_mango");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_mango");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueyellow"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_border-color_mango");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_mango");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_electric-purple"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_mango"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_mango");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_mango"
      );
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(addressCard, "card-address_border-color_mango");
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_mango");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_mango"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(purchaseStatusElement, "status_color_mango");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_mango",
        "page__button_color_electric-purple"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the spider-man theme.
   * @return {void}
   */
  switchToMarioTheme: function () {
    console.log("font.switchToMarioTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "spider-man");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.spiderManSwitchSlider, font.colors.red);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_blue");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_blue",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_red",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_red");

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_red");

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_red"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_red",
      "circle_color_safety-blue"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_blue");

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_red");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_red"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_red"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_blue",
        "table_color_red"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_blue"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(deleteProductIcon, "page__icon_color_blue");
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_blue");
    }

    // If the DOM elements exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_blue");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartLink, "page__link_background-color_blue");
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartButtonImage, "page__icon_color_red");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_blue");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueblue"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_border-color_blue");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_blue");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.contactEmailLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLogoutLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_blue"
      );
    }
    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLogoutLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_blue"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_blue");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_blue"
      );
    }
    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(addressCard, "card-address_border-color_blue");
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_blue");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_blue"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(purchaseStatusElement, "status_color_blue");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the jamaica theme.
   * @return {void}
   */
  switchToJamaicaTheme: function () {
    console.log("font.switchToJamaicaTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "jamaica");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(
      font.jamaicaSwitchSlider,
      font.colors.slimyGreen
    );

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_mango");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_mango",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_slimy-green",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_mango");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.headerTitle,
      "header__title_color_slimy-green"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.headerCartIcon,
      "header__icon_color_slimy-green"
    );

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_slimy-green"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_slimy-green",
      "circle_color_mango"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_mango");

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_slimy-green");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_slimy-green");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_slimy-green"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_slimy-green"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_slimy-green"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_mango",
        "page__link_color_slimy-green"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_mango",
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_mango",
        "page__link_color_slimy-green"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_mango",
        "table_color_slimy-green"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_mango"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(deleteProductIcon, "page__icon_color_mango");
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_mango");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_mango");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartLink, "page__link_background-color_mango");
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        cartButtonImage,
        "page__icon_color_slimy-green"
      );
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_mango");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_mango");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueyellow"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_border-color_mango");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_mango-jamaica");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_mango"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_mango");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_mango"
      );
    }

    // For each productAviabilityElement of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(addressCard, "card-address_border-color_mango");
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_mango");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_mango"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(purchaseStatusElement, "status_color_mango");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_mango",
        "page__button_color_slimy-green"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the golden-state-warriors theme.
   * @return {void}
   */
  switchToGoldenStateWarriorsTheme: function () {
    console.log("font.switchToGoldenStateWarriorsTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "golden-state-warriors");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(
      font.goldenStateWarriorsSwitchSlider,
      font.colors.mango
    );

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_blue");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_blue",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_mango",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_mango");

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_mango");

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_mango"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_mango",
      "circle_color_blue"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_blue");

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_mango");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_mango");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_mango"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_mango"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_mango"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_blue",
        "page__link_color_mango"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_blue",
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_blue",
        "page__link_color_mango"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_blue",
        "table_color_mango"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_blue"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(deleteProductIcon, "page__icon_color_blue");
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_blue");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_blue");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartLink, "page__link_background-color_blue");
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartButtonImage, "page__icon_color_mango");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_blue");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueblue"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_border-color_blue");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        input,
        "form-field__input_color_blue-golden-sate-warriors"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.contactEmailLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLogoutLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_blue"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_blue");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_blue"
      );
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(addressCard, "card-address_border-color_blue");
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_blue");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_blue"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(purchaseStatusElement, "status_color_blue");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_blue",
        "page__button_color_mango"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the flash theme.
   * @return {void}
   */
  switchToFlashTheme: function () {
    console.log("font.switchToFlashTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "flash");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.flashSwitchSlider, font.colors.red);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_mango");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_mango",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_red",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_mango");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_red");

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_red");

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_red"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_red",
      "circle_color_mango"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_mango");

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_red");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_red"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_red"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_mango",
        "page__link_color_red"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_mango",
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_mango",
        "page__link_color_red"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_mango",
        "table_color_red"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_mango"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(deleteProductIcon, "page__icon_color_mango");
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_mango");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_mango");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartLink, "page__link_background-color_mango");
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartButtonImage, "page__icon_color_red");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_mango");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_mango");
    }
    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueyellow"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_border-color_mango");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_mango-flash");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_mango");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_mango"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.desktopLogoutLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_mango"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_mango");
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_mango"
      );
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(addressCard, "card-address_border-color_mango");
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_mango");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_mango"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(purchaseStatusElement, "status_color_mango");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_mango"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_mango",
        "page__button_color_red"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
  /**
   * Metho that switch to the forest theme.
   * @return {void}
   */
  switchToForestTheme: function () {
    console.log("font.switchToForestTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(mode.body, "forest");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.forestSwitchSlider, font.colors.sepia);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_slimy-green"
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "burger-menu_background-color_slimy-green",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or several elements.
      tools.addClassToElements(
        "header__icon_color_sepia",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_slimy-green");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_sepia");

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_sepia");

    // For each menuNavDesktopLink of font.menuNavDesktopLinks.
    for (let menuNavDesktopLink of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        menuNavDesktopLink,
        "nav-desktop__item_color_sepia"
      );
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_sepia",
      "circle_color_slimy-green"
    );

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_slimy-green"
    );

    // For each footerTitle of font.footerTitles.
    for (let footerTitle of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerTitle, "footer__title_color_sepia");
    }

    // For each footerLink of font.footerLinks.
    for (let footerLink of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(footerLink, "page__link_color_sepia");
    }

    // We call tools.addClassesToElement() in order to add one or several classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_sepia"
    );

    // For each searchButton of font.searchButtons.
    for (let searchButton of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        searchButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // For each createButton of font.createButtons.
    for (let createButton of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createButton,
        "page__button_background-color_white",
        "page__button_color_sepia"
      );
    }

    // For each createLink of font.createLinks.
    for (let createLink of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        createLink,
        "page__link_background-color_white",
        "page__link_color_sepia"
      );
    }

    // For each reactivateUserAccountLink of font.reactivateUserAccountLinks.
    for (let reactivateUserAccountLink of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        reactivateUserAccountLink,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // For each addToCartLink of font.addToCartLinks.
    for (let addToCartLink of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addToCartLink,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // For each detailLink of font.detailLinks.
    for (let detailLink of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        detailLink,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_slimy-green",
        "table_color_sepia"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_slimy-green"
      );
      // For each deleteProductIcon of font.deleteProductIcons.
      for (let deleteProductIcon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or several classNames to the element.
        tools.addClassesToElement(
          deleteProductIcon,
          "page__icon_color_slimy-green"
        );
      }
    }

    // For each quantityIcon of mode.quantityIcons.
    for (let quantityIcon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(quantityIcon, "page__icon_color_slimy-green");
    }

    // If the DOM elements exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_slimy-green");
    }

    // For each cartLink of font.cartLinks.
    for (let cartLink of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        cartLink,
        "page__link_background-color_slimy-green"
      );
    }

    // For each cartButtonImage of font.cartButtonImages.
    for (let cartButtonImage of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cartButtonImage, "page__icon_color_sepia");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(card, "card_border-color_slimy-green");
    }

    // For each cardsLink of font.cardsLinks.
    for (let cardsLink of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(cardsLink, "page__link_color_slimy-green");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_border-color_blueslimy-green"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        adminDetail,
        "admin-detail_border-color_slimy-green"
      );
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        input,
        "form-field__input_color_slimy-green-forest"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.registerLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_slimy-green"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        errorMessage,
        "error-message_color_slimy-green"
      );
    }

    // For each productAviabilityElement of font.productAviabilityElements.
    for (let productAviabilityElement of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        productAviabilityElement,
        "availability_color_slimy-green"
      );
    }

    // For each addressCard of font.addressCards.
    for (let addressCard of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        addressCard,
        "card-address_border-color_slimy-green"
      );
    }

    // For each checkedIcon of font.checkedIcons.
    for (let checkedIcon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(checkedIcon, "page__icon_color_slimy-green");
    }

    // For each deleteLink of font.deleteLinks.
    for (let deleteLink of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        deleteLink,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each textLink of font.textLinks.
    for (let textLink of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(textLink, "page__link_color_white");
    }

    // For each purchaseCard of font.purchaseCards.
    for (let purchaseCard of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseCard,
        "card-purchase_border-color_slimy-green"
      );
    }

    // For each purchaseStatusElement of font.purchaseStatusElements.
    for (let purchaseStatusElement of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        purchaseStatusElement,
        "status_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // For each customerServiceQuestion of font.customerServiceQuestions.
    for (let customerServiceQuestion of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or several classNames to the element.
      tools.addClassesToElement(
        customerServiceQuestion,
        "term__question_color_white"
      );
    }
  },
};
