const { default: CardTable } = require("./CardTable");

const NestedTable = ({ column, data, title, canAdd }) => {
  return (
    <>
      {" "}
      <CardTable
        tableColums={column}
        data={data}
        title={title}
        addAble={canAdd}
      />
      {canAdd && (
        <div
          class="total-section rounded-lg px-4 py-3 bg-gray-50"
          id="total-section"
        >
          <div class="total-row flex justify-between items-center font-semibold">
            <div class="total-label">
              Sub Total <br />
            </div>
            <div class="total-amount font-semibold">0.00</div>
          </div>

          <div class="total-row flex items-center justify-between space-x-4">
            <div class="total-label flex items-center gap-2">
              <fieldset
                role="radiogroup"
                class="form-check form-check-inline mt-1 flex items-center gap-2"
              >
                <label for="tds" class="form-check-label">
                  Discount
                </label>
              </fieldset>
              <div class="tds-select">
                <select
                  id="purchase-account"
                  name="purchaseAccount"
                  className="border-0  w-100 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option value="">0%</option>
                </select>
              </div>
            </div>
            <div class="total-amount text-muted">0.00</div>
          </div>

          <div class="total-row flex items-center justify-between space-x-4">
            <div class="total-label flex items-center gap-2">
              <fieldset
                role="radiogroup"
                class="form-check form-check-inline mt-1 flex items-center gap-2"
              >
                <input
                  role="radio"
                  name="tax-type"
                  id="tds"
                  tabindex="0"
                  class="form-check-input"
                  type="radio"
                  value="tds"
                />
                <label for="tds" class="form-check-label">
                  TDS
                </label>
                <input
                  role="radio"
                  name="tax-type"
                  id="tcs"
                  tabindex="-1"
                  class="form-check-input ms-4"
                  type="radio"
                  value="tcs"
                />
                <label for="tcs" class="form-check-label ms-0">
                  TCS
                </label>
              </fieldset>
              <div class="tds-select">
                <select
                  id="purchase-account"
                  name="purchaseAccount"
                  className="border-0  w-100 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option value="">Select a tax</option>
                </select>
              </div>
            </div>
            <div class="total-amount text-muted">- 0.00</div>
          </div>

          <div class="total-row flex items-center justify-between mt-10">
            <div class="badge-editable total-label flex items-center gap-2">
              <input
                aria-label="Adjustment Description"
                className="border-0  w-100 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                value={"Adjustment"}
              />
              <input
                className="border-0  w-100 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
              />
              <i class="icon icon-sm text-muted cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="align-text-bottom"
                >
                  <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
                  <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
                </svg>
              </i>
            </div>
            <div class="total-amount">0.00</div>
          </div>

          <div class="total-row gross-total mt-3 pt-2 border-t">
            <div class="total-label">Total ( ₹ )</div>
            <div class="total-amount">0.00</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NestedTable;
