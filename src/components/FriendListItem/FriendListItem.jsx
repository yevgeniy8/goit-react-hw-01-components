import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            {isOnline ? (
                <span className={css.online}>{isOnline}</span>
            ) : (
                <span className={css.offline}>{isOnline}</span>
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.friend__name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
