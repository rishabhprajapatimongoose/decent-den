const WhyPartnerUs = () => {
  const data = [
    "          Authentic Web3 audience engagement        ",
    "Multi-platform content distribution",
    " Custom brand integration opportunities",
    "  Measurable ROI and analytics",
    " Season-long brand exposure",
  ];
  return (
    <section className="bg-[#0680D014] border-[1.6px] text-xl  border-[#0680D066] rounded-xl p-5">
      <h3 className="font-irish text-2xl mb-5">Why Partner With Us?</h3>

      <ul className="space-y-1.5 font-inika text-xl text-gray-300">
        {data.map((item, index) => {
          return (
            <li key={index} className="flex items-end gap-3">
              <span>▪</span>
              <span className="text-white mt-1.5">{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyPartnerUs;
