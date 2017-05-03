import React from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


<<<<<<< 0ed25d4711536db75e7042177c4f98492d1d71d6
export default ({bookings}) => (
  <BigCalendar
    style={{height: '400px'}}
    events={bookings}
=======
export default props => (
  <BigCalendar
    style={{height: '400px'}}
    events={[]}
>>>>>>> finishes #144808471 - calendar added (#1)
/>);