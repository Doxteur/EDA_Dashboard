import logo from "./logo.svg";
import "./App.css";
import EventSubscriber from "./components/EventSubscriber";

function App() {
  return (
    <div className="App">
      <>
        {/* ========== HEADER ========== */}
        <header className="lg:ms-[260px] lg:hidden fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <div
            className="flex justify-between xl:grid xl:grid-cols-3 basis-full items-center w-full py-2.5 px-2 sm:px-5"
            aria-label="Global"
          >
            {/* Sidebar Toggle */}
            <div className="lg:hidden">
              <button
                type="button"
                className="w-7 h-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-pro-sidebar"
                aria-controls="hs-pro-sidebar"
                aria-label="Toggle navigation"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            {/* End Sidebar Toggle */}
            <div className="lg:hidden h-[38px] flex justify-end items-center gap-x-2">
              {/* Account */}
              <div className="hs-dropdown relative inline-flex [--placement:top-right] [--strategy:absolute] [--auto-close:inside]">
                <button
                  id="hs-pro-dnad"
                  type="button"
                  className="inline-flex flex-shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-800"
                >
                  <img
                    className="flex-shrink-0 w-[38px] h-[38px] rounded-full"
                    src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>
                {/* Account Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]"
                  aria-labelledby="hs-pro-dnad"
                >
                  <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="../../pro/dashboard/user-profile-my-profile.html"
                    >
                      <img
                        className="flex-shrink-0 w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <div className="grow">
                        <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                          James Collison
                        </span>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Preline@HS
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width={20} height={14} x={2} y={5} rx={2} />
                        <line x1={2} x2={22} y1={10} y2={10} />
                      </svg>
                      Billing
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      Settings
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      My account
                    </a>
                  </div>
                  <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                    {/* Switch/Toggle */}
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="hs-pro-dnads"
                        className="text-sm text-gray-800 dark:text-neutral-300"
                      >
                        Dark mode
                      </label>
                      <div className="relative inline-block">
                        <input
                          data-hs-theme-switch=""
                          type="checkbox"
                          id="hs-pro-dnads"
                          className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

            before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                    {/* End Switch/Toggle */}
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Customization
                      <div className="ms-auto">
                        <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Manage team
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Sign out
                    </a>
                  </div>
                  <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                    <button
                      type="button"
                      className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-overlay="#hs-pro-dasadam"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                      Add team account
                    </button>
                  </div>
                </div>
                {/* End Account Dropdown */}
              </div>
              {/* End Account */}
            </div>
          </div>
        </header>
        {/* ========== END HEADER ========== */}
        {/* ========== MAIN SIDEBAR ========== */}
        <aside
          id="hs-pro-sidebar"
          className="w-[260px] hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700 dark:hs-overlay-backdrop-open:bg-neutral-900/90"
        >
          <div className="flex flex-col h-full max-h-full py-3">
            {/* Header */}
            <header className="px-8 h-[46px]">
              {/* Logo */}
              <a
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Preline"
              >
                <svg
                  className="w-28 h-auto"
                  width={116}
                  height={32}
                  viewBox="0 0 116 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
                    className="fill-blue-600 dark:fill-white"
                    fill="currentColor"
                  />
                  <path
                    d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                    className="stroke-blue-600 dark:stroke-white"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path
                    d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                    className="stroke-blue-600 dark:stroke-white"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <circle
                    cx={13}
                    cy="16.5214"
                    r={5}
                    className="fill-blue-600 dark:fill-white"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* End Logo */}
            </header>
            {/* End Header */}
            {/* Content */}
            <div className="h-[calc(100%-35px)] lg:h-[calc(100%-93px)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {/* Nav */}
              <nav
                className="hs-accordion-group p-5 pt-0 w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open=""
              >
                <ul className="space-y-1.5">
                  {/* Link */}
                  <li className="hs-accordion" id="dashboard-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hs-accordion-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Dashboard
                      <svg
                        className="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-4 h-4 ms-auto transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id="dashboard-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul
                        className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[19px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                        data-hs-accordion-always-open=""
                      >
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Analytics
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li className="hs-accordion" id="users-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hs-accordion-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Users
                      <svg
                        className="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-4 h-4 ms-auto transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id="users-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul
                        className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                        data-hs-accordion-always-open=""
                      >
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Add User
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li className="hs-accordion" id="user-profile-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hs-accordion-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 @"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <circle cx={12} cy={10} r={3} />
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                      </svg>
                      Profile
                      <svg
                        className="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-4 h-4 ms-auto transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id="user-profile-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul
                        className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                        data-hs-accordion-always-open=""
                      >
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li className="hs-accordion" id="account-accordion">
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hs-accordion-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={18} cy={15} r={3} />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                        <path d="m21.7 16.4-.9-.3" />
                        <path d="m15.2 13.9-.9-.3" />
                        <path d="m16.6 18.7.3-.9" />
                        <path d="m19.1 12.2.3-.9" />
                        <path d="m19.6 18.7-.4-1" />
                        <path d="m16.8 12.3-.4-1" />
                        <path d="m14.3 16.6 1-.4" />
                        <path d="m20.7 13.8 1-.4" />
                      </svg>
                      Account
                      <svg
                        className="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 w-4 h-4 ms-auto transition"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id="account-accordion-sub"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul
                        className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                        data-hs-accordion-always-open=""
                      >
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                            href="#"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="m16 12-4-4-4 4" />
                        <path d="M12 16V8" />
                      </svg>
                      <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 to-80% text-transparent dark:from-blue-500 dark:to-purple-500">
                        Upgrade to PRO
                      </span>
                    </a>
                  </li>
                  {/* End Link */}
                  {/* Link */}
                  <li>
                    <a
                      className="flex gap-x-3 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                      What’s New
                      <div className="ms-auto">
                        <span className="inline-flex items-center gap-1.5 py-px px-1.5 rounded-lg text-[10px] leading-4 font-medium bg-white border border-gray-200 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          v1.0
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* End Link */}
                </ul>
              </nav>
              {/* End Nav */}
            </div>
            {/* End Content */}
            {/* Footer */}
            <footer className="hidden lg:block absolute bottom-0 inset-x-0 border-t border-gray-200 dark:border-neutral-700">
              {/* Account */}
              <div className="hs-dropdown relative w-full inline-flex [--placement:top-left] [--strategy:absolute] [--auto-close:inside]">
                {/* Account Avatar */}
                <button
                  id="hs-pro-dsad"
                  type="button"
                  className="w-full flex items-center gap-x-3 text-start px-5 py-2.5 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700"
                >
                  <img
                    className="flex-shrink-0 w-[38px] h-[38px] rounded-full"
                    src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <span className="grow block">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                      James Collison
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-neutral-500">
                      Preline@HS
                    </span>
                  </span>
                  <svg
                    className="flex-shrink-0 mt-0.5 w-4 h-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 15 5 5 5-5" />
                    <path d="m7 9 5-5 5 5" />
                  </svg>
                </button>
                {/* End Account Avatar */}
                {/* Account Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]"
                  aria-labelledby="hs-pro-dsad"
                >
                  <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                    <a
                      className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="../../pro/dashboard/user-profile-my-profile.html"
                    >
                      <img
                        className="flex-shrink-0 w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <div className="grow">
                        <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                          James Collison
                        </span>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Preline@HS
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width={20} height={14} x={2} y={5} rx={2} />
                        <line x1={2} x2={22} y1={10} y2={10} />
                      </svg>
                      Billing
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      Settings
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      My account
                    </a>
                  </div>
                  <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                    {/* Switch/Toggle */}
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="hs-pro-dsads"
                        className="text-sm text-gray-800 dark:text-neutral-300"
                      >
                        Dark mode
                      </label>
                      <div className="relative inline-block">
                        <input
                          data-hs-theme-switch=""
                          type="checkbox"
                          id="hs-pro-dsads"
                          className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

            before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                    {/* End Switch/Toggle */}
                  </div>
                  <div className="p-1">
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Customization
                      <div className="ms-auto">
                        <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Manage team
                    </a>
                    <a
                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      Sign out
                    </a>
                  </div>
                  <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                    <button
                      type="button"
                      className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-overlay="#hs-pro-dasadam"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                      Add team account
                    </button>
                  </div>
                </div>
                {/* End Account Dropdown */}
              </div>
              {/* End Account */}
            </footer>
            {/* End Footer */}
            {/* Sidebar Close */}
            <div className="lg:hidden absolute top-3 -end-3 z-10">
              <button
                type="button"
                className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-pro-sidebar"
                aria-controls="hs-pro-sidebar"
                aria-label="Toggle navigation"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            </div>
            {/* End Sidebar Close */}
          </div>
        </aside>
        {/* ========== END MAIN SIDEBAR ========== */}
        {/* ========== MAIN CONTENT ========== */}
        <main
          id="content"
          role="main"
          className="lg:ps-[260px] pt-[59px] lg:pt-0"
        >
          <div className="p-2 sm:p-5 sm:py-0 sm:pt-5 space-y-5">
            {/* Card */}
            <div className="p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="relative h-full border border-dashed border-gray-200 rounded-xl overflow-hidden dark:border-neutral-700">
                <div className="absolute inset-0 w-full h-full">
                  <EventSubscriber />
                  <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);]" />
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
        </main>
        {/* ========== END MAIN CONTENT ========== */}
      </>
    </div>
  );
}

export default App;
