import React from 'react';

export function Title({ size, children, className }) {
  size = size || "1";
  return (
    <div className={className || ""}>
    {function(){
      switch(size) {
        case "1": return <h1 className="text-cn-red">{children}</h1>
        case "2": return <h2 className="text-cn-red">{children}</h2>
        case "3": return <h3 className="text-cn-red">{children}</h3>
        case "4": return <h4 className="text-cn-red">{children}</h4>
        case "5": return <h5 className="text-cn-red">{children}</h5>
        case "6": return <h6 className="text-cn-red">{children}</h6>
      }
    }()}
    <div className="smallline bg-cn-red"></div>
    </div>
  )
}