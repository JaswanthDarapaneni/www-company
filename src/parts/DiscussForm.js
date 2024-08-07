/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="flex flex-col px-1 pt-20 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're excited to learn about your project! Fill out the form below, and our team will reach out to you within 24 hours to discuss your ideas in detail.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col sm:flex-col p-4 py-0 xl:w-4/5 lg:w-4/5 w-full mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Full Name"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Company Name"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-col w-full xl:w-5/6 lg:w-4/6 p-4 mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Email Address"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Phone Number"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Project Description"
              className=" "
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
};
