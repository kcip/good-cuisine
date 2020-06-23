import React, { Component } from 'react'
import './RecipeCard.css'

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
      <div className="card">
        <div>
          <img className="card-image" src={this.props.imgURL} width={'330px'} height={'220px'} />
        </div>
        <div className="card-name">
          {this.props.name}
        </div>
        <div className="card-mins">
          {this.props.cooktime} minutes
        </div>

      </div>
    )
  }
}
