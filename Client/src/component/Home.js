import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../Store/Slice/getImage';
import { getpersonalDetail } from '../Store/Slice/getPersonalDetail';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpersonalDetail());
    dispatch(getImage());
  }, []);

  const { personalData, dataLoading } = useSelector((state) => state.personalInfo);
  const { Image, ImageLoading } = useSelector((state) => state.image);

  return (
    <div>
      <div className='flex'>
        <div className='bg-black text-red-200 w-1/2 text-center'>
          {
            personalData?.length > 0 && personalData.map((data) => (
              <div className='mt-[180px]' key={data._id}>
                <p className='decoration-orange-900n font-semibold text-5xl italic p-8'>MERN STACK DEVELOPER</p>
                <p className='text-2xl font-bold'>{data.FirstName} {data.LastName}</p>
                <div className='text-left'>
                  <p>{data.DateOfBirth}</p>
                  <p>{data.Age}</p>
                  <p>+91 {data.PhoneNumber}</p>
                  <p>{data.Email}</p>
                  <p>{data.City}</p>
                  <p>{data.Degree}</p>
                  <p>{data.Major}</p>
                </div>
                <p>{data.IntroDescription}</p>
                <p>{data.InterDescription}</p>
                <p>{data.ProjectDescription}</p>
              </div>
            ))
          }
        </div>
        <div className='bg-black w-1/2'>
          {
            Image?.length > 0 && Image.map((img) => {
              const base64String = btoa(
                new Uint8Array(img?.profilePic?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              )
              return (
                <div key={img._id} className='flex justify-center'>
                  <img
                    className='w-[550px] h-[800px]'
                    src={`data:image/png;base64,${base64String}`}
                    alt="">
                  </img>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
