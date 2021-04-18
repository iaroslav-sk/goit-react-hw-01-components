import React from 'react';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import StatisticList from './components/StatisticList/StatisticList';
import friendsData from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList titule={'Upload stats'} stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactionItem={transactions} />
    </div>
  );
};

export default App;
