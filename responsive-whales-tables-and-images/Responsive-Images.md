# Responsive Images

## Problems

As with any responsive media, the key concern is that a user recieves the image in a form that is appropriate for their device. With responsive images, there are a number of areas to consider:

* **Dimensions:** Width and height of the image should fit the device's viewport
* **File Size:** Size of the image file should be as small as possible
* **Pixel Density:** Devices should recieve images with appropriate pixel densities
* **Art Direction:** Artistic intent of the image should be maintained across the image's various forms
* **Bandwidth:** Even if a device is capable of viewing a large, high density image, if a user is on a slow connection, a responsive image should respond to these needs

## Biggest Roadblock

The biggest roadblock to any responsive image solution is that browsers will proactively download any image that is included on page. This includes images with `display: none;`, making it impossible to simply swap out `img` elements using media queries.

## Solutions

### Fluid Images

The default approach to responsively handling images: scale images to fit their container by setting the image's `max-width` to `100%` and `height` to `auto`. ([Fluid Images](http://unstoppablerobotninja.com/entry/fluid-images/))

It can also be beneficial to apply a `min-width` to certain images that would become illegible at especially small sizes. ([Don't Squash Me: Using min-width on Fluid Images](http://www.stucox.com/blog/dont-squash-me-using-min-width-on-fluid-images/))

### CSS Background Images

Instead of using the `img` element, set the appropriate image as the `background-image` of a `div` using media queries. ([Simple Responsive Images With CSS Background Images](http://mobile.smashingmagazine.com/2013/07/22/simple-responsive-images-with-css-backgrounds/) and [Loading Images on Demand with Pure CSS](http://flippinawesome.org/2013/06/10/loading-images-on-demand-with-pure-css/))

A potential enhancement to this technique is to "stack" versions of the image with varying quality with CSS3 multiple backgrounds so that users will see an image while the higher quality image is loading. ([The Layered Look: Better Responsive Images Using Multiple Backgrounds](http://css-tricks.com/the-layered-look/))

Compass extensions exist to automate this technique ([Responsive Images with Apropos](http://corner.squareup.com/2013/08/responsive-images-with-apropos.html)).

### Server-side Solutions

Store the user's screen size in a cookie and route all requests for images through a PHP file that uses the cookie to determine the appropriate image to display for the user.

[Adaptive Images](http://adaptive-images.com/) is the most popular implementation of this technique.

* **Adaptive Images**
  * [Adaptive Images](http://adaptive-images.com/)
  * [24 Ways: Adaptive Images for Responsive Designs](http://24ways.org/2011/adaptive-images-for-responsive-designs/)
  * [Responsive &lt;img&gt; elements in HTML, for Responsive Designs](http://2002-2012.mattwilcox.net/archive/entry/id/1053/)
* **Similar Approaches**
  * [getImage](https://github.com/craig552uk/getImage)
  * [Responsive images using cookies](http://blog.keithclark.co.uk/responsive-images-using-cookies/)
  * [Responsive Images with PHP and jQuery](http://www.jamesfairhurst.co.uk/posts/view/responsive_images_with_php_and_jquery/)
  * [Server Side Responsive Images](https://github.com/carsonmcdonald/ServerSideResponsiveImageExample)
  * [One Solution to Responsive Images](http://mobile.smashingmagazine.com/2014/02/03/one-solution-to-responsive-images/)

### Hosted Services

Create responsive images by routing requests through a hosted image service. Images can be responsively enhanced via URL parameters, server-side device detection, or cookies.

* [CDN Connect](http://www.cdnconnect.com/)
* [ImageScale](http://imagescale.co/)
* [Mobify.js Image Resizer](http://www.mobify.com/mobifyjs/v2/docs/image-resizer/#ir0mobifycom)
* [Pixtulate](http://www.pixtulate.com/)
* [responsive.io](https://responsive.io/)
* [ReSRC.it](http://www.resrc.it/)
* [Sencha.io Src](http://www.sencha.com/learn/how-to-use-src-sencha-io/)
* [WhateverWeb Image Optimizer](http://docs.whateverweb.com/image-optimizer/)

### JavaScript Swap

Swap out an element on the page (either a plain element like a `div` or an `img` pointing to the lowest quality version of an image) via JavaScript, using `data-*` attributes or a standardized file naming scheme to determine the correct image to load.

* [Doubletake](http://www.grahambird.co.uk/lab/doubletake/)
* [Foresight.js](http://www.cdnconnect.com/docs/foresightjs)
* [HiSRC](https://github.com/teleject/hisrc)
* [How Apple.com will serve retina images to new iPads](http://blog.cloudfour.com/how-apple-com-will-serve-retina-images-to-new-ipads/)
* Imager.js: [Images](http://responsivenews.co.uk/post/50092458307/images), [Imager.js](http://responsivenews.co.uk/post/58244240772/imager-js), [GitHub: Imager.js](https://github.com/BBC-News/Imager.js/)
* Interchange: [Interchange](http://zurb.com/playground/foundation-interchange), [Responsive images: a look at Foundation’s interchange](http://shoogledesigns.com/blog/blog/2013/08/26/responsive-images-foundations-interchange/)
* [jQuery Picture](http://jquerypicture.com/)
* [Making Sass talk to JavaScript with JSON](http://css-tricks.com/making-sass-talk-to-javascript-with-json/)
* [responsive-images.js](http://davidwalsh.name/responsive-design)
* [responsive-context-images](https://gist.github.com/vasilisvg/1200270)
* [Responsive Enhance](https://github.com/joshje/Responsive-Enhance)
* [Responsive Images with PHP and jQuery](http://www.jamesfairhurst.co.uk/posts/view/responsive_images_with_php_and_jquery/)
* [retina.js](http://retinajs.com/)
* [responsImg](http://etiennetalbot.github.io/responsImg/)
* [riloadr](https://github.com/tubalmartin/riloadr)
* [slimmage](https://github.com/imazen/slimmage)
* [Retina Images That Respond](http://drew.roon.io/retina-images-that-respond)
* [Responsive Retinas Strike Back](http://drew.roon.io/responsive-retinas-strike-back)
* [rwd.images.js](https://github.com/stowball/rwd.images.js)
* [Data Image Delivery](http://dev.twoblok.es/data-img/)

### Miscellaneous Tricks

A number of approaches using a variety of technologies from the `noscript` tag to the HTML5 `video` element.

* Clown Car Technique: [Clown Car Technique: Solving Adaptive Images In Responsive Web Design](http://coding.smashingmagazine.com/2013/06/02/clown-car-technique-solving-for-adaptive-images-in-responsive-web-design/), [GitHub: clowncar](https://github.com/estelle/clowncar)
* [Compressive Images](http://filamentgroup.com/lab/rwd_img_compression/)
* [Creating responsive images using the noscript tag](http://www.headlondon.com/our-thoughts/technology/posts/creating-responsive-images-using-the-noscript-tag)
* [Addressing The Responsive Images Performance Problem: A Case Study](http://mobile.smashingmagazine.com/2013/09/16/responsive-images-performance-problem-case-study/)
* Filament Group's Responsive Images: [Responsive Images: Experimenting with Context-Aware Image Sizing](http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/), [Github: Responsive-Images](https://github.com/filamentgroup/Responsive-Images), [GitHub: responsive-images-alt](https://github.com/allmarkedup/responsive-images-alt)
* [jQuery-rwdImages](https://github.com/stowball/jQuery-rwdImages)
* [Responsive images using the video element](http://www.iandevlin.com/blog/2012/11/html5/responsive-images-using-the-video-element)
* [Responsive images right now](http://csswizardry.com/2011/07/responsive-images-right-now/)
* [Responsive images using CSS3](http://nicolasgallagher.com/responsive-images-using-css3/)
* [Retina revolution](http://www.netvlies.nl/blog/design-interactie/retina-revolution)
* [Art Directed Responsive Images](http://ryanbruce.ca/blog/art-directed-responsive-images/)

### Alternative File Formats

Instead of modifying the markup, a different file format could be used, specifically a file format that is capable of providing different versions of an image based on the needs of the entity requesting the image (for example, [JPEG 2000](http://opensores.za.net/2012/responsive-images/) and [FlashPix](http://en.wikipedia.org/wiki/FlashPix)).

[WebP](http://helloanselm.com/2012/a-chance-for-webp/) is often mentioned, although the key advantage is that WebP offer superior compression, not necessarily respnonsive capabilities. Since WebP is an evolving standard, however, responsive features could be added to the format.

* [FlashPix](http://en.wikipedia.org/wiki/FlashPix)
* [MrSID](http://en.wikipedia.org/wiki/MrSID)
* [JPEG](http://blog.yoav.ws/2012/05/Responsive-image-format)
* [JPEG 2000](http://opensores.za.net/2012/responsive-images/)
* [JPEG XR](http://en.wikipedia.org/wiki/JPEG_XR)
* [WebP](http://helloanselm.com/2012/a-chance-for-webp/)
* [Responsive Image Container](http://blog.yoav.ws/2013/09/Responsive-Image-Container)
* [Web Site Optimization With Browser-Specific Image Formats](http://calendar.perfplanet.com/2013/browser-specific-image-formats/)

### Lower Level

Beyond modifying the markup or using a new format, it has also been suggested that additional information could be provided to the server by the browser, allowing the server to more intelligently serve the appropriate resources.

* [Client Hints](https://docs.google.com/presentation/d/1y_A6VOZy9bD2i0VLHv9ZWr0W3hZJvlTNCDA0itjI0yM/edit)
* [Client Hints Polyfill](https://github.com/jonathantneal/http-client-hints)

### Extending HTML

Given the pervasiveness of responsive image problem, it was decided that it would be valuable to extend HTML to add a syntax for responsive images.

Two standards have been proposed: the `srcset` attribute and the `picture` element.

#### srcset Attributes

The `srcset` is an additional attribute on the `img` element (example from [Responsive Images](http://responsiveimages.org/)):

```html
<img src="fallback.jpg" alt="" srcset="small.jpg 640w 1x, small-hd.jpg 640w 2x, med.jpg 1x, med-hd.jpg 2x ">
```

##### Polyfills

* [srcset-polyfill](https://github.com/borismus/srcset-polyfill)

##### Resources

* [WebKit Has Implemented srcset, And It’s A Good Thing](http://mobile.smashingmagazine.com/2013/08/21/webkit-implements-srcset-and-why-its-a-good-thing/)
* [The srcset attribute](http://www.w3.org/html/wg/drafts/srcset/w3c-srcset/)
* [Chrome 34: Responsive Images and Unprefixed Web Audio](http://blog.chromium.org/2014/02/chrome-34-responsive-images-and_9316.html)

#### Picture Element

The `picture` element has the following proposed syntax (example from [Responsive Images](http://responsiveimages.org/)):

```html
<picture>
  <source media="(min-width: 40em)" srcset="big.jpg 1x, big-hd.jpg 2x">
  <source srcset="small.jpg 1x, small-hd.jpg 2x">
  <img src="fallback.jpg" alt="">
</picture>
```

##### Polyfills

* [picturefill](https://github.com/scottjehl/picturefill)
* [jQuery Picture](http://jquerypicture.com/)
* [Mobify.js: Simplified Picture Element](http://www.mobify.com/mobifyjs/v2/docs/image-resizer/#simplified-picture-element)
* [Responsive Images: a Drupal Implementation](http://fourkitchens.com/blog/2013/02/07/responsive-images-drupal-implementation)
* [Chuck Carpenter's picture Polyfill](http://codepen.io/uniqname/pen/ugcsn)
* [Polymer picture polyfill](https://github.com/ResponsiveImagesCG/x-picture)
* [picturePolyfill](https://github.com/verlok/picturePolyfill)

##### Resources

* [Responsive Images Community Group](http://responsiveimages.org/)
* [How To Avoid Duplicate Downloads In Responsive Images](http://mobile.smashingmagazine.com/2013/05/10/how-to-avoid-duplicate-downloads-in-responsive-images/)
* [Responsive Images: How they Almost Worked and What We Need](http://alistapart.com/article/responsive-images-how-they-almost-worked-and-what-we-need)
* [The picture element](http://www.w3.org/TR/html-picture-element/#the-picture-element)
* [Florian's Compromise](http://www.w3.org/community/respimg/2012/06/18/florians-compromise/)
* [Simplified Picture Element](http://geekhood.net/picture-element.html)
* [Responsive Images: 2013 Year-End Update](http://filamentgroup.com/lab/ricg_update)

#### RespImg Syntax

The `RespImg` adds `src-n` attributes to the image element, as follows(example from [specification](http://tabatkins.github.io/specs/respimg/Overview.html)):

```html
<img src-1="(max-width: 400px) pic-small.jpg"
     src-2="(max-width: 1000px) pic-medium.jpg"
     src="pic-large.jpg"
     alt="Obama talking to a soldier in hospital scrubs.">
```

#### Additional Approaches

* [Responsive Image Mapping](https://github.com/petelock/Responsive-Image-Mapping)

## General Resources

* [Ughck. Images.](http://daverupert.com/2013/06/ughck-images/)
* [Responsive Images Chart](https://docs.google.com/spreadsheet/ccc?key=0Al0lI17fOl9DdDgxTFVoRzFpV3VCdHk2NTBmdVI2OXc#gid=0)
* [ResponsiveImagesCG: Relevant Resources](https://github.com/ResponsiveImagesCG/picture-element/wiki/Relevant-resources)
* Jason Grigsby's Responsive IMGs series: [Part 1](http://blog.cloudfour.com/responsive-imgs/), [Part 2](http://blog.cloudfour.com/responsive-imgs-part-2/), [Part 3](http://blog.cloudfour.com/responsive-imgs-part-3-future-of-the-img-tag/)
* [The real conflict behind &lt;picture&gt; and @srcset](http://blog.cloudfour.com/the-real-conflict-behind-picture-and-srcset/)
* [2013 Paris Responsive Images Meeting](http://www.shanehudson.net/2013/09/10/responsive-images-meeting-notes/)
