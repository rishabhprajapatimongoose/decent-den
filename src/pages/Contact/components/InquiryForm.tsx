import FormInput from "../../../components/ui/FormInput";

const PartnershipInquiryForm = () => {
  return (
    <div className="min-w-lg space-y-12 border-[1.5px] border-[#15427E]  py-6 px-5 rounded-[20px] bg-[#15427E1A]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[32px]  font-irish">Participation Inquiry</h2>
        <div className="h-px w-full bg-linear-to-r from-white to-[#051529]" />
      </div>
      <form className="space-y-6.5 ">
        <FormInput
          label="Your Name *"
          placeholder="Write Your Name"
          type="text"
          required
        />

        <FormInput
          label="Brand / Company *"
          placeholder="Write Your Brand / Company Name"
          type="text"
          required
        />

        <FormInput
          label="Email Address *"
          placeholder="Write Your Email Address"
          type="email"
          required
        />
        <div className="">
          <label className="text-white font-sans text-sm ">
            SponserShip Interest *
          </label>
          <select
            className=" mt-3 w-full bg-[#15427E24] text-white text-base rounded-md flex gap-2.5 px-5 py-3.5
          border-[1.4px] border-[#15427E] outline-0 focus:border-blue-300 "
          >
            <option value={"Partnership"}> Parnership</option>
          </select>
        </div>

        <button className="w-full bg-white text-black font-irish text-xl py-2.5 px-6 rounded-lg hover:bg-gray-200 transition-all uppercase">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnershipInquiryForm;
