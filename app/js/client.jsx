'use strict';

var React = require('react');
var ArtistList = require('./components/artists_list.jsx');

var App = React.createClass({
  getInitialState: function () {
    return { searchString: ''}
  },
  handleChange: function (e) {
    this.setState({searchString:e.target.value});
  },
  render: function () {
    var searchString = this.state.searchString.trim().toLowerCase();
    var results = this.props.items;
    if(searchString.length > 0){
      results = results.filter(function(r){
          return r.name.toLowerCase().match( searchString );
      });
    }
    return (
      <main>
        <h1>{this.props.title}</h1>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="search artist here" />
        <ArtistList data={results} />
      </main>
    )
  }
});

var artistlist = [

    { name: "Girls' Generation", year:'2008', url:'http://upload.wikimedia.org/wikipedia/commons/6/6c/LG_%EC%8B%9C%EB%84%A4%EB%A7%88_3D_TV_%EC%83%88_%EB%AA%A8%EB%8D%B8_%E2%80%98%EC%86%8C%EB%85%80%EC%8B%9C%EB%8C%80%E2%80%99_%EC%98%81%EC%9E%85.jpg'},
    { name: 'Kara', year:'2007', url:'http://upload.wikimedia.org/wikipedia/commons/7/7a/Kara_at_the_fansigning_for_their_mini_album_%22Day_%26_Night%22%2C_30_August_2014_01.jpg'},
    { name: 'APink', year:'2012', url:'http://upload.wikimedia.org/wikipedia/commons/0/00/A_Pink_2014_KBS_Song_Festival_2.jpg'},
    { name: "Girls' Day", year:'2011', url:'http://upload.wikimedia.org/wikipedia/commons/a/ad/LG_Pocket_Photo_-_Girl%27s_Day_%281%29.jpg'}


];


React.render(<App title="K-pop: " items={artistlist}/>, document.body);
