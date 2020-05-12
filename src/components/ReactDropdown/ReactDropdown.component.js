import React, { useState } from 'react';
// import { Dropdown } from 'reactjs-dropdown-component';
// import {
//     DropdownContainer,
//     DropdownMenu,
//     DropdownMultiSelect,
//   } from '@opuscapita/react-dropdown';


const ReactDropdown = ({ optVals, purpose, onChange }) => {
    // const values = Object.keys(optVals);
    // const options = Object.values(optVals);

    const setupOptions = () => {
        return {
            [`${purpose}s`]: Object.entries(optVals).map(([value, option]) => ({
                      id: value,
                      title: option,
                      key: purpose,
                      selected: false
                  }))

        }
    }   

    const [ options, setOptions ] = useState(setupOptions());
    const [ prevSelect, setPrevSelected ] = useState(null);

    const resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(options[key]));
    
        temp[prevSelect].selected = false;
        temp[id].selected = true;
        setOptions({
            [key]: temp
        });
        setPrevSelected(id);
    }

    return (
        // <Dropdown
        //     searchable={purpose === 'language' ? ["Search language", "No matching language"] : null}
        //     title={`Select ${purpose}`}
        //     list={options}
        //     resetThenSet={resetThenSet}
        // />
null
















        // <Select options={options} values={values} onChange={onChange} placeholder={`Select a ${purpose}... `} />


    //     <>
    //   <DropdownContainer
    //   id={purpose}
    //   //isOpen
    //   //noCaret
    //   title={purpose}
    // >
    //   <div>
    //     CONTENT
    //   </div>
    // </DropdownContainer>
    // <DropdownMenu
    //   id="example"

    //   menuItems={Object.entries(optVals).map(([value, option]) => ({
    //       id: value,
    //       title: option,
    //       onClick: onChange
    //   }))}
          
    //   />
    //   </>
    //   menuItems={[
    //     {
    //       id: 'item_id_11',
    //       title: 'Item 1, dont\'t close',
    //       onClick: () => console.log('Item 1 clicked'),
    //       disableClosing: true,
    //     },
    //     {
    //       id: 'item_id_12',
    //       title: 'Item 2, with the icon',
    //       onClick: () => console.log('Item 2 clicked'),
    //       icon: <Icon type="indicator" name="ok" width={25} height={25} />,
    //     },
    //     {
    //       id: 'item_id_d1',
    //       type: 'divider',
    //     },
    //     {
    //       id: 'item_id_13',
    //       title: 'Item 3',
    //       onClick: () => console.log('Item 3 clicked'),
    //       disabled: true,
    //     },
    //   ]}
    
    )
}

export default ReactDropdown;

