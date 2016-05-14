const Help = React.createClass({
  render () {
    return (
        <section className="help">
          <p>Preview any Zazu theme by typing in the short GitHub url above!</p>
          <p>Not working?</p>
          <ul>
            <li>Are you pushing your <code>gh-pages</code> branch?</li>
            <li>Is your css located in <code>./dist/main.css</code>?</li>
          </ul>
        </section>
    )
  }
})

module.exports = Help
