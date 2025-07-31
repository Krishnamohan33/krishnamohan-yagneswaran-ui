import { krishna } from './krishnamohan.js';
import { Header } from './components/Header.js';
import { Card } from './components/Card.js';

function App() {
  return krishna.createElement("div", { style: "padding: 20px; font-family: sans-serif;" },
    krishna.createElement(Header, { title: "Welcome to KrishnamohanJS UI" }),
    krishna.createElement(Card, {
      title: "This is a Card",
      content: "You can build reusable components like this one using krishna."
    })
  );
}

krishna.render(krishna.createElement(App), document.getElementById("root"));
