import { SvgIcon } from '@mui/material';
import React from 'react';

const Logo = ({ fontSize, sx }) => {
    return (
        <SvgIcon width="99" height="124" viewBox="0 0 99 124" fill="none" sx={{ fontSize, ...sx }}>
            <path
                d="M86.625 0H12.375C5.56875 0 0 5.58 0 12.4V111.6C0 118.42 5.56875 124 12.375 124H86.625C93.4313 124 99 118.42 99 111.6V12.4C99 5.58 93.4313 0 86.625 0ZM30.9375 12.4H43.3125V43.4L37.125 38.75L30.9375 43.4V12.4ZM86.625 111.6H12.375V12.4H18.5625V68.2L37.125 54.25L55.6875 68.2V12.4H86.625V111.6Z"
                fill="url(#paint0_linear_2_31)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_2_31"
                    x1="49.5"
                    y1="0"
                    x2="49.5"
                    y2="124"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D58DFD" />
                    <stop offset="1" stopColor="#F99B9B" />
                </linearGradient>
            </defs>
        </SvgIcon>
    );
};

export default Logo;
