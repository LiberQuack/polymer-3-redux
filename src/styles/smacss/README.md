# SMACSS

## Base
  The reset css, should not contain classes inside it

## Layouts
  Should contain major parts of the site like Header, Main Content, Footer, Sidebar (major parts should be declered
  through ID e.g `#header {width: 100px}`)
  Helpers classes should go in like `.l-relative`, `.l-pad-30`

## Modules
  Modules are the building blocks of the site, unlike layouts which have "l-" prefix... modules doesn't have any prefix
  and should be named like `.post`, `.post--title`, `.post--content`, `.navbar`, `.navbar--item`, `.card`, `.card--item`...

## States
  We should never use `@extend` with state classes because it's going to mess our output css and also create unwanted
  side effects.
  
  Use **_states.scss** file for writing states, they should be declared as placeholders like `%button-is-active` 
  [(Read more about sass placeholders)](http://thesassway.com/intermediate/understanding-placeholder-selectors). Every state should be prefixed with **"is-"** (except for pseudo classes like :hover)


# SPECIFIC RULES FOR THIS PROJECT
- Modules itself should not have any hyphen only if it has different forms (eg. `.module` is the default and `.module-compact`,`.module-hero` are variants of it)
- Every module child should be declared `[module]--[item]` (eg. `.card` is the module and `.card--content`,`.card--header` are its children)
- Margin for vertical spacing elements should be declared top

# Knowledge Base / Advices
- Take care using `min-height` on layout elements (aka top elements) because its children will not be able to declare `height: 100%`
- Never define `height: 100%` for `html` and `body` elements... if you want to create a sticky footer you'd rather prefer to set your specific element to `min-height: 100vh` **Remember about last `min-height` warning!! Don't use it too much**
- Instead of using a font-icon, working with svg is much more easier and also has more advantages [(read more)](https://goo.gl/PQ7mo4)
