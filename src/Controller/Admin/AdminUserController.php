<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\UserSearch;
use App\Form\UserSearchType;
use App\Form\Admin\AdminUserType;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminUserController extends AbstractController
{
    public function __construct(private UserRepository $userRepository, private EntityManagerInterface $entityManagerInterface)
    {
    }

    /**
     * Method that create a user.
     * @param Request $request
     * @param UserPasswordHasherInterface $UserPasswordHasherInterface
     * @param FileUploader $fileUploader
     * @return Response
     */
    #[Route('/admin/utilisateurs/creer', name: 'admin_user_create', methods: 'GET|POST')]
    public function create(Request $request, UserPasswordHasherInterface $userPasswordHasherInterface, FileUploader $fileUploader): Response
    {
        // We create a new user.
        $user = new User();
        // We create the form.
        $form = $this->createForm(AdminUserType::class, $user);
        // We link the form to the request.
        $form->handleRequest($request);

        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We set the hashed password to the user.
            $user->setPassword(
                $userPasswordHasherInterface->hashPassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            // We call the uploadFile() method of the FileUploader service is order to upload the picture submit by the user.
            $picture = $fileUploader->uploadFile($form, 'picture');
            // If we have a picture to upload.
            if ($picture) {
                // We set the picture to the user.
                $user->setPicture($picture);
            }
            // Else the user not submit any picture so we set a picture by default depending on is gender.
            else {
                // If the civility title of the user is User::MAN_CIVILITY_TITLE.
                if ($user->getCivilityTitle() === User::MAN_CIVILITY_TITLE) {
                    // We set the User::MAN_PICTURE to the user.
                    $user->setPicture(User::MAN_PICTURE);
                }
                // Else if the civility title of the user is User::WOMAN_CIVILITY_TITLE.
                elseif ($user->getCivilityTitle() === User::WOMAN_CIVILITY_TITLE) {
                    // We set the User::WOMAN_PICTURE to the user.
                    $user->setPicture(User::WOMAN_PICTURE);
                }
            }

            // We call the persit() method of the EntityManagerInterface to put on hold the data.
            $this->entityManagerInterface->persist($user);
            // We call the flush() method of the EntityManagerInterface to backup the data in the database.
            $this->entityManagerInterface->flush();

            // We display a flash message for the user.
            $this->addFlash('success', 'Le compte de ' . $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été créé.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_user_list',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We display our template.
        return $this->render(
            'admin/user/create.html.twig',
            // We set a array of optional data.
            [
                'adminCreateUserForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that display the users.
     * @param Request $request
     * @return Response
     */
    #[Route('/admin/utilisateurs', name: 'admin_user_list', methods: 'GET', priority: 1)]
    public function list(Request $request): Response
    {
        // We find all the users.
        $users = $this->userRepository->findAll();

        // If we don't find any user.
        if (!$users) {
            // We display a flash message for the user.
            $this->addFlash('warning', 'La liste des utilisateurs est vide. Nous vous invitons à vous en créer un.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_user_create',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We create a new user search.
        $search = new UserSearch();
        // We create the form.
        $form = $this->createForm(UserSearchType::class, $search);
        // We link the form to the request.
        $form->handleRequest($request);

        //! START : if api.js is active this code is not execute and you have to render the file list.html.twig insted of list-js.html.twig insted of list-js.html.twig.  
        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We find the user by its e-mail.
            $users = $this->userRepository->findUserBySearch($search);

            // If we don't find a user with the submitted e-mail.
            if (!$users) {
                // We display a flash message for the user.
                $this->addFlash('error', 'L\'adresse e-mail ' . $form->get('email')->getData() . ' ne correspond à aucun utilisateur.');

                // We redirect the user.
                return $this->redirectToRoute(
                    'admin_user_list',
                    // We set a array of optional data.
                    [],
                    // We specify the related HTTP response status code.
                    301
                );
            }
        }
        //! END : if api.js is active this code is not execute and you have to render the file list.html.twig insted of list-js.html.twig insted of list-js.html.twig.  

        // We display our template.
        return $this->render(
            'admin/user/list.html.twig',
            // 'admin/user/list-js.html.twig',
            // We set a array of optional data.
            [
                'users' => $users,
                'searchUserForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that display the detail of a user.
     * @param User $user
     * @return Response
     */
    #[Route('/admin/utilisateurs/{id}', name: 'admin_user_detail', methods: 'GET', requirements: ['id' => '\d+'])]
    public function detail(User $user): Response
    {
        // We display our template.
        return $this->render(
            'admin/user/detail.html.twig',
            // We set a array of optional data.
            [
                'user' => $user
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that update a user.
     * @param Request $request
     * @param User $user
     * @param FileUploader $fileUploader
     * @return Response
     */
    #[Route('/admin/utilisateurs/{id}/mettre-a-jour', name: 'admin_user_update', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function update(Request $request, User $user, FileUploader $fileUploader): Response
    {
        // We create the form.
        $form = $this->createForm(AdminUserType::class, $user);
        // We link the form to the request.
        $form->handleRequest($request);

        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We call the uploadFile() method of the FileUploader service is order to upload the picture submit by the user.
            $picture = $fileUploader->uploadFile($form, 'upload');
            // If we have a picture to upload.
            if ($picture) {
                // We set the picture to the user.
                $user->setPicture($picture);
            }
            // Else the user not submit any picture so we set a picture by default depending on his gender.
            else {
                // If the user's gender is diffent than User::MAN_CIVILITY_TITLE or than User::WOMAN_CIVILITY_TITLE.
                if (
                    $user->getCivilityTitle() !== User::MAN_CIVILITY_TITLE || $user->getCivilityTitle() !== User::WOMAN_CIVILITY_TITLE
                ) {
                    // If the user picture is different than User::MAN_PICTURE and than User::WOMAN_PICTURE.
                    if ($user->getPicture() !== User::MAN_PICTURE && $user->getPicture() !== User::WOMAN_PICTURE) {
                        // We don't want to change the picture that the user have already set for himself.
                        // We set the value of the initial user picture to the user.
                        $user->setPicture($user->getPicture());
                    }
                    // Else the user's picture is one of our picture by default.
                    else {
                        // If the civility title of the user is User::MAN_CIVILITY_TITLE.
                        if ($user->getCivilityTitle() === User::MAN_CIVILITY_TITLE) {
                            // We set the User::MAN_PICTURE to the user.
                            $user->setPicture(User::MAN_PICTURE);
                        }
                        // Else if the civility title of the user is User::WOMAN_CIVILITY_TITLE.
                        elseif ($user->getCivilityTitle() === User::WOMAN_CIVILITY_TITLE) {
                            // We set the User::WOMAN_PICTURE to the user.
                            $user->setPicture(User::WOMAN_PICTURE);
                        }
                    }
                }
            }

            // We call the flush() method of the EntityManagerInterface to backup the data in the database.
            $this->entityManagerInterface->flush();

            // We display a flash message for the user.
            $this->addFlash('success', 'Le profil de ' . $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été mis à jour.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_user_list',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We display our template.
        return $this->render(
            'admin/user/update.html.twig',
            // We set a array of optional data.
            [
                'user' => $user,
                'adminUpdateUserForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that delete the user's picture and update the profile picture by default according to the user's gender.
     * @param Request $request
     * @param User $user
     * @return Response
     */
    #[Route('/admin/utilisateurs/{id}/supprimer-photo', name: 'admin_user_delete_picture', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function deletePicture(Request $request, User $user): Response
    {
        // We get the CSRF token.
        $submittedToken = $request->request->get('token') ?? $request->query->get('token');

        // If the CSRF token is valid.
        if ($this->isCsrfTokenValid('delete-user-picture' . $user->getId(), $submittedToken)) {
            // If the civility title of the user is User::MAN_CIVILITY_TITLE.
            if ($user->getCivilityTitle() === User::MAN_CIVILITY_TITLE) {
                // We set the User::MAN_PICTURE to the user.
                $user->setPicture(User::MAN_PICTURE);
            }
            // Else if the civility title of the user is User::WOMAN_CIVILITY_TITLE.
            elseif ($user->getCivilityTitle() === User::WOMAN_CIVILITY_TITLE) {
                // We set the User::WOMAN_PICTURE to the user.
                $user->setPicture(User::WOMAN_PICTURE);
            }

            // We call the flush() method of the EntityManagerInterface to backup the data in the database.
            $this->entityManagerInterface->flush();

            // We display a flash message for the user.
            $this->addFlash('success', 'La photo de profil de ' . $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été supprimée.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_user_list',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }
        // Else the CSRF token is not valid.
        else {
            // We redirect the user to the page 403.
            return new Response(
                'Action interdite',
                // We specify the related HTTP response status code.
                403
            );
        }
    }

    /**
     * Metho that show some statistics for the User.
     * @return Response
     */
    #[Route('/admin/utilisateurs/statistiques', name: 'admin_user_statistics', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function statistics(): Response
    {
        // We find all the users.
        $users = $this->userRepository->findAll();
        // If we don't find any user.
        if (!$users) {
            // We display a flash message for the user.
            $this->addFlash('warning', 'La liste des utilisateurs est vide.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_dashboard',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We display our template.
        return $this->render(
            'admin/user/statistics.html.twig',
            // We set a array of optional data.
            [
                'numberOfUsers' => count($users),
                'numberOfRolesUser' => count($this->userRepository->findUsersByRoles("[]")),
                'numberOfRolesAdmin' => count($this->userRepository->findUsersByRoles(User::ROLE_ADMIN)),
                'numberOfMans' => count($this->userRepository->findByCivilityTitle([User::MAN_CIVILITY_TITLE])),
                'numberOfWomans' => count($this->userRepository->findByCivilityTitle([User::WOMAN_CIVILITY_TITLE])),
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that delete a user account 30 days after the request.
     * @param Request $request
     * @param User $user
     * @return Response
     */
    #[Route('/admin/utilisateurs/{id}/supprimer', name: 'admin_user_delete', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function delete(Request $request, User $user): Response
    {
        // // We get the CSRF token.
        // $submittedToken = $request->request->get('token') ?? $request->query->get('token');
        // // dump($request->request->get('token'));
        // // dump($request->query->get('token'));
        // // dump($request->attributes->get('token'));

        // // If the CSRF token is valid.
        // if ($this->isCsrfTokenValid('admin-user-delete' . $user->getId(), $submittedToken)) {
        //     // TODO #7 START : delete user account 30 days after the request.
        //     dd(42);

        //     // We call the remove() method of the EntityManagerInterface with the value of the object we want to remove.
        //     $this->entityManagerInterface->remove($user);
        //     // We call the flush() method of the EntityManagerInterface to backup the data in the database.
        //     $this->entityManagerInterface->flush();

        //     // TODO #7 START : delete user account 30 days after the request.

        //     // We display a flash message for the user.
        //     $this->addFlash('success', 'Le compte de ' . $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été supprimé.');

        //     // We redirect the user.
        //     return $this->redirectToRoute(
        //         'admin_user_list',
        //         // We set a array of optional data.
        //         [],
        //         // We specify the related HTTP response status code.
        //         301
        //     );
        // }
        // // Else the CSRF token is not valid.
        // else {
        //     // We redirect the user to the page 403.
        //     return new Response(
        //         'Action interdite',
        //         // We specify the related HTTP response status code.
        //         403
        //     );
        // }

        //! START : if we use the API
        // We call the remove() method of the EntityManagerInterface with the value of the object we want to remove.
        $this->entityManagerInterface->remove($user);
        // We call the flush() method of the EntityManagerInterface to backup the data in the database.
        $this->entityManagerInterface->flush();

        // We display a flash message for the user.
        $this->addFlash('success', 'Le compte de ' . $user->getFirstName() . ' ' . strtoupper($user->getLastName()) . ' a bien été supprimé.');

        // We redirect the user.
        return $this->redirectToRoute(
            'admin_user_list',
            // We set a array of optional data.
            [],
            // We specify the related HTTP response status code.
            301
        );
        //! END : if we use the API
    }
}
