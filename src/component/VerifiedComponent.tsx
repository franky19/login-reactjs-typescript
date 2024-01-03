// src/components/ExampleComponent.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { verified } from '../redux/action/auth.action';
import { verifiedAPI } from '../redux/api/api.auth';

const VerifiedComponent: React.FC = () => {
    // const { id } :string|undefined = useParams();
    const { id } = useParams<{ id: string }>();
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    useEffect(()=>{
        verifiedAPI(id||"").then(res => {
            const data =  res.data.data
            navigate("/login")
          }).catch((e) => {
            navigate("/login")
            // alert(e?.response?.data?.message)
            // console.log(e?.response?.data?.message)
          }).finally(() => {
            setLoading(false);
          })
        // try {
        //     const data : any = verifiedAPI(id||"");
        //     console.log(data?.response?.data?.message)

        //     // dispatch(verified(id||""));
        // } catch (error:any) {
        //     debugger
        //     if(error?.response?.data?.message === "username or email already used"){
        //         alert(error?.response?.data?.message)
        //     }
        // }finally{
        //     setLoading(false)
        // }
    //     if(data.token!==""){
    //         navigate("/register")
    //     }
    },[])

  return (
    <div>
        Verified
    </div>
  );
};

export default VerifiedComponent;
