import React, { useEffect, useState } from "react";
import axios from "axios";

const MyNotices = () => {
  const [myNotices, setMyNotices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/user/notices`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyNotices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>My Notices</h2>
      <ul>
        {myNotices.map((item) => (
          <li key={item._id}>
            {item.title} - {item.body}{" "}
            <button>Edit</button> <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyNotices;
