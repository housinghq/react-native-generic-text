import React from "react";
import { Text, View } from "react-native";
import { shallow } from "enzyme";
import MyComponent from "../components";
import { expect } from "chai";

describe("<MyComponent />", () => {
  it("should render text content", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.length).to.equal(1);
    expect(
      wrapper.contains(<Text>I wonder if there will be any problems...</Text>)
    ).to.equal(true);
  });
});
