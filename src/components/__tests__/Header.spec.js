import {shallowMount} from '@vue/test-utils'

import Component from '../Header.vue';

describe('Header', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        email: 'test@test.com'
      }
    })
  });

  it('should return an email link', async() => {
    const element = wrapper.find('a');
    expect(element.attributes().href).toBe('mailto:test@test.com')
  });

});
