<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un prénom.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $lastName;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un numéro de rue.')]
    #[Assert\Regex(
        pattern: '/\d+/',
        message: 'Merci de saisir un numéro de rue valide.',
    )]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $streetNumber;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom de rue.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $streetName;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un code postal.')]
    #[Assert\Regex(
        pattern: '/^\d{5}$/',
        message: 'Merci de saisir un code postal valide.',
    )]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $zipCode;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom de ville.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $city;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom de pays.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $country;

    #[ORM\Column(type: 'string')]
    #[Assert\NotBlank(message: 'Merci de saisir un numéro de téléphone mobile.')]
    #[Assert\Regex(
        pattern: '/^\d{10}$/',
        message: 'Merci de saisir un numéro de téléphone mobile valide.',
    )]
    #[Assert\Regex(
        pattern: '/^((06)|(07))[0-9]{8}$/',
        message: 'Merci de saisir un numéro de téléphone mobile valide.',
    )]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $phoneNumber;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'addresses')]
    #[Groups(['addresses'])]
    private $user;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $updatedAt;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTimeImmutable();
        $this->purchases = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->firstName .   ' ' .$this->lastName. ' ' . $this->streetNumber. ' ' . $this->streetName. ' ' . $this->zipCode. ' ' . $this->city. ' ' . $this->country. ' ' . $this->phoneNumber;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->streetNumber;
    }

    public function setStreetNumber(string $streetNumber): self
    {
        $this->streetNumber = $streetNumber;

        return $this;
    }

    public function getStreetName(): ?string
    {
        return $this->streetName;
    }

    public function setStreetName(string $streetName): self
    {
        $this->streetName = $streetName;

        return $this;
    }

    public function getZipCode(): ?string
    {
        return $this->zipCode;
    }

    public function setZipCode(string $zipCode): self
    {
        $this->zipCode = $zipCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
