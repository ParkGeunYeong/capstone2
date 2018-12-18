import React from 'react';

import HeaderArea from '../container/hedaer/HeaderArea'

const PageTemplate = ({header, children}) => {
    return (
    <div className="index_six">
        <HeaderArea/>
        <main>
            {children}
        </main>
    </div>
    );
}

export default PageTemplate;
