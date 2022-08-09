# **Database**

## **Tables**

### **User**

- id
- email
- roles
- password
- firstName
- lastName
- civilityTitle 
- picture
- addresses (OneToMany)
- purchases (OneToMany)
- createdAt
- updatesAt

| id  | email                | roles | password                                  | first_name | last_name | civility_title   | picture      | created_at          | created_at          |
| --- | -------------------- | ----- | ----------------------------------------- | ---------- | --------- | -------- | ------------ | ------------------- | ------------------- |
| 1   | clark.kent@email.com | []    | $2y$13$jbioeyqTvwNuJLvClhWeh.n2qBXADEO4rb | Clark      | KENT      | Monsieur | superman.png | 2022-02-09 10:03:11 | 2022-02-09 10:03:11 |

Relation entre **User** & **Purchase** :

- Un **User** est lié à combien de **Purchase** au minimum ? -> 0
- Un **User** est lié à comnbien de **Purchase** au maximum ? -> N

Relation entre **User** & **Address** :

- Un **User** est lié à combien d' **Address** au minimum ? -> 0
- Un **User** est lié à 0 **Address** au minimum ? -> N

### **Product**

- id
- name
- slug
- category (Many To One)
- createdAt
- updatedAt

| id  | name          | slug          | category | createdAt           | createdAt           |
| --- | ------------- | ------------- | -------- | ------------------- | ------------------- |
| 1   | Air Force One | air-force-one | shoes    | 2022-02-09 10:03:11 | 2022-02-09 10:03:11 |

Relation entre **Product** & **Category** :

- Un **Product** est lié à combien de **Category** au minimum ? -> 1
- Un **Product** est lié à combien de **Category** au maximum ? -> 1

Relation entre **Product** & **PurchaseItem** :

- Un **Product** est lié à combien de **PurchaseItem** au minimum ? - > 0
- Un **Product** est lié à combien de **PurchaseItem** au maximum ? - > N

### **Category**

- id
- name
- slug
- produts (OneToMany)
- createdAt
- updatedAt

| id  | name | slug | createdAt           | createdAt           |
| --- | ---- | ---- | ------------------- | ------------------- |
| 1   | Shoe | shoe | 2022-02-09 10:03:11 | 2022-02-09 10:03:11 |

Relation entre **Category** & **Product** :

- Une **Category** est liée à combien de **Product** au minimum ? -> 0
- Une **Category** est liée à combien de **Product** au maximum ? -> N

### **Address**

- id
- firstName
- lastName
- streetNumber
- streetName
- zipCode
- city
- country
- phoneNumber
- user (ManyToOne)
- createdAt
- updatedAt

| id  | first_name | last_mame | street_number | street_name  | zip_code | city       | country      | phone_number | user_id | created_at          | updated_at          |
| --- | ---------- | --------- | ------------- | ------------ | -------- | ---------- | ------------ | ------------ | ------- | ------------------- | ------------------- |
| 1   | Clark      | KENT      | 42            | Hickory Lane | 66605    | Smallville | Kansas - USA | 0642424242   | 1       | 2022-02-09 10:03:11 | 2022-02-09 10:03:11 |

Relations entre **Address** & **User** :

- Une **Address** est liée à combien de **User** au minimum ? -> 1
- Une **Address** est liée à combien de **User** au maximum ? -> 1

### **Purchase**

- id
- reference
- billingAddress
- deliveryAddress
- subtotal
- deliveryMode
- deliveryModePrice
- total
- paymentMethod
- status
- user (ManyToOne)
- purchaseItems (OneToMany)
- purchaseAt
- updatedAt

| id  | reference    | billing_address                                                       | delivery_address                                                               | subtotal | delivery_mode        | delivery_mode_price | total | payment_method              | status | user_id | created_at          | updated_at          |
| --- | ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- | -------------------- | ------------------- | ----- | --------------------------- | ------ | ------- | ------------------- | ------------------- |
| 1   | 599222F6A83E | Clark KENT 42 Hickory Lane 66605 - Smallville Kansas - USA 0642424242 | Clark KENT 42 Justice League street 88805 - Metropolis Kansas - USA 0642424242 | 1000     | Livraison à Domicile | 990                 | 1990  | Paiement par Carte Bancaire | Payée  | 1       | 2022-02-09 10:03:11 | 2022-02-09 10:03:11 |

Relations entre **Purchase** & **User** :

- Une **Purchase** est liée à combien de **User** au minimum ? -> 1
- Une **Purchase** est liée à combien de **User** au maximum ? -> 1

Relation entre **Purchase** & **PurchaseItem** :

- Une **Purchase** est liée à de **PurchaseItem** au minimum -> 1 ;
- Une **Purchase** est liée à de **PurchaseItem** au maximum -> N ;

### **purchase_item**

- id
- productName
- productreference
- productPrice
- quantity
- total
- product (ManyToOne)
- purchase (ManyToOne)

Relation entre **PurchaseItem** & **Product** :

- Un **PurchaseItem** est lié à combien de **Product** au minimum ? -> 1
- Un **PurchaseItem** est lié à combien de **Product** au maximum ? -> 1

Relation entre **PurchaseItem** & **Purchase** :

- Un **PurchaseItem** est lié à combien de **Purchase** au minimum -> 1
- Un **PurchaseItem** est lié à combien de **Purchase** au maximum -> 1

### **delivery_mode**

- id
- name
- description
- price
- picture
- min_cart_amount_for_free_delivery
- createdAt
- updatedAt

| id  | name                 | description                           | price | picture           | min_cart_amount_for_free_delivery |
| --- | -------------------- | ------------------------------------- | ----- | ----------------- | --------------------------------- |
| 1   | Livraison à Domicile | En 48h jours ouvrés. Offert dés 99 €. | 5000  | home-delivery.png | 9900                              |

## Data Dictionnary

| Fields | Types | Particularities | Descriptions |
| ------ | ----- | --------------- | ------------ |
