# WSG HTML5 Workshop

Two-part workshop on HTML5 for the UCSB Web Standards Group (WSG)

## Unanswered Questions

The following questions were asked during the presentation, but I was unable to answer them
(either due to time constraints or lack of knowledge on the topic).

### Can you restrict the selectable colors with the HTML5 color input?

There is currently no standard way to restrict the colors that a user can choose through
the HTML5 color input. You can, however, use a `datalist` to suggest certain colors to the user:

```html
<input type="color" id="user-color" name="color" list="colors" />
<datalist id="colors">
	<option>#FF0000</option>
	<option>#00FF00</option>
	<option>#0000FF</option>
</datalist>
```

See this [HTML5 Rocks article](http://updates.html5rocks.com/2012/08/datalist-for-range-color-inputs-offer-some-default-choices)
for more information.

### Should you use an unordered list for navigation links?

It's common practice in web development (and my personal preference) to use an unordered list for
the navigation of a website:

```html
<nav>
	<ul>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/work">Work</a>
	</ul>
</nav>
```

Whether or not this is a _best_ practice is still an area of debate. Chris Coyier of
[CSS-Tricks](http://css-tricks.com/wrapup-of-navigation-in-lists/) recently
[summarized the various opinions on the subject](http://css-tricks.com/wrapup-of-navigation-in-lists/).

### Which HTML5 elements are sectioning elements?

With HTML5, we are no longer restricted to only using a single set of descending headers (`h1` through `h6`) within our website. Instead, each "sectioning element" within the page can have its own set of headers. For example, we could have the following markup:

```html
<main>
	<h1>Department of Lorem Ipsum</h1>
	<section>
		<h1>About</h1>
		<p>"About" content</p>
	</section>
</main>
```

In the past, this would be invalid: the "About" header would need to be wrapped in an `h2` element to maintain a proper, semantic hierarchy of headers. However, in HTML5, the `section` element creates a new "sectioning context" where the `h1` can be used again and will still be seen as a child of the outer context.

[HTML5 Outliner](http://gsnedders.html5.org/outliner/) can be used to determine how browsers and screenreaders adhering to the HTML5 specification will parse the outline of your webpage.

Not every HTML5 element is capable of establishing this "sectioning context," however; the following HTML5 elements are ["sectioning elements"](http://www.w3.org/html/wg/drafts/html/master/dom.html#sectioning-content):

```
article
aside
nav
section
```

### How are the versions of jQuery split?

There are now two "version lines" of jQuery: **jQuery 1.x** and **jQuery 2.x**. Both of these version lines have the same API and receive the same updates; the key difference is that jQuery 1.x supports Internet Explorer 6, 7, and 8, while jQuery 2.x does not support these legacy browsers.