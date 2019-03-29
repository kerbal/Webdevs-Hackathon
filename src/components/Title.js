import React from 'react';

export function Title({ size, children, className }) {
  size = size || "1";
  return (
    <div className={className || ""}>
    {function(){
      switch(size) {
        case "1": return <h1 className="text-main">{children}</h1>
        case "2": return <h2 className="text-main">{children}</h2>
        case "3": return <h3 className="text-main">{children}</h3>
        case "4": return <h4 className="text-main">{children}</h4>
        case "5": return <h5 className="text-main">{children}</h5>
        case "6": return <h6 className="text-main">{children}</h6>
      }
    }()}
    <div className="smallline bg-main bdr-max"></div>
    </div>
  )
}