import React, {Component} from "react";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Button } from '../../lib/photo';

class Photos extends Component {
  constructor() {
    super();
    this.state = { left: [
      {
        title: "Mustang",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png"
      },
      {
        title: "Orange",
        type: "fruits",
        url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg"
      },
      {
        title: "Suzuki",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png"
      },
      {
        title: "Fish",
        type: "animal",
        url: "/img/south-china-tiger.adapt.1900.1.jpg"
      },
      {
        title: "Toyota",
        type: "cars",
        url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg"
      },
      {
        title: "qweqqq",
        type: "fruits",
        url: "/img/healthy-fruits-1296x728.jpg"
      },
      {
        title: "dvs",
        type: "animal",
        url: "/img/subordinate-meerkat-pack.jpg"
      },
      {
        title: "reg",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png"
      },
      {
        title: "qwe",
        type: "fruits",
        url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg"
      },
      {
        title: "asd",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png"
      },
      {
        title: "sad",
        type: "animal",
        url: "/img/south-china-tiger.adapt.1900.1.jpg"
      },
     ],
      middle: [
        {
          title: "asd",
          type: "cars",
          url: "/img/5d9b5bff52887931e8497a36.png"
        },
        {
          title: "sad",
          type: "animal",
          url: "/img/south-china-tiger.adapt.1900.1.jpg"
        },
        {
          title: "dvs",
          type: "animal",
          url: "/img/subordinate-meerkat-pack.jpg"
        },
        {
          title: "qwe",
          type: "fruits",
          url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg"
        },
      ],
      right: [
        {
          title: "dvs",
          type: "animal",
          url: "/img/subordinate-meerkat-pack.jpg"
        },
        {
          title: "sad",
          type: "animal",
          url: "/img/south-china-tiger.adapt.1900.1.jpg"
        },
        {
          title: "qwe",
          type: "fruits",
          url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg"
        },
        {
          title: "asd",
          type: "cars",
          url: "/img/5d9b5bff52887931e8497a36.png"
        },
      ],
      
      filterLeft: [],
      filterMiddle: [],
      filterRight: [],
    }
  }
  componentDidMount(){
    this.setState({
      filterLeft: this.state.left,
      filterMiddle: this.state.middle,
      filterRight: this.state.right
    })
  }

  handleClick = event => {
    const byType = event.target.value
    let filterLeft = []
    let filterMiddle = []
    let filterRight = []
    if(event.target.value === 'all'){
      filterLeft = this.state.left
      filterMiddle = this.state.middle
      filterRight = this.state.right
    } else{
      filterLeft = this.state.left.filter(category => category.type === byType)
      filterMiddle = this.state.middle.filter(category => category.type === byType)
      filterRight = this.state.right.filter(category => category.type === byType)
    }
    this.setState({
      filterLeft: filterLeft,
      filterMiddle: filterMiddle,
      filterRight: filterRight,
    })
  }

  render() {
    const renderLeft = <TransitionGroup component={null}>{
      this.state.filterLeft.map(category =>
        <CSSTransition timeout={600} classNames="fade" key={category.title}>
            <img className={"photo-img"} src={category.url}></img>
        </CSSTransition>
      )}
      </TransitionGroup>
      const renderButtons = Button.map((button)=>
        <button key={button.title} value={button.value} onClick={this.handleClick}>{button.title}</button>
      )
      const renderMiddle =
        this.state.filterMiddle.map(category =>
          <div key={category.title}>
            <img className={"photo-img"} src={category.url}></img>
          </div>      
        )

        const renderRight = <TransitionGroup component={null}>{
          this.state.filterRight.map(category =>
            <CSSTransition timeout={600} classNames="fade" key={category.title}>
                <img className={"photo-img"} src={category.url}></img>
            </CSSTransition>
          )}
          </TransitionGroup>
      
    return (
        <div>
          <div className="buttons">
            {renderButtons}
          </div>
          <div className="row">
              <div className="column">
                {renderLeft}
              </div>
              <div className="column">
                {renderMiddle}
              </div>
              <div className="column">
                {renderRight}
              </div>
            </div>
        </div>
    );
  }
}

export default Photos;