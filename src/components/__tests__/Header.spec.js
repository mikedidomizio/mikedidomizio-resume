import {shallowMount} from '@vue/test-utils'

import Component from '../Header.vue';

describe('Header', () => {

  describe('contact information', () => {

    function mockMatchMedia(matches) {
      return jest.fn().mockImplementation(query => ({
        matches,
        media: query,
        onchange: null,
        addEventListener: jest.fn((_, listener) => {
          // simulate immediate listener call for test
          listener({ matches })
        }),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    }

    it('should not show the email link by default', async() => {
      window.matchMedia = mockMatchMedia(false)

      const wrapper = shallowMount(Component, {
        propsData: {
          email: 'test@test.com',
          website: 'google.ca',
        }
      })

      const element = wrapper.find('a.email');
      expect(element.exists()).toBe(false)
    });

    it.skip('should show the email link when printing', async() => {
      // todo not understanding how to make this work
      // the separate script never fires in the test environment
      // putting it in the other script throws an error on the `onMounted` hook
    });

  })

  describe('website', () => {

    it('should be displayed', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          email: 'test@test.com',
          website: 'google.ca',
        }
      })

      const element = wrapper.find('a.website');
      expect(element.attributes().href).toBe('http://google.ca')
    });

  });

});
