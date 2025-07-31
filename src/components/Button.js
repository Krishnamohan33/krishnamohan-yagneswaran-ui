import { krishna } from '../krishnamohan.js';

export function Button({ label, onClick }) {
  return krishna.createElement("button", {
    onclick: onClick,
    style: "padding: 10px 16px; font-size: 16px; border-radius: 6px; border: none; background: #4CAF50; color: white; cursor: pointer;"
  }, label);
}
