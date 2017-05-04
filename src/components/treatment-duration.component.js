import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



export default ({
    durations,
    onDurationChange = (e) => console.warn('change happened with no handler', e),
    selectedDuration
    }) => (
    <DropDownMenu value={selectedDuration} onChange={(event, index, val) => onDurationChange(val)}>
        {durations.map(duration => <MenuItem value={duration.id} primaryText={duration.time} key={duration.id}/>)}
    </DropDownMenu>
)



