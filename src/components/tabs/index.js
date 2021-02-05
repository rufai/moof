import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tab from './Tabs'
import { act } from 'react-dom/test-utils'
import './style.css'

const Tabs = (props) => {
    
    const { children } = {...props}
    console.log({props}, {children})
    const [activeTab, setActiveTab] = useState(children[0].props.label)

    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }
    
    return (
   
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((item, index) => {
                        const { label } = item.props
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem} />
                        )
                    })}
                </ol>
                <div className="tab-component">
                    {
                        children.map((child) => {
                            if (child.props.label !== activeTab) return undefined;
                            return child.props.children;
                        })
                    }
                </div>
            </div>
     
    )
}
export default Tabs;



