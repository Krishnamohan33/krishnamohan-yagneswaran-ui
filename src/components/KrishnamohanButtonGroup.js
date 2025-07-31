import { krishna } from '../krishnamohan.js';
import { KrishnamohanButton } from './KrishnamohanButton.js';

export function KrishnamohanButtonGroup({ buttons = [] }) {
  return krishna.createElement("div", {
    style: `
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    `
  },
    ...buttons.map(btn =>
      krishna.createElement(KrishnamohanButton, {
        label: btn.label,
        onClick: btn.onClick
      })
    )
  );
}
