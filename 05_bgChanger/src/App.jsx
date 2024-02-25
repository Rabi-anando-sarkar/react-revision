import { useState } from "react";

function App() {
  const [color, setColor] = useState("#9c89b8");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#10002b" }}
            onClick={() => setColor("#10002b")}
          >
            Shade 1
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#240046" }}
            onClick={() => setColor("#240046")}
          >
            Shade 2
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#3c096c" }}
            onClick={() => setColor("#3c096c")}
          >
            Shade 3
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#5a189a" }}
            onClick={() => setColor("#5a189a")}
          >
            Shade 4
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#7b2cbf" }}
            onClick={() => setColor("#7b2cbf")}
          >
            Shade 5
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#9d4edd" }}
            onClick={() => setColor("#9d4edd")}
          >
            Shade 6
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#c77dff" }}
            onClick={() => setColor("#c77dff")}
          >
            Shade 7
          </button>
          <button
            className="outline-none px-4 py-3 rounded-full text-white shadow-lg font-semibold
          "
            style={{ backgroundColor: "#e0aaff" }}
            onClick={() => setColor("#e0aaff")}
          >
            Shade 8
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
