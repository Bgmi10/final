import React, { useState } from 'react';
import { api_rout_url } from '../../utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Multitask = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [status, setstatus] = useState('');
  const [day, setday] = useState('');
  const [month, setmonth] = useState('');
  const [year, setyear] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api_rout_url}/api/auth/alltask`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description: desc,
          status: parseInt(status),
          day,
          month,
          year,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Task created successfully: " + data.message);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to create task");
      }
    } catch (error) {
      toast.error("An error occurred while creating the task");
    }
  };

  return (
    <div>
      <ToastContainer />
      <p className='text-gray-500 text-2xl font-bold'>
        <FontAwesomeIcon icon={faUsersCog} className='text-2xl text-gray-500 mt-8' /> Assign a task
      </p>

      <form onSubmit={submit}>
        <h1 className='text-gray-500 mt-5'>Title</h1>
        <input type='text' onChange={(e) => settitle(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder='title' required />

        <h1 className='text-gray-500 mt-5'>Description</h1>
        <input type='text' name="description" onChange={(e) => setdesc(e.target.value)} placeholder='description' className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />

        <h1 className='text-gray-500 mt-5'>Status</h1>
        <input type='number' onChange={(e) => setstatus(e.target.value)} placeholder='status' className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />

        <div className="flex flex-col">
          <label htmlFor="deadline" className="text-sm font-medium text-gray-500 mt-5">
            Deadline:
          </label>
          <div className="flex">
            <input
              type="number"
              name="day"
              placeholder="Day"
              onChange={(e) => setday(e.target.value)}
              className="mt-1 mr-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
              required
            />
            <input
              type="number"
              name="month"
              placeholder="Month"
              onChange={(e) => setmonth(e.target.value)}
              className="mt-1 mr-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={(e) => setyear(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded lg:w-40 mb-10">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
