import React from 'react';
import { Link } from 'react-router-dom';

class SubNav extends React.Component {
    render () {
        return (
            <div>
                <Link to = '/:term/1'>1</Link>
            </div>
        );
    }
}

export default SubNav;