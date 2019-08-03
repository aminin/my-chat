import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from './Message'

const MessagesList = ({ messages }) => {
    return (
        <section id="messages-list">
            <ul>
                {messages.map(message => (
                    <Message
                        key={message.id}
                        {...message}
                    />
                ))}
            </ul>
        </section>
    );
};

Message.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string,
            author: PropTypes.string,
        })
    )
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
