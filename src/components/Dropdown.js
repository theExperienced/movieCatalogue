import React, { Component } from "react";

import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';




const DropDown = props => {
  const { options, purpose } = props;

  const renderOptions = () => {
    console.log('OPTIONS', options)

  //   if (Array.isArray(options))
  //     return options.map(option => {
  //       return (

  //         // <div className="item" data-value={option[1]}>{option[0]}</div>


  //         // <div className="item" data-value={option[1]}>{option[0]}</div>
  //         <option value={option.value}>{option.title}</option> 

  // //         // <div className="item">
  // //         //   {option}
  // //         // </div>
  //       );
  //     })

      const Comparator = (a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      }

      let arr = Object.entries(options).sort(Comparator).map(([ value, title ]) => <MenuItem headereventKey={value}>{title}</MenuItem>);//<option value={value}>{title}</option>);

      return arr;
  }

  const onChange = e => {
    props.onChange(e.target.value)
  }

  // return (
  //   <select className="ui dropdown" onChange={e => onChange(e)}>
  //     {renderOptions()}
  //   </select> 
  // );

    //     <div id="itdd" className="ui dropdown search button">
    //     <span className="text">Click to select</span>
    //     <div className="menu">
            
    //         {renderOptions()}
    //     </div>
    // </div>










    //   <div className="ui teal buttons">
    //     <div className="ui button">{props.purpose}</div>
    //     <div className="ui floating dropdown icon button">
    //       <i className="dropdown icon"></i>
    //       <div className="menu">{renderOptions()}</div>
    //     </div>
    //   </div>











// {/* <div class="ui selection dropdown">
//   <input type="hidden" name="genre"/>
//   <i class="dropdown icon"></i>
//   <div class="default text">{props.purpose}</div>
//   <div class="menu">
//   
//   </div>
// </div> */}
  











return (
  <Dropdown
      onSelect={(eventKey) => {
      }}
  >
      <Dropdown.Toggle
          btnStyle="flat"
      >
          Select {purpose}
      </Dropdown.Toggle>
      <Dropdown.Menu>
         {renderOptions()}
      </Dropdown.Menu>
  </Dropdown>
);


























  
}

export default DropDown;
