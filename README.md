# jade-bulletproof-button

Stop worrying about designing gorgeous buttons using progressively enhanced VML and CSS. 

Use this instead.

[Read more](http://buttons.cm/)

## How it works

Write email code in Jade, using `+button` for the mixin:

```jade
include ../bullet-proof-button.jade
// ... Jade ...
+button(  bgcolor = '#536895', color = '#ffffff', border = '1px solid #1e3650', border-radius = '4px', height = '40px', width = '200px', href = 'http://buttons.cm/')
  | Connect with us
// ... more Jade ...
```

And get a much more intense output, voila!

```html
<div>
  <!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://buttons.cm/" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" strokecolor="#1e3650" fill="#536895">
    <w:anchorlock/>
    <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">Connect with us
    </center>
  </v:roundrect>
  <![endif]--><a href="http://buttons.cm/" style="background-color:#536895;border:1px solid #1e3650;border-radius:4px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-ext-size-adjust:none;mso-hide:all;">Connect with us</a>
</div>
```

