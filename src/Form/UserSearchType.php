<?php

namespace App\Form;

use App\Entity\UserSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, []);
        // ->add('string', TextType::class, []);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => UserSearch::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    /**
     * Method that clean the parameters of the query in the url.
     */
    public function getBlockPrefix()
    {
        return '';
    }
}
