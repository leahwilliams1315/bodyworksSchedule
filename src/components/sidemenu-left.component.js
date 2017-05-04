import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import MassageTypeDropdown from './drop-down-menu.component';

export default ({massageTypes, massageTypeSelected, selectedMassageType}) => <List>
  <Subheader>Select Your Massage Type</Subheader>
  <MassageTypeDropdown items={massageTypes} selectedItem={selectedMassageType} onMenuChange={massageTypeSelected}/>
</List>
