import React, { useRef, useEffect } from "react";
import SvgFlowerStyled from "./styled/SvgFloweStyled";
import { animateTo, morphTo, PATHS } from "../helpers/animationHelper";

const Flower = props => {
  const face = useRef(null);
  const eyeR = useRef(null);
  const eyeL = useRef(null);
  const { email, password } = props.focused;

  useEffect(() => {
    if (email) {
      animateTo(face, props.eyeMove, 10);
      morphTo(eyeR, PATHS.openEyeR);
      morphTo(eyeL, PATHS.openEyeL);
    } else if (password) {
      animateTo(face, 0, -10);
      morphTo(eyeR, PATHS.closedEyeR);
      morphTo(eyeL, PATHS.closedEyeL);
    } else if (!password && !email) {
      animateTo(face, 0, 0);
      morphTo(eyeR, PATHS.eyeR);
      morphTo(eyeL, PATHS.eyeL);
    }
  });

  return (
    <SvgFlowerStyled
      version="1.1"
      id="Warstwa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 183 230"
    >
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="5"
            floodColor="#000000"
            floodOpacity="0.5"
          />
        </filter>
      </defs>

      <g>
        <circle id="wheel" className="st0" cx="95" cy="115" r="88" />
        <path
          id="shadow"
          className="st1"
          d="M178,214c0,8.9-35.6,16-79.5,16c-43.9,0-79.5-7.1-79.5-16c0-8.9,35.6-16,79.5-16
		C142.4,198,178,205.1,178,214z"
        />

        <g id="flower" filter="url(#f1)">
          <g>
            <g>
              <g id="lives_9_">
                <g id="lives6_9_">
                  <path
                    className="st2"
                    d="M91.5,83.3c-2.6,21.1-8.3,49.3-8.3,49.3l28.8,0.6c0,0,6.1-42.2,5.1-71.2C110.4,68.9,100.5,78,91.5,83.3z"
                  />
                  <path
                    className="st3"
                    d="M117.1,62.1c-0.9-29.1-6.3-64.4-14.2-61.9c-5.6,1.7-7,23-8.3,50.3C94.1,60,92.8,72,91.4,83.3
							C102.5,78.7,110.8,71.2,117.1,62.1z"
                  />
                </g>
                <g id="lives5_9_">
                  <path
                    className="st2"
                    d="M29.3,66.3C35.7,93.8,57,133.9,57,133.9l37-3.2c-4.5-5.4-17.2-25.9-25.5-41.3
							C54.7,83.8,39.9,75.4,29.3,66.3z"
                  />
                  <path
                    className="st3"
                    d="M26.8,48.2c0,5.4,1,11.5,2.6,18.1c11,11.2,24.4,18.8,39.2,23.2C56.2,66.3,43,39.2,39.7,31.2
							C34,18.1,26.5,20.2,26.8,48.2z"
                  />
                </g>
                <g id="lives4_9_">
                  <path
                    className="st4"
                    d="M53.6,38.2c1.3,9,4.2,21,7.8,33.2c12.4,13.5,27.8,24.2,44.7,30.9c-15.2-29-36.2-76.3-41.9-86.4
							C55.9,1.5,49.5,9.6,53.6,38.2z"
                  />
                  <path
                    className="st5"
                    d="M61.3,71.4c7.5,26.2,20.1,59.4,20.1,59.4l42.9,0.4c-2.1-2.6-11.5-16.1-18.4-28.9
							C89.3,93.6,74,83.3,61.3,71.4z"
                  />
                </g>
                <g id="lives3_9_">
                  <path
                    className="st5"
                    d="M56.9,130.8c5.4,3.5,21.4,10.2,33.2-3.3c0,0-12.3-9.4-22.7-17.4c-18.6-3.5-36.2-6.5-47.9-13.4
							C33.2,112.9,52.3,127.9,56.9,130.8z"
                  />
                  <path
                    className="st4"
                    d="M7.8,80.7c3.7,5.7,7.8,11.1,11.9,15.9c13.2,8.9,30.6,12.2,47.9,13.4C50.7,97,26.8,78.4,17.6,69.9
							C2.8,56.4-8.1,56.1,7.8,80.7z"
                  />
                </g>
                <g id="lives2_9_">
                  <path
                    className="st5"
                    d="M102,110.3c-3.7,8.4-9.2,23-9.2,23l32.4,0.4c0,0,15.3-44.6,20.2-69.5c0.1-1.2,0.4-2.3,0.6-3.4
							C134.7,80,120.9,100.1,102,110.3z"
                  />
                  <path
                    className="st4"
                    d="M142.2,17.8c-5.1,0-6,5.7-12.3,24.9c-4.4,13.4-19.3,48.1-27.8,67.7c20.2-9.6,33.4-29.1,43.9-49.4
							C149.8,37.6,147,17.8,142.2,17.8z"
                  />
                </g>
                <g id="lives1_9_">
                  <path
                    className="st3"
                    d="M181.2,42.5c-2.5-2.2-7.5,2.3-15.4,16.5c-7.3,13.3-23.9,37-34.7,52C156.5,97.9,171.6,71.4,181.2,42.5z"
                  />
                  <path
                    className="st2"
                    d="M181.2,42.5c-10.2,27-25,53.6-50.1,68.5c-5.9,8.2-13.2,18.4-13.2,18.4l26.8,3.5
							c5.6-6.8,39.1-72.6,38.4-83.5C183,45.7,182.4,43.6,181.2,42.5z"
                  />
                </g>
              </g>
              <g id="pot_9_">
                <g id="basic_9_">
                  <path
                    className="st6"
                    d="M64.7,213.5c15.1,2.5,48.6,6.4,74.2-1.5l6.4-50.3C108.4,167.3,79.9,184.9,64.7,213.5z"
                  />
                  <path
                    className="st7"
                    d="M45.1,152.9l11.7,59.1c0,0,2.9,0.6,7.9,1.5c19.3-26.4,48.5-42.5,80.7-51.7l1.2-8.6
							C146.5,153.2,96.2,142.9,45.1,152.9z"
                  />
                </g>
                <path
                  id="edge_12_"
                  className="st6"
                  d="M39.4,153.8c0,0,62.1-10.2,109.8,0c0,0,7.9-10.5,1.6-25.1c0,0-26.2-5.7-61.3-4.8
						c-15.4,0.3-32.5,1.9-49.9,5.8C39.4,129.8,32.2,138.2,39.4,153.8z"
                />
                <g id="light_9_">
                  <path
                    className="st8"
                    d="M115.1,128.2c0,0,15.7,0.6,32.6,5.1"
                  />
                  <path className="st8" d="M89.3,127.5c0,0,7.6-1.2,16.7-0.1" />
                </g>
              </g>
              <g id="face" ref={face}>
                <g id="eyes">
                  <path
                    ref={eyeR}
                    id="eyeR_12_"
                    className="st9"
                    d="M83.4,171.9c-0.9,0-1.6-0.7-1.6-1.6c0-2.6-0.6-8.7-6.7-8.7c-2.5,0-5.9,0.9-5.9,8.7
							c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6c0-9.9,5-11.9,9.1-11.9c6.1,0,10,4.7,10,11.9C85.1,171.2,84.3,171.9,83.4,171.9z"
                  />
                  <path
                    id="eyeL_12_"
                    ref={eyeL}
                    className="st9"
                    d="M130.9,171.9c-0.9,0-1.6-0.7-1.6-1.6c0-7.9-3.4-8.7-5.9-8.7c-6,0-6.7,6.1-6.7,8.7
							c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6c0-7.4,3.8-11.9,10-11.9c4.1,0,9.1,2,9.1,11.9
							C132.5,171.2,131.8,171.9,130.9,171.9z"
                  />
                </g>
                <g id="cheeks">
                  <path
                    id="cheekR_12_"
                    className="st10"
                    d="M82.1,177.3c0,1.9-5.6,3.4-12.6,3.4c-6.9,0-12.6-1.5-12.6-3.4c0-1.9,5.6-3.4,12.6-3.4
							S82.1,175.4,82.1,177.3z"
                  />
                  <path
                    id="cheeckL_12_"
                    className="st10"
                    d="M140.1,177.3c0,1.9-5.6,3.4-12.6,3.4c-6.9,0-12.6-1.5-12.6-3.4c0-1.9,5.6-3.4,12.6-3.4
							C134.5,173.9,140.1,175.4,140.1,177.3z"
                  />
                </g>
                <path
                  id="mouth_12_"
                  className="st9"
                  d="M90.6,168.8h18.7c0,0,0.4,14.9-9.4,14.9S90.6,168.8,90.6,168.8z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgFlowerStyled>
  );
};

export default Flower;
