import React , {Component} from 'react';
import Refresher from './Refresher.js';
import './SwipeRefreshLayout.css';
class SwipeRefreshView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'refreshing':false,
    }

    this.startY = 0;
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.simulateRefreshAction2 = this.simulateRefreshAction2.bind(this);
  }

  handleTouchStart(e) {
    this.startY = e.touches[0].pageY;
  }


  handleTouchMove(e) {
    const y = e.touches[0].pageY;

    if(window.scrollY === 0 && y > this.startY+100 && !this.state.refreshing) {
     this.simulateRefreshAction2()
    }
  }

  //  simulateRefreshAction() {
  //   const sleep = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
  //
  //   const transitionEnd = function(propertyName, node) {
  //     return new Promise(resolve => {
  //       function callback(e) {
  //         e.stopPropagation();
  //         if (e.propertyName === propertyName) {
  //           node.removeEventListener('transitionend', callback);
  //           resolve(e);
  //         }
  //       }
  //       node.addEventListener('transitionend', callback);
  //     });
  //   }
  //
  //   const refresher = document.querySelector('.refresher');
  //
  //   document.body.classList.add('refreshing');
  //   // await sleep(2000);
  //
  //   refresher.classList.add('shrink');
  //   // await transitionEnd('transform', refresher);
  //   refresher.classList.add('done');
  //
  //   refresher.classList.remove('shrink');
  //   document.body.classList.remove('refreshing');
  //   // await sleep(0); // let new styles settle.
  //   refresher.classList.remove('done');
  // }



 simulateRefreshAction2() {
    const sleep = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

    // const refresher = document.querySelector('.refresher');
    // document.body.classList.add('refreshing');
    this.setState({refreshing:true})
    sleep(1500).then(() => {
      this.setState({refreshing:false})
    });
    if(this.props.onRefresh) {
      this.props.onRefresh()
    }

  }

  componentDidMount() {

    if(this.props.disableChromeDefaultRefresh) {
      let x = document.getElementsByTagName("BODY")[0];
      if(x) {
        x.style["overscroll-behavior-y"] = 'none';
      }

    }

    window.addEventListener('touchstart', this.handleTouchStart, {passive:true});
    window.addEventListener('touchmove', this.handleTouchMove, {passive:true});
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchStart, {passive:true});
    window.removeEventListener('touchmove', this.handleTouchMove, {passive:true});
  }


  // if you want to overrride the behaviour of refresh layout
  // provide overrideRefresh prop.
  // also adjust showRefresh appropriately;
  render() {
    let showRefreshIcon = false;
    if(this.props.overrideRefresh) {
      showRefreshIcon = this.props.showRefresh;
    } else {
      showRefreshIcon = this.state.refreshing;
    }
    return(
      <div>
        <Refresher
          show={showRefreshIcon}
          >
        </Refresher>
        {this.props.children}
      </div>
    )
  }
}

export default SwipeRefreshView;
