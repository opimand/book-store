import React from 'react';

export default function Like({ disabled }) {
  const color = disabled ? '#f44336' : '#878686';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="color"
      enableBackground="new 0 0 24 24"
      height="15"
      viewBox="0 0 24 24"
      width="15"
    >
      <path
        d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"
        fill={color}
      />
    </svg>
  );
}
