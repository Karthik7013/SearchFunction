/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "./Index.css";

function App() {

  let [input, setInput] = useState();
  let [data, setData] = useState();
  let [filter, setFilter] = useState();


  async function getData() {
    let res = await axios.get("https://karthik7013.github.io/videosAPI/");
    setData(res.data);
    setFilter(res.data);
  }

  function handleSubmit(input) {
    let filter_data = data.filter((e) => e.title.includes(input));
    setFilter(filter_data);
  }



  useEffect(() => {
    if (input === "") {
      setFilter(data);
    }
  }, [input])


  useEffect(() => {
    getData();
  }, [])









  function handleChange(e) {
    setInput(e.target.value);
    let filter = data.filter((e) => e.title.includes(input));
    setFilter(filter);
  }





  return <div>
    <form action="">
      <input type="text" onChange={(e) => { handleChange(e) }} />
      <button type="button" onClick={() => { handleSubmit(input) }} >Submit</button>
    </form>



    <table>
      {(filter != undefined) ? filter.map((e, index) =>
        <tr key={e.index}><td>{e.title}</td><td>{e.poster}</td></tr>) : null}
    </table>

  </div >
}



export default App;