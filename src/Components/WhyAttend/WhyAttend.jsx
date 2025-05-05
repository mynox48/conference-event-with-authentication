import React from 'react';
import AttendImg from '..//../assets/18013.jpg'

const WhyAttend = () => {
    return (
        <div className='w-11/12 mx-auto my-50'>
            <div>
                <h2 className='text-4xl font-bold text-center text-[#00a4ef]'>Why You Should Attend the Meeting
                </h2> 
                <p className='text-center my-5'>
                Unlock new insights, build valuable connections, and gain a fresh perspective that can  <br />accelerate your professional growth.
                </p>
            </div>
            <section className="bg-base-200 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-default-600 dark:text-gray-50">
			<div className="flex space-x-2 sm:space-x-4 bg-base-100 p-4 rounded-xl shadow-sm">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Learn from Industry Experts</p>
					<p className="leading-snug text-justify">Get exclusive access to talks and workshops by leading professionals who share real-world experience and strategies.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4 bg-base-100 p-4 rounded-xl shadow-sm">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Expand Your Network</p>
					<p className="leading-snug text-justify">Meet like-minded individuals, potential collaborators, and industry leaders in one place—build relationships that matter.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4 bg-base-100 p-4 rounded-xl shadow-sm">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Stay Ahead of Trends</p>
					<p className="leading-snug text-justify">Discover the latest tools, technologies, and trends shaping the future of your field before anyone else.</p>
				</div>
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={AttendImg} alt="" className=" lg:h-[450px] rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default WhyAttend;