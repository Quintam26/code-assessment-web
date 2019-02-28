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

![1280](https://user-images.githubusercontent.com/32649354/53599781-db130e80-3b5c-11e9-899d-e99eab064b55.png)

2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)

3. [Hook Up Product API](/tasks/03-product-api.md)


