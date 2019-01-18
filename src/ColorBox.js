import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

      if(this.props.opacity >= 0.2){
<<<<<<< HEAD

=======
    
>>>>>>> d528d5d9e8f091962dc0d1719bcff79010bfa12d
        return (
      <div className="color-box" style={{opacity: this.props.opacity}}>

          <ColorBox opacity = {this.props.opacity - .1}/>

      </div>)
    }else{ return null}

  }

}
