const Data = require("./Data");

class Cache {
  #head = null;
  #tail = null;
  #currSize = 0;
  size = 5;

  constructor(size) {
    if (size <= 0) throw new Error('Size must be greater than or equal to 1')
    this.size = size;
  }

  set(value) {
    if (this.#currSize !== this.size) {
      let temp = this.#head;
      let newNode = new Data(value, null);
      if (!this.#head) {
        this.#tail = newNode;
      }
      this.#head = newNode;
      newNode.next = temp;
      this.#currSize++;
      return value;
    } else {

      let prev = this.#head;
      while (prev.next !== this.#tail) {
          prev = prev.next;
      }
      this.#tail = prev;
      this.#tail.next = null;

      const newNode = new Data(value, null);
      newNode.next = this.#head;
      this.#head = newNode;
      return value;
    }
  }

  get(value) {
    let prev = null;
    let temp = this.#head;

    if (this.#head.value === value) {
      return this.#head.value;
    }

    while (temp) {
      if (temp.value === value) {
        break;
      }
      prev = temp;
      temp = temp.next;
    }

    if (!temp) throw new Error("value is not in cache")

    let newHead = temp;
    prev.next = temp.next;
    newHead.next = this.#head;
    this.#head = newHead;
  }

  show() {
    let temp = this.#head;
    let res = []
    while (temp) {
        res.push(temp.value)
        temp = temp.next;
    }
    return res;
  }
}

module.exports = Cache;
