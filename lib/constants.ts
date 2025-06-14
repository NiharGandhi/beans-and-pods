// lib/constants.ts
export const productCategories = [
  { slug: 'cocoa-beans', name: 'Cocoa', image: '/product_categories/cocoa.jpg', description: '' },
  { slug: 'vanilla', name: 'Vanilla', image: '/product_categories/vanilla.jpg', description: '' },
  { slug: 'coffee', name: 'Coffee', image: '/product_categories/coffee.jpg', description: '' },
  { slug: 'spices', name: 'Spices', image: '/product_categories/spices.jpg', description: '' },
  { slug: 'dry-beans', name: 'Grains and Pulses', image: '/product_categories/grains_and_pulses.jpg', description: '' },
  { slug: 'essential-oil', name: 'Essential Oil', image: '/product_categories/essential_oil.jpg', description: '' }
] as const;

export type ProductCategory = typeof productCategories[number];

export const products = [
  {
    "id": "cocoa-beans-1",
    "name": "Cocoa Beans",
    "slug": "cocoa-beans",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-beans.png?height=300&width=400",
    "shortDescription": "Naturally Grown, Hand- harvested, Fermented, Sun-dried, Premium Cacao Beans",
    "description": "Our cacao beans are cultivated using traditional, sustainable farming practices without the use of synthetic chemicals or pesticides. Grown in nutrient-rich soils, each bean is hand-harvested at peak ripeness to ensure optimal flavor and quality. \n After harvest, the beans undergo a meticulous fermentation process, typically lasting 5 to 7 days, which enhances their natural flavor profile by reducing bitterness and developing rich, complex notes. Following fermentation, the beans are sun-dried under controlled conditions to preserve their natural qualities and maintain low moisture content—critical for safe storage and transport. \n We take great pride in maintaining a 100% chemical-free environment throughout processing and packaging. Our facilities strictly avoid the use of additives, preservatives, or artificial enhancers, ensuring that our beans retain their natural integrity from farm to shipment.",
    "specifications": {
      "Type": "TRINITARIO, CRIOLLO, FORASTERO",
      "Fat content": "50% - 55%",
      "Moisture": "less than 7%",
      "Processing type": "sun dried",
      "Bean Count": "90 to 100 beans per 100g",
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "cocoa-beans-2",
    "name": "Cocoa Nibs",
    "slug": "cocoa-nibs",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-nibs.webp?height=300&width=400",
    "shortDescription": "Crunchy, natural cocoa nibs packed with bold chocolate flavor and rich antioxidants.",
    "description": "Our 100% Natural Cocoa Nibs are derived from high-grade cacao beans grown in the rich, fertile soils of Africa. These beans are cultivated using traditional and sustainable farming methods—completely free from chemicals, pesticides, or synthetic fertilizers—ensuring the highest level of purity and quality. \n From Bean to Nib - A Carefully Controlled Process \n The process begins with selectively hand-harvested cacao pods, which are then: \n •	Fermented naturally for 5-7 days to develop rich chocolate notes and reduce bitterness \n •	Sun-dried under hygienic and controlled conditions to preserve flavor and prevent mold \n •	Cracked and winnowed into nibs using gentle mechanical processing that retains the nutritional and aromatic integrity of the cacao",
    "specifications": {
      "Type": "TRINITARIO, CRIOLLO, FORASTERO",
      "Fat content": "50% - 55%",
      "Moisture": "less than 3%",
      "Shell content": "less than 5%"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "cocoa-beans-3",
    "name": "Cocoa Mass",
    "slug": "cocoa-mass",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-mass.png?height=300&width=400",
    "shortDescription": "Pure, unrefined cocoa mass offering rich, intense chocolate flavor for gourmet and industrial use.",
    "description": "Our Cocoa Mass, also known as Cocoa Liquor, is a rich, aromatic paste crafted from finely ground, roasted cocoa nibs. Sourced from the world’s most esteemed cocoa-growing regions, this pure, unsweetened product is the essence of chocolate in its most concentrated form. With its deep flavor profile, smooth texture, and high cocoa butter content, our cocoa mass is the preferred choice of master chocolatiers, luxury confectioners, and gourmet artisans seeking unmatched quality and depth in their creations.",
    "specifications": {
      "Fat content": "53% ± 2%",
      "Moisture": "max. 1.5%",
      "pH": "5.5 - 5.8",
      "Shell content": "max. 1.75%",
      "Fineness (≤ 100 microns)": "96% - 99%"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "cocoa-beans-4",
    "name": "Natural Cocoa Butter",
    "slug": "natural-cocoa-butter",
    "category": "cocoa-beans",
    "image": "/cocoa_products/cocoa-butter.jpg?height=300&width=400",
    "shortDescription": "Pure, natural cocoa butter delivering creamy texture and rich chocolate aroma for food and cosmetics.",
    "description": "Our Natural Cocoa Butter is a silky, golden fat extracted from premium-grade cocoa beans, prized for its delicate chocolate aroma and velvety texture. Unrefined and minimally processed, it retains all the richness of its origin—making it a coveted ingredient in luxury skincare, artisanal chocolate, and high-end wellness formulations. With its exceptional emollient properties and naturally smooth finish, our cocoa butter embodies purity, indulgence, and timeless elegance.",
    "specifications": {
      "Color": "pale yellowish, slight brown",
      "Free fatty acids (oleic acid)": "≤ 1.5%",
      "Types": "non natural / natural"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "cocoa-beans-5",
    "name": "Natural Cocoa Powder",
    "slug": "natural-cocoa-powder",
    "category": "cocoa-beans",
    "image": "/cocoa_products/natural-cocoa-powder.jpg?height=300&width=400",
    "shortDescription": "Pure, unsweetened natural cocoa powder with robust, authentic chocolate flavor.",
    "description": "Natural Cocoa Powder is produced by finely grinding roasted cocoa beans after the extraction of cocoa butter. It retains the rich, intense chocolate flavor and deep color characteristic of premium cocoa. Free from alkalizing agents, our natural cocoa powder offers a slightly acidic profile, making it ideal for traditional baking, confectionery, and beverage applications. Sourced from trusted origins, it meets rigorous quality standards to ensure consistency and superior taste in every batch.",
    "specifications": {
      "Color": "light brown",
      "pH": "5.2 - 6.5",
      "Flavor": "unsweetened cocoa flavor",
      "Fat content": "9-12% or 20-28%",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Moisture": "5% max"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
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
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "cocoa-beans-7",
    "name": "Alkalized Cocoa Powder (Black)",
    "slug": "alkalized-cocoa-powder-black",
    "category": "cocoa-beans",
    "image": "/cocoa_products/alkalized-cocoa-powder-black.png?height=300&width=400",
    "shortDescription": "Deep-colored alkalized cocoa powder delivering intense chocolate flavor with smooth, rich notes.",
    "description": "Alkalized Cocoa Powder, also known as Dutch-processed cocoa, is treated with an alkalizing agent to neutralize its natural acidity. This process enhances its color, giving it a darker, richer hue, and produces a smoother, milder flavor profile. Ideal for premium baking, confectionery, and beverage applications, our alkalized cocoa powder delivers consistent quality and excellent solubility, meeting the demands of sophisticated recipes and high-end food products.",
    "specifications": {
      "Color": "Dark Brown / Black",
      "pH": "7.5 - 8.5",
      "Fat content": "8 - 10%",
      "Moisture": "5% max",
      "Fineness (≤ 75 microns)": "min 99.0%",
      "Flavor": "Unsweetened Cocoa Flavor",
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-1",
    "name": "Black Bourbon Grade A: Gourmet",
    "slug": "black-bourbon-grade-a-gourmet",
    "category": "vanilla",
    "image": "/vanilla_products/black-bourbon-grade-a.webp?height=300&width=400",
    "shortDescription": "Plump, aromatic black bourbon vanilla beans delivering premium gourmet flavor and aroma.",
    "description": "Our Grade A Black Bourbon Vanilla Beans represent the finest quality vanilla available. Grown in the rich volcanic soils of Madagascar and Uganda, these Gourmet beans are hand-harvested and carefully cured to preserve their deep, creamy aroma and high vanillin content. \n With a supple texture, dark oily skin, and strong aromatic presence, Bourbon Grade A vanilla is the gold standard for culinary professionals and artisanal producers worldwide.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "32% to 35%",
      "Vanillin Content": "1.5% to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-2",
    "name": "TK Grade AA: Brown Beans",
    "slug": "tk-grade-aa-brown-beans",
    "category": "vanilla",
    "image": "/vanilla_products/tk-grade-aa.webp?height=300&width=400",
    "shortDescription": "Reliable brown vanilla beans offering balanced flavor for large-scale extract and food production.",
    "description": "Our TK Grade AA Brown Vanilla Beans are a reliable and affordable choice for extractors and food manufacturers seeking authentic vanilla flavor at scale. These beans are fully cured and matured, but have a lower moisture content and less visual appeal than Gourmet Grade beans, making them ideal for industrial applications. \n Characterized by their slightly drier texture and light brown to dark brown color, TK Grade beans still deliver a satisfying aroma and natural vanillin content, perfect for bulk processing and extraction.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "28% to 31%",
      "Vanillin Content": "1.5% to 2.2%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-3",
    "name": "Red Vanilla / Extraction Grade Type Europe",
    "slug": "red-vanilla-europe",
    "category": "vanilla",
    "image": "/vanilla_products/extraction-grade-type-europe.png?height=300&width=400",
    "shortDescription": "Reddish-brown vanilla beans optimized for consistent, high-grade European vanilla extract.",
    "description": "Our Red Vanilla Beans - European Extraction Grade are specially selected for industrial vanilla extraction where aroma and vanillin content are key. These beans are fully cured but dried to a lower moisture level, giving them a reddish-brown appearance. Preferred by European extract manufacturers, these beans are ideal for producing high-quality vanilla extract at scale. \n Despite their lower moisture and less pliable texture, they retain excellent flavor compounds and are a cost-effective raw material for the food and beverage industry.",
    "specifications": {
      "Size": "12cm and more",
      "Moisture": "24% to 28%",
      "Vanillin Content": "1.4% to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-4",
    "name": "Red Vanilla / Extraction Grade Type USA",
    "slug": "red-vanilla-usa",
    "category": "vanilla",
    "image": "/vanilla_products/extraction-type-grade-usa.png?height=300&width=400",
    "shortDescription": "Premium red vanilla beans specially processed for high-quality U.S. vanilla extract production.",
    "description": "Our Red Vanilla Beans - U.S. Extraction Grade are specifically prepared to meet the standards of American vanilla extract producers. These beans are fully cured and sun-dried to a lower moisture content, resulting in a reddish to dark brown appearance with a firm texture. While not suited for culinary display, they are rich in vanillin and ideal for large-scale extraction. \n This grade is widely used in the U.S. for producing single-fold and double-fold vanilla extracts, offering a cost-effective solution without compromising on flavor yield.",
    "specifications": {
      "Size": "14cm and more",
      "Moisture": "Less than 21%",
      "Vanillin Content": "1.4% to 2.1%",
      "Type": "Natural Fresh Beans",
      "Shelf-life": "2 Years"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-5",
    "name": "Exhausted Vanilla Seeds Grade A",
    "slug": "exhausted-vanilla-seeds-grade-a",
    "category": "vanilla",
    "image": "/vanilla_products/exhausted-vanilla-seeds.png?height=300&width=400",
    "shortDescription": "Clean, natural vanilla seeds perfect for adding authentic texture without the flavor.",
    "description": "Our Exhausted Vanilla Seeds Grade A are the fine residual seeds collected after vanilla beans have been extracted of their flavor compounds. Though no longer aromatic, these seeds retain their distinct visual appeal and are widely used for aesthetic and textural enhancement in various food and cosmetic products. \n Carefully cleaned and dried, our Grade A seeds offer uniformity, purity, and an authentic look of real vanilla—without the cost of active vanilla content.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Appearance": "Dry grain black color",
      "Moisture": "5% - 12%",
      "Grain Size": "less than 300 micron",
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-6",
    "name": "Ground Vanilla Powder",
    "slug": "ground-vanilla-powder",
    "category": "vanilla",
    "image": "/vanilla_products/ground-vanilla-powder.png?height=300&width=400",
    "shortDescription": "Purely ground vanilla beans delivering rich, authentic flavor in every sprinkle.",
    "description": "Our premium Natural Vanilla Powder is made from carefully selected whole vanilla beans that are fully cured and finely milled into a rich, aromatic powder. Free from additives or fillers, this all-natural ingredient delivers intense vanilla flavor and aroma in a convenient, easy-to-use form. \n Perfect for culinary professionals, food manufacturers, and beverage formulators, this powder is ideal where pure, visible vanilla presence is desired without the use of extracts or liquid flavoring.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Botanical Name": "Vanilla planifolia",
      "Vanillin Content": "1.2 to 1.5%",
      "Moisture": "9% to 10%",
      "Grain Size": "Less than 300 micron",
      "Appearance": "Pulp oil, fresh grains",
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-7",
    "name": "Vanilla Caviar",
    "slug": "vanilla-caviar",
    "category": "vanilla",
    "image": "/vanilla_products/vanilla-caviar.png?height=300&width=400",
    "shortDescription": "Intense vanilla flavor in every tiny seed—luxury and authenticity for gourmet dishes.",
    "description": "Our Vanilla Caviar consists of the pure, aromatic seeds scraped from the heart of premium vanilla beans. These tiny black specks are prized by chefs, bakers, and food artisans for their intense vanilla aroma, rich flavor, and luxurious visual appeal. \n Vanilla Caviar offers a 100% natural, concentrated vanilla experience—perfect for high-end culinary applications where both flavor and presentation matter.",
    "specifications": {
      "Quality": "100% Pure and Natural, Conventional",
      "Botanical Name": "Vanilla planifolia",
      "Vanillin Content": "2.5 to 3.0%",
      "Moisture": "34% to 36%",
      "Grain Size": "Less than 300 micron",
      "Appearance": "Pulp oil, fresh grains",
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-8",
    "name": "Non-Alcoholic Vanilla Extract",
    "slug": "non-alcoholic-vanilla-extract",
    "category": "vanilla",
    "image": "/vanilla_products/vanilla-oreseon.png?height=300&width=400",
    "shortDescription": "Pure vanilla flavor without alcohol—ideal for clean-label and halal-friendly recipes.",
    "description": "Our Non-Alcoholic Vanilla Extract offers the rich, full-bodied flavor of real vanilla without the use of alcohol. Made from high-quality vanilla beans through a gentle extraction process, this liquid extract captures the authentic aroma and taste of natural vanilla—perfect for applications where alcohol is restricted or undesirable.",
    "specifications": {
      "Type": "Non-Alcoholic Vanilla Extract",
      "Solvent Base": "Glycerin or Propylene Glycol (depending on requirement)",
      "Appearance": "Dark amber liquid",
      "Flavor Profile": "Smooth, sweet, creamy vanilla notes",
      "Vanilla Source": "Planifolia beans (Madagascar / Uganda)"
    },
    "origin": "Madagascar, Uganda, Ghana & Ivory Coast",
    "certifications": []
  },
  {
    "id": "vanilla-9",
    "name": "Non-Alcoholic Vanilla Paste",
    "slug": "non-alcoholic-vanilla-paste",
    "category": "vanilla",
    "image": "/vanilla_products/non-alcoholic-vanilla-paste.png?height=300&width=400",
    "shortDescription": "Rich, creamy vanilla flavor with visible seeds—perfect for effortless gourmet creations.",
    "description": "Our rich and creamy Vanilla Paste combines the full flavor of premium vanilla beans with a smooth, easy-to-use texture—perfect for chefs, bakers, and food manufacturers seeking the true essence of vanilla in a convenient form. \n Made from finely ground vanilla beans blended with natural vanilla extract and a touch of sweetener or stabilizer, this paste delivers intense aroma, visible vanilla seeds, and consistent flavor without the mess of whole beans or the dilution of liquid extracts.",
    "specifications": {
      "Ingredients": "Pure vanilla beans, vanilla extract, natural binder",
      "Appearance": "Thick, dark brown paste with visible vanilla seeds",
      "Aroma": "Sweet, creamy, and powerful vanilla scent",
      "Vanilla Content": "Equivalent to high-grade vanilla beans",
    },
    "certifications": []
  },
  {
    "id": "vanilla-10",
    "name": "Vanilla Sugar",
    "slug": "vanilla-sugar",
    "category": "vanilla",
    "image": "/vanilla_products/raw-brown-sugar.png?height=300&width=400",
    "shortDescription": "Naturally sweetened sugar infused with the rich aroma and flavor of real vanilla beans.",
    "description": "Our aromatic Vanilla Sugar blends fine, natural sugar with the rich essence of premium vanilla beans, offering a convenient way to add authentic vanilla flavor and sweetness to your recipes. Perfect for both home bakers and professional chefs, this versatile ingredient enhances baked goods, beverages, and desserts with subtle vanilla notes.",
    "specifications": {
      "Ingredients": "Pure cane sugar infused with real vanilla beans",
      "Appearance": "Fine granulated sugar with visible vanilla specks",
      "Aroma": "Sweet, warm, and naturally vanilla-scented",
    },
    "certifications": []
  },
  {
    "id": "vanilla-11",
    "name": "Vanilla Cuts",
    "slug": "vanilla-cuts",
    "category": "vanilla",
    "image": "/vanilla_products/vanilla-cuts.png?height=300&width=400",
    "shortDescription": "Flavorful segments of vanilla beans ideal for extracts and industrial use.",
    "description": "Our premium-grade Vanilla Cuts offer the same rich aroma and flavor as whole vanilla beans—at a more cost-effective price. These are naturally cured segments of vanilla beans that are split, broken, or shortened during the sorting process. Though not visually perfect, they retain the full essence of the vanilla pod, making them ideal for industrial extraction, food processing, and flavor development.",
    "specifications": {
      "Size": "Bulk vanilla and less than 11 cm",
      "Moisture": "13% - 15%",
      "Vanilin Content": "0.5% - 1.2%",
      "Type": "Natural fresh bean",
      "Shelf-life": "02 Years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "spices-1",
    "name": "Black Pepper",
    "slug": "black-pepper",
    "category": "spices",
    "image": "/spices_products/black-pepper.jpg?height=300&width=400",
    "shortDescription": "Premium quality black pepper with bold aroma and sharp, spicy flavor.",
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
    "shortDescription": "Delicate and fragrant pink peppercorns offering a sweet, fruity, and mildly spicy kick.",
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
    "shortDescription": "Aromatic wild pepper with intense, complex heat and earthy undertones.",
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
    "shortDescription": "Fragrant green cardamom pods bursting with sweet, spicy, and citrusy flavor.",
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
    "shortDescription": "Aromatic whole cloves with warm, intense flavor ideal for sweet and savory creations.",
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
    "shortDescription": "Vibrant turmeric powder packed with earthy flavor and natural anti-inflammatory properties.",
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
    "shortDescription": "Sweet and spicy cinnamon sticks with rich aroma, perfect for infusions and culinary use.",
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
    "shortDescription": "Finely ground cinnamon with a sweet, warm flavor ideal for baking, beverages, and spice blends.",
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
    "shortDescription": "Pungent and flavorful asafoetida powder that enhances savory dishes with a unique umami depth.",
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
    "shortDescription": "Aromatic dried ginger with bold, spicy-sweet flavor perfect for teas, cooking, and remedies.",
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
    "shortDescription": "Finely ground ginger with a warm, zesty kick—ideal for spice blends, baking, and wellness uses.",
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
    "id": "dry-beans-1",
    "name": "Red Kidney Bean",
    "slug": "red-kidney-bean",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/red-kidney-bean.jpg?height=300&width=400",
    "shortDescription": "Nutritious red kidney beans with a firm texture and hearty flavor—perfect for soups, stews, and salads.",
    "description": "Our premium Red Kidney Beans are known for their vibrant red color, firm texture, and robust flavor. These versatile beans are a staple in many cuisines, perfect for hearty soups, stews, chili, salads, and casseroles. \n Rich in protein, dietary fiber, and essential nutrients, red kidney beans support a healthy lifestyle while adding depth and heartiness to your favorite dishes. Their firm skin holds up well during cooking, delivering a satisfying bite every time.",
    "specifications": {
      "Product Identification": "Red Kidney Bean",
      "Caliber": "600-680 / 100gr",
      "Packing": "10Kgs, 25Kgs and 50kgs",
      "Foreign Matter": "0.2% max",
      "Contrasting Seed": "0.2% max",
      "Under Size Seed": "1.5% max",
      "Weevilled Seeds": "2% max",
      "Split Seed": "2% max",
      "Broken": "2.5% max",
      "Moisture Content": "14% Max",
      "Impurities": "6.2% Max",
      "Purity": "93.8%"
    },
    "origin": "Madagascar / Uganda / India",
    "certifications": []
  },
  {
    "id": "dry-beans-2",
    "name": "White Kidney Bean",
    "slug": "white-kidney-bean",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/white-kidney-bean.jpg?height=300&width=400",
    "shortDescription": "Creamy and mild white kidney beans, ideal for soups, casseroles, and protein-rich meals.",
    "description": "Our premium White Kidney Beans are carefully sourced and selected for their creamy texture and mild, delicate flavor. Also known as cannellini beans, these beans are a versatile staple in kitchens worldwide, perfect for soups, stews, casseroles, and salads. \n Rich in protein, fiber, and essential nutrients, white kidney beans support a healthy diet while adding hearty texture and subtle taste to your favorite dishes. Their smooth skin and firm flesh hold up well during cooking, making them ideal for both home cooks and food manufacturers.",
    "specifications": {
      "Caliber": "WKB 260/290",
      "Caliber ": "WKB 250/270",
      " Caliber ": "WKB 320/340",
      "  Caliber ": "WKB 200/220 - 220/240",
    },
    "origin": "Madagascar / Uganda / India",
    "certifications": []
  },
  {
    "id": "dry-beans-3",
    "name": "Yellow Arhar Lentil",
    "slug": "yellow-arhar-lentil",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/yellow-arhar-lentil.jpg?height=300&width=400",
    "shortDescription": "Split yellow arhar lentils packed with protein and a mild, nutty flavor—perfect for dals and curries.",
    "description": "Our high-quality Yellow Arhar Lentils, also known as Toor Dal, are a staple ingredient in many traditional cuisines, prized for their rich nutritional profile and mild, nutty flavor. These split lentils cook quickly to a soft, creamy texture, making them perfect for dals, soups, stews, and curries. \n Packed with protein, fiber, and essential minerals, Yellow Arhar Lentils support a balanced and wholesome diet. Their vibrant golden color adds visual appeal to your dishes while delivering a comforting, satisfying taste.",
    "specifications": {
      "Varieties": "Toor Split",
      "Foreign matter": "2%",
      "Damaged / slightly damaged": "3%",
      "Immature and shrivelled": "3%",
      "Weevilled pulses": "3%",
      "Admixture": "2%",
      "Moisture": "12%"
    },
    "origin": "Malawi, Tanzania, India",
    "certifications": []
  },
  {
    "id": "dry-beans-4",
    "name": "Red Cow Peas",
    "slug": "red-cow-peas",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/red-cow-peas.jpg?height=300&width=400",
    "shortDescription": "Nutty-flavored red cow peas rich in protein and fiber—great for stews, curries, and salads.",
    "description": "Our high-quality Red Cow Peas are valued for their rich, nutty flavor and firm texture, making them a popular choice in a variety of traditional dishes. Packed with protein, fiber, and essential nutrients, these peas are an excellent addition to stews, curries, salads, and rice dishes. \n Known for their deep reddish-brown color and hearty taste, red cow peas provide a wholesome and satisfying ingredient that supports a balanced diet.",
    "specifications": {
      "Colour": "Brown/Red",
      "Quality": "Machine cleaned HPS quality",
      "Type": "Red Beans",
      "Caliber options": "430/100gms, 450/100gms, 480/100gms",
      "Packaging": "25kg/50kg",
      "Cultivation Type": "Common",
      "Shelf Life": "2 years"
    },
    "origin": "Madagascar",
    "certifications": []
  },
  {
    "id": "dry-beans-5",
    "name": "Speckled Kidney Beans",
    "slug": "speckled-kidney-beans",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/speckled-kidney-beans.png?height=300&width=400",
    "shortDescription": "Colorful speckled kidney beans with a creamy texture and rich, earthy flavor—ideal for hearty dishes.",
    "description": "Our premium Speckled Kidney Beans are known for their unique, attractive speckled appearance and creamy texture. These beans offer a rich, earthy flavor and are a versatile ingredient for a variety of dishes including soups, stews, salads, and casseroles. \n Rich in protein, fiber, and essential nutrients, speckled kidney beans support a nutritious diet while adding visual appeal and hearty taste to your meals.",
    "specifications": {
      "Type": "Conventional",
      "Moisture": "14% max",
      "Admixture": "0.5% max",
      "Imperfect": "2% max",
      "Pure": "100%",
      "Quality": "HPS Quality"
    },
    "origin": "Madagascar/Uganda/India",
    "certifications": []
  },
  {
    "id": "dry-beans-6",
    "name": "Lima Beans",
    "slug": "lima-beans",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/lima-bean.png?height=300&width=400",
    "shortDescription": "Tender and buttery lima beans packed with nutrients—perfect for soups, stews, and side dishes.",
    "description": "Our premium Lima Beans are prized for their tender, buttery texture and mild, creamy flavor. Known also as butter beans, these versatile legumes are perfect for soups, stews, casseroles, and side dishes. \n Rich in protein, fiber, and essential nutrients, lima beans offer a nutritious and satisfying addition to a balanced diet. Their smooth skin and delicate taste make them a favorite choice for both traditional and contemporary recipes.",
    "specifications": {
      "Type": "Conventional",
      "Purity": "99.95%",
      "Foreign seeds": "0.05% max",
      "Moisture": "11.0% max"
    },
    "origin": "Madagascar/Uganda/India",
    "certifications": []
  },
  {
    "id": "dry-beans-7",
    "name": "Chick Peas (Black Chana)",
    "slug": "black-chana",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/chickpeas.jpeg?height=300&width=400",
    "shortDescription": "Hearty black chana loaded with protein and fiber—perfect for traditional dishes and healthy meals.",
    "description": "Our premium Black Chana (Black Chickpeas) are a nutritious and versatile legume known for their robust flavor and firm texture. Widely used in traditional dishes across many cultures, black chana is rich in protein, fiber, and essential minerals, making it a perfect choice for healthy meals. \n These small, dark chickpeas hold their shape well during cooking, ideal for curries, salads, snacks, and stews, providing hearty texture and deep, earthy taste.",
    "specifications": {
      "Moisture": "12% max",
      "Foreign matter": "0.1% max",
      "Sizes": "42-44 count per oz (12mm), 44-46 count per oz (10mm), 58-60 count per oz (9mm), 75-80 count per oz (7-8mm)"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "dry-beans-8",
    "name": "Red Lentil",
    "slug": "red-lentil",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/red-lentil.jpg?height=300&width=400",
    "shortDescription": "Quick-cooking red lentils with a mild, slightly sweet flavor—ideal for soups, dals, and purees.",
    "description": "Our premium Red Lentils are prized for their quick cooking time, vibrant orange-red color, and mild, slightly sweet flavor. These versatile lentils easily break down to create creamy textures, making them ideal for soups, dals, purees, and stews. \n Rich in protein, fiber, and essential nutrients, red lentils support a healthy and balanced diet, providing nourishing meals with convenience and taste.",
    "specifications": {
      "Moisture": "16% max",
      "Impurity": "0.5% max",
      "Imperfect": "3% max",
      "Size": "3mm - 5mm",
      "Purity": "99.5% (by weight)",
      "Quality": "Insects and pesticides free, Excellent source of nutrients, High nutritional value, High protein content"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "dry-beans-9",
    "name": "Sesame Seeds",
    "slug": "sesame-seeds",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/sesame-seeds.png?height=300&width=400",
    "shortDescription": "Nutty and crunchy sesame seeds packed with flavor—perfect for baking, cooking, and garnishing.",
    "description": "Our premium Sesame Seeds are small, nutty-flavored seeds prized worldwide for their versatility and nutritional benefits. These crunchy seeds are perfect for baking, cooking, garnishing, and oil extraction, adding delightful texture and flavor to a wide range of dishes. \n Rich in healthy fats, protein, and essential minerals, sesame seeds support a balanced diet while enhancing the taste and appearance of your meals.",
    "specifications": {
      "Purity": "98-99%",
      "Oil content": "42-46% or 46-48% or 48%min",
      "FFA": "1% max",
      "Admixture": "0.5% - 1%",
      "Other colour mixed": "0.5% - 1%",
      "Moisture": "7.5% - 8% max",
      "Quality": "Clean, dry and no mold",
      "Style": "dried",
      "Aflatoxin": "10ppb max"
    },
    "origin": "Uganda / Tanzania / India",
    "certifications": []
  },
  {
    "id": "dry-beans-10",
    "name": "Pigeon Peas",
    "slug": "pigeon-peas",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/pigeon-peas.jpg?height=300&width=400",
    "shortDescription": "Protein-rich pigeon peas with a mild, nutty flavor—ideal for traditional dals, stews, and curries.",
    "description": "Our premium Pigeon Peas are a nutritious legume known for their mild, nutty flavor and firm texture. Widely used in traditional dishes across many cultures, pigeon peas are rich in protein, fiber, and essential nutrients, making them an excellent choice for healthy meals. \n These versatile peas hold their shape well during cooking, perfect for dals, stews, curries, and salads, adding hearty texture and wholesome taste to your dishes.",
    "specifications": {
      "Moisture": "14% max",
      "Foreign matter": "2% max",
      "Damaged otherwise": "4% max",
      "Seriously damaged": "2% max",
      "Slightly damaged": "0.5% max",
      "Foreign beans": "0.5% max",
      "Brokens": "2% max"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "dry-beans-11",
    "name": "Green Mung Bean",
    "slug": "green-mung-bean",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/green-mung-bean.jpg?height=300&width=400",
    "shortDescription": "Nutritious green mung beans with a mild, slightly sweet taste—perfect for soups, salads, and sprouts.",
    "description": "Our premium Green Mung Beans are small, vibrant legumes known for their mild, slightly sweet flavor and versatility in cooking. Rich in protein, fiber, and essential nutrients, these beans are a popular choice for soups, salads, stir-fries, and sprouting. \n Green mung beans cook quickly and hold their shape well, making them ideal for both traditional and modern recipes. Their nutritional benefits support a balanced diet and promote overall wellness.",
    "specifications": {
      "Type": "Conventional",
      "Appearance": "clean and bright, natural odor",
      "Moisture content": "10%",
      "Purity": "99%",
      "Size": "4.5mm - 5mm",
      "Defective": "0.5%",
      "Insect damaged": "0.1%",
      "Immature": "0.5% (by weight)",
      "Foreign material": "0.1%",
      "Unmillable material": "0.25%",
      "Other edible grains": "0.5%",
      "Live insects": "nil",
      "Immature (discoloured)": "1%"
    },
    "origin": "Madagascar / Uganda",
    "certifications": []
  },
  {
    "id": "dry-beans-12",
    "name": "Black Eyed Bean",
    "slug": "black-eyed-bean",
    "category": "dry-beans",
    "image": "/grains_and_pulses_products/black-eyed-bean.png?height=300&width=400",
    "shortDescription": "Classic black eyed beans with a creamy texture and earthy flavor—great for salads, stews, and sides.",
    "description": "Our premium Black Eyed Beans, also known as cowpeas, are prized for their creamy texture and distinctive earthy flavor. These versatile beans are a staple in many traditional dishes and offer excellent nutritional value, including protein, fiber, and essential minerals. \n With their characteristic black eye marking on a pale skin, black eyed beans hold their shape well during cooking, making them ideal for salads, stews, soups, and side dishes.",
    "specifications": {
      "Type": "Conventional",
      "Foreign Matter": "1% max",
      "Sister Bean": "2% max",
      "Damage Bean": "3% max"
    },
    "origin": "Madagascar / Uganda / India",
    "certifications": []
  },
  {
    "id": "essential-oil-1",
    "name": "Ylang Ylang (Cananga Flower) Oil",
    "slug": "ylang-ylang-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/ylang-ylang.jpg?height=300&width=400",
    "shortDescription": "A sweet, floral essential oil known for its calming aroma and skin-nourishing properties.",
    "description": "Our Ylang Ylang Oil, extracted from the fragrant Cananga flower, is a luxurious essential oil prized for its sweet, floral aroma and calming properties. Widely used in aromatherapy, perfumery, and skincare, this oil promotes relaxation, balances emotions, and nourishes the skin and hair. \n Steam-distilled to preserve its purity and therapeutic qualities, Ylang Ylang oil adds a touch of elegance and wellness to any routine.",
    "specifications": {
      "Botanical Name": "Cananga odorata",
      "Extraction Method": "Steam distillation",
      "Aroma": "Sweet, floral, and exotic",
      "Uses": "Aromatherapy, perfumery, massage oils, skincare, and haircare",
      "Benefits": "Promotes relaxation, reduces stress, enhances mood, and supports healthy skin and hair"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "essential-oil-2",
    "name": "Lemongrass Oil",
    "slug": "lemongrass-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/lemongrass-oil.png?height=300&width=400",
    "shortDescription": "A fresh, citrusy essential oil valued for its invigorating scent, antimicrobial properties, and use in aromatherapy and skincare.",
    "description": "Our Lemongrass Oil is a vibrant, citrus-scented essential oil extracted from fresh lemongrass leaves through steam distillation. Known for its refreshing aroma and powerful antibacterial and antifungal properties, this oil is widely used in aromatherapy, natural cleaning products, skincare, and massage treatments. \n Its invigorating fragrance uplifts mood, repels insects, and helps relieve muscle tension, making it a versatile addition to both wellness and household care routines.",
    "specifications": {
      "Botanical Name": "Cymbopogon citratus",
      "Extraction Method": "Steam distillation",
      "Aroma": "Fresh, lemony, and grassy",
      "Uses": "Aromatherapy, skincare, massage oils, natural cleaners, and insect repellents",
      "Benefits": "Uplifts mood, soothes sore muscles, purifies skin, and promotes relaxation"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "essential-oil-3",
    "name": "Clove Leaf Oil",
    "slug": "clove-leaf-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/clove-oil.jpg?height=300&width=400",
    "shortDescription": "A warm, spicy essential oil known for its antiseptic properties and soothing benefits in aromatherapy and personal care.",
    "description": "Our Clove Leaf Oil is a powerful essential oil steam-distilled from the leaves of the clove tree, offering a warm, spicy aroma and a wide range of natural therapeutic benefits. Rich in eugenol, this oil is renowned for its antiseptic, analgesic, and antimicrobial properties. \n Commonly used in dental care, aromatherapy, massage blends, and natural cleaning solutions, clove leaf oil is valued for its warming effect and ability to promote comfort and wellbeing.",
    "specifications": {
      "Botanical Name": "Syzygium aromaticum",
      "Extraction Method": "Steam distillation",
      "Aroma": "Warm, spicy, and woody",
      "Uses": "Dental care, aromatherapy, massage oils, and natural disinfectants",
      "Benefits": "Supports oral health, soothes aches, boosts circulation, and purifies spaces"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "essential-oil-4",
    "name": "Cinnamon Oil",
    "slug": "cinnamon-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/cinnamon-oil.png?height=300&width=400",
    "shortDescription": "A rich, spicy essential oil cherished for its warming aroma, antimicrobial benefits, and use in wellness, skincare, and aromatherapy.",
    "description": "Our Cinnamon Oil, steam-distilled from the bark or leaves of the cinnamon tree, is a warm, spicy essential oil prized for its comforting aroma and powerful antimicrobial properties. With its bold scent and natural healing compounds, cinnamon oil is widely used in aromatherapy, personal care products, massage oils, and natural cleaning solutions. \n It stimulates circulation, helps fight infections, and adds a cozy, uplifting fragrance to any space or formulation.",
    "specifications": {
      "Botanical Name": "Cinnamomum zeylanicum / Cinnamomum cassia",
      "Extraction Method": "Steam distillation (bark or leaf)",
      "Aroma": "Warm, spicy, and sweet",
      "Uses": "Aromatherapy, skincare, massage blends, home fragrance, and cleaning products",
      "Benefits": "Antimicrobial, anti-inflammatory, improves circulation, and uplifts mood"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "essential-oil-5",
    "name": "Rosemary Oil",
    "slug": "rosemary-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/rosemary-oil.jpg?height=300&width=400",
    "shortDescription": "An invigorating herbal essential oil known for boosting focus, stimulating hair growth, and supporting skin and scalp health.",
    "description": "Our Rosemary Oil is a refreshing and herbaceous essential oil steam-distilled from the leaves of the rosemary plant. Known for its invigorating aroma and therapeutic properties, rosemary oil is widely used to boost mental clarity, promote hair growth, and support skin health. \n With natural antioxidant and anti-inflammatory benefits, this oil is a favorite in aromatherapy, haircare, massage blends, and skincare formulations.",
    "specifications": {
      "Botanical Name": "Rosmarinus officinalis",
      "Extraction Method": "Steam distillation",
      "Aroma": "Fresh, herbaceous, and slightly woody",
      "Uses": "Aromatherapy, haircare, skincare, massage oils, and natural remedies",
      "Benefits": "Enhances focus, stimulates hair growth, soothes skin, and reduces inflammation"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "essential-oil-6",
    "name": "Lavender Oil",
    "slug": "lavender-oil",
    "category": "essential-oil",
    "image": "/essentail_oil_products/lavender-oil.jpg?height=300&width=400",
    "shortDescription": "A soothing floral essential oil renowned for its calming scent, stress-relief benefits, and skin-soothing properties.",
    "description": "Our Lavender Oil is a soothing essential oil extracted from the flowers of the lavender plant through steam distillation. Renowned for its calming floral aroma and versatile therapeutic properties, lavender oil is widely used in aromatherapy, skincare, massage, and personal care products. \n Its gentle yet powerful effects help reduce stress, promote restful sleep, soothe irritated skin, and support overall relaxation and wellness.",
    "specifications": {
      "Botanical Name": "Lavandula angustifolia",
      "Extraction Method": "Steam distillation",
      "Aroma": "Fresh, floral, and sweet",
      "Uses": "Aromatherapy, skincare, massage oils, bath products, and sleep aids",
      "Benefits": "Calms the mind, relieves anxiety, promotes skin healing, and improves sleep quality"
    },
    "origin": "",
    "certifications": []
  },
  {
    "id": "coffee-1",
    "name": "Arabica Coffee",
    "slug": "arabica-coffee",
    "category": "coffee",
    "image": "/coffee_products/arabica-coffee.webp?height=300&width=400",
    "shortDescription": "Smooth, aromatic beans with delicate fruity and floral notes, ideal for premium coffee experiences.",
    "description": "Our premium Arabica Coffee beans are renowned worldwide for their smooth, rich flavor and aromatic profile. Grown at high altitudes under ideal conditions, Arabica beans offer a delicate balance of acidity and sweetness with subtle hints of fruit, floral, and nutty notes. \n Ideal for brewing high-quality coffee, our Arabica beans provide a refined and satisfying experience for coffee lovers, whether enjoyed as espresso, drip, or cold brew.",
    "specifications": {
      "Type": "100% Arabica Coffee Beans",
      "Appearance": "Medium-sized, oval-shaped beans with a smooth surface",
      "Flavor": "Smooth, rich, mildly acidic with floral and fruity undertones",
      "Uses": "Perfect for espresso, drip coffee, cold brew, and specialty drinks",
      "Nutritional Benefits": "Naturally low in fat and calories"
    },
    "origin": "Uganda / Madagascar / India / Ethopia / Kenya",
    "certifications": []
  },
  {
    "id": "coffee-2",
    "name": "Robusta Coffee",
    "slug": "robusta-coffee",
    "category": "coffee",
    "image": "/coffee_products/robusta-coffee.jpeg?height=300&width=400",
    "shortDescription": "Bold and full-bodied beans with high caffeine content, perfect for strong brews and espresso blends.",
    "description": "Our premium Robusta Coffee beans are prized for their strong, bold flavor and high caffeine content. Known for a more intense and earthy taste compared to Arabica, Robusta beans deliver a robust body with subtle chocolate and nutty notes, making them ideal for espresso blends and instant coffee production. \n Grown primarily at lower altitudes, Robusta coffee offers a full-bodied and rich coffee experience, favored for its deep aroma and lasting crema.",
    "specifications": {
      "Type": "100% Robusta Coffee Beans",
      "Appearance": "Small, round beans with a slightly rough surface",
      "Flavor": "Strong, bold, earthy with hints of chocolate and nuts",
      "Uses": "Perfect for espresso blends, instant coffee, and strong brews",
      "Caffeine Content": "Higher than Arabica, offering a stronger kick"
    },
    "origin": "Sourced from established Robusta-growing regions",
    "certifications": []
  }
];