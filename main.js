import { h, render } from "https://unpkg.com/preact@latest?module";
// In case you need hooks uncomment this line
// import {} from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";
import htm from "https://unpkg.com/htm?module";

// Initialize htm with Preact
const html = htm.bind(h);

render(
  html`
    <${Plugin} />
  `,
  document.querySelector("#root")
);

function Plugin() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username") || "World";

  return html`
    Hello ${username}
  `;
}
