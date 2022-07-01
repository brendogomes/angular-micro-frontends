import { registerApplication, start } from "single-spa";
import * as isActive from "./activation-functions";

// Neste arquivo definimos quando e qual projeto será utilizado em determinada rota.

registerApplication(
  "@mfe/header",
  () => System.import("@mfe/header"),
  isActive.header,
  { domElement: document.getElementById("header-section") }
);

registerApplication(
  "@mfe/app1",
  () => System.import("@mfe/app1"),
  isActive.app1,
  { domElement: document.getElementById("app1-section") }
);

registerApplication(
  "@mfe/app2",
  () => System.import("@mfe/app2"),
  isActive.app2,
  { domElement: document.getElementById("app2-section") }
);

registerApplication(
  "@mfe/footer",
  () => System.import("@mfe/footer"),
  isActive.footer,
  { domElement: document.getElementById("footer-section") }
);

start({
  urlRerouteOnly: true,
});
