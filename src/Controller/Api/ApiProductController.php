<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiProductController extends AbstractController
{
    public function __construct(private ProductRepository $productRepository)
    {
    }

    /**
     * Method that display the products.
     * @return JsonResponse
     */
    #[Route('/api/produits', name: 'api_product_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/produits

        // We find all the products.
        $products = $this->productRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any products.
        if (!$products) {
            dd(42);
        }
        // TODO # 6 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $products,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'products',
            ]
        );
    }
}
