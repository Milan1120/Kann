import React, { useEffect, useState } from 'react';

const CommunityHeader = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from API
    fetch('/api/username')
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setUsername(data.username);
        }
      })
      .catch((error) => {
        console.error('Error fetching username:', error);
      });
  }, []);

  return (
    <div className='h-16 border-b-2 flex items-center justify-around px-10'>
      <div className='uppercase font-medium'>{username}</div>

      <form action='/api/communitylogout' method='GET'>
        <button type='submit' className='px-2 py-1 rounded-lg bg-fuchsia-900 text-white font-medium hover:bg-blue-900'>
          Logout
        </button>
      </form>
    </div>
  );
};

export default CommunityHeader;
