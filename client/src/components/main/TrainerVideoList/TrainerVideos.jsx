
import React, { Component } from 'react';
import TrainerVideo from './TrainerVideo'
import './TrainerVideos.css';

class TrainerVideos extends Component {
    static defaultProps = {
        data: []
      }

    render() {
    const {data} = this.props;
    const list = data.map(
      info => (
      <TrainerVideo
       key={info[0].id}
       info={info}
       />)
    );
    return (
      <div className="videosSection" >
        {list}    
      </div>
    );
  }
}

export default TrainerVideos;