A wrapper for Jesse Pollack's [jessepollak.github.io/card]() credit card UI:

![card](http://i.imgur.com/qG3TenO.gif)

For more info see [Jesse Pollack's repo](jessepollak.github.io/card).

### Installation ###

```
    meteor add juto:jessepollack-card
```

### Example ###

HTML:

```html
    <template name="creditCardCheck">
      <div class='card-wrapper'></div>
      <form id="cc">
        <input type="text" name="number">
        <input type="text" name="first-name"/>
        <input type="text" name="last-name"/>
        <input type="text" name="expiry"/>
        <input type="text" name="cvc"/>
      </form>     
    </template>
```

JS:

```js
    Template.creditCardCheck.onRendered(function(){
      this.$('#cc').card({
        // a selector or DOM element for the container
        // where you want the card to appear
        container: '.card-wrapper', // *required*
        formSelectors: {
          nameInput: 'input[name="first-name"], input[name="last-name"]'
        }
      });
    });

```