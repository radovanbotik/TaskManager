const Index = props => (
  <div>
    <div className="container mx-auto py-20 px-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">13 things to work on</h4>
            <p className="text-sm text-gray-800 dark:text-gray-100">
              Our interior design experts work with you to create the space that you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-pink-300 bg-pink-300 py-5 px-4">
          <div>
            <h4 className="mb-3 font-bold text-gray-800">13 things to work on</h4>
            <p className="text-sm text-gray-800">
              Our interior design experts work with you to create the space that you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-blue-300 bg-blue-300 py-5 px-4">
          <div>
            <h4 className="mb-3 font-bold text-gray-800">13 things to work on</h4>
            <p className="text-sm text-gray-800">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum,
              sensu iudicari
            </p>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="mb-3 flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alarm"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={13} r={7} />
                <polyline points="12 10 12 13 14 13" />
                <line x1={7} y1={4} x2="4.25" y2={6} />
                <line x1={17} y1={4} x2="19.75" y2={6} />
              </svg>
              <p className="ml-2">7 Sept, 23:00</p>
            </div>
            <div className="flex w-full items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm dark:text-gray-100">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center">
              <div className="flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-alarm"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={13} r={7} />
                  <polyline points="12 10 12 13 14 13" />
                  <line x1={7} y1={4} x2="4.25" y2={6} />
                  <line x1={17} y1={4} x2="19.75" y2={6} />
                </svg>
                <p className="ml-2 dark:text-gray-400">7 Sept, 23:00</p>
              </div>
              <div className="ml-2 rounded-full bg-gray-800 p-1 text-yellow-500 dark:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm dark:text-gray-100">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="flex-no-wrap mb-3 flex items-center">
              <div className="h-6 w-6 rounded-md bg-cover bg-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
              <div className="-ml-2 h-6 w-6 rounded-md bg-cover">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
              <div className="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm dark:text-gray-100">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">13 things to work on</h4>
            <p className="text-sm text-gray-800 dark:text-gray-100">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum,
              sensu iudicari
            </p>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="mb-3 flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-800 dark:border-gray-700 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alarm"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={13} r={7} />
                <polyline points="12 10 12 13 14 13" />
                <line x1={7} y1={4} x2="4.25" y2={6} />
                <line x1={17} y1={4} x2="19.75" y2={6} />
              </svg>
              <p className="ml-2">7 Sept, 23:00</p>
            </div>
            <div className="flex w-full items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-300 bg-gray-300 py-5 px-4 dark:border-gray-700 dark:bg-gray-700">
          <div>
            <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">13 things to work on</h4>
            <p className="text-sm text-gray-800 dark:text-gray-100">
              Our interior design experts work with you to create the space that you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-yellow-400 bg-yellow-400 py-5 px-4">
          <div>
            <h4 className="mb-3 font-bold text-gray-800">13 things to work on</h4>
            <p className="text-sm text-gray-800">
              Our interior design experts work with you to create the space that you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center">
              <div className="rounded-full bg-gray-800 p-1 text-yellow-500 dark:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="flex-no-wrap mb-3 flex items-center">
              <div className="h-6 w-6 rounded-md bg-cover bg-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
              <div className="-ml-2 h-6 w-6 rounded-md bg-cover">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
              <div className="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                  alt
                  className="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-red-300 bg-red-300 py-5 px-4">
          <div>
            <h3 className="w-11/12 font-semibold leading-7 text-gray-800">
              What does success as a UX designer look like and how to get there systematically
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Index;
