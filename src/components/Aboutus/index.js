import React from "react";
const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to Shopeasy, the ultimate destination for exotic bespoke dresses. Our team of fashion experts is dedicated to providing you with the best possible shopping experience. We believe that everyone deserves to look and feel their best, especially on special occasions. That's why we offer a wide range of top-quality clothing materials and unique designs that are tailored to your individual style and preferences. At Shopeasy, we pride ourselves on our commitment to exceptional customer service and attention to detail. Whether you're attending a wedding, gala, or any other special event, we've got you covered. Shop with us today and discover the perfect dress for your next occasion!</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Shopeasy was founded with the goal of providing customers with the best exotic bespoke dresses on the planet. Our team is passionate about creating unique and high-quality dresses that make our customers feel confident and beautiful. We believe that everyone deserves to look and feel amazing for their special occasions, and that's why we've made it our mission to offer top-shelf clothing materials that are tailored to each customer's specific needs. With years of experience in the fashion industry, we've honed our skills and techniques to create dresses that are truly one-of-a-kind. At Shopeasy, we're committed to making every customer's dress-buying experience as easy and enjoyable as possible.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1606239414/lanre1_q2it41.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://res.cloudinary.com/dbdrtuscd/image/upload/v1606239414/lanre1_q2it41.png" alt="Alexa featured Img" />
                            <div className="flex flex-col items-center">
                                <p className="font-medium text-md leading-5 text-gray-800 mt-4">Lanre</p>
                                <p className="text-sm">8769942</p>
                            </div>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://media.licdn.com/dms/image/C5603AQGvdkJMRN4Vig/profile-displayphoto-shrink_800_800/0/1659638795943?e=1687392000&v=beta&t=NIXiI8GsiXZm34GBuKaOYSsMTrZFo9m2MKRK05SxBto" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://media.licdn.com/dms/image/C5603AQGvdkJMRN4Vig/profile-displayphoto-shrink_800_800/0/1659638795943?e=1687392000&v=beta&t=NIXiI8GsiXZm34GBuKaOYSsMTrZFo9m2MKRK05SxBto" alt="Olivia featured Img" />
                            <div className="flex flex-col items-center">
                                <p className="font-medium text-md leading-5 text-gray-800 mt-4">Divij Bhardwaj</p>
                                <p className="text-sm">8773589</p>
                            </div>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="./v.jpeg" alt="Liam featued Img" />
                            <img className="md:hidden block" src="./v.jpeg" alt="Liam featued Img" />
                            <div className="flex flex-col items-center">
                                <p className="font-medium text-md leading-5 text-gray-800 mt-4">Vibhuti Patel</p>
                                <p className="text-sm">8806746</p>
                            </div>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="./s.jpeg" alt="Elijah featured img" />
                            <img className="md:hidden block" src="./s.jpeg" alt="Elijah featured img" />
                            <div className="flex flex-col items-center">
                                <p className="font-medium text-md leading-5 text-gray-800 mt-4">Saurav Rana</p>
                                <p className="text-sm">8805511</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;
