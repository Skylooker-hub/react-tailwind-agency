import Logo from '~/assets/logo.svg';

function Footer() {
  return (
    <footer className="grid md:grid-cols-5 gap-8 mx-auto md:w-4/5 text-gray-500 overflow-visible">
      <div>
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <div>
          <a href="#">协议</a>.<a href="#">隐私</a>
        </div>
      </div>
      {[1, 2, 3].map(v => (
        <nav key={v}>
          <ul className="grid gap-2">
            <li className="text-black text-lg">产品介绍</li>
            <li>
              <a href="#">产品介绍１</a>
            </li>
            <li>
              <a href="#">产品介绍2</a>
            </li>
            <li>
              <a href="#">产品介绍3</a>
            </li>
            <li>
              <a href="#">产品介绍4</a>
            </li>
            <li>
              <a href="#">产品介绍5</a>
            </li>
          </ul>
        </nav>
      ))}
      <div className="grid gap-2 content-start">
        <p className="text-black text-lg">注册</p>
        <p>注册注册注册注册注册注册注册注册注册注册注册注册</p>
        <input type="text" className="py-2 px-3 border" placeholder="你的邮箱" />
      </div>
      <div className="col-span-full mt-12 border-t py-9 flex flex-col md:flex-row justify-between gap-4">
        <p>
          由{' '}
          <a className=" text-blue-500 " href="https://cruip.com/">
            Cruip
          </a>{' '}
          提供设计. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_428)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white"></rect>
              </g>
              <path
                d="M27 13.5C26.4 13.8 25.8 13.9 25.1 14C25.8 13.6 26.3 13 26.5 12.2C25.9 12.6 25.2 12.8 24.4 13C23.8 12.4 22.9 12 22 12C20.3 12 18.8 13.5 18.8 15.3C18.8 15.6 18.8 15.8 18.9 16C16.2 15.9 13.7 14.6 12.1 12.6C11.8 13.1 11.7 13.6 11.7 14.3C11.7 15.4 12.3 16.4 13.2 17C12.7 17 12.2 16.8 11.7 16.6C11.7 18.2 12.8 19.5 14.3 19.8C14 19.9 13.7 19.9 13.4 19.9C13.2 19.9 13 19.9 12.8 19.8C13.2 21.1 14.4 22.1 15.9 22.1C14.8 23 13.4 23.5 11.8 23.5C11.5 23.5 11.3 23.5 11 23.5C12.5 24.4 14.2 25 16 25C22 25 25.3 20 25.3 15.7C25.3 15.6 25.3 15.4 25.3 15.3C26 14.8 26.6 14.2 27 13.5Z"
                fill="#666666"
              ></path>
              <defs>
                <filter
                  id="filter0_d_0_428"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_428"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_428"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </a>
          <a href="">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_428)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white"></rect>
              </g>
              <path
                d="M27 13.5C26.4 13.8 25.8 13.9 25.1 14C25.8 13.6 26.3 13 26.5 12.2C25.9 12.6 25.2 12.8 24.4 13C23.8 12.4 22.9 12 22 12C20.3 12 18.8 13.5 18.8 15.3C18.8 15.6 18.8 15.8 18.9 16C16.2 15.9 13.7 14.6 12.1 12.6C11.8 13.1 11.7 13.6 11.7 14.3C11.7 15.4 12.3 16.4 13.2 17C12.7 17 12.2 16.8 11.7 16.6C11.7 18.2 12.8 19.5 14.3 19.8C14 19.9 13.7 19.9 13.4 19.9C13.2 19.9 13 19.9 12.8 19.8C13.2 21.1 14.4 22.1 15.9 22.1C14.8 23 13.4 23.5 11.8 23.5C11.5 23.5 11.3 23.5 11 23.5C12.5 24.4 14.2 25 16 25C22 25 25.3 20 25.3 15.7C25.3 15.6 25.3 15.4 25.3 15.3C26 14.8 26.6 14.2 27 13.5Z"
                fill="#666666"
              ></path>
              <defs>
                <filter
                  id="filter0_d_0_428"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_428"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_428"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </a>
          <a href="">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_428)">
                <rect x="3" y="2" width="32" height="32" rx="16" fill="white"></rect>
              </g>
              <path
                d="M27 13.5C26.4 13.8 25.8 13.9 25.1 14C25.8 13.6 26.3 13 26.5 12.2C25.9 12.6 25.2 12.8 24.4 13C23.8 12.4 22.9 12 22 12C20.3 12 18.8 13.5 18.8 15.3C18.8 15.6 18.8 15.8 18.9 16C16.2 15.9 13.7 14.6 12.1 12.6C11.8 13.1 11.7 13.6 11.7 14.3C11.7 15.4 12.3 16.4 13.2 17C12.7 17 12.2 16.8 11.7 16.6C11.7 18.2 12.8 19.5 14.3 19.8C14 19.9 13.7 19.9 13.4 19.9C13.2 19.9 13 19.9 12.8 19.8C13.2 21.1 14.4 22.1 15.9 22.1C14.8 23 13.4 23.5 11.8 23.5C11.5 23.5 11.3 23.5 11 23.5C12.5 24.4 14.2 25 16 25C22 25 25.3 20 25.3 15.7C25.3 15.6 25.3 15.4 25.3 15.3C26 14.8 26.6 14.2 27 13.5Z"
                fill="#666666"
              ></path>
              <defs>
                <filter
                  id="filter0_d_0_428"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.16 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_428"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_428"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
