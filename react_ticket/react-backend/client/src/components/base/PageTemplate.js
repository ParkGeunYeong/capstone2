import React from 'react';
import HeaderArea from '../header/HeaderArea'
const PageTemplate = ({header, children}) => (
    <div className="index_six">
        <HeaderArea/>
        <main>
            {children}
        </main>
    </div>
)

export default PageTemplate