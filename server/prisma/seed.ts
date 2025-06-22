import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Check if any company exists
  const existingCompany = await prisma.company.findFirst();
  if (existingCompany) {
    console.log("Data already exists. Skipping seeding.");
    return;
  }

  console.log("Starting database seeding...");

  try {
    // Create company
    const company = await prisma.company.create({
      data: {
        name: "TTW POS",
        address: "123 Tech Street, Silicon Valley",
      },
    });
    console.log(`Created company: ${company.name}`);

    // Create product categories
    const categories = await Promise.all([
      prisma.productCateogry.create({
        data: {
          name: "Popular",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Electronics",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Clothing",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Grocery",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Office Supplies",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Furniture",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Accessories",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Home & Kitchen",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Toys & Games",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Beauty & Personal Care",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Sports & Outdoors",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Health & Wellness",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Automotive",
          companyId: company.id,
        },
      }),
      prisma.productCateogry.create({
        data: {
          name: "Pet Supplies",
          companyId: company.id,
        },
      }),
    ]);
    console.log(`Created ${categories.length} product categories`);

    // Create products
    const products = await Promise.all([
      // Electronics
      prisma.product.create({
        data: {
          name: "Premium Laptop",
          price: 1240000,
          stock: 50,
          description: "High-performance laptop with 16GB RAM",
          imageUrl: "https://images.anandtech.com/doci/10113/XPS13.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Wireless Mouse",
          price: 26000,
          stock: 150,
          description: "Ergonomic wireless mouse",
          imageUrl:
            "https://cse.jo/image/cache/catalog/products/mouse/gaming/SC100-1200x1200.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Wireless Bluetooth Headphones",
          price: 47000,
          stock: 50,
          description:
            "High-quality wireless headphones with noise cancellation",
          imageUrl:
            "https://mm.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2b682f95/JBL_LIVE_460NC_Product%20Image_Hero_Black.png?sw=537&sfrm=png",
        },
      }),
      prisma.product.create({
        data: {
          name: "Smartphone Stand",
          price: 15500,
          stock: 200,
          description: "Adjustable phone stand compatible with all smartphones",
          imageUrl:
            "https://get-it-easy.de/wp-content/uploads/2022/06/smartphone-staender-mieten-get-it-easy.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "4K Smart TV",
          price: 350000,
          stock: 25,
          description: "55-inch 4K UHD Smart TV with HDR",
          imageUrl:
            "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/f9ce7d90-e05d-40c0-ae0b-a34495135b60/TV_OLED77C4PUA_gallery-01_3000x3000",
        },
      }),
      prisma.product.create({
        data: {
          name: "Smart Watch",
          price: 89000,
          stock: 40,
          description: "Fitness tracker with heart rate monitor",
          imageUrl:
            "https://lh3.googleusercontent.com/4WWTkgjVMEuXo6wRDyCx-BHRokMIovpmhWTHmJqHPqGfe0lOIIjURyvJfmMtqwOnCLuV5uB-cchbqtPpJh4b4o3x-SHvkRXRJMPH=s6000-w6000-e365-rw-v0-nu",
        },
      }),

      // Clothing
      prisma.product.create({
        data: {
          name: "Cotton T-Shirt",
          price: 50800,
          stock: 200,
          description: "Comfortable 100% cotton t-shirt",
          imageUrl:
            "https://www.thehempshop.co.uk/media/catalog/product/cache/53255479565ca60bd805cf968bff78ae/h/e/hempiness-250g-short-sleeve-tshirt-mens-navy-blue-front_7.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Denim Jeans",
          price: 75000,
          stock: 80,
          description: "Classic fit denim jeans",
          imageUrl:
            "https://lsco.scene7.com/is/image/lsco/A34940057-dynamic1-pdp",
        },
      }),
      prisma.product.create({
        data: {
          name: "Winter Jacket",
          price: 120000,
          stock: 35,
          description: "Water-resistant winter jacket with insulation",
          imageUrl:
            "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2116291_364_f_om?wid=2304&hei=2418&v=1748944136",
        },
      }),

      // Grocery
      prisma.product.create({
        data: {
          name: "Organic Apples (1lb)",
          price: 2000,
          stock: 500,
          description: "Fresh organic apples from local farm",
          imageUrl:
            "https://theproduceguyz.com/cdn/shop/products/image_38f13c69-1f3b-4a3f-86d5-14a06180efa8_1080x.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Organic Milk (1 gallon)",
          price: 4500,
          stock: 100,
          description: "Fresh organic whole milk",
          imageUrl:
            "https://www.kesargrocery.com/images/P/stonyfield-organic-milk-half-gallon-whole-500x500-1.png",
        },
      }),
      prisma.product.create({
        data: {
          name: "Whole Grain Bread",
          price: 3500,
          stock: 150,
          description: "Freshly baked whole grain bread",
          imageUrl:
            "https://thebusybaker.ca/wp-content/uploads/2015/02/easy-whole-grain-sandwich-bread-fb-ig-6-scaled.jpg",
        },
      }),

      // Office Supplies
      prisma.product.create({
        data: {
          name: "Notebook",
          price: 1600,
          stock: 300,
          description: "200-page lined notebook",
          imageUrl:
            "https://xco.s3.eu-west-1.amazonaws.com/product_images/October2023/N7G4WxLrtlLTTH5KqHSZ.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Ballpoint Pens (Pack of 12)",
          price: 5000,
          stock: 250,
          description: "Smooth writing ballpoint pens",
          imageUrl:
            "https://www.ubuy.com.mm/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFkOHNEWkVGVkwuX0FDX1NMMTUwMF8uanBn.jpg",
        },
      }),

      // Furniture
      prisma.product.create({
        data: {
          name: "Office Chair",
          price: 125000,
          stock: 15,
          description: "Ergonomic office chair with lumbar support",
          imageUrl:
            "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/cosm_chairs/it_prd_ovw_cosm_chairs_04.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Wooden Desk",
          price: 85000,
          stock: 10,
          description: "Solid wood office desk",
          imageUrl:
            "https://www.ikea.com/us/en/images/products/kallax-desk-white-stained-oak-effect__1328037_pe944622_s5.jpg",
        },
      }),

      // Accessories
      prisma.product.create({
        data: {
          name: "Stainless Steel Water Bottle",
          price: 24950,
          stock: 120,
          description: "Durable 1L stainless steel water bottle",
          imageUrl:
            "https://images-cdn.ubuy.co.in/6360771fcfe1af58d20c8fab-thermos-water-bottles-32-oz-stainless.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Leather Wallet",
          price: 45000,
          stock: 60,
          description: "Genuine leather bifold wallet",
          imageUrl:
            "https://olivercompanylondon.com/cdn/shop/files/Premium_Red_Wallet_new_hero_b144648b-5be7-4623-84d3-127e6a28c52a.jpg",
        },
      }),

      // Home & Kitchen
      prisma.product.create({
        data: {
          name: "Non-Stick Cookware Set",
          price: 65000,
          stock: 30,
          description: "10-piece non-stick cookware set",
          imageUrl:
            "https://i5.walmartimages.com/seo/Tramontina-9-Piece-Non-stick-Cookware-Set-Red_cbc0978b-6718-4ed2-9925-386eefd8d206_1.850d1dcf271664201f61e4e372cec316.jpeg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Air Fryer",
          price: 75000,
          stock: 25,
          description: "5.8-quart digital air fryer",
          imageUrl:
            "https://cdn.accentuate.io/605666443568/-1695035269432/3-v1695036808948.png?800x800",
        },
      }),

      // Toys & Games
      prisma.product.create({
        data: {
          name: "Board Game Collection",
          price: 45000,
          stock: 40,
          description: "Set of 5 popular board games",
          imageUrl:
            "https://img.freepik.com/premium-vector/board-game-collection_23-2148720601.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "LEGO Classic Set",
          price: 35000,
          stock: 50,
          description: "1500-piece LEGO classic bricks set",
          imageUrl:
            "https://www.lego.com/cdn/cs/set/assets/blt49f484f1e7076fd0/76328_Prod.png",
        },
      }),

      // Beauty & Personal Care
      prisma.product.create({
        data: {
          name: "Skincare Gift Set",
          price: 55000,
          stock: 35,
          description: "Complete skincare routine set",
          imageUrl:
            "https://dalba.com/cdn/shop/files/61tE1oPGIFL._SL1080_600x600_crop_center.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Electric Toothbrush",
          price: 32000,
          stock: 60,
          description: "Rechargeable electric toothbrush with 3 modes",
          imageUrl:
            "https://cdn11.bigcommerce.com/s-2idmiil7bp/images/stencil/1280x1280/products/1355/10949/VB-IO6TWIN-BG-70__41922__52691.1730131794.jpg?c=1https://cdn11.bigcommerce.com/s-2idmiil7bp/images/stencil/1280x1280/products/1355/10949/VB-IO6TWIN-BG-70__41922__52691.1730131794.jpg",
        },
      }),

      // Sports & Outdoors
      prisma.product.create({
        data: {
          name: "Yoga Mat",
          price: 28000,
          stock: 70,
          description: "Eco-friendly non-slip yoga mat",
          imageUrl:
            "https://energiefitness.in/cdn/shop/files/YogaMatFeatures.png",
        },
      }),
      prisma.product.create({
        data: {
          name: "Camping Tent",
          price: 95000,
          stock: 15,
          description: "4-person waterproof camping tent",
          imageUrl:
            "https://www.rei.com/media/1e47bd14-a38d-42f2-8f0f-94fdb980a983?size=2000",
        },
      }),

      // Health & Wellness
      prisma.product.create({
        data: {
          name: "Digital Scale",
          price: 18000,
          stock: 45,
          description: "Smart digital scale with BMI tracking",
          imageUrl:
            "https://image-cache.withings.com/site/media/wi_products/body-scan-black-kg.webp?src=png&h=948",
        },
      }),
      prisma.product.create({
        data: {
          name: "Massage Gun",
          price: 120000,
          stock: 20,
          description: "Deep tissue percussion massage gun",
          imageUrl:
            "https://pttimewithtim.com/wp-content/uploads/2023/03/How-to-use-massage-gun.jpg",
        },
      }),

      // Automotive
      prisma.product.create({
        data: {
          name: "Car Phone Mount",
          price: 15000,
          stock: 90,
          description: "Dashboard car phone holder",
          imageUrl:
            "https://i5.walmartimages.com/seo/Frusde-Car-Phone-Holder-Mount-360-Degree-Rotation-Dashboard-Cell-Phone-Holder-for-Car-Clip-Mount-Stand-Suitable-for-4-to-7-inch-Smartphones-Black_0112bdea-35c4-4d0f-a1fc-9ffd4d9d13e0.d4a7ce758c155628a6f396ae77f6721b.jpeg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Jump Starter",
          price: 85000,
          stock: 25,
          description: "Portable car battery jump starter",
          imageUrl:
            "https://cloreautomotive.com/wp-content/uploads/2021/11/JNC66-web.jpg",
        },
      }),
      prisma.product.create({
        data: {
          name: "Cat Tree",
          price: 45000,
          stock: 15,
          description: "Multi-level cat tree with scratching posts",
          imageUrl:
            "https://i5.walmartimages.com/seo/Alden-Design-71-5-H-Multi-Level-Large-Cat-Tree-with-2-Cozy-Perches-and-2-Condos-Light-Gray_b959f3b6-3eff-4bb4-9c9a-832aa300a4fa.4b2e2fb29ce494199471d7c868de6cc9.png",
        },
      }),
    ]);
    console.log(`Created ${products.length} products`);

    // Create product-category relationships
    const productCategoryRelations = [
      // Electronics
      { productName: "Premium Laptop", categoryName: "Electronics" },
      { productName: "Premium Laptop", categoryName: "Popular" },
      { productName: "Wireless Mouse", categoryName: "Electronics" },
      { productName: "Wireless Mouse", categoryName: "Office Supplies" },
      {
        productName: "Wireless Bluetooth Headphones",
        categoryName: "Electronics",
      },
      { productName: "Wireless Bluetooth Headphones", categoryName: "Popular" },
      { productName: "Smartphone Stand", categoryName: "Electronics" },
      { productName: "Smartphone Stand", categoryName: "Accessories" },
      { productName: "4K Smart TV", categoryName: "Electronics" },
      { productName: "Smart Watch", categoryName: "Electronics" },
      { productName: "Smart Watch", categoryName: "Accessories" },

      // Clothing
      { productName: "Cotton T-Shirt", categoryName: "Clothing" },
      { productName: "Cotton T-Shirt", categoryName: "Popular" },
      { productName: "Denim Jeans", categoryName: "Clothing" },
      { productName: "Winter Jacket", categoryName: "Clothing" },

      // Grocery
      { productName: "Organic Apples (1lb)", categoryName: "Grocery" },
      { productName: "Organic Milk (1 gallon)", categoryName: "Grocery" },
      { productName: "Whole Grain Bread", categoryName: "Grocery" },

      // Office Supplies
      { productName: "Notebook", categoryName: "Office Supplies" },
      {
        productName: "Ballpoint Pens (Pack of 12)",
        categoryName: "Office Supplies",
      },

      // Furniture
      { productName: "Office Chair", categoryName: "Furniture" },
      { productName: "Office Chair", categoryName: "Office Supplies" },
      { productName: "Wooden Desk", categoryName: "Furniture" },
      { productName: "Wooden Desk", categoryName: "Office Supplies" },

      // Accessories
      {
        productName: "Stainless Steel Water Bottle",
        categoryName: "Accessories",
      },
      { productName: "Stainless Steel Water Bottle", categoryName: "Popular" },
      { productName: "Leather Wallet", categoryName: "Accessories" },

      // Home & Kitchen
      { productName: "Non-Stick Cookware Set", categoryName: "Home & Kitchen" },
      { productName: "Air Fryer", categoryName: "Home & Kitchen" },
      { productName: "Air Fryer", categoryName: "Popular" },

      // Toys & Games
      { productName: "Board Game Collection", categoryName: "Toys & Games" },
      { productName: "LEGO Classic Set", categoryName: "Toys & Games" },

      // Beauty & Personal Care
      {
        productName: "Skincare Gift Set",
        categoryName: "Beauty & Personal Care",
      },
      {
        productName: "Electric Toothbrush",
        categoryName: "Beauty & Personal Care",
      },

      // Sports & Outdoors
      { productName: "Yoga Mat", categoryName: "Sports & Outdoors" },
      { productName: "Yoga Mat", categoryName: "Health & Wellness" },
      { productName: "Camping Tent", categoryName: "Sports & Outdoors" },

      // Health & Wellness
      { productName: "Digital Scale", categoryName: "Health & Wellness" },
      { productName: "Massage Gun", categoryName: "Health & Wellness" },

      // Automotive
      { productName: "Car Phone Mount", categoryName: "Automotive" },
      { productName: "Jump Starter", categoryName: "Automotive" },

      // Pet Supplies
      { productName: "Cat Tree", categoryName: "Pet Supplies" },
    ];

    const relations = await Promise.all(
      productCategoryRelations.map(async ({ productName, categoryName }) => {
        const product = products.find((p) => p.name === productName);
        const category = categories.find((c) => c.name === categoryName);

        if (!product || !category) {
          throw new Error(
            `Could not find product or category for ${productName} - ${categoryName}`
          );
        }

        return prisma.productCateogryProduct.create({
          data: {
            productId: product.id,
            productCategoryId: category.id,
          },
        });
      })
    );
    console.log(`Created ${relations.length} product-category relationships`);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
