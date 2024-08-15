
const ResponseTeam = () => {

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/*<h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Response Team</h2>*/}
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Your Trusted Health Response Team
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We are dedicated to providing immediate and reliable health services to those in need. Our team
                        of professionals is always ready to respond to emergencies with the utmost care and efficiency.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">

                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19.428 15.341A8.001 8.001 0 0112 20 8.001 8.001 0 014.572 15.341M12 2a9.001 9.001 0 018.938 7.339c.154.969-.631 1.71-1.605 1.47a7.992 7.992 0 00-6.265-6.264c-.24-.974-.501-1.759-1.47-1.605A9.001 9.001 0 0112 2z"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Mission</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                To provide immediate, reliable, and compassionate health services, ensuring the
                                well-being and safety of our community.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">

                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Services</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                From emergency response to ongoing health monitoring, our range of services is designed
                                to meet all your healthcare needs promptly and effectively.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">

                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17 16l4-4m0 0l-4-4m4 4H7m-6 8h.01M17 8V6a2 2 0 00-2-2h-3a2 2 0 00-2 2v2m8 4v2a2 2 0 01-2 2h-3a2 2 0 01-2-2v-2m0-4H7m0 0l-4 4m4-4l-4-4"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Team</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Our team is made up of skilled healthcare professionals, dedicated to providing the best
                                possible care to our patients.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">

                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15 9l-6 6M9 9l6 6M12 4v16"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Contact Us</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Reach out to us anytime for assistance or to learn more about our services. We are here
                                to help you.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>


    );

}

export default ResponseTeam;