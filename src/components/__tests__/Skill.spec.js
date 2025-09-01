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
    expect(element.text()).toBe('Unfamiliar');
  });

  const rankingAndExpect = async(rank, expectWord) => {
    await wrapper.setProps({rank});
    const element = wrapper.find('p');
    expect(element.text()).toBe(expectWord);
  };

  it('should return text if rank is 0', async() => await rankingAndExpect(0, 'Unfamiliar'));

  it('should return text if rank is 2', async() => await rankingAndExpect(2, 'Exploring'));

  it('should return text if rank is 4', async() => await rankingAndExpect(4, 'Learning'));

  it('should return text if rank is 6', async() => await rankingAndExpect(6, 'Competent'));

  it('should return text if rank is 8', async() => await rankingAndExpect(8, 'Proficient'));

  it('should return expert text if rank is 10', async() => await rankingAndExpect(10, 'Master/Contributor'));

});
