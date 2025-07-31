import { krishna } from './krishnamohan.js';

import { KrishnamohanInput } from './components/KrishnamohanInput.js';
import { KrishnamohanButton } from './components/KrishnamohanButton.js';
import { KrishnamohanCard } from './components/KrishnamohanCard.js';
import { KrishnamohanHeader } from './components/KrishnamohanHeader.js';
import { KrishnamohanCheckbox } from './components/KrishnamohanCheckbox.js';
import { KrishnamohanButtonGroup } from './components/KrishnamohanButtonGroup.js';
import { KrishnamohanRating } from './components/KrishnamohanRating.js';

let currentRating = 4;
let checkboxAccepted = false;

function App() {
  return krishna.createElement("div", {
    style: "font-family: sans-serif; padding: 2rem; max-width: 600px; margin: auto;"
  },
    krishna.createElement(KrishnamohanHeader, { title: "🦚 Krishnamohan UI Playground" }),

    krishna.createElement(KrishnamohanCard, null,
      krishna.createElement("p", null, "Your sacred UI tools start here."),

      krishna.createElement(KrishnamohanInput, {
        placeholder: "Speak your mantra...",
        onInput: (val) => console.log("Input value:", val)
      }),

      krishna.createElement("br"),
      krishna.createElement("br"),

      krishna.createElement(KrishnamohanCheckbox, {
        label: "Accept divine blessings",
        checked: checkboxAccepted,
        onChange: (val) => {
          checkboxAccepted = val;
          console.log("Checkbox is now:", val);
        }
      }),

      krishna.createElement("br"),

      krishna.createElement(KrishnamohanButton, {
        label: "Invoke Action",
        onClick: () => alert("Blessings from Krishnamohan!"),
        variant: "mantra"
      }),

      krishna.createElement("br"),
      krishna.createElement("br"),

      krishna.createElement(KrishnamohanButtonGroup, {
        buttons: [
          { label: "Home", onClick: () => alert("Home clicked") },
          { label: "About", onClick: () => alert("About clicked") },
          { label: "Contact", onClick: () => alert("Contact clicked") }
        ]
      }),

      krishna.createElement("br"),

      krishna.createElement("p", null, "Rate your devotion:"),
      krishna.createElement(KrishnamohanRating, {
        value: currentRating,
        onRate: (val) => {
          currentRating = val;
          console.log("Rating updated:", val);
        }
      })
    )
  );
}

krishna.render(krishna.createElement(App), document.getElementById("root"));
