import React from 'react';
import {Steps} from 'antd';
const Step = Steps.Step;

const StepsEx = () => (
    <Steps current="1">
        <Step title="步骤1"/>
        <Step title="步骤2"/>
        <Step title="步骤3"/>
    </Steps>
);

export default StepsEx;