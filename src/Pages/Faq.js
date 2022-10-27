import React from "react";

const Faq = () => {
  return (
    <div className="mt-3 grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-2 gap-4 m-3">
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is Vehicle Artisan
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              {" "}
              Vehicle Artisan is a tutorial platform for vehicle owner/lover
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is your server side URL?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              This is serverside: https://vehicle-artisan-server.vercel.app/
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What CSS library did you used in this site?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Tailwind, and daisyui CSS component library</p>
          </div>
        </div>
      </div>
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Is your site mobile responsive?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>yes this site is 100% mobile responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
