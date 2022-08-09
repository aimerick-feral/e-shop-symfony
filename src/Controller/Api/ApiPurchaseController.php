<?php

namespace App\Controller\Api;

use App\Repository\PurchaseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiPurchaseController extends AbstractController
{
    public function __construct(private PurchaseRepository $purchaseRepository)
    {
    }

    /**
     * Method that display the logged in user's purchases.
     * @return JsonResponse
     */
    #[Route('/api/commandes', name: 'api_purchase_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/commandes

        // We get the logged in user.
        /**
         * @var User
         */
        $user = $this->getUser();

        // We create a array to backup each purchase.
        $purchases = [];
        // For each $purchase in $user->getPurchases().
        foreach ($user->getPurchases() as $purchase) {
            // We push each $address in the array.
            $purchases[] = $purchase;
        }

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any purchases.
        if (!$purchases) {
            dd(42);
        }
        // TODO # 6 END : do someting when is empty entity on API.

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
