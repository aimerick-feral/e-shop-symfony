<?php

namespace App\Form\Admin;

use App\Entity\Address;
use App\Entity\DeliveryMode;
use App\Entity\Purchase;
use App\Repository\PurchaseRepository;
use App\Twig\AmountExtension;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminPurchaseType extends AbstractType
{
    public function __construct(private PurchaseRepository $purchaseRepository, private AmountExtension $amountExtension)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // We use the addEventlistener method on PPRE_SET_DATA to modify the form depending on the pre-populated data.
            ->addEventListener(FormEvents::PRE_SET_DATA, [$this, 'onPreSetData'])
            // We use the addEventlistener method on PRE_SUBMIT to check the data of some fields, before submitting the data to the form.
            ->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'onPreSubmit'])
            ->add('status', ChoiceType::class, [
                'choices' => [
                    Purchase::STATUS_PAID => Purchase::STATUS_PAID,
                    Purchase::STATUS_IN_PROGRESS => Purchase::STATUS_IN_PROGRESS,
                    Purchase::STATUS_SEND => Purchase::STATUS_SEND,
                    Purchase::STATUS_DELIVER => Purchase::STATUS_DELIVER,
                    Purchase::STATUS_ANNUL => Purchase::STATUS_ANNUL
                ],
                'choice_attr' => [
                    Purchase::STATUS_PAID => [
                        'class' => 'form-field__input-purchase-status form-field__input-purchase-status-paid',
                    ],
                    Purchase::STATUS_IN_PROGRESS => [
                        'class' => 'form-field__input-purchase-status form-field__input-purchase-status-in-progress',
                    ],
                    Purchase::STATUS_SEND => [
                        'class' => 'form-field__input-purchase-status form-field__input-purchase-status-send',
                    ],
                    Purchase::STATUS_DELIVER => [
                        'class' => 'form-field__input-purchase-status form-field__input-purchase-status-deliver',
                    ],
                    Purchase::STATUS_ANNUL => [
                        'class' => 'form-field__input-purchase-status form-field__input-purchase-status-annul',
                    ],
                ],
                'expanded' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Merci de sélectionner un statut.',
                    ]),
                ],
            ])
            ->add('billingAddress', HiddenType::class, [])
            ->add('deliveryAddress', HiddenType::class, [])
            ->add('deliveryMode', HiddenType::class, [])
            ->add('reference', HiddenType::class, []);
    }

    /**
     * Method that display the form fields with differents value adepending on whether we are in creation or update mode.
     * @param FormEvent $event
     * @return void
     */
    public function onPreSetData(FormEvent $event)
    {
        // We get the form.
        $form = $event->getForm();

        // We get the data of the purchase.
        $purchase = $event->getData();

        // We create a array to backup each address.
        $addresses = [];
        // For each $adress in $purchase->getUser()->getAddresses().
        foreach ($purchase->getUser()->getAddresses() as $address) {
            // We push each $address in the array .
            $addresses[] = $address;
        }

        // If we don't find any purchase in the database. This mean we are in creation mode.
        if (!$purchase->getId()) {
            // We dynamically add the fields that will be required for the creation form.
            $form
                ->add(
                    'billingAddress',
                    ChoiceType::class,
                    [
                        'choices' => $addresses,
                        'choice_attr' => function (Address $address, $key, $index) {
                            return ['class' => 'form-field__input-purchase-billing-address'];
                        },
                        // 'choice_value' => function (Address $address) {
                        //     return
                        //         $address->getFirstName() . ' ' . $address->getLastName() . ' ' . $address->getStreetNumber() . ' ' . $address->getStreetName() . ' ' . $address->getZipCode() . ' ' . $address->getCity() . ' ' . $address->getCountry() . ' ' . $address->getPhoneNumber();
                        // },
                        'choice_label' => function (Address $address) {
                            return
                                $address->getFirstName() . ' ' . $address->getLastName() . ' [br]' . $address->getStreetNumber() . ' ' . $address->getStreetName() . ' [br]' . $address->getZipCode() . ' - ' . $address->getCity() . ' [br]' . $address->getCountry() . ' [br]' . $address->getPhoneNumber();
                        },
                        'data' => $addresses[0] ?? null,
                        'expanded'      => true
                    ]
                )
                ->add(
                    'deliveryAddress',
                    ChoiceType::class,
                    [
                        'choices' => $addresses,
                        'choice_attr' => function (Address $address, $key, $index) {
                            return ['class' => 'form-field__input-purchase-delivery-address'];
                        },
                        'choice_label' => function (Address $address) {
                            return
                                $address->getFirstName() . ' ' . $address->getLastName() . ' [br]' . $address->getStreetNumber() . ' ' . $address->getStreetName() . ' [br]' . $address->getZipCode() . ' - ' . $address->getCity() . ' [br]' . $address->getCountry() . ' [br]' . $address->getPhoneNumber();
                        },
                        'data' => $addresses[0] ?? null,
                        'expanded'      => true
                    ]
                )
                ->add('deliveryMode', EntityType::class, [
                    'class' => DeliveryMode::class,
                    'choice_attr' => function (DeliveryMode $deliveryMode, $key, $index) {
                        return ['class' => 'form-field__input-purchase-delivery-mode'];
                    },
                    'choice_label' => function (DeliveryMode $deliveryMode) {
                        return $deliveryMode->getName() . ' à ' . $this->amountExtension->amount($deliveryMode->getPrice()) . '. ' . $deliveryMode->getDescription() . ' Gratuit si commande interne.';
                    },
                    'expanded'      => true,
                ]);
        }
    }

    /**
     * Method that create a unique reference for the purchase.
     * @param FormEvent
     * @return void
     */
    public function onPreSubmit(FormEvent $event)
    {
        // We get the form.
        $form = $event->getForm();

        // We get the data of the purchase.
        $purchase = $event->getData();

        // If the submit doesn't contain a purchase.
        if ($purchase) {
            // We leave onPreSubmit().
            return;
        }

        // We set the reference property.
        $purchase['reference'] = bin2hex(random_bytes(6));

        // We set the data of the event with the new data of the product.
        $event->setData($purchase);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Purchase::class,
        ]);
    }
}
