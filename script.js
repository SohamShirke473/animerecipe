const recipes = [
    {
        id: 1,
        name: 'Ichiraku Ramen',
        anime: 'Naruto',
        category: 'Shonen',
        type: 'Main Dishes',
        cookTime: '40 minutes',
        rating: 4.9,
        ratingCount: 127,
        description: 'The legendary ramen that fueled Naruto\'s ninja journey, featuring rich pork broth, tender chashu, and perfectly cooked noodles.',
        image: '1.png'
    },
    {
        id: 2,
        name: 'Tonkatsu Bento',
        anime: 'Your Name',
        category: 'Street Food',
        type: 'Main Dishes',
        cookTime: '35 minutes',
        rating: 4.7,
        ratingCount: 84,
        description: 'A crispy and delicious Japanese bento featuring golden panko-breaded pork cutlet, perfect for school lunches.',
        image: '2.png'
    },
    {
        id: 3,
        name: 'Soufflé Pancakes',
        anime: 'Food Wars',
        category: 'Desserts',
        type: 'Desserts',
        cookTime: '25 minutes',
        rating: 4.8,
        ratingCount: 153,
        description: 'Fluffy, airy pancakes that melt in your mouth, inspired by the culinary battles of Shokugeki no Soma.',
        image: '3.png'
    },
    {
        id: 4,
        name: 'Takoyaki',
        anime: 'Clannad',
        category: 'Street Food',
        type: 'Street Food',
        cookTime: '30 minutes',
        rating: 4.6,
        ratingCount: 97,
        description: 'Delicious octopus-filled street food balls, crispy on the outside and gooey inside, a festival favorite.',
        image: '4.png'
    },
    {
        id: 5,
        name: 'Katsudon',
        anime: 'Yuri on Ice',
        category: 'Main Dishes',
        type: 'Main Dishes',
        cookTime: '45 minutes',
        rating: 4.7,
        ratingCount: 112,
        description: 'A comforting dish of breaded pork cutlet over rice, famously featured in Yuri on Ice.',
        image: '5.png'
    },
    {
        id: 6,
        name: 'Dorayaki',
        anime: 'Doraemon',
        category: 'Desserts',
        type: 'Desserts',
        cookTime: '20 minutes',
        rating: 4.5,
        ratingCount: 89,
        description: 'Sweet pancake sandwiches filled with red bean paste, a favorite of the beloved anime character Doraemon.',
        image: '6.png'
    },
    {
      id: 7,
      name:"Onigiri",
      anime:"Dragon Ball",
      category:"Snacks",
      type:"Street Food",
      cookTime:"15 minutes",
      rating :4.6 ,
      ratingCount :78 ,
      description :"Classic Japanese rice balls filled with savory surprises like tuna mayo or pickled plum.",
      image:"7.png"
     },
     {
         id :8 ,
         name :"Taiyaki" ,
         anime :"Tokyo Revengers" ,
         category :"Desserts" ,
         type :"Desserts" ,
         cookTime :"30 Minutes",
         rating :4.9 ,
         ratingCount :120 ,
         description :"Fish-shaped pastry filled with sweet red bean paste or custard.",
         image :"8.png"
     },
     {
       id :9 ,
       name :"Miso Soup" ,
       anime:"Attack on Titan",
       category:"Shonen",
       type:"Side Dish",
       cookTime:"10 Minutes",
       rating :4.3 ,
       ratingCount :60 ,
       description :"Simple yet hearty soup made with miso paste,tofu,and seaweed.",
       image:"9.png"
     },
     {
       id :10 ,
       name :"Chirashi Sushi" ,
       anime :"Kimi no Na wa" ,
       category :"Main Dishes" ,
       type :"Main Dishes" ,
       cookTime :"50 Minutes" ,
       rating :4.8 ,
       ratingCount :110 ,
       description :"Colorful bowl of sushi rice topped with assorted sashimi and vegetables.",
       image :"10.png"
     },
     {
       id :11 ,
       name :"Gyoza" ,
       anime :"Naruto" ,
       category :"Appetizers" ,
       type :"Appetizers" ,
       cookTime :"30 Minutes" ,
       rating :4.7 ,
       ratingCount :95 ,
       description :"Japanese dumplings filled with ground meat and vegetables, pan-fried to perfection.",
       image :"11.png"
     },
     {
       id :12 ,
       name :"Yakisoba" ,
       anime :"My Hero Academia" ,
       category :"Main Dishes" ,
       type :"Main Dishes" ,
       cookTime :"25 Minutes" ,
       rating :4.6 , 
       ratingCount :85 , 
       description :"Stir-fried noodles with vegetables and meat, seasoned with a tangy sauce.",
       image :"12.png"
     },
     {
      id :13 , 
      name :"Pocky" , 
      anime:"Kaguya-sama", 
      category:"Snacks", 
      type:"Snacks", 
      cookTime:"No Cook", 
      rating :4.5 , 
      ratingCount :150 , 
      description:"Chocolate-covered biscuit sticks that are perfect for snacking.", 
      image:"13.png"
     },
     {
      id :14 , 
      name :"Kare Raisu (Curry Rice)" , 
      anime:"One Piece", 
      category:"Main Dishes", 
      type:"Main Dishes", 
      cookTime:"40 Minutes", 
      rating :4.8 , 
      ratingCount :130 , 
      description:"Comforting Japanese curry served over rice, often enjoyed by pirates.", 
      image:"14.png"
     },
     {
      id :15 , 
      name :"Natto Sushi" , 
      anime:"Shokugeki no Soma", 
      category:"Main Dishes", 
      type:"Main Dishes", 
      cookTime:"15 Minutes", 
      rating :4.2 , 
      ratingCount :70 , 
      description:"Fermented soybeans served over sushi rice, a delicacy for the adventurous eater.", 
      image:"15.png"
     },
     {
      id :16 , 
      name :"Matcha Ice Cream" , 
      anime:"Your Name", 
      category:"Desserts", 
      type:"Desserts", 
      cookTime:"No Cook", 
      rating :4.9 , 
      ratingCount :140 , 
      description:"Creamy green tea ice cream that melts in your mouth, perfect for hot days.", 
      image:"16.png"
     },
     {
         id :17,
         name :'Sushi Rolls',  
         anime :'Naruto',  
         category :'Main Dishes',  
         type :'Main Dishes',  
         cookTime :'30 minutes',  
         rating :4.8,  
         ratingCount :200,  
         description :'Delicious rolls filled with fresh fish and vegetables wrapped in seaweed.',  
         image :'17.png'  
     },  
     {  
         id :18,  
         name :'Bento Box',  
         anime :'My Neighbor Totoro',  
         category :'Lunch',  
         type :'Main Dishes',  
         cookTime :'40 minutes',  
         rating :4.6,  
         ratingCount :110,  
         description :'A beautifully arranged lunch box featuring rice, protein, and vegetables.',  
         image :'18.png'  
     },  
     {  
         id :19,  
         name :'Zaru Soba',  
         anime :'Fruits Basket',  
         category :'Cold Dishes',  
         type :'Main Dishes',  
         cookTime :'20 minutes',  
         rating :4.5,  
         ratingCount :90,  
         description :'Chilled buckwheat noodles served with a dipping sauce and garnished with green onions.',  
         image :'19.png'  
     },   
     {  
          id :20,  
          name :'Kakigori',   
          anime :'Anohana',   
          category :'Desserts',   
          type :'Desserts',   
          cookTime :'15 minutes',   
          rating :4.7,   
          ratingCount :75,   
          description :'Fluffy shaved ice topped with sweet syrup and condensed milk.',   
          image :'20.png'   
     }     
];



