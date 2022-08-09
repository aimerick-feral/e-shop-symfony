<?php

namespace App\Controller\Api\Admin;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminCategoryController extends AbstractController
{
    public function __construct(private CategoryRepository $categoryRepository)
    {
    }

    /**
     * Method that display the categories.
     * @return JsonResponse
     */
    #[Route('/api/admin/categories', name: 'api_admin_category_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/admin/categories

        // We find all the categories.
        $categories = $this->categoryRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any categories.
        if (!$categories) {
            dd(42);
        }
        // TODO #8 END : do someting when is empty entity on API.

        // We return our data in JSON format.
        return $this->json(
            $categories,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'categories',
            ]
        );
    }


    /**
     * Method that display the list of the products related to its category.
     * @param string $slug 
     * @return JsonResponse
     */
    #[Route('/api/admin/categories/{slug}/produits', name: 'api_admin_category_product_list', methods: 'GET')]
    public function productList(string $slug): JsonResponse
    {
        // http://localhost:8080/api/admin/categories/sneaker/produits

        // We find the category by its slug. 
        $category = $this->categoryRepository->findOneBy(
            [
                'slug' => $slug
            ]
        );

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any category.
        if (!$category) {
            dd(42);
        }
        // TODO # 6 END : do someting when is empty entity on API.

        // We create a array to backup each products. 
        $products = [];
        // For each $product in $category->getProducts().
        foreach ($category->getProducts() as $product) {
            // We push each $product in the array. 
            $products[] = $product;
        }

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any product.
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
