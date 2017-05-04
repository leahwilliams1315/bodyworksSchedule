import React, {Component} from 'react';
import moment from 'moment';

import Schedular from './components/calendar.component';
import SideMenuLeft from './components/sidemenu-left.component';

import './app.css';

class App extends Component {
  state = {

    allBookings: [{
      'title': 'Massage With Sue',
      'start': moment().startOf('day').hour(13).minute(0).toDate(),
      'end': moment().startOf('day').hour(14).minute(0).toDate(),
      desc: 'Sports massage with Sue'
    }],
    massageTypes: [
      {name: 'Registered Massage Therapy', restrictedDurations: [], id: 1},
      {name: 'Sports Massage', restrictedDurations: [], id: 2},
      {name: 'Hot Stone Massage', restrictedDurations: ['60', '90'], id: 3},
      {name: 'Neuromuscular Integration and Structural Alignment (N.I.S.A.)', restrictedDurations: [], id: 4},
      {name: 'Lymph Drainage', restrictedDurations: [], id: 5},
      {name: 'Shiatsu Therapy', restrictedDurations: [], id: 6},
      {name: 'Thai Massage', restrictedDurations: [], id: 7},
      {name: 'Acupuncture', restrictedDurations: [], id: 8},
      {name: 'Cosmetic Acupuncture', restrictedDurations: [], id: 9},
      {name: 'Craniosacral Therapy', restrictedDurations: [], id: 10},
      {name: 'Aromatherapy', restrictedDurations: [], id: 11},
      {name: 'Reflexology', restrictedDurations: [], id: 12}
    ],
    selectedMassageType: 1,
      treatmentDurations : [
          {time: '30 minutes', id: '30'},
          {time: '60 minutes', id: '60'},
          {time: '90 minutes', id: '90'},
          {time: '120 minutes', id: '120'}
      ],
      selectedTreatmentDuration: '60'
  };

  handleMassageTypeSelected = (selectedType) => this.setState({selectedMassageType: selectedType});

  handleDurationSelected = (selectedDuration) => this.setState({selectedTreatmentDuration: selectedDuration});

  render() {
    return (
      <div className="app">
        <SideMenuLeft massageTypes={this.state.massageTypes.filter(mType => mType.restrictedDurations.length ? mType.restrictedDurations.includes(this.state.selectedTreatmentDuration) : true)}
                      massageTypeSelected={this.handleMassageTypeSelected}
                      selectedMassageType={this.state.selectedMassageType}
                      treatmentDurations={this.state.treatmentDurations.filter(dType => this.state.massageTypes.find(mt => mt.id === this.state.selectedMassageType).restrictedDurations.length ? this.state.massageTypes.find(mt => mt.id === this.state.selectedMassageType).restrictedDurations.includes(dType.id) : true )}
                      selectedDurationTime={this.state.selectedTreatmentDuration}
                      durationSelected={this.handleDurationSelected}/>
        <Schedular bookings={this.state.allBookings}/>
      </div>
    );
  }
}

export default App;
