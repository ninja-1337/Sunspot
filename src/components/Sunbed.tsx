import  Link  from "next/link";
import sunbed from "/images/sunbed-with-umbrella-flat-icon-cartoon-vector-15332750.jpg"
import Image from "next/image";
import sunbedimg from "*.jpg";
import { MDBRipple } from 'mdb-react-ui-kit';
import {number} from "prop-types";
import {useState} from "react";

const handleClick = () =>{
    //
     alert("Add this bed to Cart")
}


const Sunbed = () => {
    const [width, setCount] = useState(40);

    const [height, setHeight] = useState(70);
    return (


        <Image
            src={sunbed}
            alt="Picture of the author"
            width={width}
            height={height}
            onClick={handleClick}
            onMouseOver={()=>{
                setCount(80)
                setHeight(80)
            }}
            onMouseLeave={()=>{
                setCount(40)
                setHeight(70)
            }}
        />


    );
};
 export default Sunbed;
