import { krishna } from '../krishnamohan.js';

export function Card({ title, content }) {
  return krishna.createElement("div", {
    style: "border: 1px solid #ccc; padding: 16px; border-radius: 8px; box-shadow: 0 0 5px rgba(0,0,0,0.1); margin-top: 12px;"
  },
    krishna.createElement("h2", {
      style: "font-size: 20px; margin-bottom: 8px;"
    }, title),
    krishna.createElement("p", null, content)
  );
}
