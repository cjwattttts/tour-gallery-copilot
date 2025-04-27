import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import corsFix from "./corsProxy";

// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error
const url = `${corsFix}https://course-api.com/react-tours-project`;

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch tours from the API
  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  // Call fetchTours when the page loads
  useEffect(() => {
    fetchTours();
  }, []);

  // Remove a tour by id
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // If loading is true, display "Loading..."
  // If error, display an error message
  // Else, render Gallery with tour data
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong. Please try again later.</h2>;
  }

  // If no tours are left, show a "Refresh" button to refetch the data
  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
