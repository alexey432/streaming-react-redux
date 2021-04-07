import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <div className="ui button negative">Delete</div>
            <div className="ui button">Cancel</div>
        </React.Fragment>
    )
    
    return (
        <div>
            Stream Delete
            <Modal 
                title="Delete a Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;