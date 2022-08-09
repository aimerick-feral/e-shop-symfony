<?php

namespace App\Controller\Admin;

use App\Entity\DeliveryMode;
use App\Entity\DeliveryModeSearch;
use App\Form\Admin\AdminDeliveryModeSearchType;
use App\Form\Admin\AdminDeliveryModeType;
use App\Repository\DeliveryModeRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminDeliveryModeController extends AbstractController
{
    public function __construct(private DeliveryModeRepository $deliveryModeRepository, private EntityManagerInterface $entityManagerInterface)
    {
    }

    /**
     * Method that create a delivery mode.
     * @param Request $request
     * @param FileUploader $fileUploader
     * @return Response
     */
    #[Route('/admin/modes-de-livraison/creer', name: 'admin_delivery_mode_create', methods: 'GET|POST')]
    public function create(Request $request, FileUploader $fileUploader): Response
    {
        // We create a new DeliveryMode.
        $deliveryMode = new DeliveryMode();
        // We create the form.
        $form = $this->createForm(AdminDeliveryModeType::class, $deliveryMode);
        // We link the form to the request.
        $form->handleRequest($request);

        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We call the uploadFile() method of the FileUploader service is order to upload the picture submit by the user.
            $picture = $fileUploader->uploadFile($form, 'picture');
            // If we have a picture to upload.
            if ($picture) {
                // We set to the picture property the value of $picture.
                $deliveryMode->setPicture($picture);
            }

            // We call the persit() method of the EntityManagerInterface to put on hold the data.
            $this->entityManagerInterface->persist($deliveryMode);
            // We call the flush() method of the EntityManagerInterface to backup the data in the database.
            $this->entityManagerInterface->flush();

            // We display a flash message for the user.
            $this->addFlash('success', 'Le mode de livraison ' . $deliveryMode->getName() . ' a bien été crée.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_delivery_mode_list',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We display our template.
        return $this->render(
            'admin/delivery-mode/create.html.twig',
            // We set a array of optional data.
            [
                'adminCreateDeliveryModeForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that display the list of the delivery mode.
     * @param Request $request
     * @return Response
     */
    #[Route('/admin/modes-de-livraison', name: 'admin_delivery_mode_list', methods: 'GET', priority: 2)]
    public function list(Request $request): Response
    {
        // We find all the delivery modes.
        $deliveryModes = $this->deliveryModeRepository->findAll();
        // If we don't find any delivery modes.
        if (!$deliveryModes) {
            // We display a flash message for the user.
            $this->addFlash('warning', 'La liste des modes de livraison est vide. Nous vous invitons à vous en créer un.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_delivery_mode_create',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }


        // We create a new delivery mode search.
        $search = new DeliveryModeSearch();
        // We create the form.
        $form = $this->createForm(AdminDeliveryModeSearchType::class, $search);
        // We link the form to the request.
        $form->handleRequest($request);

        //! START : if api.js is active this code is not execute and you have to render the file list.html.twig insted of list-js.html.twig insted of list-js.html.twig.  
        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We find the delivery mode by its name.
            $deliveryModes = $this->deliveryModeRepository->findDeliveryModeByName($search);
            // If we don't find a delivery mode with the submitted name.
            if (!$deliveryModes) {
                // We display a flash message for the user.
                $this->addFlash('error', 'Le nom ' . $form->get('name')->getData() . ' ne correspond à aucun mode de livraison.');

                // We redirect the user.
                return $this->redirectToRoute(
                    'admin_delivery_mode_list',
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
            'admin/delivery-mode/list.html.twig',
            // 'admin/delivery-mode/list-js.html.twig',
            // We set a array of optional data.
            [
                'deliveryModes' => $deliveryModes,
                'searchDeliveryModeForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that display the detail of a delivery mode.
     * @param DeliveryMode $deliveryMode
     * @return Response
     */
    #[Route('/admin/modes-de-livraison/{id}', name: 'admin_delivery_mode_detail', methods: 'GET', requirements: ['id' => '\d+'])]
    public function detail(DeliveryMode $deliveryMode): Response
    {
        // We display our template.
        return $this->render(
            'admin/delivery-mode/detail.html.twig',
            // We set a array of optional data.
            [
                'deliveryMode' => $deliveryMode
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }

    /**
     * Method that update a delivery mode.
     * @param Request $request
     * @param DeliveryMode $deliveryMode
     * @param FileUploader $fileUploader
     * @return Response
     */
    #[Route('/admin/modes-de-livraison/{id}/mettre-a-jour', name: 'admin_delivery_mode_update', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function update(Request $request, DeliveryMode $deliveryMode, FileUploader $fileUploader): Response
    {
        // We create the form.
        $form = $this->createForm(AdminDeliveryModeType::class, $deliveryMode);
        // We link the form to the request.
        $form->handleRequest($request);

        // If the form is submitted and valid.
        if ($form->isSubmitted() && $form->isValid()) {
            // We call the uploadFile() method of the FileUploader service is order to upload the picture submit by the user.
            $picture = $fileUploader->uploadFile($form, 'upload');
            // If we have a picture to upload.
            if ($picture) {
                // We set to the picture property the value of $picture.
                $deliveryMode->setPicture($picture);
            }

            // We call the flush() method of the EntityManagerInterface to backup the data in the database.
            $this->entityManagerInterface->flush();

            // We display a flash message for the user.
            $this->addFlash('success', 'Le mode de livraison ' . $deliveryMode->getName() . ' a bien été mis à jour.');

            // We redirect the user.
            return $this->redirectToRoute(
                'admin_delivery_mode_list',
                // We set a array of optional data.
                [],
                // We specify the related HTTP response status code.
                301
            );
        }

        // We display our template.
        return $this->render(
            'admin/delivery-mode/update.html.twig',
            // We set a array of optional data.
            [
                'deliveryMode' => $deliveryMode,
                'adminUpdateDeliveryModeForm' => $form->createView()
            ],
            // We specify the related HTTP response status code.
            new Response('', 200)
        );
    }


    /**
     * Metho that delete a delivery mode.
     * @param Request $request
     * @param DeliveryMode $deliveryMode
     * @return Response
     */
    #[Route('/admin/modes-de-livraison/{id}/supprimer', name: 'admin_delivery_mode_delete', methods: 'GET|POST', requirements: ['id' => '\d+'])]
    public function delete(Request $request, DeliveryMode $deliveryMode): Response
    {
        // // We get the CSRF token.
        // $submittedToken = $request->request->get('token') ?? $request->query->get('token');

        // // If the CSRF token is valid.
        // if ($this->isCsrfTokenValid('admin-delivery-mode-delete' . $deliveryMode->getId(), $submittedToken)) {
        //     // We call the remove() method of the EntityManagerInterface with the value of the object we want to remove.
        //     $this->entityManagerInterface->remove($deliveryMode);
        //     // We call the flush() method of the EntityManagerInterface to backup the data in the database.
        //     $this->entityManagerInterface->flush();

        //     // We display a flash message for the user.
        //     $this->addFlash('success', 'Le mode de livraison ' . $deliveryMode->getName() . ' a bien été supprimé.');

        //     // We redirect the user.
        //     return $this->redirectToRoute(
        //         'admin_delivery_mode_list',
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
        $this->entityManagerInterface->remove($deliveryMode);
        // We call the flush() method of the EntityManagerInterface to backup the data in the database.
        $this->entityManagerInterface->flush();

        // We display a flash message for the user.
        $this->addFlash('success', 'Le mode de livraison ' . $deliveryMode->getName() . ' a bien été supprimé.');

        // We redirect the user.
        return $this->redirectToRoute(
            'admin_delivery_mode_list',
            // We set a array of optional data.
            [],
            // We specify the related HTTP response status code.
            301
        );
        //! END : if we use the API
    }
}
