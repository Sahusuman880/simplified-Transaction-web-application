import React, { useState, useEffect } from "react";
import db from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const DataFetcher = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transaction"));
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <>
      <div>
        <h1 className="md:text-[30px] font-bold text-center text-[15px] my-[10px] text-[blue]">
          Details of All Transactions
        </h1>
        <div className="max-w-[900px]  mx-auto">
          <div className="grid grid-cols-[70%_auto] md:gap-10 gap-2 border-[2px] border-[black] bg-gray-800 text-[10px] md:text-[20px]  text-white font-bold ">
            <div className="border-r-[black] border-r-[2px] px-[15px] md:px-[30px] ">
              Wallet Address
            </div>
            <div className="px-[10px]  ">Amount</div>
          </div>
        </div>
      </div>
      {data.length == 0 ? <Loading /> : children(data)}
    </>
  );
};

export default DataFetcher;
