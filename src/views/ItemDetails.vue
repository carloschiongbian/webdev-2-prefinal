<template>
    <div class="details-container">
        <div class="item-card">
            <img v-bind:src="$route.query.img" />
            <h1>{{ $route.query.name }}</h1>
            <h2>{{ $route.query.category }}</h2>
            <h2>Quantity:{{ $route.query.quantity }}</h2>
            <h2>P{{ $route.query.price }}</h2>
            <h3>{{ $route.query.description }}</h3>
            <div class="quantity-control">
                <button type="button" name="subtract" v-on:click="changeQuantity('SUBTRACT')"> - </button>
                <input type = "number" name="quantity" v-model="item_count" /> 
                <button type="button" name="add" v-on:click="changeQuantity('ADD')"> + </button>
            </div> 
            <router-link to="/" class="router"><button type="button" name="cart-btn" v-on:click="addToCart()">Add to Cart</button></router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ItemDetails',
    props:[
        'id',
        'name',
        'price',
        'img',
        'quantity',
        'category',
        'description'
    ],
    
    data() {
        return {
            item_count: 1, 
            user_cart: [],
            food_item_details: {
                id: null,
                name: null,
                price: null,
                img: null,
                no_of_items: null
            },
        }
    },

    methods: {
    
        changeQuantity: function(action){
            switch(action){
                case "ADD":
                    if(this.item_count == this.$route.query.quantity){
                        break;
                    } else {
                        this.item_count += 1; 
                    } 
                    break;
                case "SUBTRACT":
                    if(this.item_count == 1){
                        break;
                    } else {
                        this.item_count -= 1;
                    }                    
                    break;
            }
        },

        addToCart: function(){
            
            let food_item_details = {
                id: this.$route.query.id,
                name: this.$route.query.name,
                price: this.$route.query.price,
                img: this.$route.query.img,
                no_of_items: this.item_count
            };    

            if(localStorage.getItem("user_cart") == null) {
                var retrieved_data = JSON.parse(localStorage.getItem("user_cart") || "[]");
                retrieved_data.push(food_item_details);
                localStorage.setItem("user_cart", JSON.stringify(retrieved_data));

            } else if (localStorage.getItem("user_cart") != null) { 
                retrieved_data = JSON.parse(localStorage.getItem("user_cart"));
                retrieved_data.push(food_item_details);
                localStorage.setItem("user_cart", JSON.stringify(retrieved_data));
            }
        }
    }
}

</script>

<style>
@import '../public/css/ItemDetails/itemdetails.css';
</style>