const Install = require('../components/install')
const Demo = require('../components/demo')
const Fork = require('../components/fork')

const Viewer = React.createClass({
  propTypes: {
    theme: React.PropTypes.string.isRequired,
    results: React.PropTypes.array.isRequired,
  },
  getInitialState () {
    return {
      activeIndex: 0,
      query: '',
    }
  },
  mouseEnter (index) {
    this.setState({
      activeIndex: index,
    })
  },
  handleQueryChange (query) {
    this.setState({
      query
    })
  },
  render () {
    return (
        <div>
          <Install
            theme={this.props.theme} />
          <Demo
            mouseEnter={this.mouseEnter}
            theme={this.props.theme}
            handleQueryChange={this.handleQueryChange}
            results={this.props.results.map((result, index) => {
              if (this.state.query.length === 0) {
                result.show = false
              } else if (this.state.query.length > 2) {
                result.show = index === this.props.results.length - 1
              } else {
                result.show = true
              }
              result.className = this.state.activeIndex === index ? 'active' : null
              return result
            })} />
          <Fork
            bgColor='#70B7FD'
            catColor='#fff'
            repo={this.props.theme} />
        </div>
    )
  },
})

module.exports = Viewer
