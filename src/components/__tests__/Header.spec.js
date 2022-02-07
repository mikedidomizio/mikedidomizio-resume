import {shallowMount} from '@vue/test-utils'

import Component from '../Header.vue';

describe('Header', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        email: 'test@test.com',
        website: 'google.ca',
      }
    })
  });

  it('should return an email link', async() => {
    const element = wrapper.find('a.email');
    expect(element.attributes().href).toBe('mailto:test@test.com')
  });

  describe('website', () => {

    it('should be displayed', () => {
      const element = wrapper.find('a.website');
      expect(element.attributes().href).toBe('http://google.ca')
    });

  });

});
