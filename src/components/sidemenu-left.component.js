import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import MassageTypeDropdown from './drop-down-menu.component';
import TreatmentDurationDropdown from './treatment-duration.component';

export default ({massageTypes, massageTypeSelected, selectedMassageType, treatmentDuration, selectedDurationTime, durationSelected}) => <List>
  <Subheader>Select Your Massage Type</Subheader>
  <MassageTypeDropdown items={massageTypes} selectedItem={selectedMassageType} onMenuChange={massageTypeSelected}/>
  <TreatmentDurationDropdown durations={treatmentDuration} selectedDuration={selectedDurationTime} onDurationChange={durationSelected} />
</List>
