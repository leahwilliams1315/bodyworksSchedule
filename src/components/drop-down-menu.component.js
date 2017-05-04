import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default (props) => <DropDownMenu value={1}>
    {props.items.map(item => <MenuItem value={item.id} primaryText={item.name} key={item.id}/>)}


</DropDownMenu>

