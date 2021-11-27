//DONE 1.) Create a Menu View on the Main Page that displays all of the Items in the Menu.
//DONE 1.1) Items in the Menu should be in a Card Component, it should display the Item Image, Item Price, and Item Name.
//DONE 1.2) Each Card should have 1 button to redirect to the Items Details
//DONE 1.3) Items that have a quantity of 0 should not be displayed here

// 2.) Create an Item Details View that display the Details of the Item such as Img, Price, Category, and a short Description, edit the Items Array to add a short Description of the Item
//DONE 2.1) The Item Details Page should have one button to add the Item to the Cart.
//DONE 2.2) The Item Details Page should have 2 buttons to either increment or decrement the quantity of the item and an input box in the middle to input quantity
//DONE 2.3) The quantity of the item should be reflected in the Cart
//DONE 2.4) The quantity of the item should not go below 0, and should not go above the available quantity/stock of the item

// 3.) Create a Cart View Page that displays all of the items the user has added to his Cart.
//DONE 3.1) Each Item on the Cart should also be a component that displays the Items Image, Item Name, and Item Price
//DONE 3.2) Each Cart Item Card should have 2 buttons to increment or decrement the quantity of the item and an input box in the middle to input quantity
//DONE 3.3) The total price of all the items should be reflected in the Cart
//DONE 3.4) Display an Input at the bottom of the Cart that allows the user to input a coupon code and apply the discount to the total price
//DONE 3.5) Display an Input at the bottom of the Cart that allows the user to input his money
//DONE 3.6) Display a button at the bottom of the Cart that allows the user to checkout
//DONE 3.7) Pressing the checkout button should first check if the user has enough money, if he does not it should display an error message. If Users money is enough for the total price, it should display a success message and clear out the cart
//DONE 3.8) Each Cart Item Card should have a button to remove the item from the Cart

//Notes:
//1. The quantity in the items array will not increase or decrease based on orders, it will always remain the same(e.g if beef has 5 quantity and a user buys 2, the quantity/stock in the item array will still stay at 5)

//2. Persistence of Data is not required

//3. Coupon Codes : "menu50"=> provides a 50% discount, "menu20"=> provides a 20% discount, "menu10"=> provides a 10% discount, "menu200flat"=>provides a -200 discount if the total price is more then 1000, if not coupon should not work

//4. You are free to use Global state management or vuex, although not required

//5. You are free to use any libraries that might help you in this project, but not required

//6. Grading is 70% functionality, 15% Presentation, 15% Error Trapping(not allowing user to enter negative quantity, not allowing user to input negative cash, not allowing user to add item quantity more than current items stock, etc2)
[
  {
    id: 1,
    name: "Bacon",
    price: 250,
    quantity: 32,
    category: ["Meat"],
    img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
  },
  {
    id: 2,
    name: "Fish",
    price: 150,
    quantity: 8,
    category: ["Seafood", "Fresh"],
    img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
  },
  {
    id: 3,
    name: "Chicken",
    price: 200,
    quantity: 9,
    category: ["Poultry", "Fresh"],
    img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
  },
  {
    id: 4,
    name: "Beef",
    price: 300,
    quantity: 0,
    category: ["Meat"],
    img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
  },
  {
    id: 5,
    name: "Soy Sauce",
    price: 50,
    quantity: 42,
    category: ["Sauce", "Seasoning"],
    img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
  },
  {
    id: 9,
    name: "Egg",
    price: 10,
    quantity: 22,
    category: ["Dairy"],
    img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
  },
  {
    id: 11,
    name: "Pork",
    price: 200,
    quantity: 4,
    category: ["Meat"],
    img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
  },
];
