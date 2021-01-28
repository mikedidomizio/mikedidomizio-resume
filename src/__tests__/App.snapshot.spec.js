import Component from '../App.vue';
import {mount} from "@vue/test-utils";

it('should render the entire app', () => {
  const wrapper = mount(Component);
  expect(wrapper.element).toMatchSnapshot();
});
