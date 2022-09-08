<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\EmailVerifier;
use App\Service\Api\MultiAvatarAPI;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

class RegistrationController extends AbstractController
{

    public function __construct(private EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/inscription', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, FileUploader $fileUploader, MultiAvatarAPI $multiAvatarAPI): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // dump($form->getData());
            // dump($user->getCivilityTitle());
            // dump($user->getFirstName());
            // dump($user->getLastName());
            // dump($user->getEmail());
            // dump($user->getPicture());
            // dd($form->get('plainPassword')->getData());

            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            // We call the uploadFile() method of the FileUploader service is order to upload the picture submited by the user. 
            $picture = $fileUploader->uploadFile($form, 'picture');

            //! START : profile picture by default without API.
            // // If we have a picture to upload.
            // if ($picture) {
            //     // We set the picture to the user.
            //     $user->setPicture($picture);
            // }
            // // Else the user not submit any picture so we set a picture by default.
            // else {
            //     // We set the User::PICTURE to the user.
            //     $user->setPicture(User::PICTURE);
            // }
            //! END : profile picture by default without API.

            //! START : profile picture by default according to user civility title without API.
            // If we have a picture to upload. 
            // if ($picture) {
            //     // We set to the picture property the value of $picture.
            //     $user->setPicture($picture);
            // }
            // // Else the user not submit any picture so we set a picture by default depending on is gender.
            // else {
            //     // If the user is a User::MAN_CIVILITY_TITLE. 
            //     if ($user->getcivilityTitle() === User::MAN_CIVILITY_TITLE) {
            //         // We set to the picture property the value of User::MAN_PICTURE.
            //         $user->setPicture(User::MAN_PICTURE);
            //     }
            //     // Else if the user is a User::WOMAN_CIVILITY_TITLE.
            //     else if ($user->getcivilityTitle() === User::WOMAN_CIVILITY_TITLE) {
            //         // We set to the picture property the value of User::WOMAN_PICTURE.
            //         $user->setPicture(User::WOMAN_PICTURE);
            //     }
            // }
            //! END : profile picture by default according to user civility title without API.

            //! START : profile picture by default with API.
            // If we have a picture to upload. 
            if ($picture) {
                // We set to the picture property the value of $picture.
                $user->setPicture($picture);
            }
            // Else the user not submit any picture so we set a picture by default.
            else {
                // We call the fetch() method of the MultiAvatarAPI service to get the URL of the user avatar from the user first name.  
                $url = $multiAvatarAPI->fetch($user->getFirstName());

                // We call the donwloadAvatar() method of the MultiAvatarAPI service to donwload the avatar from the URL. 
                $avatar = $multiAvatarAPI->donwloadAvatar($url);

                // We set to the picture property the file name of the avatar. 
                $user->setPicture($avatar);
            }
            //! END : profile picture by default with API.

            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation(
                'app_verify_email',
                $user,
                (new TemplatedEmail())
                    ->from(new Address('noreply@e-shop.fr', 'eShop'))
                    ->to($user->getEmail())
                    ->subject('Activation de votre compte e-shop')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );

            // do anything else you need here, like send an email

            return $this->redirectToRoute('app_login');
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        $this->addFlash('success', 'Votre adresse e-mail a été vérifiée.');

        return $this->redirectToRoute('home');
    }
}
