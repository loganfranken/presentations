# Introduction to Web Accessibility

A talk I gave on web accessibility at the University of California, Santa Barbara.

## Tips

### General

* Use semantically-meaningful markup
* Keep HTML, CSS, and JavaScript separate ("separation of concerns")
* Use "progressive enhancement"
* Use valid, standards-compliant markup and styling

#### Resources

* [WCAG 2.0 - G115: Using semantic elements to mark up structure](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G115)
* [WCAG 2.0 - G134: Validating Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G134)
* [WCAG 2.0 - G140: Separating information and structure from presentation to enable different presentations](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G140)
* [WCAG 2.0 - G192: Fully conforming to specifications](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G192)
* [WCAG 2.0 - H49: Using semantic markup to mark emphasized or special text](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H49)
* [UCOP EA - Use valid markup and styles](http://www.ucop.edu/electronic-accessibility/web-developers/use-valid-markup-and-styles.html)

### Structuring Content

* Order content meaningfully
* Organize content consistently across pages

#### Resources

* [WCAG 2.0 - G57: Ordering the content in a meaningful sequence](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G57)
* [WCAG 2.0 - G61: Presenting repeated components in the same relative order each time they appear](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G61)
* [WCAG 2.0 - G197: Using labels, names, and text alternatives consistently for content that has the same functionality](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G197)

### HTML Document

* Specify the `lang` attribute on the parent HTML element
* Provide a clear, descriptive title for your web page
* Begin your web page's title with the most important identifying information first

#### Resources

* [WCAG 2.0 - H57: Using language attributes on the html element](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H57)
* [WCAG 2.0 - G88: Providing descriptive titles for Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G88)

## Headings

* Use descriptive headings
* Use heading elements (`h1` - `h6`) only for actual headings
* Nest heading elements appropriately (e.g. `h3` is a subheading beneath `h2`)
* *Do not* use heading elements just to style text
* *Do not* skip heading levels (e.g. use `h4` as a subheading beneath a `h2`)
* *Do not* use multiple `h1` headings within a page (pre-HTML5) or within a sectioning element (HTML5)
* Understand how use of headings has changed in HTML5

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H42
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H69
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G130
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G141
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Headings_in_HTML5
* http://www.ucop.edu/electronic-accessibility/web-developers/use-headings-appropriately.html

## Images

* Use the `alt` attribute ("alt text") on `img` elements
* Provide a short description for the "alt text"
* Use the `longdesc` attribute to provide additional information
* Use a "null" value for the `alt` attribute on purely decorative images (e.g. `alt=""`)
* Use CSS techniques (background images, image replacement) to insert purely decorative images

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H37
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H67
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/C9
* http://www.ucop.edu/electronic-accessibility/web-developers/use-alt-attributes-appropriately-on-all-images.html
* http://www.ucop.edu/electronic-accessibility/web-developers/use-plain-text-for-text.html

## Input Labels

* Use `label` elements with `input` elements in forms
* Use descriptive text for `label`s
* Position `label`s so that the relationship between `input` and `label` is clear
* Use CSS techniques to include the `label` even when it is not part of a page's visual interface
* Use `fieldset` and `legend` for a group of related `input` elements

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H44
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H65
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G162
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G167

## Links

* Use descriptive text for links
* Avoid opening new windows
* *Do not* use non-descriptive phrases, such as "click here"
* *Do not* use the URL of the link as the link's text

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H30
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H83
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G91
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G200
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G201
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR24
* http://www.ucop.edu/electronic-accessibility/web-developers/use-descriptive-text-for-links.html
* http://www.ucop.edu/electronic-accessibility/web-developers/use-unique-names-for-links.html
* http://www.ucop.edu/electronic-accessibility/web-developers/inform-users-when-a-link-opens-in-a%20new-%20window.html

## Color

* For text less than 18 point if not bold and less than 14 point if bold, ensure a contrast ratio of at least 4.5:1 between text and background behind text
* For text at least 18 point if not bold and at least 14 point if bold, ensure a contrast ratio of at least 3:1 between text and background behind text
* Do not rely solely on color to denote an important element

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G14
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G183
* http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast
* http://www.ucop.edu/electronic-accessibility/web-developers/maintain-contrast-between-text-and-background-colors.html

## Tables

* Use tables to represent tabular data
* Make use of all of the appropriate table elements and attributes (`caption`, `summary`, `thead`, `scope`, etc.)
* *Do not* use tables to control visual layout

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H39
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H43
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H51
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H63
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H73

## Form Validation

* Clearly denote required fields
* Clearly define the desired format for input, providing examples
* Clearly explain which fields did not pass validation and why
* Use HTML5 input validation attributes (`required`, etc.)
* Allow user to easily navigate from error message to input that caused the error
* Upon a validation error, set the browser's `focus` to the validation error message or input that caused the validation error
* Upon a validation error, suggest alternative valid input values
* Allow the user to review input values before submitting
* Provide feedback when a form is successfully submitted

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G83
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G84
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G85
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G89
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G98
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G139
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G177
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G184
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G199
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H90
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR32

## Keyboard Support

* Ensure that your website can be navigated using just a keyboard
* When specifying mouse-specific events with JavaScript (e.g. `onclick`), provide keyboard alternatives (e.g. `onkeypress`)
* *Do not* create a "keyboard trap" or "tab loop" that can only be exited with a mouse
* Only adjust `taborder` if necessary

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G21
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G202
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR2
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR20
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR35
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H4

## Navigation

* Provide links to "skip" to the main area of content
* Provide links to related web pages
* Provide a directory of pages within a website (e.g. sitemap or table of contents)
* Provide users with the ability to search your website
* Provide "breadcrumb" navigation to assist users in navigating your website
* Clearly indicate the user's current location within the website and how it relates to the rest of the website
* Clearly identify how the current web page relates to other web pages within the website

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G63
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G64
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G65
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G123
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G124
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G125
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G126
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G127
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G128
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G161
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G185
* http://www.ucop.edu/electronic-accessibility/web-developers/use-skip-navigation-links.html

## Fonts

* Keep line width (measure) to 80 characters or less
* Keep line spacing (leading) to at least a space-and-a-half within paragraphs
* Keep paragraph spacing to at least 1.5 times larger than the standard leading
* Use relative font size units (e.g. `em`)
* *Do not* justify text

### Resources

* http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-visual-presentation
* http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-scale

## Interaction

* Allow users enough time to interact with content
* Clearly highlight areas with focus
* Clearly define how a user submits a form
* *Do not* rapidly blink elements
* *Do not* change context when an element receives focus

### Resources

* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G76
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G107
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G149
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G165
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G195
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H32
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H84
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/C15
http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR19
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR31
* http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR33
* http://www.w3.org/TR/WCAG20/#seizure-does-not-violate