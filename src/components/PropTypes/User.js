import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    return (
        <div>
            <h3>{props.user.id}</h3>
            <h3>{props.user.name}</h3>
        </div>
    );
};

//propstypes can check data type,,it helps us on code debugging
User.propTypes = {
    // key-value
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
};

//jodi props er value na asle default babe ey value golo dekabe
// User.defaultProps = {
//   userName: "default name",
//   userId: 0,
// };

export default User;
