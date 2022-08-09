<?php

namespace App\Controller\Api\Admin;

use App\Entity\User;
use App\Repository\AddressRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminAddressController extends AbstractController
{
    public function __construct(private AddressRepository $addressRepository)
    {
    }

    /**
     * Method that display the addresses related to a user.
     * @return JsonResponse
     */
    #[Route('/api/admin/utilisateurs/{id}/adresses', name: 'api_admin_address_user_list', methods: 'GET', requirements: ['id' => '\d+'])]
    public function list(User $user): JsonResponse
    {
        // http://localhost:8080/api/admin/utilisateurs/{id}/adresses

        // We create a array to backup each address.
        $addresses = [];
        // For each $adresse in $user->getAddresses().
        foreach ($user->getAddresses() as $address) {
            // We push each $address in the array .
            $addresses[] = $address;
        }

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any addresses.
        if (!$addresses) {
            throw $this->createNotFoundException();
            // // We return our data in JSON format.
            // return $this->json(
            //     [
            //         'message' => $user->getFirstName() . ' '  . strtoupper($user->getLastName()) . ' ne possède actuellement aucune adresse. Nous vous invitons à lui  en créer une.'
            //     ],
            //     // We specify the related HTTP response status code.
            //     400
            // );
        }
        // TODO #8 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $addresses,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                // 'groups' => 'users',
                'groups' => 'addresses',

            ]
        );
    }
}
