import React, {Component} from "react";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Button } from '../../lib/photo';

class Photos extends Component {
  constructor() {
    super();
    this.state = { categories: [
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
      filterCategory: []
    }
  }
  componentDidMount(){
    this.setState({
      filterCategory: this.state.categories
    })
  }

  handleClick = event => {
    const byType = event.target.value
    let filterCategory = []
    if(event.target.value === 'all'){
      filterCategory = this.state.categories
    } else{
      filterCategory = this.state.categories.filter(category => category.type === byType)
    }
    this.setState({filterCategory: filterCategory})
  }

  render() {
    const renderAll = <TransitionGroup component={null}>{
      this.state.filterCategory.map(category =>
        <CSSTransition timeout={600} classNames="fade" key={category.title}>
          <div className="column">
            <img className={"photo-img"} src={category.url}></img>
          </div>
        </CSSTransition>
      )}
      </TransitionGroup>
      const renderButtons = Button.map((button)=>
        <button key={button.title} value={button.value} onClick={this.handleClick}>{button.title}</button>
      )
      
    return (
        <div>
          <div className="buttons">
            {renderButtons}
          </div>
            {renderAll}
        </div>
    );
  }
}

export default Photos;