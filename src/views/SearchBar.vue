<template>
  <div class="container">
    <label
      >Input food:
      <input
        type="text"
        name="input-box"
        v-model="search"
        v-on:keyup="searchFoods(search)"
      />
    </label>
    
    <div class="menu-layout">

    
    <!-- v-bind:key is to let each element have a unique identifier -->
    <div v-bind:key="foods.id" v-for="foods in (result.filter((data) => {return data.quantity > 0}))">
      <div v-if="foods.quantity > 0">
        <FoodCard 
          :id="foods.id" 
          :name="foods.name" 
          :price="foods.price" 
          :img="foods.img" 
          :quantity="foods.quantity" 
          :description="foods.description" 
          :category="foods.category" 
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import FoodCard from '../components/FoodCard.vue';

export default {
  
  name: 'SearchBar',
  components: {
    'FoodCard': FoodCard
  },

  data() {
    return {
      food: [
        {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 32,
          category: ["Meat"],
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
          description: "A great choice to add to a breakfast of champions, or a packed burger!"
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 8,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          description: "A good source of Omega-3 and protein!"
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          description: "Chicken is a food which can be prepared in many ways! Grilled, baked, fried, or steamed, it's always a good choice"
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 0,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          description: "Imported all the way from the farmlands of Japan, this beef is top-of-the-line, and is highly sought after for being 'melt-in-your-mouth' quality"
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 42,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          description: "A great seasoning to pair with a lot of foods!"
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 22,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          description: "Fresh farm eggs harvested from free-range chickens"
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 4,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          description: "Our pigs are only fed with olives which helps in making high quality meat!"
        },
      ],

      result: [
        {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 32,
          category: ["Meat"],
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
          description: "A great choice to add to a breakfast of champions, or a packed burger!"
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 8,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          description: "A good source of Omega-3 and protein!"
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          description: "Chicken is a food which can be prepared in many ways! Grilled, baked, fried, or steamed, it's always a good choice"
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 0,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          description: "Imported all the way from the farmlands of Japan, this beef is top-of-the-line, and is highly sought after for being 'melt-in-your-mouth' quality"
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 42,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          description: "A great seasoning to pair with a lot of foods!"
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 22,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          description: "Fresh farm eggs harvested from free-range chickens"
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 4,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          description: "Our pigs are only fed with olives which helps in making high quality meat!"
        },
      ],
      current_cart:[],
      search: "",
    };
  },

  mounted: function() {
    this.result = this.result.filter((data) => { return data.quantity > 0 }); 
  },

  methods: {
    searchFoods: function (name) {
      this.result = [];
      this.food.forEach((food) => {
        if(food.name.includes(name.charAt(0).toUpperCase() + name.slice(1, name.length)) ||food.name.includes(name)) {
          this.result.push(food);
        } 
      });
    },
  },
};
</script>

<style scoped>
@import "../public/css/SearchBar/searchbar.css";
</style>
