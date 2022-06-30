import React from "react";

const Header = () => {
  return (
    <div class="-mt-4 navbar bg-base-100 px-10">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-5">
          <li>
            <a>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="19.8788"
                        cy="20.1212"
                        r="19.2828"
                        fill="#FFEBEB"
                      />
                      <path
                        d="M16.0469 16.9438C14.6477 18.7422 14.6722 21.9368 16.4605 23.5204C18.4908 25.3173 21.3483 25.2986 23.1452 23.6458C25.2994 21.663 25.1755 18.3632 23.2705 16.4943C21.3555 14.6152 17.9332 14.5172 16.0469 16.9438Z"
                        fill="#FCC11A"
                      />
                      <path
                        d="M18.2935 16.3271C17.7401 16.0822 17.1349 16.7493 16.8712 17.2047C16.6075 17.6615 16.3625 18.5563 16.9245 18.7854C17.4865 19.0131 17.89 18.6269 18.2949 17.9598C18.6969 17.2926 18.926 16.6081 18.2935 16.3271Z"
                        fill="#FEE269"
                      />
                      <path
                        d="M19.7341 13.8198C19.6001 14.0706 19.6448 14.2637 19.9113 14.3271C20.1779 14.3905 21.8365 14.6599 21.9763 14.6686C22.1794 14.6815 22.2544 14.5288 22.2299 14.3516C22.2039 14.1743 21.799 11.6915 21.7616 11.4639C21.7241 11.2362 21.4834 11.0085 21.2543 11.3126C21.0252 11.6166 19.835 13.6311 19.7341 13.8198ZM24.0282 15.5432C23.7674 15.6239 23.7746 15.7839 23.9144 15.9871C24.0541 16.1902 25.0167 17.6586 25.1046 17.7609C25.1939 17.8618 25.3453 17.8877 25.4721 17.735C25.5989 17.5837 27.1811 15.3646 27.2963 15.2262C27.4865 14.9986 27.3727 14.7579 27.0816 14.8328C26.8597 14.8919 24.1925 15.4928 24.0282 15.5432ZM26.0167 19.8128C25.8294 19.7062 25.5859 19.7365 25.5225 19.9771C25.4591 20.2178 25.181 21.9657 25.155 22.1184C25.1291 22.2711 25.2444 22.4224 25.4332 22.385C25.6219 22.3475 28.2358 21.9599 28.4102 21.9167C28.7142 21.8403 28.8151 21.5363 28.4995 21.3086C28.2949 21.1602 26.194 19.9137 26.0167 19.8128ZM23.9259 23.9542C24.1276 23.8461 24.3063 23.9283 24.3567 24.1574C24.4072 24.3851 24.9648 26.7165 25.0542 27.1474C25.0988 27.3635 24.851 27.5408 24.6493 27.414C24.4461 27.2872 22.2443 25.7525 22.1031 25.6272C21.8999 25.4499 22.0411 25.2655 22.1405 25.1718C22.3423 24.9802 23.7357 24.0565 23.9259 23.9542ZM17.7946 25.2338C17.5395 25.2093 17.4646 25.437 17.5035 25.6387C17.5409 25.8419 17.9214 28.4111 17.9473 28.6028C17.9848 28.8809 18.2773 28.9962 18.4661 28.7166C18.6548 28.4371 19.9575 26.3534 20.0626 26.1574C20.2529 25.803 20.1131 25.7266 19.9229 25.6387C19.7341 25.5508 18.0611 25.2597 17.7946 25.2338ZM14.1475 22.2827C14.3247 21.9916 14.5524 22.068 14.7181 22.3461C14.8305 22.5363 15.7815 23.8159 15.8709 23.9542C15.9602 24.094 15.9977 24.3591 15.7196 24.4225C15.4386 24.4874 13.1719 25.0825 12.8174 25.1459C12.463 25.2093 12.2598 24.9312 12.4875 24.6271C12.62 24.4485 14.0466 22.4484 14.1475 22.2827ZM13.6662 20.078C13.9904 20.2221 14.1431 20.1702 14.2109 19.9382C14.3002 19.6342 14.5653 18.2407 14.5783 17.9237C14.587 17.7177 14.5019 17.5188 14.1849 17.5693C13.8679 17.6197 11.5883 17.9381 11.2972 18.039C10.9586 18.1572 10.9831 18.5289 11.2079 18.6471C11.4745 18.7869 13.4371 19.9771 13.6662 20.078ZM17.6058 14.7579C17.7888 14.6124 17.7326 14.4034 17.5683 14.2896C17.4041 14.1758 15.3694 12.7045 15.1115 12.5028C14.8838 12.3256 14.6042 12.389 14.6806 12.7939C14.7354 13.0849 15.3838 15.6326 15.4285 15.8084C15.4789 16.0116 15.6317 16.1124 15.8089 15.9856C15.9833 15.8603 17.4156 14.9107 17.6058 14.7579Z"
                        fill="#FFA722"
                      />
                    </svg>
                  </span>
                  <input
                    type="checkbox"
                    class="toggle toggle-md toggle-accent"
                    id="dark-mode"
                    checked
                  />
                  <span class="label-text">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.1212"
                        cy="20.1212"
                        r="19.2828"
                        fill="#263238"
                      />
                      <g clip-path="url(#clip0_1451_14471)">
                        <path
                          d="M18.0252 12.0287C18.1275 12.153 18.1902 12.3051 18.2052 12.4654C18.2201 12.6257 18.1866 12.7868 18.1091 12.9278C17.5032 14.0402 17.1868 15.2871 17.189 16.5538C17.189 20.7678 20.6242 24.18 24.8581 24.18C25.4104 24.18 25.948 24.1224 26.4646 24.0123C26.623 23.978 26.788 23.9911 26.9389 24.05C27.0899 24.1089 27.2202 24.211 27.3135 24.3435C27.412 24.4812 27.4622 24.6477 27.4563 24.8169C27.4505 24.9862 27.3888 25.1487 27.281 25.2793C26.4591 26.289 25.4221 27.1025 24.2459 27.6605C23.0696 28.2186 21.7836 28.5071 20.4817 28.505C15.6505 28.505 11.7374 24.6128 11.7374 19.8173C11.7374 16.208 13.9528 13.1123 17.1072 11.8002C17.2643 11.7338 17.4388 11.7202 17.6043 11.7614C17.7699 11.8026 17.9176 11.8964 18.0252 12.0287ZM16.8285 13.1112C15.6155 13.7618 14.6015 14.7289 13.8942 15.9097C13.187 17.0905 12.8128 18.4408 12.8115 19.8173C12.8115 24.0301 16.2479 27.4424 20.4817 27.4424C21.4956 27.4441 22.4997 27.2448 23.436 26.8558C24.3723 26.4669 25.2222 25.8962 25.9364 25.1766C25.5833 25.2206 25.2238 25.2426 24.8581 25.2426C20.0269 25.2426 16.1148 21.3504 16.1148 16.5549C16.1148 15.3319 16.3684 14.1676 16.8285 13.1112Z"
                          fill="white"
                        />
                        <path
                          d="M23.0493 15.0364C23.0644 14.991 23.0933 14.9515 23.1321 14.9236C23.1708 14.8956 23.2174 14.8805 23.2652 14.8805C23.313 14.8805 23.3596 14.8956 23.3984 14.9236C23.4371 14.9515 23.4661 14.991 23.4811 15.0364L23.8867 16.2542C24.068 16.797 24.4934 17.2225 25.0363 17.4038L26.2541 17.8094C26.2994 17.8244 26.3389 17.8534 26.3669 17.8921C26.3949 17.9309 26.41 17.9775 26.41 18.0253C26.41 18.0731 26.3949 18.1197 26.3669 18.1584C26.3389 18.1972 26.2994 18.2261 26.2541 18.2411L25.0363 18.6467C24.7686 18.7359 24.5253 18.8862 24.3257 19.0858C24.1262 19.2853 23.9759 19.5286 23.8867 19.7963L23.4811 21.0141C23.4661 21.0595 23.4371 21.099 23.3984 21.127C23.3596 21.155 23.313 21.17 23.2652 21.17C23.2174 21.17 23.1708 21.155 23.1321 21.127C23.0933 21.099 23.0644 21.0595 23.0493 21.0141L22.6438 19.7963C22.5546 19.5286 22.4042 19.2853 22.2047 19.0858C22.0051 18.8862 21.7619 18.7359 21.4941 18.6467L20.2764 18.2411C20.231 18.2261 20.1915 18.1972 20.1635 18.1584C20.1355 18.1197 20.1205 18.0731 20.1205 18.0253C20.1205 17.9775 20.1355 17.9309 20.1635 17.8921C20.1915 17.8534 20.231 17.8244 20.2764 17.8094L21.4941 17.4038C21.7619 17.3146 22.0051 17.1643 22.2047 16.9647C22.4042 16.7652 22.5546 16.5219 22.6438 16.2542L23.0493 15.0364ZM26.2656 11.8411C26.2759 11.8113 26.2953 11.7854 26.321 11.7671C26.3468 11.7488 26.3776 11.739 26.4092 11.739C26.4407 11.739 26.4715 11.7488 26.4973 11.7671C26.523 11.7854 26.5424 11.8113 26.5527 11.8411L26.8231 12.6523C26.9436 13.0149 27.2276 13.2989 27.5902 13.4194L28.4014 13.6898C28.4312 13.7001 28.4571 13.7195 28.4754 13.7452C28.4937 13.771 28.5035 13.8018 28.5035 13.8333C28.5035 13.8649 28.4937 13.8957 28.4754 13.9215C28.4571 13.9472 28.4312 13.9666 28.4014 13.9769L27.5902 14.2473C27.4115 14.3067 27.2492 14.407 27.116 14.5402C26.9828 14.6734 26.8826 14.8357 26.8231 15.0144L26.5527 15.8256C26.5424 15.8554 26.523 15.8813 26.4973 15.8996C26.4715 15.9179 26.4407 15.9277 26.4092 15.9277C26.3776 15.9277 26.3468 15.9179 26.321 15.8996C26.2953 15.8813 26.2759 15.8554 26.2656 15.8256L25.9952 15.0144C25.9358 14.8357 25.8355 14.6734 25.7023 14.5402C25.5691 14.407 25.4068 14.3067 25.2281 14.2473L24.4169 13.9769C24.3871 13.9666 24.3612 13.9472 24.3429 13.9215C24.3246 13.8957 24.3148 13.8649 24.3148 13.8333C24.3148 13.8018 24.3246 13.771 24.3429 13.7452C24.3612 13.7195 24.3871 13.7001 24.4169 13.6898L25.2281 13.4194C25.5907 13.2989 25.8747 13.0149 25.9952 12.6523L26.2656 11.8422V11.8411Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1451_14471">
                          <rect
                            width="16.7677"
                            height="16.7677"
                            fill="white"
                            transform="translate(11.7374 11.7374)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </label>
              </div>
            </a>
          </li>
          <li tabindex="0">
            <a className="flex flex-nowrap">
              <div class="avatar">
                <div class="w-9 rounded-full">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      fill="white"
                    />
                    <path
                      d="M40.0207 37.9792C30.5833 45.2457 17.4199 45.1876 8.04706 37.838L14.9167 34.6177C15.2439 34.464 15.5579 34.2836 15.8555 34.0785C15.9459 34.0163 16.0362 33.9514 16.1224 33.8836C16.87 33.3116 17.4854 32.5849 17.9266 31.7533C18.2601 31.1143 18.4817 30.4229 18.5816 29.709C18.6506 29.2459 18.6855 28.7783 18.6861 28.31C18.6861 27.5025 18.6424 26.6949 18.6339 25.886C18.6282 25.438 18.6235 24.9905 18.6198 24.5434L18.9021 24.6846L19.6362 25.0643L19.9765 25.1222L23.9125 25.7914L28.3059 26.5396L28.4386 31.0573L28.4824 32.534L28.5035 33.2512V33.2977L30.2118 33.9923L40.0207 37.9792Z"
                      fill="#DE8276"
                    />
                    <path
                      d="M28.4753 33.0168C27.99 33.1003 27.4908 33.0229 27.0536 32.7966L18.6296 25.91C18.6197 25.5909 18.6113 25.9255 18.607 25.6064C18.6014 25.1584 18.5967 24.7109 18.5929 24.2639L18.8753 24.405L19.6094 24.7848L19.9496 24.8427L23.8856 25.5119L28.279 26.2601L28.4117 30.7777L28.4555 32.2544L28.4767 32.9716V33.0182L28.4753 33.0168Z"
                      fill="#A76962"
                    />
                    <path
                      d="M32.8234 20.7415C32.6039 20.9711 32.3633 21.1795 32.1048 21.3641C30.6365 22.4272 28.677 22.7759 27.0027 23.349C26.2968 23.5904 18.6422 25.766 18.6422 26.2389C18.6422 26.1359 17.8926 25.3919 16.9481 24.4883C13.6905 21.3684 12.6045 16.6079 14.1867 12.3839C15.7269 8.33633 20.637 5.54668 24.7495 4.90151C26.7076 4.59515 29.0314 4.42433 30.8398 5.36315C31.7645 5.84457 32.534 6.54621 33.2398 7.3241C33.4601 7.56974 33.6737 7.82057 33.8808 8.07657C33.9697 8.18386 34.0573 8.29115 34.1434 8.39986C37.358 12.4375 36.2187 17.174 32.8234 20.7415Z"
                      fill="url(#paint0_linear_3_10350)"
                    />
                    <path
                      d="M32.8236 20.7415C32.6041 20.9711 32.3636 21.1795 32.1051 21.3641C32.0448 21.2591 31.9906 21.1506 31.9427 21.0394C31.57 20.1923 31.378 19.2733 31.2368 18.357C31.017 17.0236 30.8666 15.6797 30.7865 14.3307C30.658 12.165 29.7333 11.0907 31.5728 9.40221C32.2348 8.79551 33.0232 8.34324 33.8811 8.07797C33.97 8.18527 34.0575 8.29256 34.1436 8.40127C37.3582 12.4375 36.2189 17.174 32.8236 20.7415Z"
                      fill="url(#paint1_linear_3_10350)"
                    />
                    <ellipse
                      cx="17.2304"
                      cy="20.5933"
                      rx="2.4"
                      ry="2.4"
                      fill="#E18477"
                    />
                    <ellipse
                      cx="17.9929"
                      cy="20.5933"
                      rx="2.1487"
                      ry="2.14871"
                      fill="#A76962"
                    />
                    <path
                      d="M18.1723 18.3175C18.2895 19.8507 18.2853 21.7227 18.3262 22.2704C18.4326 23.6436 18.538 25.0163 18.6424 26.3886L28.0222 31.8676C29.3684 32.3708 30.8766 31.7689 31.5064 30.477C32.8561 27.7128 35.0217 23.3476 34.7366 21.7241C34.313 19.3241 33.1836 18.477 33.1836 18.477L33.6537 15.662C34.1295 12.8003 33.1483 10.0911 29.8053 9.77774C29.0994 9.7128 28.313 9.84691 27.8937 10.4102C26.7643 11.9293 27.4151 13.7984 25.7196 15.2102C23.6613 16.9086 19.0688 17.6497 17.993 16.2789C17.993 16.2789 18.0919 17.2488 18.1723 18.3175Z"
                      fill="#DE8276"
                    />
                    <path
                      d="M25.2114 24.3062C25.8897 25.0637 26.8196 25.5497 27.8288 25.6742"
                      stroke="#00214E"
                      stroke-width="0.884354"
                    />
                    <path
                      d="M28.5456 17.6413C28.5343 17.6907 30.4318 22.742 30.4318 22.742L27.899 22.8648"
                      stroke="#00214E"
                      stroke-width="0.884354"
                    />
                    <path
                      d="M22.5489 16.6615C23.8558 16.3912 25.2001 16.353 26.5202 16.5486"
                      stroke="#00214E"
                      stroke-width="0.884354"
                    />
                    <path
                      d="M30.8854 16.6799C31.6922 16.4919 32.5239 16.4342 33.3489 16.509"
                      stroke="#00214E"
                      stroke-width="0.884354"
                    />
                    <path
                      d="M40.0207 37.9792C30.5833 45.2457 17.4199 45.1876 8.04706 37.838L14.9167 34.6178C15.2439 34.464 15.5579 34.2836 15.8555 34.0785C15.9459 34.0163 16.0362 33.9514 16.1224 33.8836C16.87 33.3116 17.4854 32.5849 17.9266 31.7533C18.2601 31.1143 18.4817 30.4229 18.5816 29.709C18.6814 29.8057 18.786 29.8971 18.8951 29.9829C19.7607 30.623 20.7001 31.1567 21.6932 31.5726C22.1753 31.7737 22.6683 31.9476 23.1699 32.0935C24.681 32.5342 26.2588 32.701 27.8287 32.5862C28.0461 32.5693 28.2649 32.5481 28.4824 32.5326L28.5035 33.2498V33.2963L30.2118 33.9909L40.0207 37.9792Z"
                      fill="#00214E"
                    />
                    <path
                      d="M24.473 18.2483C25.3342 18.2483 25.3342 19.5726 24.473 19.5796H24.4335C23.5709 19.5796 23.5709 18.2554 24.4335 18.2483H24.4716H24.473Z"
                      fill="#00214E"
                    />
                    <path
                      d="M31.55 18.0521C32.3491 18.0592 32.3491 19.2803 31.55 19.2874H31.5133C30.7142 19.2874 30.7142 18.0592 31.5133 18.0521H31.55Z"
                      fill="#00214E"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#FFF4F4"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3_10350"
                        x1="13.461"
                        y1="26.2444"
                        x2="36.0464"
                        y2="26.2444"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#16243F" />
                        <stop offset="1" stop-color="#6878B1" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_3_10350"
                        x1="26.7629"
                        y1="16.8119"
                        x2="36.2326"
                        y2="19.4985"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#16243F" />
                        <stop offset="1" stop-color="#6878B1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
