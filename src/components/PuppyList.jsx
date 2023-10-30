import { useEffect, useState } from "react";
import { getToken } from "../api/login";

const PuppyList = () => {

    const getPuppiesFromApi = () => {

        const token = getToken();

        const url = "http://localhost:8080/puppies";

        const options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }

        return fetch(url, options)
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