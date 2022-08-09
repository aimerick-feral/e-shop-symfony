<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // We use the addEventlistener method on PRE_SUBMIT to check the data of some fields, before submitting the data to the form.
            ->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'onPreSubmit'])
            ->add('civilityTitle', ChoiceType::class, [
                'choices' => [
                    'Monsieur' => User::MAN_CIVILITY_TITLE,
                    'Madame' => User::WOMAN_CIVILITY_TITLE
                ],
                'choice_attr' => [
                    'Monsieur' => [
                        'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-man',
                    ],
                    'Madame' => [
                        'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-woman',
                    ],
                ],
                'data' =>   User::MAN_CIVILITY_TITLE,
                'expanded' => true
            ])
            ->add('picture', FileType::class, [
                'constraints' => [
                    new File([
                        'maxSize' => '300k',
                        'maxSizeMessage' => 'Merci de télécharger un fichier de maximum {{ limit }} bytes.',
                        'mimeTypes' => [
                            'application/pdf',
                            'image/png',
                            'image/jpeg',
                        ],
                        'mimeTypesMessage' => 'Merci de télécharger un fichier au format PDF, PNG, JPEG ou SVG.',
                    ])
                ]
            ])
            ->add('firstName', null, [])
            ->add('lastName', null, [])
            ->add('email', EmailType::class, [])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Merci de saisir un mot de passe.',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' => 'Le mot de passe doit contenir au moins {{ limit }} characteres.',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                    new Regex([
                        'pattern' => '/(?=.*[a-z])/',
                        'message' => 'Le mot de passe doit contenir au moins une minuscule.'
                    ]),
                    new Regex([
                        'pattern' => '/(?=.*[A-Z])/',
                        'message' => 'Le mot de passe doit contenir au moins une majuscule.'
                    ]),
                    new Regex([
                        'pattern' => '/(?=.*[0-9])/',
                        'message' => 'Le mot de passe doit contenir au moins un chiffre.'
                    ]),
                    new Regex([
                        'pattern' => '/(?=.*[!@#$%^&*])/',
                        'message' => 'Le mot de passe doit contenir au moins un caractére spécial.'
                    ])
                ],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'Merci de confirmer avoir lu et accepter nos Conditions Générales d\'Utilisation.',
                    ]),
                ],
            ]);
    }

    /**
     * Method that set in uppercase the lastName property of the User.
     * @param FormEvent
     * @return void
     */
    public function onPreSubmit(FormEvent $event)
    {
        // We get the form. 
        $form = $event->getForm();

        // We get the data of the user.
        $user = $event->getData();

        // If the submit doesn't contain a user. 
        if (!$user) {
            // We leave onPreSubmit().
            return;
        }

        // We set in uppercase the lastName of the user. 
        $user['lastName'] = strtoupper($user['lastName']);

        // We set the data of the event with the new data of the user.
        $event->setData($user);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
