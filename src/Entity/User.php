<?php

namespace App\Entity;

use App\Repository\UserRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // The value of the profile picture by default for the man.
    const MAN_PICTURE = 'superman.png';
    // The value of the profile picture by default for the woman.
    const WOMAN_PICTURE = 'wonderwoman.png';

    // The value of the man civilityTitle.
    const MAN_CIVILITY_TITLE = 'Monsieur';
    // The value of the woman civilityTitle.
    const WOMAN_CIVILITY_TITLE = 'Madame';

    // The value of admin's role.
    const ROLE_ADMIN = 'ROLE_ADMIN';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Assert\NotBlank(message: 'Merci de saisir un e-mail.')]
    #[Assert\Regex(
        pattern: '/^(.+)@(\S+)$/',
        message: 'Merci de saisir un e-mail valide.',
    )]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $email;

    #[ORM\Column(type: 'json')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $password;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un prénom.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom.')]
    #[Groups(['users', 'purchases'])]
    private $lastName;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isVerified = false;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $picture;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de sélectionnner une valeur.')]
    #[Groups(['users', 'purchases', 'addresses'])]
    private $civilityTitle;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Address::class)]
    #[Groups(['users', 'purchases'])]
    private $addresses;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Purchase::class)]
    private $purchases;

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
        $this->addresses = new ArrayCollection();
        $this->purchases = new ArrayCollection();
    }

    // public function __toString()
    // {
    //     return $this->firstName;
    // }

    public function getId(): int|null
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * For login on the REST API and get the JSON Web Token. 
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getPicture(): string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getCivilityTitle(): string
    {
        return $this->civilityTitle;
    }

    public function setCivilityTitle(string $civilityTitle): self
    {
        $this->civilityTitle = $civilityTitle;

        return $this;
    }

    /**
     * @return Collection<int, Address>
     */
    public function getAddresses(): Collection
    {
        return $this->addresses;
    }

    public function addAddress(Address $address): self
    {
        if (!$this->addresses->contains($address)) {
            $this->addresses[] = $address;
            $address->setUser($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Purchase>
     */
    public function getPurchases(): Collection
    {
        return $this->purchases;
    }

    public function addPurchase(Purchase $purchase): self
    {
        if (!$this->purchases->contains($purchase)) {
            $this->purchases[] = $purchase;
            $purchase->setUser($this);
        }

        return $this;
    }

    public function removePurchase(Purchase $purchase): self
    {
        if ($this->purchases->removeElement($purchase)) {
            // set the owning side to null (unless already changed)
            if ($purchase->getUser() === $this) {
                $purchase->setUser(null);
            }
        }

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
}
