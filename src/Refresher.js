import React, {Component} from 'react';
import './SwipeRefreshLayout.css';

class Refresher extends Component {
  render() {
    let show = this.props.show;
    const classes = ['refresher'];

    if(show) {
      classes.push('refreshing');
    } else {
      // classes.remove('refreshing')
      classes.push('refreshing');
      classes.push('hideRefreshing');
    }
    return(
      <div
        id = {"containerRefresher"}
        className={classes.join(' ')}>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    )
  }

}

export default Refresher;
