<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class OrderController extends AbstractController
{
    private $serializer;

    public function __construct()
    {
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $this->serializer = new Serializer([$normalizer], [$encoder]);
    }

    /**
     * @Route("/api/order/", methods={"POST"})
     * @param Request $request
     * @param ProductRepository $productRepository
     * @param EntityManagerInterface $entityManager
     * @return JsonResponse
     */
    public function addOrder(
        Request $request,
        ProductRepository $productRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $order = new Order();
        $firstname = $request->get('firstname');
        $lastname = $request->get('lastname');
        $address = $request->get('address');
        $creditCardNb = $request->get('creditCardNb');
        $creditCardPin = $request->get('creditCardPin');
        $product_ids = $request->get('product_ids');
        dump($product_ids);
        for ($i = 0; $i < count($product_ids); $i++) {
            $product_ids[$i] = (int)$product_ids[$i];
        }
        $products = $productRepository->findByIds($product_ids);
        $totalPrice = 0;
        foreach ($products as $product) {
            $totalPrice += $product->getPrice();
        }
        $order->setFirstname($firstname);
        $order->setLastname($lastname);
        $order->setAddress($address);
        $order->setCreditCardNb($creditCardNb);
        $order->setCreditCardPin($creditCardPin);
        $order->setTotalPrice($totalPrice);
        foreach ($products as $product) {
            $order->addProduct($product);
        }
        $entityManager->persist($order);
        $entityManager->flush();;
        return new JsonResponse([
            'status' => 'Order created with id '.$order->getId(),
            'id' => $order->getId(),
        ], Response::HTTP_CREATED);
    }

    /**
     * @Route("api/order/{id}", methods={"GET"})
     * @param Order $order
     * @param SerializerInterface $serializer
     * @return JsonResponse
     */
    public function getOrder(Order $order, SerializerInterface $serializer)
    {
        $data = $this->serializer->serialize($order, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
