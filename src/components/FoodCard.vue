<template>
    <div class="item-card">
        <img v-bind:src="img" />
        <h1>{{ name }}</h1>
        <h2>P{{ price }}</h2>
        <router-link 
        :to="{
            name:'ItemDetails', 
            query: {
            id: id,
            name: name, 
            price: price, 
            img: img,
            quantity: quantity,
            category: category,
            description: description
            },
        }"
        >
        <button type="button">Details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props:[
        'id',
        'name',
        'price',
        'img',
        'quantity',
        'category',
        'description'
    ]
}
</script>