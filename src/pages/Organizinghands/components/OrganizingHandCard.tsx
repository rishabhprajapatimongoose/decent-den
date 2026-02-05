type Props = {
  src: string;
  index: number;
  name: string;
  description: string;
};
const OrganizingHandCard = ({ src, index, name, description }: Props) => {
  return (
    <div
      className="absolute inset-0 w-full h-full border-l [border-image-source:linear-gradient(180deg,#000001_0%,#59A6F3_32.21%,#59A6F3_68.75%,#010001_100%)]
[border-image-slice:1]"
    >
      <img
        src={src}
        alt={`Organizing Hand ${index + 1}`}
        className="w-full h-full object-cover group  transition-all duration-500"
      />
      <div
        className="absolute bottom-0 flex flex-col justify-end p-6 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500
                       "
      >
        <h3 className="font-irish text-white text-[32px] uppercase tracking-wider mb-2">
          {name}
        </h3>

        <p className="font-inika text-gray-300 text-xl leading-relaxed max-w-50">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OrganizingHandCard;
