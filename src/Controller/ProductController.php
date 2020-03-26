<?php
namespace App\Controller;

use App\Entity\Product;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
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
use Symfony\Component\Validator\Constraints\Json;

class ProductController extends AbstractController
{
    private $productRepository;
    private $entityManager;
    private $serializer;

    public function __construct(EntityManagerInterface $entityManager, ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
        $this->entityManager = $entityManager;
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
     * @Route("/api/product/", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function add(Request $request): JsonResponse
    {
        // TODO: Type validation
        $product = new Product();
        $name = $request->get('name');
        $price = $request->get('price');
        $description = $request->get('description');
        if (empty($name) || empty($price)) {
            return new JsonResponse(['error' => 'Expecting mandatory parameters'], Response::HTTP_BAD_REQUEST);
        }
        $product->setName($name);
        $product->setPrice($price);
        $product->setDescription($description);
        $this->entityManager->persist($product);
        $this->entityManager->flush();;
        return new JsonResponse(['status' => 'Product created with id '.$product->getId()], Response::HTTP_CREATED);
    }

    /**
     * @Route("/api/product/{id}", methods={"PUT"})
     * @param CategoryRepository $categoryRepository
     * @param Product $product
     * @param Request $request
     * @param SerializerInterface $serializer
     * @return JsonResponse
     */
    public function update(
        CategoryRepository $categoryRepository,
        Product $product,
        Request $request
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        $name = $data['name'];
        $price = $data['price'];
        $description = $data['description'];
        $categoryName = $data['category'];
        if (empty($name) || empty($price)) {
            return new JsonResponse(['error' => 'Expecting mandatory parameters'], Response::HTTP_BAD_REQUEST);
        }
        $product->setName($name);
        $product->setPrice($price);
        $product->setDescription($description);
        $category = $categoryRepository->findOneByName($categoryName);
        $product->setCategory($category);
        $this->entityManager->persist($product);
        $this->entityManager->flush();
        $data = $this->serializer->serialize($product, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/api/product/", methods={"GET"})
     * @return JsonResponse All products sorted by creation date
     */
    public function productList(): JsonResponse
    {
        $products = $this->productRepository->findAll();
        $data = $this->serializer->serialize($products, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/api/product/array", methods={"GET"})
     * @param Request $request
     * @return JsonResponse All products sorted by creation date
     */
    public function productListByIds(Request $request): JsonResponse
    {
        $ids = $request->query->get('ids');
        for ($i = 0; $i < count($ids); $i++) {
            $ids[$i] = (int)$ids[$i];
        }
        $products = $this->productRepository->findArray($ids);
        $data = $this->serializer->serialize($products, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/api/product/{id}", methods={"GET"})
     * @param Product $product
     * @return JsonResponse
     */
    public function product(Product $product): JsonResponse
    {
        $data = $this->serializer->serialize($product, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}