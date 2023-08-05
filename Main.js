import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Main() {

    const [getdata, setdata] = useState([]);
    const [search,setsearch] = useState([]);
    

    const getinput = async (e) => {


        const res = await fetch("http://localhost:9000/get", {
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
            setsearch(data);
            console.log("get data");
        }
    }

    useEffect(() => {
        getinput();
    }, [])

    const deleteuser = async (id) => {
        const res2 = await fetch(`http://localhost:9000/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const deletedata = await res2.json();
        console.log(deletedata);
        if (res2.status === 404 || !deletedata) {
            console.log("error");
        }
        else {
            console.log("delete data");
            getinput();
        }
    }

    const Filter = (e) => {
        setsearch(getdata.filter(f => f.laptopname.toLowerCase().includes(e.target.value)));
    }
    

    return (
        <body>

            <div>
                <div>


                    <div className="mt-20">
                        
                        <input  onChange={Filter} class="shadow appearance-none border rounded w-60 py-2 px-3 dark:border-gray-700 dark:bg-neutral-800 dark:text-white leading-tight focus:outline-none focus:shadow-outline search " type="text" placeholder="Search Here" />
                        

                        <NavLink to="/Add"><button class="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-2 px-5 rounded-full button_1">
                            Add Item
                        </button></NavLink>
                    </div>

                    <br></br><br></br>

                    <div className="flex justify-center " >
                        <table class="w-auto text-sm text-left text-gray-500 dark:text-white  ">
                            <thead class="text-xs text-gray-700 uppercase  dark:bg-neutral-800  dark:text-fuchsia-700">
                                <tr>
                                    <th scope="col" class="text-md px-6 py-3">
                                        Laptop name
                                    </th>
                                    <th scope="col" class="text-md px-6 py-3">
                                        Laptop Model
                                    </th>
                                    <th scope="col" class="text-md px-6 py-3">
                                        Stock Count
                                    </th>

                                    <th scope="col" class="text-md px-20 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    search.map((element, id) => {
                                        return (
                                            <>
                                                <tr key={element._id} class="bg-white border-b dark:bg-neutral-800 dark:border-gray-700">
                                                    <th scope="row" class="text-md px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {element.laptopname}
                                                    </th>
                                                    <td class="text-md px-6 py-3">
                                                        {element.laptopmodel}
                                                    </td>
                                                    <td class="text-md px-6 py-3">
                                                        {element.stockcount}
                                                    </td>

                                                    <td class="text-md px-6 py-3 flex space-x-4">
                                                        <NavLink to={`View/${element._id}`}><button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-1 px-3 rounded-full ">View</button></NavLink>
                                                        <NavLink to={`Edit/${element._id}`}><button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-1 px-3 rounded-full ">Update</button></NavLink>
                                                        <button onClick={() => deleteuser(element._id)} className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-1 px-3 rounded-full ">Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>



                </div>

            </div>

        </body>
    );
}
export default Main;