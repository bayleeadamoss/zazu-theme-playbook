const Search = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
  },
  submit () {
    this.props.onChange(this.input.value)
  },
  onKeyUp (event) {
    if (event.keyCode === 13) {
      this.submit()
    }
  },
  setReference (input) {
    this.input = input
  },
  render () {
    return (
        <section className="search">
          <input
            ref={this.setReference}
            placeholder="tinytacoteam/light-theme"
            onKeyUp={this.onKeyUp}
            type="text" />
          <button onClick={this.submit}>Go!</button>
        </section>
    )
  }
})

module.exports = Search
