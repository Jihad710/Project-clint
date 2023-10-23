const InstructorItem = ({ item }) => {
  const { image, name, email, teacher } = item;

  return (
    <div className="flex container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
            <p className="font-light text-white">{teacher}</p>
            <p className="font-light text-white">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorItem;
