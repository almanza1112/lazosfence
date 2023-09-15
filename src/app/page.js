export default function Home() {
  return (
    <>
      {/* Container */}
      <div name="home">
        <div className=" relative w-full h-screen">
          <video
            src="/bgVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          <div className="absolute w-full h-full top-0 flex flex-col justify-center ">
            <div className="max-w-screen-xl w-full mx-auto p-8 text-center">
              <p className="text-2xl md:text-6xl font-extrabold text-white drop-shadow-xl">
                Building Boundaries, Creating Security
              </p>
              <p className="md:text-3xl my-4 text-white font-extrabold drop-shadow-xl">
                Over 25 years of experience at your service
              </p>
              <div className="">
                <button className="flat-btn-home">GET A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div name="main">
        <div></div>
      </div>


    </>
  );
}
