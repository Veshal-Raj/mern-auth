import { useEffect, useState } from "react";

export const UserTable = () => {
    const [userData, setUserData] = useState([])
    // const [blockingUserId, setBlockingUserId] = useState(null);


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

    const editUser = () =>{
      console.log('edit user is clicked')
    }

    const blockUser = async (userId, isActive) => {
      // console.log('user id', userId )
      // console.log('isActive ',isActive)
     try {
      const response = await fetch(`/api/admin/blockUser/${userId}`, {
        method: 'PUT' ,
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isActive: isActive}),
      })
      // console.log(response)
      if (response.ok) {
        setUserData(prevData => (
          prevData.map(user => (user._id === userId ? {...user, isActive: !isActive} : user))
        ))
      } else {
        console.error('Error updating user isVerified status');
      }
     } catch (error) {
      console.error('Error updating user isVerified status: ', error);
     }
    }
    // console.log(userData)
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
  {/* Map through userData and render table rows dynamically */}
  {userData
    .filter(user => user.role !== 'Admin') // Filter out Admin users
    .map(user => (
      <tr key={user._id} className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-600">
        <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
          {user.username}
        </td>
        <td className="px-6 py-3">{user.role}</td>
        <td className="px-6 py-3 uppercase">{user.status}</td>
        <td className="px-6 py-3 text-right">
          <span onClick={editUser} id="editUser" className="text-blue-600 hover:underline hover:cursor-pointer">
            Edit
          </span>
          <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
          <span onClick={() => blockUser(user._id, user.isActive)} id="blockUser" className="text-red-600 hover:underline hover:cursor-pointer">
              {user.isActive ? 'Block' : 'UnBlock'}
          </span>
          {/* <span onClick={blockUser} id="blockUser" className="text-red-600 hover:underline hover:cursor-pointer">
            {user.isActive && user.isActive === true ? 'Block':'Unblock'}
          </span> */}
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
    ))}
</tbody>

      </table>
    </div>
  );
};
