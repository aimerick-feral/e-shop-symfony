<?php

namespace App\Entity;

use App\Repository\PurchaseRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PurchaseRepository::class)]
class Purchase
{
    // The value of the different checkoutMethod.
    // const CHECKOUT_PENDING = 'En attente de choix';
    const CHECKOUT_METHOD_CREDIT_CARD = 'Paiment par carte bancaire';
    const CHECKOUT_METHOD_PAYPAL = 'Paiment via Paypal';
    const CHECKOUT_METHOD_DISPOSAL = 'Commande interne';

    // The value of the different status.
    const STATUS_PENDING_CHECKOUT = 'En attente de paiment';
    const STATUS_ABANDONNED_CHECKOUT = 'Paiement abandonné';
    const STATUS_PAID = 'Payée';
    const STATUS_IN_PROGRESS = 'En cours de préparation';
    const STATUS_SEND = 'Expédiee';
    const STATUS_DELIVER = 'Livrée';
    const STATUS_ANNUL = 'Annulée';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['users', 'purchases'])]
    private $reference;

    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases'])]
    private $subtotal;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['users', 'purchases'])]
    private $checkoutMethod;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['users', 'purchases'])]
    private $status;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'Merci de sélectionner un mode de livraison.')]
    #[Groups(['users', 'purchases'])]
    private $deliveryMode;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'purchases')]
    #[Groups(['purchases'])]
    private $user;

    #[ORM\OneToMany(mappedBy: 'purchase', targetEntity: PurchaseItem::class, orphanRemoval: true)]
    #[Groups(['users', 'purchases'])]
    private $purchaseItems;

    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases'])]
    private $deliveryModePrice;

    #[ORM\Column(type: 'integer')]
    #[Groups(['users', 'purchases'])]
    private $total;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Merci de sélectionner une adresse de facturation.')]
    #[Groups(['users'])]
    private $billingAddress;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Merci de sélectionner une adresse de livraison.')]
    #[Groups(['users', 'purchases'])]
    private $deliveryAddress;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['purchases'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['purchases'])]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $stripeSessionId;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->updatedAt = new DateTimeImmutable();
        $this->addresses = new ArrayCollection();
        $this->purchaseItems = new ArrayCollection();
        $this->billingAddress = new ArrayCollection();
        $this->deliveryAddress = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->reference;
    }

    public function getId(): int|null
    {
        return $this->id;
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

    public function getSubtotal(): int
    {
        return $this->subtotal;
    }

    public function setSubtotal(int $subtotal): self
    {
        $this->subtotal = $subtotal;

        return $this;
    }

    public function getCheckoutMethod(): string
    {
        return $this->checkoutMethod;
    }

    public function setCheckoutMethod(string $checkoutMethod): self
    {
        $this->checkoutMethod = $checkoutMethod;

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDeliveryMode(): string
    {
        return $this->deliveryMode;
    }

    public function setDeliveryMode(string $deliveryMode): self
    {
        $this->deliveryMode = $deliveryMode;

        return $this;
    }

    public function getUser(): User|null
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

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
            $purchaseItem->setPurchase($this);
        }

        return $this;
    }

    public function removePurchaseItem(PurchaseItem $purchaseItem): self
    {
        if ($this->purchaseItems->removeElement($purchaseItem)) {
            // set the owning side to null (unless already changed)
            if ($purchaseItem->getPurchase() === $this) {
                $purchaseItem->setPurchase(null);
            }
        }

        return $this;
    }

    public function getDeliveryModePrice(): ?int
    {
        return $this->deliveryModePrice;
    }

    public function setDeliveryModePrice(int $deliveryModePrice): self
    {
        $this->deliveryModePrice = $deliveryModePrice;

        return $this;
    }

    public function getTotal(): ?int
    {
        return $this->total;
    }

    public function setTotal(int $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getBillingAddress(): ?string
    {
        return $this->billingAddress;
    }

    public function setBillingAddress(?string $billingAddress): self
    {
        $this->billingAddress = $billingAddress;

        return $this;
    }

    public function getDeliveryAddress(): ?string
    {
        return $this->deliveryAddress;
    }

    public function setDeliveryAddress(?string $deliveryAddress): self
    {
        $this->deliveryAddress = $deliveryAddress;

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

    public function getStripeSessionId(): ?string
    {
        return $this->stripeSessionId;
    }

    public function setStripeSessionId(?string $stripeSessionId): self
    {
        $this->stripeSessionId = $stripeSessionId;

        return $this;
    }
}
