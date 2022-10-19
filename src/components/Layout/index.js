import './style.css'

import { Suggestion } from '../Suggestion'
import { Story } from '../Story'
import { Post } from '../Post'
import { Post2 } from '../Post'
import { Post3 } from '../Post'
import { Post4 } from '../Post'
import { Post5 } from '../Post'
import { Post6 } from '../Post'


export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />     
                       
                    </div>
                    <div className="box" style={{margin: "30px 0 "}} >
                        <Post />
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post2 />
                    </div>
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post3 />
                    </div>
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post4 />
                    </div>
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post5 />
                    </div>
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post6 />
                    </div>
                 
                 


                    </div>
                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>
            
        </>
    )

}