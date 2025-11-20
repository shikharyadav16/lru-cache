## LRU Cache

A lightweight, easy-to-understand implementation of an LRU Cache built entirely from scratch using core data structures. This project demonstrates how caching works internally, how to design efficient lookup/insert operations, and how to maintain usage order for fast eviction.

### About the Project

The LRU Cache is a data structure that stores key–value pairs with a fixed capacity. When the cache is full and a new item is added, the least recently used entry is removed.

This implementation focuses on:

- O(1) get and put operations
- Using a HashMap for fast lookups
- Using a Doubly Linked List for tracking usage
- Clear and simple logic (no library shortcuts)

> Perfect for learning low-level design, or integrating a custom cache into your applications.

### Features

- Get and put both run in constant time
- Clean and minimal code
- Doubly linked list handles ordering efficiently
- Easy to extend, test, or embed in larger projects
- Fully from scratch — no external caching libraries

### Project Structure

```bash
/lru-cache/
│
├── src 
│   ├── Cache.js
│   └── Data.js
└── index.js
```

### How It Works

- HashMap stores the key → node mapping for O(1) access.
- Doubly Linked List stores nodes in order of usage:
  - Most recently used → head
  - Least recently used → tail
- On every get or put, the corresponding node is moved to the head.
- If capacity is exceeded, the tail node is removed.

> This combination allows a perfect mix of speed and order tracking.

### Example Usage

```js
import Cache from "./src/Cache.js";

const c = new Cache(5);

c.set(4);
c.set(1);
c.set(5);
c.set(3);

c.get(3);
c.get(5);

console.log(c.show())
```

### Time & Space Complexity

| Operation | Time | Space |
| --------- | ---- | ----- |
| get       | O(1) | O(n)  |
| put       | O(1) | O(n)  |


