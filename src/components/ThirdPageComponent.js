import React from 'react';
import {Button, FormGroup, Input, Label} from 'reactstrap';

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
      <FormGroup>
            <Label htmlFor="elewenth"> I uderstand why people are being difficult to me ? </Label>
            <Input
              className="form-control slider"
              min={0} max={10}
              defaultValue={0}
              id="elewenth"
              name="elewenth"
              type="range"
              value={props.elewenth}
              onChange={props.handleChange}
              />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="twelth"> I uderstand why people are being difficult to me ? </Label>
            <Input
              className="form-control slider"
              min={0} max={10}
              defaultValue={0}
              id="twelth"
              name="twelth"
              type="range"
              value={props.twelth}
              onChange={props.handleChange}
              />
        </FormGroup>
    <Button className="btn But  btn-success">Finish</Button>
    </React.Fragment>
  );
}


  export default Step3;