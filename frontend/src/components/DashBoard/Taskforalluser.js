import React, { useEffect, useState } from 'react';
import { api_rout_url } from '../../utils/Constants';

export const Taskforalluser = () => {
  const [tasks, setTasks] = useState([]);
  const [usernames, setUsernames] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch tasks and user data concurrently
        const [taskResponse, userResponse] = await Promise.all([
          fetch(`${api_rout_url}/api/auth/getalltask`),
          fetch(`${api_rout_url}/api/auth/users`)
        ]);

        // Check if responses are OK
        if (!taskResponse.ok) {
          throw new Error(`Failed to fetch tasks: ${taskResponse.statusText}`);
        }
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch users: ${userResponse.statusText}`);
        }

        // Parse the responses
        const taskData = await taskResponse.json();
        const usersData = await userResponse.json();
       

        // Map user IDs to usernames
        const userNamesMap = usersData?.users?.reduce((acc, user) => {
          acc[user._id] = user.name;
          return acc;
        }, {});

        // Update state
        setTasks(taskData);
        setUsernames(userNamesMap);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      <table className='min-w-full mt-10'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm text-white border-r border-gray-300'>Title</th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm text-white border-r border-gray-300'>Description</th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm text-white border-r border-gray-300'>Status</th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm text-white'>User</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.users?.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className='py-3 px-4 border-r border-gray-300'>{item.title}</td>
              <td className='py-3 px-4 border-r border-gray-300'>{item.description}</td>
              <td className='py-3 px-4 border-r border-gray-300'>{item.status}</td>
              <td className='py-3 px-4'>{usernames[item.user]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
