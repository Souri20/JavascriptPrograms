const App = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
  
    async function fetchData() {
      try {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts");
        let result2 = await result.json();
        setData(result2);
      } catch (err) {
        setError(err);
      }
    }
  
    useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => response.json())
      //   .then((res) => {
      //     setData(res);
      //   })
      //   .catch((err) => {
      //     setError(err);
      //   });
      fetchData();
    }, []);
  
    return (
      <div>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
    );
  };
  
  render(<App />, document.getElementById("root"));