# WebBlocks UCCSC Demo

A demo of the WebBlocks framework for a talk I gave with Eric Bollens from UCLA at the
2013 University of California Computing Services Conference (UCCSC).

##Start (`demo-0.html`)

This is the base file that we will edit to demonstrate WebBlock's functionality. The only part of the WebBlocks API we are
using at this stage is the `.container` class to provide our base container.

For this demo, our build of WebBlocks was built using the Bootstrap adapter.

##Step 1 (`demo-1.html`): Add a Button

To start, we add [button entities](http://ucla.github.io/WebBlocks/doc/#API/Entity/Button) as "Read More" links to the 
news articles.

For demonstration purposes, we add size modifier classes to the buttons (`.small` and `.mini`).

##Step 2 (`demo-2.html`): Add Navigation

Next, we add a [navigation list](http://ucla.github.io/WebBlocks/doc/#API/Entity/Nav/List) with the main navigation
links of our website.

##Step 3 (`demo-3.html`): Add a Login Form

After adding the navigation, we add a login form using WebBlock's
[form API](http://ucla.github.io/WebBlocks/doc/#API/Entity/Form).

##Step 4 (`demo-4.html`): Create a 3-Column Grid Layout

Now that we have the basic components of the layout, we place them in a three-column grid using the
`.row` and `.panel-#` classes.

##Step 5 (`demo-5.html`): Control Layout Collapsing

On our current page, the login form falls beneath the rest of the content when collapsing to a single-column layout for
smaller viewports. Instead, we would like the login form to appear right below the navigation.

For this step, we use nested rows to control how the layout collapses, keeping the login form on the right for larger
viewports, but shifting it to the top using a right-aligned nested row when the layout collapses for smaller viewports.

##Step 6 (`demo-6.html`): Add Colors

For our next step, we add colors to the page, including adding:

* A [message entity](http://ucla.github.io/WebBlocks/doc/#API/Entity/Message) with the `error` mood color and the `gradient` color modifier
* `primary` brand coloring to the webpage title's text (with `.text-primary`)
* `secondary` brand coloring to the login form's button

##Step 7 (`demo-7.html`): Fine-tune Layout Collapsing

Next, let's say we want to display the news updates in a three-column layout that progressively breaks down into
a single column-layout as the size of the viewport shrinks. In this step, we use the `collapse` classes
(`.medium-collapse` and `.small-collapse`) to finetune exactly how and when the grid collapses.

##Step 8 (`demo-8.html`): Hide and Show Content

Finally, we add the `visibility` classes to progressively hide the descriptions for the news items as the
viewport shrinks.