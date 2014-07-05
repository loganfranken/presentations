# Responsive Tables

(This information is based on content from a [wiki article](https://github.com/ucla/WebBlocks/wiki/Research%3A-Responsive-Tables) researching responsive table solutions for the WebBlocks responsive toolkit project)

## Problem

Tabular data presents an especially challenging issue for responsive design: both the structure and integrity of the data should be maintained while the actual appearance of the table should change significantly to meet the needs of compact viewports.

## Solutions

### Linearized Table

On smaller viewports, flip the table into a linear stack of rows with the title of the column on the left and the data from the row to the right.

#### Implementations

* [Source](http://css-tricks.com/responsive-data-table-roundup/) / [View Demo](http://css-tricks.com/examples/ResponsiveTables/responsive.php): Set all of the table elements to block-level and insert hard-coded column names with `:before` in CSS
* [Source](http://mobifreaks.com/user-interface/responsive-and-seo-friendly-data-tables/) / [View Demo](http://www.mobifreaks.com/wp-content/demos/Responsive-and-SEO-Friendly-Data-Tables/): Use a series of `div`s to create a quasi-table in the markup. Retain the block-level properties of the `div`s for the responsive format and use `data-*` attributes to dynamically plug in the responsive column values
* [Source](http://css-tricks.com/responsive-data-table-roundup/) / [View Demo](http://jsbin.com/arixic): A "mobile-first" approach, in which you begin with a definition list and then style it as a table for wider viewports
* [Source](http://julian.pustkuchen.com/en/node/469) / [View Demo](http://www.webks.de/demos/jquery.webks-responsive-table/demo/webks_responsive_tables.html): Create a linearized version of a table as a definition list using JavaScript that only displays on smaller viewports. Provide an option for switching the table back to its original form, no matter the viewport size
* [Source](http://jquerymobile.com/demos/1.3.0-beta.1/docs/tables/table-reflow.html) / [View Demo](http://jquerymobile.com/demos/1.3.0-beta.1/docs/tables/table-reflow.html): Add a title to each of the cells using JavaScript and only show it for smaller viewports when the `td` and `th`s will also be flipped to `display: block`.
* [Source](http://codepen.io/geoffyuen/pen/FCBEg) / [View Demo](http://codepen.io/geoffyuen/pen/FCBEg): Use `data-*` attributes to inject column headers into a linearized table format on smaller viewports

### Pinned Column

"Pin" the left-most column (or header row) and wrap the neighboring columns in a scrolling container.

#### Implementations

* [Source](http://www.zurb.com/playground/responsive-tables) / [View Demo](http://www.zurb.com/playground/playground/responsive-tables/index.html): Using JavaScript, create a duplicate of the table ("pinned" table), hide every column but the first column, and position it absolutely over the original table. Hide the first column in the original column and add some margin to the left to line it up with the pinned table positioned above it
* [Source](http://dbushell.com/2012/01/05/responsive-tables-2/) / [View Demo](http://dbushell.com/demos/tables/rt_05-01-12.html): Float the `thead` to the left so that it acts as a pinned column (essentially flipping the table on its side) and apply `overflow-x` to the `tbody` to allow for scrolling to the left and right

### Chart Summary

Create a image-based chart summary of the tabular data.

#### Implementations

* [Source](http://css-tricks.com/responsive-data-table-roundup/) / [View Demo](http://jsbin.com/emexa4): Create a pie graph of the table data using the [jQuery Visualize plugin](http://filamentgroup.com/lab/update_to_jquery_visualize_accessible_charts_with_html5_from_designing_with/) and display the pie chart instead of the table on smaller viewports

### Link to Full Version

In smaller viewports, simply switch the table to a link to view the full-sized table.

#### Implementations

* [Source](http://css-tricks.com/responsive-data-table-roundup/) / [View Demo](http://jsbin.com/apane6/14): On smaller viewports, shrink the table to a miniature version that can be clicked/tapped. Once tapped, the table expands to full width and everything else on the page is hidden
* [Source](https://github.com/kthornbloom/Responsive_Tables) / [View Demo](http://kthornbloom.com/responsivetables/): On smaller viewports, display a button that opens the full table in a new window

### Hide Columns

Simply hide the columns that are less important on smaller viewports.

#### Implementations

* [Source](http://www.irishstu.com/stublog/2011/12/13/tables-responsive-design-part-2-nchilds/) / [View Demo](http://www.irishstu.com/stublog/wp-content/uploads/2011/12/table-childs.html): Use ID selectors and `nth-child` selectors to target rows and hide those based on the viewport size
* [Source](http://filamentgroup.com/lab/responsive_design_approach_for_complex_multicolumn_data_tables/) / [View Demo](http://filamentgroup.com/examples/rwd-table-patterns/): Developer assigns "essential" and "optional" CSS classes to the `th` elements of the table. Use JavaScript to loop through the table and assign these classes to the `td` elements along with a "header" attribute that connects the cell to its parent `th`. Only the "essential" classes will remain on smaller viewports. Also provide a checklist that will allow Users to add the columns back if they want to access the data, even though it won't fit
* [Source](http://jquerymobile.com/demos/1.3.0-beta.1/docs/tables/table-column-toggle.html) / [View Demo](http://jquerymobile.com/demos/1.3.0-beta.1/docs/tables/table-column-toggle.html): Hide and display the necessary columns using JavaScript
* [Source](https://github.com/nadangergeo/RWD-Table-Patterns) / [View Demo](http://gergeo.se/RWD-Table-Patterns/): Use `data-*` attributes to mark columns with priority and then hide columns on smaller breakpoints, providing a menu to show them again

### Color-Coded Data List

On smaller viewports, change the table into a color-coded list of data, where column headers and column values have the same color.

#### Implementations

* [Source](http://css-tricks.com/responsive-data-table-roundup/) / [View Demo](http://hawidu.com/responsivetables/): On smaller viewports, switch everything to `display: inline` and use `nth-child` selectors to add coloring to cells

### Expand-Collapse Rows

On smaller viewports, hide some of the columns in a content area underneath the row and display a control for expanding/collapsing this content area.

#### Implementations

* [Source](http://css-tricks.com/footable-a-jquery-plugin-for-responsive-data-tables/) / [View Demo](http://themergency.com/footable-demo/responsive-container.htm): Hide columns tagged with specific `data-*` attributes on smaller viewports. When User clicks the row, add another row beneath the clicked row, containing this data.