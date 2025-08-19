import Lehenga from "/src/assets/StitchingService/LehengaImg.jpg";

const UmbrellaMeasurment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl overflow-y-auto max-h-[95vh] p-4">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-red-600 text-2xl font-bold hover:scale-110"
          >
            &times;
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
           Umbrella  Online Stitching Measurement Form
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={Lehenga}
              alt="Stitching Model"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto px-6 py-10 border border-green-300 rounded-md shadow-md bg-white">
            {/* Heading */}
            <h2 className="text-sm text-green-700 font-semibold mb-6">
              Fill in your measurements for perfect tailoring
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* Row 1 */}
              <div>
                <label className="font-semibold mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Priya"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="font-semibold mb-1 block">Address</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="font-semibold mb-1 block">State</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">Pincode</label>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Row 4 - Radio Buttons */}
              <div className="sm:col-span-2">
                <label className="font-semibold mb-1 block">
                  Preferred Delivery Method
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      className="accent-green-600"
                    />
                    Home Delivery
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      className="accent-green-600"
                    />
                    In-store Pickup
                  </label>
                </div>
              </div>

              {/* Row 5 - Date Pickers */}
              <div>
                <label className="font-semibold mb-1 block">Pickup Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="font-semibold mb-1 block">
                  Products To Be Delivered?
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Section Title */}
              <div className="sm:col-span-2 mt-6 text-center">
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">
                  Measurement Details
                </h3>
                <p className="text-xs text-gray-500">
                  (All measurements in inches)
                </p>
              </div>

              {/* Measurements */}
              {[
                ["Shoulder Width", "Bust"],
                ["Waist", "Hip"],
                ["Frock Length", "Sleeve Length"],
                ["Armhole", "Elbow Circumference"],
                ["Front Neck Depth", "Back Neck Depth"],
                ["Neck Design", "Neck Width"],
              ].map(([left, right], idx) => (
                <React.Fragment key={idx}>
                  <div>
                    <label className="font-semibold mb-1 block">{left}</label>
                    <input
                      type="text"
                      placeholder='14"'
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="font-semibold mb-1 block">{right}</label>
                    <input
                      type="text"
                      placeholder='14"'
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Special Instructions */}
              <div className="sm:col-span-2">
                <label className="font-semibold mb-1 block">
                  Any Special Instructions?
                </label>
                <textarea
                  rows="3"
                  placeholder="Type here..."
                  className="w-full border rounded-md px-3 py-2"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmbrellaMeasurment;
