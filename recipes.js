const recipes = [
  {
    id: "chicken-mandi",
    title: "Chicken Mandi",
    description:
      "Chicken Mandi is a traditional Yemeni rice dish made with fragrant basmati rice, slow-cooked spiced chicken, and a smoky, flavorful seasoning blend. This iconic Arab dish has become a regional favorite, especially in Kerala and the Gulf countries. Served with a side of spiced tomato chutney and sometimes mandi soup, it’s both festive and deeply satisfying.",
    image: "resources/mandi.jpeg",
    source: "https://www.indianhealthyrecipes.com/chicken-mandi/",
    prepTime: {
      total: "1 hour 15 minutes"
    },
    servings: 3,
    ingredients: [
      "3 chicken leg quarters",
      "1 ½ cups basmati rice",
      "1 large onion, sliced",
      "1 tomato, chopped",
      "4 cloves garlic",
      "1-inch ginger",
      "1 tsp black pepper",
      "1 tsp cumin",
      "1 tsp coriander",
      "1/2 tsp turmeric",
      "1/2 tsp cinnamon",
      "1 tsp garam masala or mandi masala",
      "3 tbsp oil or ghee",
      "Salt to taste",
      "Water or chicken stock (as needed)",
      "Fresh coriander & lemon wedges (for garnish)"
    ],
    instructions: [
      "Wash and soak basmati rice for 20 minutes.",
      "In a large pan, sauté onions, garlic, and ginger in oil/ghee until golden.",
      "Add tomatoes and all the spices. Cook until the oil separates.",
      "Add chicken pieces, coat well with the masala, and sear on both sides.",
      "Add water or chicken stock and cover to simmer for 20–25 minutes until chicken is tender.",
      "Remove chicken and place on a baking tray. Broil or roast at high heat for a crispy top.",
      "Add soaked rice to the broth in the pan, adjust seasoning, and cook rice until fluffy.",
      "Serve rice on a plate topped with roasted chicken. Garnish with fresh coriander and lemon wedges."
    ],
    nutrition: {
      calories: "720kcal",
      carbohydrates: "60g",
      protein: "38g",
      fat: "32g",
      saturatedFat: "10g",
      energy: "3014KJ",
      fiber: "4g",
      sugar: "3g",
      cholesterol: "120mg",
      sodium: "1100mg"
    }
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    description:
      "A royal dish made with marinated chicken, basmati rice, and aromatic spices. Layered and slow-cooked for flavor-packed perfection.",
    image: "resources/biryani.jpeg",
    source: "https://www.indianhealthyrecipes.com/chicken-biryani/",
    prepTime: {
      total: "1 hour 30 minutes"
    },
    servings: 4,
    ingredients: [
      "2 cups basmati rice",
      "500g chicken, bone-in",
      "2 large onions, sliced",
      "1 cup yogurt",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "1 tsp garam masala",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "Whole spices (bay leaf, cloves, cinnamon, cardamom)",
      "Fresh mint and coriander leaves",
      "4 tbsp oil or ghee",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice for 30 minutes. Fry onions till golden and crisp.",
      "Marinate chicken with yogurt, spices, and half of the fried onions for 30 minutes.",
      "In a pot, layer parboiled rice and marinated chicken alternately.",
      "Add mint, coriander, remaining fried onions. Drizzle ghee.",
      "Cover tightly and cook on low flame (dum) for 25–30 minutes.",
      "Serve hot with raita or salad."
    ],
    nutrition: {
      calories: "820kcal",
      carbohydrates: "75g",
      protein: "42g",
      fat: "38g",
      saturatedFat: "14g",
      energy: "3430KJ",
      fiber: "5g",
      sugar: "4g",
      cholesterol: "140mg",
      sodium: "950mg"
    }
  },
  {
    id: "mutton-curry",
    title: "Kerala Mutton Curry",
    description:
      "A spicy and flavorful mutton curry from Kerala made with roasted coconut, black pepper, and traditional spices.",
    image: "resources/mutton-curry.jpeg",
    source: "https://www.kothiyavunu.com/kerala-mutton-curry/",
    prepTime: {
      total: "1 hour 10 minutes"
    },
    servings: 4,
    ingredients: [
      "500g mutton (bone-in)",
      "1 onion, finely sliced",
      "1 tomato, chopped",
      "1 tbsp ginger-garlic paste",
      "1/2 cup grated coconut, roasted",
      "1 tsp black pepper",
      "1 tsp coriander powder",
      "1/2 tsp turmeric powder",
      "1 tsp garam masala",
      "Curry leaves",
      "3 tbsp coconut oil",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil and sauté onions, ginger-garlic paste, and curry leaves.",
      "Add tomatoes, spices, and cook till oil separates.",
      "Add mutton pieces and cook until browned.",
      "Add water and pressure cook until tender.",
      "Grind roasted coconut to a paste and mix into curry.",
      "Simmer for 10 minutes and serve hot with rice or porotta."
    ],
    nutrition: {
      calories: "760kcal",
      carbohydrates: "18g",
      protein: "39g",
      fat: "58g",
      saturatedFat: "20g",
      energy: "3180KJ",
      fiber: "3g",
      sugar: "2g",
      cholesterol: "130mg",
      sodium: "870mg"
    }
  },
  {
    id: "beef-curry-porotta",
    title: "Beef Curry with Kerala Porotta",
    description:
      "Classic Kerala-style beef curry served with flaky, layered porotta. A hearty and spicy combo loved across the region.",
    image: "resources/beef-porotta.jpeg",
    source: "https://www.kothiyavunu.com/kerala-beef-curry/",
    prepTime: {
      total: "1 hour"
    },
    servings: 4,
    ingredients: [
      "500g beef cubes",
      "1 onion, finely chopped",
      "1 tomato, chopped",
      "1 tbsp ginger-garlic paste",
      "1/2 tsp turmeric powder",
      "1 tsp chili powder",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "Curry leaves",
      "3 tbsp coconut oil",
      "Salt to taste",
      "Readymade Kerala porottas (store-bought or homemade)"
    ],
    instructions: [
      "Heat coconut oil and sauté onions, ginger-garlic paste, and curry leaves.",
      "Add tomatoes and all the spices. Cook till oil separates.",
      "Add beef cubes and cook till browned.",
      "Add water and pressure cook till beef is tender.",
      "Simmer till thick gravy forms. Adjust salt and spice.",
      "Serve hot with flaky porottas."
    ],
    nutrition: {
      calories: "790kcal",
      carbohydrates: "35g",
      protein: "36g",
      fat: "54g",
      saturatedFat: "18g",
      energy: "3310KJ",
      fiber: "2g",
      sugar: "3g",
      cholesterol: "125mg",
      sodium: "940mg"
    }
  }
];


