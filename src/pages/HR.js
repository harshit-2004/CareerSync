import Linemake from "./first_page/Linemake";

export default () => {

         const members = [
           {
             avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
             name: "John lorin",
             email: "john@example.com",
           },
           {
             avatar: "https://randomuser.me/api/portraits/men/86.jpg",
             name: "Chris bondi",
             email: "chridbondi@example.com",
           },
           {
             avatar:
               "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
             name: "yasmine",
             email: "yasmine@example.com",
           },
           {
             avatar:
               "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
             name: "Joseph",
             email: "joseph@example.com",
           },
         ];
  return (
    <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
      {/* <div className="top-0 left-0 w-full h-full bg-white opacity-40"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Fostering a vibrant workplace culture means{" "}
            <span className="text-indigo-600">
              {" "}
              fostering organization's heart
            </span>
          </h3>
          <p className=" leading-relaxed mt-3 text-left">HRs Section of NITJ</p>
        </div>

        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto gif-and-text">
          <img
            // src="https://i.postimg.cc/kgd4WhyS/container.png"
            src="/staffing.gif"
            alt=""
            className="w-full"
          />
        </div>
      </div> */}

      <Linemake thickness="90" />

      <div className="max-w-2xl px-4 border-2 border-black mt-6">
        <div className="items-start justify-between sm:flex"></div>
        <ul className="mt-12">
          {members.map((item, idx) => (
            <li key={idx} className="py-5 flex justify-start">
              <div className="flex gap-3">
                <img
                  src={item.avatar}
                  className="flex-none w-12 h-12 rounded-full"
                />
                <div className="border-b border-black">
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item.name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {item.email}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


