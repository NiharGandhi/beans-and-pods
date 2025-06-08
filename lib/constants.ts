// lib/constants.ts
export const productCategories = [
  { slug: 'cocoa-beans', name: 'Cocoa', image: '/product_categories/cocoa.jpg', description: 'DESCRIPTION' },
  { slug: 'vanilla', name: 'Vanilla', image: '/product_categories/vanilla.jpg', description: 'DESCRIPTION' },
  { slug: 'coffee', name: 'Coffee', image: '/product_categories/coffee.jpg', description: 'DESCRIPTION' },
  { slug: 'spices', name: 'Spices', image: '/product_categories/spices.jpg', description: 'DESCRIPTION' },
  { slug: 'dry-beans', name: 'Grains and Pulses', image: '/product_categories/grains_and_pulses.jpg', description: 'DESCRIPTION' },
  { slug: 'essential-oil', name: 'Essential Oil', image: '/product_categories/essential_oil.jpg', description: 'DESCRIPTION' }
] as const;

export type ProductCategory = typeof productCategories[number];

export const products = [
  {
    "id": "cocoa-beans-1",
    "name": "Raw Cocoa Beans",
    "slug": "cocoa-beans",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-beans.png?height=300&width=400",
    "shortDescription": "Premium quality cocoa nibs for chocolate production and baking",
    "description": "Our cocoa nibs are made from carefully selected cocoa beans, roasted to perfection and cracked into small pieces. They offer a rich, intense chocolate flavor with crunchy texture, perfect for chocolate production, baking, or as a gourmet topping.",
    "specifications": {
      "Fat content": "50% - 55%",
      "Bean Count": "90 to 100 beans per 100g",
      "Processing type": "sun dried",
      "Moisture": "less than 7%"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-2",
    "name": "Cocoa Nibs",
    "slug": "cocoa-nibs",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-nibs.webp?height=300&width=400",
    "shortDescription": "Premium quality cocoa nibs for chocolate production and baking",
    "description": "Our cocoa nibs are made from carefully selected cocoa beans, roasted to perfection and cracked into small pieces. They offer a rich, intense chocolate flavor with crunchy texture, perfect for chocolate production, baking, or as a gourmet topping.",
    "specifications": {
      "Fat content": "50% - 55%",
      "Moisture": "less than 3%",
      "Shell content": "less than 5%"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-3",
    "name": "Cocoa Mass",
    "slug": "cocoa-mass",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-mass.png?height=300&width=400",
    "shortDescription": "Pure cocoa mass for professional chocolate manufacturing",
    "description": "Our Cocoa Mass, also known as Cocoa Liquor, is a rich, aromatic paste crafted from finely ground, roasted cocoa nibs. Sourced from the world’s most esteemed cocoa-growing regions, this pure, unsweetened product is the essence of chocolate in its most concentrated form. With its deep flavor profile, smooth texture, and high cocoa butter content, our cocoa mass is the preferred choice of master chocolatiers, luxury confectioners, and gourmet artisans seeking unmatched quality and depth in their creations.",
    "specifications": {
      "Fat content": "53% ± 2%",
      "Moisture": "max. 1.5%",
      "pH": "5.5 - 5.8",
      "Shell content": "max. 1.75%",
      "Fineness (≤ 100 microns)": "96% - 99%"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-4",
    "name": "Natural Cocoa Butter",
    "slug": "natural-cocoa-butter",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-butter.jpg?height=300&width=400",
    "shortDescription": "Pure, deodorized cocoa butter for chocolate and cosmetics",
    "description": "Our Natural Cocoa Butter is a silky, golden fat extracted from premium-grade cocoa beans, prized for its delicate chocolate aroma and velvety texture. Unrefined and minimally processed, it retains all the richness of its origin—making it a coveted ingredient in luxury skincare, artisanal chocolate, and high-end wellness formulations. With its exceptional emollient properties and naturally smooth finish, our cocoa butter embodies purity, indulgence, and timeless elegance.",
    "specifications": {
      "Color": "pale yellowish, slight brown",
      "Free fatty acids (oleic acid)": "≤ 1.5%",
      "Types": "non deodorized / deodorized"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-5",
    "name": "Natural Cocoa Powder",
    "slug": "natural-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/cocoa_products/natural-cocoa-powder.jpg?height=300&width=400",
    "shortDescription": "Non-alkalized cocoa powder with rich flavor and natural acidity",
    "description": "Natural Cocoa Powder is produced by finely grinding roasted cocoa beans after the extraction of cocoa butter. It retains the rich, intense chocolate flavor and deep color characteristic of premium cocoa. Free from alkalizing agents, our natural cocoa powder offers a slightly acidic profile, making it ideal for traditional baking, confectionery, and beverage applications. Sourced from trusted origins, it meets rigorous quality standards to ensure consistency and superior taste in every batch.",
    "specifications": {
      "Color": "light brown",
      "pH": "5.2 - 6.5",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "9-12% or 20-28%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-6",
    "name": "Alkalized Cocoa Powder",
    "slug": "alkalized-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/cocoa_products/alkalized-cocoa-powder.png?height=300&width=400",
    "shortDescription": "Dutch-process cocoa powder with mellow flavor and dark color",
    "description": "Alkalized Cocoa Powder, also known as Dutch-processed cocoa, is treated with an alkalizing agent to neutralize its natural acidity. This process enhances its color, giving it a darker, richer hue, and produces a smoother, milder flavor profile. Ideal for premium baking, confectionery, and beverage applications, our alkalized cocoa powder delivers consistent quality and excellent solubility, meeting the demands of sophisticated recipes and high-end food products.",
    "specifications": {
      "Color": "brown, dark brown",
      "pH": "6.8 - 7.2",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "9-12% or 20-28%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "certifications": []
  },
  {
    "id": "cocoa-beans-7",
    "name": "Alkalized Cocoa Powder (Black)",
    "slug": "alkalized-cocoa-powder-black",
    "category": "cocoa-beans",
    "image": "/cocoa_products/alkalized-cocoa-powder-black.png?height=300&width=400",
    "shortDescription": "Dutch-process cocoa powder with mellow flavor and dark color",
    "description": "Alkalized Cocoa Powder, also known as Dutch-processed cocoa, is treated with an alkalizing agent to neutralize its natural acidity. This process enhances its color, giving it a darker, richer hue, and produces a smoother, milder flavor profile. Ideal for premium baking, confectionery, and beverage applications, our alkalized cocoa powder delivers consistent quality and excellent solubility, meeting the demands of sophisticated recipes and high-end food products.",
    "specifications": {
      "Color": "dark brown",
      "pH": "7.0 - 8.5",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "8 - 10%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "certifications": []
  },
  {
    "id": "vanilla-1",
    "name": "Black Bourbon Grade A: Gourmet",
    "slug": "black-bourbon-grade-a-gourmet",
    "category": "vanilla",
    "image": "/vanilla_products/black-bourbon-grade-a.webp?height=300&width=400",
    "shortDescription": "Premium gourmet vanilla beans from Madagascar",
    "description": "These Grade A vanilla beans from Madagascar's Bourbon region are plump, moist, and packed with flavor. Perfect for gourmet applications where premium vanilla is required.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "32% to 35%",
      "Vanillin Content": "1.5% to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-2",
    "name": "TK Grade AA: Brown Beans",
    "slug": "tk-grade-aa-brown-beans",
    "category": "vanilla",
    "image": "/vanilla_products/tk-grade-aa.webp?height=300&width=400",
    "shortDescription": "Highest quality vanilla beans with exceptional aroma",
    "description": "Our Grade AA vanilla beans represent the top tier of vanilla quality, with superior aroma, flavor, and appearance. These brown beans are carefully selected for their high vanillin content.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "28% to 31%",
      "Vanillin Content": "1.5% to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-3",
    "name": "Red Vanilla / Extraction Grade Type Europe",
    "slug": "red-vanilla-europe",
    "category": "vanilla",
    "image": "/vanilla_products/extraction-grade-type-europe.png?height=300&width=400",
    "shortDescription": "European extraction grade vanilla beans",
    "description": "These red vanilla beans are specially selected for extraction purposes, meeting European standards for vanilla extract production.",
    "specifications": {
      "Size": "12cm and more",
      "Moisture": "24% to 28%",
      "Vanillin Content": "1.4% to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-4",
    "name": "Red Vanilla / Extraction Grade Type USA",
    "slug": "red-vanilla-usa",
    "category": "vanilla",
    "image": "/vanilla_products/extraction-type-grade-usa.png?height=300&width=400",
    "shortDescription": "USA extraction grade vanilla beans",
    "description": "These red vanilla beans meet the stringent requirements for vanilla extract production according to USA standards.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "Less than 21%",
      "Vanillin Content": "1.4% to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-5",
    "name": "Exhausted Vanilla Seeds Grade A",
    "slug": "exhausted-vanilla-seeds-grade-a",
    "category": "vanilla",
    "image": "/vanilla_products/exhausted-vanilla-seeds.png?height=300&width=400",
    "shortDescription": "Premium vanilla bean cuts for various applications",
    "description": "Our vanilla cuts are carefully prepared from quality vanilla beans, perfect for infusion, flavoring, and extract production.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Appearance": "Dry grain black color",
      "Moisture": "5% - 12%",
      "Grain Size": "less than 300 micron",
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-6",
    "name": "Ground Vanilla Powder",
    "slug": "ground-vanilla-powder",
    "category": "vanilla",
    "image": "/vanilla_products/ground-vanilla-powder.png?height=300&width=400",
    "shortDescription": "Fine vanilla powder for easy incorporation",
    "description": "Ground Vanilla Powder is finely ground from high-quality cured vanilla beans, preserving the rich aroma and complex flavor of pure vanilla in a convenient powdered form. Ideal for use in baking, confectionery, beverages, and premium food products, this powder delivers consistent flavor intensity and ease of incorporation without the moisture of whole beans or extracts. Our ground vanilla powder is free from artificial additives, ensuring an authentic, clean vanilla experience for artisanal and industrial applications alike.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Botanical Name": "Vanilla planifolia",
      "Vanillin Content": "1.2 to 1.5%",
      "Moisture": "9% to 10%",
      "Grain Size": "Less than 300 micron",
      "Appearance": "Pulp oil, fresh grains",
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-7",
    "name": "Vanilla Caviar",
    "slug": "vanilla-caviar",
    "category": "vanilla",
    "image": "/vanilla_products/vanilla-caviar.png?height=300&width=400",
    "shortDescription": "Pure vanilla seeds for premium applications",
    "description": "Our vanilla caviar consists of the precious seeds extracted from premium vanilla beans, offering intense flavor and visual appeal.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Botanical Name": "Vanilla planifolia",
      "Vanillin Content": "2.5 to 3.0%",
      "Moisture": "34% to 36%",
      "Grain Size": "Less than 300 micron",
      "Appearance": "Pulp oil, fresh grains",
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "vanilla-8",
    "name": "Vanilla Oreseon (Vanilla Extraction)",
    "slug": "vanilla-oreseon",
    "category": "vanilla",
    "image": "/vanilla_products/vanilla-oreseon.png?height=300&width=400",
    "shortDescription": "Concentrated vanilla flavor in oil-soluble form",
    "description": "Our Vanilla Oreseon offers the pure, rich flavor of vanilla without the use of alcohol as a solvent. Extracted using alternative methods such as glycerin or water-based processes, this extract retains the natural aroma and complexity of premium vanilla beans. Ideal for food products, beverages, and applications with alcohol restrictions, it provides a versatile and clean vanilla flavor solution while meeting the needs of diverse markets including natural, organic, and specialty sectors.",
    "specifications": {
      "Extraction": "10 fold, 20 fold, 30 fold",
      "Type": "100% Pure and Natural",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "vanilla-9",
    "name": "Non-Alcoholic Vanilla Paste",
    "slug": "non-alcoholic-vanilla-paste",
    "category": "vanilla",
    "image": "/vanilla_products/non-alcoholic-vanilla-paste.png?height=300&width=400",
    "shortDescription": "Premium vanilla bean cuts for various applications",
    "description": "Our vanilla cuts are carefully prepared from quality vanilla beans, perfect for infusion, flavoring, and extract production.",
    "specifications": {
      "Aspect": "Dark brown paste, Sugar Syrup",
      "Vanilla Beans": "10%",
      "Raw Brown Sugar": "50%",
      "Water": "35%",
      "Corn Syrup": "5%",
    },
    "certifications": []
  },
  {
    "id": "vanilla-10",
    "name": "Raw Brown Sugar",
    "slug": "raw-brown-sugar",
    "category": "vanilla",
    "image": "/vanilla_products/raw-brown-sugar.png?height=300&width=400",
    "shortDescription": "Premium vanilla bean cuts for various applications",
    "description": "Our vanilla cuts are carefully prepared from quality vanilla beans, perfect for infusion, flavoring, and extract production.",
    "specifications": {
      "Ingredients": "Brown Sugar",
      "Vanilla Beans": "10%"
    },
    "certifications": []
  },
  {
    "id": "spices-1",
    "name": "Black Pepper",
    "slug": "black-pepper",
    "category": "spices",
    "image": "/spices_products/black-pepper.jpg?height=300&width=400",
    "shortDescription": "Premium quality black peppercorns",
    "description": "Black Pepper, known as the “King of Spices,” is cherished worldwide for its sharp, pungent flavor and versatile culinary use. Sourced from premium plantations in key producing regions such as India, Vietnam, and Indonesia, our black pepper is carefully harvested and processed to preserve its rich aroma and robust heat. Ideal for food seasoning, spice blends, and industrial applications, our black pepper consistently delivers superior quality and flavor integrity.",
    "specifications": {
      "Quality / Grade": "500 - 550 G/L",
      "Type": "Conventional",
      "Humidity": "10.5% min - 12% max",
      "Essential Oil": "1.8% (m/m) min",
      "Foreign Material": "0.062%",
      "Total Ash": "6% max",
      "Density": "500g/l - 550/l",
      "Mold": "0.001%",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-2",
    "name": "Pink Pepper",
    "slug": "pink-pepper",
    "category": "spices",
    "image": "/spices_products/pink-pepper.jpg?height=300&width=400",
    "shortDescription": "Delicate pink peppercorns with mild flavor",
    "description": "Pink Peppercorns are vibrant, aromatic berries known for their delicate, fruity, and slightly sweet flavor with subtle peppery notes. Sourced primarily from the berries of the Brazilian pepper tree or Peruvian pepper tree, our pink pepper is carefully harvested to ensure freshness and vibrant color. Ideal for gourmet culinary use, specialty spice blends, and artisanal products, pink pepper adds an elegant and unique twist to a wide range of flavor profiles.",
    "specifications": {
      "Quality / Grade": "1 & 2",
      "Type": "Conventional",
      "Appearance": "Bright pink berries",
      "Flavour & Odor": "same to roses",
      "Size": "less than 0.5cm",
      "Moisture": "12% max",
      "Extraneous matter": "2% max",
      "Total Ash": "5% max",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-3",
    "name": "Wild Pepper",
    "slug": "wild-pepper",
    "category": "spices",
    "image": "/spices_products/wild-pepper.png?height=300&width=400",
    "shortDescription": "Delicate pink peppercorns with mild flavor",
    "description": "Pink Peppercorns are vibrant, aromatic berries known for their delicate, fruity, and slightly sweet flavor with subtle peppery notes. Sourced primarily from the berries of the Brazilian pepper tree or Peruvian pepper tree, our pink pepper is carefully harvested to ensure freshness and vibrant color. Ideal for gourmet culinary use, specialty spice blends, and artisanal products, pink pepper adds an elegant and unique twist to a wide range of flavor profiles.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Odor": "Strong characteristic and aromatic",
      "Color": "Dark red, black",
      "Taste": "sour, spicy",
      "Moisture": "12% max",
      "Extraneous matter": "0.05% max",
      "Total Ash": "5% max",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-4",
    "name": "Green Cardamom",
    "slug": "green-cardamon",
    "category": "spices",
    "image": "/spices_products/cardamon.jpg?height=300&width=400",
    "shortDescription": "Fragrant green cardamom pods",
    "description": "Cardamom, often referred to as the “Queen of Spices,” is celebrated for its unique, sweet, and aromatic flavor with hints of citrus and eucalyptus. Sourced from premier growing regions such as Guatemala, India, and Sri Lanka, our cardamom is carefully harvested and processed to retain its vibrant aroma and superior quality. Widely used in culinary, beverage, and perfumery industries, our premium cardamom adds a luxurious and exotic touch to both traditional and contemporary products.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Moisture": "12% max",
      "Total Ash": "5% max",
      "Damage capsules": "5% max",
      "Organic extraneous matter": "4% min",
      "Inorganic extraneous matter": "1% max",
      "Volatile oil (ml/100gr)": "1% max",
      "Extraneous matter": "0.05% max",
      "Shelf-life": "02 Years"
    },
    "origin": "India / Guatemala",
    "certifications": []
  },
  {
    "id": "spices-5",
    "name": "Cloves",
    "slug": "cloves",
    "category": "spices",
    "image": "/spices_products/cloves.jpg?height=300&width=400",
    "shortDescription": "Aromatic whole cloves",
    "description": "Cloves are aromatic flower buds prized for their intense, warm, and sweet-spicy flavor. Harvested from clove trees in top-producing regions such as Indonesia, Madagascar, and Sri Lanka, our cloves are carefully dried to preserve their essential oils and potent aroma. Widely used in culinary applications, traditional medicine, and fragrance industries, our premium cloves offer consistent quality and a distinctive flavor profile that elevates both gourmet dishes and natural wellness products.",
    "specifications": {
      "Quality / Grade": "CG3",
      "Type": "Conventional",
      "Color": "reddish brown",
      "Moisture": "less than 12%",
      "Headless cloves": "2% max",
      "Baby cloves": "2% max",
      "Stems": "2% max",
      "Impurity product": "less than 1%",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-6",
    "name": "Turmeric Powder",
    "slug": "turmeric-powder",
    "category": "spices",
    "image": "/spices_products/turmeric-powder.png?height=300&width=400",
    "shortDescription": "Premium quality turmeric powder",
    "description": "Our turmeric powder is made from the finest turmeric rhizomes, carefully dried and ground to preserve its vibrant color and potent flavor. Known for its anti-inflammatory properties and warm, earthy taste, turmeric is a staple in many cuisines and wellness practices.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Appearance": "Fine powder",
      "Color": "Yellow orange to orange brown",
      "Flavor": "Spicy, Earthy",
      "Moisture": "10% max",
      "Total Ash": "9% max",
      "Volatile Oil": "2.5% max",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "spices-7",
    "name": "Cinnamon Stick",
    "slug": "cinnamon-stick",
    "category": "spices",
    "image": "/spices_products/cinnamon-stick.png?height=300&width=400",
    "shortDescription": "Premium quality cinnamon sticks",
    "description": "Our cinnamon sticks are made from the inner bark of Cinnamomum trees, carefully harvested and dried to preserve their warm, sweet flavor and aromatic qualities. Known for their culinary versatility and health benefits, cinnamon sticks are a staple in both sweet and savory dishes.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Appearance": "Light brown stick",
      "Flavor & odor": "Aromatic and characteristic",
      "Length": "8cm - 18cm",
      "Diameter": "0.5cm - 1.2cm",
      "Thickness": "1.3mm - 3.0mm",
      "Moisture": "12% max",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-9",
    "name": "Cinnamon Powder",
    "slug": "cinnamon-powder",
    "category": "spices",
    "image": "/spices_products/cinnamon-powder.png?height=300&width=400",
    "shortDescription": "Premium quality cinnamon powder",
    "description": "Our cinnamon powder is made from the finest cinnamon sticks, carefully ground to preserve their warm, sweet flavor and aromatic qualities. Known for their culinary versatility and health benefits, cinnamon powder is a staple in both sweet and savory dishes.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Appearance": "Pale brown powder",
      "Part of plant used": "Bark",
      "Odor & smell": "Aromatic and characteristic",
      "Moisture": "12% max",
      "Ash": "4% max",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-10",
    "name": "Asafoetida Powder",
    "slug": "asafoetida-powder",
    "category": "spices",
    "image": "/spices_products/asafoetida-powder.png?height=300&width=400",
    "shortDescription": "Premium quality asafoetida powder",
    "description": "Our asafoetida powder is made from the finest asafoetida resin, carefully ground to preserve its strong, pungent flavor and aromatic qualities. Known for its culinary versatility and health benefits, asafoetida powder is a staple in many traditional dishes.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Flavour and odor": "Strong smell, bitter and hot taste",
      "Appearance": "Yellowish powder",
      "Extraneous matter": "Less than 1.5%",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-11",
    "name": "Dried Ginger",
    "slug": "dried-ginger",
    "category": "spices",
    "image": "/spices_products/dried-ginger.png?height=300&width=400",
    "shortDescription": "Premium quality dried ginger root",
    "description": "Our dried ginger consists of whole air-dried ginger roots with a strong aroma and flavor, ideal for a variety of culinary and medicinal applications.",
    "specifications": {
      "Quality / Grade": "A",
      "Appearance": "Dried root",
      "Size": "Whole piece",
      "Drying process": "Air dried",
      "Extraneous matter": "1% max",
      "Insect": "0%",
      "Mold": "0%",
      "Shelf-life": "2 years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-12",
    "name": "Ginger Powder",
    "slug": "ginger-powder",
    "category": "spices",
    "image": "/spices_products/ginger-powder.png?height=300&width=400",
    "shortDescription": "Fine yellow ginger powder with strong aroma",
    "description": "Our ginger powder is made from 100% dried ginger roots, finely ground to produce a fragrant, sour-spicy powder that enhances flavor and aroma in dishes.",
    "specifications": {
      "Quality / Grade": "A",
      "Type": "Conventional",
      "Purity": "100% ginger",
      "Part of plant used": "Root",
      "Appearance": "Fine yellow powder",
      "Odor": "Strong characteristic and aromatic",
      "Taste": "Sour, spicy",
      "Moisture": "10% max",
      "Extraneous matter": "0% max",
      "Shelf-life": "2 years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-13",
    "name": "Sesame Seeds",
    "slug": "sesame-seeds",
    "category": "spices",
    "image": "/spices_products/sesame-seeds.png?height=300&width=400",
    "shortDescription": "High-quality brownish white sesame seeds",
    "description": "Our sesame seeds are of Grade A quality, brownish white in color, and rich in oil content. Ideal for culinary use, offering high purity and low moisture.",
    "specifications": {
      "Quality / Grade": "A",
      "Purity": "99% min",
      "Type": "Conventional",
      "Colour": "Brownish white",
      "Moisture": "6% max",
      "FFA": "5% max",
      "Oil content": "48% min",
      "Shelf-life": "2 years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-14",
    "name": "Garlic Cloves",
    "slug": "garlic",
    "category": "spices",
    "image": "/spices_products/garlic-cloves.png?height=300&width=400",
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
  },
  {
    "id": "coffee-1",
    "name": "Arabica Coffee",
    "slug": "arabica-coffee",
    "category": "coffee",
    "image": "/arabica-coffee.webp?height=300&width=400",
    "shortDescription": "Premium Arabica coffee beans for gourmet blends",
    "description": "Arabica coffee is renowned worldwide for its smooth, nuanced flavor and aromatic complexity. Grown primarily at higher altitudes in regions such as Latin America, East Africa, and parts of Asia, Arabica beans offer a delicate balance of sweetness, acidity, and body. Valued by specialty coffee roasters and connoisseurs alike, our Arabica coffee beans are carefully sourced and selected to ensure premium quality, consistency, and a superior cup experience.",
    "specifications": {

    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "coffee-2",
    "name": "Robusta Coffee",
    "slug": "robusta-coffee",
    "category": "coffee",
    "image": "/robusta-coffee.jpeg?height=300&width=400",
    "shortDescription": "Premium Robusta coffee beans for gourmet blends",
    "description": "Robusta coffee beans are known for their bold, robust flavor and higher caffeine content compared to Arabica. Typically grown at lower altitudes in regions like West Africa, Southeast Asia, and parts of Brazil, Robusta offers a strong, earthy taste with a characteristic bitterness and fuller body. Widely used in espresso blends and instant coffee production, our Robusta beans are carefully sourced to ensure consistent quality and performance for a range of commercial and specialty applications.",
    "specifications": {

    },
    "origin": "",
    "certifications": []
  }
];