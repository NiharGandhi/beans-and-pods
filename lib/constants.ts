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
    "image": "/cocoaBeans.jpg?height=300&width=400",
    "shortDescription": "Premium quality cocoa nibs for chocolate production and baking",
    "description": "Our cocoa nibs are made from carefully selected cocoa beans, roasted to perfection and cracked into small pieces. They offer a rich, intense chocolate flavor with crunchy texture, perfect for chocolate production, baking, or as a gourmet topping.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "cocoa-beans-2",
    "name": "Cocoa Mass",
    "slug": "cocoa-mass",
    "category": "cocoa-beans",
    "image": "/cocoaBeans.jpg?height=300&width=400",
    "shortDescription": "Pure cocoa mass for professional chocolate manufacturing",
    "description": "This high-quality cocoa mass is produced from premium cocoa beans, offering a deep chocolate flavor profile. It's the perfect base ingredient for chocolate manufacturers looking to create premium products.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "cocoa-beans-3",
    "name": "Cocoa Butter",
    "slug": "cocoa-butter",
    "category": "cocoa-beans",
    "image": "/cocoaBeans.jpg?height=300&width=400",
    "shortDescription": "Pure, deodorized cocoa butter for chocolate and cosmetics",
    "description": "Our premium cocoa butter is extracted from quality cocoa beans. It has a smooth texture and mild chocolate aroma, making it ideal for chocolate production, confectionery, and cosmetic applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "cocoa-beans-4",
    "name": "Natural Cocoa Powder",
    "slug": "natural-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/cocoaBeans.jpg?height=300&width=400",
    "shortDescription": "Non-alkalized cocoa powder with rich flavor and natural acidity",
    "description": "This natural cocoa powder retains all the natural flavors and acidity of cocoa. It's perfect for baking applications where a robust chocolate flavor is desired.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "cocoa-beans-5",
    "name": "Alkalized Cocoa Powder",
    "slug": "alkalized-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/cocoaBeans.jpg?height=300&width=400",
    "shortDescription": "Dutch-process cocoa powder with mellow flavor and dark color",
    "description": "Our alkalized cocoa powder undergoes a Dutch process to neutralize acidity, resulting in a smoother flavor and darker color. Ideal for beverages, baking, and confectionery.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-1",
    "name": "Black Bourbon Grade A: Gourmet",
    "slug": "black-bourbon-grade-a-gourmet",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Premium gourmet vanilla beans from Madagascar",
    "description": "These Grade A vanilla beans from Madagascar's Bourbon region are plump, moist, and packed with flavor. Perfect for gourmet applications where premium vanilla is required.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-2",
    "name": "TK Grade AA: Brown Beans",
    "slug": "tk-grade-aa-brown-beans",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Highest quality vanilla beans with exceptional aroma",
    "description": "Our Grade AA vanilla beans represent the top tier of vanilla quality, with superior aroma, flavor, and appearance. These brown beans are carefully selected for their high vanillin content.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-3",
    "name": "Red Vanilla / Extraction Grade Type Europe",
    "slug": "red-vanilla-europe",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "European extraction grade vanilla beans",
    "description": "These red vanilla beans are specially selected for extraction purposes, meeting European standards for vanilla extract production.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-4",
    "name": "Red Vanilla / Extraction Grade Type USA",
    "slug": "red-vanilla-usa",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "USA extraction grade vanilla beans",
    "description": "These red vanilla beans meet the stringent requirements for vanilla extract production according to USA standards.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-5",
    "name": "Vanilla Cuts",
    "slug": "vanilla-cuts",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Premium vanilla bean cuts for various applications",
    "description": "Our vanilla cuts are carefully prepared from quality vanilla beans, perfect for infusion, flavoring, and extract production.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-6",
    "name": "Ground Vanilla Powder",
    "slug": "ground-vanilla-powder",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Fine vanilla powder for easy incorporation",
    "description": "This ground vanilla powder offers all the flavor of vanilla beans in a convenient, easy-to-use form. Perfect for baking and flavoring applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-7",
    "name": "Vanilla Caviar",
    "slug": "vanilla-caviar",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Pure vanilla seeds for premium applications",
    "description": "Our vanilla caviar consists of the precious seeds extracted from premium vanilla beans, offering intense flavor and visual appeal.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "vanilla-8",
    "name": "Vanilla Oleoresin",
    "slug": "vanilla-oreseon",
    "category": "vanilla",
    "image": "/vanilla.jpg?height=300&width=400",
    "shortDescription": "Concentrated vanilla flavor in oil-soluble form",
    "description": "This vanilla oleoresin is a concentrated form of vanilla flavor that's oil-soluble, making it ideal for certain food and cosmetic applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "spices-1",
    "name": "Black Pepper",
    "slug": "black-pepper",
    "category": "spices",
    "image": "/spices.jpg?height=300&width=400",
    "shortDescription": "Premium quality black peppercorns",
    "description": "Our black peppercorns are carefully selected for their size, aroma, and pungency. They offer a robust flavor perfect for culinary applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "spices-2",
    "name": "Pink Pepper",
    "slug": "pink-pepper",
    "category": "spices",
    "image": "/spices.jpg?height=300&width=400",
    "shortDescription": "Delicate pink peppercorns with mild flavor",
    "description": "These pink peppercorns offer a milder, fruitier flavor than traditional black pepper, with a beautiful color that enhances presentation.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "spices-3",
    "name": "Cloves",
    "slug": "cloves",
    "category": "spices",
    "image": "/spices.jpg?height=300&width=400",
    "shortDescription": "Aromatic whole cloves",
    "description": "Our cloves are hand-picked for their size and oil content, offering an intense aroma and flavor perfect for both sweet and savory dishes.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "spices-4",
    "name": "Cardamom",
    "slug": "cardamon",
    "category": "spices",
    "image": "/spices.jpg?height=300&width=400",
    "shortDescription": "Fragrant green cardamom pods",
    "description": "These premium green cardamom pods contain small black seeds with a complex, citrusy flavor and intense aroma.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "spices-5",
    "name": "Garlic",
    "slug": "garlic",
    "category": "spices",
    "image": "/spices.jpg?height=300&width=400",
    "shortDescription": "Premium quality dried garlic",
    "description": "Our dried garlic retains all the flavor of fresh garlic in a convenient, shelf-stable form. Perfect for seasoning blends and culinary applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-1",
    "name": "Red Kidney Bean",
    "slug": "red-kidney-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Premium quality red kidney beans",
    "description": "These red kidney beans are carefully selected for their size, color, and cooking quality. They're perfect for chili, soups, and traditional dishes.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-2",
    "name": "White Kidney Bean",
    "slug": "white-kidney-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "High-quality white kidney beans",
    "description": "Our white kidney beans offer a creamy texture and mild flavor, making them versatile for various culinary applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-3",
    "name": "Speckled Kidney Bean",
    "slug": "spackled-kidney-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Unique speckled kidney beans",
    "description": "These speckled kidney beans offer visual appeal along with excellent nutritional value and cooking properties.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-4",
    "name": "Lima Bean",
    "slug": "lima-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Premium lima beans",
    "description": "Our lima beans are known for their buttery texture and mild flavor, perfect for soups, stews, and side dishes.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-5",
    "name": "Green Mung Bean",
    "slug": "green-mung-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "High-quality green mung beans",
    "description": "These green mung beans are perfect for sprouting, cooking, or grinding into flour for various culinary uses.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "dry-beans-6",
    "name": "Black Eyed Bean",
    "slug": "black-eyed-bean",
    "category": "dry-beans",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Premium black-eyed peas",
    "description": "Our black-eyed beans are carefully selected for their uniform size and excellent cooking qualities, with a distinctive flavor and texture.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-1",
    "name": "Ylang Ylang: (Cananga Flower)",
    "slug": "ylang-ylang",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Pure ylang ylang essential oil",
    "description": "This ylang ylang essential oil is extracted from Cananga flowers, offering a rich, floral fragrance with therapeutic benefits.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-2",
    "name": "Clove Oil",
    "slug": "clove-oil",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Pure clove essential oil",
    "description": "Our clove essential oil is steam distilled from premium quality cloves, offering a warm, spicy aroma with many applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-3",
    "name": "Lavender Oil",
    "slug": "lavendel-oil",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Premium lavender essential oil",
    "description": "This lavender essential oil offers a floral, herbaceous aroma with calming properties, perfect for aromatherapy and cosmetic applications.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-4",
    "name": "Cinnamon Oil",
    "slug": "cinammon-oil",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Pure cinnamon essential oil",
    "description": "Our cinnamon essential oil is extracted from cinnamon bark, offering a warm, spicy aroma with many uses in aromatherapy and flavoring.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-5",
    "name": "Lemongrass Oil",
    "slug": "lemongrass-oil",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Fresh lemongrass essential oil",
    "description": "This lemongrass essential oil offers a bright, citrusy aroma with excellent therapeutic properties and uses in natural products.",
    "specifications": {},
    "certifications": []
  },
  {
    "id": "essential-oil-6",
    "name": "Rosemary Oil",
    "slug": "rossmary-oil",
    "category": "essential-oil",
    "image": "/dryBeans.jpg?height=300&width=400",
    "shortDescription": "Pure rosemary essential oil",
    "description": "Our rosemary essential oil is steam distilled from fresh rosemary, offering a herbaceous, invigorating aroma with many benefits.",
    "specifications": {},
    "certifications": []
  },
];