import React, { Component } from 'react'

export default class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {}
    }
  }

  componentDidMount() {
    let recipe = this.props.recipe
    this.setState({ recipe })

  }


  render() {
    return (
      <div>
        <div>
          <img src={this.props.imgURL} width={'100px'} />
        </div>
        <div>
          {this.props.name}

        </div>


      </div>
    )
  }
}
