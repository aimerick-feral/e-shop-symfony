<?php

namespace App\Form\Admin;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class AdminUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // We use the addEventlistener method on PPRE_SET_DATA to modify the form depending on the pre-populated data.
            ->addEventListener(FormEvents::PRE_SET_DATA, [$this, 'onPreSetData'])
            // We use the addEventlistener method on PRE_SUBMIT to check the data of some fields, before submitting the data to the form.
            ->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'onPreSubmit'])
            ->add('picture', HiddenType::class, [])
            ->add('civilityTitle', ChoiceType::class, [
                'choices' => [
                    User::MAN_CIVILITY_TITLE => User::MAN_CIVILITY_TITLE,
                    User::WOMAN_CIVILITY_TITLE => User::WOMAN_CIVILITY_TITLE
                ],
                'choice_attr' => [
                    User::MAN_CIVILITY_TITLE => [
                        'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-man',
                    ],
                    User::WOMAN_CIVILITY_TITLE => [
                        'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-woman',
                    ],
                ],
                'data' =>  User::MAN_CIVILITY_TITLE,
                'expanded' => true,
            ])
            ->add('firstName', null, [
                'empty_data' => ''
            ])
            ->add('lastName', null, [
                'empty_data' => ''
            ])
            ->add('email', EmailType::class, [
                'empty_data' => ''
            ])
            ->add('password', HiddenType::class, [])
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Administrateur' => User::ROLE_ADMIN
                ],
                'choice_attr' => [
                    'Administrateur' => [
                        'class' => 'form-field__roles-input'
                    ]
                ],
                'expanded' => true,
                'multiple' => true
            ]);
    }

    /**
     * Method that modify the form and display the password field only if we are in case of user creation so we don't dislay the password field on user update.
     * @param FormEvent $event
     * @return void
     */
    public function onPreSetData(FormEvent $event)
    {
        // We get the form. 
        $form = $event->getForm();

        // We get the data of the user.
        $user = $event->getData();

        // If we don't find any user in the database. This mean we are in creation mode. 
        if (!$user->getId()) {
            // We dynamically add the fields that will be required for the creation form.
            $form
                ->add('picture', FileType::class, [
                    'required' => false,
                    'constraints' => [
                        new File([
                            'maxSize' => '300k',
                            'maxSizeMessage' => 'Merci de télécharger un fichier de maximum {{ limit }} bytes.',
                            'mimeTypes' => [
                                'application/pdf',
                                'image/png',
                                'image/jpeg',
                                'image/svg+xml'
                            ],
                            'mimeTypesMessage' => 'Merci de télécharger un fichier au format PDF, PNG, JPEG ou SVG.',
                        ])
                    ]
                ])
                ->add('password', PasswordType::class, [
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

                ]);
        }
        // Else we find a user in the database. This mean we are in update mode.
        else {
            // We dynamically add the fields that will be required for the update form.
            $form
                ->add('civilityTitle', ChoiceType::class, [
                    'choices' => [
                        User::MAN_CIVILITY_TITLE => User::MAN_CIVILITY_TITLE,
                        User::WOMAN_CIVILITY_TITLE => User::WOMAN_CIVILITY_TITLE
                    ],
                    'choice_attr' => [
                        User::MAN_CIVILITY_TITLE => [
                            'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-man',
                        ],
                        User::WOMAN_CIVILITY_TITLE => [
                            'class' => 'form-field__input-user-civility-title form-field__input-user-civility-title-woman',
                        ],
                    ],
                    'expanded' => true,
                ])
                ->add('upload', FileType::class, [
                    'mapped' => false,
                    'required' => false,
                    'constraints' => [
                        new File([
                            'maxSize' => '300k',
                            'maxSizeMessage' => 'Merci de télécharger un fichier de maximum {{ limit }} bytes.',
                            'mimeTypes' => [
                                'application/pdf',
                                'image/png',
                                'image/jpeg',
                                'image/svg+xml'
                            ],
                            'mimeTypesMessage' => 'Merci de télécharger un fichier au format PDF, PNG, JPEG ou SVG.',
                        ])
                    ]
                ]);
        }
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

        // If the submit contain a user. 
        if ($user) {
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
