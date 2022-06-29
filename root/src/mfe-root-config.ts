import { registerApplication, start } from "single-spa";
import * as isActive from "./activation-functions";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication(
  "@mfe/header",
  () => System.import("@mfe/header"),
  isActive.header,
  { domElement: document.getElementById("header-section") }
);

start({
  urlRerouteOnly: true,
});
