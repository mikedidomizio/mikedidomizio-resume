import {shallowMount} from '@vue/test-utils'

import Component from '../Section.vue';

describe('Section', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Component, {
      propsData: {
      }
    })
  });

  it('should render', () => {
    const element = wrapper.find('h3');
    expect(element.exists()).toBeTruthy();
  });

});
