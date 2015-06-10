'use strict';

var React = require('react');
var Pic = require('./artist_pic.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <li><Pic artist={this.props.data} />
      {this.props.data.name} - {this.props.data.year}</li>
    )
  }
});
