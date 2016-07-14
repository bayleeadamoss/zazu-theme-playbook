(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ZazuThemeViewer = require('./containers/zazuThemeViewer.js');

ReactDOM.render(React.createElement(ZazuThemeViewer, null), document.getElementById('zazu-theme-viewer'));

},{"./containers/zazuThemeViewer.js":8}],2:[function(require,module,exports){
'use strict';

var Demo = React.createClass({
  displayName: 'Demo',

  propTypes: {
    theme: React.PropTypes.string.isRequired,
    results: React.PropTypes.array.isRequired,
    mouseEnter: React.PropTypes.func.isRequired,
    handleQueryChange: React.PropTypes.func.isRequired
  },
  cssUrl: function cssUrl() {
    var user = this.props.theme.split('/')[0];
    var repo = this.props.theme.split('/')[1];
    return 'https://' + user + '.github.io/' + repo + '/dist/main.css';
  },
  handleQueryChange: function handleQueryChange(event) {
    var query = event.target.value;
    this.props.handleQueryChange(query);
  },
  mouseEnter: function mouseEnter(index) {
    this.props.mouseEnter(index);
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'section',
      { id: 'zazu' },
      React.createElement(
        'div',
        null,
        React.createElement('input', {
          className: 'mousetrap',
          type: 'text',
          onChange: this.handleQueryChange,
          placeholder: 'Search..' }),
        React.createElement(
          'div',
          { className: 'results' },
          React.createElement(
            'ul',
            null,
            this.props.results.map(function (result, i) {
              if (!result.show) {
                return;
              }
              return React.createElement(
                'li',
                {
                  key: i,
                  onMouseEnter: function onMouseEnter() {
                    _this.mouseEnter(i);
                  },
                  className: result.className },
                result.icon.indexOf('fa-') === 0 ? React.createElement('i', { className: 'icon fa ' + result.icon, 'aria-hidden': 'true' }) : React.createElement('img', { className: 'icon', src: result.icon, alt: '' }),
                React.createElement(
                  'h2',
                  null,
                  result.title
                ),
                result.subtitle && React.createElement(
                  'h3',
                  null,
                  result.subtitle
                )
              );
            })
          ),
          this.props.results.filter(function (result) {
            return result.show && result.active && result.preview;
          }).map(function (result, i) {
            var src = 'data:text/html;charset=utf-8,' + encodeURI(result.preview);
            return React.createElement('iframe', {
              key: i,
              id: 'preview',
              src: src });
          })
        )
      ),
      React.createElement('link', { href: this.cssUrl(), rel: 'stylesheet', type: 'text/css' })
    );
  }
});

module.exports = Demo;

},{}],3:[function(require,module,exports){
'use strict';

/**
 * Component for: https://github.com/tholman/github-corners
 */
var Fork = React.createClass({
  displayName: 'Fork',

  propTypes: {
    repo: React.PropTypes.string.isRequired
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: 'https://github.com/' + this.props.repo, className: 'github-corner' },
        React.createElement(
          'svg',
          {
            width: '80',
            height: '80',
            viewBox: '0 0 250 250',
            style: {
              position: 'absolute',
              top: 0,
              border: 0,
              right: 0 } },
          React.createElement('path', { d: 'M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' }),
          React.createElement('path', {
            d: 'M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2',
            fill: 'currentColor',
            style: { transformOrigin: '130px 106px' },
            className: 'octo-arm' }),
          React.createElement('path', { d: 'M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z', fill: 'currentColor', className: 'octo-body' })
        )
      ),
      React.createElement(
        'style',
        null,
        '.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}'
      )
    );
  }
});

module.exports = Fork;

},{}],4:[function(require,module,exports){
"use strict";

var Help = React.createClass({
  displayName: "Help",
  render: function render() {
    return React.createElement(
      "section",
      { className: "help" },
      React.createElement(
        "p",
        null,
        "Preview any Zazu theme by typing in the short GitHub url above!"
      ),
      React.createElement(
        "p",
        null,
        "Not working?"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Are you pushing your ",
          React.createElement(
            "code",
            null,
            "gh-pages"
          ),
          " branch?"
        ),
        React.createElement(
          "li",
          null,
          "Is your css located in ",
          React.createElement(
            "code",
            null,
            "./dist/main.css"
          ),
          "?",
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              "This is a requirement of the playbook, not Zazu!"
            )
          )
        )
      )
    );
  }
});

