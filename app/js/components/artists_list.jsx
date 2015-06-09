'use strict';

var React = require('react');
var Artist = require('./artist.jsx')


module.exports = React.createClass({
  renderArtists: function () {
    return this.props.data.map(function (artist) {
      return <Artist data={artist} />;
    });
  },
  render: function () {
    return (
      <ul>
        {this.renderArtists()}
      </ul>
    )
  }
});
