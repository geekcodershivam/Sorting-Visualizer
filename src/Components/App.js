import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import Element from './Element'
export default function App() {
    const [arr, setArray] = useState([]);
    const [size,setSize]=useState(10);
    const [currentidx,setCurrentidx]=useState(null);
    const [currentNextidx,setCurrentNextidx]=useState(null);
    const [currentprevidx,setCurrentprevidx]=useState(null);
    const [currentprevNextidx,setCurrentprevNextidx]=useState(null);
    const [final,setFinal]=useState("");

    useEffect(() => {
        updateList();
    }, [size]);

    const updateList=()=>{
        const randomArr=Array.from({length: size}, () => Math.floor(Math.random() * 100));
        setArray(randomArr);

    }
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const handlegenerate=()=>{
       updateList(); 
    }
    const handleStart=(algo)=>{
        console.log(algo)
        BubbleSort(arr)
    };
    const handleRestart=()=>{console.log('iamchange')};
    const handleSpeed=(e,v)=>{
        const arr=Object.values([v])
        setSize(arr[0]);
        

    }

    const BubbleSort=async (arr)=>{
        let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            setCurrentidx(j);
            setCurrentNextidx(j+1);
            
            if (arr[j] > arr[j + 1]) {
                setCurrentprevidx(j);
                setCurrentprevNextidx(j+1);
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                setCurrentprevidx(null);
                setCurrentprevNextidx(null);
            }
            setArray([...arr]);
            
        }
         await sleep(20);
    }
            setCurrentidx(null);
            setCurrentNextidx(null);
            setFinal("#b577e7");
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
            <Element range={size} 
            data={arr} 
            currentidx={currentidx} 
            currentNextidx={currentNextidx} 
            final={final}
            currentprevidx={currentprevidx}
            currentprevNextidx={currentprevNextidx}
            />

            
           
        </div>
    )
}
