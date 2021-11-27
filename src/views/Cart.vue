<template>
    <div class="cart-container">
        <h1> Total Price of All Items: P{{ (this.total_amount - (this.total_amount * this.discount)).toLocaleString("en-US",this.decimals) }} </h1>
        <div class="cart-layout">
            <div class="display-items">
                <div v-for="foods in current_cart" v-bind:key="foods.id">
                    <div v-for="info in foods" v-bind:key="info.id">
                        <div class="card">
                            <button type = "button" name = "delete-item" v-on:click="removeItem(info.id)"><i class="fa fa-trash"></i></button>
                            <FoodCard 
                                :id="info.id" 
                                :name="info.name" 
                                :price="info.price" 
                                :img="info.img" 
                                :quantity="info.quantity" 
                                :description="info.description" 
                                :category="info.category" 
                            />
                            <div class="quantity-control">
                                <button type="button" name="subtract" v-on:click="changeQuantity('SUBTRACT', info.id)"> - </button>
                                <input type = "number" name="quantity" v-model="info.no_of_items" readonly/> 
                                <button type="button" name="add" v-on:click="changeQuantity('ADD', info.id)"> + </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-payment">
            <label>Input Payment: <input type = "number" v-model="user_payment" id = "money-input" placeholder="0" name = "money-input" min="0" v-on:keydown="validateMoney(target)" /> </label>
            <label>Discount Promos: 
                <select name="discount" id="discount" v-model="discount">
                    <option value="0">---</option>
                    <option value="0.5">menu50</option>
                    <option value="0.2">menu20</option>
                    <option value="0.1">menu10</option>
                    <div v-if="total_amount < 1000">
                        <option value="200">menu200flat</option>
                    </div>
                </select>
            </label>
            <button type = "button" name = "checkout" v-on:click="checkOut()">Check Out</button>
        </div>
    </div>
</template>

<script>

import FoodCard from '../components/FoodCard.vue';

export default{
    name: "Cart",
    components: {
        'FoodCard': FoodCard
    },
    data() {
        return {
            current_cart: [],
            total_amount: 0,   
            discount: 0,         
            user_payment: null,
            decimals: {decimals: 2},
            cart_count: 0,
            index: -1
        }
    },

    mounted: function(){
        var cart_data = JSON.parse(localStorage.getItem("user_cart"));
        this.current_cart.push(cart_data);
        let bill = 0;
        this.cart_count = this.current_cart.length;
        this.current_cart.forEach(item => {
            item.forEach(item => {
                bill = parseInt(item.price) * parseInt(item.no_of_items); 
                this.total_amount = this.total_amount + bill; 
            });
        });
    },

    methods: {

        discountPrice: function() {
            var rate = document.getElementById("discount").value;

            var savings = 0;
            savings = this.total_amount * parseInt(rate);
            console.log(this.total_amount);
            this.total_amount = this.total_amount - savings;
            
        },

        validateMoney: function () {
            document.getElementById("money-input").onkeyup = function(e){
                if(e.keyCode == 189){
                    alert("No Negative Values Allowed");
                    document.getElementById("money-input").value = "";
                    
                }
            };
        },

        removeItem: function (id) {
            var cart_data = JSON.parse(localStorage.getItem("user_cart")); 

            cart_data.forEach((data, ndx) => {
                if(data.id == id){
                    this.index = ndx;  
                }
            });
            
            cart_data.splice(this.index, 1);
            localStorage.setItem("user_cart", JSON.stringify(cart_data));
            window.location.reload();
        },

        checkOut: function() {
            if(this.user_payment >= (this.total_amount - (this.total_amount * this.discount))){
                alert("PAYMENT ACCEPTED!");
                localStorage.clear();
                window.location.replace("http://localhost:8080/#/")
            } else if(this.user_payment < this.total_amount) { 
                alert("PAYMENT FAILED");
            } 
        },

       changeQuantity: function(action, id){

           var cart_data = JSON.parse(localStorage.getItem("user_cart"));

           cart_data.forEach((data, ndx) => {
                if(data.id == id){
                    this.index = ndx;  
                }
            });

            switch(action){
                case "ADD":
                    if(cart_data[this.index].no_of_items == this.$route.query.quantity){
                        break;
                    } else {
                        cart_data[this.index].no_of_items += 1; 
                    } 
                    break;
                case "SUBTRACT":
                    if(cart_data[this.index].no_of_items == 1){
                        break;
                    } else {
                        cart_data[this.index].no_of_items -= 1;
                    }                    
                    break;
            }

            localStorage.setItem("user_cart", JSON.stringify(cart_data));
            window.location.reload();
        },
    }
}
</script>

<style>
@import "../public/css/Cart/cart.css";
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>