import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
