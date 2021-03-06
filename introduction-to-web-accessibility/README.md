# Introduction to Web Accessibility

A talk I gave with Adaptive Technology Specialist Mark Grosch
on web accessibility at the University of California, Santa Barbara (UCSB).

## Tips

### Structuring Content

* Order content meaningfully
* Organize content consistently across pages

#### Resources

* [WCAG 2.0 - G57: Ordering the content in a meaningful sequence](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G57)
* [WCAG 2.0 - G61: Presenting repeated components in the same relative order each time they appear](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G61)
* [WCAG 2.0 - G197: Using labels, names, and text alternatives consistently for content that has the same functionality](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G197)

### HTML Header

* Specify the `lang` attribute on the opening `html` tag
* Provide a clear, descriptive title for your web page
* Begin your web page's title with the most important identifying information first

#### Resources

* [WCAG 2.0 - H57: Using language attributes on the html element](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H57)
* [WCAG 2.0 - G88: Providing descriptive titles for Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G88)

### Headings

* Use clear, descriptive headings
* Nest heading elements correctly (e.g. `h3` is a subheading beneath `h2`)
* *Do not* use heading elements just to style text
* *Do not* skip heading levels (e.g. use `h4` as a subheading beneath a `h2`)
* *Do not* use multiple `h1` headings within a page
* Understand how use of headings has changed in HTML5 and screenreader support

#### Resources

