# meteor-modal
Modal package for Meteor.

## Installation

```
$ meteor add pmteor:modal
```

## How to Use

```html
<template name="exampleModal"></template>

<template name="exampleConfirmModal">
  
  {{# if progress.get }} 
    Loading...
  {{/if}}
  <button class="js-confirm">Confirm</button>
  <button class="js-close">Close</button>
</template>
```

##### User events
```js
Template.example.events({
  'click .modal': Modal.open('example'),
  'click .confirm': Modal.confirm('exampleConfirm', () => {
    Modal.close(); // last modal close.
  })
});
```

##### Helpers
```js
Modal.closeAll() // All opened modal closed.
Modal.close(); // Last modal close.
```
