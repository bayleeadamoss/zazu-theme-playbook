const Install = React.createClass({
  propTypes: {
    theme: React.PropTypes.string.isRequired,
  },
  readableName () {
    const repoName = this.props.theme.split('/')[1]
    return repoName.split('-').map(function(el) {
      return el[0].toUpperCase() + el.slice(1)
    }).join(' ') + ' for Zazu App'
  },
  render () {
    return (
      <div id="install">
        <h2>{ this.readableName() }</h2>
        <p>To install add this to your <code>~/.zazurc.json</code> file.</p>
        <pre>
          {'{\n'}
          {'  '}"theme": "{ this.props.theme }"
          {'\n}'}
        </pre>
      </div>
    )
  }
})

module.exports = Install
