import React from 'react'
import { components } from 'react-select';

const NoOptionsMessage = (props) => {
    return (
        <components.NoOptionsMessage {...props}>
            {/* Your custom message here */}
            Không có tùy chọn
        </components.NoOptionsMessage>
    );
}

export default NoOptionsMessage