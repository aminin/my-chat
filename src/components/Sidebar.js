import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul>
                {users.map(user => (
                    <li key={user.id}>user.name</li>
                ))}
            </ul>
        </aside>
    );
};

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
