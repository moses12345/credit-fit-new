import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = ({ options, callBack, withOption, data }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  useEffect(() => {
    console.log("thisis optin:", typeof options);
  }, []);

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      {withOption === 1 ? (
        <>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            }
          >
            {options?.map((datum) => (
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => {
                  e.preventDefault();
                  callBack(data, datum);
                  setDropdownPopoverShow(false);
                }}
              >
                {datum}
              </a>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            }
          >
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Action123
            </a>
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Another action
            </a>
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              Something else here
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default NotificationDropdown;
