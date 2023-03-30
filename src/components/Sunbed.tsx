import Link from "next/link";
import sunbed from "/images/sunbed-with-umbrella-flat-icon-cartoon-vector-15332750.jpg";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const handleClick = () => {
  toast('Sunbed added to cart', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
};

const Sunbed = () => {
  const [width, setCount] = useState(40);

  const [height, setHeight] = useState(70);
  return (
    <Image
      src={sunbed}
      alt="Picture of the sunbed"
      width={width}
      height={height}
      onClick={() => {
        handleClick()
        setHeight(80);
      }}
      onMouseOver={() => {
        setCount(80);
        setHeight(80);
      }}
      onMouseLeave={() => {
        setCount(40);
        setHeight(70);
      }}
    />
  );
};
export default Sunbed;
