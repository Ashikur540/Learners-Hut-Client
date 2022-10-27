import React from 'react';

const Faq = () => {
    return (

        <>
            <h2 className="text-2xl font-bold text-teal-600  text-center my-6">TOP FAQS</h2>
            {/*<!-- Component: Elevated accordion --> */}
            <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200 w-3/6 mx-auto mb-20">
                <details className="group p-4" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Is it possible to earn a degree through the Learners hut Online Learning program?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac13 desc-ac13"
                        >
                            <title id="title-ac13">Open icon</title>
                            <desc id="desc-ac13">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Learners Hut does not currently offer entire degree programs online. The Online Learning program is a set of lower division general education courses that can be applied to an associate or bachelor's degree. Transferring these credits to any institution of higher learning is possible after admission criteria are met at that institution and upon review of the requested transfer credits by the transferring-in institution’s registrar.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Will I get credit for this course?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac14 desc-ac14"
                        >
                            <title id="title-ac14">Open icon</title>
                            <desc id="desc-ac14">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Online Learning credit courses are comparable to on-campus courses and appear on your University of Minnesota Morris transcript in exactly the same manner as an on-campus course. You will receive University credit for these courses.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Will i get a certificate?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac15 desc-ac15"
                        >
                            <title id="title-ac15">Open icon</title>
                            <desc id="desc-ac15">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Well if you finish your purched course on time you  will get your desired certificate.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How do I contact my course instructor?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac16 desc-ac16"
                        >
                            <title id="title-ac16">Open icon</title>
                            <desc id="desc-ac16">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Instructors stay in touch with their Online Learning students in a variety of ways, depending on the course design. Your instructor will explain the best way to reach him or her within the course home pages. You may communicate with your instructor through discussion groups, bulletin boards, chat rooms, assignment submissions, through email, or by telephone.
                    </p>
                </details>
            </section>
            {/*<!-- End Elevated accordion --> */}
        </>

    );
};

export default Faq;