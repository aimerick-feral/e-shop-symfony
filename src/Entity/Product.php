<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    // The path to the folder of the product picture. 
    const PRODUCT_PICTURE_UPLOAD_FOLDER_PATH = 'assets/uploads/pictures/products';

    // Constance for the availability of the product. 
    const AVAILABLE = 'Disponible';
    const UNAVAILABLE = 'Indisponible';

    // Product picture by default.
    const PICTURE_BY_DEFAULT = 'aqua.png';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['products', 'categories'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de saisir un nom.')]
    #[Groups(['products', 'categories'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['products', 'categories'])]
    private $slug;

    #[ORM\Column(type: 'string', length: 255)]
    // #[Assert\NotBlank(message: 'Merci de saisir une référence.')]
    #[Groups(['products', 'categories'])]
    private $reference;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['products', 'categories'])]
    private $picture;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: 'Merci de saisir un prix en euros.')]
    #[Assert\Regex(
        pattern: '/\d+/',
        message: 'Merci de saisir un prix en euros.',
    )]
    #[Groups(['products', 'categories'])]
    private $price;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Merci de saisir une description.')]
    #[Groups(['products', 'categories'])]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de sélectionner une valeur.')]
    #[Groups(['products', 'categories'])]
    private $availability;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'products')]
    #[Assert\NotBlank(message: 'Merci de sélectionner une catégorie.')]
    #[Groups(['products'])]
    private $category;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['products', 'categories'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['products', 'categories'])]
    private $updatedAt;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: PurchaseItem::class)]
    private $purchaseItems;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTimeImmutable();
        $this->purchaseItems = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): int|null
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getReference(): string
    {
        return $this->reference;
    }

    public function setReference(string $reference): self
    {
        $this->reference = $reference;

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

    public function getPrice(): int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAvailability(): ?string
    {
        return $this->availability;
    }

    public function setAvailability(?string $availability): self
    {
        $this->availability = $availability;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(Category $category): self
    {
        $this->category = $category;

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

    /**
     * @return Collection<int, PurchaseItem>
     */
    public function getPurchaseItems(): Collection
    {
        return $this->purchaseItems;
    }

    public function addPurchaseItem(PurchaseItem $purchaseItem): self
    {
        if (!$this->purchaseItems->contains($purchaseItem)) {
            $this->purchaseItems[] = $purchaseItem;
            $purchaseItem->setProduct($this);
        }

        return $this;
    }

    public function removePurchaseItem(PurchaseItem $purchaseItem): self
    {
        if ($this->purchaseItems->removeElement($purchaseItem)) {
            // set the owning side to null (unless already changed)
            if ($purchaseItem->getProduct() === $this) {
                $purchaseItem->setProduct(null);
            }
        }

        return $this;
    }
}
