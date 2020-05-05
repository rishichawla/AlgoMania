import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import MenuAppBar from './MenuAppBar'
import CodeForm from './CodeForm'

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {mycode: ''};
      }

    loadData = (url) => {
        fetch(url)
          .then(function (response) {
            // console.log(url + " -> " + response.ok);
            if(response.ok){
              return response.text();
            }
            throw new Error('Error message.');
          })
          .then(function (data) {
            // console.log("data: ", data);
            this.setState({ mycode: data });
          }.bind(this))
          .catch(function (err) {
            console.log("failed to load ", url, err.message);
          });
      }

 
    componentDidMount() {
        this.UserList();
      }

      UserList() {
        fetch('https://api.github.com/repos/includesgsits/AlgoMania-Algorithm/contents')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    this.loadData(jsonData[jsonData.length-1]['download_url'])
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
      }

    render() {
       
        return (
            <>
            <MenuAppBar />
            <Grid container>
                <Grid item md={6}>
                <pre style={{overflow:'scroll'}}>
                { this.state.mycode  }
    </pre>
                </Grid>

                <Grid item md={6}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTMDcg-4WVEz9JGfy86Ejtyu5wFLFSWjvd5BQl4SXHq-qUPQ/viewform?embedded=true" width="640" height="1221" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Grid>
            
            </Grid>
            </>
        )
    }
}

export default Home;