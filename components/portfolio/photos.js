import React, {Component} from "react";

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
        title: "Fish",
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
    const renderAll = this.state.filterCategory.map(category => <div className={"photo-img"} key={category.title}>{category.title}</div>)
    return (
        <div>
          <button value='all' onClick={this.handleClick}>All</button>
          <button value='cars' onClick={this.handleClick}>Cars</button>
          <button value='fruits' onClick={this.handleClick}>Fruits</button>
          <button value='animal' onClick={this.handleClick}>Animal</button>

          {renderAll}

        </div>
    );
  }
}

export default Photos;