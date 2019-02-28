# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)

Originally I opted to follow the prototype v.2  design and I made good progress. However, as I started working on the responsive design the CSS was not smooth and my biggest problem was moving the 'Add to cart' button into the product item. Using position relative was not ideal but it worked. Another issue was moving the cart to upper right corner. I did manage this by moving the CartContainer component above the Title component. Looking back I simply could have placed both in a container and used display flex, and float to their respective sides. In any case, after finishing this first draft I moved on to the cart logic.
  
After completing the cart functionality I returned to complete the responsive design. I am familiar with using media queries to alter CSS rules at a given screen or device size. However, I restarted all the CSS in order to start with flexible to have better control on moving elements. I also chose to follow the prototype v.1 design to start completely fresh and not to try to check and rewrite the CSS rules. The biggest issue I had and couldn't resolve properly was manipulating the items in the 'Cart" and in the 'Product List independent of one another. For example, in the 'Cart' the element texts have limited mobility due to inheriting CSS rules from the Product component. As I mentioned before the 'Add to cart' button was moved with position relative. I wasn't sure how, if at all possible, to move a button into another component unless I created a button component but that would be inefficient.

Three breakpoints were assigned in order to use for the responsive design. I completed those three but I added a couple more in between in order to create a smoother change when scrolling screen sizes. With more time I would have wanted to have the cart render on a different page and when a user added an item only the 'Your cart is empty' text would change to the total amount. By clicking the cart element a user would then see the items and add, decrease, and remove as well. In this way, I could have styled the cart more closely to the prototype.

<h3>1280px</h3> 
  
![1280](https://user-images.githubusercontent.com/32649354/53599781-db130e80-3b5c-11e9-899d-e99eab064b55.png)

<h3>768px</h3>

![768](https://user-images.githubusercontent.com/32649354/53599837-00a01800-3b5d-11e9-8c91-0ba74a950155.png)

<h3>360px</h3> 

![320](https://user-images.githubusercontent.com/32649354/53599881-157cab80-3b5d-11e9-86f2-93591a47f958.png)

2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)

I studied the action and reducer code from "Add to cart' in order to create the 'Delete from cart' feature. To see if an action was called and the state changed I implemented the Redux Dev Tool in order to monitor the state. Just as 'Add to cart' retrieved the state in order to add an item, so did the 'Delete from cart' retrieved the state and deleted an item based on its id. Originally I placed the 'Delete' in the products container however, I soon realized it was meant to be in the cart and moved it soon after. 

Creating the 'Increase quantity' and 'Decrease quantity' features would essentially be 'Add' and 'Delete' but only effecting the quantity. I had issues with the 'Increase and 'Decrease' actions not running as it was evident in the redux dev tool. Correcting typos fixed this and by trying the code and checking the redux tool I was able to confirm that each increased and decreased item referred to the same id and pin. I also added logic to the buttons so that when increasing is allowed when there is the inventory available else the button is disabled. The same logic for the decrease is applied except when there is available quantity in the cart. With more time I would have explored working on the 'Checkout' feature, having the cart disabled, and showing an empty cart in a separate webpage.

3. [Hook Up Product API](/tasks/03-product-api.md)

Initially I overcomplicated the soultion by creating two sperate files for fetching data and connecting to the endpoint. I did not connect to the API and therefore opted to use the Shop.js file instead. With some research I was able to send a request to the API and consol log the response which returned an array of objects. My biggest issue was getting this data to render on to the page. Also, while researching online I found that the 'getProducts' code could be shortened if the 'timeout' was never used. I found an online refernce that mapped through and array of objects and then assigned the key and value pairs to a variable. In doing so, each obejct was built with the correct values. By following this code I was able to retrieve each object/item with their id title, and value. Where as before I returned the whole array I now had access to each object inidividually. However, my final issue was being able to render this data which after much resaerch I couldn't solve. Most of the solutions I encountered reveloved around setting the state to the values of the object. This was not goal as I was not dealing with JSX, components, or React for that matter. With more time I would pair program with someone else and search more on fetching and rendering data with JavaScript and not with React.  


