import React, { Component } from "react";

class DropDown extends Component {

  renderOptions() {
    console.log('OPTIONS',this.props.options)
    return this.props.options.map(option => {
      return (

        // <div className="item" data-value={option[1]}>{option[0]}</div>


        // <div className="item" data-value={option[1]}>{option[0]}</div>
        <option value={option.value}>{option.title}</option> 

//         // <div className="item">
//         //   {option}
//         // </div>
      );
    });
  }

  onChange = e => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (


    //     <div id="itdd" className="ui dropdown search button">
    //     <span className="text">Click to select</span>
    //     <div className="menu">
            
    //         {this.renderOptions()}
    //     </div>
    // </div>










    //   <div className="ui teal buttons">
    //     <div className="ui button">{this.props.purpose}</div>
    //     <div className="ui floating dropdown icon button">
    //       <i className="dropdown icon"></i>
    //       <div className="menu">{this.renderOptions()}</div>
    //     </div>
    //   </div>

 <select className="ui dropdown" onChange={e => this.onChange(e)}>
  
  {this.renderOptions()}
</select> 










// {/* <div class="ui selection dropdown">
//   <input type="hidden" name="genre"/>
//   <i class="dropdown icon"></i>
//   <div class="default text">{this.props.purpose}</div>
//   <div class="menu">
//   
//   </div>
// </div> */}
    );
  }
}

export default DropDown;
