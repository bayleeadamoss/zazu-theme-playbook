## Theme Playbook

Want an easy playbook for your Zazu theme? Look no further!

* [Homepage](http://tinytacoteam.github.io/theme-playbook)
* [Example Playful Theme](http://tinytacoteam.github.io/theme-playbook/#tinytacoteam/playful-theme)

This simply React application offers a permalink to preview your theme in a Zazu
like application. This does not intent do have all the functionality of Zazu,
but offers a simplified state to preview the theme to others.

## Customize

There are a few sections that might be worth customizing that aren't part of
your theme.

For instance we have a `Install` section, and the font color may be hard to see
based on your background color.

~~~ css
body.playbook #install {
  color: #fff;
}
~~~

We also provide a [GitHub Corner](https://github.com/tholman/github-corners) and
you may want to customzie the colors. Here's a css snippet to get you started.

~~~ css
body.playbook .github-corner > svg {
  fill: black; /* background color */
  color: white; /* octocat color */
}
~~~