module.exports = Help;

},{}],5:[function(require,module,exports){
'use strict';

var Install = React.createClass({
  displayName: 'Install',

  propTypes: {
    theme: React.PropTypes.string.isRequired
  },
  readableName: function readableName() {
    var repoName = this.props.theme.split('/')[1];
    return repoName.split('-').map(function (el) {
      return el[0].toUpperCase() + el.slice(1);
    }).join(' ') + ' for Zazu App';
  },
  render: function render() {
    return React.createElement(
      'div',
      { id: 'install' },
      React.createElement(
        'h2',
        null,
        this.readableName()
      ),
      React.createElement(
        'p',
        null,
        'To install add this to your ',
        React.createElement(
          'code',
          null,
          '~/.zazurc.js'
        ),
        ' file.'
      ),
      React.createElement(
        'pre',
        null,
        'module.exports = ',
        '{\n',
        '  ',
        '\'theme\': \'',
        this.props.theme,
        '\',',
        '\n}'
      )
    );
  }
});

module.exports = Install;

},{}],6:[function(require,module,exports){
"use strict";

var Search = React.createClass({
  displayName: "Search",

  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  submit: function submit() {
    this.props.onChange(this.input.value);
  },
  onKeyUp: function onKeyUp(event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  },
  setReference: function setReference(input) {
    this.input = input;
  },
  render: function render() {
    return React.createElement(
      "section",
      { className: "search" },
      React.createElement("input", {
        ref: this.setReference,
        placeholder: "tinytacoteam/zazu-light-theme",
        onKeyUp: this.onKeyUp,
        type: "text" }),
      React.createElement(
        "button",
        { onClick: this.submit },
        "Go!"
      )
    );
  }
});

module.exports = Search;

},{}],7:[function(require,module,exports){
'use strict';

var Install = require('../components/install');
var Demo = require('../components/demo');
var Fork = require('../components/fork');

var Viewer = React.createClass({
  displayName: 'Viewer',

  propTypes: {
    theme: React.PropTypes.string.isRequired,
    results: React.PropTypes.array.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      activeIndex: 0,
      query: ''
    };
  },
  mouseEnter: function mouseEnter(index) {
    this.setState({
      activeIndex: index
    });
  },
  handleQueryChange: function handleQueryChange(query) {
    this.setState({
      query: query
    });
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      null,
      React.createElement(Install, {
        theme: this.props.theme }),
      React.createElement(Demo, {
        mouseEnter: this.mouseEnter,
        theme: this.props.theme,
        handleQueryChange: this.handleQueryChange,
        results: this.props.results.map(function (result, index) {
          if (_this.state.query.length === 0) {
            result.show = false;
          } else if (_this.state.query.length > 2) {
            result.show = index === 0;
          } else {
            result.show = true;
          }
          result.active = _this.state.activeIndex === index;
          result.className = result.active ? 'active' : null;
          return result;
        }) }),
      React.createElement(Fork, { repo: this.props.theme })
    );
  }
});

module.exports = Viewer;

},{"../components/demo":2,"../components/fork":3,"../components/install":5}],8:[function(require,module,exports){
'use strict';

var data = require('../data.js');
var Search = require('../components/search');
var Help = require('../components/help');
var Viewer = require('./viewer');
var Fork = require('../components/fork');

var ZazuThemeViewer = React.createClass({
  displayName: 'ZazuThemeViewer',
  getInitialState: function getInitialState() {
    return {
      theme: '',
      data: data.results,
      query: ''
    };
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('hashchange', this.findTheme, false);
    this.findTheme();
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('hashchange', this.findTheme, false);
  },
  findTheme: function findTheme() {
    this.setState({
      theme: window.location.hash.slice(1)
    });
  },
  setTheme: function setTheme(theme) {
    window.location.hash = theme;
  },
  handleQueryChange: function handleQueryChange(query) {
    this.setState({
      query: query
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.state.theme ? null : React.createElement(
        'div',
        { className: 'theme-finder' },
        React.createElement(
          'h2',
          null,
          'Zazu Theme Playbook!'
        ),
        React.createElement(Search, {
          onChange: this.setTheme }),
        React.createElement(Help, null),
        React.createElement(Fork, { repo: 'tinytacoteam/theme-playbook' })
      ),
      this.state.theme && React.createElement(Viewer, {
        results: this.state.data,
        theme: this.state.theme })
    );
  }
});

module.exports = ZazuThemeViewer;

},{"../components/fork":3,"../components/help":4,"../components/search":6,"../data.js":9,"./viewer":7}],9:[function(require,module,exports){
"use strict";

module.exports = {
  "results": [{
    "icon": "fa-calculator",
    "title": '1,048,576',
    "subtitle": "Select item to copy the value to the clipboard.",
    "preview": "<h3>1,048,576b<h3><h3>1,024kb</h3><h3>1mb</h3>" + "<style>#preview h3 { margin: 0 }</style>"
  }, {
    "icon": "icons/amazon.png",
    "title": "Search Amazon for 'batteries'"
  }, {
    "icon": "icons/1password.png",
    "title": "Chase",
    "subtitle": "Login to https://login.chase.net/login?r=0cc175b9c0f1b6a831c399e269772661187ef4436122d1cc2f40dc2b92f0eba0900150983cd24fb0d6963f7d28e17f72900150983cd24fb0d6963f7d28e17f72ab56b4d92b40713acc5af89985d4b786e80b5017098950fc58aad83c8c14978e0cc175b9c0f1b6a831c399e269772661187ef4436122d1cc2f40dc2b92f0eba0900150983cd24fb0d6963f7d28e17f72900150983cd24fb0d6963f7d28e17f72ab56b4d92b40713acc5af89985d4b786e80b5017098950fc58aad83c8c14978e0cc175b9c0f1b6a831c399e269772661187ef4436122d1cc2f40dc2b92f0eba0900150983cd24fb0d6963f7d28e17f72900150983cd24fb0d6963f7d28e17f72ab56b4d92b40713acc5af89985d4b786e80b5017098950fc58aad83c8c14978e"
  }, {
    "icon": "icons/photoshop.png",
    "title": "Adobe Photoshop CC 2015",
    "subtitle": "/Applications/Adobe CC 2015/Adobe Photoshop CC 2015.app"
  }, {
    "icon": "icons/chrome.png",
    "title": "Emoji",
    "subtitle": "http://www.emoji-cheat-sheet.com/"
  }, {
    "icon": "icons/github.png",
    "title": "Gist: Create from clipboard",
    "subtitle": "Optionally specify options"
  }, {
    "icon": "icons/pandora.png",
    "title": "Next",
    "subtitle": "Next song in Pandora"
  }, {
    "icon": "icons/beer.png",
    "title": "Beer",
    "subtitle": "Select to copy emoji to clipboard!"
  }]
};

},{}]},{},[1]);
