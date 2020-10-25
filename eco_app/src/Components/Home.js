import "./Home.css";
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button,Tag,Divider,Tabs,Checkbox,List } from 'antd';
import {EcoMap} from '../Map';
import plant1 from './images/plant1.png';
import plant2 from './images/plant2.png';
import plant3 from './images/plant3.png';

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
    const drawerData = [
        {
          location:"North Loop",
          new:true,
          amount:0.022,
          hour:0.5,
        },
        {
            location:"China Town",
            new:false,
            amount:0.052,
            hour:0.5,
          },
          {
            location:"Lincoln Park",
            new:false,
            amount:0.022,
            hour:1,
          },
          {
            location:"West Loop",
            new:true,
            amount:0.042,
            hour:1,
          },
          {
            location:"Lake Front",
            new:false,
            amount:0.022,
            hour:3,
          },
          {
            location:"C",
            new:true,
            amount:0.012,
            hour:4,
          },
          {
            location:"Lake Front",
            new:false,
            amount:0.06,
            hour:4,
          },
          {
            location:"West Loop",
            new:false,
            amount:0.022,
            hour:5,
          },
          {
            location:"North Loop",
            new:true,
            amount:0.042,
            hour:6,
          },
    
    ]
    const Ranking = () =>{
        return(
            <div className="newsList">
          <List
            dataSource={drawerData}
            renderItem={item => (
              <List.Item key={item.id}>
                <Col>
                  <Row>
                    <Col><Tag color={item.new?"#d0f09f ":"#77be9c"}> <h7 className="text">Area News</h7></Tag></Col>
                    <Col offset={3}><p className="minute_text">{item.hour} HOURS AGO</p></Col>
                    </Row>
                <Row>
                    {item.new?
                    <p> New seeds planted in <a className="div-link" href="https://www.google.com/" target="_blank" >
                    {item.location}</a> ! </p>
                    :
                    <p><a className="div-link" href="https://www.google.com/" target="_blank" >
                   {item.location}</a> has new plants reaching ideal biomass. We expect it to absorb about {item.amount} metric tons of carbon dioxide per year!</p>}
                
                </Row>
                </Col>
              </List.Item>
            )}
          >
          </List>
          </div>
        );
    }
    const Profile = () =>{
        return(
            <div>
                <p className="profileText">My Garden</p>
                <div className="images-wrapper">
                    <img className="plant" src={plant1} width="100" height="100"></img>
                    <img className="plant" src={plant2} width="100" height="100"></img>
                    <img className="plant" src={plant3} width="100" height="100"></img>
                </div>
                <div className="button1"><Button >Add another Plant</Button></div>
                <br/>
                <p className="profileText">Your Impact</p>
                <br/>
                <div className="impact">It's estimated that the plants you currently grow can absorb 
                about 0.089 metric tons of carbon dioxide per year!</div>
                <br/>
                <div className="impact">It's estimated that the plants can absorb 
                50 grams of particulate matter per day!</div>


                
                



            </div>
        );
        
    }
    return (
        <div className="page">
            <div className="Map"><EcoMap/></div>
            <div className="Ranking"><Ranking/></div>
            <div className="UserProfile"><Profile/></div>
              
        </div>
  
    );
  }
  