import React from 'react';
import { useHistory } from "react-router-dom"
import Grid from '../Components/Grid';
import GridColumn from '../Components/GridColumn';
import GridQuadrant from '../Components/GridQuadrant';

function GridExamples() {
  const history = useHistory()
  return (
    <div className="app">
      <h1>Gotanyalo React app Grid System</h1>
      <button style={{marginBottom: 25}} onClick={(e) => history.push("/form")}>See Form Process</button>
      <Grid height="500px">
        <GridColumn width="50%">
          <GridQuadrant height="70%">
              <img src={require("../assets/images/house.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
          <GridQuadrant height="30%">
            <img src={require("../assets/images/onion.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
        </GridColumn>
        <GridColumn width="50%">
          <GridQuadrant height="50%">
            <img src={require("../assets/images/wrench.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
          <GridQuadrant height="50%">
            <img src={require("../assets/images/cactus.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
        </GridColumn>
      </Grid>
          
      <Grid height="500px">
        <GridColumn width="70%">
          <GridQuadrant height="40%">
            <img src={require("../assets/images/house.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
          <GridQuadrant height="60%">
            <img src={require("../assets/images/onion.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
        </GridColumn>
        <GridColumn width="30%">
          <GridQuadrant height="70%">
            <img src={require("../assets/images/wrench.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
          <GridQuadrant height="30%">
            <img src={require("../assets/images/cactus.jpg")} alt="" class="demo-img"/>
          </GridQuadrant>
        </GridColumn>
      </Grid>
    </div>
  );
}

export default GridExamples;
