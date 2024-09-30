const TabContent = ({ tab }) => {
  return (
    <>
      {tab == "Other Details" && (
        <div className="flex flex-wrap mt-10">
          {/* Type */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Customer Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="goods"
                name="type"
                value="goods"
                className="mr-2"
              />
              <label htmlFor="goods" className="mr-4">
                Business
              </label>
              <input
                type="radio"
                id="service"
                name="type"
                value="service"
                className="mr-2"
              />
              <label htmlFor="service">Individual</label>
            </div>
          </div>
          {/* Primary Contact Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/*  Company Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Display Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Display Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Email */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Numb */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Number
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Phone */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
      )}

      {tab == "Address" && (
        <div className="flex flex-wrap mt-10">
          {/* Type */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Customer Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="goods"
                name="type"
                value="goods"
                className="mr-2"
              />
              <label htmlFor="goods" className="mr-4">
                Business
              </label>
              <input
                type="radio"
                id="service"
                name="type"
                value="service"
                className="mr-2"
              />
              <label htmlFor="service">Individual</label>
            </div>
          </div>
          {/* Primary Contact Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/*  Company Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Display Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Display Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Email */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Numb */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Number
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Phone */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
      )}

      {tab == "Contact Persons" && (
        <div className="flex flex-wrap mt-10">
          {/* Type */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Customer Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="goods"
                name="type"
                value="goods"
                className="mr-2"
              />
              <label htmlFor="goods" className="mr-4">
                Business
              </label>
              <input
                type="radio"
                id="service"
                name="type"
                value="service"
                className="mr-2"
              />
              <label htmlFor="service">Individual</label>
            </div>
          </div>
          {/* Primary Contact Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/*  Company Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Display Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Display Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Email */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Numb */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Number
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Phone */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
      )}

      {tab == "Bank Details" && (
        <div className="flex flex-wrap mt-10">
          {/* Type */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Customer Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="goods"
                name="type"
                value="goods"
                className="mr-2"
              />
              <label htmlFor="goods" className="mr-4">
                Business
              </label>
              <input
                type="radio"
                id="service"
                name="type"
                value="service"
                className="mr-2"
              />
              <label htmlFor="service">Individual</label>
            </div>
          </div>
          {/* Primary Contact Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/*  Company Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Display Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Display Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
          {/* Customer Email */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Numb */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Number
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          {/*  Customer Phone */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
      )}

      {tab == "Remarks" && (
        <div className="flex flex-wrap mt-10">
          {/* Primary Contact Name */}
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Remarks (For Internal Use)
            </label>
            <textarea className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
          {/*  Company Name */}
        </div>
      )}
    </>
  );
};

export default TabContent;
