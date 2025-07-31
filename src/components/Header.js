import { krishna } from '../krishnamohan.js';

export function Header({ title }) {
  return krishna.createElement("h1", {
    style: "font-size: 28px; color: #333; margin-bottom: 12px;"
  }, title);
}
