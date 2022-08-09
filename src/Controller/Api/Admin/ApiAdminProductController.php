<?php

namespace App\Controller\Api\Admin;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminProductController extends AbstractController
{
    public function __construct(private EntityManagerInterface $entityManagerInterface, private ProductRepository $productRepository)
    {
    }

    /**
     * Method that display the products.
     * @return JsonResponse
     */
    #[Route('/api/admin/produits', name: 'api_admin_product_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/admin/produits

        // We find all the products.
        $products = $this->productRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any products.
        if (!$products) {
            dd(42);
        }
        // TODO #8 END : do someting when is empty entity on API.

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

    // /**
    // * Method that delete a product.
    // * @param Product $product
    // * @return JsonResponse
    // */
    // #[Route('/api/admin/produits/{id}/supprimer', name: 'api_admin_product_delete', methods: 'GET|DELETE', requirements: ['id' => '\d+'])]
    // public function delete(Product $product): JsonResponse
    // {
    //     // URL : http://localhost:8080/api/admin/produits/{id}/supprimer

    //     // We call the remove() method of the EntityManagerInterface with the value of the object we want to remove.
    //     $this->entityManagerInterface->remove($product);
    //     // We call the flush() method of the EntityManagerInterface to backup the data in the database.
    //     $this->entityManagerInterface->flush();

    //     // We return our data in JSON format.
    //     return $this->json([
    //         'message' => 'Le produit ' .  $product->getName() . ' a bien été supprimé.'
    //     ]);
    // }
}
