'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <img src={this.props.artist.url} alt="pic" height="150" width="250" />
  }
});
