import { shallowMount, Wrapper } from '@vue/test-utils'

import Hello from '@/components/Hello.vue'

describe('Hello Components', () => {
  const propsData = {
    name: 'TEST',
    initialEnthusiasm: 5,
  }

  describe('GIVEN it is initalised', () => {
    let wrapper: Wrapper<any>
    beforeEach(() => {
      wrapper = shallowMount(Hello, {
        propsData: propsData,
      })
    })

    it('SHOULD show the correct greeting', () => {
      expect(wrapper.find('.hello__greeting').text()).toBe('Hello TEST!!!!!')
    })
  })
})
