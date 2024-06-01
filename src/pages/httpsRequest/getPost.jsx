import React, { useState, useEffect } from 'react'
import axios from 'axios';

const GetPost = () => {
    const [data, setData] = useState(null)
    const getPostData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {

                setData(response?.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        getPostData()
    }, [count])


    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);


    console.log("data in respose", data);

    return (
        <div>

            <h1>I've rendered {count} times!</h1>

            <div className="container_post">
                {data != null && data?.map((item, index) => {
                    return (
                        <div className="post_card" key={index} >
                            <p> {item?.id} </p>
                            <p>{item?.title}</p>
                            <p>{item?.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GetPost