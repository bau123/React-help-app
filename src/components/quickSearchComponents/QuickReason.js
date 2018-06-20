import React, { Component } from "react";

class QuickReason extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }


  render() {
    return (
      <div className='QuickReason'>
        <div className="form-group" id="reasonDiv">
          <label className="form-label" for="Reason">Reason</label>
          <select className="form-control" id="reason">
            <option value="05">05IN:   Subject of process or investigation</option>
            <option value="00">00AC:   Transaction log and other audit checks</option>
            <option value="01">01SC:   Vehicle and/or person stopped, i.e. a street check</option>
            <option value="02">02MV:   Moving vehicle</option>
            <option value="03">03AV:   Abandoned or parked and unattended vehicle</option>
            <option value="04">04VC: Vehicles involved in a road traffic collision</option>
            <option value="06">Administration</option>
            <option value="07">Enquiries relating to family protection issues</option>
            <option value="08">On behalf of other authorised agency</option>
            <option value="09">Update/Confirm/Broadcast</option>
          </select>
        </div>

        <div className="form-group" id="justificationDiv">
          <label className="form-label" for="justification">Supporting Notes</label>
          {/*<input class="form-control" type="text" id="justification" value=""> </input>*/}
          <input className="form-control" type="text" id="justification" value={this.state.value} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default QuickReason;