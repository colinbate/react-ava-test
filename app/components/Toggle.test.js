import test from 'ava'
import sinon from 'sinon' // you should have installed this in the last step

import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Toggle from './Toggle'

test('toggle--off class applied by default', t => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Toggle/>);
  const result = renderer.getRenderOutput().props.className.includes('toggle--off');
  t.true(result);
})

test('toggle--on class applied when initialToggledOn specified to true', t => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Toggle initialToggledOn={true}/>);
  const result = renderer.getRenderOutput().props.className.includes('toggle--on');
  t.true(result);
})
