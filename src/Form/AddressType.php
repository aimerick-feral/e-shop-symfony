<?php

namespace App\Form;

use App\Entity\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // We use the addEventlistener method on PRE_SUBMIT to check the data of some fields, before submitting the data to the form.
            ->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'onPreSubmit'])
            ->add('firstName', null, [
                'empty_data' => ''
            ])
            ->add('lastName', null, [
                'empty_data' => ''
            ])
            ->add('streetNumber', null, [
                'empty_data' => ''
            ])
            ->add('streetName', null, [
                'empty_data' => ''
            ])
            ->add('zipCode', null, [
                'empty_data' => ''
            ])
            ->add('city', null, [
                'empty_data' => ''
            ])
            ->add('country', null, [
                'empty_data' => ''
            ])
            ->add('phoneNumber', null, [
                'empty_data' => ''
            ]);
    }

    /**
     * Method that set in uppercase the lastName property of the Address.
     * @param FormEvent
     * @return void
     */
    public function onPreSubmit(FormEvent $event)
    {
        // We get the form. 
        $form = $event->getForm();

        // We get the data of the address.
        $address = $event->getData();

        // If the submit doesn't contain a address. 
        if (!$address) {
            // We leave onPreSubmit().
            return;
        }
        
        // We set in uppercase the lastName property of the address. 
        $address['lastName'] = strtoupper($address['lastName']);

        // We set the data of the event with the new data of the address.
        $event->setData($address);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
