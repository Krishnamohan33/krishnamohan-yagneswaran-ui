import { krishna } from '../krishnamohan.js';

export function KrishnamohanButton({ label, onClick }) {
  return krishna.createElement("button", {
    onclick: onClick,
    style: `
      padding: 0.5rem 1rem;
      background: #0077B6;        /* Deep Peacock Blue */
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    `,
    onmouseover: (e) => e.target.style.background = '#00B4D8', // Lighter on hover
    onmouseout: (e) => e.target.style.background = '#0077B6'
  }, label);
}
