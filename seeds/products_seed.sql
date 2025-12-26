-- Seed data for products table
-- Run after creating the products table

START TRANSACTION;

INSERT INTO products (nama_product, deskripsi_product, image_product, harga_product) VALUES
('Teh Hijau Jepang', 'Teh hijau premium dengan aroma segar dan rasa umami ringan.', 'https://img.inews.co.id/media/1200/files/inews_new/2021/02/08/IMG_08022021_110956__822_x_430_piksel_.jpg', 65000.00),
('Cokelat Artisan', 'Cokelat dark 70% dari kakao pilihan, tekstur halus.', 'https://artisancoffeeaccess.wordpress.com/wp-content/uploads/2015/04/shutterstock_75410191-96-1500-x-790-coffee-bottom.jpg', 95000.00),
('Madu Hutan', 'Madu murni dari hutan tropis, tanpa campuran.', 'https://awsimages.detik.net.id/community/media/visual/2021/09/26/kopi-campur-madu-diklaim-lebih-sehat-ini-5-manfaatnya.jpeg?w=650', 120000.00),
('Granola Crunch', 'Granola panggang dengan oat, almond, dan madu.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHktV3MWu5211T-xrBe_-SjqkpjfqudozAPQ&s', 78000.00);

COMMIT;
