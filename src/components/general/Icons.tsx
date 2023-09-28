export const HrLine = (
  <svg viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
      stroke="#FF26B9"
      strokeWidth="5"
    />
  </svg>
);

export const QLogo = (props: { size: string }) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 43 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.424 70.248C17.392 70.248 14.032 66.888 14.032 62.76C14.032 58.728 17.392 55.368 21.424 55.368C25.552 55.368 28.912 58.728 28.912 62.76C28.912 66.888 25.552 70.248 21.424 70.248ZM21.424 56.232C17.872 56.232 14.896 59.208 14.896 62.76C14.896 66.408 17.872 69.384 21.424 69.384C25.072 69.384 28.048 66.408 28.048 62.76C28.048 59.208 25.072 56.232 21.424 56.232ZM27.664 47.208V47.592H15.376V47.208C15.376 38.856 19.696 34.248 23.536 30.216C26.512 27.048 29.104 24.264 29.104 20.328C29.104 15.432 25.936 12.456 20.656 12.456C14.896 12.456 13.072 16.872 12.496 19.464L12.4 19.944L0.592 16.968L0.688 16.584C2.992 6.6 10.864 0.647999 21.52 0.647999C32.656 0.647999 42.064 8.904 42.064 18.6C42.064 26.472 38.128 30.504 34.384 34.344C30.928 37.896 27.664 41.16 27.664 47.208ZM16.24 46.728H26.896C26.992 40.68 30.256 37.32 33.808 33.768C37.456 30.024 41.296 26.088 41.296 18.6C41.296 9.288 32.272 1.512 21.52 1.512C11.344 1.512 3.952 7.08 1.648 16.392L11.728 18.888C12.88 14.28 16.144 11.592 20.656 11.592C26.416 11.592 29.968 14.952 29.968 20.328C29.968 24.552 27.184 27.624 24.112 30.792C20.464 34.632 16.336 39.048 16.24 46.728Z"
      fill="#A866FD"
    />
  </svg>
);

export const Hbg = (props: { size: string }) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 134 134"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)" />
    <defs>
      <linearGradient
        id="paint0_linear_70_6"
        x1="134"
        y1="67"
        x2="3.69183"
        y2="67"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F01FE" />
        <stop offset="1" stopColor="#FF2674" />
      </linearGradient>
    </defs>
  </svg>
);

export const Padlock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 530 648"
    fill="none"
  >
    <path
      d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
      fill="url(#paint0_linear_110_134)"
      fillOpacity="0.14"
    />
    <defs>
      <linearGradient
        id="paint0_linear_110_134"
        x1="265"
        y1="0"
        x2="265"
        y2="648"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset="1" stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);

export const Line = <div className="w-1 h-[100px] bg-pinnk"></div>;

export const Instagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
      fill="white"
    />
  </svg>
);

export const Twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
  >
    <path
      d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
      fill="white"
    />
  </svg>
);

export const Facebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="20"
    viewBox="0 0 11 20"
    fill="none"
  >
    <path
      d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
      fill="#F8F8F8"
    />
  </svg>
);

export const LinkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z"
      fill="#F8F8F8"
    />
  </svg>
);

export const ArrowDown = (
  <svg
    width="13"
    height="9"
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L6.5 7L11.5 1" stroke="white" strokeWidth="2" />
  </svg>
);

export const Check = (
  <svg
    fill="#ffffff"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 78.369 78.369"
    stroke="#ffffff"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);
