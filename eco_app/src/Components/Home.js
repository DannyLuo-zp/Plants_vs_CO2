import "./Home.css";
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button,Tag,Divider,Tabs,Checkbox,List } from 'antd';
import {EcoMap} from '../Map';

export default function Home(props) {

    const Map = () =>{
        return (
            <Row>

            <Col span={18}>
            <EcoMap/>
            </Col>

            <Col span={6}>
            
            </Col>
        </Row>
        
        );
    };
    const { TabPane } = Tabs;
    return (
        <div className="page">
        <br/>
        <Tabs  type="card">
              <TabPane tab="Eco Map" key="1">
              <Map/>
              </TabPane>
  
              <TabPane tab="User Profile" key="2">
         
              </TabPane>
              
              <TabPane tab="Add a Plant!" key="3">
            
              </TabPane>
          </Tabs>
        </div>
  
    );
  }
  