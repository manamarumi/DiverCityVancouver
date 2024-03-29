import React from 'react';

export function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 
      21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903
       5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 
       3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"/>
    </svg>
  )
}

export function EventIcon() {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="24" fill="white" stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <g>
        <g>
          <path d="M147.554,170.746L0,512l341.254-147.555L147.554,170.746z M64.137,447.863l15.725-36.368l4.468,27.637L64.137,447.863z M115.968,425.451L104.5,354.515l33.476-77.419l20.979,129.768L115.968,425.451z M190.592,393.184l-25.484-157.628l54.86,54.86    l13.61,84.181L190.592,393.184z M260.345,330.793l22.502,22.502l-17.631,7.623L260.345,330.793z" />
        </g>
      </g>
      <g>
        <g>
          <rect x="272.366" y="174.788" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.5341 282.7197)" />
        </g>
      </g>
      <g>
        <g>
          <path d="M346.792,253.384c-23.406,5.333-44.55,16.926-61.15,33.526l23.628,23.628c27.241-27.242,65.939-31.318,92.204-23.272 l9.787-31.951C391.197,249.17,368.3,248.483,346.792,253.384z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M256.683,100.738l-31.951,9.787c8.046,26.266,3.971,64.962-23.27,92.204l23.628,23.628 c16.6-16.599,28.193-37.745,33.524-61.15C263.516,143.698,262.83,120.803,256.683,100.738z" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="446.625,105.212 415.881,96.119 406.788,65.375 383.541,87.454 352.369,79.956 359.867,111.128 337.788,134.374 368.532,143.468 377.626,174.211 400.872,152.133 432.044,159.63 424.546,128.459   " />
        </g>
      </g>
      <g>
        <g>
          <polygon points="512,267.991 481.256,258.899 472.163,228.154 448.916,250.233 417.745,242.736 425.242,273.908 403.164,297.154 433.907,306.247 443.001,336.99 466.248,314.913 497.419,322.41 489.921,291.238   " />
        </g>
      </g>
      <g>
        <g>
          <polygon points="283.846,39.837 253.101,30.744 244.009,0 220.762,22.079 189.59,14.581 197.087,45.752 175.008,68.999 205.753,78.093 214.845,108.836 238.092,86.758 269.264,94.255 261.767,63.084   " />
        </g>
      </g>
    </svg>
  )
}


export function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


export function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function ProfileIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}