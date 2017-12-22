import React from 'react';
import { Link } from 'react-router-dom';

class JoinNav extends React.Component {
    render () {
        return (
            <div>
                <Link to = '/find/1'>1</Link>
                <Link to = '/find/2'>2</Link>
                <Link to = '/find/3'>3</Link>
                <Link to = '/find/4'>4</Link>
                <Link to = '/find/5'>5</Link>
            </div>
        );
    }
}

export default JoinNav;