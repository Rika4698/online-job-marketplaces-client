

const HowToWorks = () => {
    return (
        <div>
            <section id="works" className="relative bg-slate-200 py-10 sm:py-16 ">
    <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-emerald-600 font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-slate-400 leading-relaxed md:text-lg">
                Whether you are an employer or a user, our platform makes it easy to connect and collaborate.
            </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 lg:block  lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" className="w-full border-" style={{ filter: 'invert(39%) sepia(72%) saturate(387%) hue-rotate(107deg) brightness(93%) contrast(88%)' }} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 lg:grid-cols-4 gap-x-12 mx-3">
                <div>
                    <div
                     className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500 border-2 border-emerald-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-100">1</span>
                    </div>
                    <h3 className="mt-6 text-xl  text-emerald-600 font-bold leading-tight lg:mt-10">Create an Account</h3>
                    <p className="mt-4 text-base font-medium text-gray-500 md:text-lg">
                        Register with your email or Google account. Choose to register as a user or an employer.
                    </p>
                </div>
                <div>
                    <div
                     className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500 border-2 border-emerald-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-100">2</span>
                    </div>
                    <h3 className="mt-6 text-xl text-emerald-600 font-bold leading-tight lg:mt-10">Post or Browse Jobs</h3>
                    <p className="mt-4 text-base font-medium text-gray-500 md:text-lg">
                        Employers post jobs with details, and user can browse and see jobs by category.
                    </p>
                </div>
                <div>
                    <div
                     className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500 border-2 border-emerald-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-100">3</span>
                    </div>
                    <h3 className="mt-6 text-xl text-emerald-600 font-bold leading-tight lg:mt-10">Place a Bid or Hire Talent</h3>
                    <p className="mt-4 text-base font-medium text-gray-500 md:text-lg">
                        Users submit bids with their price and deadline (before employers deadline). Employers review and accept or reject bids.
                    </p>
                </div>
                 <div>
                    <div
                     className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-500 border-2 border-emerald-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-100">4</span>
                    </div>
                    <h3 className="mt-6 text-xl text-emerald-600 font-bold leading-tight lg:mt-10">Complete It</h3>
                    <p className="mt-4 text-base font-medium text-gray-500 md:text-lg">
                      In the accept bids processing, user take complete bids for complete the job. Employers mark it complete, and both can 100% complete bids.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{background:"radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"}}>
    </div>
</section>
        </div>
    );
};

export default HowToWorks;