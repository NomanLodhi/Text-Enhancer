import './App.css';
import './style.css';

import Navbar from './Navbar';
import Field from './Field';
import About from './About';
import Alert from './Alert';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
function App() {
  const [mode,setdarkMode]=useState('light');
  const [textChange,settextChange]=useState('dark');
  const [lD,setlD]=useState('Enable ');
  const [alert,setAlert]=useState(null);
  const [dAlert,setdAlert]=useState('none');
  const [BgAlert,setBgAlert]=useState(null);
  const [icon,seticon]=useState(null);
  

  const toggleMode = () =>{
    if(mode ==='light'){
setdarkMode('dark');
settextChange('light');
setlD('Disable ');
seticon('moon');
setAlert('Dark mode enabled');
setdAlert('flex');
setBgAlert('primary');
document.body.style.backgroundColor=' rgb(33,37,41)';
setTimeout(()=>{
  setdAlert('none')
},2000)
}
else{
  seticon('brightness-high');
  setdarkMode('light');
  setdAlert('flex');
  settextChange('dark');
  setlD('Enable ');
  setAlert('Light mode enabled');
  setBgAlert('dark');
  document.body.style.backgroundColor='#fff';
  setTimeout(()=>{
    setdAlert('none')
  },2000)
  }
}

return (
  <>
<BrowserRouter>
<Navbar Name={"TextEnhancer"} mode={mode} toggleMode={toggleMode} textChange={textChange} Ld={lD} />
<Alert message={alert} dAlert={dAlert} BgAlert={BgAlert} icon={icon} />
<Routes>
<Route index element={<Field Placeholder={"Edit your text here"} Preview={"Preview your text : "} textChange={textChange} mode={mode}/>}/>


<Route exact path='/About' element={<About mode={mode}/> }/>
</Routes>
</BrowserRouter>





</>
);
}

export default App;





    

