<?php

namespace App\Controller\Api\Admin;

use App\Entity\User;
use App\Repository\PurchaseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminPurchaseController extends AbstractController
{
    public function __construct(private PurchaseRepository $purchaseRepository)
    {
    }

    /**
     * Method that display the purchases.
     * @return Response
     */
    #[Route('/api/admin/commandes', name: 'api_admin_purchase_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/admin/commandes

        // We find all the purchases.
        $purchases = $this->purchaseRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any purchases.
        if (!$purchases) {
            dd(42);
        }
        // TODO #8 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $purchases,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'purchases',
            ]
        );
    }

    /**
     * Method that display the purchases ralated to a user.
     * @return JsonResponse
     */
    #[Route('/api/admin/utilisateurs/{id}/commandes', name: 'api_admin_purchase_user_list', methods: 'GET', requirements: ['id' => '\d+'])]
    public function userList(User $user): JsonResponse
    {
        // http://localhost:8080/api/admin/utilisateurs/{id}/commandes

        // We create a array to backup each purchase.
        $purchases = [];
        // For each $purchase in $user->getPurchases().
        foreach ($user->getPurchases() as  $purchase) {
            // We push each $purchase in the array .
            $purchases[] = $purchase;
        }

        // If we don't find any purchase.
        if (!$purchases) {
            // TODO : do someting like redirect of whatever.
            dd(42);
        }

        // We return our data in JSON format.
        return $this->json(
            $purchases,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'purchases',
            ]
        );
    }
}
