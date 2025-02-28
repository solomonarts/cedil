import React, { useState } from "react";

const DonationDrawer = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  // Toggle drawer open/close
  const toggleDrawer = () => setIsOpen(!isOpen);

  // Handle radio button selection
  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Reset custom amount when a preset option is selected
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    setSelectedAmount("");
    setCustomAmount(e.target.value);
  };

  // Calculate the amount for the submit button
  const donationAmount = selectedAmount || customAmount || 0;

  // Close the drawer when clicked outside
  const handleClickOutside = (e) => {
    if (e.target.id === "drawerOverlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Drawer Overlay */}
      {isOpen && (
        <div
          id="drawerOverlay"
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          {/* Drawer */}
          <div
            className="fixed top-0 right-0 z-50 w-full h-full overflow-y-scroll transition-transform transform translate-x-0 bg-white shadow-lg md:w-2/3 lg:w-1/2"
            // style={{
            //   width: "100%", // Mobile
            //   maxWidth: "50%", // Desktop
            // }}
          >
            {/* Close Button */}
            <button
              onClick={toggleDrawer}
              className="absolute text-gray-600 top-4 right-4 hover:text-gray-800"
            >
              &#10005;
            </button>

            {/* Donation Form */}
            <div className="p-6">
              <div>
                <p className="bg-transparent text-[16px]">
                  CEDIL Global is your gateway to supporting partnerships that
                  co-create and deliver local solutions to Africa’s gender,
                  health, economic and climate Justice challenges.
                </p>
                <p className="bg-transparent text-[16px]">
                  To advance local solutions and innovations for responding to
                  barriers to gender, health, economic, and climate Justice,
                  CEDIL Global is working with and supporting local partners to
                  enhance leadership development for achieving systemic change.
                </p>
                <p className="bg-transparent text-[16px]">
                  Working with local women, girls and youth led organizations in
                  communities and urban settings like cities and municipalities,
                  we are reimagining and fostering impactful partnerships and
                  collaboratives for change through grant making, institutional
                  capacity strengthening, skilling and employment hubs, and
                  leadership development.
                </p>
                <p className="bg-transparent text-[16px]">
                  At CEDIL Global we are very determined to facilitating a
                  change process in Africa that is owned, and one that builds on
                  localization, innovation and continued learning by leveraging
                  local expertise, networks and resources for advancing gender,
                  health, economic and climate Justice.
                </p>

                <p className="bg-transparent text-[16px]">
                  We count on your support to keep this promise.
                  {/* Click here to read more about our news and stories. */}
                </p>
                <p className="bg-transparent text-[16px]">
                  Contact us on{" "}
                  <a
                    className="text-[#84c5c9] underline"
                    href="mailto:info@cedilglobal.org"
                  >
                    info@cedilglobal.org
                  </a>{" "}
                  or write to our VP Global Partnerships at{" "}
                  <a
                    className="text-[#84c5c9] underline"
                    href="mailto:vpglobalpartnerships@cedilglobal.org"
                  >
                    vpstrategicpartnerships@cedilglobal.org
                  </a>{" "}
                  if you would like to fund any component of our programs.
                </p>
              </div>
              <h2 className="mb-6 text-2xl font-bold">Donate Today!</h2>

              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[20, 35, 50, 100, 500, 2500].map((amount) => (
                  <label key={amount} className="cursor-pointer">
                    <input
                      type="radio"
                      name="donationAmount"
                      value={amount}
                      checked={selectedAmount == amount}
                      onChange={() => handleAmountChange(amount)}
                      className="hidden"
                    />
                    <div
                      className={`border rounded-full p-3 text-center ${
                        selectedAmount == amount
                          ? "bg-[#053744] text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      US${amount}
                    </div>
                  </label>
                ))}

                {/* Custom Amount Input */}
                <input
                  type="number"
                  className="w-full p-3 text-center border rounded-md"
                  placeholder="Enter Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>

              {/* Contact Information */}
              <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="State/Province"
                  className="p-2 border rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="p-2 border rounded-md"
                />
              </div>

              {/* Payment Information */}
              <h2 className="mb-4 text-2xl font-bold">Payment Information</h2>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  className="p-2 border rounded-md"
                />
              </div>

              {/* Submit Button */}
              <button className="bg-[#053744] text-white p-3 w-full rounded-md hover:bg-[#05374478] transition">
                Contribute US${donationAmount}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationDrawer;
