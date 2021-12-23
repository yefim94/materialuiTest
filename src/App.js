import './index.css';
import {useState} from "react"
import Button from '@mui/material/Button';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Switch from "@mui/material/Switch"
import Alert from "@mui/material/Alert"

function App() {
  const options = ['The Godfather', 'Pulp Fiction'];
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <div className="group">
      <h1>Material UI: Test</h1>
      </div>
      <div className="group">
     <h3>Alerts:</h3>
    
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  

   </div>
    <div className="group">
    <h3>Button:</h3>
     <Button variant="contained">Hello World</Button>
    </div>
   <div className="group">
   <h3>Inputs:</h3>
     <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={options}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
/>
   </div>
   <div className="group">
     <h3>Checkbox</h3>
     <Checkbox  />
   </div>
   <div className="group">
     <h3>Slider</h3>
     <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />
  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>
<Slider disabled defaultValue={30} aria-label="Disabled slider" />
   </div>
   <div className="group">
     <h3>Switch</h3>
     <Switch  />
   </div>
   <div className="group">
     <h3>Text TextField</h3>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
   </div>
    </div>
  );
}

export default App;
