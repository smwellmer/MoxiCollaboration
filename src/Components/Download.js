import React, { Component } from 'react';
//import Pdf from '../../src/story.pdf';

class Download extends Component {

  render() {

    return (
          <a href = 'https://drive.google.com/file/d/1ymZqV-xL8hlNjGr4QSbuReOMFjJKYrI3/view?usp=sharing' target = "_blank" 
           style={{
            borderRadius: '30px',
            padding: '10px',
            // color: 'black',
            color: '#d17a53',
            // backgroundColor: '#8EA487',
            fontSize: '1.2em',
            margin: '0 auto',
            fontFamily: "'Raleway', sans-serif",
            marginTop: '.5em',
            marginBottom: '4em'
        }}
        >Read Buni's Full Story Here</a>
    );

  }
}

export default Download;