import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </CookiesProvider>
);
