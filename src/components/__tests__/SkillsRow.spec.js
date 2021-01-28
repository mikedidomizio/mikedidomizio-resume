import {shallowMount} from '@vue/test-utils'

import Component from '../SkillsRow.vue';

describe('SkillsRow', () => {

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
