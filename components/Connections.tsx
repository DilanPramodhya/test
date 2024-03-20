import Image from "next/image";

const Connections = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/mobitel.webp" alt="mobitel" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-60 xl:max-w-[390px]">
            SLT Connection types
          </h2>
          <p className="regular-24 text-gray-30 xl:max-w-[520px] align-middle">
            Broadband <br />
            PEOTV <br />
            Mobile <br />
            Voice Package
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/New_Operational_Headquarters.jpg"
          alt="New_Operational_Headquarter"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-4 gap-3 rounded-3xl border shadow-md md:left-[60%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">6 min (450m)</p>
              </div>
              <p className="bold-20 mt-2">Telecom Head Office</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start place</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Colombo Fort Station
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connections;
