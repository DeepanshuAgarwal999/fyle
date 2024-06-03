import React, { ChangeEvent, FormEvent, useState } from 'react'

const ContactUsForm = () => {

  const [fieldValues, setFieldValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues((prev) => {
      return (
        {
          ...prev, [e.target.name]: e.target.value
        }
      )
    })
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  console.log(isChecked);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fieldValues.email || !fieldValues.firstName || !fieldValues.lastName) {
      alert("All fields are must");
      return;
    }
    if (!isChecked) {
      alert("Accept Terms and Conditions")
      return
    }

    const formData = {
      email: fieldValues.email,
      firstName: fieldValues.firstName,
      lastName: fieldValues.lastName
    };

    try {
      const res = await fetch('https://getform.io/f/ebpdoxdb', {
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      });
      console.log(res);
      if (res.ok) {
        alert("Form submitted successfully");

      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className='bg-white max-sm:max-w-[320px] sm:w-[450px] p-4'>
      <h1 className='font-semibold text-xl'>Talk to us</h1>
      <form className='mt-5' onSubmit={(e) => handleSubmit(e)}>
        <div className="relative h-11 w-full sm:min-w-[200px]">
          <input placeholder=""
            type='email'
            name='email'
            onChange={(e) => handleOnChange(e)}
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-semiboldtext-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label
            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-foreground-100 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Work email
          </label>
        </div>
        <div className='flex items-center gap-4 mt-6'>
          <div className="relative h-11 w-full sm:min-w-[200px]">
            <input placeholder=""
              name='firstName'
              onChange={(e) => handleOnChange(e)}
              className="peer h-full w-full text-base font-semibold border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-foreground-100 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              First Name
            </label>
          </div>
          <div className="relative h-11 w-full sm:min-w-[200px]">
            <input placeholder=""
              name='lastName'
              onChange={(e) => handleOnChange(e)}
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 " />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-foreground-100 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Last Name
            </label>
          </div>

        </div>
        <div className='flex  gap-2 py-8'>
          <input type="checkbox" name="termsAndConditions" id="termsAndConditions" checked={isChecked} onChange={(e) => handleCheckboxChange(e)} className=' mb-5 accent-primary-100 scale-125 ' />
          <p className='text-foreground-200 text-[14px] self-start opacity-90'>I agree to Fyle's terms and conditions, and provide consent to send me communication.</p>
        </div>
        <button className='bg-[#FF3366] text-white w-full h-12 rounded-md active:scale-95'>Contact Us</button>
      </form >
    </div >
  )
}

export default ContactUsForm