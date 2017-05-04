import React from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


export default ({bookings}) => (
  <BigCalendar
    style={{height: '400px'}}
    events={bookings}
/>);