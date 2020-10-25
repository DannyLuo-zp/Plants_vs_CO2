import React from 'react'
import { GoogleMap, LoadScript,Rectangle } from '@react-google-maps/api';
import {Modal} from 'antd';

const containerStyle = {
  width: '100%',
    height: '700px',
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center'
}

const center = {
  lat: 41.881690,
  lng: -87.630387
  //41.881690, -87.630387
}
const areaBounds = { 
  south: 41.867131,
  east: -87.624032
}

const areaSize = {
  height: 0.02,
  width: 0.02
}

function Options(count){
      return {
          strokeOpacity: 0.25,
          fillColor: 'green',
          fillOpacity: 0.05 + (count) * 0.05
          //Math.min(0.05 + (count) * 0.05, 0.3)
      }
}

const rectOptions = {
    strokeOpacity: 0.3,
    fillOpacity: 0.1
}

const gridSize = 8
const zoomRate = 14


class Grid extends React.Component {
  constructor(props){
      super(props);
      this.bound = props.bound;
  }

  state = { 
      visible: false,
      count: Math.floor(Math.random() * Math.floor(10))
  };

  showModal = () => {
      this.setState({
      visible: true,
      });
  };

  handleOk = e => {
      this.setState({count: this.state.count + 1});
  };

  handleCancel = e => {
      this.setState({
      visible: false,
      });
  };

  diminish() {
      this.setState({state: 
          (this.state.count > 0)? this.state.count - 1: 0 });
  }

  render() {
      return (
      <>
          <Rectangle bounds={this.bound} 
          options={Options(this.state.count)} 
          onClick={this.showModal}/>
          <Modal
          title="Area"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Add another Plant"
          >
          <p>
              Coordinate: 
          </p>
          <p>
              North - {this.bound.north}, 
              South - {this.bound.south},
          </p>
          <p>
              East - {this.bound.east},
              West - {this.bound.west}
          </p>
          <p>Current Plants number: {this.state.count}</p>
          </Modal>
      </>
      );
  }
}



function option(e, south, east){
  let ans = {
      north: south + areaSize.height,
      south: south,
      east: east - e * areaSize.width,
      west: east - (e + 1) * areaSize.width   
  }
  return ans
}

export function EcoMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBnQLtnVmmFchhoVNletHvubUqEX9uGT88"
    >
      <GoogleMap
    mapContainerStyle={containerStyle}
    zoom={zoomRate}
    center={center}
  >
    <Grid bound={option(0, areaBounds.south, areaBounds.east)} />
    <Grid bound={option(1, areaBounds.south, areaBounds.east)} />
  </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(EcoMap)
  
