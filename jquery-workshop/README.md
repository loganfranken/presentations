# jQuery: JavaScript Made Easy

A workshop that I gave for the University of California, Santa Barbara Web Standards Group (WSG). Jeff Pignataro gave the first half of the workshop.

## jQuery Object

You interact with the jQuery API through a jQuery object.

This object is created every time you select elements with the universal jQuery selector function (``$``) and contains references to all of the selected elements as well as the jQuery API.

To further demonstrate this, notice how the jQuery selector function is defined in the jQuery source:

```js
// Define a local copy of jQuery
jQuery = function( selector, context ) {

	// The jQuery object is actually just the init constructor 'enhanced'
	return new jQuery.fn.init( selector, context, rootjQuery );

},
```

As you can see, a new instance of the jQuery object is constructed whenever this function is called.

## Version Lines of jQuery

There are now two "version lines" of jQuery: __jQuery 1.x__ and __jQuery 2.x__. Both of these version lines have the same API and receive the same updates; the key difference is that jQuery 1.x supports Internet Explorer 6, 7, and 8, while jQuery 2.x _does not_ support these legacy browsers.

## Events

In JavaScript, events will generally "bubble" upwards from where they occurred.

For example, if a user clicks a ``button`` element on a page that is within a ``div``, the browser will signal that the user clicked the ``button`` and then signal that the user clicked the ``div`` (and so on up to the global ``document`` object).

Due to event bubbling, jQuery allows you to bind events in two different ways: __directly__ or __through delegation__.

When _binding directly_, you attach the event handler directly to the element:

```js
$('.select-first-btn').click(onClickSelectFirstBtn);
```

Note that the ``click()`` method is shorthand for the following:

```js
$('.select-first-btn').on('click', onClickSelectFirstBtn);
```

Whenever the user clicks an element with class `.select-first-btn` (or a child of that element), the ``onClickSelectFirstBtn()`` function will fire.

In contrast, when _binding through delegation_, you do not attach the event handler directly to the element; instead, you attach the event handler to an element that will dynamically watch for bubbled events.

For example:

```js
$('.todo-list').on('click', 'li', toggleSelected);
```

In this example, note that we have provided an additional parameter to the ``on()`` function. Rather than binding an event directly to an element, we are asking for all elements with class ``.todo-list`` to watch for click events triggered by their children that match the selector ``li``. If they detect a click event _and_ the event was triggered by a ``li`` element, _then_ fire the ``toggleSelected`` function.

Event delegation can be useful in two key scenarios.

First, if you have a large amount of elements with the same event handler, it can be more efficient to delegate the parent of these elements to watch for a bubbled event rather than assign a click handler to each of the elements.

Second, if you are dynamically adding elements to a page, these elements will not have event handlers assigned to them unless you bind the event handlers to each newly added element. In contrast, you could delegate the container where these elements are being added to watch for a bubbled event and each of these elements would receive event handlers without needing to bind them directly. 

However, you would not want to use event delegation in all scenarios, as the extra effort involved in continuously checking bubbled events against a selector can be wasteful.

## Selectors and Filters
	
The jQuery API supports a [rich set of selectors and filters](http://api.jquery.com/category/selectors/).

## DOM Traversal

The jQuery API allows for flexible [DOM Traversal](http://api.jquery.com/category/traversing/).

## DOM Manipulation

The jQuery API allows for flexible [DOM Manipulation](http://api.jquery.com/category/manipulation/).