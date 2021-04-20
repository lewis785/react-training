import React from 'react'
import { Space as SpaceModal } from '../../model/Model'
import DataService from '../../services/DataService'
import Space from './Space'
import ConfirmModal from './ConfirmModal'

interface SpacesState {
  spaces: SpaceModal[]
  showModal: boolean
  modalContent: string
}
interface SpacesProps {
  dataService: DataService
}

class Spaces extends React.Component<SpacesProps, SpacesState> {
  state: SpacesState = {
    spaces: [],
    showModal: false,
    modalContent: '',
  }

  async componentDidMount() {
    const result = await this.props.dataService.getSpaces()
    this.setState({ spaces: result })
  }

  private reserveSpace = async (spaceId: string) => {
    const result = await this.props.dataService.reserveSpace(spaceId)
    if (result) {
      this.setState({
        showModal: true,
        modalContent: `You reserved the space with id ${spaceId} and got the reservation number ${result}`,
      })
    } else {
      this.setState({
        showModal: true,
        modalContent: `You can't reserve the space with id ${spaceId}`,
      })
    }
  }

  private onCloseModal = () => {
    this.setState({ showModal: false, modalContent: '' })
  }

  renderSpaces() {
    return this.state.spaces.map((space) => {
      return (
        <Space
          location={space.location}
          name={space.name}
          spaceId={space.spaceId}
          reserveSpace={this.reserveSpace}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Spaces page!</h2>
        {this.renderSpaces()}
        <ConfirmModal
          close={this.onCloseModal}
          content={this.state.modalContent}
          show={this.state.showModal}
        />
      </div>
    )
  }
}

export default Spaces
