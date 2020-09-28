import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <>
          <FormGroup>
              <Label htmlFor="sixth"> I uderstand why people are being difficult to me ? </Label>
              <Input
                className="form-control slider"
                min={0} max={10}
                defaultValue={0}
                id="sixth"
                name="sixth"
                type="range"
                value={props.sixth}
                onChange={props.handleChange}
                />
          </FormGroup>
          <FormGroup>
              <Label htmlFor="seventh"> I uderstand why people are being difficult to me ? </Label>
              <Input
                className="form-control slider"
                min={0} max={10}
                defaultValue={0}
                id="seventh"
                name="seventh"
                type="range"
                value={props.seventh}
                onChange={props.handleChange}
                />
          </FormGroup>
          <FormGroup>
              <Label htmlFor="eighth"> I uderstand why people are being difficult to me ? </Label>
              <Input
                className="form-control slider"
                min={0} max={10}
                defaultValue={0}
                id="eighth"
                name="eighth"
                type="range"
                value={props.eighth}
                onChange={props.handleChange}
                />
          </FormGroup>
          <FormGroup>
              <Label htmlFor="nineth"> I uderstand why people are being difficult to me ? </Label>
              <Input
                className="form-control slider"
                min={0} max={10}
                defaultValue={0}
                id="nineth"
                name="nineth"
                type="range"
                value={props.nineth}
                onChange={props.handleChange}
                />
          </FormGroup>
          <FormGroup>
              <Label htmlFor="tenth"> I uderstand why people are being difficult to me ? </Label>
              <Input
                className="form-control slider"
                min={0} max={10}
                defaultValue={0}
                id="tenth"
                name="tenth"
                type="range"
                value={props.tenth}
                onChange={props.handleChange}
                />
          </FormGroup>
          
  
  
    </>
  );
}

  export default Step2;