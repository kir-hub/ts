import React , {useState} from 'react'
import { statistic } from '../http/userAPI'
import { VictoryPie } from 'victory';
import styles from './Main.module.sass'




export default function Diagram() {

  const [diagram, setDiagram] = useState('')

    

    const showDiagram = async ()=>{
        const response = await statistic()
        const votes = response.data
        let arr = new Array
        for (let i of votes){
              arr.push(i.number)
             
        }     
        return  setDiagram(() => <svg viewBox="-50 50 350 320">
                <VictoryPie name="pie"
                
                width={250}
                standalone={false}
                style={{ labels: {fontSize: 15, padding: 5}}}
                data={[
                    {x: "1", y: (arr.filter((i) =>  i == 1)).length}, 
                    {x: "2", y: (arr.filter((i) =>  i == 2)).length}, 
                    {x: "3", y: (arr.filter((i) =>  i == 3)).length}, 
                    {x: "4", y: (arr.filter((i) =>  i == 4)).length},
                    {x: '5', y: (arr.filter((i) =>  i == 5)).length},
                    {x: '6', y: (arr.filter((i) =>  i == 6)).length},
                    {x: '7', y: (arr.filter((i) =>  i == 7)).length},
                    {x: '8', y: (arr.filter((i) =>  i == 8)).length},
                    {x: '9', y: (arr.filter((i) =>  i == 9)).length},
                    {x: '0', y: (arr.filter((i) =>  i == 0)).length},

                ]}
                />
                </svg>)
        
        
    }

   

  return (
    <div className={styles.divDiagram}>
      <button onClick={showDiagram} className={styles.Link}> show Diagram </button>
            {diagram}
    </div>
  )
}
