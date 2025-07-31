import { krishna } from '../krishnamohan.js';

export function KrishnamohanCard({ children }) {
  return krishna.createElement("div", {
    style: "padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin: 1rem 0;"
  }, ...(Array.isArray(children) ? children : [children]));
}
