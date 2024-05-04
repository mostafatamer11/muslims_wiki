// import reactLogo from './assets/react.svg'
import { Suspense } from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  // Fetch Data from API
  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await fetch("http://127.0.0.1:5000");
      // Parse data from API
      const data = await response.json();
      setData(() => data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <Suspense fallback={"Loading..."}>
        <p>{data ? data['message'] : "Loading..."}</p>
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <p>Your username is: {data ? data['user'] : "Loading..."}</p>
      </Suspense>
    </>
  );
}

export default App;
