<?php

namespace App\DataFixtures;

use App\Entity\Address;
use App\Entity\Category;
use App\Entity\DeliveryMode;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Entity\PurchaseItem;
use App\Entity\User;
use App\Service\PurchaseAddress;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $userPasswordHasherInterface, private PurchaseAddress $purchaseAddress)
    {
    }

    public function load(ObjectManager $objectManager): void
    {
        // User 

        // We create a array of users. 
        $users = [];

        // We create a new User with a ROLE_ADMIN. 
        $userAdmin = new User();
        // We set the properties of the user. 
        $userAdmin
            ->setRoles(['ROLE_ADMIN'])
            ->setCivilityTitle(User::MAN_CIVILITY_TITLE)
            ->setFirstName('Clark')
            ->setLastName(strtoupper('Kent'))
            ->setEmail('clark.kent@email.com')
            ->setPassword($this->userPasswordHasherInterface->hashPassword($userAdmin, '2CBb4cb73201f86563893241A@'))
            ->setPicture(User::MAN_PICTURE);

        // We the userAdmin in the array of users.
        $users[] = $userAdmin;

        // We create a array of users with the data of the users we want to create. 
        $usersToCreate = [
            0 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Lana',
                'Last Name' => 'Lang',
                'E-mail' => 'lana.lang@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
            1 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Chloe',
                'Last Name' => 'Sullivan',
                'E-mail' => 'chloe.sullivan@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
            2 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Pete',
                'Last Name' => 'Ross',
                'E-mail' => 'pete.ross@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            3 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Jonathan',
                'Last Name' => 'Kent',
                'E-mail' => 'jonathan.kent@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            4 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Martha',
                'Last Name' => 'Kent',
                'E-mail' => 'martha.kent@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
            5 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Lois',
                'Last Name' => 'Lane',
                'E-mail' => 'lois.lane@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
            6 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Kara',
                'Last Name' => 'Kent',
                'E-mail' => 'kara.kent@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
            7 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Bart',
                'Last Name' => 'Allen',
                'E-mail' => 'bart.allen@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            8 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Oliver',
                'Last Name' => 'Queen',
                'E-mail' => 'oliver.queen@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            9 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Arthur',
                'Last Name' => 'Curry',
                'E-mail' => 'arthur.curry@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            10 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Victor',
                'Last Name' => 'Stone',
                'E-mail' => 'victor.stone@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            11 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Lex',
                'Last Name' => 'Luthor',
                'E-mail' => 'lex.luthor@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            12 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Lionel',
                'Last Name' => 'Luthor',
                'E-mail' => 'lionel.luthor@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            13 => [
                'Civility Title' => User::MAN_CIVILITY_TITLE,
                'First Name' => 'Jimmy',
                'Last Name' => 'Olson',
                'E-mail' => 'jimmy.olson@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::MAN_PICTURE,
            ],
            14 => [
                'Civility Title' => User::WOMAN_CIVILITY_TITLE,
                'First Name' => 'Tess',
                'Last Name' => 'Mercer',
                'E-mail' => 'tess.mercer@email.com',
                'Password' => '2CBb4cb73201f86563893241A@',
                'Picture' => User::WOMAN_PICTURE,
            ],
        ];

        // For each userToCreate in usersToCreate.
        foreach ($usersToCreate as $userToCreate) {
            // We create a new User. 
            $user = new User();
            $user
                ->setCivilityTitle($userToCreate['Civility Title'])
                ->setFirstName($userToCreate['First Name'])
                ->setLastName(strtoupper($userToCreate['Last Name']))
                ->setEmail(strtolower($userToCreate['First Name']) . '.' . strtolower($userToCreate['Last Name']) . '@email.com')
                ->setPassword($this->userPasswordHasherInterface->hashPassword($user, $userToCreate['Password']))
                ->setPicture($userToCreate['Picture']);

            // We push the user in the array of users.
            $users[] = $user;
        }

        // For each user in users. 
        foreach ($users as $user) {
            // We call the persit() method of the ObjectManager to put on hold the data.
            $objectManager->persist($user);
        }

        // Address

        // We create differents addresses. 
        $kentFarmAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Hickory Lane',
            'Zip Code' => '66605',
            'City' => 'Smallville',
            'Country' => 'Kansas - USA',
            'Phone Number' => '0642424242',
        ];

        $metropolisAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Superman Street',
            'Zip Code' => '11105',
            'City' => 'Metropolis',
            'Country' => 'Kansas - USA',
            'Phone Number' => '0642424242',
        ];

        $talonAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Main Street',
            'Zip Code' => '66605',
            'City' => 'Smallville',
            'Country' => 'Kansas - USA',
            'Phone Number' => '0642424242',
        ];

        $luthorMansionAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Mansion Street',
            'Zip Code' => '66605',
            'City' => 'Smallville',
            'Country' => 'Kansas - USA',
            'Phone Number' => '0642424242',
        ];

        $centralCityAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Flash Street',
            'Zip Code' => '22205',
            'City' => 'Central City',
            'Country' => 'Illinois - USA',
            'Phone Number' => '0642424242',
        ];

        $tempestKeyAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Aquaman Street',
            'Zip Code' => '33305',
            'City' => 'Tempest Key',
            'Country' => 'Florida - USA',
            'Phone Number' => '0642424242',
        ];

        $starCityAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Green Arrow Street',
            'Zip Code' => '44405',
            'City' => 'Star City',
            'Country' => 'California - USA',
            'Phone Number' => '0642424242',
        ];

        $gatewayCityAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Wonder Woman Street',
            'Zip Code' => '55505',
            'City' => 'Gateway City',
            'Country' => 'California - USA',
            'Phone Number' => '0642424242',
        ];

        $gothamCityAddress = [
            'First Name' => '',
            'Last Name' => '',
            'Street Number' => '710',
            'Street Name' => 'Batman Street',
            'Zip Code' => '77705',
            'City' => 'Gotham City',
            'Country' => 'Illinois - USA',
            'Phone Number' => '0642424242',
        ];

        // We create a array of addresses. 
        $addresses = [];

        // For each user in users.
        foreach ($users as $user) {
            // If the last name of the user is identical to the give last names. 
            if (
                $user->getLastName() === 'KENT' ||
                $user->getLastName() === 'LANE'
            ) {
                // We create a new Address.
                $firstAddress = new Address();
                $firstAddress
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($kentFarmAddress['Street Number'])
                    ->setStreetName($kentFarmAddress['Street Name'])
                    ->setZipCode($kentFarmAddress['Zip Code'])
                    ->setCity($kentFarmAddress['City'])
                    ->setCountry($kentFarmAddress['Country'])
                    ->setPhoneNumber($kentFarmAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $firstAddress;

                // We create a new Address.
                $secondAddress = new Address();
                $secondAddress
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($metropolisAddress['Street Number'])
                    ->setStreetName($metropolisAddress['Street Name'])
                    ->setZipCode($metropolisAddress['Zip Code'])
                    ->setCity($metropolisAddress['City'])
                    ->setCountry($metropolisAddress['Country'])
                    ->setPhoneNumber($metropolisAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $secondAddress;

                // For each address in addresses. 
                foreach ($addresses as $address) {
                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($address);
                }
            }
            // Else if the last name of the user is identical to the give last names.  
            else if (
                $user->getLastName() === 'LANG' ||
                $user->getLastName() === 'SULLIVAN'
            ) {
                // We create a new Address.
                $firstAddress = new Address();
                $firstAddress
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($talonAddress['Street Number'])
                    ->setStreetName($talonAddress['Street Name'])
                    ->setZipCode($talonAddress['Zip Code'])
                    ->setCity($talonAddress['City'])
                    ->setCountry($talonAddress['Country'])
                    ->setPhoneNumber($talonAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $firstAddress;

                // We create a new Address.
                $secondAddress = new Address();
                $secondAddress
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($gatewayCityAddress['Street Number'])
                    ->setStreetName($gatewayCityAddress['Street Name'])
                    ->setZipCode($gatewayCityAddress['Zip Code'])
                    ->setCity($gatewayCityAddress['City'])
                    ->setCountry($gatewayCityAddress['Country'])
                    ->setPhoneNumber($gatewayCityAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $secondAddress;

                // For each address in addresses. 
                foreach ($addresses as $address) {
                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($address);
                }
            }
            // Else if the last name of the user is identical to the give last name. 
            else if ($user->getLastName() === 'ROSS') {
                // We create a new Address.
                $address = new Address();
                $address
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($talonAddress['Street Number'])
                    ->setStreetName($talonAddress['Street Name'])
                    ->setZipCode($talonAddress['Zip Code'])
                    ->setCity($talonAddress['City'])
                    ->setCountry($talonAddress['Country'])
                    ->setPhoneNumber($talonAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $address;

                // We call the persit() method of the ObjectManager to put on hold the data.
                $objectManager->persist($address);
            }
            // Else if the last name of the user is identical to the given last names. 
            else if (
                $user->getLastName() === 'ALLEN' ||
                $user->getLastName() === 'QUEEN' ||
                $user->getLastName() === 'CURRY' ||
                $user->getLastName() === 'STONE'
            ) {
                // We create a new Address.
                $address = new Address();
                $address
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($metropolisAddress['Street Number'])
                    ->setStreetName($metropolisAddress['Street Name'])
                    ->setZipCode($metropolisAddress['Zip Code'])
                    ->setCity($metropolisAddress['City'])
                    ->setCountry($metropolisAddress['Country'])
                    ->setPhoneNumber($metropolisAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $address;

                // We call the persit() method of the ObjectManager to put on hold the data.
                $objectManager->persist($address);

                // If the last name of the user is identical to the give last name. 
                if ($user->getLastName() === 'ALLEN') {
                    // We create a new Address.
                    $address = new Address();
                    $address
                        ->setUser($user)
                        ->setFirstName($user->getFirstName())
                        ->setLastName($user->getLastName())
                        ->setStreetNumber($centralCityAddress['Street Number'])
                        ->setStreetName($centralCityAddress['Street Name'])
                        ->setZipCode($centralCityAddress['Zip Code'])
                        ->setCity($centralCityAddress['City'])
                        ->setCountry($centralCityAddress['Country'])
                        ->setPhoneNumber($centralCityAddress['Phone Number']);

                    // We push the address in the array of addresses.
                    $addresses[] = $address;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($address);
                }
                // Else if the last name of the user is identical to the give last name. 
                else if ($user->getLastName() === 'QUEEN') {
                    // We create a new Address.
                    $address = new Address();
                    $address
                        ->setUser($user)
                        ->setFirstName($user->getFirstName())
                        ->setLastName($user->getLastName())
                        ->setStreetNumber($starCityAddress['Street Number'])
                        ->setStreetName($starCityAddress['Street Name'])
                        ->setZipCode($starCityAddress['Zip Code'])
                        ->setCity($starCityAddress['City'])
                        ->setCountry($starCityAddress['Country'])
                        ->setPhoneNumber($starCityAddress['Phone Number']);

                    // We push the address in the array of addresses.
                    $addresses[] = $address;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($address);
                }
                // Else if the last name of the user is identical to the give last name. 
                else if ($user->getLastName() === 'CURRY') {
                    // We create a new Address.
                    $address = new Address();
                    $address
                        ->setUser($user)
                        ->setFirstName($user->getFirstName())
                        ->setLastName($user->getLastName())
                        ->setStreetNumber($tempestKeyAddress['Street Number'])
                        ->setStreetName($tempestKeyAddress['Street Name'])
                        ->setZipCode($tempestKeyAddress['Zip Code'])
                        ->setCity($tempestKeyAddress['City'])
                        ->setCountry($tempestKeyAddress['Country'])
                        ->setPhoneNumber($tempestKeyAddress['Phone Number']);

                    // We push the address in the array of addresses.
                    $addresses[] = $address;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($address);
                }
            }
            // Else if the last name of the user is identical to the give last name. 
            else if (
                $user->getLastName() === 'LUTHOR' ||
                $user->getLastName() === 'MERCER'
            ) {
                // We create a new Address.
                $address = new Address();
                $address
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($luthorMansionAddress['Street Number'])
                    ->setStreetName($luthorMansionAddress['Street Name'])
                    ->setZipCode($luthorMansionAddress['Zip Code'])
                    ->setCity($luthorMansionAddress['City'])
                    ->setCountry($luthorMansionAddress['Country'])
                    ->setPhoneNumber($luthorMansionAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $address;

                // We call the persit() method of the ObjectManager to put on hold the data.
                $objectManager->persist($address);
            }
            // Else if the last name of the user is identical to the give last name. 
            else if ($user->getLastName() === 'OLSON') {
                // We create a new Address.
                $address = new Address();
                $address
                    ->setUser($user)
                    ->setFirstName($user->getFirstName())
                    ->setLastName($user->getLastName())
                    ->setStreetNumber($talonAddress['Street Number'])
                    ->setStreetName($talonAddress['Street Name'])
                    ->setZipCode($talonAddress['Zip Code'])
                    ->setCity($talonAddress['City'])
                    ->setCountry($talonAddress['Country'])
                    ->setPhoneNumber($talonAddress['Phone Number']);

                // We push the address in the array of addresses.
                $addresses[] = $address;

                // We call the persit() method of the ObjectManager to put on hold the data.
                $objectManager->persist($address);
            }
        }

        // // For each address in addresses. 
        // foreach ($addresses as $address) {
        //     // We call the persit() method of the ObjectManager to put on hold the data.
        //     $objectManager->persist($address);
        // }

        // Category & Product

        // We create a array of categories with the data of the categories we want to create. 
        $categoriesToCreate = [
            0 => [
                'Name' => 'T-shirt',
                'Slug' => 't-shirt',
            ],
            1 => [
                'Name' => 'Sweat',
                'Slug' => 'sweat',
            ],
            2 => [
                'Name' => 'Jean',
                'Slug' => 'jean',
            ],
            3 => [
                'Name' => 'Jogging',
                'Slug' => 'jogging',
            ],
            4 => [
                'Name' => 'Short En Jean',
                'Slug' => 'short-en-jean',
            ],
            5 => [
                'Name' => 'Short En Jogging',
                'Slug' => 'short-en-jogging',
            ],
            6 => [
                'Name' => 'Basket',
                'Slug' => 'basket',
            ],
            7 => [
                'Name' => 'Chaussure',
                'Slug' => 'chaussure',
            ],
        ];

        // We create a array of t-shirts with the data of the t-shirts we want to create. 
        $tShirts = [
            0 => [
                'Name' => 'T-shirt Noir',
                'Slug' => 't-shirt-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'T-shirt Blanc',
                'Slug' => 't-shirt-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'T-shirt Gris',
                'Slug' => 't-shirt-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'T-shirt Rouge',
                'Slug' => 't-shirt-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'T-shirt Bleu',
                'Slug' => 't-shirt-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'T-shirt Orange',
                'Slug' => 't-shirt-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'T-shirt Violet',
                'Slug' => 't-shirt-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of sweats with the data of the sweats we want to create. 
        $sweats = [
            0 => [
                'Name' => 'Sweat Noir',
                'Slug' => 'sweat-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Sweat Blanc',
                'Slug' => 'sweat-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Sweat Gris',
                'Slug' => 'sweat-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Sweat Rouge',
                'Slug' => 'sweat-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Sweat Bleu',
                'Slug' => 'sweat-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Sweat Orange',
                'Slug' => 'sweat-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Sweat Violet',
                'Slug' => 'sweat-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of jeans with the data of the jeans we want to create. 
        $jeans = [
            0 => [
                'Name' => 'Jean Noir',
                'Slug' => 'jean-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Jean Blanc',
                'Slug' => 'jean-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Jean Gris',
                'Slug' => 'jean-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Jean Rouge',
                'Slug' => 'jean-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Jean Bleu',
                'Slug' => 'jean-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Jean Orange',
                'Slug' => 'jean-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Jean Violet',
                'Slug' => 'jean-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '14999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of joggings with the data of the joggings we want to create. 
        $joggings = [
            0 => [
                'Name' => 'Jogging Noir',
                'Slug' => 'jogging-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Jogging Blanc',
                'Slug' => 'jogging-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Jogging Gris',
                'Slug' => 'jogging-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Jogging Rouge',
                'Slug' => 'jogging-Rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Jogging Bleu',
                'Slug' => 'jogging-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Jogging Orange',
                'Slug' => 'jogging-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Jogging Violet',
                'Slug' => 'jogging-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '4999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of shorts in jean with the data of the shorts in jean we want to create. 
        $shortsInJean = [
            0 => [
                'Name' => 'Short En Jean Noir',
                'Slug' => 'short-en-jean-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Short En Jean Blanc',
                'Slug' => 'short-en-jean-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Short En Jean Gris',
                'Slug' => 'short-en-jean-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Short En Jean Rouge',
                'Slug' => 'short-en-jean-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Short En Jean Bleu',
                'Slug' => 'short-en-jean-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Short En Jean Orange',
                'Slug' => 'short-en-jean-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Short En Jean Violet',
                'Slug' => 'short-en-jean-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '7999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of shorts in jogging with the data of the shorts in jogging we want to create. 
        $shortsInJogging = [
            0 => [
                'Name' => 'Short En Jogging Noir',
                'Slug' => 'short-en-jogging-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Short En Jogging Blanc',
                'Slug' => 'short-en-jogging-blanc',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Short En Jogging Gris',
                'Slug' => 'short-en-jogging-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Short En Jogging Rouge',
                'Slug' => 'short-en-jogging-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Short En Jogging Bleu',
                'Slug' => 'short-en-jogging-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Short En Jogging Orange',
                'Slug' => 'short-en-jogging-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Short En Jogging Violet',
                'Slug' => 'short-en-jogging-violet',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '2499',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of baskets with the data of the baskets want to create. 
        $baskets = [
            0 => [
                'Name' => 'Basket Noir',
                'Slug' => 'basket-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            1 => [
                'Name' => 'Basket Blanche',
                'Slug' => 'basket-blanche',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Basket Gris',
                'Slug' => 'basket-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Basket Rouge',
                'Slug' => 'basket-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Basket Bleu',
                'Slug' => 'basket-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Basket Orange',
                'Slug' => 'basket-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE

            ],
            6 => [
                'Name' => 'Basket Violette',
                'Slug' => 'basket-violette',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];

        // We create a array of shoes with the data of the shoes want to create. 
        $shoes = [
            1 => [
                'Name' => 'Chaussure Noir',
                'Slug' => 'chaussure-noir',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            2 => [
                'Name' => 'Chaussure Blanche',
                'Slug' => 'chaussure-blanche',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            3 => [
                'Name' => 'Chaussure Gris',
                'Slug' => 'chaussure-gris',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            22 => [
                'Name' => 'Chaussure Rouge',
                'Slug' => 'chaussure-rouge',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            4 => [
                'Name' => 'Chaussure Bleu',
                'Slug' => 'chaussure-bleu',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            5 => [
                'Name' => 'Chaussure Orange',
                'Slug' => 'chaussure-orange',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::AVAILABLE
            ],
            6 => [
                'Name' => 'Chaussure Violette',
                'Slug' => 'chaussure-violette',
                'Reference' => '',
                'Picture' => Product::PICTURE_BY_DEFAULT,
                'Price' => '9999',
                'Description' => 'Lorem ipsum dolor sit amet. Et provident consequuntur id cumque omnis 33 incidunt cumque. Sed fugiat nihil ut possimus asperiores 33 quos suscipit sed corrupti voluptate.',
                'Availability' => Product::UNAVAILABLE
            ]
        ];


        // We create a array of categories. 
        $categories = [];

        // We create a array of products. 
        $products = [];

        // For each categorieToCreate in categoriesToCreate.
        foreach ($categoriesToCreate as $categorieToCreate) {
            // we create a new Category.
            $category = new Category();
            $category
                ->setName($categorieToCreate['Name'])
                ->setSlug($categorieToCreate['Slug']);

            // We push each category in the array of categories.
            $categories[] = $category;

            // We call the persit() method of the ObjectManager to put on hold the data.
            $objectManager->persist($category);
        }

        // For each category in categories.
        foreach ($categories as $category) {
            // If the name of the category is identical to the name of the first categoriesToCreate. 
            if (
                $category->getName() ===
                $categoriesToCreate[0]['Name']
            ) {
                // For each tShirt in tShirts.
                foreach ($tShirts as $tShirt) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($tShirt['Name'])
                        ->setSlug($tShirt['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $tShirt['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($tShirt['Picture'])
                        ->setPrice($tShirt['Price'])
                        ->setDescription($tShirt['Description'])
                        ->setAvailability($tShirt['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the second categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[1]['Name']
            ) {
                // For each sweat in sweats.
                foreach ($sweats as $sweat) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($sweat['Name'])
                        ->setSlug($sweat['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $sweat['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($sweat['Picture'])
                        ->setPrice($sweat['Price'])
                        ->setDescription($sweat['Description'])
                        ->setAvailability($sweat['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the third categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[2]['Name']
            ) {
                // For each jean in jeans.
                foreach ($jeans as $jean) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($jean['Name'])
                        ->setSlug($jean['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $jean['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($jean['Picture'])
                        ->setPrice($jean['Price'])
                        ->setDescription($jean['Description'])
                        ->setAvailability($jean['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the foutrh categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[3]['Name']
            ) {
                // For each jogging in joggings.
                foreach ($joggings as $jogging) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($jogging['Name'])
                        ->setSlug($jogging['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $jogging['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($jogging['Picture'])
                        ->setPrice($jogging['Price'])
                        ->setDescription($jogging['Description'])
                        ->setAvailability($jogging['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the fifth categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[4]['Name']
            ) {
                // For each shortInJean in shortsInJean.
                foreach ($shortsInJean as $shortInJean) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($shortInJean['Name'])
                        ->setSlug($shortInJean['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $shortInJean['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($shortInJean['Picture'])
                        ->setPrice($shortInJean['Price'])
                        ->setDescription($shortInJean['Description'])
                        ->setAvailability($shortInJean['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the sixth categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[5]['Name']
            ) {
                // For each shortInJogging in shortsInJogging.
                foreach ($shortsInJogging as $shortInJogging) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($shortInJogging['Name'])
                        ->setSlug($shortInJogging['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $shortInJogging['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($shortInJogging['Picture'])
                        ->setPrice($shortInJogging['Price'])
                        ->setDescription($shortInJogging['Description'])
                        ->setAvailability($shortInJogging['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the seventh categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[6]['Name']
            ) {
                // For each basket in baskets.
                foreach ($baskets as $basket) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($basket['Name'])
                        ->setSlug($basket['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $basket['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($basket['Picture'])
                        ->setPrice($basket['Price'])
                        ->setDescription($basket['Description'])
                        ->setAvailability($basket['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
            // Else if the name of the category is identical to the name of the eighth categoriesToCreate. 
            else if (
                $category->getName() ===
                $categoriesToCreate[7]['Name']
            ) {
                // For each shoe in shoes.
                foreach ($shoes as $shoe) {
                    // We create a new Product.
                    $product = new Product();
                    $product
                        ->setName($shoe['Name'])
                        ->setSlug($shoe['Slug'])
                        ->setReference(strtoupper(substr(
                            str_replace(' ', '', $shoe['Name']),
                            0,
                            4
                        ) . bin2hex(random_bytes(4))))
                        ->setPicture($shoe['Picture'])
                        ->setPrice($shoe['Price'])
                        ->setDescription($shoe['Description'])
                        ->setAvailability($shoe['Availability'])
                        ->setCategory($category);

                    // We push the product in the array of products.
                    $products[] = $product;

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($product);
                }
            }
        }

        // DeliveryModes

        // We create a array of delivery modes with the data of the delivery modes we want to create. 
        $deliveryModesToCreate = [
            0 => [
                'Name' => 'Livraison à Domicile',
                'Description' => 'En 48 à 72h ouvrées. Offert dès 99 €.',
                'Price' => 599,
                'Min Cart Amount For Free Delivery' => 9900,
                'Picture' => 'package-orange.svg',
            ],
            1 => [
                'Name' => 'Livraison Express à Domicile',
                'Description' => 'Avec signature. En 24 à 48h. Offert dès 139 €.',
                'Price' => 999,
                'Min Cart Amount For Free Delivery' => 13900,
                'Picture' => 'package-blue.svg',
            ],
        ];

        // We create a array of delivery modes. 
        $deliveryModes = [];

        // For each deliveryModeToCreate in deliveryModesToCreate.
        foreach ($deliveryModesToCreate as $deliveryModeToCreate) {
            // We create a new DeliveryMode. 
            $deliveryMode = new DeliveryMode();
            $deliveryMode
                ->setName($deliveryModeToCreate['Name'])
                ->setDescription($deliveryModeToCreate['Description'])
                ->setPrice($deliveryModeToCreate['Price'])
                ->setMinCartAmountForFreeDelivery($deliveryModeToCreate['Min Cart Amount For Free Delivery'])
                ->setPicture($deliveryModeToCreate['Picture']);

            // We push the delivery mode in the array of delivery modes.
            $deliveryModes[] = $deliveryMode;

            // We call the persit() method of the ObjectManager to put on hold the data.
            $objectManager->persist($deliveryMode);
        }

      
        // Purchase

        // dd($addresses);

        // We create a array of purchases. 
        $purchases = [];

        // For each user in users.
        foreach ($users as $user) {
            // We start a counter at 0 and we run some code untill he reach 50.
            for ($count = 0; $count < 25; $count++) {
                // We create a new Purchase. 
                $purchase = new Purchase();
                $purchase
                    ->setUser($user)
                    ->setReference(strtolower(bin2hex(random_bytes(6))))
                    ->setSubtotal(mt_rand(2000, 6000))
                    ->setBillingAddress($this->purchaseAddress->insertBreakLineCharactersInAddressForFixtures($addresses[0]))
                    ->setDeliveryAddress($this->purchaseAddress->insertBreakLineCharactersInAddressForFixtures($addresses[1] ?? $addresses[0]))
                    ->setDeliveryMode($deliveryModes[0])
                    ->setDeliveryModePrice(999)
                    ->setTotal($purchase->getSubtotal() + $purchase->getDeliveryModePrice())
                    ->setCheckoutMethod(Purchase::CHECKOUT_METHOD_CREDIT_CARD)
                    ->setStatus(Purchase::STATUS_PAID);

                $purchases[] = $purchase;

                // We call the persit() method of the ObjectManager to put on hold the data.
                $objectManager->persist($purchase);

                // We create a array of purchased products. 
                $purchasedProducts = [];

                // For each product in products. 
                foreach ($products as $product) {
                    // We create a new PurchaseItem.
                    $purchaseItem = new PurchaseItem();
                    $purchaseItem
                        ->setPurchase($purchase)
                        ->setProduct($product)
                        ->setProductName($product->getName())
                        ->setProductReference($product->getReference())
                        ->setProductPrice($product->getPrice())
                        ->setQuantity((2))
                        ->setTotal($purchaseItem->getProductPrice() * $purchaseItem->getQuantity());

                    // We push the product in the array of purchased products.
                    $purchasedProducts[] = $product;

                    // If the number of elements in the array of purchased products is superior to 6.
                    if (count($purchasedProducts) > 6) {
                        // We stop. 
                        break;
                    }

                    // We call the persit() method of the ObjectManager to put on hold the data.
                    $objectManager->persist($purchaseItem);
                }
            }
        }

        // We call the flush() method of the ObjectManager to backup the data in the database.
        $objectManager->flush();
    }
}
