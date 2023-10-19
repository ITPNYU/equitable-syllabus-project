import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import DBCard from "./DBCard";
import Filter from "./Filter";

function Database() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultCount, setResultCount] = useState(0);

    const [formatList, setFormatList] = useState([]);
    const [contList, setContList] = useState([]);
    const [catList, setCatList] = useState([]);
    const [sort, setSort] = useState(0);

    const url = process.env.REACT_APP_SHEETSDB_URL;

    const dataFun = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        res.data.map((item) => {
            if (item["Category"] && item["Category"] !== ""){
                item.Category = item.Category.split("; ")
            }
            if (item["Continent"] && item["Continent"] !== ""){
                item.Continent = item.Continent.split(", ")
            }
        })
        setLoading(false);
        const revArray = [...res.data].slice().reverse();
        const nameArray = [...res.data].sort((a, b) => {
            var a1 = a.Resource.toLowerCase();
            var b1 = b.Resource.toLowerCase();
            return a1<b1 ? -1 : a1> b1? 1 : 0;
        })
        const dataList = [res.data, revArray, nameArray]
        setData([...dataList])
        setResultCount(data.length)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        dataFun();
    }, [])
    
    return (
    <div className="db section--top">
        <div className="db__section db__section--filter">
            <Filter
                formatList = {formatList}
                setFormatList = {setFormatList}
                contList = {contList}
                setContList = {setContList}
                catList = {catList}
                setCatList = {setCatList}
            />
        </div>
        <div className="db__vl"></div>
        <div className="db__section db__section--content">
            <div className="db__tab">
                <ul className="tab__list">
                    <li className={sort === 0 ? "tab__item tab__item--selected" :"tab__item"} onClick={() => setSort(0)}>
                        Ascending Date
                    </li>
                    <li className={sort === 1 ? "tab__item tab__item--selected" :"tab__item"} onClick={() => {setSort(1)}}>
                        Descending Date
                    </li>
                    <li className={sort === 2 ? "tab__item tab__item--selected" :"tab__item"} onClick={() => {setSort(2)}}>
                        Title
                    </li>
                </ul>
                <p className="tab__count">{`${resultCount} results`}</p>
            </div>
            <DBCard 
                formatList = {formatList}
                contList = {contList}
                catList = {catList}
                setResultCount = {setResultCount}
                data = {data[sort]} 
                loading = {loading} 
            />
        </div>
    </div>
    )
}

export default Database