const sectionCenter = document.querySelector(".recipes");
const btnContainer = document.querySelector(".filter-bar");
const searchInput = document.querySelector("#search-input"); 

window.addEventListener("DOMContentLoaded", function () {
  displayRecipes(recipes);
  displayRecipeButtons();
});

function displayRecipes(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
        <div class="recipe">
            <div class="recipe-image">
                <img src=${item.image} alt=${item.name}>
                <span class="anime-tag">${item.anime}</span>
            </div>
            <div class="recipe-content">
                <h3>${item.name}</h3>
                <div class="recipe-info">
                    <span>🕒 ${item.cookTime}</span>
                    <span>⭐ ${item.rating} (${item.ratingCount})</span>
                </div>
                <p>${item.description}</p>
               
            </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayRecipeButtons() {
  const categories = recipes.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-button" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-button");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const recipeCategory = recipes.filter(function (recipeItem) {
        if (recipeItem.category === category) {
          return recipeItem;
        }
      });
      
      if (category === "All") {
        displayRecipes(recipes);
      } else {
        displayRecipes(recipeCategory);
      }
    });
  });
}

searchInput.addEventListener("keyup", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(function (recipe) {
      return recipe.name.toLowerCase().includes(searchTerm);
    });
    displayRecipes(filteredRecipes);
  });
  