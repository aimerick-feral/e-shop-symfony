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
      purple: getComputedStyle(document.documentElement).getPropertyValue(
        "--purple"
      ),
      yellow: getComputedStyle(document.documentElement).getPropertyValue(
        "--yellow"
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
      "mario",
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
      "page__button_background-color_purple",
      "page__button_background-color_yellow",
      "page__button_background-color_slimy-green",
      "page__button_background-color_dodger-blue",
      "page__button_color_black",
      "page__button_color_white",
      "page__button_color_blue",
      "page__button_color_purple",
      "page__button_color_red",
      "page__button_color_slimy-green",
      "page__button_color_yellow",
      "page__button_color_sepia",
    ];

    // All the button background color class names.
    font.buttonBackgroundColorClassNames = [
      "page__button_background-color_blue",
      "page__button_background-color_green",
      "page__button_background-color_red",
      "page__button_background-color_safety-orange",
      "page__button_background-color_purple",
      "page__button_background-color_yellow",
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
      "page__button_color_purple",
      "page__button_color_yellow",
      "page__button_color_slimy-green",
      "page__button_color_sepia",
    ];

    // All the link class names.
    font.linkClassNames = [
      "page__link_background-color_blue",
      "page__link_background-color_green",
      "page__link_background-color_red",
      "page__link_background-color_safety-orange",
      "page__link_background-color_purple",
      "page__link_background-color_yellow",
      "page__link_background-color_dodger-blue",
      "page__link_background-color_white",
      "page__link_background-color_slimy-green",
      "page__link_color_black",
      "page__link_color_white",
      "page__link_color_blue",
      "page__link_color_green",
      "page__link_color_red",
      "page__link_color_safety-orange",
      "page__link_color_purple",
      "page__link_color_yellow",
      "page__link_color_slimy-green",
      "page__link_color_sepia",
    ];

    // All the link background color class names.
    font.linkBackgroundColorClassNames = [
      "page__link_background-color_blue",
      "page__link_background-color_green",
      "page__link_background-color_red",
      "page__link_background-color_safety-orange",
      "page__link_background-color_purple",
      "page__link_background-color_yellow",
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
      "page__link_color_purple",
      "page__link_color_yellow",
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
      "page__icon_color_purple",
      "page__icon_color_yellow",
      "page__icon_color_slimy-green",
      "page__icon_color_sepia",
    ];

    // All the header background color class names.
    font.headerBackgroundColorClassNames = [
      "header_background-color_blue",
      "header_background-color_green",
      "header_background-color_red",
      "header_background-color_safety-orange",
      "header_background-color_purple",
      "header_background-color_yellow",
      "header_background-color_slimy-green",
    ];

    // All the header title color class names.
    font.headerTitleColorClassNames = [
      "header__title_color_black",
      "header__title_color_white",
      "header__title_color_blue",
      "header__title_color_purple",
      "header__title_color_red",
      "header__title_color_slimy-green",
      "header__title_color_yellow",
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
      "header__icon_color_purple",
      "header__icon_color_yellow",
      "header__icon_color_slimy-green",
      "header__icon_color_sepia",
    ];

    // All the burger menu background color class names.
    font.burgerMenuBackgroundColorClassNames = [
      "burger-menu_background-color_blue",
      "burger-menu_background-color_green",
      "burger-menu_background-color_red",
      "burger-menu_background-color_safety-orange",
      "burger-menu_background-color_purple",
      "burger-menu_background-color_yellow",
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
      "nav-mobile__item_color_purple",
      "nav-mobile__item_color_purple:last-child",
      "nav-mobile__item_color_yellow",
      "nav-mobile__item_color_yellow:last-child",
      "nav-mobile__item_color_slimy-green",
      "nav-mobile__item_color_slimy-green:last-child",
    ];

    // All the footer background color class names.
    font.footerBackgroundColorClassNames = [
      "footer_background-color_blue",
      "footer_background-color_green",
      "footer_background-color_red",
      "footer_background-color_safety-orange",
      "footer_background-color_purple",
      "footer_background-color_yellow",
      "footer_background-color_slimy-green",
    ];

    // All the card color class names.
    font.cardColorClassNames = [
      "card_color_blue",
      "card_color_green",
      "card_color_red",
      "card_color_safety-orange",
      "card_color_purple",
      "card_color_yellow",
      "card_color_slimy-green",
    ];

    // All the admin preview color class names.
    font.adminPreviewColorClassNames = [
      "admin-preview_color_blue",
      "admin-preview_color_green",
      "admin-preview_color_red",
      "admin-preview_color_safety-orange",
      "admin-preview_color_purple",
      "admin-preview_color_yellow",
      "admin-preview_color_slimy-green",
    ];

    // All the admin detail color class names.
    font.adminDetailColorClassNames = [
      "admin-detail_color_blue",
      "admin-detail_color_green",
      "admin-detail_color_red",
      "admin-detail_color_safety-orange",
      "admin-detail_color_purple",
      "admin-detail_color_yellow",
      "admin-detail_color_slimy-green",
    ];

    // All the total border color class names.
    font.totalBorderColorClassNames = [
      "total_border-color_blue",
      "total_border-color_green",
      "total_border-color_red",
      "total_border-color_safety-orange",
      "total_border-color_purple",
      "total_border-color_yellow",
      "total_border-color_slimy-green",
    ];

    // All the product availability color class names.
    font.productAvailabilityColorClassNames = [
      "availability__avialable_color_green",
      "availability__unavailable_color_red",
      "availability_color_safety-orange",
      "availability_color_yellow",
      "availability_color_blue",
      "availability_color_slimy-green",
    ];

    // All the card address color class names.
    font.cardAddressColorClassNames = [
      "card-address_color_blue",
      "card-address_color_green",
      "card-address_color_red",
      "card-address_color_safety-orange",
      "card-address_color_purple",
      "card-address_color_yellow",
      "card-address_color_slimy-green",
    ];

    // All the card purchase color class names.
    font.cardPurchaseColorClassNames = [
      "card-purchase_color_blue",
      "card-purchase_color_green",
      "card-purchase_color_red",
      "card-purchase_color_safety-orange",
      "card-purchase_color_purple",
      "card-purchase_color_yellow",
      "card-purchase_color_slimy-green",
    ];

    // All the status color class names.
    font.statusColorClassNames = [
      "status__paid_color_green",
      "status__paid_color_safety-orange",
      "status__paid_color_yellow",
      "status__paid_color_blue",
      "status__paid_color_slimy-green",
      "status__in-progress_color_safety-orange",
      "status__in-progress_color_yellow",
      "status__in-progress_color_blue",
      "status__in-progress_color_slimy-green",
      "status__send_color_purple",
      "status__send_color_safety-orange",
      "status__send_color_yellow",
      "status__send_color_blue",
      "status__send_color_slimy-green",
      "status__deliver_color_slimy-green",
      "status__deliver_color_safety-orange",
      "status__deliver_color_yellow",
      "status__deliver_color_blue",
      "status__annul_color_red",
      "status__annul_color_safety-orange",
      "status__annul_color_yellow",
      "status__annul_color_blue",
      "status__annul_color_slimy-green",
      "status_color_safety-orange",
      "status_color_yellow",
      "status_color_blue",
      "status_color_safety-slimy-green",
    ];

    // All the purchase total border color class names.
    font.purchaseTotalBorderColorClassNames = [
      "purchase-total_border-color_blue",
      "purchase-total_border-color_green",
      "purchase-total_border-color_red",
      "purchase-total_border-color_safety-orange",
      "purchase-total_border-color_purple",
      "purchase-total_border-color_yellow",
      "purchase-total_border-color_slimy-green",
    ];

    // All the error message color class names.
    font.errorMessageColorClassNames = [
      "error-message_color_red",
      "error-message_color_safety-orange",
      "error-message_color_yellow",
      "error-message_color_blue",
      "error-message_color_slimy-green",
    ];

    // All the customer service question color class names.
    font.customerServiceQuestionsClassNames = [
      "term__question_color_blue",
      "term__question_color_green",
      "term__question_color_red",
      "term__question_color_safety-orange",
      "term__question_color_purple",
      "term__question_color_yellow",
      "term__question_color_white",
    ];

    // All the user email color class names.
    font.userEmailClassNames = [
      "term__user-email_color_blue",
      "term__user-email_color_green",
      "term__user-email_color_red",
      "term__user-email_color_safety-orange",
      "term__user-email_color_purple",
      "term__user-email_color_yellow",
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

    // All the theme switchs.
    font.themeSwitchs = document.querySelectorAll(".switch__input-theme");
    font.blueSwitch = document.getElementById("blue-switch-input");
    font.greenSwitch = document.getElementById("green-switch-input");
    font.redSwitch = document.getElementById("red-switch-input");
    font.orangeSwitch = document.getElementById("orange-switch-input");
    font.purpleSwitch = document.getElementById("purple-switch-input");
    font.yellowSwitch = document.getElementById("yellow-switch-input");
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
    font.textLinks = document.querySelectorAll(".page__link_text");
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
    // console.log("font.loadFont()");

    // We get the value backup in localStorage.
    font.color = localStorage.getItem("font");

    // If we value for the item font in localStorage.
    if (font.color) {
      // If the font item in localStorage have the knick value.
      if (font.color === "knick") {
        // We call font.switchToKnickTheme() to apply the knick theme.
        font.switchToKnickTheme();
      }
      // Else if the font item in localStorage have the lakers value.
      else if (font.color === "lakers") {
        // We call font.switchToLakersTheme() to apply the lakers theme.
        font.switchToLakersTheme();
      }
      // Else if the font item in localStorage have the mario value.
      else if (font.color === "mario") {
        // We call font.switchToMarioTheme() to apply the mario theme.
        font.switchToMarioTheme();
      }
      // Else if the font item in localStorage have the jamaica value.
      else if (font.color === "jamaica") {
        // We call font.switchToJamaicaTheme() to apply the jamaica theme.
        font.switchToJamaicaTheme();
      }
      // Else if the font item in localStorage have the golden-state-warriors value.
      else if (font.color === "golden-state-warriors") {
        // We call font.switchToGoldenStateWarriorsTheme() to apply the golden State Warriors theme.
        font.switchToGoldenStateWarriorsTheme();
      }
      // Else if the font item in localStorage have the flash value.
      else if (font.color === "flash") {
        // We call font.switchToFlashTheme() to apply the flash theme.
        font.switchToFlashTheme();
      }
      // Else if the font item in localStorage have the forest value.
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
    // console.log("font.checkRightColorSwitchsOnLoad()");

    // We get the value backup in localStorage.
    font.color = localStorage.getItem("font");

    // If a value for the item font exist in localStorage.
    if (font.color) {
      // If the font item in localStorage have the blue value.
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

      // If the font item in localStorage have the green value.
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

      // If the font item in localStorage have the red value.
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

      // If the font item in localStorage have the safety-orange value.
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

      // If the font item in localStorage have the purple value.
      if (font.color === "purple") {
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

      // If the font item in localStorage have the yellow value.
      if (font.color === "yellow") {
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

      // If the font item in localStorage have the knick value.
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

      // Else if the font item in localStorage have the lakers value.
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

      // Else if the font item in localStorage have the mario value.
      if (font.color === "mario") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.spiderManSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.spiderManSwitch);
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.flashSwitchSlider,
          "switch__slider-theme_background-color_yellow-flash-2"
        );
        // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
        tools.setColorToBeforeProperty(font.flashSwitchSlider, font.colors.red);
      }
      // Else the font item in localStorage is not mario.
      else {
        // We call tools.uncheckInputs() to uncheck the switch.
        tools.uncheckInputs(font.spiderManSwitch);
      }

      // Else if the font item in localStorage have the jamaica value.
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

      // Else if the font item in localStorage have the golden-state-warriors value.
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

      // Else if the font item in localStorage have the flash value.
      if (font.color === "flash") {
        // We call tools.checkInputs() to check the input.
        tools.checkInputs(font.flashSwitch);
        // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
        tools.setDisabledAttribute(font.flashSwitch);
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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

      // Else if the font item in localStorage have the forest value.
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
        // If font.color is a theme.
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
    // console.log("font.handleColorsSwtich()");

    // We load the module api.js.
    api.init();

    // We get the DOM element from which the event occured.````````
    let clickedSwitch = event.currentTarget;

    // For each fontSwitch of font.fontSwitchs.
    for (let fontSwitch of font.fontSwitchs) {
      // If the clickedSwitch is identical to fontSwitch.
      if (clickedSwitch === fontSwitch) {
        // For each color of font.themes.
        for (let theme of font.themes) {
          // If font.color is identical to theme.
          if (font.color === theme) {
            // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
            tools.removeClassesFromElement(mode.body, theme);
            // We backup in localStorage the new value of the mode.
            localStorage.setItem("mode", "light");
            // When the app is loaded we load to the page the mode.backgroundColor which is backup in localSatorage.
            mode.loadMode();
            // When the app is loaded we check or uncheck the switch according to the localStorage data.
            mode.checkRightColorSwitchsOnLoad();
            // If font.color is knick.
            if (font.color === "knick") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.knickSwitchSlider,
                font.colors.safetyOrange
              );
            }
            // Else if font.color is lakers.
            else if (font.color === "lakers") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.lakersSwitchSlider,
                font.colors.yellow
              );
            }
            // Else if font.color is mario.
            else if (font.color === "mario") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.spiderManSwitchSlider,
                font.color.blue
              );
            }
            // Else if font.color is jamaica.
            else if (font.color === "jamaica") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.jamaicaSwitchSlider,
                font.colors.yellow
              );
            }
            // Else if font.color is golden-state-warriors.
            else if (font.color === "golden-state-warriors") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.goldenStateWarriorsSwitchSlider,
                font.colors.blue
              );
            }
            // Else if font.color is flash.
            else if (font.color === "flash") {
              // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
              tools.setColorToBeforeProperty(
                font.flashSwitchSlider,
                font.colors.yellow
              );
            }
            // Else if font.color is forest.
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
        // If the selected switch is a themeSwitch or a fontSwitch.
        if (clickedSwitch === themeSwitch || clickedSwitch === fontSwitch) {
          // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
          tools.removeClassesFromElement(
            font.spiderManSwitchSlider,
            "switch__slider-theme_background-color_blue-spider-man-2"
          );
          // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
          tools.setColorToBeforeProperty(
            font.spiderManSwitchSlider,
            font.colors.blue
          );
          // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
          tools.removeClassesFromElement(
            font.flashSwitchSlider,
            "switch__slider-theme_background-color_yellow-flash-2"
          );
          // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
          tools.setColorToBeforeProperty(
            font.flashSwitchSlider,
            font.colors.yellow
          );
          // If the selected switch is one of the fontSwitch.
          if (clickedSwitch === themeSwitch) {
            // We call tools.setDisabledAttribute() to set the disabled attribute to the elements.
            tools.setDisabledAttribute(mode.switch, clickedSwitch);
            // We backup in localStorage the new value of the mode.
            localStorage.setItem("mode", "dark");
            // When the app is loaded we load to the page the mode.backgroundColor which is backup in localSatorage.
            mode.loadMode();
            // When the app is loaded we check or uncheck the switch according to the localStorage data.
            mode.checkRightColorSwitchsOnLoad();
          }
          // Else if the selected switch is one of the fontSwitch.
          else if (clickedSwitch === fontSwitch) {
            // We call tools.removeDisabledAttribute() to remove the disabled attribute from the elements.
            tools.removeDisabledAttribute(mode.switch);
          }
        }
      }
    }

    // If the clickedSwitch is font.blueSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.greenSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.redSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.orangeSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.purpleSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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
      font.color = "purple";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If the clickedSwitch is font.yellowSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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
      font.color = "yellow";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call the font.switchColor() method to switch the color with the value of font.color.
      font.switchColor(font.color);
    }

    // If the clickedSwitch is font.knickSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.lakersSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.spiderManSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.flashSwitchSlider,
        "switch__slider-theme_background-color_yellow-flash-2"
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
      // We set the value mario to font.color.
      font.color = "mario";
      // We backup in localStorage the value of font.color.
      localStorage.setItem("font", font.color);
      // We call font.switchToMarioTheme() to apply the mario theme.
      font.switchToMarioTheme();
    }

    // If the clickedSwitch is font.jamaicaSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.goldenStateWarriorsSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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

    // If the clickedSwitch is font.flashSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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

    // If the clickedSwitch is font.forestSwitch.
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
      // We call tools.uncheckInputs() to uncheck some switchs.
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
      // If the clickedSwitch is a fontSwitch.
      if (clickedSwitch === fontSwitch) {
        // We call font.switchColorForContrast() to change the color of some elements according to the value of font.color.
        font.switchColorForContrast();
      }
    }
  },
  /**
   * Method that switch the current font.color of the DOM elements to a newColor.
   * @param {string} newColor
   * @return {void}
   */
  switchColor: function (newColor) {
    // console.log("font.switchColor()");

    // For each className of font.headerBackgroundColorClassNames.
    for (let className of font.headerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.header, className);
    }
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_" + newColor
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each className of font.burgerMenuBackgroundColorClassNames.
      for (let className of font.burgerMenuBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.openingButton, className);
        tools.removeClassesFromElement(font.closingButton, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.openingButton,
        "burger-menu_background-color_" + newColor
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.closingButton,
        "burger-menu_background-color_" + newColor
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // For each className of font.menuNavMobileLinksColorClassNames.
      for (let className of font.menuNavMobileLinksColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_" + newColor);
    }

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_color_black",
      "circle_color_white",
      "circle_color_blue",
      "circle_color_green",
      "circle_color_red",
      "circle_color_safety-orange",
      "circle_color_purple",
      "circle_color_yellow",
      "circle_color_slimy-green"
    );
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.circle, "circle_color_" + newColor);

    // For each className of font.footerBackgroundColorClassNames.
    for (let className of font.footerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.footer, className);
    }
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_" + newColor
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // For each className of font.buttonBackgroundColorClassNames.
      for (let className of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_" + newColor
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_dodger-blue",
        "page__button_color_white"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // For each className of font.linkClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_dodger-blue",
        "page__link_color_white"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // For each className of font.linkClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_green",
        "page__link_color_black"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // For each className of font.linkBackgroundColorClassNames.
      for (let className of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each className of font.linkBackgroundColorClassNames.
      for (let className of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_" + newColor
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // For each className of font.linkBackgroundColorClassNames.
      for (let className of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_blue");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // For each className of font.cardColorClassNames.
      for (let className of font.cardColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_" + newColor);
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_" + newColor);
    }

    // For each adminPreview of font.adminPreviews.
    for (let adminPreview of font.adminPreviews) {
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_color_" + newColor
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // For each className of font.adminDetailColorClassNames.
      for (let className of font.adminDetailColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(adminDetail, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_" + newColor);
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        input,
        "form-field__input_color_black",
        "form-field__input_color_white",
        "form-field__input_color_safety-orange",
        "form-field__input_color_yellow",
        "form-field__input_color_red",
        "form-field__input_color_blue",
        "form-field__input_color_yellow-jamaica",
        "form-field__input_color_blue-golden-sate-warriors",
        "form-field__input_color_yellow-flash",
        "form-field__input_color_slimy-green-forest"
      );
      // If the value of mode.backgroundColor is light.
      if (mode.backgroundColor === "light") {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_black");
      }
      // Else if the value of mode.backgroundColor is dark.
      else if (mode.backgroundColor === "dark") {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(input, "form-field__input_color_white");
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_background-color_blue",
        "table_background-color_green",
        "table_background-color_red",
        "table_background-color_safety-orange",
        "table_background-color_purple",
        "table_background-color_yellow",
        "table_background-color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(table, "table_background-color_" + newColor);
    }

    // If the DOM element exist.
    if (font.pursueShoppingLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.pursueShoppingLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_" + newColor
      );
    }

    // For each icon of font.deleteProductIcons.
    for (let icon of font.deleteProductIcons) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(icon, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_red");
    }

    // If the DOM element exist.
    if (font.total) {
      // For each className of font.totalBorderColorClassNames.
      for (let className of font.totalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.total, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_" + newColor);
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // For each className of font.linkBackgroundColorClassNames.
      for (let className of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.contactEmailLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.forgottenPasswordLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.registerLink, className);
      }
      // If newColor is blue, or green, or purple, or yellow.
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "purple" ||
        newColor === "yellow"
      ) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.registerLink,
          "page__link_color_safety-orange"
        );
      }
      // Else if new color is red or safety-orange.
      else if (newColor === "red" || newColor === "safety-orange") {
        // If the window size is higher or equal to 320px and inferior to 992px.
        if (
          window.innerWidth >= responsive.window320Px &&
          window.innerWidth < responsive.window992Px
        ) {
          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.registerLink,
            "page__link_color_safety-orange"
          );
        }
        // Else if the window size is higher or equal to 992px.
        else if (window.innerWidth >= responsive.window992Px) {
          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(font.registerLink, "page__link_color_blue");
        }
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each className of font.buttonBackgroundColorClassNames.
      for (let className of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.loginButton, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each className of font.buttonBackgroundColorClassNames.
      for (let className of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.registrationButton, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.termsOfServiceLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopLoginLink, className);
      }
      // If newColor is blue, or red, or safety-orange, or purple or yellow.
      if (
        newColor === "blue" ||
        newColor === "red" ||
        newColor === "safety-orange" ||
        newColor === "purple" ||
        newColor === "yellow"
      ) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.desktopLoginLink,
          "page__link_color_green"
        );
      }
      // Else if new color is green.
      else if (newColor === "green") {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.desktopLoginLink,
          "page__link_color_blue"
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopLogoutLink, className);
      }
      // If newColor is blue, or green, or safety-orange or yellow.
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "safety-orange" ||
        newColor === "yellow"
      ) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.desktopLogoutLink,
          "page__link_color_red"
        );
      }
      // Else if new color is red or purple.
      else if (newColor === "red" || newColor === "purple") {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.desktopLogoutLink,
          "page__link_color_blue"
        );
      }
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopRegistrationLink, className);
      }
      // If newColor is blue, or green, or purple or yellow.
      if (
        newColor === "blue" ||
        newColor === "green" ||
        newColor === "purple" ||
        newColor === "yellow"
      ) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          font.desktopRegistrationLink,
          "page__link_color_safety-orange"
        );
      }
      // Else if new color is red or safety-orange.
      else if (newColor === "red" || newColor === "safety-orange") {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(errorMessage, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_red");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // For each className of font.productAvailabilityColorClassNames.
      for (let className of font.productAvailabilityColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(element, className);
      }
      // If element contain the davailable class.
      if (element.classList.contains("available")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          element,
          "availability__avialable_color_green"
        );
      }
      // Else if element contain the unavailable class.
      else if (element.classList.contains("unavailable")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          element,
          "availability__unavailable_color_red"
        );
      }
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // For each className of font.cardAddressColorClassNames.
      for (let className of font.cardAddressColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_" + newColor);
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(icon, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_green");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // For each className of font.linkClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_" + newColor);
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // For each className of font.cardPurchaseColorClassNames.
      for (let className of font.cardPurchaseColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_" + newColor);
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // For each className of font.statusColorClassNames.
      for (let className of font.statusColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(element, className);
      }
      // If element contain the davailable class.
      if (element.classList.contains("status__paid")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(element, "status__paid_color_green");
      }
      // Else if element contain the unavailable class.
      else if (element.classList.contains("status__in-progress")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(
          element,
          "status__in-progress_color_safety-orange"
        );
      }
      // Else if element contain the unavailable class.
      else if (element.classList.contains("status__send")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(element, "status__send_color_purple");
      }
      // Else if element contain the unavailable class.
      else if (element.classList.contains("status__deliver")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(element, "status__deliver_color_slimy-green");
      }
      // Else if element contain the unavailable class.
      else if (element.classList.contains("status__annul")) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(element, "status__annul_color_red");
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // For each className of font.purchaseTotalBorderColorClassNames.
      for (let className of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseTotal, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // For each className of font.purchaseTotalBorderColorClassNames.
      for (let className of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseTotalReminder, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.addNewAddressLink, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_" + newColor
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each className of font.buttonBackgroundColorClassNames.
      for (let className of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.contactButton, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
      // For each className of font.buttonBackgroundColorClassNames.
      for (let className of font.buttonBackgroundColorClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or many elements.
        tools.removeClassFromElements(
          className,
          form.purchaseConfirmAddressesButton,
          form.purchaseConfirmDeliveryModeButton,
          form.purchaseConfirmButton
        );
      }
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "page__button_background-color_" + newColor,
        form.purchaseConfirmAddressesButton,
        form.purchaseConfirmDeliveryModeButton,
        form.purchaseConfirmButton
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // For each className of font.linkColorClassNames.
      for (let className of font.customerServiceQuestionsClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(question, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_" + newColor);
    }

    // If the DOM element exist.
    if (font.userEmail) {
      // For each className of font.userEmailClassNames.
      for (let className of font.userEmailClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.userEmail, className);
      }
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
    // console.log("font.removeClassesFromElementsForContrast()");

    // For each className of font.headerTitleColorClassNames.
    for (let className of font.headerTitleColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.headerTitle, className);
    }

    // For each className of font.headerIconColorClassNames.
    for (let className of font.headerIconColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.headerCartIcon, className);
    }

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each className of font.headerIconColorClassNames.
      for (let className of font.headerIconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.burgerMenuImageBar, className);
        tools.removeClassesFromElement(
          font.burgerMenuImageUncheckMark,
          className
        );
      }
    }

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        link,
        "nav-desktop__item_color_black",
        "nav-desktop__item_color_white",
        "nav-desktop__item_color_blue",
        "nav-desktop__item_color_purple",
        "nav-desktop__item_color_red",
        "nav-desktop__item_color_slimy-green",
        "nav-desktop__item_color_yellow",
        "nav-desktop__item_color_sepia"
      );
    }

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_background-color_black",
      "circle_background-color_white",
      "circle_background-color_blue",
      "circle_background-color_green",
      "circle_background-color_red",
      "circle_background-color_safety-orange",
      "circle_background-color_purple",
      "circle_background-color_yellow",
      "circle_background-color_slimy-green",
      "circle_background-color_sepia"
    );

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        title,
        "footer__title_color_black",
        "footer__title_color_white",
        "footer__title_color_blue",
        "footer__title_color_purple",
        "footer__title_color_red",
        "footer__title_color_slimy-green",
        "footer__title_color_yellow",
        "footer__title_color_sepia"
      );
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      font.copyright,
      "block-footer__copyright_color_black",
      "block-footer__copyright_color_white",
      "block-footer__copyright_color_blue",
      "block-footer__copyright_color_purple",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_slimy-green",
      "block-footer__copyright_color_yellow",
      "block-footer__copyright_color_sepia"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseLink, className);
      }
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_color_black",
        "table_color_white",
        "table_color_blue",
        "table_color_purple",
        "table_color_red",
        "table_color_slimy-green",
        "table_color_yellow",
        "table_color_sepia"
      );
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(image, className);
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.loginButton, className);
      }
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.registrationButton, className);
      }
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.contactButton, className);
      }
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // For each className of font.buttonColorClassNames.
      for (let className of font.buttonColorClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or many elements.
        tools.removeClassFromElements(
          className,
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
    // console.log("font.switchColorForContrast()");

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
    let blackWritingColors = ["green", "safety-orange", "yellow"];
    // All the colors for white writing.
    let whiteWritingColors = ["blue", "red", "purple"];

    // For each blackWritingColor of blackWritingColors.
    for (let blackWritingColor of blackWritingColors) {
      // For each whiteWritingColor of whiteWritingColors.
      for (let whiteWritingColor of whiteWritingColors) {
        // If font.color is a blackWritingColor.
        if (font.color === blackWritingColor) {
          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.headerTitle,
            "header__title_color_black"
          );

          // If the DOM elements exist.
          if (font.burgerMenus) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageBar,
              "header__icon_color_black"
            );
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageUncheckMark,
              "header__icon_color_black"
            );
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.headerCartIcon,
            "header__icon_color_black"
          );

          // For each link of font.menuNavDesktopLinks.
          for (let link of font.menuNavDesktopLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "nav-desktop__item_color_black");
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.circle,
            "circle_background-color_black"
          );

          // For each title of font.footerTitles.
          for (let title of font.footerTitles) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(title, "footer__title_color_black");
          }

          // For each link of font.footerTitles.
          for (let link of font.footerLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_black");
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.copyright,
            "block-footer__copyright_color_black"
          );

          // For each button of font.searchButtons.
          for (let button of font.searchButtons) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(button, "page__button_color_black");
          }

          // For each button of font.createButtons.
          for (let button of font.createButtons) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(button, "page__button_color_white");
          }

          // For each link of font.createLinks.
          for (let link of font.createLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // For each link of font.addToCartLinks.
          for (let link of font.addToCartLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_black");
          }

          // If the DOM element exist.
          if (font.purchaseLink) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.purchaseLink,
              "page__link_color_black"
            );
          }

          // For each link of font.detailLinks.
          for (let link of font.detailLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // For each table of font.tables.
          for (let table of font.tables) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(table, "table_color_black");
          }

          // For each image of font.cartButtonImages.
          for (let image of font.cartButtonImages) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(image, "page__icon_color_black");
          }

          // If the DOM element exist.
          if (form.loginButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              form.loginButton,
              "page__button_color_black"
            );
          }

          // If the DOM element exist.
          if (form.registrationButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              form.registrationButton,
              "page__button_color_black"
            );
          }

          // If the DOM element exist.
          if (form.contactButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
            // We call tools.addClassToElements() in order to add a className to one or many elements.
            tools.addClassToElements(
              "page__button_color_black",
              form.purchaseConfirmAddressesButton,
              form.purchaseConfirmDeliveryModeButton,
              form.purchaseConfirmButton
            );
          }
        }
        // Else if font.color is a whiteWritingColor.
        else if (font.color === whiteWritingColor) {
          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.headerTitle,
            "header__title_color_white"
          );

          // If the DOM elements exist.
          if (font.burgerMenus) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageBar,
              "header__icon_color_white"
            );
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.burgerMenuImageUncheckMark,
              "header__icon_color_white"
            );
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.headerCartIcon,
            "header__icon_color_white"
          );

          // For each link of font.menuNavDesktopLinks.
          for (let link of font.menuNavDesktopLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "nav-desktop__item_color_white");
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.circle,
            "circle_background-color_white"
          );

          // For each title of font.footerTitles.
          for (let title of font.footerTitles) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(title, "footer__title_color_white");
          }

          // For each link of font.footerTitles.
          for (let link of font.footerLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // We call tools.addClassesToElement() in order to add one or many classNames to the element.
          tools.addClassesToElement(
            font.copyright,
            "block-footer__copyright_color_white"
          );

          // For each button of font.searchButtons.
          for (let button of font.searchButtons) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(button, "page__button_color_white");
          }

          // For each button of font.createButtons.
          for (let button of font.createButtons) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(button, "page__button_color_white");
          }

          // For each link of font.createLinks.
          for (let link of font.createLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // For each link of font.addToCartLinks.
          for (let link of font.addToCartLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // If the DOM element exist.
          if (font.purchaseLink) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              font.purchaseLink,
              "page__link_color_white"
            );
          }

          // For each link of font.detailLinks.
          for (let link of font.detailLinks) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(link, "page__link_color_white");
          }

          // For each table of font.tables.
          for (let table of font.tables) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(table, "table_color_white");
          }

          // For each image of font.cartButtonImages.
          for (let image of font.cartButtonImages) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(image, "page__icon_color_white");
          }

          // If the DOM element exist.
          if (form.loginButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              form.loginButton,
              "page__button_color_white"
            );
          }

          // If the DOM element exist.
          if (form.registrationButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
            tools.addClassesToElement(
              form.registrationButton,
              "page__button_color_white"
            );
          }

          // If the DOM element exist.
          if (form.contactButton) {
            // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
            // We call tools.addClassToElements() in order to add a className to one or many elements.
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
    // console.log("font.removeClassesFromElements()");

    // For each className of font.headerBackgroundColorClassNames.
    for (let className of font.headerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.header, className);
    }

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // For each className of font.burgerMenuBackgroundColorClassNames.
      for (let className of font.burgerMenuBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.openingButton, className);
        tools.removeClassesFromElement(font.closingButton, className);
      }

      // For each className of font.headerIconColorClassNames.
      for (let className of font.headerIconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.burgerMenuImageBar, className);
        tools.removeClassesFromElement(
          font.burgerMenuImageUncheckMark,
          className
        );
      }
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // For each className of font.menuNavMobileLinksColorClassNames.
      for (let className of font.menuNavMobileLinksColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each className of font.headerTitleColorClassNames.
    for (let className of font.headerTitleColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.headerTitle, className);
    }

    // For each className of font.headerIconColorClassNames.
    for (let className of font.headerIconColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.headerCartIcon, className);
    }

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        link,
        "nav-desktop__item_color_black",
        "nav-desktop__item_color_white",
        "nav-desktop__item_color_blue",
        "nav-desktop__item_color_red",
        "nav-desktop__item_color_purple",
        "nav-desktop__item_color_slimy-green",
        "nav-desktop__item_color_yellow",
        "nav-desktop__item_color_sepia"
      );
    }

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      font.circle,
      "circle_background-color_black",
      "circle_background-color_white",
      "circle_background-color_blue",
      "circle_background-color_green",
      "circle_background-color_red",
      "circle_background-color_safety-orange",
      "circle_background-color_purple",
      "circle_background-color_yellow",
      "circle_background-color_slimy-green",
      "circle_background-color_sepia",
      "circle_color_black",
      "circle_color_white",
      "circle_color_blue",
      "circle_color_green",
      "circle_color_red",
      "circle_color_safety-orange",
      "circle_color_purple",
      "circle_color_yellow",
      "circle_color_slimy-green"
    );

    // For each className of font.footerBackgroundColorClassNames.
    for (let className of font.footerBackgroundColorClassNames) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(font.footer, className);
    }

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        title,
        "footer__title_color_black",
        "footer__title_color_white",
        "footer__title_color_blue",
        "footer__title_color_red",
        "footer__title_color_purple",
        "footer__title_color_slimy-green",
        "footer__title_color_yellow",
        "footer__title_color_sepia"
      );
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      font.copyright,
      "block-footer__copyright_color_black",
      "block-footer__copyright_color_white",
      "block-footer__copyright_color_blue",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_purple",
      "block-footer__copyright_color_red",
      "block-footer__copyright_color_slimy-green",
      "block-footer__copyright_color_yellow",
      "block-footer__copyright_color_sepia"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(button, className);
      }
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // For each className of font.linkClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseLink, className);
      }
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        table,
        "table_background-color_blue",
        "table_background-color_green",
        "table_background-color_red",
        "table_background-color_safety-orange",
        "table_background-color_purple",
        "table_background-color_yellow",
        "table_background-color_slimy-green",
        "table_color_black",
        "table_color_white",
        "table_color_blue",
        "table_color_purple",
        "table_color_red",
        "table_color_slimy-green",
        "table_color_yellow",
        "table_color_sepia"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.pursueShoppingLink, className);
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(icon, className);
      }
    }

    // For each icon of font.deleteProductIcons.
    for (let icon of font.deleteProductIcons) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(icon, className);
      }
    }

    // If the DOM elements exist.
    if (font.total) {
      // For each className of font.totalBorderColorClassNames.
      for (let className of font.totalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.total, className);
      }
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // For each className of font.linkBackgroundColorClassNames.
      for (let className of font.linkBackgroundColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(image, className);
      }
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // For each className of font.cardColorClassNames.
      for (let className of font.cardColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each adminPreview of font.adminPreviews.
    for (let adminPreview of font.adminPreviews) {
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
      // For each className of font.adminPreviewColorClassNames.
      for (let className of font.adminPreviewColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(adminPreview, className);
      }
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // For each className of font.adminDetailColorClassNames.
      for (let className of font.adminDetailColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(adminDetail, className);
      }
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
      tools.removeClassesFromElement(
        input,
        "form-field__input_color_black",
        "form-field__input_color_white",
        "form-field__input_color_safety-orange",
        "form-field__input_color_yellow",
        "form-field__input_color_blue",
        "form-field__input_color_yellow-jamaica",
        "form-field__input_color_blue-golden-sate-warriors",
        "form-field__input_color_yellow-flash",
        "form-field__input_color_slimy-green-forest"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.contactEmailLink, className);
      }
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.loginButton, className);
      }
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.forgottenPasswordLink, className);
      }
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.registerLink, className);
      }
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.mobileLoginLink, className);
      }
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.mobileLogoutLink, className);
      }
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.mobileRegistrationLink, className);
      }
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopLoginLink, className);
      }
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopLogoutLink, className);
      }
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.desktopRegistrationLink, className);
      }
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.registrationButton, className);
      }
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.termsOfServiceLink, className);
      }
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // For each className of font.errorMessageColorClassNames.
      for (let className of font.errorMessageColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(errorMessage, className);
      }
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // For each className of font.productAvailabilityColorClassNames.
      for (let className of font.productAvailabilityColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(element, className);
      }
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // For each className of font.cardAddressColorClassNames.
      for (let className of font.cardAddressColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // For each className of font.iconColorClassNames.
      for (let className of font.iconColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(icon, className);
      }
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // For each className of font.linkClassNames.
      for (let className of font.linkClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(link, className);
      }
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // For each className of font.cardPurchaseColorClassNames.
      for (let className of font.cardPurchaseColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(card, className);
      }
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // For each className of font.statusColorClassNames.
      for (let className of font.statusColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(element, className);
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // For each className of font.purchaseTotalBorderColorClassNames.
      for (let className of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseTotal, className);
      }
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // For each className of font.purchaseTotalBorderColorClassNames.
      for (let className of font.purchaseTotalBorderColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.purchaseTotalReminder, className);
      }
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // For each className of font.linkColorClassNames.
      for (let className of font.linkColorClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.addNewAddressLink, className);
      }
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(form.contactButton, className);
      }
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // For each className of font.buttonClassNames.
      for (let className of font.buttonClassNames) {
        // We call tools.removeClassFromElements() in order to remove a className from one or many elements.
        tools.removeClassFromElements(
          className,
          form.purchaseConfirmAddressesButton,
          form.purchaseConfirmDeliveryModeButton,
          form.purchaseConfirmButton
        );
      }
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // For each className of font.customerServiceQuestionsClassNames.
      for (let className of font.customerServiceQuestionsClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(question, className);
      }
    }

    // If the DOM element exist.
    if (font.userEmail) {
      // For each className of font.userEmailClassNames.
      for (let className of font.userEmailClassNames) {
        // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
        tools.removeClassesFromElement(font.userEmail, className);
      }
    }
  },
  /**
   * Methot that remove all the CSS classes form the body element.
   * @return {void}
   */
  removeAllClassesFromBody: function () {
    // console.log("font.removeAllClassesFromBody()");

    // We call tools.removeClassesFromElement() in order to remove one or many classNames from the element.
    tools.removeClassesFromElement(
      mode.body,
      "dark",
      "light",
      "knick",
      "lakers",
      "mario",
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
    // console.log("font.switchToKnickTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "knick");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.knickSwitchSlider, font.colors.blue);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_safety-orange"
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_safety-orange",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_blue",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_safety-orange");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_blue");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_blue");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_blue",
      "circle_color_safety-orange"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_safety-orange"
    );

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_blue");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_blue"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_blue"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.reactivateUserAccountLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.reactivateUserAccountLink,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_safety-orange",
        "page__link_color_blue"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_blue"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_safety-orange",
        "table_color_blue"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_safety-orange"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_safety-orange");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_safety-orange");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_safety-orange");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_safety-orange"
      );
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_blue");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_safety-orange");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_safety-orange");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_color_safety-orange"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        adminDetail,
        "admin-detail_color_safety-orange"
      );
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_safety-orange");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.registerLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_safety-orange"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        errorMessage,
        "error-message_color_safety-orange"
      );
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_safety-orange");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_safety-orange");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_safety-orange");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_safety-orange");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_safety-orange");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_safety-orange"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_safety-orange",
        "page__button_color_blue"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the lakers theme.
   * @return {void}
   */
  switchToLakersTheme: function () {
    // console.log("font.switchToLakersTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "lakers");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.lakersSwitchSlider, font.colors.purple);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_yellow");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_yellow",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_purple",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_yellow");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_purple");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_purple");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_purple");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_purple",
      "circle_color_yellow"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_yellow");

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_purple");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_purple");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_purple"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_purple"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_purple"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_purple"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_purple"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_yellow",
        "page__link_color_purple"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_yellow",
        "table_color_purple"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_yellow"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_yellow");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_yellow");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_yellow");
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_purple");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_yellow");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_yellow");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminPreview, "admin-preview_color_yellow");
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_yellow");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_yellow");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_yellow");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_purple"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_purple"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_purple"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_yellow"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_yellow");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_yellow");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_yellow");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_yellow");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_yellow");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_yellow",
        "page__button_color_purple"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the mario theme.
   * @return {void}
   */
  switchToMarioTheme: function () {
    // console.log("font.switchToMarioTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "mario");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.spiderManSwitchSlider, font.colors.red);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_blue");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_blue",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_red",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_red");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_red");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_red",
      "circle_color_safety-blue"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_blue");

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_red");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_red"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_red"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_blue",
        "page__link_color_red"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_blue",
        "table_color_red"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_blue"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_blue");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_blue");
    }

    // If the DOM elements exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_blue");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_blue");
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_red");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_blue");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminPreview, "admin-preview_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_blue");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_blue");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.contactEmailLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.mobileLogoutLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_blue"
      );
    }
    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLogoutLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_blue"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_blue");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_blue");
    }
    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_blue");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_blue");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_blue");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_blue");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_blue",
        "page__button_color_red"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the jamaica theme.
   * @return {void}
   */
  switchToJamaicaTheme: function () {
    // console.log("font.switchToJamaicaTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "jamaica");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(
      font.jamaicaSwitchSlider,
      font.colors.slimyGreen
    );

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_yellow");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_yellow",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_slimy-green",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_yellow");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.headerTitle,
      "header__title_color_slimy-green"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.headerCartIcon,
      "header__icon_color_slimy-green"
    );

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_slimy-green");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_slimy-green",
      "circle_color_yellow"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_yellow");

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_slimy-green");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_slimy-green");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_slimy-green"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_slimy-green"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_slimy-green"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_slimy-green"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_yellow",
        "page__link_color_slimy-green"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_yellow",
        "table_color_slimy-green"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_yellow"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_yellow");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_yellow");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_yellow");
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_slimy-green");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_yellow");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_yellow");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminPreview, "admin-preview_color_yellow");
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_yellow");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        input,
        "form-field__input_color_yellow-jamaica"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_yellow");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_yellow"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_yellow");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_yellow");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_yellow");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_yellow");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_yellow");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_yellow",
        "page__button_color_slimy-green"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the golden-state-warriors theme.
   * @return {void}
   */
  switchToGoldenStateWarriorsTheme: function () {
    // console.log("font.switchToGoldenStateWarriorsTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "golden-state-warriors");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(
      font.goldenStateWarriorsSwitchSlider,
      font.colors.yellow
    );

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_blue");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_blue",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_yellow",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_blue");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_yellow");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_yellow");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_yellow");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_yellow",
      "circle_color_blue"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_blue");

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_yellow");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_yellow");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_yellow"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_yellow"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_yellow"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_yellow"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_blue",
        "page__link_color_yellow"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_blue",
        "table_color_yellow"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_blue"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_blue");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_blue");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_blue");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_blue");
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_yellow");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_blue");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminPreview, "admin-preview_color_blue");
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_blue");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        input,
        "form-field__input_color_blue-golden-sate-warriors"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.contactEmailLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.mobileLoginLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.mobileLogoutLink, "page__link_color_blue");
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_blue"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_blue"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_blue");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_blue");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_blue");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_blue");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_blue");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_blue");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_blue"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_blue",
        "page__button_color_yellow"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the flash theme.
   * @return {void}
   */
  switchToFlashTheme: function () {
    // console.log("font.switchToFlashTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "flash");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.flashSwitchSlider, font.colors.red);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.header, "header_background-color_yellow");

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_yellow",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_red",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_yellow");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_red");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_red");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_red",
      "circle_color_yellow"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.footer, "footer_background-color_yellow");

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_red");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_red");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_red"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_red"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_red"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_yellow",
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_yellow",
        "page__link_color_red"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_yellow",
        "table_color_red"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_yellow"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_yellow");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // If the DOM element exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_yellow");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_background-color_yellow");
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_red");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_yellow");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_yellow");
    }
    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminPreview, "admin-preview_color_yellow");
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_yellow");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(input, "form-field__input_color_yellow-flash");
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.registerLink, "page__link_color_yellow");
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLoginLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.desktopLogoutLink, "page__link_color_red");
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_red"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_yellow"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(errorMessage, "error-message_color_yellow");
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_yellow");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_yellow");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_yellow");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_red"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_yellow");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_yellow");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_yellow"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.contactButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
    }

    // If form.purchaseConfirmAddressesButton or form.purchaseConfirmDeliveryModeButton or form.purchaseConfirmButton exits.
    if (
      form.purchaseConfirmAddressesButton ||
      form.purchaseConfirmDeliveryModeButton ||
      form.purchaseConfirmButton
    ) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_yellow",
        "page__button_color_red"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
  /**
   * Metho that switch to the forest theme.
   * @return {void}
   */
  switchToForestTheme: function () {
    // console.log("font.switchToForestTheme()");

    // We call font.removeAllClassesFromBody() to remove all the CSS classes from the body.
    font.removeAllClassesFromBody();
    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(mode.body, "forest");

    // We call tools.setColorToBeforeProperty() to set a new color for the before property on the element.
    tools.setColorToBeforeProperty(font.forestSwitchSlider, font.colors.sepia);

    // We call font.removeClassesFromElements() in order to remove multiple classNames from all the elements.
    font.removeClassesFromElements();

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.header,
      "header_background-color_slimy-green"
    );

    // If the DOM elements exist.
    if (font.burgerMenus) {
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "burger-menu_background-color_slimy-green",
        font.openingButton,
        font.closingButton
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "header__icon_color_sepia",
        font.burgerMenuImageBar,
        font.burgerMenuImageUncheckMark
      );
    }

    // For each link of font.menuNavMobileLinks.
    for (let link of font.menuNavMobileLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-mobile__item_color_slimy-green");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerTitle, "header__title_color_sepia");

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(font.headerCartIcon, "header__icon_color_sepia");

    // For each link of font.menuNavDesktopLinks.
    for (let link of font.menuNavDesktopLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "nav-desktop__item_color_sepia");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.circle,
      "circle_background-color_sepia",
      "circle_color_slimy-green"
    );

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.footer,
      "footer_background-color_slimy-green"
    );

    // For each title of font.footerTitles.
    for (let title of font.footerTitles) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(title, "footer__title_color_sepia");
    }

    // For each link of font.footerTitles.
    for (let link of font.footerLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_sepia");
    }

    // We call tools.addClassesToElement() in order to add one or many classNames to the element.
    tools.addClassesToElement(
      font.copyright,
      "block-footer__copyright_color_sepia"
    );

    // For each button of font.searchButtons.
    for (let button of font.searchButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // For each button of font.createButtons.
    for (let button of font.createButtons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        button,
        "page__button_background-color_white",
        "page__button_color_sepia"
      );
    }

    // For each link of font.createLinks.
    for (let link of font.createLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_white",
        "page__link_color_sepia"
      );
    }

    // For each link of font.reactivateUserAccountLinks.
    for (let link of font.reactivateUserAccountLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // For each link of font.addToCartLinks.
    for (let link of font.addToCartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.purchaseLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseLink,
        "page__link_background-color_slimy-green",
        "page__link_color_sepia"
      );
    }

    // For each link of font.detailLinks.
    for (let link of font.detailLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_blue",
        "page__link_color_white"
      );
    }

    // For each table of font.tables.
    for (let table of font.tables) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        table,
        "table_background-color_slimy-green",
        "table_color_sepia"
      );
    }

    // If the DOM elements exist.
    if (font.pursueShoppingLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.pursueShoppingLink,
        "page__link_color_slimy-green"
      );
      // For each icon of font.deleteProductIcons.
      for (let icon of font.deleteProductIcons) {
        // We call tools.addClassesToElement() in order to add one or many classNames to the element.
        tools.addClassesToElement(icon, "page__icon_color_slimy-green");
      }
    }

    // For each icon of mode.quantityIcons.
    for (let icon of mode.quantityIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_slimy-green");
    }

    // If the DOM elements exist.
    if (font.total) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(font.total, "total_border-color_slimy-green");
    }

    // For each link of font.cartLinks.
    for (let link of font.cartLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_slimy-green"
      );
    }

    // For each image of font.cartButtonImages.
    for (let image of font.cartButtonImages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(image, "page__icon_color_sepia");
    }

    // For each card of font.cards.
    for (let card of font.cards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card_color_slimy-green");
    }

    // For each link of font.cardsLinks.
    for (let link of font.cardsLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_slimy-green");
    }

    // For each adminPreview of font.cards.
    for (let adminPreview of font.adminPreviews) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        adminPreview,
        "admin-preview_color_slimy-green"
      );
    }

    // For each adminPreview of font.cards.
    for (let adminDetail of font.adminDetails) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(adminDetail, "admin-detail_color_slimy-green");
    }

    // For each input of mode.inputs.
    for (let input of mode.inputs) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        input,
        "form-field__input_color_slimy-green-forest"
      );
    }

    // If the DOM element exist.
    if (font.contactEmailLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.contactEmailLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.registrationButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.registrationButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // If the DOM element exist.
    if (form.loginButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.loginButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.forgottenPasswordLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.forgottenPasswordLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.registerLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.registerLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLoginLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileLogoutLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.mobileRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.mobileRegistrationLink,
        "page__link_color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.desktopLoginLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLoginLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.desktopLogoutLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopLogoutLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.desktopRegistrationLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.desktopRegistrationLink,
        "page__link_color_sepia"
      );
    }

    // If the DOM element exist.
    if (font.termsOfServiceLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.termsOfServiceLink,
        "page__link_color_slimy-green"
      );
    }

    // For each errorMessage of font.errorMessages.
    for (let errorMessage of font.errorMessages) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        errorMessage,
        "error-message_color_slimy-green"
      );
    }

    // For each element of font.productAviabilityElements.
    for (let element of font.productAviabilityElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "availability_color_slimy-green");
    }

    // For each card of font.addressCards.
    for (let card of font.addressCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-address_color_slimy-green");
    }

    // For each icon of font.checkedIcons.
    for (let icon of font.checkedIcons) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(icon, "page__icon_color_slimy-green");
    }

    // For each link of font.deleteLinks.
    for (let link of font.deleteLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        link,
        "page__link_background-color_red",
        "page__link_color_white"
      );
    }

    // For each link of font.textLinks.
    for (let link of font.textLinks) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(link, "page__link_color_white");
    }

    // For each card of font.purchaseCards.
    for (let card of font.purchaseCards) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(card, "card-purchase_color_slimy-green");
    }

    // For each element of font.purchaseStatusElements.
    for (let element of font.purchaseStatusElements) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(element, "status_color_sepia");
    }

    // If the DOM element exist.
    if (font.purchaseTotal) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotal,
        "purchase-total_border-color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (font.purchaseTotalReminder) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        font.purchaseTotalReminder,
        "purchase-total_border-color_slimy-green"
      );
    }

    // If the DOM element exist.
    if (form.addNewAddressLink) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.addNewAddressLink,
        "page__link_color_white"
      );
    }

    // If the DOM element exist.
    if (form.contactButton) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
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
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmAddressesButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmDeliveryModeButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(
        form.purchaseConfirmButton,
        "page__button_background-color_slimy-green",
        "page__button_color_sepia"
      );
    }

    // For each question of font.customerServiceQuestions.
    for (let question of font.customerServiceQuestions) {
      // We call tools.addClassesToElement() in order to add one or many classNames to the element.
      tools.addClassesToElement(question, "term__question_color_white");
    }
  },
};
