import { useEffect, useState } from "react";

export const UserTable = () => {
    const [userData, setUserData] = useState([])
    // console.log(userData)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/admin/getAllUsers');
                const data = await response.json()
                setUserData(data)
            } catch (error) {
                console.error('Error fetching data: ',error);
            }
        }

        fetchUserData()
    },[])
    console.log(userData)
  return (
    <div className="mx-auto max-w-2xl overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">
        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">User Name</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
            <th className="px-6 py-3">Change Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17
            </td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="text-blue-600 hover:underline">
                Edit
              </a>
              <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
              <a href="#" className="text-red-600 hover:underline">
                Delete
              </a>
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Make Admin
              </button>
            </td>
          </tr>

          <tr className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
              Microsoft Surface Pro
            </td>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="text-blue-600 hover:underline">
                Edit
              </a>
              <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
              <a href="#" className="text-red-600 hover:underline">
                Delete
              </a>
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Make Admin
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </td>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="text-blue-600 hover:underline">
                Edit
              </a>
              <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
              <a href="#" className="text-red-600 hover:underline">
                Delete
              </a>
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Make Admin
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
