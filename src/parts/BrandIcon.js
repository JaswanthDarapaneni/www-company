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
        <div className="text-theme-blue text-3xl font-medium ">
          {process.env.REACT_APP_ORGANIZATION_ICON_NAME}

          <span className="text-theme-purple">{process.env.REACT_APP_ORGANIZATION_ICON_SUB_NAME}</span>
          <span className="text-theme-purple text-sm">
            {' '}
            {/* Technologies */}
          </span>
          <div className="tagline pt-0 text-xs theme-gray text-x font-light">
            {process.env.REACT_APP_ORGANIZATION_ICON_SUB_HEADING}
          </div>
        </div>
      </Button>

    </div>
  );
}
