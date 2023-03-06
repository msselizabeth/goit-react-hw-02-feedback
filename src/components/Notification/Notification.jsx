import PropTypes from 'prop-types';

export const Notification = ({text}) => {
    return (<p>{text}</p>)

}

Notification.protoTypes = {
    text: PropTypes.string
}