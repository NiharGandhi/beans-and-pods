// lib/constants.ts
export const productCategories = [
  { slug: 'cocoa-beans', name: 'Cocoa Beans' },
  { slug: 'vanilla', name: 'Vanilla' },
  { slug: 'spices', name: 'Spices' },
  { slug: 'dry-beans', name: 'Dry Beans / Pulse' },
  { slug: 'essential-oil', name: 'Essential Oil' }
] as const;

export type ProductCategory = typeof productCategories[number];

export const products = [
  {
    "id": "cocoa-beans-1",
    "name": "Cocoa Nibs",
    "slug": "cocoa-nibs",
    "category": "cocoa-beans",
    "image": "/cocoa-nibs.webp?height=300&width=400",
    "shortDescription": "Premium quality cocoa nibs for chocolate production and baking",
    "description": "Our cocoa nibs are made from carefully selected cocoa beans, roasted to perfection and cracked into small pieces. They offer a rich, intense chocolate flavor with crunchy texture, perfect for chocolate production, baking, or as a gourmet topping.",
    "specifications": {
      "Fat content": "50% - 55%",
      "Moisture": "less than 3%",
      "Shell content": "less than 5%"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "cocoa-beans-2",
    "name": "Cocoa Mass",
    "slug": "cocoa-mass",
    "category": "cocoa-beans",
    "image": "/cocoa-mass.png?height=300&width=400",
    "shortDescription": "Pure cocoa mass for professional chocolate manufacturing",
    "description": "This high-quality cocoa mass is produced from premium cocoa beans, offering a deep chocolate flavor profile. It's the perfect base ingredient for chocolate manufacturers looking to create premium products.",
    "specifications": {
      "Fat content": "53% ± 2%",
      "Moisture": "max. 1.5%",
      "pH": "5.5 – 5.8",
      "Shell content": "max. 1.75%",
      "Fineness (≤ 100 microns)": "96% - 99%"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "cocoa-beans-3",
    "name": "Cocoa Butter",
    "slug": "cocoa-butter",
    "category": "cocoa-beans",
    "image": "/cocoa-butter.jpg?height=300&width=400",
    "shortDescription": "Pure, deodorized cocoa butter for chocolate and cosmetics",
    "description": "Our premium cocoa butter is extracted from quality cocoa beans. It has a smooth texture and mild chocolate aroma, making it ideal for chocolate production, confectionery, and cosmetic applications.",
    "specifications": {
      "Color": "pale yellowish, slight brown",
      "Free fatty acids (oleic acid)": "≤ 1.5%",
      "Types": "non deodorized / deodorized"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "cocoa-beans-4",
    "name": "Natural Cocoa Powder",
    "slug": "natural-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/natural-cocoa-powder.jpg?height=300&width=400",
    "shortDescription": "Non-alkalized cocoa powder with rich flavor and natural acidity",
    "description": "This natural cocoa powder retains all the natural flavors and acidity of cocoa. It's perfect for baking applications where a robust chocolate flavor is desired.",
    "specifications": {
      "Color": "light brown",
      "pH": "5.2 – 6.5",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "9-12% or 20-28%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "cocoa-beans-5",
    "name": "Alkalized Cocoa Powder",
    "slug": "alkalized-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/alkalized-cocoa-powder.png?height=300&width=400",
    "shortDescription": "Dutch-process cocoa powder with mellow flavor and dark color",
    "description": "Our alkalized cocoa powder undergoes a Dutch process to neutralize acidity, resulting in a smoother flavor and darker color. Ideal for beverages, baking, and confectionery.",
    "specifications": {
      "Color": "brown, dark brown",
      "pH": "6.8 – 7.2",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "9-12% or 20-28%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-1",
    "name": "Black Bourbon Grade A: Gourmet",
    "slug": "black-bourbon-grade-a-gourmet",
    "category": "vanilla",
    "image": "/black-bourbon-grade-a.webp?height=300&width=400",
    "shortDescription": "Premium gourmet vanilla beans from Madagascar",
    "description": "These Grade A vanilla beans from Madagascar's Bourbon region are plump, moist, and packed with flavor. Perfect for gourmet applications where premium vanilla is required.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "33% to 35%",
      "Vanillin Content": "1.5 to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-2",
    "name": "TK Grade AA: Brown Beans",
    "slug": "tk-grade-aa-brown-beans",
    "category": "vanilla",
    "image": "/tk-grade-aa.webp?height=300&width=400",
    "shortDescription": "Highest quality vanilla beans with exceptional aroma",
    "description": "Our Grade AA vanilla beans represent the top tier of vanilla quality, with superior aroma, flavor, and appearance. These brown beans are carefully selected for their high vanillin content.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "28% to 31%",
      "Vanillin Content": "1.5 to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-3",
    "name": "Red Vanilla / Extraction Grade Type Europe",
    "slug": "red-vanilla-europe",
    "category": "vanilla",
    "image": "/extraction-grade-type-europe.png?height=300&width=400",
    "shortDescription": "European extraction grade vanilla beans",
    "description": "These red vanilla beans are specially selected for extraction purposes, meeting European standards for vanilla extract production.",
    "specifications": {
      "Size": "12cm and more",
      "Moisture": "24% to 28%",
      "Vanillin Content": "1.4 to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-4",
    "name": "Red Vanilla / Extraction Grade Type USA",
    "slug": "red-vanilla-usa",
    "category": "vanilla",
    "image": "/extraction-type-grade-usa.png?height=300&width=400",
    "shortDescription": "USA extraction grade vanilla beans",
    "description": "These red vanilla beans meet the stringent requirements for vanilla extract production according to USA standards.",
    "specifications": {
      "Size": "12cm and more",
      "Moisture": "Less than 21%",
      "Vanillin Content": "1.4 to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-5",
    "name": "Vanilla Cuts",
    "slug": "vanilla-cuts",
    "category": "vanilla",
    "image": "/vanilla-cuts.png?height=300&width=400",
    "shortDescription": "Premium vanilla bean cuts for various applications",
    "description": "Our vanilla cuts are carefully prepared from quality vanilla beans, perfect for infusion, flavoring, and extract production.",
    "specifications": {
      "Size": "Bulk vanilla and less than 11cm",
      "Moisture": "13% to 15%",
      "Vanillin Content": "0.5 to 1.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-6",
    "name": "Ground Vanilla Powder",
    "slug": "ground-vanilla-powder",
    "category": "vanilla",
    "image": "/ground-vanilla-powder.png?height=300&width=400",
    "shortDescription": "Fine vanilla powder for easy incorporation",
    "description": "This ground vanilla powder offers all the flavor of vanilla beans in a convenient, easy-to-use form. Perfect for baking and flavoring applications.",
    "specifications": {
      "Moisture": "9% to 10%",
      "Vanillin Content": "1.2 to 1.5%",
      "Type": "100% Pure and Natural",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-7",
    "name": "Vanilla Caviar",
    "slug": "vanilla-caviar",
    "category": "vanilla",
    "image": "/vanilla-caviar.png?height=300&width=400",
    "shortDescription": "Pure vanilla seeds for premium applications",
    "description": "Our vanilla caviar consists of the precious seeds extracted from premium vanilla beans, offering intense flavor and visual appeal.",
    "specifications": {
      "Grain Size": "Less than 300 micron",
      "Moisture": "34% to 36%",
      "Vanillin Content": "2.5 to 3.0%",
      "Type": "100% Pure and Natural",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-8",
    "name": "Vanilla Oleoresin",
    "slug": "vanilla-oreseon",
    "category": "vanilla",
    "image": "/vanilla-oreseon.png?height=300&width=400",
    "shortDescription": "Concentrated vanilla flavor in oil-soluble form",
    "description": "This vanilla oleoresin is a concentrated form of vanilla flavor that's oil-soluble, making it ideal for certain food and cosmetic applications.",
    "specifications": {
      "Type": "100% Pure and Natural",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-1",
    "name": "Black Pepper",
    "slug": "black-pepper",
    "category": "spices",
    "image": "/black-pepper.jpg?height=300&width=400",
    "shortDescription": "Premium quality black peppercorns",
    "description": "Our black peppercorns are carefully selected for their size, aroma, and pungency. They offer a robust flavor perfect for culinary applications.",
    "specifications": {
      "Type": "Conventional",
      "Quality / Grade": "550G/L",
      "Humidity": "12%",
      "Foreign Material": "0.06",
      "Essential Oil": "1.8% (m/m) min",
      "Total Ash": "6",
      "Density": "500g/l min – 630g/l max",
      "Mold": "1.105"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-2",
    "name": "Pink Pepper",
    "slug": "pink-pepper",
    "category": "spices",
    "image": "/pink-pepper.jpg?height=300&width=400",
    "shortDescription": "Delicate pink peppercorns with mild flavor",
    "description": "These pink peppercorns offer a milder, fruitier flavor than traditional black pepper, with a beautiful color that enhances presentation.",
    "specifications": {
      "Product Identification": "Pink Pepper",
      "Type": "Conventional",
      "Quality / Grade": "550G/L",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-3",
    "name": "Cloves",
    "slug": "cloves",
    "category": "spices",
    "image": "/cloves.jpg?height=300&width=400",
    "shortDescription": "Aromatic whole cloves",
    "description": "Our cloves are hand-picked for their size and oil content, offering an intense aroma and flavor perfect for both sweet and savory dishes.",
    "specifications": {
      "Product Identification": "Cloves",
      "Type": "Conventional",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-4",
    "name": "Cardamom",
    "slug": "cardamon",
    "category": "spices",
    "image": "/cardamon.jpg?height=300&width=400",
    "shortDescription": "Fragrant green cardamom pods",
    "description": "These premium green cardamom pods contain small black seeds with a complex, citrusy flavor and intense aroma.",
    "specifications": {
      "Product Identification": "Cardamom",
      "Type": "Conventional",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-5",
    "name": "Garlic Cloves",
    "slug": "garlic",
    "category": "spices",
    "image": "/garlic-cloves.png?height=300&width=400",
    "shortDescription": "Premium quality dried garlic",
    "description": "Our dried garlic retains all the flavor of fresh garlic in a convenient, shelf-stable form. Perfect for seasoning blends and culinary applications.",
    "specifications": {
      "Product Identification": "Garlic Cloves",
      "Type": "Conventional",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-1",
    "name": "Red Kidney Bean",
    "slug": "red-kidney-bean",
    "category": "dry-beans",
    "image": "/red-kidney-bean.jpg?height=300&width=400",
    "shortDescription": "Premium quality red kidney beans",
    "description": "These red kidney beans are carefully selected for their size, color, and cooking quality. They're perfect for chili, soups, and traditional dishes.",
    "specifications": {
      "Product Identification": "Red Kidney Bean",
      "Caliber": "600-680 / 100gr",
      "Packing": "10Kgs, 25Kgs and 50kgs"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-2",
    "name": "White Kidney Bean",
    "slug": "white-kidney-bean",
    "category": "dry-beans",
    "image": "/white-kidney-bean.jpg?height=300&width=400",
    "shortDescription": "High-quality white kidney beans",
    "description": "Our white kidney beans offer a creamy texture and mild flavor, making them versatile for various culinary applications.",
    "specifications": {
      "Product Identification": "White Kidney Bean",
      "Caliber": "WKB 260/290, WKB 250/270, WKB320/340, WKB 200/220 – 220/240"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-3",
    "name": "Speckled Kidney Bean",
    "slug": "spackled-kidney-bean",
    "category": "dry-beans",
    "image": "/spackled-kidney-bean.png?height=300&width=400",
    "shortDescription": "Unique speckled kidney beans",
    "description": "These speckled kidney beans offer visual appeal along with excellent nutritional value and cooking properties.",
    "specifications": {
      "Product Identification": "Spackled kidney Bean",
      "Type": "Conventional"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-4",
    "name": "Lima Bean",
    "slug": "lima-bean",
    "category": "dry-beans",
    "image": "/lima-bean.png?height=300&width=400",
    "shortDescription": "Premium lima beans",
    "description": "Our lima beans are known for their buttery texture and mild flavor, perfect for soups, stews, and side dishes.",
    "specifications": {
      "Product Identification": "Lima Bean",
      "Type": "Conventional"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-5",
    "name": "Green Mung Bean",
    "slug": "green-mung-bean",
    "category": "dry-beans",
    "image": "/green-mung-bean.jpg?height=300&width=400",
    "shortDescription": "High-quality green mung beans",
    "description": "These green mung beans are perfect for sprouting, cooking, or grinding into flour for various culinary uses.",
    "specifications": {
      "Product Identification": "Green Mung Bean",
      "Type": "Conventional"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-6",
    "name": "Black Eyed Bean",
    "slug": "black-eyed-bean",
    "category": "dry-beans",
    "image": "/black-eyed-bean.png?height=300&width=400",
    "shortDescription": "Premium black-eyed peas",
    "description": "Our black-eyed beans are carefully selected for their uniform size and excellent cooking qualities, with a distinctive flavor and texture.",
    "specifications": {
      "Product Identification": "Black Eyed Bean",
      "Type": "Conventional"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-1",
    "name": "Ylang Ylang: (Cananga Flower)",
    "slug": "ylang-ylang",
    "category": "essential-oil",
    "image": "/ylang-ylang.jpg?height=300&width=400",
    "shortDescription": "Pure ylang ylang essential oil",
    "description": "This ylang ylang essential oil is extracted from Cananga flowers, offering a rich, floral fragrance with therapeutic benefits. Ylang ylang is a yellow, star-shaped flower that grows on the Cananga tree (Cananga odorata). This tropical species is native to countries surrounding the Indian Ocean. Ylang ylang's heady, aromatic scent is fruity, flowery, and rich.",
    "specifications": {
      "Product Identification": "Ylang ylang Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-2",
    "name": "Clove Oil",
    "slug": "clove-oil",
    "category": "essential-oil",
    "image": "/clove-oil.jpg?height=300&width=400",
    "shortDescription": "Pure clove essential oil",
    "description": "Our clove essential oil is steam distilled from premium quality cloves, offering a warm, spicy aroma with many applications. Clove oil is an essential oil that's derived from clove trees. The clove tree, known as Syzygium aromaticum, is native to Southeast Asia. Clove oil is produced by distilling the dried flower buds that are collected from the clove tree. Clove oil, which ranges in color from colorless to light yellow and has a strong, spicy aroma, has been used for centuries in a variety of applications.",
    "specifications": {
      "Product Identification": "Clove Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-3",
    "name": "Lavender Oil",
    "slug": "lavendel-oil",
    "category": "essential-oil",
    "image": "/lavender-oil.jpg?height=300&width=400",
    "shortDescription": "Premium lavender essential oil",
    "description": "This lavender essential oil offers a floral, herbaceous aroma with calming properties, perfect for aromatherapy and cosmetic applications. Lavender oil is an essential oil derived from the lavender plant. It can be taken orally, applied to the skin, and breathed in through aromatherapy. Lavender oil can benefit the skin in numerous ways. It has the ability to lessen acne, help lighten skin, and reduce wrinkles. It can even be used to treat other things, like improving hair health and digestion.",
    "specifications": {
      "Product Identification": "Lavender Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-4",
    "name": "Cinnamon Oil",
    "slug": "cinammon-oil",
    "category": "essential-oil",
    "image": "/cinnamon-oil.png?height=300&width=400",
    "shortDescription": "Pure cinnamon essential oil",
    "description": "Our cinnamon essential oil is extracted from cinnamon bark, offering a warm, spicy aroma with many uses in aromatherapy and flavoring. The scent of cinnamon is spicy, sweet, and for many, filled with happy memories of delicious food and cozy days. Cinnamon oil is prized for its lush fragrance. It's also linked to several health and beauty benefits. Cinnamon oil is derived from the bark or leaves of several types of trees, including the Cinnamomum verum tree and the Cinnamomum cassia tree.",
    "specifications": {
      "Product Identification": "Cinnamon Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-5",
    "name": "Lemongrass Oil",
    "slug": "lemongrass-oil",
    "category": "essential-oil",
    "image": "/lemongrass-oil.png?height=300&width=400",
    "shortDescription": "Fresh lemongrass essential oil",
    "description": "This lemongrass essential oil offers a bright, citrusy aroma with excellent therapeutic properties and uses in natural products. Lemongrass essential oil comes from the lemongrass plant, which grows in tropical and subtropical parts of the world. The oil can be bright or pale yellow with a thin consistency and a lemony scent. People have used lemongrass in traditional medicine for pain relief, stomach problems, and fevers. Its antioxidant, anti-inflammatory, and antifungal properties may also give it other benefits.",
    "specifications": {
      "Product Identification": "Lemongrass Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "essential-oil-6",
    "name": "Rosemary Oil",
    "slug": "rossmary-oil",
    "category": "essential-oil",
    "image": "/rossmary-oil.jpg?height=300&width=400",
    "shortDescription": "Pure rosemary essential oil",
    "description": "Our rosemary essential oil is steam distilled from fresh rosemary, offering a herbaceous, invigorating aroma with many benefits. Rosemary (Rosmarinus officinalis) is an evergreen shrub with needle-like leaves and a woody aroma. Though it is famous for its applications in the culinary world, rosemary has uses that reach far beyond cook books or holiday meals. Rosemary essential oil is a versatile essential oil that proves useful in everyday life for things like promoting healthy-looking hair, creating a relaxing massage, cooking healthy meals, and more. It even supports healthy digestion.",
    "specifications": {
      "Product Identification": "Rosemary Oil",
      "Type": "Essential Oil"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  }
];