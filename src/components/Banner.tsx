import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4'>

            <div className='w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start'>

                <div>
                    <h1 className='text-5xl font-bold leading-tight'>
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className='text-sm text-gray-500 mt-4 max-w-md mx-auto md:mx-0'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                </div>

                <div className='flex  sm:flex-row items-center justify-center md:justify-start gap-4 w-full'>
                    <button className="btn btn-secondary bg-gradient-to-r from-orange-600 to-purple-600 border-none">
                        Explore Technologies
                    </button>

                    <button className="btn btn-soft">
                        Learn More
                    </button>
                </div>
            </div>

            <div className=" w-full md:w-1/2 flex justify-center md:justify-end">
                <img src={banner} alt="Hero" className="w-full h-auto max-w-lg" />
            </div>

        </div>
    );
};

export default Banner;