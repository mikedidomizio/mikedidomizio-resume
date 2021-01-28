import {shallowMount} from '@vue/test-utils'

import Component from '../SkillsSection.vue';

describe('SkillsSection', () => {

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

});
