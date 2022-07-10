import React, { Component } from 'react';
import Pdf from '../../src/story.pdf';

class Download extends Component {

  render() {

    return (
          <button a href = {Pdf} target = "_blank" 
           style={{
            borderRadius: '30px',
            padding: '10px',
            color: 'black',
            backgroundColor: '#8EA487',
            fontSize: '1.2em',
            margin: '0 auto',
            fontFamily: "'Raleway', sans-serif",
            marginTop: '1em',
            marginBottom: '1.5em'
        }}
        >Read Buni's Full Story Here</button>
    );

  }
}

export default Download;