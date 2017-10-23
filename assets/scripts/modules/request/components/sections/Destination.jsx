import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Destination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment()
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    handleStartChange(date) {
        this.setState({
          startDate: date
        });
    }
    handleEndChange(date) {
        this.setState({
            endDate: date
        });
    }
  render() {
    const fields = this.props;
    return(
      <div className="fields">
        <div className="seven wide field">
            <div className="ui fluid input field">
                <div className="ui left icon input">
                    <input {...fields.destination.input}  type="text" placeholder="Destination" required/>
                    <i className="marker icon"></i>
                </div>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid input icon field">
                <DatePicker 
                    selected={this.state.startDate} 
                    dateFormat="DD/MM/YYYY" 
                    className="rc-dp-input"
                    placeholderText="Departure date"
                    onChange={this.handleStartChange}/>
                <input {...fields.departure.input}  type="hidden" value={moment(this.state.startDate).format('DD-MM-YYYY')}/>
                <i className="calendar icon"></i>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid input icon field">
                <DatePicker 
                    selected={this.state.endDate} 
                    dateFormat="DD/MM/YYYY" 
                    className="rc-dp-input"
                    placeholderText="Return date"
                    minDate={this.state.startDate}
                    onChange={this.handleEndChange}/>
                <input {...fields.return.input}  type="hidden" value={moment(this.state.endDate).format('DD-MM-YYYY')}/>
                <i className="calendar icon"></i>
            </div>
        </div>
        <div className="three wide field">
            <div className="ui fluid input field">
                <select {...fields.flexibility.input}  className="ui dropdown">
                    <option value="">Flexibility</option>
                    <option value="Exact dates">Exact dates</option>
                    <option value="+/- 3 days">+/- 3 days</option>
                    <option value="+/- 1 week">+/- 1 week</option>
                    <option value="+/- 2 weeks">+/- 2 weeks</option>
                    <option value="+/- 1 month">+/- 1 month</option>
                    <option value="Whenever">Whenever</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
}
export default Destination;