// create your App component here
import {useEffect, useState} from "react"

export default function App(){
const [randomImage, setRandomImage] = useState()
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((data) => { 
    setRandomImage(data.message)
    setIsLoaded(true)
    })
}, [])
 if (!isLoaded) return <p>Loading...</p>;

 return <img src={randomImage} alt="A Random Dog"/>
}