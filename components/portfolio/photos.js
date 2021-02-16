import React, {Component} from "react";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Button } from '../../lib/photo';
import Lightbox from 'react-image-lightbox';
import { lightboxImages } from './lightboxImages'

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      photoIndex: 0,
      isOpen: false,
      left: [
      {
        title: "Mustang",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png",
        photoIndex: 0
      },
      {
        title: "Orange",
        type: "fruits",
        url: "/img/orange.jpg",
        photoIndex: 1
      },
      {
        title: "Suzuki",
        type: "cars",
        url: "/img/5d9b5bff52887931e8497a36.png",
        photoIndex: 2
      },
      {
        title: "Fish",
        type: "animal",
        url: "/img/fish.jpg",
        photoIndex: 3
      },
      {
        title: "Toyota",
        type: "cars",
        url: "/img/toyota.jpg",
        photoIndex: 4
      },
     ],
      middle: [
        {
          title: "mid-asd",
          type: "cars",
          url: "/img/5d9b5bff52887931e8497a36.png",
          photoIndex: 5
        },
        {
          title: "sad",
          type: "animal",
          url: "/img/south-china-tiger.adapt.1900.1.jpg",
          photoIndex: 6
        },
        {
          title: "mid-dvs",
          type: "animal",
          url: "/img/subordinate-meerkat-pack.jpg",
          photoIndex: 7
        },
        {
          title: "qwe",
          type: "fruits",
          url: "/img/orange.jpg",
          photoIndex: 8
        },
      ],
      right: [
        {
          title: "right-dvs",
          type: "animal",
          url: "/img/subordinate-meerkat-pack.jpg",
          photoIndex: 9
        },
        {
          title: "right-sad",
          type: "animal",
          url: "/img/south-china-tiger.adapt.1900.1.jpg",
          photoIndex: 10
        },
        {
          title: "qwe",
          type: "fruits",
          url: "/img/bugatti-chiron-pur-sport-106-1582836604.jpg",
          photoIndex: 11
        },
        {
          title: "asd",
          type: "cars",
          url: "/img/5d9b5bff52887931e8497a36.png",
          photoIndex: 12
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
    const { photoIndex, isOpen } = this.state;

    const renderLeft = <TransitionGroup component={null}>{
      this.state.filterLeft.map(category =>
        <CSSTransition timeout={0} classNames="fade" key={category.title}>
            <img className={"photo-img"} src={category.url} onClick={() => this.setState({ isOpen: true, photoIndex:category.photoIndex, imageTitle:category.title})}></img>
        </CSSTransition>
      )}
      </TransitionGroup>
      const renderButtons = Button.map((button)=>
        <button key={button.title} value={button.value} onClick={this.handleClick}>{button.title}</button>
      )
      const renderMiddle = <TransitionGroup component={null}>{
        this.state.filterMiddle.map(category =>
          <CSSTransition timeout={0} classNames="fade" key={category.title}>
              <img className={"photo-img"} src={category.url} onClick={() => this.setState({ isOpen: true, photoIndex:category.photoIndex })}></img>
          </CSSTransition>
        )}
        </TransitionGroup>
        const renderRight = <TransitionGroup component={null}>{
          this.state.filterRight.map(category =>
            <CSSTransition timeout={0} classNames="fade" key={category.title}>
                <img className={"photo-img"} src={category.url} onClick={() => this.setState({ isOpen: true, photoIndex:category.photoIndex })}></img>
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
            {isOpen && (
              <Lightbox
                mainSrc={lightboxImages[photoIndex]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + lightboxImages.length - 1) % lightboxImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % lightboxImages.length,
                  })
                }
              />
            )}
        </div>
    );
  }
}

export default Photos;