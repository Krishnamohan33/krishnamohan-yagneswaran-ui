import { krishna } from '../krishnamohan.js';

export function KrishnamohanHeader({ title = "Welcome to KrishnamohanJS" }) {
  return krishna.createElement("h1", {
    style: "font-size: 2rem; text-align: center; color: #222; margin-bottom: 1rem;"
  }, title);
}
