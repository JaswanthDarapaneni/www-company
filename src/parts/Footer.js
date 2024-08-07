/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className=" md:w-1/3 flex-col landscape:ml-0 landscape:w-full  ml-16 mr-8 sm:w-full">
            <BrandIcon />
            {' '}
            <p className=" text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              with Innovative Solutions
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              India,
              <br />
              Andrapradesh, Srikalahasti
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5 landscape:mr-16 ">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Contact Us
            </h1>
            <p className="text-lg text-gray-400 font-light">
              webmarketcraft.@webmarketcraft.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              {/* Phone: 8688175159 */}
            </p>
          </div>

          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/mr.jashu_jk_2k/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://in.linkedin.com/in/jaswanth-darapaneni-170a08231" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="https://github.com/JaswanthDarapaneni" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2024 - All rights reserved -
            <Button href="https://github.com/JaswanthDarapaneni" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              WebMarketCraft
            </Button>
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              {/* Made with &#x2764; by&nbsp; */}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
