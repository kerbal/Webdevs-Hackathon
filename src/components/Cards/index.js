import React from 'react';

export function Card({children}) {
  return (
    <div class="card bsd-3">
      <div class="card-body">
        {children}
      </div>
    </div>
  )
}