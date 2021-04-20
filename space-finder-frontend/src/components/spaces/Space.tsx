import React from 'react'
import genericImage from '../../assets/generic-building.jpg'
import './Space.css'

interface SpaceProps {
  spaceId: string
  name: string
  location: string
  imageUrl?: string
  reserveSpace: (spaceId: string) => void
}

class Space extends React.Component<SpaceProps> {
  private renderImage() {
    if (this.props.imageUrl) {
      return <img className="" src={this.props.imageUrl} alt="" />
    } else {
      return <img src={genericImage} alt="" />
    }
  }

  render() {
    return (
      <div className="space-component">
        {this.renderImage()}
        <label className="name">{this.props.name}</label> <br />
        <label className="space-id">{this.props.spaceId}</label> <br />
        <label className="location">{this.props.location}</label> <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    )
  }
}

export default Space
