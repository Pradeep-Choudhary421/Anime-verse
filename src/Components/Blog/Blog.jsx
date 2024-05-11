import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './blog.css'
import axios from 'axios';

const Blog = () => {

    // const [data, setData] = useState();
    // const url = 'https://anime-facts-rest-api.herokuapp.com/api/v1';

    // axios.get(url).then((res)=>{
    //     setData(res.data);
    //     console.log(res.data)
    // }).catch((err) =>{
    //     console.log(err.message)
    // })
    
  return (
    <>
    <Navbar/>
    <div className='my-32'>
        <h3>Welcome users, here you can get some famous quotes from anime characters </h3>
        <div>
            {/* {data.map((index, info) =>{
                return(
                    <div key={index}>
                        <h1>{info.anime}</h1>
                        <p>{info.quote}</p>
                        <h2>{info.character}</h2>
                    </div>
                    
                )
            })} */}
        </div>

    </div>
      
    </>
  )
}

export default Blog
