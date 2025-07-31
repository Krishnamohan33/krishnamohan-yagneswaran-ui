function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat()
  };
}

function render(element, container) {
  if (typeof element.type === "function") {
    return render(element.type(element.props), container);
  }

  if (typeof element === "string" || typeof element === "number") {
    container.appendChild(document.createTextNode(String(element)));
    return;
  }

  const dom = document.createElement(element.type);

  for (const [key, value] of Object.entries(element.props || {})) {
    dom.setAttribute(key, value);
  }

  element.children.forEach(child => render(child, dom));
  container.appendChild(dom);
}

// Wrap in a global-like object
export const krishna = {
  createElement,
  render
};
