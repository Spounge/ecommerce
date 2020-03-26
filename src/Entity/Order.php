<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrderRepository")
 * @ORM\Table(name="order_")
 */
class Order
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $totalPrice;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $creditCardNb;

    /**
     * @ORM\Column(type="string", length=4)
     */
    private $creditCardPin;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Product")
     * @ORM\JoinTable(name="orders_products",
     *     joinColumns={@ORM\JoinColumn(name="order_id", referencedColumnName="id")},
     *     inverseJoinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id")}
     *     )
     */
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotalPrice(): ?float
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(float $totalPrice): self
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCreditCardNb(): ?string
    {
        return $this->creditCardNb;
    }

    public function setCreditCardNb(string $creditCardNb): self
    {
        $this->creditCardNb = $creditCardNb;

        return $this;
    }

    public function getCreditCardPin(): ?string
    {
        return $this->creditCardPin;
    }

    public function setCreditCardPin(string $creditCardPin): self
    {
        $this->creditCardPin = $creditCardPin;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        $this->products[] = $product;
//        if (!$this->products->contains($product)) {
//            $this->products[] = $product;
//            $product->setOrderObject($this);
//        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        $this->products->removeElement($product);
//        if ($this->products->contains($product)) {
//            $this->products->removeElement($product);
//            // set the owning side to null (unless already changed)
//            if ($product->getOrderObject() === $this) {
//                $product->setOrderObject(null);
//            }
//        }

        return $this;
    }
}
