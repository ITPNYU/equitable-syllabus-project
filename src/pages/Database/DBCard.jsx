import React from "react"
import FormatIcon from "../../icons/format.svg"
import ContinentIcon from "../../icons/continent.svg"

function DBCard({data, loading, formatList, contList, catList, setResultCount}) {

  function getDBSkeleton(){
    var cards = [];

    for (let i = 0; i<10; i++){
      cards.push(
        <div className="db-card" key={i}>
        <div className="db-card__info">
          <div className="db-card__metadata metadata--top">
            <div className="skeleton-metadata skeleton"></div>
          </div>
          <div>
            <h4 className="skeleton-heading skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
            <p className="skeleton-description skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil eligendi repellat incidunt provident quibusdam fuga ad eius.</p>
            <p className="skeleton-description skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil eligendi repellat incidunt provident quibusdam fuga ad eius.</p>
            <p className="skeleton-description skeleton-description-bottom skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil eligendi repellat incidunt provident quibusdam fuga ad eius.</p>
          </div>
        </div>
        <div className="db-card__image skeleton"></div>
      </div>
      )
    }
    return cards
  }

  function getFeedContent(){
    return (
      data
      .filter((item) => (formatList.length !== 0 ? formatList.includes(item.Format) : true))
      .filter((item) => (contList.length !== 0 ? contList.includes(item.Continent[0]) || contList.includes(item.Continent[1]) : true))
      .filter((item) => (catList.length !== 0 ? catList.includes(item.Category[0] || item.Category[1]) : true))
      .map(((item, index) => {
        if (item.Resource === "" || item.Link === "") return <></>
        return(
          <a href={item.Link} key={index}>
            <div className="db-card">
              <div className="db-card__info">
                <div className="db-card__metadata metadata--top">
                {item["Category"] && item.Category.length >= 1 ?
                  <>
                    <p className="db-card__category">{item.Category[0]}</p>
                    <span className="db-card__dot"></span>
                  </> : ""
                }
                {item["Category"] && item.Category.length === 2 ?
                  <>
                    <p className="db-card__category">{item.Category[1]}</p>
                    <span className="db-card__dot"></span>
                  </> : ""
                }
                {item.Creator !== "" ?
                  <p className="db-card__creator">{item.Creator}</p> : ""
                }
                </div>
                <div className="db-card__article">
                  <h4 className="heading-5 db-card__heading">{item.Resource}</h4>
      
                </div>
                <div className="db-card__metadata">
                  {item.Format !== "" ?
                    <div className="db-card__chip"><span><img className="icon" src={FormatIcon} alt="format" /></span>{item.Format}</div> : ""
                  }
                  {item["Continent"] && item.Continent.length >= 1 ?
                    <div className="db-card__chip"><span><img className="icon" src={ContinentIcon} alt="continent" /></span>{item.Continent[0]}</div> : ""
                  }
                  {item["Continent"] && item.Continent.length === 2 ?
                    <div className="db-card__chip"><span><img className="icon" src={ContinentIcon} alt="continent" /></span>{item.Continent[1]}</div> : ""
                  }
                </div>
              </div>
              {item.Image === "" ? "" : <img className="db-card__image" src={item.Image} alt="resource" />}
            </div>
          </a>
        )
      }))
    )
  }

  function getFeed(){
    let res = getFeedContent();
    setResultCount(res.length)
    if (res.length === 0){
      return(
        <div className="no-results">
          <h2 className="no-results__heading">No results found</h2>
          <p>Try adjusting your filter for more results</p>
        </div>
      )
    }
    return res;
  }

  return (
    <>
      {
        loading ? getDBSkeleton() : getFeed()
      }
    </>
  )
}

export default DBCard
