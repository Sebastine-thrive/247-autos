/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import purpose from "./../../../public/assets/images/team1.jpg";
import relationship from "./../../../public/assets/images/relationship.png";
import satisfaction from "./../../../public/assets/images/customer satisfaction.webp";
import carMan from "./../../../public/assets/images/car_man.svg";
import carPic from "./../../../public/assets/images/2vid.png";

const page: React.FC = () => {
  return (
    <div className="about-us-container p-4 lg:w-[70%] xl:w-[60%] flex flex-col m-auto">
      {/* intro segment */}
      <div className="mt-2 ">
        <div className="about-us-heading text-[#616161] text-2xl font-bold text-center">
          <h2>
            {" "}
            We Make Car buying and selling easy, efficient and transparent for
            everyone.
          </h2>
          <h2 className="font-medium">Connecting buyers with sellers</h2>
        </div>

        <div className="about-us-heading-image min-h-[80px] w-full bg-gradient-to-br from-white to-customOrange justify-center ">
          {/* background image here*/}
          <Image src={carPic} alt="car image" width={100} height={60} />
        </div>
      </div>

      {/* Main body */}
      <div className=" px-4 py-2 mt-4">
        <div>
          <div className="about-us  py-2 ">
            <h1 className="text-2xl ">About Us</h1>

            <div className="mt-2">
              <h2 className=" font-bold text-2xl">Who we are</h2>

              <p className="mt-1 font-normal">
                Welcome to 247 autos. We define ourselves around the qualities
                of transparency and efficiency in the world of vehicle sales and
                servicing. At 247 Autos, we pride ourselves on our unwavering
                commitment to providing top-notch service with a focus on
                quality, efficiency and transparency.
                <br /> <br />
                Whether you're looking to purchase a new vehicle or need
                maintenance for your current one, we ensure that you receive
                prompt and accurate assistance every step of the way.
                Transparency is at the core of our operations. We believe in
                open and honest communication with our customers, ensuring that
                you are always well-informed about the services we provide and
                the processes involved. With us, you can trust that there are no
                hidden agendas or surprises—just clear and transparent dealings.
                <br /> <br />
                In addition to our sales expertise, we offer holistic servicing
                for your vehicles. From routine maintenance to complex repairs,
                our skilled technicians are equipped to handle all your vehicle
                servicing needs. We take a comprehensive approach to vehicle
                care, addressing both immediate issues and potential concerns to
                keep your vehicle running smoothly.
                <br /> <br />
                At 247 autos, we do what it takes to meet your needs and exceed
                your expectations. Experience the difference with us, where
                efficiency, transparency, and excellence converge to provide you
                with the best vehicle sales and servicing experience possible."
              </p>
            </div>
          </div>
          <div className="py-2">
            <h2 className="font-bold text-2xl">What we do</h2>
            <p className="mt-1 font-normal">
              Whether you're in the market for a brand new or a quality,
              fairly-used vehicle, we have a diverse inventory to meet your
              needs. Our team ensures that every vehicle meets high standards of
              quality and reliability.
              <br /> <br />
              We assist customers in purchasing or selling their vehicles,
              providing guidance and support throughout the process. Our
              expertise ensures that you get the best deal whether you're buying
              or selling a vehicle and We understand the importance of value for
              money. That's why we offer competitive prices for all our
              services, ensuring that you receive exceptional quality at
              affordable rates.
              <br /> <br />
              Car Delivery Services: We understand that convenience is key,
              which is why we offer car delivery services. Whether you're
              purchasing a vehicle from us or need your vehicle delivered for
              servicing, we make the process seamless and hassle-free.
              <br /> <br />
              Keeping your vehicle in top condition is essential for its
              longevity and performance. Our skilled technicians provide
              thorough servicing and maintenance, including routine check-ups,
              oil changes, and more, to ensure your vehicle runs smoothly.
              <br /> <br />
              Personalize your vehicle and enhance its aesthetics with our
              interiors and pimping services. From custom upholstery to interior
              detailing, we can transform your vehicle to suit your style and
              preferences.
              <br /> <br />
              In the event of a breakdown or mechanical issue, our team is
              equipped to handle a wide range of repairs. We use quality parts
              and expert craftsmanship to restore your vehicle to its optimal
              condition.
            </p>{" "}
            <br />
            <p className="font-normal">
              There is no "one-size-fits-all" solution when it comes to buying a
              car. Depending on the your budget and car-buying experience, 247
              Autos got you, always!
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
            <div>
              <Image
                src={purpose}
                alt="purpose driven picture"
                width={300}
                height={200}
                className="product-image w-auto rounded-sm"
              />
            </div>
            <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4 ">
              <h3 className="text-[#616161] font-bold text-xl md:mr-2">
                Driven with purpose
              </h3>
              <p className="mt-1 font-normal">
                At 247 Autos, we empower buyers and sellers with the resources
                to enjoy value and make sales.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
            <div className="mt-1 font-normal">
              <Image
                src={relationship}
                alt="interpersonal relationship picture"
                width={300}
                height={200}
                className="product-image w-auto rounded-sm"
              />
            </div>
            <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4">
              <h3 className="text-[#616161] font-bold text-xl md:mr-2 ">
                Cultivating interpersonal Connections
              </h3>
              <p className="mt-1 font-normal">
                Our relationships are the conerstone of our business. We are
                proud of the relationships we have fostered over the years. We
                look to sustain them and build more connections of people and
                businesses making profits and enjoying value.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
            <div className="mt-1">
              <Image
                src={satisfaction}
                alt="customer satisfaction picture"
                width={300}
                height={200}
                className="product-image w-auto rounded-sm"
              />
            </div>
            <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4">
              <h3 className="text-[#616161]   font-bold text-xl">
                Prioritising customer satisfaction{" "}
              </h3>
              <p className="mt-1 font-normal">
                customer satisfaction is at the center of our world. Cars play
                an important role in peoples's lives and is the one of the
                biggest purchases one can make. We are dedicated to helping
                everyone who come across us achieve their goals as easily and
                efficiently as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Concluding part */}
      <div className="flex flex-col  md:flex-row items-center justify-center mt-4">
        <div className="rounded-lg w-auto h-auto p-2 bg-red-500 text-white hover:bg-customYellow">
          <Link href="/blog">
            <button className="font-normal">Stay informed</button>
          </Link>
        </div>
        <div className="mt-1 md:ml-2">
          <Image
            src={carMan}
            alt="man with car image"
            width={300}
            height={200}
            className="product-image w-auto rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
