import React from 'react';
import Step from './Step';
import Arrow from './Arrow';

const MakeIt = () => {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 uppercase mb-10 relative inline-block">
          How We Work?
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] bg-orange-500 h-1 w-16"></span>
        </h1>
        <div className="flex justify-center items-center gap-4 mx-6">
          <Step
            title="01"
            description="Register"
            image="/Images/register.png"
          />
          <Arrow />
          <Step
            title="02"
            description="Access job opportunities"
            image="/Images/book.jpg"
          />
          <Arrow />
          <Step
            title="03"
            description="Provide service"
            image="/Images/service.png"
          />
          <Arrow />
          <Step
            title="04"
            description="Grow your business"
            image="/Images/growth.png"
          />
        </div>
      </div>
    );
  };
  
  export default MakeIt;