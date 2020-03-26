<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use Faker\Factory;

use App\Entity\Product;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $faker = Factory::create();
        for ($i = 0; $i < 50; $i++) {
            $product = new Product();
            $product->setName($faker->realText($maxNbChars = 250, $indexSize = 1));
            $product->setPrice($faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = NULL));
            $product->setDescription($faker->realText($maxNbChars = 1500, $indexSize = 1));
            $manager->persist($product);
        }
        $manager->flush();
    }
}
