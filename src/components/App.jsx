import Profile from './Profile/Profile';
import user from 'data/user';
import Statistics from './Statistics/Statistics';
import data from 'data/data';
import FriendList from './FriendList/FriendList';
import friends from 'data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';

import css from './App.module.css';

export const App = () => {
    return (
        <div
            className={css.wrapper}
            // style={{
            //     height: '100vh',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     fontSize: 40,
            //     color: '#010101',
            // }}
        >
            <div className={css.wrapper__upper}>
                <Profile
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
                <FriendList friends={friends} />
            </div>
            <Statistics title="Upload stats" stats={data} />
            <TransactionHistory items={transactions} />
        </div>
    );
};