* [WCAG 2.0 - G130: Providing descriptive headings](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G130)
* [WCAG 2.0 - G141: Organizing a page using headings](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G141)
* [WCAG 2.0 - H42: Using h1-h6 to identify headings](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H42)
* [WCAG 2.0 - H69: Providing heading elements at the beginning of each section of content](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H69)
* [Mozilla Developer Network - Sections and Outlines of an HTML5 Document](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Headings_in_HTML5)
* [UCOP EA - Use headings appropriately](http://www.ucop.edu/electronic-accessibility/web-developers/use-headings-appropriately.html)
* [Juicy Studio - The HTML5 outline algorithm and JAWS](http://juicystudio.com/article/html5-outline-algorithm-jaws.php)

### Images

* Use the `alt` attribute ("alt text") on `img` elements
* Provide a short description for the "alt text"
* Use a "null" value for the `alt` attribute on purely decorative images (e.g. `alt=""`)
* Avoid embedding text in images
* Use CSS to insert purely decorative images

#### Resources

* [WCAG 2.0 - H37: Using alt attributes on img elements](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H37)
* [WCAG 2.0 - H67: Using null alt text and no title attribute on img elements for images that AT should ignore](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H67)
* [WCAG 2.0 - C9: Using CSS to include decorative images](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/C9)
* [UCOP EA - Use alt attributes appropriately on all images](http://www.ucop.edu/electronic-accessibility/web-developers/use-alt-attributes-appropriately-on-all-images.html)
* [UCOP EA - Use plain text for text](http://www.ucop.edu/electronic-accessibility/web-developers/use-plain-text-for-text.html)
* [WebAIM - Decorative Images](http://webaim.org/techniques/alttext/#decorative)

### Input Labels

* Use `label` elements with `input` elements in forms
* Use CSS to include the `label` even when it is not part of a page's visual interface

#### Resources

* [WCAG 2.0 - H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H44)
* [WCAG 2.0 - H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H65)
* [WCAG 2.0 - G162: Positioning labels to maximize predictability of relationships](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G162)
* [WCAG 2.0 - G167: Using an adjacent button to label the purpose of a field](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G167)
* [WebAIM: Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/)

### Links

* Use descriptive text for links
* Avoid opening new windows (warn the user if you must)
* *Do not* use non-descriptive phrases, such as "click here"
* *Do not* use the URL of the link as the link's text

### Resources

* [WCAG 2.0 - G91: Providing link text that describes the purpose of a link](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G91)
* [WCAG 2.0 - G200: Opening new windows and tabs from a link only when necessary](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G200)
* [WCAG 2.0 - G201: Giving users advanced warning when opening a new window](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G201)
* [WCAG 2.0 - H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H30)
* [WCAG 2.0 - H83: Using the target attribute to open a new window on user request and indicating this in link text](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H83)
* [WCAG 2.0 - SCR24: Using progressive enhancement to open new windows on user request](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR24)
* [UCOP EA - Use descriptive text for links](http://www.ucop.edu/electronic-accessibility/web-developers/use-descriptive-text-for-links.html)
* [UCOP EA - Use unique names for links](http://www.ucop.edu/electronic-accessibility/web-developers/use-unique-names-for-links.html)
* [UCOP EA - Inform users when a link opens in a new window](http://www.ucop.edu/electronic-accessibility/web-developers/inform-users-when-a-link-opens-in-a%20new-%20window.html)
* [CSS Tricks - When to use target="_blank"](http://css-tricks.com/use-target_blank/)

### Color

* For text less than 18 point if not bold and less than 14 point if bold, ensure a contrast ratio of at least 4.5:1 between text and background behind text
* For text at least 18 point if not bold and at least 14 point if bold, ensure a contrast ratio of at least 3:1 between text and background behind text
* Do not rely solely on color to denote an important element

#### Resources

* [WCAG 2.0 - G14: Ensuring that information conveyed by color differences is also available in text](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G14)
* [WCAG 2.0 - G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G183)
* [WCAG 2.0 - Contrast (Minimum)](http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast)
* [UCOP EA - Maintain contrast between text and background colors](http://www.ucop.edu/electronic-accessibility/web-developers/maintain-contrast-between-text-and-background-colors.html)
* [WebAIM - Color Contrast Checker](http://webaim.org/resources/contrastchecker/)

### Tables

* Use tables to represent tabular data
* *Do not* use tables to control visual layout

#### Resources

* [WCAG 2.0 - H51: Using table markup to present tabular information](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H51)

### Form Validation

* Denote required fields
* Define the desired format for input, providing examples
* Explain which fields did not pass validation and why

#### Resources

* [WCAG 2.0 - G83: Providing text descriptions to identify required fields that were not completed](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G83)
* [WCAG 2.0 - G84: Providing a text description when the user provides information that is not in the list of allowed values](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G84)
* [WCAG 2.0 - G85: Providing a text description when user input falls outside the required format or values](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G85)
* [WCAG 2.0 - G89: Providing expected data format and example](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G89)
* [WCAG 2.0 - G98: Providing the ability for the user to review and correct answers before submitting](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G98)
* [WCAG 2.0 - G139: Creating a mechanism that allows users to jump to errors](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G139)
* [WCAG 2.0 - G177: Providing suggested correction text](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G177)
* [WCAG 2.0 - G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G184)
* [WCAG 2.0 - G199: Providing success feedback when data is submitted successfully](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G199)
* [WCAG 2.0 - H90: Indicating required form controls using label or legend](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H90)
* [WCAG 2.0 - SCR32: Providing client-side validation and adding error text via the DOM](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR32)

### Keyboard Support

* Ensure that your website can be navigated using just a keyboard
* Only adjust `tabindex` if necessary

#### Resources

* [WCAG 2.0 - G21: Ensuring that users are not trapped in content](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G21)
* [WCAG 2.0 - G202: Ensuring keyboard control for all functionality](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G202)
* [WCAG 2.0 - H4: Creating a logical tab order through links, form controls, and objects](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/H4)
* [WCAG 2.0 - SCR2: Using redundant keyboard and mouse event handlers](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR2)
* [WCAG 2.0 - SCR20: Using both keyboard and other device-specific functions](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR20)
* [WCAG 2.0 - SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/SCR35)
* [WebAIM - Keyboard Accessibility](http://webaim.org/techniques/keyboard/)
* [WebAIM - Tabindex](http://webaim.org/techniques/keyboard/tabindex)

### Navigation

* Provide links to "skip" to the main area of content
* Provide a sitemap
* Provide a search feature

#### Resources

* [WCAG 2.0 - G1: Adding a link at the top of each page that goes directly to the main content area](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1)
* [WCAG 2.0 - G63: Providing a site map](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G63)
* [WCAG 2.0 - G64: Providing a Table of Contents](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G64)
* [WCAG 2.0 - G65: Providing a breadcrumb trail](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G65)
* [WCAG 2.0 - G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G123)
* [WCAG 2.0 - G124: Adding links at the top of the page to each area of the content](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G124)
* [WCAG 2.0 - G125: Providing links to navigate to related Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G125)
* [WCAG 2.0 - G126: Providing a list of links to all other Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G126)
* [WCAG 2.0 - G127: Identifying a Web page's relationship to a larger collection of Web pages](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G127)
* [WCAG 2.0 - G128: Indicating current location within navigation bars](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G128)
* [WCAG 2.0 - G161: Providing a search function to help users find content](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G161)
* [WCAG 2.0 - G185: Linking to all of the pages on the site from the home page](http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G185)
* [UCOP EA - Use skip navigation links](http://www.ucop.edu/electronic-accessibility/web-developers/use-skip-navigation-links.html)
* [WebAIM: Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/)