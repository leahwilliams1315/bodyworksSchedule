import React, {Component} from 'react';
import moment from 'moment';

import Schedular from './components/calendar.component';
import DropDownMenu from './components/drop-down-menu.component';

class App extends Component {
    state = {

    allBookings: [{
    'title': 'Massage With Sue',
    'start': moment().startOf('day').hour(13).minute(0).toDate(),
    'end': moment().startOf('day').hour(14).minute(0).toDate(),
    desc: 'Sports massage with Sue',
}],
        massageTypes: [
            {name: 'Registered Massage Therapy', id: 1},
            {name: 'Sports Massage', id: 2},
            {name: 'Hot Stone Massage', id: 3},
            {name: 'Neuromuscular Integration and Structural Alignment (N.I.S.A.)', id: 4},
            {name: 'Lymph Drainage', id: 5},
            {name: 'Shiatsu Therapy', id: 6},
            {name: 'Thai Massage', id: 7},
            {name: 'Acupuncture', id: 8},
            {name: 'Cosmetic Acupuncture', id: 9},
            {name: 'Craniosacral Therapy', id: 10},
            {name: 'Aromatherapy', id: 11},
            {name: 'Reflexology', id: 12}
        ]
    };

    render() {
        return (
            <div className="App">
                <DropDownMenu items={this.state.massageTypes} />
                <Schedular bookings={this.state.allBookings} />
            </div>
        );
    }
}

export default App;
