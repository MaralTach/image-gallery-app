import data from "./data";
console.log(data)
function App() {
  const arr = data.map((item) => item.src.large);
  console.log(arr);
  return (
    <div>
      <p className="title">Image Gallery</p>
      <div className="container">
        {
       data.map((item, index) => 
          <div key={index} className="item">
            <div className="img-container">
            <img src={item.src.large} alt=""/>
            </div>
            <p className="imgTitle">{item.photographer}</p>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default App;
