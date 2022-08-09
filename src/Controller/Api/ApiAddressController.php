<?php

namespace App\Controller\Api;

use App\Repository\AddressRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAddressController extends AbstractController
{
    public function __construct(private  AddressRepository $addressRepository)
    {
    }

    /**
     * Method that display the logged in user's addresses.
     * @return JsonResponse
     */
    #[Route('/api/adresses', name: 'api_address_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/adresses

        // We get the logged in user.
        /**
         * @var User
         */
        $user = $this->getUser();

        // We create a array to backup each address.
        $addresses = [];
        // For each $adresse in $user->getAddresses().
        foreach ($user->getAddresses() as $address) {
            // We push each $address in the array.
            $addresses[] = $address;
        }
        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any addresses.
        if (!$addresses) {
            dd(42);
        }
        // TODO # 6 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $addresses,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'addresses',
            ]
        );
    }
}
