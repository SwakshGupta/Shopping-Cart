import React from "react";
import img from "./images/2.jpeg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <img
        src={img}
        alt="Tech Central"
        className="w-full max-w-screen-md object-cover mb-8"
      />

      <div className="max-w-screen-md px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Tech Central!</h1>

        <p className="mb-6">
          Tech Central is an online platform for people who want to
          buy/sell/trade their tech/tech-related products, be it new or used.
        </p>

        <p className="mb-6">
          I will be posting things for sale from time to time, including but not
          limited to: Headphones, laptops, monitors, mousepads, keyboards,
          gaming controllers, mice, SSDs, all other PC parts, etc.
        </p>
        <p className="mb-6">
          These products are available from sellers all over India, who ship
          directly to you.
        </p>

        <div>
          <h1 className="text-2xl font-bold mb-3">
            How and why I'm doing this:
          </h1>
          <p className="mb-6">
            I used to build and sell PCs pre BITS for two years - a mini
            business. This has earned me connections with reputable dealers and
            vendors pan-India, enabling me to offer great prices on new and
            second-hand items. Many of us have limited options for buying and
            have budget constraints. Though I've shifted away from PC builds
            (still open for it if anyone needs one), I still have access to
            great deals. Therefore, I thought I could provide an alternative
            option/outlet for reliable purchases at a great price.
          </p>
        </div>

        <p className="mb-6">
          <strong className="text-2xl">
            Why buy from me? (Regarding Trust Issues)
          </strong>
          <br />
          For those who have trust issues for buying from me, feel free drop in
          a DM/message on the group asking for vouches from people who have
          bought from me previously. Yes, Amazon/Flipkart are bigger companies,
          but being an individual who has various sources, buying from me offers
          much better and personalized service, and that's hard to find.
          Communication with the seller is something that's not common nowadays,
          and combine this with good pricing, you have the perfect combo. My
          sources are mainly dealers, shop owners and resellers, who have been
          in this business for years. Due to my direct connection with them, I
          can get you these prices.
        </p>

        <a
          href="https://wa.me/917358781871"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M12 1C5.373 1 1 5.373 1 12s4.373 11 11 11 11-4.373 11-11S18.627 1 12 1zm-1.357 16.22l.203-.203c.117-.117.192-.27.175-.384-.02-.16-.066-.542-.386-.86-.33-.334-.631-.432-.907-.457-.262-.022-.478-.041-.661.17-.155.185-.372.577-.416.658-.063.107-.131.126-.244.088-.108-.037-.6-.228-.878-.663-.282-.44-.402-.874-.442-.992-.038-.108-.088-.124-.209-.084a.596.596 0 00-.148.06c-.114.058-.258.13-.39.19-.117.053-.23.103-.341.014-.109-.088-.731-.508-1.086-.76-.395-.25-.686-.256-.918-.247-.233.01-.514.079-.733.305-.217.226-.767.762-.877.87-.11.109-.232.142-.344.107-.113-.035-.605-.233-.923-.61-.317-.376-.373-.809-.393-.925-.02-.117.026-.255.142-.37.117-.116.386-.31.734-.342.349-.033.777.013 1.159.226.382.212.855.673 1.287 1.21.43.537.679 1.133.748 1.302.067.17.006.277-.05.38-.055.106-.104.224-.042.374.063.144.206.498.852 1.002.659.514 1.097.824 1.239.915.142.09.271.104.407-.012.135-.116.687-.612 1.276-1.163.586-.55.875-.926 1.019-1.061.143-.135.229-.172.344-.107.113.035.746.313 1.093.843.348.532.504 1.035.566 1.183.063.15.053.293-.06.407-.112.113-.28.331-.453.554-.171.222-.416.44-.663.61-.249.17-.429.273-.562.363-.133.09-.198.16-.262.28-.062.118-.075.23-.014.358.06.13.226.533.5.96.276.427.6.769.733.909.134.14.237.203.345.262.107.06.208.085.318-.013.11-.098.485-.445.786-.807z"
              clipRule="evenodd"
            />
          </svg>
          Contact me on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default About;
