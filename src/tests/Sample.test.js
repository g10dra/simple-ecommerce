
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Hello, User,Test,TestEvents} from "./SampleComponents";
import { render as renderer,cleanup, fireEvent } from '@testing-library/react';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  cleanup();//rtl cleaup cb
});

//rendering testing
test("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Sunil" />, container);
  });
  expect(container.textContent).toContain("Sunil");
});

//async data mock testing
it("renders user data", async () => {
  const fakeUser = { 
    id: 1,
    name: "Jeetendra Singh",
    phone: "+91-8432671777",
    email: "test@gmail.com"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id={1} />, container);
  });

  expect(container.querySelector("span").textContent).toBe(`Id: ${fakeUser.id}`);
  expect(container.querySelector("summary").textContent).toBe(`Name: ${fakeUser.name}`);
  expect(container.textContent).toContain(fakeUser.phone);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

//testing with events  
it('increments counter', () => {
  const { getByTestId } = renderer(<TestEvents />); 
  fireEvent.click(getByTestId('button-up'))
  fireEvent.click(getByTestId('button-up'))
  fireEvent.click(getByTestId('button-up'))
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent(`2`)
});

it('decrements counter', () => {
  const { getByTestId } = renderer(<TestEvents />); 
  
  fireEvent.click(getByTestId('button-down'))

  expect(getByTestId('counter')).toHaveTextContent('-1')
});

//snapshot Testing 
it('test snapshot without title', () => {
  const { asFragment } = renderer(<Test />)
  expect(asFragment(<Test />)).toMatchSnapshot()
});
it('test snapshot with title', () => {
  const { asFragment } = renderer(<Test title="Custom Title" />)
  expect(asFragment(<Test title="Custom Title" />)).toMatchSnapshot()
});
