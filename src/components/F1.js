import React from 'react';
import Axios from "axios";
import { useState,useEffect } from "react";

export default function F1() {


    const [data ,setData] =useState([]);



    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status ===200){
                setData(res.data);
            }else {
                Promise.reject();
            }
        }).catch((err)=>{
            alert(err);
        })
        
        ;
    },[])


    const Listname = ()=> {
        return data.map((val)=>{
            return <h2>{val.name}</h2>
        })
    }

    

  return (
    <div>
        <h1>
            Hello
        </h1>
        <ol>
            {Listname()}
        </ol>
    </div>
  )
  }

