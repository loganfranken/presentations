# Responsive Design: Real Talk

This is a talk I gave at the 2013 Higher Ed Web West conference.

## Introduction

My name is Logan Franken; I am a web developer and designer at the Office of Financial Aid and Scholarships at the University of California, Santa Barbara

## Definitions and Concepts

### What is Responsive Web Design?

**Responsive Web Design (RWD)** is a newer approach to web design and development, where the website transforms to fit the needs of the user.

In most cases, the focus is on altering the website design to fit the **size of the user's browser**, although a responsive web design may encompass adapting to a number of constraints, including:

* [Bandwidth](http://css-tricks.com/bandwidth-media-queries/) (see [responsive images](http://css-tricks.com/which-responsive-images-solution-should-you-use/))
* [Pixel Density](http://www.html5rocks.com/en/mobile/high-dpi/) or Pixels Per Inch (PPI) (Retina Display)
* Battery Life
* [Distance From Computer Screen](http://webdesign.maratz.com/lab/responsivetypography/realtime/)

### Components of a Responsive Web Design

In general, RWD involves three components:

* **Media queries**: Allow you to scope CSS rules to a certain media type (desktop, print) with specific features (a screen size of a certain width)
* **Responsive media** (e.g. media, video)
* **Flexible grid**: Relatively sized columns and rows to provide a responsive foundation for the design

### Progressive Enhancement and Mobile First

**Progressive enhancement** refers to beginning with a baseline design targeted towards less capable devices and then layering in more advanced features for more capable devices. This is in contrast to **graceful degradation**, where your design is targeted towards more capable devices, but will still display and function (albeit with limited functionality) for less capable devices.

In this vein, **mobile first** is the practice of starting your responsive design by first creating a design catered towards limited mobile devices and then layering on top of this design to create an experience catered to devices with more capabilities.

In general, mobile devices and desktop computers are depicted at opposite ends of the capabilities spectrum. However, the reality is more complex: smartphones feature certain capabilities (geolocation, for example) that desktop computers lack. Thus, using a "mobile first" approach, you are given the opportunity to consider layering in capabilities only available to mobile devices while constructing a progressively enhanced experience.

### Other Approaches

A **device experience** approach refers to creating a separate website design that specifically targets a device (e.g. a "mobile site" or a "tablet site").

**RESS (Responsive + Server-Side Components)** is an approach introduced by Luke Wroblewski where responsive design and server-side detection are combined in a hybrid approach. For example, a server-side user agent detection framework like WURFL could be used to serve a more minimal image carousel to smartphones and then responsive design techniques could be used to fit the carousel to the exact capabilities of the device.

## Benefits

* **One Experience**
	* Develop and maintain one experience
	* Serve the same content to all Users
* **Future-Proof**
	* Adapt to all current devices
	* Adapt to all future devices

## Challenges

### New Design and Development Workflow

#### Problem

The standard web design workflow of translating a static Photoshop design mock-up to a fixed-width design is less effective in RWD: it's cumbersome to create mock-ups for all of the different possible versions of your design. A static mock-up also conflicts with the fluid and adaptive intents of responsive design.

Furthermore, you need to be careful that the mobile version of your responsive design doesn't seem like an afterthought or a lesser version of your desktop design.

#### Solutions

* **Planning**
	* Mood boards
	* Themes
	* Color schemes
* **Prototyping**
	* Sketch
	* Create interactive prototypes
	* Design in the browser
	* Break designs into modular components
* **Implementation**
	* Use a "mobile first" approach
	* Use a "design, resize until it breaks, design again" approach to establishing breakpoints
	* Use a rapid, iterative approach 

#### Resources

* [Where to Start](http://trentwalton.com/2013/02/07/where-to-start/)
* [Notes to an Agency Starting Their First Responsive Web Project](http://css-tricks.com/notes-agency-starting-their-first-responsive-web-project/)
* [Mobile First](http://www.lukew.com/ff/entry.asp?933)
* [An Event Apart: Responsive Design Workflow](http://www.lukew.com/ff/entry.asp?1617)
* [Style Tiles](http://styletil.es/)

### Bloat

#### Problem

Without care, your responsive design may end up sending the assets for all experiences to every user. Most critically, users on a slow mobile network may end up downloading large assets intended for desktop users with fast connections.

This discussion usually revolves around images. Unless you specifically employ a responsive images solution on your website, users on smaller devices will receive large images simply resized to fit their screen.

#### Solutions

* Simplify your design
* Optimize your codebase
* Serve assets appropriate to a device (use existing tools and frameworks)

#### Resources

* [Which responsive images solution should you use?](http://css-tricks.com/which-responsive-images-solution-should-you-use/)
* [Trimming the Fat](http://www.paulrobertlloyd.com/2012/11/trimming_the_fat/)

### New Patterns

#### Problem

User interface patterns that work in a desktop context may not work as well in a mobile or tablet context.

Drop-down lists or mega menus that appear when a user hovers, for example, will no longer work as a hover state does not exist on a mobile device.

Advertisements present another challenge: advertisers must now become comfortable with the fact that their advertisement will no longer appear in a static location within the design.

#### Solutions

* Explore responsive pattern libraries
* Break website designs down into modular components
* Choose patterns appropriate to each context
* Communicate the possibilities and constraints of new patterns to those generating content

#### Resources

* [Responsive Navigation Patterns](http://bradfrostweb.com/blog/web/responsive-nav-patterns/)
* [Non Hover](http://trentwalton.com/2010/07/05/non-hover/)
* [Responsive Patterns](http://bradfrost.github.io/this-is-responsive/patterns.html)
* [Making Advertising Work in a Responsive World](http://mobile.smashingmagazine.com/2012/11/29/making-advertising-work-in-a-responsive-world/)
* [Responsive Advertising](http://www.markboulton.co.uk/journal/responsive-advertising)
* [Making of: People Magazine's Responsive Mobile Website](http://www.goodreads.com/author_blog_posts/2781701-making-of-people-magazine-s-responsive-mobile-website)
* [Responsive Ad Demos](http://www.ravelrumba.com/blog/responsive-ad-demos/)

### Rethinking Content

#### Problem

With responsive design, we are pushing the same content to both mobile and desktop users. However, mobile and desktop users may want content structured in different ways.

For example, a desktop user may appreciate a large list of links located to the side of the main content area for quick access to other areas of the website. However, a user on a mobile device would not appreciate being forced to swipe past this large list of links in a single-column layout.

Furthermore, content management system users must understand how their content will be displayed in the various contexts.

#### Solutions

* Think of content outside of the display/implementation context
* Redesign content before redesigning your website
* Challenge yourself to be concise with content
* Bring those responsible for generating content into an iterative design and development process

#### Resources

* [Adaptable content](http://www.netmagazine.com/features/adaptable-content)
* [Making of: People Magazine's Responsive Mobile Website](http://www.goodreads.com/author_blog_posts/2781701-making-of-people-magazine-s-responsive-mobile-website)

### New Frontier

#### Problem

RWD is a new technique; the web design and development community is still actively solving many challenges unique to RWD. New techniques and approaches appear on a daily basis. 

#### Solutions

* Keep up-to-date
* Have faith in yourself
* Embrace the new territory
* Dedicate time for research
* Share your experiences

#### Resources

* [How to keep up to date on front-end technologies](http://uptodate.frontendrescue.org/)

## Examples

* [Responsive Design Sites: Higher Ed, Libraries, Notables](http://blog.lib.uiowa.edu/hardinmd/2012/05/03/responsive-design-sites-higher-ed-libraries-notables/)
* [Regent College](http://www.regent-college.edu/)
* [UCLA](http://uca.edu/)
* [College of Mount St. Joseph](http://msj.edu/)
* [Dartmouth](http://dartmouth.edu/)
* [Drexel University](http://www.drexel.edu/)
* [University of Alberta](http://www.ualberta.ca/)