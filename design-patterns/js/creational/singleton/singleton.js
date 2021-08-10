class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    instance.count = 0;
    Counter.instance = this;
    return instance;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    return instance.count++;
  }
}

const count1 = new Counter();
const count2 = new Counter();

count1.increaseCount();
count1.increaseCount();
count2.increaseCount();
count2.increaseCount();

console.log(count1.getCount()); // 4
console.log(count2.getCount()); // 4

