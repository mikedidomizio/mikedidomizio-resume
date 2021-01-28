import Component from '../App.vue';
import {shallowMount} from "@vue/test-utils";

let wrapper;

beforeAll(() => {
    wrapper = shallowMount(Component, {
        propsData: {
        }
    })
});

it('should render', () => {
    const element = wrapper.find('*');
    expect(element.exists()).toBeTruthy();
});
