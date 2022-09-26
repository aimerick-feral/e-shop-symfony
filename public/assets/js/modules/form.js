const form = {
  // Proprietes availables in the object.
  colors: {},
  // ========================== FORMS ===========================
  // User
  registrationForm: null,
  loginForm: null,
  userProfileForm: null,
  contactForm: null,
  adminCreateUserForm: null,
  adminUpdateUserForm: null,
  searchUserForm: null,
  requestPasswordForm: null,
  resetPasswordForm: null,
  // Category
  adminCreateCategoryForm: null,
  adminUpdateCategoryForm: null,
  searchCategoryForm: null,
  // Product
  adminCreateProductForm: null,
  adminUpdateProductForm: null,
  searchProductForm: null,
  // Address
  userCreateAddressForm: null,
  userUpdateAddressForm: null,
  adminCreateAddressForm: null,
  adminUpdateAddressForm: null,
  searchAddressForm: null,
  // Purchase
  adminCreatePurchaseForm: null,
  adminUpdatePurchaseForm: null,
  searchPurchaseForm: null,
  purchaseForm: null,
  // DeliveryMode
  adminCreateDeliveryModeForm: null,
  adminUpdateDeliveryModeForm: null,
  searchDeliveryModeForm: null,
  // ========================= FIELDS ===========================
  uploadFileField: null,
  purchaseBillingAddressField: null,
  purchaseDeliveryAddressField: null,
  purchaseDeliveryModeField: null,
  purchaseCheckoutMethodField: null,
  purchaseTermsOfSaleField: null,
  // ========================== INPUTS ==========================
  // User, Product and Contact
  inputs: [],
  fileInput: null,
  // User
  userCivilityTitleProfileInputs: [],
  userEmailInput: null,
  userPasswordInput: null,
  userCivilityTitleInputs: [],
  userCivilityTitleManInput: null,
  userCivilityTitleWomanInput: null,
  userGenderManLabel: null,
  userGenderWomanLabel: null,
  userFirstNameInput: null,
  userLastNameInput: null,
  userRolesInputs: [],
  userTermsOfUseInput: null,
  // Contact
  contactSubjectInputs: [],
  phoneNumberInput: null,
  messageInput: null,
  // Category
  categoryNameInput: null,
  // Product
  productNameInput: null,
  productPriceInput: null,
  productDescriptionInput: null,
  productAvailabilityInputs: [],
  productCategoryInputs: [],
  productAvailableInputs: [],
  productUnavailableInputs: [],
  // Address
  addressStreetNumberInput: null,
  addressStreetNameInput: null,
  addressZipCodeInput: null,
  addressCityInput: null,
  addressCountryInput: null,
  // Purchase
  purchaseProductsInputs: [],
  purchaseReferenceInput: null,
  purchaseStatusInputs: [],
  purchaseStatusPaidInputs: [],
  purchaseStatusInProgressInputs: [],
  purchaseStatusSendInputs: [],
  purchaseStatusDeliverInputs: [],
  purchaseStatusAnnulInputs: [],
  purchaseBillingAddressInputs: [],
  purchaseDeliveryAddressInputs: [],
  purchaseDeliveryModeInputs: [],
  purchaseCheckoutMethodInputs: [],
  termsOfSaleInput: null,
  purchasePendingCheckoutInput: null,
  // DeliveryMode
  deliveryModeNameInput: null,
  deliveryModePriceInput: null,
  deliveryModeMinPurchaseAmountForFreeDelivery: null,
  deliveryModeDescriptionInput: null,
  // =========================== REGEX ==========================
  // User
  regexMatchEmail: null,
  regexMatchAtLeastHeightCharacters: null,
  regexMatchAtLeastTweleCharacters: null,
  regexMatchAtLeastOneLowercase: null,
  regexMatchAtLeastOneUppercase: null,
  regexMatchAtLeastOneNumericCharacter: null,
  regexMatchAtLeastOneSpecialCharacter: null,
  regexMatchTenNumericCharacters: null,
  // Contact
  regexMatchStartBy06Or07: null,
  // Category
  //! START : regex not used
  regexMatchAlphabeticalCharactersWithOrWithoutDiacriticalMarks: null,
  regexMatchAccentedAlphabeticalCharacters: null,
  regexMatchAlphabeticalCharacters: null,
  regexMatchAlphabeticalCharactersAndSpace: null,
  regexMatchAlphabeticalCharactersWithHyphen: null,
  //! END : regex not used
  // Product
  regexMatchNumber: null,
  // Address
  regexMatchFiveNumericCharacters: null,
  // ======================= ERROR NUMBER =======================
  numberOfErrors: null,
  // ====================== ERROR MESSAGES ======================
  // User
  errorMessageEmailEmpty: null,
  errorMessageEmailValidity: null,
  errorMessagePasswordEmpty: null,
  errorMessagePasswordLength: null,
  errorMessagePasswordLowercase: null,
  errorMessagePasswordUppercase: null,
  errorMessagePasswordNumber: null,
  errorMessagePasswordSpecialCharacter: null,
  errorMessageGenderNotChecked: null,
  errorMessageFileMimeType: null,
  errorMessageFileSize: null,
  errorMessageFirstNameEmpty: null,
  errorMessageLastNameEmpty: null,
  errorMessageTermsOfUseNotChecked: null,
  // Contact
  errorMessageContactSubjectNotChecked: null,
  errorMessagePhoneNumberEmpty: null,
  errorMessagePhoneNumberValidity: null,
  errorMessageEmpty: null,
  // Category
  errorMessageCategoryNameEmpty: null,
  errorMessageCategoryNameValidity: null,
  errorMessageProductCategoryNotChecked: null,
  // Product
  errorMessageProductNameEmpty: null,
  errorMessageProductNameValidity: null,
  errorMessageCategoryProductNotChecked: null,
  errorMessageProductPriceEmpty: null,
  errorMessageProductPriceValidity: null,
  errorMessageProductDescriptionEmpty: null,
  errorMessageProductAvailabilityNotChecked: null,
  // Address
  errorMessageStreetNumberEmpty: null,
  errorMessageStreetNumberValidity: null,
  errorMessageStreetNameEmpty: null,
  errorMessageStreetNameValidity: null,
  errorMessageZipCodeEmpty: null,
  errorMessageZipCodeValidity: null,
  errorMessageCityEmpty: null,
  errorMessageCityValidity: null,
  errorMessageCountryEmpty: null,
  errorMessageCountryValidity: null,
  // Purchase
  errorMessagePurchaseProductsNotChecked: null,
  errorMessageReferenceEmpty: null,
  errorMessageReferenceValidity: null,
  errorMessagePurchaseStatusNotChecked: null,
  errorMessagePurchaseBillingAddressNotChecked: null,
  errorMessagePurchaseDeliveryAddressNotChecked: null,
  errorMessagePurchasePaymentMethodNotChecked: null,
  errorMessagePurchaseDeliveryModeNotChecked: null,
  // DeliveryMode
  errorMessageDeliveryModeNameEmpty: null,
  errorMessageDeliveryModeNameValidity: null,
  errorMessageDeliveryModePriceEmpty: null,
  errorMessageDeliveryModePriceValidity: null,
  errorMessageDeliveryModeMinCartAmountForFreeDeliveryEmpty: null,
  errorMessageDeliveryModeMinCartAmountForFreeDeliveryValidity: null,
  errorMessageDeliveryModeDescriptionEmpty: null,
  errorMessagePurchaseTermsOfSaleNotChecked: null,
  // ========================== BUTTONS =========================
  submitButtons: [],
  // User
  registrationButton: null,
  loginButton: null,
  modifyMyUserProfileButton: null,
  updateMyUserProfileButton: null,
  searchUserButton: null,
  adminCreateUserButton: null,
  adminUpdateUserButton: null,
  requestPasswordButton: null,
  resetPasswordButton: null,
  // Contact
  contactButton: null,
  // Category
  adminCreateCategoryButton: null,
  adminUpdateCategoryButton: null,
  searchCategoryButton: null,
  // Product.
  adminCreateProductButton: null,
  adminUpdateProductButton: null,
  searchProductButton: null,
  // Address
  userCreateAddressButton: null,
  userUpdateAdressButton: null,
  adminCreateAddressButton: null,
  adminUpdateAddressButton: null,
  searchAddressButton: null,
  // Purchase
  adminCreatePurchaseButton: null,
  adminUpdatePurchaseButton: null,
  searchPurchaseButton: null,
  purchaseConfirmAddressesButton: null,
  purchaseConfirmDeliveryModeButton: null,
  purchaseConfirmButton: null,
  // DeliveryMode
  adminCreateDeliveryModeButton: null,
  adminUpdateDeliveryModeButton: null,
  searchDeliveryModeButton: null,
  // =========================== LINKS ==========================
  // User
  deleteMyUserPictureLink: null,
  deleteMyUserAccountLink: null,
  // Address
  createAddressLink: null,
  addNewAddressLink: null,
  // ====================== PURCHASE STEPS ======================
  purchaseSteps: [],
  addressStep: null,
  addressStepIconChecked: null,
  deliveryModeStep: null,
  deliveryModeStepIconChecked: null,
  paymentMethodStep: null,
  paypalButtonContainer: null,
  paypalButton: null,
  init: function () {
    console.log("Hello world, I'm form.js 📝");

    // All the colors of the app set in the CSS.
    // We use getComputedStyle(document.documentElement).getPropertyValue() to get the value of our CSS variables.
    form.colors = {
      // We set the green color to the outline of the input in case of absence of error.
      green: getComputedStyle(document.documentElement).getPropertyValue(
        "--green"
      ),
      // We set the red color to the outline of the input in case of error.
      red: getComputedStyle(document.documentElement).getPropertyValue("--red"),
    };

    // We get the DOM elements that we need to interacte with.

    // ==================== FORMS ==================== //

    // User
    form.registrationForm = document.getElementById("registration-form");
    form.loginForm = document.getElementById("login-form");
    form.userProfileForm = document.getElementById("user-profile-form");
    form.contactForm = document.getElementById("contact-form");
    form.adminCreateUserForm = document.getElementById(
      "admin-create-user-form"
    );
    form.adminUpdateUserForm = document.getElementById(
      "admin-update-user-form"
    );
    form.searchUserForm = document.getElementById("search-user-form");
    form.requestPasswordForm = document.getElementById("request-password-form");
    form.resetPasswordForm = document.getElementById("reset-password-form");

    // Category
    form.adminCreateCategoryForm = document.getElementById(
      "admin-create-category-form"
    );
    form.adminUpdateCategoryForm = document.getElementById(
      "admin-update-category-form"
    );
    form.searchCategoryForm = document.getElementById("search-category-form");

    // Product
    form.adminCreateProductForm = document.getElementById(
      "admin-create-product-form"
    );
    form.adminUpdateProductForm = document.getElementById(
      "admin-update-product-form"
    );
    form.searchProductForm = document.getElementById("search-product-form");

    // Address
    form.userCreateAddressForm = document.getElementById(
      "user-create-address-form"
    );
    form.userUpdateAddressForm = document.getElementById(
      "user-update-address-form"
    );
    form.adminCreateAddressForm = document.getElementById(
      "admin-create-address-form"
    );
    form.adminUpdateAddressForm = document.getElementById(
      "admin-update-address-form"
    );
    form.searchAddressForm = document.getElementById("search-address-form");

    // Purchase
    form.searchPurchaseForm = document.getElementById("search-purchase-form");
    form.adminCreatePurchaseForm = document.getElementById(
      "admin-create-purchase-form"
    );
    form.adminUpdatePurchaseForm = document.getElementById(
      "admin-update-purchase-form"
    );
    form.purchaseForm = document.getElementById("purchase-form");

    // DeliveryMode
    form.adminCreateDeliveryModeForm = document.getElementById(
      "admin-create-delivery-mode-form"
    );
    form.adminUpdateDeliveryModeForm = document.getElementById(
      "admin-update-delivery-mode-form"
    );
    form.searchDeliveryModeForm = document.getElementById(
      "search-delivery-mode-form"
    );

    // ==================== FIELDS ====================

    form.uploadFileField = document.querySelector(".form-field-upload-file");
    form.purchaseBillingAddressField = document.querySelector(
      ".form-field-purchase-billing-address"
    );
    form.purchaseDeliveryAddressField = document.querySelector(
      ".form-field-purchase-delivery-address"
    );
    form.purchaseDeliveryModeField = document.querySelector(
      ".form-field-purchase-delivery-mode"
    );
    form.purchaseCheckoutMethodField = document.querySelector(
      ".form-field-purchase-checkout-method"
    );
    form.purchaseTermsOfSaleField = document.querySelector(
      ".form-field-purchase-terms-of-sale"
    );

    // ==================== INPUTS ====================

    // All the form's inputs.
    form.inputs = Array.from(document.querySelectorAll(".form-field__input"));
    // Foreach input of form.inputs.
    for (let input of form.inputs) {
      // We add a listener and a handler on the click event.
      input.addEventListener("click", form.handleAddInputFocusWithin);
      // We add a listener and a handler on the blur event.
      input.addEventListener("blur", form.handleRemoveInputsFocusWithin);
    }

    // All the inputs type of radio related to the user civility title on the profile page.
    form.userCivilityTitleProfileInputs = document.querySelectorAll(
      ".form-field__input-user-civility-title-profile"
    );
    // For each input of form.userCivilityTitleProfileInputs.
    for (let input of form.userCivilityTitleProfileInputs) {
      // We get the label related to the input.
      let label = input.nextElementSibling;
      // We call form.displayNoneInputNotChecked with the elements in argument.
      form.displayNoneInputNotChecked(input, label);
    }

    // User, Product and Contact
    form.fileInput = document.querySelector(".form-field__input-file");

    // Contact
    form.contactSubjectInputs = document.querySelectorAll(
      ".form-field__input-contact-subject"
    );
    // If the DOM elements exist.
    if (form.contactSubjectInputs) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(form.contactSubjectInputs);
    }
    form.phoneNumberInput = document.querySelector(
      ".form-field__input-phone-number"
    );
    form.messageInput = document.querySelector(".form-field__input-message");

    // User
    form.userEmailInput = document.querySelector(
      ".form-field__input-user-email"
    );
    form.userPasswordInput = document.querySelector(
      ".form-field__input-user-password"
    );
    form.userCivilityTitleInputs = document.querySelectorAll(
      ".form-field__input-user-civility-title"
    );
    form.userCivilityTitleManInput = document.querySelector(
      ".form-field__input-user-civility-title-man"
    );
    // If the DOM element exist.
    if (form.userCivilityTitleManInput) {
      // We get the label related to form.userCivilityTitleManInput.
      form.userGenderManLabel =
        form.userCivilityTitleManInput.nextElementSibling;
    }
    form.userCivilityTitleWomanInput = document.querySelector(
      ".form-field__input-user-civility-title-woman"
    );
    // If the DOM element exist.
    if (form.userCivilityTitleWomanInput) {
      // We get the label related to form.userCivilityTitleWomanInput.
      form.userGenderWomanLabel =
        form.userCivilityTitleWomanInput.nextElementSibling;
    }
    form.userFirstNameInput = document.querySelector(
      ".form-field__input-user-first-name"
    );
    form.userLastNameInput = document.querySelector(
      ".form-field__input-user-last-name"
    );
    form.userRolesInputs = document.querySelectorAll(
      ".form-field__roles-input"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.userRolesInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(form.userRolesInputs);
    }
    form.userTermsOfUseInput = document.querySelector(
      ".form-field__input-terms-of-use"
    );
    // If the DOM elements exist.
    if (form.userTermsOfUseInput) {
      // We get the label related to form.userTermsOfUseInput.
      label = form.userTermsOfUseInput.nextElementSibling;
      label.setAttribute("for", "user-terms-of-use-input");
    }

    // Category
    form.categoryNameInput = document.querySelector(
      ".form-field__input-category-name"
    );

    // Product
    form.productNameInput = document.querySelector(
      ".form-field__input-product-name"
    );
    form.productPriceInput = document.querySelector(
      ".form-field__input-product-price"
    );
    form.productDescriptionInput = document.querySelector(
      ".form-field__input-product-description"
    );
    form.productCategoryInputs = document.querySelectorAll(
      ".form-field__input-product-category"
    );
    // If the DOM elements exist.
    if (form.productCategoryInputs) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.productCategoryInputs
      );
    }
    form.productAvailabilityInputs = document.querySelectorAll(
      ".form-field__input-product-availability"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.productAvailabilityInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.productAvailabilityInputs
      );
    }
    // For each input of form.productAvailabilityInputs.
    for (let input of form.productAvailabilityInputs) {
      // We get the label related to form.productAvailabilityInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(label, "availability");
    }
    form.productAvailableInputs = document.querySelectorAll(
      ".form-field__input-product-availability-available"
    );
    // For each input of form.productAvailableInputs.
    for (let input of form.productAvailableInputs) {
      // We get the label related to form.productAvailableInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "available",
        "availability__avialable_color_green"
      );
    }
    form.productUnavailableInputs = document.querySelectorAll(
      ".form-field__input-product-availability-unavailable"
    );
    // For each input of form.productUnavailableInputs.
    for (let input of form.productUnavailableInputs) {
      // We get the label related to form.productUnavailableInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "unavailable",
        "availability__unavailable_color_red"
      );
    }

    // Address
    form.addressStreetNumberInput = document.querySelector(
      ".form-field__input-address-street-number"
    );
    form.addressStreetNameInput = document.querySelector(
      ".form-field__input-address-street-name"
    );
    form.addressZipCodeInput = document.querySelector(
      ".form-field__input-address-zip-code"
    );
    form.addressCityInput = document.querySelector(
      ".form-field__input-address-city"
    );
    form.addressCountryInput = document.querySelector(
      ".form-field__input-address-country"
    );

    // Purchase
    form.purchaseReferenceInput = document.querySelector(
      ".form-field__input-purchase-reference"
    );
    form.purchaseStatusInputs = document.querySelectorAll(
      ".form-field__input-purchase-status"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.purchaseStatusInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(form.purchaseStatusInputs);
    }
    // For each input of form.purchaseStatusInputs.
    for (let input of form.purchaseStatusInputs) {
      // We get the label related to form.purchaseStatusInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(label, "status");
    }
    form.purchaseStatusPaidInputs = document.querySelectorAll(
      ".form-field__input-purchase-status-paid"
    );
    // For each input of form.purchaseStatusPaidInputs.
    for (let input of form.purchaseStatusPaidInputs) {
      // We get the label related to form.purchaseStatusPaidInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "status__paid",
        "status__paid_color_green"
      );
    }
    form.purchaseStatusInProgressInputs = document.querySelectorAll(
      ".form-field__input-purchase-status-in-progress"
    );
    // For each input of form.purchaseStatusInProgressInputs.
    for (let input of form.purchaseStatusInProgressInputs) {
      // We get the label related to form.purchaseStatusInProgressInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "status__in-progress",
        "status__in-progress_color_safety-orange"
      );
    }
    form.purchaseStatusSendInputs = document.querySelectorAll(
      ".form-field__input-purchase-status-send"
    );
    // For each input of form.purchaseStatusSendInputs.
    for (let input of form.purchaseStatusSendInputs) {
      // We get the label related to form.purchaseStatusSendInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "status__send",
        "status__send_color_purple"
      );
    }
    form.purchaseStatusDeliverInputs = document.querySelectorAll(
      ".form-field__input-purchase-status-deliver"
    );
    // For each input of form.purchaseStatusDeliverInputs.
    for (let input of form.purchaseStatusDeliverInputs) {
      // We get the label related to form.purchaseStatusDeliverInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "status__deliver",
        "status__deliver_color_slimy-green"
      );
    }
    form.purchaseStatusAnnulInputs = document.querySelectorAll(
      ".form-field__input-purchase-status-annul"
    );
    // For each input of form.purchaseStatusAnnulInputs.
    for (let input of form.purchaseStatusAnnulInputs) {
      // We get the label related to form.purchaseStatusAnnulInputs.
      label = input.nextElementSibling;
      // We call tools.addClassesToElement() in order to add multiple className to the element.
      tools.addClassesToElement(
        label,
        "status__annul",
        "status__annul_color_red"
      );
    }
    form.purchaseBillingAddressInputs = document.querySelectorAll(
      ".form-field__input-purchase-billing-address"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.purchaseBillingAddressInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.purchaseBillingAddressInputs
      );
    }
    form.purchaseDeliveryAddressInputs = document.querySelectorAll(
      ".form-field__input-purchase-delivery-address"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.purchaseDeliveryAddressInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.purchaseDeliveryAddressInputs
      );
    }
    form.purchaseDeliveryModeInputs = document.querySelectorAll(
      ".form-field__input-purchase-delivery-mode"
    );
    // For each input of form.purchaseDeliveryModeInputs.
    for (let input of form.purchaseDeliveryModeInputs) {
      // We add a listener and a handler on the click event on each of the input.
      input.addEventListener("input", purchase.handleDeliveryModeInputs);
    }
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.purchaseDeliveryModeInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.purchaseDeliveryModeInputs
      );
      // We call form.createImgTagForDeliveryModePicture() to create a HTML img tag before each delivery mode field label.
      form.createImgTagForDeliveryModePicture();
    }
    form.purchaseCheckoutMethodInputs = document.querySelectorAll(
      ".form-field__input-purchase-checkout-method"
    );
    // If the length of the DOM elements is superior to 0 that mean the elements are display on the current page.
    if (form.purchaseCheckoutMethodInputs.length > 0) {
      // We call the form.createDivForEachInputAndLabelOfCheckField() to create a div with a form-field class for each pair of input and label.
      form.createDivForEachInputAndLabelOfCheckField(
        form.purchaseCheckoutMethodInputs
      );
      // We call form.createImgTagForPaymentMethodPicture() to create a HTML img tag before each payment method field label.
      form.createImgTagForPaymentMethodPicture();
    }

    // DeliveryMode
    form.deliveryModeNameInput = document.querySelector(
      ".form-field__input-delivery-mode-name"
    );
    form.deliveryModePriceInput = document.querySelector(
      ".form-field__input-delivery-mode-price"
    );
    form.deliveryModeMinPurchaseAmountForFreeDelivery = document.querySelector(
      ".form-field__input-delivery-mode-min-purchase-amount-for-free-delivery"
    );
    form.deliveryModeDescriptionInput = document.querySelector(
      ".form-field__input-delivery-mode-description"
    );
    form.termsOfSaleInput = document.querySelector(
      ".form-field__input-terms-of-sale"
    );
    // If the DOM element exist.
    if (form.termsOfSaleInput) {
      // We get the label related to form.userTermsOfUseInput.
      label = form.termsOfSaleInput.nextElementSibling;
      label.setAttribute("for", "purchase-terms-of-sale-input");
    }
    form.purchasePendingCheckoutInput = document.querySelector(
      ".form-field__pending-checkout-input"
    );
    // If the DOM element exist.
    if (form.purchasePendingCheckoutInput) {
      // We call tools.addDisplayNone() in order to add the display-none class to one or many elements.
      tools.addDisplayNone(
        form.purchasePendingCheckoutInput.nextElementSibling
      );
    }
    // ==================== REGEX ====================

    // The $ means : ????
    // The +$ means : ????
    // The *$ means : match, from beginning to end, any character that appears zero or more times. Basically, that means : match everything from start to end of the string.

    // Regex that match only type of e-mail value.
    form.regexMatchEmail = /^(.+)@(\S+)$/;
    // Regex that match only value that contain at least 8 characters.
    form.regexMatchAtLeastHeightCharacters = /(?=.{8,})/;
    // Regex that match only value that contain at least 12 characters.
    form.regexMatchAtLeastTweleCharacters = /(?=.{12,})/;
    // Regex that match only value that contain at least 1 lowercase alphabetical character.
    form.regexMatchAtLeastOneLowercase = /(?=.*[a-z])/;
    // Regex that match only value that contain at least 1 uppercase alphabetical character.
    form.regexMatchAtLeastOneUppercase = /(?=.*[A-Z])/;
    // Regex that match only value that contain at least 1 numeric character.
    form.regexMatchAtLeastOneNumericCharacter = /(?=.*[0-9])/;
    // Regex that match only value that contain at least 1 one special character, but we are escaping reserved RegEx characters to avoid conflict.
    form.regexMatchAtLeastOneSpecialCharacter = /(?=.*[!@#$%^&*])/;
    // Regex that match only value that contain 10 numeric characters.
    form.regexMatchTenNumericCharacters = /^\d{10}$/;
    // Regex that match only value that start with the numeric value 06 or 07.
    form.regexMatchStartBy06Or07 = /^((06)|(07))[0-9]{8}$/;
    //! START : regex not used
    // Regex that match only alphabetical characters with or without diacritical marks.
    regexMatchAlphabeticalCharactersWithOrWithoutDiacriticalMarks =
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    // Regex that match only value that contain alphabetical characters.
    form.regexMatchAlphabeticalCharacters = /^[A-Za-z]+$/;
    // Regex that match only value that contain alphabetical characters and space.
    form.regexMatchAlphabeticalCharactersAndSpace = /^[a-zA-Z\s]*$/;
    // Regex that match only value that contain alphabetical characters and hyphen.
    form.regexMatchAlphabeticalCharactersWithHyphen = /^[A-Za-z-]+$/;
    // Regex that match alphabetical characters in uppercase and lowercase with accentend characters for uppercase and lowercase.
    form.regexMatchAccentedAlphabeticalCharacters = /[A-Za-zÀ-Ÿa-ÿ]/;
    //! END : regex not used
    // The regex accepting only value that contain a digit number.
    form.regexMatchNumber = /\d+/;
    // Regex that match only value who contain 5 numeric characters.
    form.regexMatchFiveNumericCharacters = /^\d{5}$/;

    // ==================== ERRORS ====================

    // We initialize a error counter.
    form.numberOfErrors = 0;

    // ==================== ERROR MESSAGES ====================

    // User, Product and Contact

    // Error message file
    form.errorMessageFileMimeType = document.querySelector(
      ".error-message__file-mime-type"
    );
    form.errorMessageFileSize = document.querySelector(
      ".error-message__file-size"
    );

    // User

    // Error message e-mail
    form.errorMessageEmailEmpty = document.querySelector(
      ".error-message__email-empty"
    );
    form.errorMessageEmailValidity = document.querySelector(
      ".error-message__email-validity"
    );

    // Error message passoword
    form.errorMessagePasswordEmpty = document.querySelector(
      ".error-message__password-empty"
    );
    form.errorMessagePasswordLength = document.querySelector(
      ".error-message__password-length"
    );
    form.errorMessagePasswordLowercase = document.querySelector(
      ".error-message__password-lowercase"
    );
    form.errorMessagePasswordUppercase = document.querySelector(
      ".error-message__password-uppercase"
    );
    form.errorMessagePasswordNumber = document.querySelector(
      ".error-message__password-number"
    );
    form.errorMessagePasswordSpecialCharacter = document.querySelector(
      ".error-message__password-special-character"
    );

    // Error message gender
    form.errorMessageGenderNotChecked = document.querySelector(
      ".error-message__user-gender-not-checked"
    );

    // Error message last name
    form.errorMessageLastNameEmpty = document.querySelector(
      ".error-message__empty-last-name"
    );

    // Error message first name.
    form.errorMessageFirstNameEmpty = document.querySelector(
      ".error-message__empty-first-name"
    );

    // Error message terms of service.
    form.errorMessageTermsOfUseNotChecked = document.querySelector(
      ".error-message__terms-of-use-not-checked"
    );

    // Contact

    // Error message contact subject
    form.errorMessageContactSubjectNotChecked = document.querySelector(
      ".error-message__contact-subject-not-checked"
    );

    // Error message phone number
    form.errorMessagePhoneNumberEmpty = document.querySelector(
      ".error-message__empty-phone-number"
    );
    form.errorMessagePhoneNumberValidity = document.querySelector(
      ".error-message__validity-phone-number"
    );

    // Error message message
    form.errorMessageEmpty = document.querySelector(
      ".error-message__message-empty"
    );

    // Category

    // Error message name
    form.errorMessageCategoryNameEmpty = document.querySelector(
      ".error-message__category-name-empty"
    );
    form.errorMessageCategoryNameValidity = document.querySelector(
      ".error-message__category-name-validity"
    );

    // Product

    // Error message name
    form.errorMessageProductNameEmpty = document.querySelector(
      ".error-message__product-name-empty"
    );
    form.errorMessageProductNameValidity = document.querySelector(
      ".error-message__product-name-validity"
    );

    // Error message price
    form.errorMessageProductPriceEmpty = document.querySelector(
      ".error-message__product-price-empty"
    );
    form.errorMessageProductPriceValidity = document.querySelector(
      ".error-message__product-price-validity"
    );

    // Error message descrption
    form.errorMessageProductDescriptionEmpty = document.querySelector(
      ".error-message__product-description-empty"
    );

    // Error message descrption
    form.errorMessageProductAvailabilityNotChecked = document.querySelector(
      ".error-message__product-availability-not-checked"
    );

    // Error message category product
    form.errorMessageCategoryProductNotChecked = document.querySelector(
      ".error-message__category-product-not-checked"
    );

    // Address

    // Error message street number
    form.errorMessageStreetNumberEmpty = document.querySelector(
      ".error-message__empty-street-number"
    );
    form.errorMessageStreetNumberValidity = document.querySelector(
      ".error-message__validity-street-number"
    );

    // Error message street name
    form.errorMessageStreetNameEmpty = document.querySelector(
      ".error-message__empty-street-name"
    );
    form.errorMessageStreetNameValidity = document.querySelector(
      ".error-message__validity-street-name"
    );

    // Error message zip code
    form.errorMessageZipCodeEmpty = document.querySelector(
      ".error-message__empty-zip-code"
    );
    form.errorMessageZipCodeValidity = document.querySelector(
      ".error-message__validity-zip-code"
    );

    // Error message city
    form.errorMessageCityEmpty = document.querySelector(
      ".error-message__empty-city"
    );
    form.errorMessageCityValidity = document.querySelector(
      ".error-message__validity-city"
    );

    // Error message country
    form.errorMessageCountryEmpty = document.querySelector(
      ".error-message__empty-country"
    );
    form.errorMessageCountryValidity = document.querySelector(
      ".error-message__validity-country"
    );

    // Purchase
    form.errorMessagePurchaseProductsNotChecked = document.querySelector(
      ".error-message__purchase-products-not-checked"
    );
    form.errorMessageReferenceEmpty = document.querySelector(
      ".error-message__reference-empty"
    );
    form.errorMessageReferenceValidity = document.querySelector(
      ".error-message__reference-validity"
    );
    form.errorMessagePurchaseStatusNotChecked = document.querySelector(
      ".error-message__purchase-status-not-checked"
    );
    form.errorMessagePurchaseBillingAddressNotChecked = document.querySelector(
      ".error-message__billing-address-not-checked"
    );
    form.errorMessagePurchaseDeliveryAddressNotChecked = document.querySelector(
      ".error-message__delivery-address-not-checked"
    );
    form.errorMessagePurchaseDeliveryModeNotChecked = document.querySelector(
      ".error-message__purchase-delivery-mode-not-checked"
    );
    form.errorMessagePurchasePaymentMethodNotChecked = document.querySelector(
      ".error-message__purchase-payment-method-not-checked"
    );

    // DeliveryMode

    // Error message name
    form.errorMessageDeliveryModeNameEmpty = document.querySelector(
      ".error-message__delivery-mode-name-empty"
    );
    form.errorMessageDeliveryModeNameValidity = document.querySelector(
      ".error-message__delivery-mode-name-validity"
    );
    // Error message price
    form.errorMessageDeliveryModePriceEmpty = document.querySelector(
      ".error-message__delivery-mode-price-empty"
    );
    form.errorMessageDeliveryModePriceValidity = document.querySelector(
      ".error-message__delivery-mode-price-validity"
    );

    // Error message min rice for free delivery
    form.errorMessageDeliveryModeMinCartAmountForFreeDeliveryEmpty =
      document.querySelector(
        ".error-message__delivery-mode-min-cart-amount-for-free-delivery-empty"
      );
    form.errorMessageDeliveryModeMinCartAmountForFreeDeliveryValidity =
      document.querySelector(
        ".error-message__delivery-mode-min-cart-amount-for-free-delivery-validity"
      );

    // Error message descrption
    form.errorMessageDeliveryModeDescriptionEmpty = document.querySelector(
      ".error-message__delivery-mode-description-empty"
    );

    // ==================== BUTTONS ====================

    // All the submit buttons.
    form.submitButtons = document.querySelectorAll(".page__button-submit");
    // If the DOM elements exist.
    if (form.submitButtons) {
      // For each submitButton of form.submitButtons
      for (let submitButton of form.submitButtons) {
        // We add a listener and a handler on the click event.
        submitButton.addEventListener("click", form.handleFormSubmit);
      }
    }

    // Each button

    // User
    form.registrationButton = document.getElementById("registration-button");
    form.loginButton = document.getElementById("login-button");
    form.modifyMyUserProfileButton = document.getElementById(
      "modify-my-user-profile-button"
    );
    // If the DOM elements exist.
    if (form.modifyMyUserProfileButton) {
      // We add a listener and a handler on the click event.
      form.modifyMyUserProfileButton.addEventListener(
        "click",
        form.handleUserProfileUpdate
      );
    }
    form.updateMyUserProfileButton = document.getElementById(
      "update-my-user-profile-button"
    );
    form.searchUserButton = document.getElementById("search-user-button");
    form.adminCreateUserButton = document.getElementById(
      "admin-create-user-button"
    );
    form.adminUpdateUserButton = document.getElementById(
      "admin-update-user-button"
    );
    form.requestPasswordButton = document.getElementById(
      "request-password-button"
    );
    form.resetPasswordButton = document.getElementById("reset-password-button");

    // Contact
    form.contactButton = document.getElementById("contact-button");

    // Category
    form.adminCreateCategoryButton = document.getElementById(
      "admin-create-category-button"
    );
    form.adminUpdateCategoryButton = document.getElementById(
      "admin-update-category-button"
    );
    form.searchCategoryButton = document.getElementById(
      "search-category-button"
    );

    // Product
    form.adminCreateProductButton = document.getElementById(
      "admin-create-product-button"
    );
    form.adminUpdateProductButton = document.getElementById(
      "admin-update-product-button"
    );
    form.searchProductButton = document.getElementById("search-product-button");

    // Address
    form.userCreateAddressButton = document.getElementById(
      "user-create-address-button"
    );
    form.userUpdateAdressButton = document.getElementById(
      "user-update-address-button"
    );
    form.adminCreateAddressButton = document.getElementById(
      "admin-create-address-button"
    );
    form.adminUpdateAddressButton = document.getElementById(
      "admin-update-address-button"
    );
    form.searchAddressButton = document.getElementById("search-address-button");

    // Purchase
    form.adminCreatePurchaseButton = document.getElementById(
      "admin-create-purchase-button"
    );
    form.adminUpdatePurchaseButton = document.getElementById(
      "admin-update-purchase-button"
    );
    form.searchPurchaseButton = document.getElementById(
      "search-purchase-button"
    );
    form.purchaseConfirmAddressesButton = document.getElementById(
      "purchase-confirm-address-button"
    );
    form.purchaseConfirmDeliveryModeButton = document.getElementById(
      "purchase-confirm-delivery-mode-button"
    );
    form.purchaseConfirmButton = document.getElementById(
      "purchase-confirm-button"
    );

    // DeliveryMode
    form.adminCreateDeliveryModeButton = document.getElementById(
      "admin-create-delivery-mode-button"
    );
    form.adminUpdateDeliveryModeButton = document.getElementById(
      "admin-update-delivery-mode-button"
    );
    form.searchDeliveryModeButton = document.getElementById(
      "search-delivery-mode-button"
    );
    form.errorMessagePurchaseTermsOfSaleNotChecked = document.querySelector(
      ".error-message__terms-of-sale-not-checked"
    );

    // ==================== LINKS ====================

    // User
    form.deleteMyUserPictureLink = document.getElementById(
      "delete-my-user-picture-link"
    );
    form.deleteMyUserAccountLink = document.getElementById(
      "delete-my-user-account-link"
    );

    // Address
    form.createAddressLink = document.getElementById("create-address-link");
    form.addNewAddressLink = document.getElementById("add-new-address-link");

    // ==================== PURCHASE STEPS ====================

    // All the purchase steps.
    form.purchaseSteps = document.querySelectorAll(".page__purchase-step");
    // For each step of form.purchaseSteps.
    for (let step of form.purchaseSteps) {
      // We add a listener and a handler on the click event.
      step.addEventListener("click", form.handlePurchaseSteps);
    }

    // Step 1 : address
    form.addressStep = document.getElementById("addresses-step");

    form.addressStepIconChecked = document.getElementById(
      "icon-checked-addresses-step"
    );

    // Step 2 : delivery mode
    form.deliveryModeStep = document.getElementById("delivery-mode-step");
    form.deliveryModeStepIconChecked = document.getElementById(
      "icon-checked-delivery-mode-step"
    );

    // Step 3 : payment method
    form.paymentMethodStep = document.getElementById("payment-method-step");
    form.paypalButtonContainer = document.getElementById(
      "paypal-button-container"
    );
    // console.log(form.paypalButtonContainer);

    form.paypalButton = document.querySelector(".paypal-button");
    // console.log(form.paypalButton);
  },
  /**
   * Method that switch the color of the outline around the inputs.
   * @param {Element} input
   * @param {string} outlineColor
   * @return {void}
   */
  switchInputOutlineColor: function (input, outlineColor) {
    // console.log("form.switchInputOutlineColor()");

    // We set the property of the CSS variable.
    input.style.setProperty("--outline", "0.1em solid " + outlineColor);
    // input.style.setProperty("--outline", "0.1em solid " + outlineColor);
  },
  /**
   * Method that switch the color of the input outline on the focus-within according to the value of mode.backgroundColor.
   * @param {Event} event
   * @return {void}
   */
  handleAddInputFocusWithin: function (event) {
    // console.log("form.handleAddInputFocusWithin()");

    // We get the DOM element form which the event occured.
    let clickedInput = event.currentTarget;

    // We initialaze our index.
    let index = 0;
    // The index is the index of the clickedInput.
    index = form.inputs.indexOf(clickedInput);

    // If the mode item in localStorage have the dark value.
    if (mode.backgroundColor === "dark") {
      // For each input of form.inputs.
      for (let input of form.inputs) {
        // If the DOM element === true.
        if (clickedInput === input) {
          // We call form.switchInputOutlineColor() to switch the outline color of the input.
          form.switchInputOutlineColor(clickedInput, mode.colors.white);
        }
        // // Else if clickedInput is different than input.
        // else if (clickedInput != input) {
        //   // We remove the outline.
        //   input.style.removeProperty("--outline");
        // }
      }
    }
    // Else if the mode item in localStorage have the light value.
    else if (mode.backgroundColor === "light") {
      // For each input of form.inputs.
      for (let input of form.inputs) {
        // If the DOM element === true.
        if (clickedInput === input) {
          // We call form.switchInputOutlineColor() to switch the outline color of the input.
          form.switchInputOutlineColor(clickedInput, mode.colors.black);
        }
        // // Else if clickedInput is different than input.
        // else if (clickedInput != input) {
        //   // We remove the outline.
        //   input.style.removeProperty("--outline");
        // }
      }
    }
  },
  /**
   * Method that remove the outline property on the inputs when they has lost focus.
   * @param {Event} event
   * @return {void}
   */
  handleRemoveInputsFocusWithin: function (event) {
    // console.log("form.handleRemoveInputsFocusWithin()");

    // For each input of form.inputs.
    for (let input of form.inputs) {
      // We remove the outline.
      input.style.removeProperty("--outline");
    }
  },
  /**
   * Method that stop the form submit and according to the clicked button call the methods to check the input's value.
   * @param {Event} event
   * @return {void}
   */
  handleFormSubmit: function (event) {
    console.log("form.handleFormSubmit()");

    // We get the DOM element form which the event occured.
    let clickedButton = event.currentTarget;
    console.log(clickedButton);

    // We stop the form submit.
    event.preventDefault();
    console.log("STOP 🛑👮🏼‍♂️ Security check 🔐");

    // If clickedButton is form.registrationButton or form.loginButton or form.updateMyUserProfileButton or form.contactButton or form.searchUserButton or form.adminCreateUserButton or form.adminUpdateUserButton or form.requestPasswordButton.
    if (
      clickedButton === form.registrationButton ||
      clickedButton === form.loginButton ||
      clickedButton === form.updateMyUserProfileButton ||
      clickedButton === form.contactButton ||
      clickedButton === form.adminCreateUserButton ||
      clickedButton === form.adminUpdateUserButton ||
      // clickedButton === form.searchUserButton ||
      clickedButton === form.requestPasswordButton
    ) {
      // We call form.checkIfEmail() to check if the input it not empty and valid.
      form.checkIfEmail(
        form.userEmailInput,
        form.errorMessageEmailEmpty,
        form.errorMessageEmailValidity
      );
    }

    // If clickedButton is form.searchUserButton
    if (clickedButton === form.searchUserButton) {
      // We call form.checkIfInputContainValue() to check if the input it not empty.
      form.checkIfInputContainValue(
        form.userEmailInput,
        form.errorMessageEmailEmpty
      );
    }

    // If clickedButton is form.registrationButton or form.loginButton or form.adminCreateUserButton or form.resetPasswordButton.
    if (
      clickedButton === form.registrationButton ||
      clickedButton === form.loginButton ||
      clickedButton === form.adminCreateUserButton ||
      clickedButton === form.resetPasswordButton
    ) {
      // We call form.checkIfPassword() to check if the input it not empty and valid.
      form.checkIfPassword(
        form.userPasswordInput,
        form.errorMessagePasswordEmpty,
        form.errorMessagePasswordLength,
        form.errorMessagePasswordLowercase,
        form.errorMessagePasswordUppercase,
        form.errorMessagePasswordNumber,
        form.errorMessagePasswordSpecialCharacter
      );
    }

    // If clickedButton is form.registrationButton or form.updateMyUserProfileButton or form.contactButton or form.adminCreateUserButton or form.updateUserButto or form.userCreateAddressButton or form.userUpdateAdressButton or form.adminCreateAddressButton or form.adminUpdateAddressButton.
    if (
      clickedButton === form.registrationButton ||
      clickedButton === form.updateMyUserProfileButton ||
      clickedButton === form.contactButton ||
      clickedButton === form.adminCreateUserButton ||
      clickedButton === form.adminUpdateUserButton ||
      clickedButton === form.userCreateAddressButton ||
      clickedButton === form.userUpdateAdressButton ||
      clickedButton === form.adminCreateAddressButton ||
      clickedButton === form.adminUpdateAddressButton
    ) {
      // We call form.checkIfInputContainValue()to check if the input it not empty.
      form.checkIfInputContainValue(
        form.userFirstNameInput,
        form.errorMessageFirstNameEmpty
      );
      // We call form.checkIfInputContainValue() to check if the input it not empty.
      form.checkIfInputContainValue(
        form.userLastNameInput,
        form.errorMessageLastNameEmpty
      );
    }

    // If clickedButton is form.registrationButton or form.contactButton or form.adminCreateUserButto.
    if (
      clickedButton === form.registrationButton ||
      clickedButton === form.adminCreateUserButton
    ) {
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.userCivilityTitleInputs,
        form.errorMessageGenderNotChecked
      );
      // If form.fileInput is contain a value.
      if (form.fileInput.value) {
        // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
        form.checkUploadedFileMimeType(
          form.fileInput,
          form.errorMessageFileMimeType
        );
      }
    }

    // If clickedButton is form.updateMyUserProfileButton or form.adminUpdateUserButton or form.contactButton.
    if (
      form.updateMyUserProfileButton ||
      form.adminUpdateUserButton ||
      form.contactButton
    ) {
      // If form.fileInput is contain a value.
      if (form.fileInput.value) {
        // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
        form.checkUploadedFileMimeType(
          form.fileInput,
          form.errorMessageFileMimeType
        );
      }
    }
    if (
      clickedButton === form.contactButton ||
      clickedButton === form.userCreateAddressButton ||
      clickedButton === form.userUpdateAdressButton ||
      clickedButton == form.adminCreateAddressButton ||
      clickedButton === form.adminUpdateAddressButton
    ) {
      // If clickedButton is form.contactButtom or form.userCreateAddressButton or form.userUpdateAdressButton or form.adminCreateAddressButton or form.adminUpdateAddressButton or.
      // We call form.checkIfPhoneNumber() to check if the input it not empty and valid.
      form.checkIfPhoneNumber(
        form.phoneNumberInput,
        form.errorMessagePhoneNumberEmpty,
        form.errorMessagePhoneNumberValidity
      );
    }

    // If clickedButton is form.registrationButton.
    if (clickedButton === form.registrationButton) {
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.userTermsOfUseInput,
        form.errorMessageTermsOfUseNotChecked
      );
      // We call form.submitFormIfNoError() with form.registrationForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.registrationForm);
    }

    // If clickedButton is form.loginButton.
    if (clickedButton === form.loginButton) {
      // We call form.submitFormIfNoError() with form.loginForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.loginForm);
    }

    // If clickedButton is form.updateMyUserProfileButton.
    if (clickedButton === form.updateMyUserProfileButton) {
      // We call form.submitFormIfNoError() with form.userProfileForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.userProfileForm);
    }

    // If clickedButton is form.contactButton.
    if (clickedButton === form.contactButton) {
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.contactSubjectInputs,
        form.errorMessageContactSubjectNotChecked
      );
      // We call form.checkIfInputContainValue() to check if form.messageInput is not empty.
      form.checkIfInputContainValue(form.messageInput, form.errorMessageEmpty);
      // We call form.submitFormIfNoError() with form.userProfileForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.contactForm);
    }

    // If clickedButton is form.adminCreateUserForm.
    if (clickedButton === form.adminCreateUserButton) {
      // We call form.submitFormIfNoError() with form.adminCreateUserForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreateUserForm);
    }

    // If clickedButton is form.adminUpdateUserButton.
    if (clickedButton == form.adminUpdateUserButton) {
      // We call form.submitFormIfNoError() with form.adminUpdateUserForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdateUserForm);
    }

    // If clickedButton is form.searchUserButton.
    if (clickedButton === form.searchUserButton) {
      // We call form.submitFormIfNoError() with form.searchUserForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchUserForm);
    }

    // If clickedButton is form.requestPasswordButton.
    if (clickedButton == form.requestPasswordButton) {
      // We call form.submitFormIfNoError() with form.requestPasswordForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.requestPasswordForm);
    }

    // If clickedButton is form.resetPasswordButton.
    if (clickedButton === form.resetPasswordButton) {
      // We call form.submitFormIfNoError() with form.resetPasswordForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.resetPasswordForm);
    }

    // If clickedButton is form.adminCreateCategoryButton or form.searchCategoryButton or form.adminUpdateCategoryButton.
    if (
      clickedButton === form.adminCreateCategoryButton ||
      clickedButton === form.adminUpdateCategoryButton ||
      clickedButton === form.searchCategoryButton
    ) {
      // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty and valid.
      form.checkIfAlphabeticalCharacters(
        form.categoryNameInput,
        form.errorMessageCategoryNameEmpty,
        form.errorMessageCategoryNameValidity
      );
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.categoryNameInput,
      //   form.errorMessageCategoryNameEmpty
      // );
    }

    // If clickedButton is form.adminCreateCategoryButton.
    if (clickedButton === form.adminCreateCategoryButton) {
      // We call form.submitFormIfNoError() with form.adminCreateCategoryForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreateCategoryForm);
    }

    // If clickedButton is form.adminUpdateCategoryButton.
    if (clickedButton === form.adminUpdateCategoryButton) {
      // We call form.submitFormIfNoError() with form.searchCategoryForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdateCategoryForm);
    }

    // If clickedButton is form.searchCategoryButton.
    if (clickedButton === form.searchCategoryButton) {
      // We call form.submitFormIfNoError() with form.searchCategoryForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchCategoryForm);
    }

    // If clickedButton is form.adminCreateProductButton or form.searchProductButton or form.adminUpdateProductButton.
    if (
      clickedButton === form.adminCreateProductButton ||
      clickedButton === form.adminUpdateProductButton ||
      clickedButton === form.searchProductButton
    ) {
      // // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty.
      // form.checkIfAlphabeticalCharacters(
      //   form.productNameInput,
      //   form.errorMessageProductNameEmpty,
      //   form.errorMessageProductNameValidity
      // );
      // We call form.checkIfInputContainValue() to check if the input it not empty and valid.
      form.checkIfInputContainValue(
        form.productNameInput,
        form.errorMessageProductNameEmpty
      );
    }

    // If clickedButton is form.adminCreateProductButton or form.adminUpdateProductButton.
    if (
      clickedButton === form.adminCreateProductButton ||
      clickedButton === form.adminUpdateProductButton
    ) {
      // We call form.checkIfNumber() to check if the input it not empty and valid.
      form.checkIfNumber(
        form.productPriceInput,
        form.errorMessageProductPriceEmpty,
        form.errorMessageProductPriceValidity
      );
      // We call form.checkIfInputContainValue() to check if the input it not empty.
      form.checkIfInputContainValue(
        form.productDescriptionInput,
        form.errorMessageProductDescriptionEmpty
      );
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.productAvailabilityInputs,
        form.errorMessageProductAvailabilityNotChecked
      );
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.productCategoryInputs,
        form.errorMessageCategoryProductNotChecked
      );
    }

    // If clickedButton is form.adminCreateProductButton.
    if (clickedButton === form.adminCreateProductButton) {
      // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
      form.checkUploadedFileMimeType(
        form.fileInput,
        form.errorMessageFileMimeType
      );
      // We call form.submitFormIfNoError() with form.adminCreateProductForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreateProductForm);
    }

    // If clickedButton is form.adminUpdateProductButton.
    if (clickedButton === form.adminUpdateProductButton) {
      // If form.fileInput is contain a value.
      if (form.fileInput.value) {
        // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
        form.checkUploadedFileMimeType(
          form.fileInput,
          form.errorMessageFileMimeType
        );
      }
      // We call form.submitFormIfNoError() with form.adminUpdateProductForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdateProductForm);
    }

    // If clickedButton is form.searchProductButton.
    if (clickedButton === form.searchProductButton) {
      // We call form.submitFormIfNoError() with form.searchProductForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchProductForm);
    }

    // If clickedButton is  form.userCreateAddressButton or form.userUpdateAdressButton or form.adminCreateAddressButton or form.adminUpdateAddressButton or form.searchAddressButton.
    if (
      clickedButton === form.userCreateAddressButton ||
      clickedButton === form.userUpdateAdressButton ||
      clickedButton === form.adminCreateAddressButton ||
      clickedButton === form.adminUpdateAddressButton ||
      clickedButton === form.searchAddressButton
    ) {
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.addressCityInput,
      //   form.errorMessageCityEmpty
      // );
      // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty and valid.
      form.checkIfAlphabeticalCharacters(
        form.addressCityInput,
        form.errorMessageCityEmpty,
        form.errorMessageCityValidity
      );
    }

    // If clickedButton is  form.userCreateAddressButton or form.userUpdateAdressButton or form.adminCreateAddressButton or form.adminUpdateAddressButton or.
    if (
      clickedButton === form.userCreateAddressButton ||
      clickedButton === form.userUpdateAdressButton ||
      clickedButton === form.adminCreateAddressButton ||
      clickedButton === form.adminUpdateAddressButton
    ) {
      // We call form.checkIfStreetNumber() to check if the input it not empty and valid.
      form.checkIfStreetNumber(
        form.addressStreetNumberInput,
        form.errorMessageStreetNumberEmpty,
        form.errorMessageStreetNumberValidity
      );
      // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty and valid.
      form.checkIfAlphabeticalCharacters(
        form.addressStreetNameInput,
        form.errorMessageStreetNameEmpty,
        form.errorMessageStreetNameValidity
      );
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.addressStreetNameInput,
      //   form.errorMessageStreetNameEmpty
      // );
      // We call form.checkIfZipCode() to check if the input it not empty and valid.
      form.checkIfZipCode(
        form.addressZipCodeInput,
        form.errorMessageZipCodeEmpty,
        form.errorMessageZipCodeValidity
      );
      // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty.
      form.checkIfAlphabeticalCharacters(
        form.addressCityInput,
        form.errorMessageCityEmpty,
        form.errorMessageCityValidity
      );
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.addressCityInput,
      //   form.errorMessageCityEmpty
      // );
      // We call form.checkIfAlphabeticalCharacters()to check if the input it not empty and valid.
      form.checkIfAlphabeticalCharacters(
        form.addressCountryInput,
        form.errorMessageCountryEmpty,
        form.errorMessageCountryValidity
      );
      // // We call form.checkIfInputContainValue()to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.addressCountryInput,
      //   form.errorMessageCountryEmpty
      // );
    }

    // If clickedButton is form.userCreateAddressButton.
    if (clickedButton === form.userCreateAddressButton) {
      // We call form.submitFormIfNoError() with form.userCreateAddressForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.userCreateAddressForm);
    }

    // If clickedButton is form.updateAddressOnPurchaseButton.
    if (clickedButton === form.userUpdateAdressButton) {
      // We call form.submitFormIfNoError() with form.userUpdateAddressForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.userUpdateAddressForm);
    }

    // If clickedButton is form.adminCreateAddressButton.
    if (clickedButton === form.adminCreateAddressButton) {
      // We call form.submitFormIfNoError() with form.adminCreateAddressForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreateAddressForm);
    }

    // If clickedButton is form.adminUpdateAddressButton.
    if (clickedButton === form.adminUpdateAddressButton) {
      // We call form.submitFormIfNoError() with form.adminUpdateAddressForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdateAddressForm);
    }

    // If clickedButton is form.searchAddressButton.
    if (clickedButton === form.searchAddressButton) {
      // We call form.submitFormIfNoError() with form.searchAddressForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchAddressForm);
    }

    // If clickedButton is form.adminCreatePurchaseButton or form.adminUpdatePurchaseButton.
    if (
      clickedButton === form.adminCreatePurchaseButton ||
      clickedButton === form.adminUpdatePurchaseButton
    ) {
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.purchaseStatusInputs,
        form.errorMessagePurchaseStatusNotChecked
      );
    }

    // If clickedButton is form.adminCreatePurchaseButton.
    if (clickedButton === form.adminCreatePurchaseButton) {
      // We call form.checkIfInputIsChecked() to check if fthe input is checked.
      form.checkIfInputIsChecked(
        form.purchaseBillingAddressInputs,
        form.errorMessagePurchaseBillingAddressNotChecked
      );
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.purchaseDeliveryAddressInputs,
        form.errorMessagePurchaseDeliveryAddressNotChecked
      );
      // We call form.checkIfInputIsChecked() to check if the input is checked.
      form.checkIfInputIsChecked(
        form.purchaseDeliveryModeInputs,
        form.errorMessagePurchaseDeliveryModeNotChecked
      );
      // We call form.submitFormIfNoError() with form.adminUpdaadminCreatePurchaseFormtePurchaseForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreatePurchaseForm);
    }

    // If clickedButton is form.adminUpdatePurchaseButton.
    if (clickedButton === form.adminUpdatePurchaseButton) {
      // We call form.submitFormIfNoError() with form.adminUpdatePurchaseForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdatePurchaseForm);
    }

    // If clickedButton is form.searchPurchaseButton.
    if (clickedButton === form.searchPurchaseButton) {
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.purchaseReferenceInput,
      //   form.errorMessageReferenceEmpty
      // );

      // We call form.checkIfReference() to check if the input it not empty and valid.
      form.checkIfReference(
        form.purchaseReferenceInput,
        form.errorMessageReferenceEmpty,
        form.errorMessageReferenceValidity
      );

      // We call form.submitFormIfNoError() with form.searchPurchaseForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchPurchaseForm);
    }

    // If clickedButton is form.adminCreateDeliveryModeButton or form.adminUpdateDeliveryModeButton or form.searchDeliveryModeButton.
    if (
      clickedButton === form.adminCreateDeliveryModeButton ||
      clickedButton === form.adminUpdateDeliveryModeButton ||
      clickedButton === form.searchDeliveryModeButton
    ) {
      // We call form.checkIfAlphabeticalCharacters() to check if the input it not empty and valid.
      form.checkIfAlphabeticalCharacters(
        form.deliveryModeNameInput,
        form.errorMessageDeliveryModeNameEmpty,
        form.errorMessageDeliveryModeNameValidity
      );
      // // We call form.checkIfInputContainValue() to check if the input it not empty.
      // form.checkIfInputContainValue(
      //   form.deliveryModeNameInput,
      //   form.errorMessageDeliveryModeNameEmpty
      // );
    }

    // If clickedButton is form.adminCreateDeliveryModeButton or form.adminUpdateDeliveryModeButton.
    if (
      clickedButton === form.adminCreateDeliveryModeButton ||
      clickedButton === form.adminUpdateDeliveryModeButton
    ) {
      // We call form.checkIfNumber() to check if the input it not empty and valid.
      form.checkIfNumber(
        form.deliveryModePriceInput,
        form.errorMessageDeliveryModePriceEmpty,
        form.errorMessageDeliveryModePriceValidity
      );
      // We call form.checkIfNumber()to check if the input it not empty and valid.
      form.checkIfNumber(
        form.deliveryModeMinPurchaseAmountForFreeDelivery,
        form.errorMessageDeliveryModeMinCartAmountForFreeDeliveryEmpty,
        form.errorMessageDeliveryModeMinCartAmountForFreeDeliveryValidity
      );
      // We call form.checkIfInputContainValue() to check if the input is not empty.
      form.checkIfInputContainValue(
        form.deliveryModeDescriptionInput,
        form.errorMessageDeliveryModeDescriptionEmpty
      );
    }

    // If clickedButton is form.adminCreateDeliveryModeButton .
    if (clickedButton === form.adminCreateDeliveryModeButton) {
      // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
      form.checkUploadedFileMimeType(
        form.fileInput,
        form.errorMessageFileMimeType
      );
      // We call form.submitFormIfNoError() with form.adminCreateDeliveryModeForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminCreateDeliveryModeForm);
    }

    // If clickedButton is form.adminUpdateDeliveryModeButton.
    if (clickedButton === form.adminUpdateDeliveryModeButton) {
      // If form.fileInput is contain a value.
      if (form.fileInput.value) {
        // We call form.checkUploadedFileMimeType() to check the mime type of the uploded file.
        form.checkUploadedFileMimeType(
          form.fileInput,
          form.errorMessageFileMimeType
        );
      }
      // We call form.submitFormIfNoError() with form.adminUpdateDeliveryModeForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.adminUpdateDeliveryModeForm);
    }

    // If clickedButton is form.searchDeliveryModeButton.
    if (clickedButton === form.searchDeliveryModeButton) {
      // We call form.submitFormIfNoError() with form.searchDeliveryModeForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.searchDeliveryModeForm);
    }
  },
  /**
   * Method that check if a input contain a value type of e-mail and and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfEmail: function (input, errorMessageEmpty, errorMessageValidity) {
    // console.log("form.checkIfEmail()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input contain a e-mail.
      if (form.regexMatchEmail.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input contain a value type of password and call the methods that display the related error messages.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @param {Element} errorMessageLength
   * @param {Element} errorMessageLowercase
   * @param {Element} errorMessageUppercase
   * @param {Element} errorMessageNumber
   * @param {Element} errorMessageSpecialCharacter
   * @return {void}
   */
  checkIfPassword: function (
    input,
    errorMessageEmpty,
    errorMessageLength,
    errorMessageLowercase,
    errorMessageUppercase,
    errorMessageNumber,
    errorMessageSpecialCharacter
  ) {
    // console.log("form.checkIfPassword()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorsMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input contain at leat 1 lowercase alphabetical character.
      if (form.regexMatchAtLeastOneLowercase.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageLowercase.
        tools.addDisplayNone(errorMessageLowercase);
      }
      // Else input doesn't contain at least 1 lowercase alphabetical character.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageLowercase.
        tools.removeDisplayNone(errorMessageLowercase);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }

      // If input contain at leat 1 uppercase alphabetical character.
      if (form.regexMatchAtLeastOneUppercase.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageUppercase.
        tools.addDisplayNone(errorMessageUppercase);
      }
      // Else the value of the password input doesn't contain at least 1 uppercase alphabetical character.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageUppercase.
        tools.removeDisplayNone(errorMessageUppercase);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }

      // If input contain at leat 1 numeric character.
      if (form.regexMatchAtLeastOneNumericCharacter.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageNumber.
        tools.addDisplayNone(errorMessageNumber);
      }
      // Else the value of the password input doesn't contain at least 1 numeric character.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageNumber.
        tools.removeDisplayNone(errorMessageNumber);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }

      // If input contain at leat 1 special character.
      if (form.regexMatchAtLeastOneSpecialCharacter.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageSpecialCharacter.
        tools.addDisplayNone(errorMessageSpecialCharacter);
      }
      // Else the value of the password input doesn't contain at least 1 special character.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageSpecialCharacter.
        tools.removeDisplayNone(errorMessageSpecialCharacter);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }

      // If input contain at leat 8 characters.
      if (form.regexMatchAtLeastHeightCharacters.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageLength.
        tools.addDisplayNone(errorMessageLength);
      }
      // Else input is empty.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageLength.
        tools.removeDisplayNone(errorMessageLength);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input contain a value and call the methods that display the related outline color and error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @return {void}
   */
  checkIfInputContainValue: function (input, errorMessageEmpty) {
    // console.log("form.checkIfInputContainValue()");

    // If input contain a value.
    if (input.value) {
      // We call form.switchInputOutlineColor() to switch the input's outline in green.
      form.switchInputOutlineColor(input, form.colors.green);
      // We call tools.addDisplayNone() in order to add the display-none class of errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input is checked and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageNotChecked
   * @return {void}
   */
  checkIfInputIsChecked: function (input, errorMessageNotChecked) {
    // console.log("form.checkIfInputIsChecked()");

    // We initialize a checked input's counter.
    let numberOfCheckedInput = 0;

    // If the number of input is superior to 1.
    if (input.length > 1) {
      // console.log(input.length);
      // console.log(input);
      // console.log(Array.from(input));
      // We count the number of checked input.
      for (let index = 0; index < input.length; index++) {
        // If a input is checked.
        if (input[index].checked) {
          // We add one to the counter.
          numberOfCheckedInput++;
          // console.log(numberOfCheckedInput);
          // console.log(input[index].value);
        }
      }

      // If the number of checked input is superior to 0.
      if (numberOfCheckedInput > 0) {
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageNotChecked.
        tools.addDisplayNone(errorMessageNotChecked);
      }
      // Else the number of checked input is egual to 0.
      else {
        // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageNotChecked.
        tools.removeDisplayNone(errorMessageNotChecked);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else the number of input is 1.
    else {
      // We can have one input which is a NodeList and when one input is a NodeList it as key 0 which is the input.
      // If we have have a input[0] (so a NodeList) and if the input[0] nodeTye is identical to Node.ELEMENT_NODE.
      if (input[0] && input[0].nodeType === Node.ELEMENT_NODE) {
        // If the input is checked.
        if (input[0].checked) {
          // We call tools.addDisplayNone() in order to add the display-none class to errorMessageNotChecked.
          tools.addDisplayNone(errorMessageNotChecked);
        }
        // Else the input is not checked.
        else {
          // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageNotChecked.
          tools.removeDisplayNone(errorMessageNotChecked);
          // We add a error to form.numberOfErrors.
          form.numberOfErrors++;
        }
      }
      // Else the input input[0] doesn't exist so its nodeType is not identical to Node.ELEMENT_NODE beause is doesn't exist.
      else {
        // If the input is checked or if the first input of the NodeList of input is checked.
        if (input.checked) {
          // We call tools.addDisplayNone() in order to add the display-none class to errorMessageNotChecked.
          tools.addDisplayNone(errorMessageNotChecked);
        }
        // Else the input is not checked.
        else {
          // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageNotChecked.
          tools.removeDisplayNone(errorMessageNotChecked);
          // We add a error to form.numberOfErrors.
          form.numberOfErrors++;
        }
      }
    }
  },
  /**
   * Method that check if a uploaded file fit the authorized file mime type and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageFileMimeType
   * @return {void}
   */
  checkUploadedFileMimeType: function (input, errorMessageFileMimeType) {
    console.log("form.checkUploadedFileMimeType()");

    console.log(input.files);

    // We put in a array the type mime we want to authorize.
    let authorizedMimeTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/svg+xml",
    ];

    // We initialize a variable to confirm when a authorizedMimeTypes is authorized.
    let isAuthorized = null;

    // We count the number of uploaded file.
    for (let index = 0; index < input.files.length; index++) {
      // For each mimeType of authorizedMimeTypes.
      for (let mimeType of authorizedMimeTypes) {
        // If the mine type of the file is one of the authorizedMimeTypes.
        if (input.files[index].type === mimeType) {
          console.log(input.files[index].type);
          console.log("File type accepted ✅");
          // We call form.switchInputOutlineColor() to switch the input's outline in green.
          form.switchInputOutlineColor(input, form.colors.green);
          // We call tools.addDisplayNone() in order to add the display-none class to errorMessageFileMimeType.
          tools.addDisplayNone(errorMessageFileMimeType);
          // We confirm that a authorizedMimeTypes is authorized.
          isAuthorized = true;
          // We call form.checkUploadedFileSize() to check the size of the uploded file.
          form.checkUploadedFileSize(input, form.errorMessageFileSize);
          // We leave checkUploadedFileMimeType();
          return;
        }
      }
    }

    // If none of the authorizedMimeTypes has been authorized.
    if (!isAuthorized) {
      console.log("File type denied ❌");
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageFileMimeType.
      tools.removeDisplayNone(errorMessageFileMimeType);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a uploaded file fit the required file size and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageFileSize
   * @return {void}
   */
  checkUploadedFileSize: function (input, errorMessageFileSize) {
    console.log("form.checkUploadedFileSize()");

    // We count the number of uploaded file.
    for (let index = 0; index < input.files.length; index++) {
      // If the size of the file is upper than 300 000 bytes we refuse the file.
      if (input.files[index].size > 300000) {
        console.log(input.files[index].size);
        console.log("File size denied ❌");
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageFileSize.
        tools.removeDisplayNone(errorMessageFileSize);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
      // Else the size of the file is lower than 300 000 bytes so we accept the file.
      else {
        console.log(input.files[index].size);
        console.log("File size accepted ✅");
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageFileSize.
        tools.addDisplayNone(errorMessageFileSize);
      }
    }
  },
  /**
   * Method that check if a input contain a value type of french phone number and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfPhoneNumber: function (
    input,
    errorMessageEmpty,
    errorMessageValidity
  ) {
    // console.log("form.checkIfPhoneNumber()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input contain 10 numeric characters.
      if (form.regexMatchTenNumericCharacters.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }

      // If input start with the numeric value 06 or 07.
      if (form.regexMatchStartBy06Or07.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input contain a value type of number and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfAlphabeticalCharacters: function (
    input,
    errorMessageEmpty,
    errorMessageValidity
  ) {
    // console.log("form.checkIfAlphabeticalCharacters()");

    console.log(input);

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input value contain a number it's invalid.
      if (form.regexMatchNumber.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
      // Else input is valid because it's a alphabetical character.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input contain a value type of number and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfNumber: function (input, errorMessageEmpty, errorMessageValidity) {
    // console.log("form.checkIfNumber()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input is valid.
      if (form.regexMatchNumber.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if a input contain a value with at least 1 numeric character and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfStreetNumber: function (
    input,
    errorMessageEmpty,
    errorMessageValidity
  ) {
    // console.log("form.checkIfStreetNumber()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input is valid.
      if (form.regexMatchAtLeastOneNumericCharacter.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that check if input contain a value type french zip code and call the methods that display the related error message.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   * @return {void}
   */
  checkIfZipCode: function (input, errorMessageEmpty, errorMessageValidity) {
    // console.log("form.checkIfZipCode()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input is valid.
      if (form.regexMatchFiveNumericCharacters.test(input.value)) {
        // We call form.switchInputBorderColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is not valid.
      else {
        // We call form.switchInputBorderColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputBorderColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.addDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   *  Method that check if a input contain a value type of reference and call the methods that display the related error messages.
   * @param {Element} input
   * @param {Element} errorMessageEmpty
   * @param {Element} errorMessageValidity
   */
  checkIfReference: function (input, errorMessageEmpty, errorMessageValidity) {
    console.log("form.checkIfReference()");

    // If input is not empty.
    if (input.value) {
      // We call tools.addDisplayNone() in order to add the display-none class to errorsMessageEmpty.
      tools.addDisplayNone(errorMessageEmpty);

      // If input contain at leat 12 characters.
      if (form.regexMatchAtLeastTweleCharacters.test(input.value)) {
        // We call form.switchInputOutlineColor() to switch the input's outline in green.
        form.switchInputOutlineColor(input, form.colors.green);
        // We call tools.addDisplayNone() in order to add the display-none class to errorMessageValidity.
        tools.addDisplayNone(errorMessageValidity);
      }
      // Else input is empty.
      else {
        // We call form.switchInputOutlineColor() to switch the input's outline in red.
        form.switchInputOutlineColor(input, form.colors.red);
        // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageValidity.
        tools.removeDisplayNone(errorMessageValidity);
        // We add a error to form.numberOfErrors.
        form.numberOfErrors++;
      }
    }
    // Else input is empty.
    else {
      // We call form.switchInputOutlineColor() to switch the input's outline in red.
      form.switchInputOutlineColor(input, form.colors.red);
      // We call tools.removeDisplayNone() in order to remove the display-none class from errorMessageEmpty.
      tools.removeDisplayNone(errorMessageEmpty);
      // We add a error to form.numberOfErrors.
      form.numberOfErrors++;
    }
  },
  /**
   * Method that, after a click on a modify button, allow the user to acces the form's fields to modify is data.
   * @param {Event} event
   * @return {void}
   */
  handleUserProfileUpdate: function (event) {
    // console.log("form.handleUserProfileUpdate()");

    // We get the DOM element form which the event occured.
    let clickedButton = event.currentTarget;

    // If clickedButton is form.modifyMyUserProfileButton.
    if (clickedButton === form.modifyMyUserProfileButton) {
      // We call form.removeDisabledAttribute() to remove the disabled attribute from the elements.
      form.removeDisabledAttribute(form.inputs);
      // We call form.removeDisabledAttribute() to remove the disabled attribute from the elements.
      form.removeDisabledAttribute(form.userCivilityTitleInputs);
      // We call tools.addDisplayNone() in order in order to add the display-none class to the element.
      tools.addDisplayNone(form.modifyMyUserProfileButton);
      // We call tools.removeDisplayNone() in order in order to remove the display-none class from the elements.
      tools.removeDisplayNone(
        form.uploadFileField,
        form.deleteMyUserPictureLink,
        form.updateMyUserProfileButton,
        form.deleteMyUserAccountLink,
        form.userCivilityTitleManInput,
        form.userGenderManLabel,
        form.userCivilityTitleWomanInput,
        form.userGenderWomanLabel
      );
    }
    // Else if clickedButton is form.updateUserProfileButton.
    else if (clickedButton === form.updateMyUserProfileButton) {
      // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
      tools.addDisplayNone(
        form.modifyMyUserProfileButton,
        form.deleteMyUserPictureLink,
        form.deleteMyUserAccountLink
      );
    }
  },
  /**
   * Method that display only the inputs that are checked.
   * @param {Elements} input
   * @param {Elements} label
   * @return {void}
   */
  displayNoneInputNotChecked: function (input, label) {
    // console.log("form.displayNoneInputNotChecked()");

    // If the input is not checked.
    if (!input.checked) {
      // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
      tools.addDisplayNone(input, label);
    }
    // Else the input is checked.
    else {
      // We call tools.removeDisplayNone() in order in order to remove the display-none class from the elements.
      tools.removeDisplayNone(input, label);
    }
  },
  /**
   * Method that handle the layout of the purchase steps during the purchase process.
   * @param {Event} event
   * @return {void}
   */
  handlePurchaseSteps: function (event) {
    // console.log("form.handlePurchaseSteps()");

    // We get the DOM element form which the event occured.
    let clickedElement = event.currentTarget;

    // If clickedElement is identical to form.purchaseConfirmAddressesButton.
    if (
      clickedElement === form.purchaseConfirmAddressesButton ||
      clickedElement === form.addressStep
    ) {
      // We call form.handleAddressesStep() with the value of clickedElement.
      form.handleAddressesStep(clickedElement);
    }
    // Else if clickedElement is identical to form.purchaseConfirmDeliveryModeButton or form.deliveryModeStep.
    else if (
      clickedElement === form.purchaseConfirmDeliveryModeButton ||
      clickedElement === form.deliveryModeStep
    ) {
      // We call form.handleDeliveryModeStep() with the value of clickedElement.
      form.handleDeliveryModeStep(clickedElement);
    }

    // Else if clickedElement is identical to form.purchaseConfirmDeliveryModeButton or form.deliveryModeStep.
    else if (
      clickedElement === form.purchaseConfirmButton ||
      clickedElement === form.paymentMethodStep
    ) {
      // We call form.handleCheckoutMethodSteps() with the value of clickedElement.
      form.handleCheckoutMethodSteps(clickedElement);
    }
  },
  /**
   * Method that handle the layout of the addresses step.
   * @param {Element} clickedElement
   * @return {void}
   */
  handleAddressesStep: function (clickedElement) {
    // console.log("form.handleAddressesStep()");

    // If clickedElement is identical to form.purchaseConfirmAddressesButton.
    if (clickedElement === form.purchaseConfirmAddressesButton) {
      // We call form.checkIfInputIsChecked() to check if form.purchaseBillingAddressInputs is checked.
      form.checkIfInputIsChecked(
        form.purchaseBillingAddressInputs,
        form.errorMessagePurchaseBillingAddressNotChecked
      );
      // We call form.checkIfInputIsChecked() to check if form.purchaseDeliveryAddressInputs is checked.
      form.checkIfInputIsChecked(
        form.purchaseDeliveryAddressInputs,
        form.errorMessagePurchaseDeliveryAddressNotChecked
      );
      // If form.numberOfErrors is supperior to 0.
      if (form.numberOfErrors > 0) {
        // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
        tools.addDisplayNone(
          form.addressStepIconChecked,
          form.purchaseDeliveryModeField,
          form.purchaseConfirmDeliveryModeButton
        );
        // We call tools.removeDisplayNone() in order in order to remove the display-none class from the elements.
        tools.removeDisplayNone(
          form.purchaseBillingAddressField,
          form.purchaseDeliveryAddressField,
          form.purchaseConfirmAddressesButton,
          form.addNewAddressLink
        );
        // We call tools.addClassToElements() in order to add a className to one or many elements.
        tools.addClassToElements(
          "page__title-purchase-step_color_shady-lady",
          form.deliveryModeStep,
          form.paymentMethodStep
        );
        // We reset form.numberOfErrors for the next submit control.
        form.numberOfErrors = 0;
      }
      // Else we don't count any error.
      else {
        // We call tools.removeDisplayNone() in order in order to remove the display-none class from the elements.
        tools.removeDisplayNone(
          form.addressStepIconChecked,
          form.purchaseDeliveryModeField,
          form.purchaseConfirmDeliveryModeButton
        );
        // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
        tools.addDisplayNone(
          form.addNewAddressLink,
          form.purchaseBillingAddressField,
          form.purchaseDeliveryAddressField,
          form.purchaseConfirmAddressesButton
        );
        // We call tools.removeClassesFromElement() in order to remove multiple classNames from the element.
        tools.removeClassesFromElement(
          form.deliveryModeStep,
          "page__title-purchase-step_color_shady-lady"
        );
      }
    }
    // Else if clickedElement is identical to form.addressStep.
    else if (clickedElement === form.addressStep) {
      // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
      tools.addDisplayNone(
        form.addressStepIconChecked,
        form.deliveryModeStepIconChecked,
        form.purchaseDeliveryModeField,
        form.purchaseConfirmDeliveryModeButton,
        form.purchaseCheckoutMethodField,
        form.purchaseTermsOfSaleField,
        form.purchaseConfirmButton
      );
      // We call toold.removeDisplayNone() in order to remove the display-none class from the elements.
      tools.removeDisplayNone(
        form.addNewAddressLink,
        form.purchaseConfirmAddressesButton,
        form.purchaseBillingAddressField,
        form.purchaseDeliveryAddressField
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "page__title-purchase-step_color_shady-lady",
        form.deliveryModeStep,
        form.paymentMethodStep
      );
    }
  },
  /**
   * Method that handle the layout of the delivery mode step.
   * @param {Element} clickedElement
   * @return {void}
   */
  handleDeliveryModeStep: function (clickedElement) {
    // console.log("form.handleDeliveryModeStep()");

    // If clickedElement is identical to form.purchaseConfirmDeliveryModeButton.
    if (clickedElement === form.purchaseConfirmDeliveryModeButton) {
      // We call form.checkIfInputIsChecked() to check if form.purchaseAddressesInputs is checked.
      form.checkIfInputIsChecked(
        form.purchaseDeliveryModeInputs,
        form.errorMessagePurchaseDeliveryModeNotChecked
      );
      // If form.numberOfErrors is supperior to 0.
      if (form.numberOfErrors > 0) {
        // We reset form.numberOfErrors for the next submit control.
        form.numberOfErrors = 0;
      }
      // Else we don't count any error.
      else {
        // We call tools.removeDisplayNone() in order in order to remove the display-none class from the elements.
        tools.removeDisplayNone(
          form.deliveryModeStepIconChecked,
          form.purchaseCheckoutMethodField,
          form.purchaseTermsOfSaleField,
          form.purchaseConfirmButton
          // form.paypalButtonContainer
        );
        // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
        tools.addDisplayNone(
          form.purchaseDeliveryModeField,
          form.purchaseConfirmDeliveryModeButton
        );
        // We call tools.removeClassesFromElement() in order to remove multiple classNames from the element.
        tools.removeClassesFromElement(
          form.paymentMethodStep,
          "page__title-purchase-step_color_shady-lady"
        );
        // form.displayDeliveryModePriceAndTotal();
      }
    }
    // Else if clickedElement is identical to form.deliveryModeStep.
    else if (clickedElement === form.deliveryModeStep) {
      // If form.addressStepIconChecked contains the display-none class.
      if (form.addressStepIconChecked.classList.contains("display-none")) {
        // We leave form.handleDeliveryModeStep() beause form.purchaseAddressesInputs is not checked.
        return;
      }
      // We call tools.addDisplayNone() in order in order to add the display-none class to the elements.
      tools.addDisplayNone(
        form.deliveryModeStepIconChecked,
        form.purchaseCheckoutMethodField,
        form.purchaseTermsOfSaleField,
        form.purchaseConfirmButton,
        form.purchaseBillingAddressField,
        form.purchaseDeliveryAddressField,
        form.purchaseConfirmAddressesButton
      );
      // We call toold.removeDisplayNone() in order to remove the display-none class from the elements.
      tools.removeDisplayNone(
        form.purchaseConfirmDeliveryModeButton,
        form.purchaseDeliveryModeField
      );
      // We call tools.addClassToElements() in order to add a className to one or many elements.
      tools.addClassToElements(
        "page__title-purchase-step_color_shady-lady",
        form.paymentMethodStep
      );
    }
  },
  /**
   * Method that handle the layout of the payment method step.
   * @param {Element} clickedElement
   * @return {void}
   */
  handleCheckoutMethodSteps: function (clickedElement) {
    // console.log("form.handleCheckoutMethodSteps()");

    // If clickedElement is identical to form.purchaseConfirmButton.
    if (clickedElement === form.purchaseConfirmButton) {
      // We call form.checkIfInputIsChecked() to check if form.purchaseAddressesInputs is checked.
      form.checkIfInputIsChecked(
        form.purchaseCheckoutMethodInputs,
        form.errorMessagePurchasePaymentMethodNotChecked
      );
      // We call form.checkIfInputIsChecked() to check if form.termsOfSaleInput is checked.
      form.checkIfInputIsChecked(
        form.termsOfSaleInput,
        form.errorMessagePurchaseTermsOfSaleNotChecked
      );
      // We count the number of checked form.purchaseCheckoutMethodInputs.
      for (
        let index = 0;
        index < form.purchaseCheckoutMethodInputs.length;
        index++
      ) {
        // If one of the form.purchaseCheckoutMethodInputs is checked.
        if (form.purchaseCheckoutMethodInputs[index].checked) {
          console.log(form.purchaseCheckoutMethodInputs[index]);

          //! START : Stripe checkout.
          let stripeInput = document.querySelector(".form-field__stripe-input");
          // let stripeCheckoutLink = document.getElementById("stripe-checkout-link");
          let paypalInput = document.querySelector(".form-field__paypal-input");

          if (
            form.purchaseCheckoutMethodInputs[index].value ===
            stripeInput.dataset.value
          ) {
            console.log(
              stripeInput.dataset.value + " ✅ : init Stripe checkout 💳"
            );
          }
          //! END : Stripe checkout

          // TODO #3 START : Make Paypal checkout.
          // The value of the PHP constante Purchase::CHECKOUT_METHOD_PAYPAL in is a HTML dataset attribut whose name is data-value.
          // If the value of the input is identical to the value of this attribut.
          if (
            form.purchaseCheckoutMethodInputs[index].value ===
            paypalInput.dataset.value
          ) {
            // We simulate a click on the Paypal button to init the payment with the Paypal method.
            console.log(paypalInput.dataset.value + " : start Paypal checkout");
            // form.paypalButton.click();
            // return;
          }
          // TODO #3 END : Paypal checkout
        }
      }

      // We call form.submitFormIfNoError() with form.loginForm in argument to check if the form contain some errors and submit him if not.
      form.submitFormIfNoError(form.purchaseForm);
    }
    // Else if clickedElement is identical to form.paymentMethodStep.
    else if (clickedElement === form.paymentMethodStep) {
      // If form.addressStepIconChecked or form.deliveryModeStepIconChecked contain the display-none class.
      if (
        form.addressStepIconChecked.classList.contains("display-none") ||
        form.deliveryModeStepIconChecked.classList.contains("display-none")
      ) {
        // We leave form.handleCheckoutMethodSteps() beause form.purchaseDeliveryModeInputs is not checked.
        return;
      }
    }
  },
  /**
   * Methot that create a HTML element with the form-check class name before each given inputs and put inside each new element the following pair of input and label.
   * @param {NodeList} inputs
   * @return {void}
   */
  createDivForEachInputAndLabelOfCheckField: function (inputs) {
    // console.log("createDivForEachInputAndLabelOfCheckField()");

    // We create a empty array for the choice fields.
    let checkFields = [];
    // For each input of inputs.
    for (input of inputs) {
      // We create a HTML element with the <div> tag name.
      let field = document.createElement("div");
      // We set a class and a class name to the <div>.
      field.setAttribute("class", "form-check");
      // We insert the <div> before the input.
      input.insertAdjacentElement("beforebegin", field);
      // We push each field to checkFields.
      checkFields.push(field);
    }

    // For each field of checkFields.
    for (field of checkFields) {
      // We get each input which are the nextElementSibling of each field.
      let input = field.nextElementSibling;
      // We get each label which are the nextElementSibling each field.
      let label = input.nextElementSibling;
      // We add each input in each field.
      field.appendChild(input);
      // We add each label in each field.
      field.appendChild(label);
    }
  },
  /**
   * Methot that create a HTML img tag before each label content in the delivery mode field and call form.displayDeliveryModePicture() to display the picture of each created img tag.
   * @return {void}
   */
  createImgTagForDeliveryModePicture: function () {
    // console.log("form.createImgTagForDeliveryModePicture()");

    // We get the div in which all the delivery modes fields are store.
    const deliveryModeField =
      document.getElementById("purchase_deliveryMode") ??
      document.getElementById("admin_purchase_deliveryMode");

    // We get the labels content in deliveryModeField.
    const labels = deliveryModeField.getElementsByTagName("label");

    // For each label of labels.
    for (let label of labels) {
      // We create a HTML element with the <img> tag name.
      let imgTag = document.createElement("img");
      // We set a className to the <img>.
      imgTag.setAttribute("class", "page__picture-delivery-mode");
      // We insert the <img> before the label.
      label.insertAdjacentElement("beforebegin", imgTag);
    }

    // We call form.displayDeliveryModePicture() to display before each delivery mode label the picture related to the delivery mode.
    form.displayDeliveryModePicture();
  },
  /**
   * Methot that display in each delivery mode label the picture related to the delivery mode.
   * @return {void}
   */
  displayDeliveryModePicture: function () {
    // console.log("form.displayDeliveryModePictures()");

    // The database value of the picture is in a HTML dataset attribut whose name is data-pictures.
    // We use the JSON.parse() method to convert the string value to a object.
    let deliveryModePictures = JSON.parse(
      form.purchaseDeliveryModeField.dataset.pictures
    );

    // We get all the HTML img tag witch the specify className.
    const imgTags = document.querySelectorAll(".page__picture-delivery-mode");

    // We initialize a counter which will be the index of each deliveryModePictures.
    let index = 0;
    // For each tag of imgTags.
    for (let tag of imgTags) {
      // We set a src attribute with a path to the folder where we backup the picture of each delievery mode and we dynamically add the name of the picture to the path.
      tag.setAttribute(
        "src",
        "/" +
          form.purchaseDeliveryModeField.dataset.folderpath +
          "/" +
          deliveryModePictures[index]
      );
      // We incremente our counter to switch to the next delivery mode pictures.
      index++;
    }
  },
  /**
   * Methot that create a HTML img tag before each label content in the payment method field and call form.displayPaymentMethodPicture() to display the picture of each created img tag.
   * @return {void}
   */
  createImgTagForPaymentMethodPicture: function () {
    // console.log("form.createImgTagForPaymentMethodPicture()");

    // We get the div in which all the payment methodes fields are store.
    const purchaseConfirmPayementMethod = document.getElementById(
      "purchase_checkoutMethod"
    );

    // We get the labels content in purchaseConfirmPayementMethod.
    const labels = purchaseConfirmPayementMethod.getElementsByTagName("label");

    //! START : create img tag with loop
    // // We set the number of img tag we need for the credit card payement method.
    // let numberOfNeededImgTagForCreditCardPaymentMethod = 3;
    // // We start a counter at 0 and we incremente it until it reach numberOfNeededImgTagForCreditCardPaymentMethod.
    // for (
    //   let index = 0;
    //   index < numberOfNeededImgTagForCreditCardPaymentMethod;
    //   index++
    // ) {
    //   // We create a HTML element with the <img> tag name.
    //   let imgTag = document.createElement("img");
    //   // We set a className to the <img>.
    //   imgTag.setAttribute("class", "page__picture-checkout-method");
    //   // We insert the <img> after the label.
    //   labels[0].insertAdjacentElement("afterend", imgTag);
    // }
    //! END : create img tag with loop

    // We create a empty array for the img tags.
    let imgTags = [];
    // We create a 3 HTML elements with the <img> tag name.
    let firstImgTag = document.createElement("img");
    let secondImgTag = document.createElement("img");
    let thirdImgTag = document.createElement("img");
    let fourthImgTag = document.createElement("img");
    // We set a common and a specific className to each imgTag.
    firstImgTag.setAttribute(
      "class",
      "page__picture-checkout-method page__picture-american-express"
    );
    secondImgTag.setAttribute(
      "class",
      "page__picture-checkout-method page__picture-cb"
    );
    thirdImgTag.setAttribute(
      "class",
      "page__picture-checkout-method page__picture-mastercard"
    );
    fourthImgTag.setAttribute(
      "class",
      "page__picture-checkout-method page__picture-visa"
    );
    // We push each img tag to imgTags.
    imgTags.push(firstImgTag, secondImgTag, thirdImgTag, fourthImgTag);

    // For each imgTag of imgTags.
    for (let imgTag of imgTags) {
      // We insert the <img> after the label.
      labels[0].insertAdjacentElement("afterend", imgTag);
    }

    // We create a fourth img tag for the second field which is the Paypal payment method.
    let fifthImgTag = document.createElement("img");
    // We set a className to the imgTag.
    fifthImgTag.setAttribute(
      "class",
      "page__picture-checkout-method page__picture-paypal"
    );
    // We insert fifthImgTag after the second label.
    labels[1].insertAdjacentElement("afterend", fifthImgTag);

    // We call form.displayPaymentMethodPicture() to display after each payment method label the picture related to the payment method.
    form.displayPaymentMethodPicture();
  },
  /**
   * Methot that display in each payment method label the picture related to the payment method.
   * @return {void}
   */
  displayPaymentMethodPicture: function () {
    // console.log("form.displayPaymentMethodPicture()");

    // We get all the HTML img tag witch the specify className.
    const imgTags = document.querySelectorAll(".page__picture-checkout-method");

    // The path of the folder where the images of the logos are located.
    const folderPath = "/assets/images/logos/";

    // We set a src attribute with a path to the folder where we backup the pictures of each payment method. We the change the name of the picture we want to dislay according to the input.
    imgTags[0].setAttribute("src", folderPath + "visa.svg");
    imgTags[1].setAttribute("src", folderPath + "mastercard.svg");
    imgTags[2].setAttribute("src", folderPath + "cb.svg");
    imgTags[3].setAttribute("src", folderPath + "american-express.png");
    imgTags[4].setAttribute("src", folderPath + "paypal.svg");
  },
  /**
   * Method that remove the disabled attribute from the inputs.
   * @param {Element} inputs
   * @return {void}
   */
  removeDisabledAttribute: function (inputs) {
    // console.log("form.removeDisabledAttribute()");

    // For each input of inputs.
    for (let input of inputs) {
      // We remove the disabled attribute.
      input.removeAttribute("disabled");
    }
  },
  /**
   * Method that check if a form contain some errors and submit him if not.
   * @param {Element} formToSubmit
   * @return {void}
   */
  submitFormIfNoError: function (formToSubmit) {
    console.log("form.submitFormIfNoError()");

    console.log(formToSubmit);

    // If form.numberOfErrors is supperior to 0.
    if (form.numberOfErrors > 0) {
      console.log("Form not submitted ❌");
      console.log("Number of error : " + form.numberOfErrors);
      // We reset form.numberOfErrors for the next submit control.
      form.numberOfErrors = 0;
      // We leave submitFormIfNoError().
      return;
    }
    // Else we don't count any error.
    else {
      // We submit the formToSubmit.
      formToSubmit.submit();
    }
  },
};
