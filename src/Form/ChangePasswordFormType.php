<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class ChangePasswordFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'attr' => [
                        // 'autocomplete' => 'new-password',
                        'placeholder' => 'Nouveau mot de passe'
                    ],
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
                    'label' => 'Nouveau mot de passe',
                    'label_attr'    => [
                        'class' => "display-none"
                    ],
                ],
                'second_options' => [
                    'attr' => [
                        // 'autocomplete' => 'new-password',
                        'placeholder' => 'Ressaisir le nouveau mot de passe'
                    ],
                    'label' => 'Ressaisir le nouveau mot de passe',
                    'label_attr'    => [
                        'class' => "display-none"
                    ],
                ],
                'invalid_message' => 'Les deux mots de passe doivent être identiques.',
                // Instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
