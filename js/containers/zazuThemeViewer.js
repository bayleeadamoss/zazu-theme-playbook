const data = require('../data.js')
const Search = require('../components/search')
const Help = require('../components/help')
const Viewer = require('./viewer')
const Fork = require('../components/fork')

const ZazuThemeViewer = React.createClass({
  getInitialState () {
    return {
      theme: '',
      data: data.results,
      query: '',
    }
  },
  componentDidMount () {
    window.addEventListener('hashchange', this.findTheme, false);
    this.findTheme()
  },
  componentWillUnmount () {
    window.removeEventListener('hashchange', this.findTheme, false);
  },
  findTheme () {
    this.setState({
      theme: window.location.hash.slice(1),
    })
  },
  setTheme (theme) {
    window.location.hash = theme
  },
  handleQueryChange (query) {
    this.setState({
      query
    })
  },
  render () {
    return (
        <div>
          { this.state.theme ? null :
            <div className='theme-finder'>
              <h2>Zazu Theme Playbook!</h2>
              <Search
                onChange={this.setTheme} />
              <Help />
              <Fork repo='tinytacoteam/theme-playbook' />
            </div> }
          { this.state.theme &&
            <Viewer
              results={this.state.data}
              theme={this.state.theme} /> }
        </div>
    )
  },
})

module.exports = ZazuThemeViewer
