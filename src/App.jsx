import './App.css';

function App(data) {
  // code here
  let i_data=data.prop1();
  return(
     <>
     <h2 className="header">Gallary Image</h2>
     <div className='body'>
    {
      i_data.map((obj)=>{
        return(
          <img src={obj.img} alt="elephant"/>
        )
      })
    }

  </div>
  </>
  )
}

export default App;
