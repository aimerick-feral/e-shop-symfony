<?php

namespace App\Entity;

use App\Repository\DeliveryModeRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DeliveryModeRepository::class)]
class DeliveryMode
{
    // The value in cents of the free deliveryPrice. 
    const DELIVERY_PRICE_FREE = 0;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['delivery-modes'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom de mode de livraison.')]
    #[Groups(['delivery-modes'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir une description.')]
    #[Groups(['delivery-modes'])]
    private $description;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: 'Merci de saisir un prix en euros.')]
    #[Assert\Regex(
        pattern: '/\d+/',
        message: 'Merci de saisir un prix en euros.',
    )]
    #[Groups(['delivery-modes'])]
    private $price;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['delivery-modes'])]
    private $picture;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: 'Merci de saisir un prix en euros.')]
    #[Assert\Regex(
        pattern: '/\d+/',
        message: 'Merci de saisir un prix en euros.',
    )]
    #[Groups(['delivery-modes'])]
    private $minCartAmountForFreeDelivery;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['delivery-modes'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['delivery-modes'])]
    private $updatedAt;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTimeImmutable();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getMinCartAmountForFreeDelivery(): ?int
    {
        return $this->minCartAmountForFreeDelivery;
    }

    public function setMinCartAmountForFreeDelivery(?int $minCartAmountForFreeDelivery): self
    {
        $this->minCartAmountForFreeDelivery = $minCartAmountForFreeDelivery;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
