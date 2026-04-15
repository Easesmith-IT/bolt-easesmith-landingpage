import Image from 'next/image'
import React from 'react'

const LoginScreens = () => {
  return (
    <div className="container mx-auto py-5 md:py-10 px-5">
      <div>
        <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold">
          Login Screens
        </h3>

        <Image
          src="/portfolio/crc-dashboard/heding-underline.png"
          alt="image"
          width={170}
          height={60}
          className="object-contain w-20 sm:w-48"
        />
      </div>

      <Image
        src="/portfolio/crc-dashboard/login-screens.svg"
        alt="wireframs"
        width={500}
        height={500}
        className="object-contain w-full mt-5 md:mt-10"
      />
    </div>
  );
}

export default LoginScreens