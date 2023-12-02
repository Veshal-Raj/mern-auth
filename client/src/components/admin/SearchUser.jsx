import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/userContext";

export const SearchUser = ({copyUserData, setCopyUserData }) => {
    console.log(copyUserData)
//   const { setUserData: setContextUserData } = useContext(UserContext);
//   console.log(setUserData)
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  console.log(filteredData)
//     console.log(userData)
//   useEffect(() => {
//     // Initialize filteredData with userData on mount
//     setFilteredData(userData);
//   }, [userData]);

  const handleSearch = () => {
    if (searchText) {
      const filteredUser = copyUserData.filter((user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase())
      );
      setCopyUserData(filteredUser);
    //   setContextUserData(filteredUser);
    } 
  };

  return (
    <div>
      <div className="search p-2 mx-[400] flex items-center justify-center">
        <input
          type="text"
          className="search-box p-2 border border-gray-400 rounded-l-md bg-gray-100 focus:outline-none focus:border-blue-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search user"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="search-button p-2 bg-green-400 text-gray-900 rounded-r-md border-none cursor-pointer hover:bg-green-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};
