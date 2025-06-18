import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-56px)]">
      <div className="absolute inset-0 bg-[url('images/bg.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 from-70% via-white/80 via-85% to-white/50 to-100%" />
      <div className="relative z-1 justify-around gap-4 p-[min(4em,6%)] md:flex">
        <aside className="flex-col md:mb-4 md:max-w-2/3">
          <div>
            <img
              className="m-auto"
              src="images/logo-black.webp"
              alt="pizzeria logo"
            />
          </div>
          <ul className="hidden md:block md:list-disc md:font-[OpenSans] md:text-xl lg:text-2xl">
            <li>
              Family-owned since 1987, bringing
              <b> authentic Italian recipes</b> passed down through generations
              to your neighborhood. Our hand-tossed dough made fresh daily,
              wood-fired ovens, and traditional techniques create pizza
              perfection.
            </li>
            <br />
            <li>
              <b>Freshly-sourced organic ingredients</b> from regional farms, we
              believe in strengthening our community while delivering
              exceptional quality. By joining us, you are helping support the
              work of local farmers while enjoying peak freshness in every bite.
            </li>
            <br />
            <li>
              Committed to eco-friendly packaging, waste reduction and
              responsible sourcing, we adopt
              <b> sustainable practices</b> in our everyday routine for a better
              tomorrow.
            </li>
            <br />
          </ul>
        </aside>

        <section className="m-5 flex-col rounded-lg bg-white/50 p-[min(3em,3%)] text-center shadow-xl md:max-w-1/3 md:text-start">
          <h1 className="mb-2 font-[Fairplay] text-2xl">Login/Sign Up</h1>
          <hr className="mx-auto mb-8 w-1/4 md:mx-0 md:mb-4" />
          <h4 className="font-[OpenSans] text-lg">E-mail</h4>
          <input
            className="mb-6 rounded-xs border-b duration-300 focus:border-b-transparent focus:bg-white md:mb-2"
            type="email"
            name="email"
            id="input-email"
            placeholder="Enter your e-mail"
          />
          <h4 className="font-[OpenSans] text-lg">Password</h4>
          <input
            className="mb-6 rounded-xs border-b duration-300 focus:border-b-transparent focus:bg-white md:mb-2"
            type="password"
            name="password"
            id="input-password"
            placeholder="Enter your password"
          />
          <br />
          <button className="m-5 cursor-pointer rounded-sm border p-1.5 duration-150 hover:bg-[#1e1e1e] hover:text-white md:mx-0.5">
            Login
          </button>
          <p className="login__error"></p>
        </section>
      </div>
    </div>
  );
};

export default Home;
