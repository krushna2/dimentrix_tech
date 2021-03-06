import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';

function Step1(props) {

  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <>
        <FormGroup>
                <Label htmlFor="first"> Are you a good listener? </Label>
                  <Input
                    className="form-control slider"
                    step={1}
                    min={0} max={10}
                    defaultValue={0}
                    id="first"
                    name="first"
                    type="range"
                    value ={props.score.first}
                    onChange={props.handleChange}
                    />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="second"> I uderstand why people are being difficult to me ? </Label>
            <Input
              className="form-control slider"
              step={1}
              min={0} max={10}
              defaultValue={0}
              id="second"
              name="second"
              type="range"
              value={props.score.second}
              onChange={props.handleChange}
              />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="third"> How often do you manage to meet your deadlines at work ? </Label>
            <Input
              className="form-control slider"
              step={1}
              min={0} max={10}
              defaultValue={0}
              id="third"
              name="third"
              type="range"
              value={props.score.third}
              onChange={props.handleChange}
              />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="fourth"> How often do you manage to meet your deadlines at work ? </Label>
            <Input
              className="form-control slider"
              step={1}
              min={0} max={10}
              defaultValue={0}
              id="fourth"
              name="fourth"
              type="range"
              value={props.score.fourth}
              onChange={props.handleChange}
              />
        </FormGroup>
              <FormGroup>
            <Label htmlFor="fifth"> I uderstand why people are being difficult to me ? </Label>
            <Input
              className="form-control slider"
              step={1}
              min={0} max={10}
              defaultValue={0}
              id="fifth"
              name="fifth"
              type="range"
              value={props.score.fifth}
              onChange={props.handleChange}
              />
        </FormGroup>
  
    </>
    
  );
}


  export default Step1;