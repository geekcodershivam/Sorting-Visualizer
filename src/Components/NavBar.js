import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Test from './Test'
import './NavBar.css'
export default function HideAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [algo,setalgo]=useState('Select algorithm');
  const valuetext=(v)=>{
    return v;
  }
  
  return (
    <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography className="btn" variant="h6" onClick={()=>{ 
              props.GenerateNew()}}>Generate New Array</Typography>
            <Typography className="btn" variant="h6">Change Array Size & Sorting Speed</Typography>
            <Typography className="btn" variant="h6"></Typography>
      <Slider 
        className="MuiSlider-root"
        defaultValue={props.defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        valueLabelDisplay="on"
        onChange={props.Speed}
        size={props.size}
        

      />
      <Typography variant="h6"></Typography>
      <Typography variant="h6" aria-controls="fade-menu" aria-haspopup="true" onClick={(e)=>{ setAnchorEl(e.currentTarget);}}>{algo}</Typography>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=>{setAnchorEl(null)}}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Selection Sort')}}>Selection Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Bubble Sort')}}>Bubble Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Insertion Sort')}}>Insertion Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Merge Sort')}}>Merge Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Quick Sort')}}>Quick Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Heap Sort')}}>Heap Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Counting Sort')}}>Counting Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Radix Sort')}}>Radix Sort</MenuItem>
        <MenuItem onClick={()=>{setAnchorEl(null); setalgo('Bucket Sort')}}>Bucket Sort</MenuItem>

        
      </Menu>
      <Typography className="btn" variant="h6" onClick={()=> props.StartSorting()}>Starts</Typography>
      <Typography className="btn" variant="h6" onClick={()=> props.RestartAll()}>Restart</Typography>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  );
}