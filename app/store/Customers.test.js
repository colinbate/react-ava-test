import test from 'ava'
import sinon from 'sinon' // you'll need to install this with `npm install --save-dev sinon`
import store from './Customers'

test('customers should start with empty', t => {
  // call store.getCustomers and verify the result is empty
  const custs = store.getCustomers();
  t.is(custs.length, 0);
})

test('setting customers and getting them', t => {
  const testval1 = { name: 'Colin' };
  const testval2 = { name: 'Bate' };
  store.setCustomers([testval1, testval2]);
  const custs = store.getCustomers();
  t.is(custs.length, 2);
  t.is(custs[0].name, 'Colin');
})

test('subscribing to the store', t => {
  const spy = sinon.spy();
  const unsub = store.subscribe(spy);
  store.setCustomers([{name: 'Test'}]);
  t.true(spy.calledOnce);
  spy.reset();
  unsub();
  store.setCustomers([{name: 'Test2'}]);
  t.false(spy.calledOnce);
})

// add an afterEach here to reset the customers to an empty array
