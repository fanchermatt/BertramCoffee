import { useEffect } from "react";

const App = () => {
  //on load, fetch the data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello World</p>
      </header>
    </div>
  );
};

export default App;
