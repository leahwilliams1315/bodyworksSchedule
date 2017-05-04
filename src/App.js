import React, {Component} from 'react';
import moment from 'moment';

import Schedular from './components/calendar.component';

class App extends Component {

  state = {

    allBookings: [{
      'title': 'Massage With Sue',
      'start': moment().startOf('day').hour(13).minute(0).toDate(),
      'end': moment().startOf('day').hour(14).minute(0).toDate(),
      desc: 'Sports massage with Sue',
    }]

  };

  render() {
    return (
      <div className="App">
        <Schedular bookings={this.state.allBookings} />
      </div>
    );
  }
}

export default App;
