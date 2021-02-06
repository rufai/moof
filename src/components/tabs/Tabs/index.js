import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Tab(props) {
    let { activeTab, label, onClick } = {...props} 
    let className = "tab-list-item"
    
    if (activeTab === label) {
        className += " tab-list-active"
    }

    onClick = () => {
        const { label, onClick } = {...props}
        onClick(label)
    }

    return(
        <li
            className={className}
            onClick={onClick}>
                {label}
        </li>
    )


}

export default Tab;