import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const MobileSidebar = React.createClass({
    getInitialState () {
        return {
            open: false
        }
    },
    handleToggle () { this.setState({open: !this.state.open})},
    handleClose () { this.setState({open: false}) },
    render() {
        return (
            <div className="mobile-sidebar">
                <button onTouchTap={this.handleToggle} className="humburger"><i className="material-icons">menu</i></button>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
          </div>
        )
    }
})

export default MobileSidebar