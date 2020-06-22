const db = require('../db/connection');
const Recipe = require('../models/recipes')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes =

    [
      {
        "name": "Spicy Charred Tomato Toast",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2017/12/toast-1-of-2-1080x675.jpg",
        "videoURL": "https://www.youtube.com/embed/vnx2meloRhE",
        "ingredients": [
          "2 tablespoons olive oil",
          "2 cloves garlic peeled and minced",
          "1 shallot peeled and minced",
          "4 Campari tomatoes halved",
          "2 large eggs",
          "2 thick slices of potato pullman bread or bread of your choice",
          "2 tablespoons butter",
          "Salt",
          "pepper",
          "crushed red pepper to taste"
        ],
        "equipment": [
          "Baking sheet",
          "Skillet"
        ],
        "instructions": [
          "Preheat oven to 350ºF. Butter the bread and season with a bit of salt and pepper. Arrange the buttered toast on a baking sheet and transfer to the oven. Bake for 10 minutes, flipping once halfway through cooking.",
          "Heat 1 tablespoon of olive oil in a skillet over medium heat. Add the garlic and shallot and and cook, stirring frequently, until fragrant and just beginning to turn golden brown, about 45 seconds to 1 minute. Be careful not to burn the garlic. Using a slotted spoon, transfer the garlic and shallot to a medium bowl.",
          "Add another tablespoon of olive oil to the skillet and turn the heat to medium high. Once hot and almost smoking, add the tomatoes, cut side down, and cook for 4-5 minutes without moving until charred.",
          "Transfer the tomatoes to the bowl with the garlic and shallot. Toss to combine and season with salt, pepper, and crushed red pepper. Wipe out the skillet.",
          "Heat a teaspoon of olive oil over medium low heat in the skillet. Gently crack the eggs into the skillet and season with salt and pepper. Cook until the eggs reach your desired consistency, spooning oil over the whites to ensure even cooking. Turn the heat off.",
          "Place a piece of toast on each plate. Spoon 4 tomato halves on top of each toast, using your fork to gently mash the tomato halves open just a bit. Spoon any remaining tomato juice over the toast. Serve an egg on top of each toast and sprinkle with a bit more crushed red pepper if desired. Enjoy!"
        ],
        "cuisine": "American",
        "cooktime": "20",
        "difficulty": "Easy",
        "diet": [
          "Vegetarian"
        ],
        "cookingMethod": [
          "Toast",
          "Fry"
        ],
        "course": "Breakfast",
        "serving": "2",
        "keyword": [
          "vegetarian",
          "eggs",
          "toast",
          "tomatoes"
        ],
        "saved": false
      },
      {
        "name": "Sheet Pan Citrus Chicken",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/04/Sheet-Pan-Citrus-Chicken_Hero-1080x675.png",
        "videoURL": "https://www.youtube.com/embed/ZN4X99KB49w",
        "ingredients": [
          "8 bone-in, skin-on chicken thighs or drumsticks or a mix",
          "4 clementines trimmed and sliced into rounds",
          "2 cara cara orange trimmed and sliced into rounds",
          "2 lemons trimmed and sliced into rounds",
          "1 pound Yukon gold potatoes quartered",
          "1 red onion peeled and sliced into wedges",
          "Salt and pepper to taste",
          "Mustard Sauce",
          "Fennel pollen optional",
          "Flaky sea salt for serving"
        ],
        "equipment": [
          "Sheet pan",
          "Bowl"
        ],
        "instructions": [
          "In a bowl, combine all the ingredients for the sauce and whisk to combine. If it seems too thick, add a bit of water or white wine to thin it out. Taste and season with salt, pepper, and crushed red pepper.",
          "Preheat oven to 425ºF.Pat the chicken dry and season all over with salt and pepper.",
          "Arrange the chicken on the sheet pan and arrange the red onions and potatoes around it. Season red onions and potatoes with salt and pepper. Sprinkle fennel pollen (if using) all over the chicken, onions, and potatoes.",
          "Pour the sauce over everything on the sheet pan. Arrange the sliced citrus fruits on top.",
          "Transfer to the oven and bake for about 40 minutes until and instant-read thermometer reaches 165ºF.",
          "After the chicken has baked, turn the broiler on and broil for 2-5 minutes or until the citrus chars and the chicken skin crisps up.",
          "Divide the cooked vegetables between plates and place a chicken thigh on top. Arrange a few pieces of charred citrus on top and sprinkle with flaky sea salt and a bit more fennel pollen, if using. Spoon a few tablespoons of sauce from the sheet pan over each dish. Enjoy!"
        ],
        "cuisine": "American",
        "cooktime": "45",
        "difficulty": "Medium",
        "diet": [],
        "cookingMethod": [
          "Bake"
        ],
        "course": "Dinner",
        "serving": "4",
        "keyword": [
          "chicken",
          "citrus",
          "one-pot",
          "sheet pan"
        ],
        "saved": false
      },

      {
        "name": "Creamy Kale and Mushroom Soup",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/04/Creamy-Kale-and-Mushroom-Soup_Hero-1080x675.jpg",
        "videoURL": "https://www.youtube.com/embed/rAzGht7jaB8",
        "ingredients": [
          "2 teaspoons neutral cooking oil",
          "1 yellow onion peeled and diced",
          "1 and half pounds mixed mushrooms such as cremini, shiitake, oyster, or maitake sliced",
          "5 cloves garlic peeled and minced",
          "3 tablespoons butter",
          "4 tablespoons flour",
          "3 cups whole milk or stock",
          "5 cups vegetable stock low-sodium",
          "1 teaspoon dry thyme",
          "1 teaspoon crushed red pepper more or less to taste",
          "1/2 teaspoon crushed rosemary",
          "3 Russet potatoes peeled and diced",
          "8 ounces curly kale chopped"
        ],
        "equipment": [
          "Soup pot"
        ],
        "instructions": [
          "Heat the neutral oil in a large soup pot over medium heat until very hot. Add the diced onion and cook for 4-5 minutes.",
          "Add the mushrooms and cook, stirring occasionally, for 10 minutes until very well-browned. Season with salt and pepper.",
          "Add the garlic and butter and cook for 45 seconds until the garlic is fragrant and the butter is melted and frothy.",
          "Sprinkle the flour over the vegetables and toss to coat. Cook, stirring regularly, for 1-3 minutes.",
          "If using milk, warm it in the microwave in 45-second increments until completely warm. Add the milk to the flour, in 1/2 cup increments, whisking after each addition until all the milk has been added. Taste and season with salt and pepper.",
          "Pour the stock into the soup and season with thyme, crushed red pepper, and rosemary. Bring to a very low boil and add the potatoes. Reduce heat and simmer for 20 minutes or until the potatoes are almost fork-tender. Taste and season again to your preferences.",
          "Add the kale to the soup and stir to incorporate. Cook for 10 minutes until tender. Turn off the heat.",
          "Ladle the soup into bowls and garnish with a drizzle of extra virgin olive oil, if desired. Enjoy!"
        ],
        "cuisine": "American",
        "cooktime": "50",
        "difficulty": "Medium",
        "diet": [
          "Vegetarian"
        ],
        "cookingMethod": [
          "Broil",
          "Saute"
        ],
        "course": "Dinner",
        "serving": "6",
        "keyword": [
          "comfort food",
          "kale",
          "mushrooms",
          "one-pot",
          "potatoes",
          "soup",
          "vegetarian"
        ],
        "saved": false
      },

      {
        "name": "Loaded Breakfast Skillet",
        "imgURL": "https://www.willcookforsmiles.com/wp-content/uploads/2014/09/Loaded-Baked-Potato-Breakfast-Skillet-from-willcookforsmiles.com_.jpg",
        "videoURL": "https://www.youtube.com/embed/GA59XxrvlsQ",
        "ingredients": [
          "3 russet potatoes, rinsed and scrubbed clean",
          "4 strips bacon, cut into 1 inch pieces",
          "1 onion, chopped",
          "1/4 c. water",
          "2 cloves garlic",
          "2 green onions, sliced",
          "1/2 tsp. smoked paprika",
          "kosher salt",
          "Freshly ground black pepper",
          "4 eggs",
          "1 c. shredded Chedda"
        ],
        "equipment": [
          "Large nonstick skillet"
        ],
        "instructions": [
          "Chop potatoes into small cubes, about 3/4 inched thick.",
          "Place a large nonstick skillet over medium heat. Add bacon and fry until crispy. Turn off heat and transfer bacon to a paper towel–lined plate. Keep most of bacon fat in skillet, removing any black pieces from the bacon.",
          "Turn the heat back to medium and add onion to the skillet. Sauté, stirring occasionally, until onions begin to soften. Add potatoes and toss until evenly coated in bacon fat. Pour in water and cover skillet with a large lid. (This helps speed up the cooking and prevent burning.) Cook until the potatoes are tender, about 20 minutes, checking the potatoes occasionally. If they start to brown too quickly, remove the lid and add more water.",
          "When the potatoes are tender, remove lid and stir in garlic, green onions, and paprika. Season with salt and pepper to taste. Using a wooden spoon, make four holes in the potatoes to reveal bottom of skillet. Crack an egg into each hole and season each egg with salt and pepper. Sprinkle cheese and cooked bacon bits over the entire skillet. Replace lid and cook until eggs are cooked to your liking, about 5 minutes for a just runny egg. Serve warm. "
        ],
        "cuisine": "American",
        "cooktime": "50",
        "difficulty": "Easy",
        "diet": [],
        "cookingMethod": [
          "Saute"
        ],
        "course": "Breakfast",
        "serving": "4",
        "keyword": [
          "egg",
          "breakfast",
          "bacon",
          "comfort food",
          "skillet"
        ],
        "saved": false
      },

      {
        "name": "Easy Baked Buffalo Wings",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2019/12/Easy-Baked-Buffalo-Wings_Hero-1080x675.png",
        "videoURL": "https://www.youtube.com/embed/ze39mtufeNE",
        "ingredients": [
          "2 dozen chicken wings tips removed, cut into drumsticks and flats",
          "1 tablespoon roasted garlic powder",
          "1 tablespoon cayenne powder",
          "2 teaspoons salt",
          "2 teaspoons pepper",
          "1 cup Frank's Hot Sauce",
          "1/3 cup habanero-based hot sauce (optional)",
          "4 tablespoons butter",
          "2 tablespoons honey"
        ],
        "equipment": [
          "Sheet pans lined with wire racks",
          "Aluminum foil",
          "Saucepan"
        ],
        "instructions": [
          "Preheat oven to 400ºF. Line two sheet pans with foil and place the racks on top of the foil. If desired, spray the racks with a bit of cooking oil to keep the wings from sticking.",
          "Combine all the wing spices in a bowl. Pat the chicken wings dry and sprinkle the spice mixture all over the wings and toss to coat completely with spices. Arrange the wings on the racks and transfer to the oven for 45-55 minutes, flipping once midway through cooking.",
          "Combine all the ingredients for the sauce in a saucepan and place over medium heat until melted, stirring to incorporate all the ingredients. Transfer to a large bowl, reserving 1/3 cup of the sauce for serving.",
          "Once the wings have finished baking, transfer them to the bowl of hot sauce and toss to combine. Turn the broiler on. Return the sauced wings to the racks and transfer to the broiler for 3-4 minutes or until the wings crisp up around the edges and begin to char slightly.",
          "Transfer the wings to a serving platter and pour the reserved sauce on top. Enjoy!"
        ],
        "cuisine": "American",
        "cooktime": "25",
        "difficulty": "Easy",
        "diet": [],
        "cookingMethod": [
          "Bake",
          "Broil"
        ],
        "course": "Appetizer",
        "serving": "6",
        "keyword": [
          "buffalo wings",
          "chicken wings",
          "wings",
          "appetizer"
        ],
        "saved": false
      },

      {
        "name": "Warm Soba with Pork, Shrimp, and Cabbage",
        "imgURL": "https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f69ab68d9e4_-_201003-r-soba-shrimp-pork-soup.jpg?crop=1xw:1.0xh;center,top&resize=768:*",
        "videoURL": "",
        "ingredients": [
          "1/4 c. low-sodium soy sauce",
          "2 tbsp. low-sodium soy sauce",
          "2 tsp. dashi powder (see Tips & Techniques)",
          "12 oz. dried soba noodles",
          "1 tbsp. canola oil",
          "4 oz. lean ground pork",
          "4 oz. shiitake mushrooms",
          "1/2 lb. shelled and deveined medium shrimp",
          "1/2 medium head napa cabbage",
          "2 scallions"
        ],
        "equipment": ["bowl", "soup pot"],
        "instructions":
          [
            "In a large soup pot, combine the soy sauce and dashi powder with 6 cups of water and bring to a simmer.",
            "In a large saucepan of boiling salted water, cook the soba until al dente. Drain well.",
            "In a large nonstick skillet, heat the oil. Add the pork and mushrooms and cook over high heat, stirring occasionally, until the mushrooms are lightly browned and the pork is no longer pink, about 5 minutes. Add the shrimp and cook, stirring occasionally, until curled, about 3 minutes. Add the cabbage and cook just until wilted, about 1 minute. Scrape the mixture into the soup pot. Add the noodles and simmer just until heated through, about 1 minute. Serve in deep bowls, garnished with the scallions."
          ],
        "cuisine": "Japanese",
        "cooktime": "30",
        "difficulty": "Medium",
        "diet": ["Japanese"],
        "cookingMethod": ["Stove"],
        "course": "Lunch, Dinner",
        "serving": "4",
        "keyword": ["Japanese", "Lunch", "Dinner", "Soup"],
        "saved": false
      },
      {
        "name": "Miso-Glazed Salmon with Edamame Salad",
        "imgURL": "https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/11/480x576/54f8a18de1d9b_-_miso-glazed-salmon-s3.jpg?resize=768:*",
        "videoURL": "",
        "ingredients": [
          "1 bag frozen shelled edamame or frozen baby lima beans",
          "1/4 c. seasoned rice vinegar",
          "1 tbsp. vegetable oil",
          "1 tsp. sugar",
          "3/4 tsp. salt",
          "tsp. ground black pepper",
          "1 bunch radishes",
          "1 c. loosely packed fresh cilantro leaves",
          "2 tbsp. red miso",
          "1 green onion",
          "1 tbsp. grated, peeled fresh ginger",
          "1 tsp. brown sugar",
          "tsp. ground red pepper",
          "1 salmon fillet with skin",
          "baby greens"
        ],
        "equipment": ["small bowl", "frying pan"],
        "instructions":
          [
            "Prepare Edamame Salad: Cook edamame as label directs; drain. Rinse edamame with cold running water to stop cooking, and drain again.",
            "In medium bowl, whisk vinegar, oil, sugar, salt, and pepper until blended. Add edamame, radishes, and cilantro, and toss until evenly coated. Cover and refrigerate salad up to 1 day if not serving right away. Makes about 4 cups.",
            "Prepare Miso-Glazed Salmon: In small bowl, with spoon, mix miso, green onion, ginger, sugar, and ground red pepper. Rub miso mixture on flesh side of salmon.",
            "Place salmon, skin side down, on hot greased grill rack over medium-low heat. Cook 10 to 12 minutes or just until salmon turns opaque throughout and flakes easily when tested with a fork. Serve salmon with Edamame Salad; garnish with baby greens."
          ],
        "cuisine": "Japanese",
        "cooktime": "45",
        "difficulty": "Medium",
        "diet": ["Japanese"],
        "cookingMethod": ["grill"],
        "course": "Dinner",
        "serving": "4",
        "keyword": ["Japanese", "Dinner"],
        "saved": false
      },

      {
        "name": "Tamagoyaki (Japanese omelette)",
        "imgURL": "https://img-global.cpcdn.com/recipes/ccd0b89d1366daed/1502x1064cq70/tamagoyaki-japanese-omelette-recipe-main-photo.jpg",
        "videoURL": "",
        "ingredients":
          [
            "2 eggs",
            "1 Tbsp dashi (Japanese kobu dashi) or milk",
            "2 pinches salt",
            "Aonori ( optional)",
            "1 Tbsp cooking oil"
          ],
        "equipment":
          [
            "chopsticks", "small bowl", "tomagoyaki pan"
          ],
        "instructions":
          [
            "You should whisk eggs well. Make sure you break up the egg white!",
            "Heat the oil in your pan on medium. Pour 1/3 of eggs into the pan.",
            "Spread out the eggs and let it cook a few seconds...",
            "When it's a little cooked, roll in pan!",
            "Roll again!",
            "And roll again! Push the eggs to the back of the pan.",
            "Add another 1/3 of the eggs.",
            "Lift the cooked eggs up a little and let the new eggs drain a little underneath!",
            "Let cook for a few seconds then roll everything towards the from again.",
            "Roll again until all rolled up.",
            "Push the rolled eggs to the back of the pan again. Then add the last 1/3 of the eggs (add a little bit more oil if you think the eggs might stick to the pan)... Just like last time, you should roll i up again!",
            "Finally you'll have your finished tamagoyaki!",
            "Cut and serve!"
          ],
        "cuisine": "Japanese",
        "cooktime": "15",
        "difficulty": "Medium",
        "diet": ["Japanese"],
        "cookingMethod": [],
        "course": "Breakfast",
        "serving": "2",
        "keyword": ["Japanese", "breakfast", "snack"],
        "saved": false
      },

      {
        "name": "Okayu with Onsen Tamago",
        "imgURL": "https://img-global.cpcdn.com/recipes/55537273/1502x1064cq70/okayu-with-onsen-tamago-recipe-main-photo.jpg",
        "videoURL": "",
        "ingredients":
          [
            "1 cup of japanese rice",
            "8 cup of water",
            "30 ml of hondashi",
            "5 ml of miso",
            "5 ml of sriracha",
            "2 eggs",
            "30 ml of green onions",
            "60 ml of seto fumi furikake"
          ],
        "equipment": ["measuring cup", "bowl", "medium sized pot"],
        "instructions":
          [
            "cook the eggs in 65ºC/149ºF bath for 45 min and plunge the eggs in ice water",
            "cook the rice with 8 cups of water, miso sriracha and hondashi, the rice will be like a porridge",
            "put it on a plate and garnish with green onions and seto fumi furikake"
          ],
        "cuisine": "Japanese",
        "cooktime": "60",
        "difficulty": "Easy",
        "diet": ["Japanese"],
        "cookingMethod": [],
        "course": "Breakfast",
        "serving": "2",
        "keyword": ["Japanese", "Breakfast"],
        "saved": false
      },

      {
        "name": "Tonkatsu pork",
        "imgURL": "https://images.lifesambrosia.com/food/large/tonkatsu-pork.jpg",
        "videoURL": "",
        "ingredients":
          [
            "4 thick boneless pork loin chops",
            "100g plain flour",
            "2 eggs, beaten",
            "100g panko breadcrumbs",
            "vegetable oil, for shallow frying",
            "For the sauce",
            "2 tbsp ketchup",
            "2 tbsp Worcestershire sauce",
            "1 tbsp oyster sauce",
            "2 tsp caster sugar"
          ],
        "equipment": ["bowl", "frying pan"],
        "instructions":
          [
            "Remove the large piece of fat on the edge of each pork loin, then bash each of the loins between two pieces of baking parchment until around 1cm in thickness – you can do this using a meat tenderiser or a rolling pin. Once bashed, use your hands to reshape the meat to its original shape and thickness – this step will ensure the meat is as succulent as possible.",
            "Put the flour, eggs and panko breadcrumbs into three separate wide-rimmed bowls. Season the meat, then dip first in the flour, followed by the eggs, then the breadcrumbs.",
            "In a large frying or sauté pan, add enough oil to come 2cm up the side of the pan. Heat the oil to 180C – if you don’t have a thermometer, drop a bit of panko into the oil and if it sinks a little then starts to fry, the oil is ready. Add two pork chops and cook for 1 min 30 secs on each side, then remove and leave to rest on a wire rack for 5 mins. Repeat with the remaining pork chops.",
            "While the pork is resting, make the sauce by whisking the ingredients together, adding a splash of water if it’s particularly thick. Slice the tonkatsu and serve drizzled with the sauce."
          ],
        "cuisine": "Japanese",
        "cooktime": "30",
        "difficulty": "Easy",
        "diet": ["Japanese"],
        "cookingMethod": ["frying"],
        "course": "Dinner",
        "serving": "4",
        "keyword": ["Japanese", "Dinner"],
        "saved": false
      },
      {

        "name": "Rigatoni with Easy Vodka Sauce",
        "imgURL": "https://assets.bonappetit.com/photos/5a8da4996497380283798c16/3:2/w_2560,c_limit/rigatoni-with-vodka-sauce.jpg",
        "videoURL": "https://www.youtube.com/embed/DrzWGUGN6vY",
        "ingredients": [
          "Kosher salt",
          "1 medium onion",
          "4 garlic cloves",
          "4 oz. Parmesan cheese",
          "2 Tbsp. extra-virgin olive oil, plus more for drizzling",
          "1 4.5-oz. tube double-concentrated tomato paste",
          "½ tsp. crushed red pepper flakes",
          "2 oz. vodka",
          "¾ cup heavy cream",
          "1 lb. rigatoni",
          "Basil leaves (for serving)"
        ],
        "equipment": ["Dutch Oven", "Large Pot"],
        "instructions": [
          "Fill a stock pot or other large pot three-quarters full with water and heat over high. Toss in a handful of salt and bring to a boil while you do your other prep.",
          "Peel and finely chop 1 onion",
          "Firmly smash 4 garlic cloves with the flat side of a chef’s knife and remove peel.",
          "Grate 4 oz. Parmesan on the smallest holes of the box grater.",
          "Heat 2 Tbsp. oil in a Dutch oven over medium (position it next to pot of water). Add onion and garlic and cook, stirring constantly, just until onion is starting to brown around the edges, 5–7 minutes.",
          "Add entire 4.5-oz. tube tomato paste and ½ tsp. red pepper flakes and stir until paste evenly coats onion. Continue to cook, stirring often, until paste is deep red and starting to brown on bottom of pot, 5–7 minutes.",
          "Add 2 oz. vodka to deglaze pan and stir to incorporate, scraping bottom of pot. Reduce heat to low.",
          "Using a heatproof glass measuring cup, scoop about ¼ cup boiling water from pot, then add ¾ cup heavy cream to measuring cup (this brings up the temperature of the cream so it won’t break when you add it to the pot).",
          "Slowly add warmed cream to Dutch oven, stirring constantly, until a smooth sauce forms. Remove from heat.",
          "Add 1 lb. rigatoni to pot of boiling salted water and cook according to package instructions until al dente. About 1 minute before the timer goes off, use heatproof measuring cup to scoop up about 1 cup pasta cooking liquid. Heat Dutch oven over low.",
          "Using a spider, transfer rigatoni to Dutch oven along with any water that’s piggybacking on the pasta.",
          "Add ½ cup pasta cooking liquid to Dutch oven and stir to incorporate, then gradually add half of Parmesan, stirring constantly to melt cheese. You should have a smooth, glossy sauce that coats each piece of pasta. Season with salt and add a splash more pasta cooking liquid to thin sauce, if needed.",
          "Divide pasta among bowls. Top with remaining cheese, dividing evenly. Drizzle with more oil, then tear basil leaves over."
        ],
        "cuisine": "Italian",
        "cooktime": "30",
        "difficulty": "Easy",
        "diet": ["Vegetarian"],
        "cookingMethod": ["boiling"],
        "course": "Dinner",
        "serving": "4",
        "keyword": ["Italian", "Dinner"],
        "saved": false

      },
      {
        "name": "Chicken Parmigiana",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDA-2AYdRTr4GNnBrb2wT1bW1pPBgd9RGs9pdQLw7wFipvhiST&usqp=CAU",
        "videoURL": "https://www.youtube.com/embed/gwSOwAe_IVY",
        "equipment": ["Dutch Oven", "Large Pot"],
        "ingredients": [
          " 4 boneless, skinless chicken breasts, pounded thin",
          "Salt and freshly ground black pepper",
          "2 cups all-purpose flour, seasoned with salt and pepper",
          "4 large eggs, beaten with 2 tablespoons water and seasoned with salt and pepper",
          "2 cups panko bread crumbs",
          "1 cup vegetable oil or pure olive oil",
          '1 pound fresh mozzarella, thinly sliced',
          '1/4 cup freshly grated Parmesan',
          "Fresh basil or parsley leaves, for garnish",
          "Tomato Sauce:",
          "2 tablespoons olive oil",
          "1 large Spanish onion, finely chopped",
          "4 cloves garlic, smashed with some kosher salt to make a paste",
          "Two 28-ounce cans plum tomatoes and their juices, pureed in a blender",
          "One 16-ounce can crushed tomatoes",
          "1 small can tomato paste",
          "1 bay leaf",
          "1 small bunch Italian parsley",
          "1 Cubano chile pepper, chopped",
          "Salt and freshly ground pepper",

        ],
        "instructions": [
          " Preheat oven to 400 degrees F.",
          "Season chicken on both sides with salt and pepper. Dredge each breast in the flour and tap off excess, then dip in the egg and let excess drip off, then dredge on both sides in the bread crumbs.",
          "Divide the oil between 2 large saute pans and heat over high heat until almost smoking. Add 2 chicken breasts to each pan and cook until golden brown on both sides, about 2 minutes per side. Transfer to a baking sheet and top each breast with some Tomato Sauce, a few slices of the mozzarella, salt and pepper, and a tablespoon of Parmesan. Bake in the oven until the chicken is cooked through and the cheese is melted, about 5 to 7 minutes. Remove from the oven and garnish with basil or parsley leaves.",
          "Tomato Sauce:",
          "Heat olive oil in a medium saucepan over medium heat. Add onions and garlic and cook until soft. Add pureed tomatoes with their juices, crushed tomatoes, tomato paste, 1 cup water, bay leaf, parsley, Cubano pepper, and bring to a boil. Season, to taste, with salt and pepper. Reduce heat and cook until slightly thickened, about 30 minutes."

        ],
        "cuisine": "Italian",
        "cooktime": "75",
        "difficulty": "Medium",
        "diet": ["Keto"],
        "cookingMethod": ["baking, frying"],
        "course": "Dinner",
        "serving": "4",
        "keyword": ["Italian", "Dinner"],
        "saved": false


      },
      {
        "name": "Real Meatballs and Spaghetti",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc0x40-X6WxAqmTD9QHNKgm3HJaXVVCvmPd_t9awMgr1COzz3d&usqp=CAU",
        "videoURL": "https://www.youtube.com/embed/tcvz0BUhJO4",
        "equipment": ["Large skillet"],
        "ingredients": [
          " 1/2 pound ground veal",
          "1/2 pound ground pork",
          "1 pound ground beef",
          "1 cup fresh white bread crumbs (4 slices, crusts removed)",
          "1/4 cup seasoned dry bread crumbs",
          "2 tablespoons chopped fresh flat-leaf parsley",
          "1/2 cup freshly grated Parmesan cheese",
          " 2 teaspoons kosher salt",
          "1 / 2 teaspoon freshly ground black pepper",
          "1 / 4 teaspoon ground nutmeg",
          "1 extra - large egg, beaten",
          "Vegetable oil",
          "Olive oil",
          "For the sauce:",
          "      1 tablespoon good olive oil",
          "1 cup chopped yellow onion(1 onion)",
          "1 1 / 2 teaspoons minced garlic",
          "1 / 2 cup good red wine, such as Chianti",
          "1(28 - ounce) can crushed tomatoes, or plum tomatoes in puree, chopped",
          "1 tablespoon chopped fresh flat - leaf parsley",
          "1 1 / 2 teaspoons kosher salt",
          "1 / 2 teaspoon freshly ground black pepper"
        ],
        "instructions": [
          "Place the ground meats, both bread crumbs, parsley, Parmesan, salt, pepper, nutmeg, egg, and 3/4 cup warm water in a bowl. Combine very lightly with a fork. Using your hands, lightly form the mixture into 2-inch meatballs. You will have 14 to 16 meatballs.",
          "Pour equal amounts of vegetable oil and olive oil into a large (12-inch) skillet to a depth of 1/4-inch. Heat the oil. Very carefully, in batches, place the meatballs in the oil and brown them well on all sides over medium-low heat, turning carefully with a spatula or a fork. This should take about 10 minutes for each batch. Don't crowd the meatballs. Remove the meatballs to a plate covered with paper towels. Discard the oil but don't clean the pan.",
          "For the sauce, heat the olive oil in the same pan. Add the onion and saute over medium heat until translucent, 5 to 10 minutes. Add the garlic and cook for 1 more minute. Add the wine and cook on high heat, scraping up all the brown bits in the pan, until almost all the liquid evaporates, about 3 minutes. Stir in the tomatoes, parsley, salt, and pepper.",
          "Return the meatballs to the sauce, cover, and simmer on the lowest heat for 25 to 30 minutes, until the meatballs are cooked through. Serve hot on cooked spaghetti and pass the grated Parmesan"
        ],
        "cuisine": "Italian",
        "cooktime": "120",
        "difficulty": "Medium",
        "diet": ["Keto"],
        "cookingMethod": ["cooking"],
        "course": "Dinner",
        "serving": "6",
        "keyword": ["Italian", "Dinner"],
        "saved": false
      },
      {
        "name": "Osso Buco",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQERLCAZ_ko741aPMPT1n7dxyB8s-KA-ZJggvPYPVRIMpKkxbmN&usqp=CAU",
        "videoURL": "https://www.youtube.com/embed/Jr9Is6NsFck",
        "equipment": ["Large skillet,cheeseclot", "large Dutch oven pot"],
        "ingredients": [
          "1 sprig fresh rosemary",
          "1 sprig fresh thyme",
          "1 dry bay leaf",
          "2 whole cloves",
          "Cheesecloth",
          "Kitchen twine, for bouquet garni and tying the veal shanks",
          "3 whole veal shanks (about 1 pound per shank), trimmed",
          "Sea salt and freshly ground black pepper",
          "All purpose flour, for dredging",
          "1/2 cup vegetable oil",
          "1 small onion, diced into 1/2-inch cubes",
          "1 small carrot, diced into 1/2-inch cubes",
          "1 stalk celery, diced into 1/2 inch cubes",
          "1 tablespoon tomato paste",
          "1 cup dry white wine",
          "3 cups chicken stock",
          "3 tablespoons fresh flat-leaf Italian parsley, chopped",
          "1 tablespoon lemon zest"
        ],
        "instructions": [
          "Place the rosemary, thyme, bay leaf and cloves into cheesecloth and secure with twine. This will be your bouquet garni.",
          "For the veal shanks, pat dry with paper towels to remove any excess moisture. Veal shanks will brown better when they are dry. Secure the meat to the bone with the kitchen twine. Season each shank with salt and freshly ground pepper. Dredge the shanks in flour, shaking off excess.",
          "In a large Dutch oven pot, heat vegetable oil until smoking. Add tied veal shanks to the hot pan and brown all sides, about 3 minutes per side. Remove browned shanks and reserve.",
          "In the same pot, add the onion, carrot and celery. Season with salt at this point to help draw out the moisture from the vegetables. Saute until soft and translucent, about 8 minutes. Add the tomato paste and mix well. Return browned shanks to the pan and add the white wine and reduce liquid by half, about 5 minutes. Add the bouquet garni and 2 cups of the chicken stock and bring to a boil. Reduce heat to low, cover pan and simmer for about 1 1/2 hours or until the meat is falling off the bone. Check every 15 minutes, turning shanks and adding more chicken stock as necessary. The level of cooking liquid should always be about 3/4 the way up the shank.",
          "Carefully remove the cooked shanks from the pot and place in decorative serving platter. Cut off the kitchen twine and discard.",
          "Pour all the juices and sauce from the pot over the shanks. Garnish with chopped parsley and lemon zest."

        ],
        "cuisine": "Italian",
        "cooktime": "135",
        "difficulty": "Easy",
        "diet": ["Keto"],
        "cookingMethod": ["cooking"],
        "course": "Dinner",
        "serving": "6",
        "keyword": ["Italian", "Dinner"],
        "saved": false

      },
      {
        "name": "Italian Baked Eggs & Sausage",
        "imgURL": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Italian-Baked-Eggs-Sausage_EXPS_THFM17_63535_B09_27_2b.jpg",
        "videoURL": "",
        "equipment": ["Large skillet", "large Dutch oven pot"],
        "ingredients": [
          "1 pound bulk Italian sausage",
          "1 jar (24 ounces) fire-roasted tomato and garlic pasta sauce",
          "1 can (14-1/2 ounces) fire-roasted diced tomatoes, drained",
          "3/4 cup part-skim ricotta cheese",
          "8 large eggs",
          "1/4 teaspoon salt",
          "1/4 teaspoon pepper",
          "1/4 cup shredded Parmesan cheese",
          "1 tablespoon minced fresh basil",
          "1 French bread demi-baguette (4 ounces), cut into 1-inch slices",
          "1/4 cup butter, softened"

        ],
        "instructions": [
          "    Preheat oven to 350°. In a large skillet over medium heat, cook sausage, crumbling meat, until no longer pink, 3-4 minutes; drain. Stir in pasta sauce and tomatoes. Transfer to a 13x9-in. baking dish.",
          "Dollop ricotta cheese on top of meat mixture. Gently break an egg into a small bowl; slip egg onto ricotta. Repeat with remaining eggs. Sprinkle with salt, pepper and Parmesan cheese.",
          "Bake until egg whites are completely set and yolks have begun to thicken but are not hard, 30-35 minutes. Remove from oven; sprinkle with basil.",
          "Meanwhile, spread bread slices with butter; place on an ungreased baking sheet. Preheat broiler. Broil 3-4 in. from heat until golden brown, 1-2 minutes on each side. Serve immediately with baked eggs."
        ],
        "cuisine": "Italian",
        "cooktime": "30",
        "difficulty": "Easy",
        "diet": ["Keto"],
        "cookingMethod": ["baking"],
        "course": "Dinner",
        "serving": "8",
        "keyword": ["Italian", "Dinner"],
        "saved": false
      },
      {
        "name": "Chicken pasta ",
        "imgURL": "https://thehealthyfoodie.com/wp-content/uploads/2017/04/One-Pot-Creamy-Chicken-Pasta-9.jpg",
        "videoURL": "https://www.youtube.com/embed/VDnluYI0yZs",
        "ingredients": [
          "12 oz. spaghetti",
          "1 tbsp. extra-virgin olive oil",
          "1 lb. boneless, skinless chicken breasts, cut into 1-inch pieces",
          "Kosher salt",
          "Freshly ground black pepper",
          "1 large onion, sliced into half moons",
          "2 bell peppers, sliced",
          "1 tbsp. chili powder",
          "1 tbsp. ground cumin",
          "2 tsp. dried oregano",
          "1 (15-oz.) can fire-roasted diced tomatoes",
          "1/2 c. low-sodium chicken broth",
          "3/4 c. half-and-half",
          "1/2 c. shredded cheddar",
          "1/2 c. shredded pepper jack",
          "Freshly chopped cilantro, for garnish"
        ],
        "equipment": [
          "Large pot",
          "Large Skillet",
          "Big spoon",
          "Plates for serving",
        ],
        "instructions": [
          "In a large pot of salted boiling water, cook spaghetti according to package directions until al dente. Drain.",
          "Meanwhile, in a large skillet over medium-high heat, heat oil. Add chicken and season with salt and pepper. Cook, stirring occasionally, until golden, about 6 minutes, then add onion and bell peppers and cook, stirring, until soft, 5 to 7 minutes more. Add spices and stir until coated.",
          "Stir in tomatoes, broth, and half-and- half and simmer until slightly reduced, about 3 minutes. Add cooked spaghetti and toss until coated, then remove from heat, add cheeses, and stir until melty and creamy. Season with salt and pepper.",
          "Garnish with cilantro before serving."
        ],
        "cuisine": "Mexican",
        "cooktime": "40",
        "difficulty": "Medium",
        "diet": [],
        "cookingMethod": [
          "Fry",
          "Boil"
        ],
        "course": "Dinner",
        "serving": "4",
        "keyword": [
          "chicken",
          "pasta",
          "vegetable"
        ],
        "saved": false
      },
      {
        "name": "Street Corn",
        "imgURL": "https://www.simplyrecipes.com/wp-content/uploads/2016/07/2016-07-29-Street-Corn-14.jpg",
        "videoURL": "https://www.youtube.com/embed/NbhP8GOG_Is",
        "ingredients": [
          "1/4 c. finely chopped walnuts, plus more for serving",
          "Canola or vegetable oil, for brushing",
          "4 ears corn, shucked and cleaned",
          "1/4 c. mayonnaise",
          "1/4 c. sour cream",
          "1/4 c. grated cotija cheese (or Parmesan)",
          "Chili powder, for serving",
          "1 lime, cut into wedges",
          "Cilantro, for serving, if desired"
        ],
        "equipment": [
          "Small baking pan",
          "Grill pan",
          "2 Small bowl"

        ],
        "instructions": [
          "Heat oven to 350°. Scatter walnuts on small baking pan. Toast until lightly golden, about 8 minutes. Set aside.",
          "Preheat a grill or grill pan over medium-high heat and oil grates. Brush corn with oil and grill, turning occasionally until kernels are bright yellow and charred in places, about 10 minutes.",
          "In a small bowl, combine mayonnaise and sour cream. In another small bowl, combine walnuts and cotija cheese.",
          "Brush cooked corn with mayonnaise mixture, then sprinkle with walnut mixture and a generous amount of chili powder. Squeeze one lime wedge over the corn and sprinkle with cilantro and more walnuts. Serve with lime wedges.",
        ],
        "cuisine": "Mexican",
        "cooktime": "20",
        "difficulty": "Easy",
        "diet": [
          "Vegetarian"
        ],
        "cookingMethod": [
          "Grilled"
        ],
        "course": "Appetizer",
        "serving": "4",
        "keyword": [
          "corn"
        ],
        "saved": false
      },
      {
        "name": " Huevos Rancheros",
        "imgURL": "https://d3cizcpymoenau.cloudfront.net/images/21443/SFS_Huevos_Rancheros-12.jpg",
        "videoURL": "https://www.youtube.com/embed/LkbTMD7fDY4",
        "ingredients": [
          "FOR THE HUEVOS RANCHEROS:",
          "1 tbsp. extra-virgin olive oil",
          "1 onion, chopped",
          "1 tsp. cumin",
          "1 tsp. chili powder",
          "kosher salt",
          "1 c. black beans, drained and rinsed",
          "1 c. salsa",
          "1 c. Shredded Monterey Jack",
          "4 large eggs",
          "FOR SERVING:",
          "4 corn tostadas",
          "1 avocado, sliced",
          "1 tbsp. freshly chopped cilantro",
          "Hot sauce",
          "sour cream"

        ],
        "equipment": [
          "Large Pan",
          "Wooden Spoon",
          "Large plate"
        ],
        "instructions": [
          "Preheat oven to 400º.",
          "In a large skillet over medium heat, heat oil. Add onions and cook until soft, 5 minutes. Season with cumin, chili powder, and salt.",
          "Add black beans and salsa to skillet and stir to combine.",
          "Sprinkle all over with cheese, then create four wells with a spoon and crack in eggs. Season with salt.",
          "Bake until egg whites are set and yolks still runny, 8 to 10 minutes.",
          "Plate on top of tostada. Garnish with avocado and cilantro, then drizzle with hot sauce and sour cream."
        ],
        "cuisine": "Mexican",
        "cooktime": "20",
        "difficulty": "Medium",
        "diet": [
          "Vegetarian"
        ],
        "cookingMethod": [
          "fry"
        ],
        "course": "Breakfast",
        "serving": "4",
        "keyword": [
          "eggs",
          "avocado",
          "sour cream"
        ],
        "saved": false
      },
      {
        "name": "Quesadilla",
        "imgURL": "https://www.seriouseats.com/recipes/assets_c/2017/01/20170131-quesadillas-three-variations-7-thumb-1500xauto-436176.jpg",
        "videoURL": "https://www.youtube.com/embed/6R0-o_v6Gio",
        "ingredients": [
          "1 tbsp. vegetable oil",
          "1 Onion, finely chopped",
          "1 lb. ground beef",
          "1/2 tsp. ground chili powder",
          "1/2 tsp. ground paprika",
          "1/2 tsp. ground cumin",
          "8 medium flour tortillas",
          "1 1/2 c. Monterey Jack, shredded",
          "1 avocado, sliced",
          "2 tbsp. Chopped cilantro"
        ],
        "equipment": [
          "Large Pan",
          "Wooden Spoon",
          "Large plate"
        ],
        "instructions": [
          "Heat vegetable oil in a large pan over medium heat. Sauté onions until soft. Add ground beef and spices, breaking up the meat with a wooden spoon. Stir occasionally and sauté until the meat cooked through. Remove pan from heat and drain excess fat. Season mixture with salt and pepper to taste. Clean pan and return over medium heat.",
          "Meanwhile, assembly quesadillas. Sprinkle cheese onto 4 flour tortillas. Top with beef mixture, avocado and cilantro. Top each tortilla with a second tortilla.",
          "Working one at a time, transfer quesadillas to the heated pan. Cook until golden-brown, about 3 minutes. When ready to flip, cover the pan with a large plate. Invert pan to transfer the quesadilla onto the plate, then slide the quesadilla back onto the pan (golden side up). Cook until golden-brown. Slice into triangles and serve warm."
        ],
        "cuisine": "Mexican",
        "cooktime": "30",
        "difficulty": "Medium",
        "diet": [
          "Meat"
        ],
        "cookingMethod": [
          "fry"
        ],
        "course": "Dinner",
        "serving": "4",
        "keyword": [
          "beef",
          "cheese",
          "avocado",
          "tortillas"
        ],
        "saved": false
      },
      {
        "name": " Steak Fajita Power Bowls",
        "imgURL": "https://del.h-cdn.co/assets/18/01/1600x800/landscape-1515192854-delish-steak-fajita-power-bowls-still001.jpg",
        "videoURL": "https://www.youtube.com/embed/t4nO2SKf508",
        "ingredients": [
          "2 tbsp. vegetable oil, divided",
          "1/2 yellow onion, sliced into half moons",
          "2 bell peppers, thinly sliced",
          "kosher salt",
          "Freshly ground black pepper",
          "1 lb. skirt steak, cut into 1/2 slices",
          "Juice of 1/2 lime",
          "1/2 tsp. cumin",
          "1/2 tsp. chili powder",
          "4 c. cooked brown rice",
          "1 c. black beans, drained and rinsed",
          "1 c. frozen corn, warmed",
          "1 avocado, thinly sliced",
          "1 tbsp. finely chopped cilantro, for garnish",
          "Sour cream, for serving",
        ],
        "equipment": [
          "Large skillet",
          "Fork",
          "Bowls"
        ],
        "instructions": [
          "In a large skillet over medium heat, heat 1 tbsp vegetable oil. Add the onions and peppers, and season with salt and pepper to taste. Cook until onions are translucent and peppers are tender, 7 to 10 minutes. Remove from skillet and reserve.",
          "Add remaining vegetable oil and let heat for about 30 seconds, then add skirt steak to pan. Squeeze lime over steak and season with cumin, chili powder, salt and pepper. Let them sit for a minute or so to get a nice sear, then cook to your preference, about another 5 minutes for medium well done steak. Remove from skillet.",
          "Build bowls: start with about 1 cup rice per bowl. Top with steak, onions and peppers, avocado, black beans and corn.",
          "Garnish with cilantro and drizzle with sour cream. Serve."
        ],
        "cuisine": "Mexican",
        "cooktime": "45",
        "difficulty": "Medium",
        "diet": [
          "Meat"
        ],
        "cookingMethod": [
          "Fry"
        ],
        "course": "Dinner",
        "serving": "4",
        "keyword": [
          "steak",
          "pepers",
          "sour cream"
        ],
        "saved": false
      },
      {
        "name": "Tacos Al Pastor ",
        "imgURL": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png?crop=0.668xw:1.00xh;0.175xw,0&resize=768:*    ",
        "videoURL": "",
        "ingredients": [
          "FOR ACHIOTE PASTE",
          "1/4 c. extra-virgin olive oil",
          "1/4 c. annatto seeds",
          "1 tbsp. coriander seeds",
          "1 tbsp. cumin seeds",
          "2 tsp. dried oregano",
          "1 tsp. black peppercorns",
          "1 tsp. mustard seeds",
          "5 allspice berries",
          "4 cloves garlic",
          "1/3 c. orange juice",
          "2 tbsp. apple cider vinegar",
          "1 tsp. kosher salt",
          "FOR THE PORK",
          "1 tbsp. extra-virgin olive oil, plus more for grill",
          "3 dried guaillo chilis, seeds removed",
          "3 dried chiles de arbol, seeds removed",
          "1/3 c. pineapple juice",
          "1/4 c. achiote paste",
          "2 tbsp. apple cider vinegar",
          "3 cloves garlic",
          "2 tbsp. packed brown sugar",
          "2 tsp. kosher salt",
          "1 tsp. ground cinnamon",
          "1/2 tsp. freshly ground black pepper",
          "2 lb. boneless pork shoulder, sliced 1/2 thick",
          "FOR SERVING",
          "1 pineapple, cored and cut into rings",
          "1 red onion, cut into rings",
          "12 corn tortillas",
          "Freshly chopped cilantro"

        ],
        "equipment": [
          "Small skillet",
          "Food processor or blender",
          "Large Bowl",
          "Cutting Board"

        ],
        "instructions": [
          "MAKE ACHIOTE PASTE",
          "In a small skillet over medium heat, heat oil. Add annatto seeds, coriander, cumin, oregano, peppercorns, mustard seeds, and allspice berries and toast until fragrant, 1 minute. In a food processor or blender, add toasted seeds, garlic, orange juice, vinegar, and salt. Blend until it turns into a mostly smooth paste, scraping down sides as needed.",

          "MAKE TACOS",
          "In a small skillet over medium heat, heat oil. Add chilis and toast until slightly charred and fragrant, 1 minute. In a food processor or blender, add toasted chilis, pineapple juice, achiote paste, vinegar, garlic, brown sugar, salt, cinnamon, and pepper. Blend until fully combined.",
          "Place pork in a large bowl and pour marinade over. Cover and refrigerate for 4 hours and up to overnight.",
          "Preheat grill to medium-high and brush with oil. Grill pork until slightly charred and cooked through, 6 minutes per side. Let rest on a cutting board for 5 minutes then cut into 1/' pieces.",
          "Add pineapple and onions to grill and cook until slightly charred and onion is softened, 3 minutes per side. Break pineapple rings into large pieces.",
          "Add tortillas to grill and cook until warmed, 1 minute per side.",
          "On warmed tortillas, add pork, pineapple, onions, and cilantro. Serve with lime wedges."
        ],
        "cuisine": "Mexican",
        "cooktime": "5H",
        "difficulty": "Hard",
        "diet": [
          "Carbs"
        ],
        "cookingMethod": [
          "grill"
        ],
        "course": "Dinner",
        "serving": "10",
        "keyword": [
          "tacos",
          "pineapple",
          "tortilla"
        ],
        "saved": false
      },
      {
        "name": "Mexican Vegetarian Enchiladas",
        "imgURL": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-enchiladas-horizontal-1539718618.jpg?crop=0.804xw:0.679xh;0.112xw,0.117xh&resize=768:*",
        "videoURL": "",
        "ingredients": [
          "1 tbsp. extra-virgin olive oil",
          "1/2 medium onion, chopped",
          "2 cloves garlic, minced",
          "2 c. frozen corn, rinsed and drained",
          "3 small zucchinis, chopped",
          "Kosher salt",
          "1 tsp. chili powder",
          "1 tsp. cumin",
          "1 (15-oz.) black beans, drained and rinsed",
          "1 (10-oz.) can enchilada sauce",
          "Juice of 1/2 lime",
          "8 flour tortillas",
          "2/3 c. shredded Monterey jack",
          "1/3 c. shredded cheddar",

          "FOR TOPPING",
          "1 c. quartered grape tomatoes",
          "1 avocado, sliced",
          "1/4 c. finely chopped onion",
          "1/4 c. fresh cilantro leaves",

        ],
        "equipment": [
          "Pan",
          "Large Spoon",
          "9-x-13" / 'baking dish',

        ],
        "instructions": [
          "Preheat oven to 350°. In a large skillet over medium heat, heat oil. Add onion and cook until soft, 6 minutes.",
          "Stir in garlic and cook until fragrant, 1 minute more. Add corn and zucchinis and season with salt, chili powder, and cumin. Cook, stirring occasionally, until corn is turning golden and zucchini is tender. Add black beans, a 1/4 cup of enchilada sauce, and lime juice. Cook 2 minutes more.",
          "Add a large scoop of vegetable mixture onto each tortilla and roll up. Place rolled up tortillas side by side in a 9-x-13 baking dish and top with cheeses.",
          "Bake until cheese is melty, 15 to 18 minutes.",
          "Garnish with tomatoes, avocado, onion, and cilantro."
        ],
        "cuisine": "Mexican",
        "cooktime": "50",
        "difficulty": "Medium",
        "diet": [
          "Vegetarian"
        ],
        "cookingMethod": [
          "heat",
          "bake"
        ],
        "course": "Dinner",
        "serving": "4",
        "keyword": [
          "avocado",
          "cilantro",
          "healthy"
        ],
        "saved": false

      }

    ]
  await Recipe.insertMany(recipes)
  console.log("Created recipes!")
}

const run = async () => {
  await main()
  db.close()
}
run()