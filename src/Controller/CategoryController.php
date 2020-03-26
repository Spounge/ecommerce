<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
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

class CategoryController extends AbstractController
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
     * @Route("/api/category", name="add_category", methods={"POST"})
     * @param EntityManagerInterface $entityManager
     * @param Request $request
     * @return JsonResponse
     */
    public function add(EntityManagerInterface $entityManager, Request $request): JsonResponse
    {
        $category = new Category();
        $name = $request->get('name');

        $category->setName($name);
        $entityManager->persist($category);
        $entityManager->flush();;
        $data = $this->serializer->serialize($category, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/api/category/", name="get_categories", methods={"GET"})
     * @param CategoryRepository $categoryRepository
     * @param Request $request
     * @return JsonResponse
     */
    public function read_all(CategoryRepository $categoryRepository, Request $request): JsonResponse
    {
        $categories = $categoryRepository->findAll();
        $data = $this->serializer->serialize($categories, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/api/category/{id}", name="get_category", methods={"GET"})
     * @param Category $category
     * @param Request $request
     * @return JsonResponse
     */
    public function read(Category $category, Request $request): JsonResponse
    {
        $data = $this->serializer->serialize($category, 'json');
        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
