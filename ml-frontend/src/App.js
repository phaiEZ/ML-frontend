import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  async function handleSummit() {
    const res = await axios.put("https://httpbin.org/put", {
      word: text,
    });
    console.log(res.data.data);
    alert(res.data.data);
  }
  return (
    <div className="bg-gradient-to-br h-screen from-[#00C9FF] to-[#92FE9D] font-kanit ">
      <div className=" text-white font-bold text-[80px] text-center pt-36">
        Spam mail ?
      </div>
      <div className="flex justify-center flex-auto mt-5">
        <textarea
          cols="80"
          rows="10"
          placeholder="put ur mail here !!!"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center mt-5">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full"
          type="button"
          onClick={handleSummit}>
          Button
        </button>
      </div>
    </div>
  );
}

export default App;
