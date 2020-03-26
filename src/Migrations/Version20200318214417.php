<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200318214417 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE orders_products DROP FOREIGN KEY FK_749C879C8D9F6D38');
        $this->addSql('CREATE TABLE order_ (id INT AUTO_INCREMENT NOT NULL, total_price DOUBLE PRECISION NOT NULL, firstname VARCHAR(32) NOT NULL, lastname VARCHAR(32) NOT NULL, address VARCHAR(255) NOT NULL, credit_card_nb VARCHAR(20) NOT NULL, credit_card_pin VARCHAR(4) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('ALTER TABLE orders_products DROP FOREIGN KEY FK_749C879C8D9F6D38');
        $this->addSql('ALTER TABLE orders_products ADD CONSTRAINT FK_749C879C8D9F6D38 FOREIGN KEY (order_id) REFERENCES order_ (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE orders_products DROP FOREIGN KEY FK_749C879C8D9F6D38');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, total_price DOUBLE PRECISION NOT NULL, firstname VARCHAR(32) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, lastname VARCHAR(32) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, address VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, credit_card_nb VARCHAR(20) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, credit_card_pin VARCHAR(4) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE order_');
        $this->addSql('ALTER TABLE orders_products DROP FOREIGN KEY FK_749C879C8D9F6D38');
        $this->addSql('ALTER TABLE orders_products ADD CONSTRAINT FK_749C879C8D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id)');
    }
}
