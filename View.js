import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function View() {

    const [getdata, setdata] = useState([]);
    console.log(getdata);
    
    const {id} = useParams("");
    console.log(id);

    const getinput = async (e) => {


        const res = await fetch(`http://localhost:9000/get/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const data = await res.json();
        

        if (res.status === 404 || !data) {

            console.log("error");
        }
        else {
            setdata(data);
            console.log("get data");
        }
    }

    useEffect(()=>{
        getinput();
    })



    return (
        <div>
            <div class="topic">
                <h1>
                    View Details:
                </h1>
            </div>

            <div class="details">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-fuchsia-700">
                    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                    <br></br>
                    <h4 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laptop Name : <span class="text-gray-400">{getdata.laptopname}</span></h4>
                    <h4 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laptop Model :<span class="text-gray-400">{getdata.laptopmodel}</span></h4>
                    <h4 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Stock Count : <span class="text-gray-400">{getdata.stockcount}</span></h4>
                    <h4 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price : <span class="text-gray-400">{getdata.price}</span></h4>
                    <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Description :<span class="text-gray-400">{getdata.description}</span></p>
                    

                </div>
            </div>


        </div>
    );
}

export default View;