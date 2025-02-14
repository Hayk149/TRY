import './App.css'
import React, { useState, useEffect } from 'react';
import SeminarsList from './Components/SeminarsList/SeminarsList';


function App() {

  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/seminars');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSeminars(data);
      } catch (error) {
        setError(error);
        console.error("Could not fetch the data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

    const remove = async (seminar) => {
    try {
      const response = await fetch(`http://localhost:3000/seminars/${seminar.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSeminars(seminars.filter(sem => sem.id !== seminar.id));
    } catch (error) {
      setError(error);
      console.error("Could not delete the seminar:", error);

      
    }
  };

  const update = async (updatedSeminar) => {
    try {
      const response = await fetch(`http://localhost:3000/seminars/${updatedSeminar.id}`, {
        method: 'PUT', // Используем PUT для полного обновления или PATCH для частичного
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSeminar),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Обновляем семинар в состоянии
      setSeminars(
        seminars.map((seminar) =>
          seminar.id === updatedSeminar.id ? updatedSeminar : seminar
        )
      );

    } catch (error) {
      setError(error);
      console.error("Could not update the seminar:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // const remove = (seminar) => {
  //   setSeminars(seminars.filter(sem => sem.id !== seminar.id))
  // }

  return (
    <div className="App">
      {
        <SeminarsList seminars={seminars} title={"Список семинаров"} remove={remove} update={update}/>
      }
    </div>
  );
}

export default App;
