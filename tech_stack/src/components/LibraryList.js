import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItems from './ListItem';


class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.datasource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(libraric) {
    return (
      <ListItems library={libraric} />
    );
  }
  render() {
    // console.log(this.props);
    return (
      <ListView
        dataSource={this.datasource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => ({
    libraries: state.libraries
  });

export default connect(mapStateToProps)(LibraryList);

