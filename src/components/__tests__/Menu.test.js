import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res_menu")));

  const addBtns = body.getAllByTestId("add-btn");

  addBtns.slice(0, 10).forEach((e) => fireEvent.click(e));

  //   fireEvent.click(addBtns[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 10 items");
});
