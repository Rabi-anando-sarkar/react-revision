import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  /*
    const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("https://api.github.com/users/fruitriin")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  */

  const data = useLoaderData()

  console.log(data);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data?.followers}
      <div className="flex gap-4 ml-[25%]">
        <div>
          <img
            src={data?.avatar_url}
            alt="Git picture"
            width={225}
            height={225}
          />
        </div>
        <div className="w-100 ">
          <p className="text-left">Name : {data?.name}</p>
          <p className="text-left">Login ID : {data?.login}</p>
          <p className="text-left">Public Repos : {data?.public_repos}</p>
          <p className="text-left">Public Gists : {data?.ppublic_gists}</p>
          <p className="text-left">Created At : {data?.created_at}</p>
          <p className="text-left">Updated At : {data?.updated_at}</p>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/fruitriin")
    return response.json()
}