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
      },
      {
        title: "Orange",
        type: "fruits",
      },
      {
        title: "Suzuki",
        type: "cars",
      },
      {
        title: "Fish",
        type: "animal",
      },
      {
        title: "Toyota",
        type: "cars",
      },
      {
        title: "Pinapple",
        type: "fruits",
      },
      {
        title: "Dog",
        type: "animal",
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
            <div className={"photo-img"}>{category.title}</div>
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