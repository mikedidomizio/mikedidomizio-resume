import {shallowMount} from '@vue/test-utils'

import Component from '../Skill.vue';

describe('Skill', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        rank: 0,
      }
    })
  });

  it('should return a default value', async() => {
    const element = wrapper.find('p');
    expect(element.text()).toBe('learning');
  });

  it('should return a knowledgeable text if rank is 8', async() => {
    await wrapper.setProps({'rank': 8});
    const element = wrapper.find('p');
    expect(element.text()).toBe('knowledgeable');
  });

  it('should return a extensive knowledge text if rank is 9', async() => {
    await wrapper.setProps({'rank': 9});
    const element = wrapper.find('p');
    expect(element.text()).toBe('extensive knowledge');
  });

});
