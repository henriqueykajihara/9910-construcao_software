import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button/Button';
import { expect } from 'chai'

describe('testando botao', () => {

  let wrapper
  let props

  beforeEach(() => {

    props= { 
      content: "test",
      onClick: jest.fn()
    }

    wrapper = shallow( <Button {...props} />)
  })

  it('render', () => {
    expect(wrapper).to.be.an('object')
  });

  it('botao deve ter onclick', () => {
    expect(wrapper.prop('onClick')).to.not.be.undefined
  })

  it('onClick', () => {
    wrapper.simulate('click');

    expect(wrapper)

  })
})
