import React, {Component} from 'react';
import {Row,Col} from 'antd';

const Grids = ()=>(
  <div>
      <Row>
          <Col span={8}>123</Col>
          <Col span={8}>23</Col>
          <Col span={8}>444</Col>
      </Row>
  </div>
);

export default Grids;