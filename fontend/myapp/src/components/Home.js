import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/notice?category=${category}`);
        setNotices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h2>Home</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="parking">Parking</option>
        <option value="covid">Covid</option>
        <option value="maintenance">Maintenance</option>
      </select>
      <ul>
        {notices.map((item) => (
          <li key={item._id}>
            {item.title} - {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
