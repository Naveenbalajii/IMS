import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function Edit() {

    //const [getdata, setdata] = useState([]);
    //console.log(getdata);

    const[val,setval] = useState({
        lapname:"",
        lapmodel:"",
        stockcount:"",
        price:"",
        description:""
    })

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setval((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

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
            setval(data);
            console.log("get data");
        }
    }

    useEffect(()=>{
        getinput();
    },[])
    
    const updateuser = async(e)=>{
        e.preventDefault();
        const {lapname,lapmodel,stockcount,price,description} = val;
        const res2 = await fetch(`http://localhost:9000/edit/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                laptopname: lapname,
                laptopmodel: lapmodel,
                stockcount: stockcount,
                price: price,
                description: description
            })
        });
        const data2 = await res2.json();
        console.log(data2);
        if(res2.status === 404 || !data2){
            alert("error");
            console.log("error");
        }
        else{
            alert("Item Updated successfully");
        }
    }

    return (

        <div>
            <div class="topic">
                <h1>
                    Update ITEM:
                </h1>
            </div>
            <div class="form">
                <div className="w-auto max-w-xs justify-center ">

                    <form>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="lapname" value={val.laptopname} onChange={setdata} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-700 focus:outline-none focus:ring-0 focus:border-fuchsia-700 peer" placeholder=" " required />
                            <label for="lapname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-700 peer-focus:dark:text-fuchsia-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Laptop Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="lapmodel"  value={val.laptopmodel} onChange={setdata} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-700 focus:outline-none focus:ring-0 focus:border-fuchsia-700 peer" placeholder=" " required />
                            <label for="lapmodel" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-700 peer-focus:dark:text-fuchsia-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Laptop Model</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="stockcount" value={val.stockcount} onChange={setdata}class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-700 focus:outline-none focus:ring-0 focus:border-fuchsia-700 peer" placeholder=" " required />
                            <label for="stockcount" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-700 peer-focus:dark:text-fuchsia-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock Count</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="price" value={val.price} onChange={setdata} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-700 focus:outline-none focus:ring-0 focus:border-fuchsia-700 peer" placeholder=" " required />
                            <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-700 peer-focus:dark:text-fuchsia-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="description" value={val.description} onChange={setdata} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-700 focus:outline-none focus:ring-0 focus:border-fuchsia-700 peer" placeholder=" " required />
                            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fuchsia-700 peer-focus:dark:text-fuchsia-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>

                        <button type="submit" onClick={updateuser} class="text-white bg-fuchsia-700 hover:bg-fuchsia-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900 dark:focus:ring-fuchsia-700">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Edit;