import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from 'react-router-dom';

const MainSkeleton = () => {
  return (
    <div className="hotel" style={{border: "none"}}>
    <div className="hotel-image">
      <div className="main-hotel-image">
        <Skeleton height={250} width={350} />
      </div>

      <div className="small-images">
        <Skeleton height={50} width={75} style={{ marginLeft: "15px" }} />
        <Skeleton height={50} width={75} style={{ marginLeft: "15px" }} />
        <Skeleton height={50} width={75} style={{ marginLeft: "15px" }} />
        <Skeleton height={50} width={75} style={{ marginLeft: "15px" }} />
      </div>
    </div>

    <div className="hotel-info">
      <h2><Skeleton width={500} height={30}/></h2>
      <p><Skeleton width={800} height={20}/></p>

      <div className="facilities">
        <h2><Skeleton width={100} height={30}/></h2>
        <div className="facilities-data">
          <Skeleton width={250} height={25} style={{marginBottom: "5px"}}/>
        </div>
      </div>

      <div className="price-info">
        <Skeleton width={130} height={50}/>
        <Link to={`/hotels/`}>
          <Skeleton width={85} height={20}/>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default MainSkeleton