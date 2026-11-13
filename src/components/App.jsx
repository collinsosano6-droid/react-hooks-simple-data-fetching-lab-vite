//Create your component here

import { useEffect, useState } from "react";

function App(){

    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(true)

    function fetchImage(){
        setLoading(true)
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then (r=>{
            if (!r.ok) {throw new Error ("Error fetching data", Error)}
            return r.json()
        })
        .then (newImage => {
            setImage(newImage.message);
            setLoading(false)
    })
        .catch (err=> console.log(err)) 
    }

    useEffect(()=>{
        fetchImage()
    },[])

    return(
        <div>
             <h1> Welcome to this simple data fetching practice</h1>
        { loading ? <p>Loading...</p> : <img src = {image} alt = "A Random Dog" />}
            <button onClick = {fetchImage}>Get New Dog</button>
        </div>
    )
       
}

export default App