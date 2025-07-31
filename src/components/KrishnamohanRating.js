import { krishna } from '../krishnamohan.js';

export function KrishnamohanRating({ max = 5, value = 0, onRate }) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const filled = i <= value;

    stars.push(
      krishna.createElement("span", {
        onclick: () => onRate?.(i),
        style: `
          cursor: pointer;
          font-size: 1.5rem;
          color: ${filled ? '#0077B6' : '#ccc'};
          transition: color 0.3s ease;
        `
      }, "★")
    );
  }

  return krishna.createElement("div", {
    style: "display: flex; gap: 0.25rem; margin: 0.5rem 0;"
  }, ...stars);
}
