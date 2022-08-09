| URLs                                                              | Route names                   | Methods HTTP | Controllers             | methods()         | Status |
| ----------------------------------------------------------------- | ----------------------------- | ------------ | ----------------------- | ----------------- | ------ |
| /                                                                 | home                          | GET          | MainController          | home()            | ✅     |
| /contact                                                          | contact                       | GET , POST   | MainController          | contact()         | ✅     |
| /a-propos                                                         | about                         | GET          | MainController          | about()           | ✅     |
| /conditions-generales-d-utilisation                               | terms_of_services             | GET          | MainController          | termsOfServices() | ✅     |
| /conditions-generales-de-ventes                                   | terms_of_sales                | GET          | MainController          | termsOfSales()    | ✅     |
| /connexion                                                        | app_login                     | GET, POST    | SecurityController      | login()           | ❌     |
| /deconnexion                                                      | app_logout                    | GET, POST    | SecurityController      | logout()          | ❌     |
| /reinitialisation-mot-de-passe/demande                            | app_forgot_password_request   | GET, POST    | ResetPasswordController | request()         | ❌     |
| /reinitialisation-mot-de-passe/verification-e-mail                | app_check_email               | GET          | ResetPasswordController | checkEmail()      | ❌     |
| /reinitialisation-mot-de-passe/reset/{token}                      | app_reset_password            | GET          | ResetPasswordController | reset()           | ❌     |
| /inscription                                                      | app_register                  | GET, POST    | RegistrationController  | register()        | ✅     |
| /admin                                                            | admin_dashboard               | GET          | AdminMainController     | dashboard()       | ✅     |
| /admin/utilisateurs/creer                                         | admin_user_create             | GET, POST    | AdminUserController     | create()          | ✅     |
| /admin/utilisateurs                                               | admin_user_list               | GET          | AdminUserController     | list()            | ✅     |
| /admin/utilisateurs/{id}                                          | admin_user_detail             | GET          | AdminUserController     | detail()          | ✅     |
| /admin/utilisateurs/{id}/mettre-a-jour                            | admin_user_update             | GET, POST    | AdminUserController     | update()          | ✅     |
| /admin/utilisateurs/{id}/supprimer-photo                          | admin_user_delete_picture     | GET, POST    | AdminUserController     | deletePicture()   | ✅     |
| /admin/utilisateurs/{id}/supprimer                                | admin_user_delete             | GET, POST    | AdminUserController     | delete()          | ❌     |
| /admin/produits/creer                                             | admin_product_create          | GET, POST    | AdminProductController  | create()          | ✅     |
| /admin/produits                                                   | admin_product_list            | GET          | AdminProductController  | list()            | ✅     |
| /admin/produits/{slug}                                            | admin_product_detail          | GET          | AdminProductController  | detail()          | ✅     |
| /admin/produits/{slug}/mettre-a-jour                              | admin_product_update          | GET, POST    | AdminProductController  | update()          | ✅     |
| /admin/produit/{id}/supprimer                                     | admin_product_delete          | GET, POST    | AdminProductController  | delete()          | ✅     |
| /admin/categories/creer                                           | admin_category_create         | GET, POST    | AdminCategoryController | create()          | ✅     |
| /admin/categories                                                 | admin_category_list           | GET          | AdminCategoryController | list()            | ✅     |
| /admin/categories/{slug}/produits                                 | admin_category_product_list   | GET          | AdminCategoryController | productList()     | ✅     |
| /admin/categories/{slug}                                          | admin_category_detail         | GET          | AdminCategoryController | detail()          | ✅     |
| /admin/categories/{categorySlug}/produits/{productSlug}           | admin_category_product_detail | GET          | AdminCategoryController | productDetail()   | ✅     |
| /admin/categories/{slug}/mettre-a-jour                            | admin_category_update         | GET, POST    | AdminCategoryController | update()          | ✅     |
| /admin/categories/{id}/supprimer                                  | admin_category_delete         | GET, POST    | AdminCategoryController | delete()          | ✅     |
| /admin/utilisateurs/{id}/adresses/creer                           | admin_address_create          | GET, POST    | AdminAddressController  | create()          | ✅     |
| /admin/utilisateurs/{id}/adresses                                 | admin_address_user_list       | GET          | AdminAddressController  | list()            | ✅     |
| /admin/utilisateurs/{userId}/adresses/{addressId}                 | admin_address_detail          | GET          | AdminAddressController  | detail()          | ✅     |
| /admin/utilisateurs/{userId}/adresses/{addressId}/mettre-a-jour   | admin_address_update          | GET, POST    | AdminAddressController  | update()          | ✅     |
| /admin/utilisateurs/{userId}/adresses/{addressId}/supprimer       | admin_address_delete          | GET, POST    | AdminAddressController  | delete()          | ✅     |
| /admin/utilisateurs/{id}/commandes/creer                          | admin_purchase_create         | GET, POST    | AdminPurchaseController | create()          | ✅     |
| /admin/commandes                                                  | admin_purchase_list           | GET          | AdminPurchaseController | list()            | ✅     |
| /admin/utilisateurs/{id}/commandes                                | admin_purchase_user_list      | GET          | AdminPurchaseController | userList()        | ✅     |
| /admin/commandes/{id}                                             | admin_purchase_detail         | GET          | AdminPurchaseController | detail()          | ✅     |
| /admin/utilisateurs/{userId}/commandes/{purchaseId}               | admin_purchase_user_detail    | GET          | AdminPurchaseController | userDetail()      | ✅     |
| /admin/utilisateurs/{userId}/commandes/{purchaseId}/mettre-a-jour | admin_purchase_update         | GET, POST    | AdminPurchaseController | userDetail()      | ✅     |
| /admin/purchase/{id}/supprimer                                    | admin_purchase_delete         | GET, POST    | AdminPurchaseController | delete()          | ✅     |
| /profile                                                          | user_profile                  | GET, POST    | UserController          | profile()         | ✅     |
| /supprimer-ma-photo                                               | user_delete_picture           | GET, POST    | UserController          | deletePicture()   | ✅     |
| /supprimer-mon-compte                                             | user_delete_my-account        | GET, POST    | UserController          | deleteMyAccount() | ❌     |
| /produits                                                         | product_list                  | GET          | ProductController       | list()            | ✅     |
| /produits/{slug}                                                  | product_detail                | GET          | ProductController       | detail()          | ✅     |
| /categories                                                       | category_list                 | GET          | CategoryController      | list()            | ✅     |
| /categories/{slug}/produits                                       | category_product_list         | GET          | CategoryController      | productList()     | ✅     |
| /categories/{categorySlug}/produits/{productSlug}                 | category_product_detail       | GET          | CategoryController      | productDetail()   | ✅     |
| /adresses/creer                                                   | address_create                | GET, POST    | AddressController       | create()          | ✅     |
| /adresses                                                         | address_list                  | GET          | AddressController       | list()            | ✅     |
| /adresses/{id}                                                    | address_detail                | GET          | AddressController       | detail()          | ✅     |
| /adresses/{id}/mettre-a-jour                                      | address_update                | GET, POST    | AddressController       | update()          | ✅     |
| adresses/{id}/supprimer                                           | address_delete                | GET, POST    | AddressController       | delete()          | ✅     |
| /commande                                                         | purchase                      | GET, POST    | PurchaseController      | purchase()        | ✅     |
| /commandes                                                        | purchase_list                 | GET          | PurchaseController      | list()            | ✅     |
| /commandes/{id}                                                   | purchase_detail               | GET          | PurchaseController      | detail()          | ✅     |
| /panier/ajouter/produits/{id}                                     | cart_add                      | GET          | CartController          | add()             | ✅     |
| /panier                                                           | cart_detail                   | GET          | CartController          | add()             | ✅     |
| /panier/produits/{id}/supprimer                                   | cart_delete                   | GET          | CartController          | delete()          | ✅     |
| /panier/produits/{id}/decrementer                                 | cart_decremente               | GET          | CartController          | decremente()      | ✅     |
