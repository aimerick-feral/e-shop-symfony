<?php

namespace App\Controller\Api\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminUserController extends AbstractController
{
    public function __construct(private EntityManagerInterface $entityManagerInterface, private UserRepository $userRepository)
    {
    }

    /**
     * Method that display the users.
     * @return JsonResponse
     */
    #[Route('/api/admin/utilisateurs', name: 'api_admin_user_list', methods: 'GET')]
    public function list(): JsonResponse
    {
        // http://localhost:8080/api/admin/utilisateurs

        // We find all the users.
        $users = $this->userRepository->findAll();

        // TODO #8 START : do someting when is empty entity on API.
        // If we don't find any users.
        if (!$users) {
            // TODO 
        }
        // TODO #8 END : do someting when is empty entity on API.

        //! CIRCULAR REFERENCE.
        // FIRST SIDE.
        // Serialize : object -> array -> JSON.
        // Normalize : object -> array.
        // The JSON method serialize the object in JSON.
        // The JSON method normalize the object to a array and encode the array in JSON.

        // SECOND SIDE.
        // Deserialize : JSON -> array -> object.
        // Denormalize : array -> object.
        // Decode the JSON to a array and denormalize the array to a object.

        // We return our data in JSON format.
        return $this->json(
            $users,
            // We specify the related HTTP response status code.
            200,
            // The headers that Symfony handle by himself.
            [],
            // We set a array of optional data.
            [
                'groups' => 'users',
            ]
        );
    }

    // /**
    // * Method that delete a user.
    // * @param User $user
    // * @return JsonResponse
    // */
    // #[Route('/api/admin/utilisateurs/{id}/supprimer', name: 'api_admin_user_delete', methods: 'GET|DELETE', requirements: ['id' => '\d+'])]
    // public function delete(User $user): JsonResponse
    // {
    //     // URL : http://localhost:8080/api/admin/utilisateurs/{id}/supprimer

    //     // We call the remove() method of the EntityManagerInterface with the value of the object we want to remove.
    //     $this->entityManagerInterface->remove($user);
    //     // We call the flush() method of the EntityManagerInterface to backup the data in the database.
    //     $this->entityManagerInterface->flush();

    //     // We return our data in JSON format.
    //     return $this->json([
    //         'message' => 'Le compte de ' .  $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été supprimé.'
    //     ]);
    // }
}
