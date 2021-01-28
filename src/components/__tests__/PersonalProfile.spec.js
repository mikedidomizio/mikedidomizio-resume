import {shallowMount} from '@vue/test-utils'

import Component from '../PersonalProfile.vue';

describe('PersonalProfile', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        message: 'Welcome',
      }
    })
  });

  it('should render a message', () => {
    const element = wrapper.find('h2');
    expect(element.text()).toBe('Welcome');
  });

});
