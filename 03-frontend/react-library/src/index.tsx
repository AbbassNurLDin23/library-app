import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QdVq34JHBxTkLkniMt4HS1fDk0fv3s37dfuCurGGnyJvrfBZKNf0PkKKlATk0Mfxpp1K4Ja5CStBazqpWOzexMA00Vntk7Nec"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <Elements stripe={stripePromise}> */}
    <App />
    {/* </Ele/ments> */}
  </BrowserRouter>
);
