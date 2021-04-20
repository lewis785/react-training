import React from 'react'
import './ConfirmModal.css'

interface ConfirmModalProps {
  show: boolean
  content: string
  close: () => void
}

class ConfirmModal extends React.Component<ConfirmModalProps> {
  render() {
    if (!this.props.show) {
      return null
    }

    return (
      <div className="modal">
        <div className="content">
          <h2>You tried to reserve and ...</h2>
          <h3 className="text">{this.props.content}</h3>
          <button onClick={() => this.props.close()}>Close</button>
        </div>
      </div>
    )
  }
}

export default ConfirmModal
