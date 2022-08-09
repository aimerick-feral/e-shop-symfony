<?php

namespace App\Controller\Api\Admin;

use App\Repository\DeliveryModeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminDeliveryModeController extends AbstractController
{
    public function __construct(private DeliveryModeRepository $deliveryModeRepository)
    {
    }

    /**
     * Method that display the delivery modes.
     * @return JsonResponse
     */
    #[Route('/api/admin/modes-de-livraison', name: 'api_admin_delivery_mode_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/admin/modes-de-livraison

        // We find all the delvivery modes.
        $deliveryModes = $this->deliveryModeRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any delivery modes.
        if (!$deliveryModes) {
            dd(42);
        }
        // TODO #8 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $deliveryModes,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'delivery-modes',
            ]
        );
    }
}
