import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
      <>
        <FormGroup>
        <Label htmlFor = "sixth" > Are you good in outdoor games ? </Label> 
        <Input className = "form-control slider"
        step = { 1 }
        min = { 0 }
        max = { 10 }
        defaultValue = { 0 }
        id = "sixth"
        name = "sixth"
        type = "range"
        value = { props.score.sixth }
        onChange = { props.handleChange }
        /> 
        </FormGroup> 
        <FormGroup >
        <Label htmlFor = "seventh" > Are you good reader ? </Label>
         <Input className = "form-control slider"
        step = { 1 }
        min = { 0 }
        max = { 10 }
        defaultValue = { 0 }
        id = "seventh"
        name = "seventh"
        type = "range"
        value = { props.score.seventh }
        onChange = { props.handleChange }
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor = "eighth" > How you behave with your friends or teammates ? </Label> 
        <Input className = "form-control slider"
        step = { 1 }
        min = { 0 }
        max = { 10 }
        defaultValue = { 0 }
        id = "eighth"
        name = "eighth"
        type = "range"
        value = { props.score.eighth }
        onChange = { props.handleChange }
        /> 
        </FormGroup> 
        <FormGroup >
        <Label htmlFor = "nineth" > Are you good in playing cricket ? </Label> 
        <Input className = "form-control slider"
        step = { 1 }
        min = { 0 }
        max = { 10 }
        defaultValue = { 0 }
        id = "nineth"
        name = "nineth"
        type = "range"
        value = { props.score.nineth }
        onChange = { props.handleChange }
        /> 
        </FormGroup> 
        <FormGroup >
        <Label htmlFor = "tenth" > Are you good in playing video game ? </Label> 
        <Input className = "form-control slider"
        step = { 1 }
        min = { 0 }
        max = { 10 }
        defaultValue = { 0 }
        id = "tenth"
        name = "tenth"
        type = "range"
        value = { props.score.tenth }
        onChange = { props.handleChange }
        />
        </FormGroup>
        </>
    );
}

export default Step2;