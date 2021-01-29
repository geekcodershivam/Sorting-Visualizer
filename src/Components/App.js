import React,{useState,useEffect} from 'react'
import Container from '@material-ui/core/Container';
import NavBar from './NavBar'
import Element from './Element'
export default function App() {
    const [arr, setArray] = useState([]);
    const [size,setSize]=useState(10);

    useEffect(() => {
        updateList();
    }, [size]);

    const updateList=()=>{
        const randomArr=Array.from({length: size}, () => Math.floor(Math.random() * 100));
        setArray(randomArr);

    }

    const handlegenerate=()=>{
       updateList(); 
    }
    const handleStart=()=>{console.log('iamchange')};
    const handleRestart=()=>{console.log('iamchange')};
    const handleSpeed=(e,v)=>{
        const arr=Object.values([v])
        setSize(arr[0]);
        

    }
    return (
        <div>
            <NavBar 
            GenerateNew={handlegenerate} 
            StartSorting={handleStart} 
            RestartAll={handleRestart}
            Speed={handleSpeed}
            defaultValue={10}
            size={size}
            />
            <Element range={size} data={arr}/>

            
           
        </div>
    )
}
