// Core element creator (like React.createElement)
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat()
    }
  };
}

// Core renderer (like ReactDOM.render)
export function render(element, container) {
  if (element === undefined || element === null) {
    console.warn("Skipping invalid element:", element);
    return;
  }

  if (typeof element === "string" || typeof element === "number") {
    container.appendChild(document.createTextNode(element));
    return;
  }

  if (typeof element.type === "function") {
    const component = element.type(element.props || {});
    return render(component, container);
  }

  if (typeof element.type !== "string") {
    console.error("Invalid element type:", element);
    return;
  }

  const domElement = document.createElement(element.type);

  // Handle props
  if (element.props) {
    for (const [key, value] of Object.entries(element.props)) {
      if (key === "children") continue;
      if (key.startsWith("on") && typeof value === "function") {
        domElement.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        domElement.setAttribute(key, value);
      }
    }

    const children = Array.isArray(element.props.children)
      ? element.props.children
      : [element.props.children];

    children.forEach(child => render(child, domElement));
  }

  container.appendChild(domElement);
}

// ✅ Export everything under the krishna namespace
export const krishna = {
  createElement,
  render
};
