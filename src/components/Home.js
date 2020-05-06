import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import MenuAppBar from './MenuAppBar'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";

class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {mycode: '',
        extension:''};
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
    
    if(jsonData[jsonData.length-1]['download_url'].split(".")[3].toLowerCase() == 'c' ||
    jsonData[jsonData.length-1]['download_url'].split(".")[3].toLowerCase() == 'cpp' || 
    jsonData[jsonData.length-1]['download_url'].split(".")[3].toLowerCase() == 'c++') this.setState({
        extension : 'c_cpp'
    })
    else if(jsonData[jsonData.length-1]['download_url'].split(".")[3].toLowerCase() == 'py') this.setState({extension:'python'})
    else this.setState({extension : jsonData[jsonData.length-1]['download_url'].split(".")[3].toLowerCase()})
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
                <Grid item md={6} xs={12}>
                <pre>
                <AceEditor 
                mode={this.state.extension}
                width='100%'
                theme='github'
                    readOnly
                    value= { this.state.mycode  }
                    fontSize='18px'
                    />
                
    </pre>
                </Grid>

                <Grid item md={6} xs={12}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNLsUI8EeBZtvTEcpg2NBAad51sN4V_GA-WkDQvPJ3YPj9tg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Grid>
            
            </Grid>
            </>
        )
    }
}

export default Home;