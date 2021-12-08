import tap from 'tap'
import defn from '../index.js'


tap.test('defn should define two implementation',  async t => {
  const fn = defn(
    x => x + 1,
    (x, y) => x + y
  )

  t.equal(fn(1), 2, 'fn(1) should be 2');
  t.equal(fn(1, 2), 3, 'fn(1, 2) should be 3')
})

tap.test('defn should define one implementation', async t => {
  const fn = defn(x => x + 1);

  t.equal(fn(10), 11)
})

tap.test('throw on lack of function definition based on the arity', async t => {
  const fn = defn(x => x + 1);

  t.throws(() => fn(1, 2))
})
