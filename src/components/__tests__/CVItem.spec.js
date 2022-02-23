import {shallowMount} from '@vue/test-utils'

import Component from '../CVItem.vue';

describe('CVItem', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(Component, {
            propsData: {
                date: 'July 2010 - August 2012',
                education: false,
                website: 'http://google.ca',
                title: 'Google',
            }
        })
    });

    describe('title', () => {

        it('should not have a website link if education is true', async() => {
            await wrapper.setProps({'education': true});
            const element = wrapper.find('h6');
            expect(element.html()).toBe('<h6>Google</h6>')
        });

        it('should have a company website link if education is false', async() => {
            await wrapper.setProps({'education': false});
            const element = wrapper.find('h6');
            expect(element.html()).toBe('<h6><a href="http://google.ca">Google</a></h6>');
        });

    });
});
