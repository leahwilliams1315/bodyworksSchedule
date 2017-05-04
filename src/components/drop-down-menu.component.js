import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default ({
                  items,
                  onMenuChange = (e) => console.warn('change happened with no handler', e),
                  selectedItem
}) => (
  <DropDownMenu value={selectedItem} onChange={(event, index, val) => onMenuChange(val)}>
    {items.map(item => <MenuItem value={item.id} primaryText={item.name} key={item.id}/>)}
  </DropDownMenu>
)

