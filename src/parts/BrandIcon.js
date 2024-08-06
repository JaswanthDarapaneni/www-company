/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <div>
      <Button
        className=""
        type="link"
        href="/"
      >
        <p className="text-theme-blue text-3xl font-medium ">
          Web
          <span className="text-theme-purple">Market</span>
          <span className="text-theme-purple text-sm">
            {' '}
            Craft
          </span>
          <p className="tagline pt-0 text-xs theme-gray text-x font-light">
            Your Satisfaction, Our Craft
          </p>
        </p>
      </Button>

    </div>
  );
}
