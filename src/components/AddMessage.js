import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addMessage } from "../actions";

const AddMessage = (props) => {
    let input;
    return <section id="new-message">
        <input onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    props.addMessage(input.value, 'Я');
                    input.value = '';
                }
            }}
            type="text"
            ref={(node) => {input = node}}
        />
    </section>
};

AddMessage.propTypes = {
    addMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message, author) => {
        dispatch(addMessage(message, author));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
