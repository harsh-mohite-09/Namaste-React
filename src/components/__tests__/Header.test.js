import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import dummyLogo from "../../mocks/dummyLogo.js";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");

  // console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/" + dummyLogo);
  // Check if logo is loaded
});

test("Cart should be empty", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  // console.log(cart);

  expect(cart.innerHTML).toBe("Cart - Empty");
  // Check if logo is loaded
});
