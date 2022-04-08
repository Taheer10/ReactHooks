import React, { Component } from 'react'

 class ClassCounter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count: 0
       }
     }

     changeHanlder=()=>{
         this.setState({count: this.state.count + 1})
     }
  render() {
      const{count} = this.state
    return (
      <div>

          <button onClick={this.changeHanlder}>Click {count} Times</button>
      </div>
    )
  }
}

export default ClassCounter