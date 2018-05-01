import React from 'react'

const withModal = Component =>
  // Return wrapped class
  class Modal extends React.Component {
    state = {
      show: false,
    }

    showModal = () => {
      this.setState({
        show: true,
      })
    }

    handleModalClose = () => {
      this.setState({
        show: false,
      })
    }

    render() {
      return (
        <Component
          show={this.state.show}
          showModal={this.showModal}
          handleModalClose={this.handleModalClose}
          {...this.props}
        />
      )
    }
  }

export default withModal
