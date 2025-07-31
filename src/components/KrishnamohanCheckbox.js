import { krishna } from '../krishnamohan.js';

export function KrishnamohanCheckbox({ label = "", checked = false, onChange }) {
  return krishna.createElement("label", {
    style: `
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: #003049;
      cursor: pointer;
    `
  },
    krishna.createElement("input", {
      type: "checkbox",
      checked,
      onchange: (e) => onChange?.(e.target.checked),
      style: `
        width: 18px;
        height: 18px;
        accent-color: #0077B6;
        cursor: pointer;
      `
    }),
    label
  );
}
