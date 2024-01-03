// src/components/ExampleComponent.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data = useSelector((state: any) => state.auth);
    useEffect(()=>{
        if(data.token!==""){
            navigate("/register")
        }
    },[])

  return (
    <div>
        Dashboard
    </div>
  );
};

export default DashboardComponent;
