import { krishna } from '../krishnamohan.js';

export function KrishnamohanInput({ placeholder = "Type something...", value = "", onInput }) {
  return krishna.createElement("input", {
    value,
    placeholder,
    oninput: (e) => onInput?.(e.target.value),
    style: `
      padding: 0.6rem 1rem;
      border: 2px solid #0077B6;
      border-radius: 6px;
      outline: none;
      font-size: 1rem;
      color: #003049;
      background-color: #f0faff;
      transition: border-color 0.3s;
    `,
    onfocus: (e) => (e.target.style.borderColor = '#00B4D8'),
    onblur: (e) => (e.target.style.borderColor = '#0077B6')
  });
}
