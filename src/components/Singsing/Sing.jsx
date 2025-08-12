import React, { useState } from 'react';
import apple from '/public/icons/Apple.svg';
import google from '/public/icons/Google.svg';
import editsquare from '/public/icons/editsquare.svg';
import check from '/public/icons/check.svg';

export const Sing = () => {
  const [stap, setStap] = useState(1);

  return (
    <div className="md:mt-[83px] mt-[62px]">
      <div className="container flex sm:grid grid-cols-[25%,50%,25%] ">
        <div className="w-0"></div>
        <div className="mx-auto  ">
          <div className="border border-black-black_header border-b-0">
            <div className="sm:p-20 px-4 sm:pb-10 py-10">

              {/* STEP 1 */}
              {stap === 1 && (
                <div>
                  <h1 className="font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%]">
                    Greetings! Welcome to luxury gift shop.
                  </h1>
                  <div className="mt-6">
                    <p className="text-base font-medium leading-[120%] text-black-black_header">
                      Use your mobile number to sign up or log in
                    </p>
                    <div className="mt-3 border border-gray-lightgray_color">
                      <input
                        className="outline-none font-medium text-sm leading-[120%] my-[19px] ml-4 text-gray-gray_color"
                        type="text"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                    <div className="bg-black-black_header text-center mt-4">
                      <button
                        onClick={() => setStap(2)}
                        className="font-medium text-base leading-[120%] text-white-white_color my-[19px]"
                      >
                        CONTINUE
                      </button>
                    </div>
                  </div>

                  {/* OR LINE */}
                  <div className="mt-6">
                    <div className="flex items-center justify-center w-full">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <span className="mx-2 text-gray-400 font-normal leading-[120%] text-sm">or</span>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </div>

                  {/* Google / Apple */}
                  <div className="mt-6">
                    <h1 className="font-medium text-base text-black-black_header leading-[120%]">
                      Instantly login or sign up via Google
                    </h1>
                    <div className="sm:flex gap-3 mt-4">
                      <div className="border border-black-black_header items-center text-center flex w-full">
                        <button className="font-medium sm:text-base text-sm leading-[120%] text-black-black_header py-[19px] w-full flex items-center gap-2 justify-center">
                          <img src={google} alt="google" />
                          <span>CONTINUE WITH GOOGLE</span>
                        </button>
                      </div>
                      <button className="border border-black-black_header font-medium sm:text-base text-sm leading-[120%] sm:mt-0 mt-3 text-black-black_header py-[19px] w-full flex gap-2 items-center justify-center">
                        <img src={apple} alt="apple" />
                        <span>CONTINUE WITH APPLE</span>
                      </button>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="sm:flex text-center items-center justify-center mt-[128px]">
                    <h1 className="font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Privacy Policy</span>
                    </h1>
                    <span className="border border-black-black_header h-[17px] mx-3 hidden sm:block"></span>
                    <h1 className="sm:mt-0 mt-3 font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Terms and Conditions</span>
                    </h1>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {stap === 2 && (
                <div>
                  <h1 className="font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%]">Sign up</h1>
                  <p className="text-base mt-6 font-medium leading-[120%] text-black-black_header">
                    Become a member and enjoy personalized gift recommendations, fast checkout, and more.
                  </p>

                  <div className="mt-6">
                    <div className="flex justify-between border-b pb-6 border-black-black_header">
                      <div onClick={() => setStap(1)} className="flex gap-1 cursor-pointer">
                        <img src={check} alt="check" />
                        <h1 className="font-medium text-lg leading-[140%] text-black-black_header">+380980275095</h1>
                      </div>
                      <img className="text-end" src={editsquare} alt="edit" />
                    </div>

                    <div className="mt-4">
                      <p className="text-base font-medium leading-[120%] text-black-black_header">Enter code from SMS</p>
                      <div className="mt-3 border border-gray-lightgray_color">
                        <input
                          className="outline-none font-medium text-sm leading-[120%] my-[19px] ml-4 text-gray-gray_color"
                          type="text"
                          placeholder="XX XX XX"
                        />
                      </div>
                      <p className="font-medium text-xs leading-[120%] mt-2 text-gray-gray_color">
                        Please check your phone for a message containing a code to enter
                      </p>
                      <div className="bg-black-black_header text-center mt-4">
                        <button
                          onClick={() => setStap(3)}
                          className="font-medium text-base leading-[120%] text-white-white_color my-[19px]"
                        >
                          JOIN US
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <h1 className="font-medium sm:text-base text-sm text-gray-gray_color leading-[120%]">
                        Didn't receive a code?
                      </h1>
                      <h1 className="font-medium sm:text-base text-sm text-black-black_header leading-[120%] cursor-pointer">
                        Resend code
                      </h1>
                    </div>
                  </div>

                  <div className="sm:flex text-center items-center justify-center mt-[148px]">
                    <h1 className="font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Privacy Policy</span>
                    </h1>
                    <span className="border border-black-black_header h-[17px] mx-3 hidden sm:block"></span>
                    <h1 className="sm:mt-0 mt-3 font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Terms and Conditions</span>
                    </h1>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {stap === 3 && (
                <div>
                  <h1 className="font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%]">
                    Reset your password
                  </h1>
                  <p className="text-base mt-6 font-medium leading-[120%] text-black-black_header">
                    Please provide your phone number below to receive a code for restoring access to your account
                  </p>
                  <div className="mt-6">
                    <p className="text-base font-medium leading-[120%] text-black-black_header">Enter your mobile number</p>
                    <div className="mt-3 border border-gray-lightgray_color">
                      <input
                        className="outline-none font-medium text-sm leading-[120%] my-[19px] ml-4 text-gray-gray_color"
                        type="text"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                    <div className="bg-black-black_header text-center mt-4">
                      <button className="font-medium text-base leading-[120%] text-white-white_color my-[19px]">
                        CONTINUE
                      </button>
                    </div>
                  </div>

                  <div className="sm:flex text-center items-center justify-center mt-[278px]">
                    <h1 className="font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Privacy Policy</span>
                    </h1>
                    <span className="border border-black-black_header h-[17px] mx-3 hidden sm:block"></span>
                    <h1 className="sm:mt-0 mt-3 font-medium text-sm leading-[120%] text-black-black_header">
                      <span className="border-b border-solid border-black-black_header">Terms and Conditions</span>
                    </h1>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
