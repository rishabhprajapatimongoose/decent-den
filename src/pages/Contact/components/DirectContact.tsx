const ContactCard = () => {
  return (
    <div className=" bg-[#0680D014] border-[1.6px] text-xl  border-[#0680D066] rounded-xl p-5 space-y-5">
      <div className="flex items-center gap-4">
        <span className="text-[#FFFFFF99] flex gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_264_1544)">
              <path
                d="M21.334 4H2.66732C2.3137 4 1.97456 4.14048 1.72451 4.39052C1.47446 4.64057 1.33398 4.97971 1.33398 5.33333V18.6667C1.33398 19.0203 1.47446 19.3594 1.72451 19.6095C1.97456 19.8595 2.3137 20 2.66732 20H21.334C21.6876 20 22.0267 19.8595 22.2768 19.6095C22.5268 19.3594 22.6673 19.0203 22.6673 18.6667V5.33333C22.6673 4.97971 22.5268 4.64057 22.2768 4.39052C22.0267 4.14048 21.6876 4 21.334 4ZM20.3073 18.6667H3.77398L8.44065 13.84L7.48065 12.9133L2.66732 17.8933V6.34667L10.954 14.5933C11.2038 14.8417 11.5417 14.9811 11.894 14.9811C12.2462 14.9811 12.5842 14.8417 12.834 14.5933L21.334 6.14V17.8067L16.4273 12.9L15.4873 13.84L20.3073 18.6667ZM3.54065 5.33333H20.254L11.894 13.6467L3.54065 5.33333Z"
                fill="white"
                fillOpacity="0.6"
              />
            </g>
            <defs>
              <clipPath id="clip0_264_1544">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Email us:-
        </span>
        <a href="mailto:invest@decentden.com" className="text-white">
          invest@decentden.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[#FFFFFF99] flex gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2877 18.4583 16.963 18.625C17.6383 18.7917 18.3173 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
          Call us:-
        </span>
        <span className="text-white">+91-1234567891</span>
      </div>
    </div>
  );
};

const DirectContact = () => {
  return (
    <section className="space-y-[73px]">
      <div>
        <h3 className="font-irish text-[32px] mb-3">Direct Contact</h3>
        <p className="font-inika text-gray-400 text-base mb-6 leading-relaxed">
          Prefer to reach out directly? Our partnership team is ready to discuss
          custom opportunities tailored to your brand.
        </p>
      </div>
      <ContactCard />
    </section>
  );
};

export default DirectContact;
