import Reddit from "./assets/1658834703reddit-icon.png";
import Jordans from "./assets/Air-Jordan-1-Chicago-Lost-and-Found-DZ5485-612-Release-Date-4-1068x762.jpeg";
import SNKRS from "./assets/snkrs-mobile-logo-88EC2AF8B0-seeklogo.com.png";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <title>SNKRS Monitor</title>
        <meta name="SNKRS Monitor" content="SNKRS Monitor" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@300;700&display=swap" rel="stylesheet" />
      </header>
      <div className="font-josefin flex min-h-screen select-none bg-[#F5F5F5]">
        {/* Left side - Hidden on small screens */}
        <div className="hidden md:flex md:flex-1 md:flex-col md:items-center md:justify-center">
          <h1 className="px-4 pb-6 pt-48 text-center text-7xl font-bold text-[black]">
            A Real-Time <span className="  text-[5rem] text-[#ed0202]">SNKRS</span> Monitor, for free.
          </h1>
          <img className="pointer-events-none select-none" src={Jordans} width={500} height={500} />
        </div>
        {/* Right side */}
        <main className="flex flex-1 flex-col items-center justify-start bg-[#ed0202] px-3">
          {/* Content for both small and large screens */}
          <div className="flex gap-4 pt-10">
            <a href="https://www.reddit.com/r/SNKRS" target="_blank" rel="noopener noreferrer">
              <img src={Reddit} alt="Reddit Icon" width={40} height={40} />
            </a>
            <a href="https://www.snkrs.com" target="_blank" rel="noopener noreferrer">
              <img
                src={SNKRS}
                alt="SNKRS Icon"
                width={50}
                height={40}
                style={{
                  filter: "brightness(0) invert(1) sepia(1) hue-rotate(180deg)",
                }}
              />
            </a>
          </div>
          <h1 className="font-Josefin-Sans pb-6 pt-36 text-center text-8xl font-bold text-white sm:text-left">Coming Soon</h1>

          <h2 className="max-w-2xl  text-center text-xl text-white opacity-80">
            Never miss a restock. Real-time monitoring of SNKRS drops. Get instant updates on all kinds of drops over email or text, for free.
          </h2>
          <div className="flex w-full max-w-md items-center space-x-2 pt-8">
            <input className="h-10 w-64 rounded-md border-0 bg-zinc-900 px-2 py-1 text-white placeholder-zinc-400 " type="email" placeholder="Email " />
            <button className="py-1.5 w-40 border-2 rounded-md border-white bg-white text-black" type="submit">
              Join the waitlist
            </button>
          </div>
          <footer className="fixed bottom-0 p-4 text-2xl text-center text-white">
            <a href="mailto:snkrs.reddit@gmail.com">Mail</a>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
