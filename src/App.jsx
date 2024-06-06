import './App.css'
import { Xcard } from './Xcard.jsx'
export function App () {
    const Mam = ()=>{
        return(
        <div>
            <h1>uno</h1>
            <h1>dos</h1>
            <h1>tres</h1>
        </div>
        )
    }
    const format = (userName) => `@${userName}`
    
    return(
        <section className='tw-separation'>
            <Xcard 
            formatUserName = {format} 
            isFollowing 
            userName="dantalion" 
            infoName="danta">
                 mojazuela farid milhouse
            </Xcard>

            <Xcard 
            formatUserName = {format} 
            isFollowing 
            userName="armagedon" 
            infoName="armagedon">
                carlos manuel lopez obrador
            </Xcard>  

            <Xcard 
            formatUserName = {format} 
            isFollowing={false} 
            userName="emisocles" 
            infoName="emo">
                david de miguel angel mamani    
            </Xcard>   
        </section>
     )
}


