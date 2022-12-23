class Queue {
  // items: any[];
  constructor() {
    this.items = [];
  }
  isEmpty = () => this.items.length === 0;
  push = (item) => this.items.push(item);
  pop = () => this.items.shift();
  peek = () => this.items[0];
  size = () => this.items.length;
}

module.exports = Queue;
