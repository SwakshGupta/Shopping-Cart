import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="max-w-xl text-center">
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
          <h2 className="text-2xl font-bold mb-3">
            How and why I'm doing this:
          </h2>
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

        <a
          href="https://wa.me/your_whatsapp_number"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default About;
