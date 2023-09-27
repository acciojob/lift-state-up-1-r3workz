
import React, {useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{
          width: "100vw",
          backgroundColor: "purple"
        }} className="parent">
          <h1>Parent Component</h1>
          <Child showModal={showModal} setShowModal={setShowModal}>

            {showModal&&
            <div class="modal">
              <h2>Modal Content</h2>
              <p>This is a modal content</p>
            </div>
            }
          </Child>

        </div>
    </div>
  )
}

export default App
