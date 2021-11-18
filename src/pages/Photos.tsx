import { FC } from "react";
import classes from './Photos.module.css'


const Photos: FC = () => {

    return (
        <>
        <h1 className="title"> תמונות </h1>
        <div className={`${classes.images_container}`}>

            {/* <div className={`${classes.image_container}`}>
              <img src="./images/about-home.jpg" alt="" />
            </div> */}
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
            <div className={`${classes.image_container} ${classes.fade}`} >
               <img src={process.env.PUBLIC_URL + '/images/about-home.jpg'} alt="" />
            </div>
        </div>

        
    </>
    )

}

export default Photos