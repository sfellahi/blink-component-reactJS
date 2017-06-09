import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Translate from 'react-translate-component';

export default class SideBar extends Component {
  render() {
    return (
      <Drawer open={this.props.open}>
        <AppBar
          onLeftIconButtonTouchTap={this.props.onCloseSideBar}
          title="blink"
        />
        <List>
          <ListItem
            onTouchTap={this.props.onLogout}
            primaryText={<Translate content="authentication.logout" />}
          />
        </List>
      </Drawer>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
  onCloseSideBar: PropTypes.func,
  onLogout: PropTypes.func,
};
