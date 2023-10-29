import { useEffect, useState } from "react";

const PuppyList = () => {

    const getPuppiesFromApi = () => {

        const options = {
            // Completa las opciones para enviar
            // el token que está guardado en el local storage tras hacer login
        }

        return fetch("http://localhost:8080/puppies", options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else throw Error("Unable to retrieve puppies!");
            })
            .catch(() => []);
    }

    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        getPuppiesFromApi()
            .then(setPuppies)
            .catch(error => console.log(error))
    }, [])

    return <>
        {(puppies.length === 0 || !puppies) ?
            <pre>Completa el código de `PuppyList.jsx` para arreglar la página. Asegúrate de que el backend está lanzado.</pre> :
            puppies.map((puppy, index) => <img className={"puppy"} id={`img${index}`} src={puppy.img} alt="a puppy" />)
        }
    </>
}


export default PuppyList;