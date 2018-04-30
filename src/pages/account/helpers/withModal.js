import React from 'react'

const withModal = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
  
      this.showModal = this.showModal.bind(this)
      this.handleModalClose = this.handleModalClose.bind(this)
    }
  
    state = {
      show: false
    }
  
    showModal() {
      this.setState({
        show: true
      })
    }
  
    handleModalClose() {
      this.setState({
        show: false
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
}

export default withModal
