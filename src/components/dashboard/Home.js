import React from "react";
import config from "../../config"
import { useState, useEffect } from "react";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function Home() {
  const [allRequest, setAllRequest] = useState([]);

  useEffect(() => {
    getAllRequest()

    setInterval(() => {
      getAllRequest()
    }, 3000);
  }, []);

  const getAllRequest = async () => {
    const config1 = {
      method: 'get', // HTTP method (PUT in this case)
      url: `${config.apiKey}getallrequests`,   // The API endpoint
      // headers: {
      //   'Authorization': `Bearer ${x}`, // Set the bearer token in the "Authorization" header
      //   'Content-Type': 'application/json', // Set the content type if needed
      // },
    };

    let res = await axios(config1)

    if (res.response) {

    } else {
      setAllRequest(res.data)

    }
  }

  const submitRequest=async(e,transStatus,item)=>{
    e.preventDefault()
    try{

      let data={"amount":item.amount,"walletAddress":item.wallet , "email":item.email,"transStatus":transStatus,"requestId":item._id}

      const config1 = {
        method: 'post', // HTTP method (PUT in this case)
        url: `${config.apiKey}withdrawalstatus`,   // The API endpoint

        data: data, // The data you want to send in the request body
      };
       
    let res=  await axios(config1)
      // .then(response => {
      //   // Handle the success response here.
      //   toast.success( response.data.message);
      // })
      // .catch(error => {
      //   // Handle errors here.
      //   toast.error(error);
      // });
      console.log(res)
    if(res.response){
      toast.error(res.response.data.message);
    }else{
      toast.success( res.data);
    }
    }catch(error){

    }
  }

  return (
    <>
      <Toaster />

      <div className=" w-screen  lg:block xl:px-0  p-4 py-10 overflow-hidden ">

        <div className="flex justify-start items-start text-center  max-w-8xl    my-3 PageBG rounded-xl shadow-2xl overflow-hidden ">
          <div className=" my-3 overflow-x-auto w-full">
            <h1 className="text-2xl font-bold text-white p-4 w-60 rounded-tr-xl rounded-tl-xl flex justify-center items-center bg-black/50">
              {" "}
              New Request
            </h1>
            <table className="2xl:w-[1500px]   w-[1000px]">
              <thead className="text-md font-bold">
                <tr>
                  <th className="bg-black/50 text-white py-3">Date</th>

                  <th className="bg-black/50 text-white py-3">Username</th>
                  <th className="bg-black/50 text-white py-3">walletAddress  </th>
                  <th className="bg-black/50 text-white py-3">Balance</th>

                  <th className="bg-black/50 text-white py-3">Amount</th>
                  <th className="bg-black/50 text-white py-3"> Action</th>

                </tr>
              </thead>

              <tbody className="text-white">
                {allRequest.length > 0 ?
                  allRequest.map((item) => (
                    <tr className=" ">
                      <td className=" py-1 hover:bg-black/20">
                        {item.date}
                      </td>
                      <td className=" py-1 hover:bg-black/20">{item.email}</td>

                      <td className=" py-1 hover:bg-black/20">0xa56g...opkjdfsdsdf <ContentCopyIcon/></td>
                      <td className=" py-1 hover:bg-black/20">{item.balance}</td>
                      <td className=" py-1 hover:bg-black/20">{item.amount}</td>
                      <td className=" py-1  ">
                        <div className="flex space-x-3 items-center">
                          <button
                            className="middle none font-sans font-md center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  sm:text-md 2xl:text-lg text-sm py-2 2xl:py-3 px-3 2xl:px-4  rounded-3xl bg-gradient-to-tr from-red-600 to-red-600 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] block w-full"
                            type="button"
                            onClick={e=>{submitRequest(e,"Reject",item)}}
                          >
                            Reject
                          </button>
                          <button
                            className="middle none font-sans font-md center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  sm:text-md 2xl:text-lg text-sm py-2 2xl:py-3 px-3 2xl:px-4  rounded-3xl bg-gradient-to-tr from-green-600 to-green-700 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] block w-full"
                            type="button"
                            onClick={e=>{submitRequest(e,"Approve",item)}}

                            
                          >
                            Accept
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                  :
                  <tr className=" ">
                    <td className=" py-1 hover:bg-black/20">
                      No Data{" "}
                    </td>
                    
                  </tr>}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
