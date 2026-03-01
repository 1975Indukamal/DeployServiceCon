import { Challenge } from "@/types/practice";

export const nodejsChallenges: Challenge[] = [
  // ── Server & Core ──
  {
    title: "Create a Basic HTTP Server",
    description:
      "Write a function that returns an HTTP server configuration object with { port, host, routes }. The routes array should contain objects with { method, path, handler } for GET '/' returning 'Hello World' and GET '/health' returning { status: 'ok' }.",
    functionName: "createServerConfig",
    starterCode: `function createServerConfig(port) {
  // Return { port, host, routes: [...] }
}`,
    tests: [
      {
        input: [3000],
        expected: {
          port: 3000,
          host: "localhost",
          routes: [
            { method: "GET", path: "/", response: "Hello World" },
            { method: "GET", path: "/health", response: { status: "ok" } },
          ],
        },
      },
    ],
    difficulty: "Easy",
    topic: "Server & Core",
    answer: `function createServerConfig(port) {
  return {
    port,
    host: 'localhost',
    routes: [
      { method: 'GET', path: '/', response: 'Hello World' },
      { method: 'GET', path: '/health', response: { status: 'ok' } }
    ]
  };
}`,
  },
  {
    title: "Route Matcher Middleware",
    description:
      "Implement a function that takes an array of route objects { method, path } and a request { method, path }. Return the matching route or null. Support a wildcard '*' at the end of a route path (e.g. '/api/*' matches '/api/users').",
    functionName: "matchRoute",
    starterCode: `function matchRoute(routes, request) {
  // Find and return matching route or null
}`,
    tests: [
      {
        input: [
          [
            { method: "GET", path: "/users" },
            { method: "POST", path: "/users" },
            { method: "GET", path: "/api/*" },
          ],
          { method: "GET", path: "/users" },
        ],
        expected: { method: "GET", path: "/users" },
      },
      {
        input: [
          [
            { method: "GET", path: "/api/*" },
            { method: "GET", path: "/home" },
          ],
          { method: "GET", path: "/api/products" },
        ],
        expected: { method: "GET", path: "/api/*" },
      },
      {
        input: [
          [{ method: "GET", path: "/home" }],
          { method: "POST", path: "/home" },
        ],
        expected: null,
      },
    ],
    difficulty: "Medium",
    topic: "Server & Core",
    answer: `function matchRoute(routes, request) {
  return routes.find(route => {
    if (route.method !== request.method) return false;
    if (route.path === request.path) return true;
    if (route.path.endsWith('/*')) {
      const base = route.path.slice(0, -2);
      return request.path.startsWith(base + '/') || request.path === base;
    }
    return false;
  }) || null;
}`,
  },
  {
    title: "Middleware Pipeline",
    description:
      "Implement a function that composes an array of middleware functions into a single function. Each middleware receives (context, next). They can modify context and must call next() to proceed. Return the final context.",
    functionName: "composeMiddleware",
    starterCode: `function composeMiddleware(middlewares, initialContext) {
  // Execute middlewares in order, return final context
}`,
    tests: [
      {
        input: [
          "middlewares_placeholder",
          { user: null, authenticated: false },
        ],
        expected: { user: "admin", authenticated: true, role: "superadmin" },
      },
    ],
    difficulty: "Hard",
    topic: "Server & Core",
    answer: `function composeMiddleware(middlewares, initialContext) {
  let context = { ...initialContext };
  let index = 0;

  function next() {
    if (index < middlewares.length) {
      const mw = middlewares[index++];
      mw(context, next);
    }
  }

  next();
  return context;
}`,
  },

  // ── Database Connection ──
  {
    title: "Database Connection Config Builder",
    description:
      "Create a function that builds a database connection config object from a connection string. Parse 'mongodb://user:pass@host:port/dbname' into { protocol, user, password, host, port, database }.",
    functionName: "parseConnectionString",
    starterCode: `function parseConnectionString(connStr) {
  // Parse and return config object
}`,
    tests: [
      {
        input: ["mongodb://admin:secret@localhost:27017/myapp"],
        expected: {
          protocol: "mongodb",
          user: "admin",
          password: "secret",
          host: "localhost",
          port: 27017,
          database: "myapp",
        },
      },
      {
        input: ["postgresql://root:pass123@db.server.com:5432/production"],
        expected: {
          protocol: "postgresql",
          user: "root",
          password: "pass123",
          host: "db.server.com",
          port: 5432,
          database: "production",
        },
      },
    ],
    difficulty: "Medium",
    topic: "Database Connection",
    answer: `function parseConnectionString(connStr) {
  const regex = /^(\\w+):\\/\\/(\\w+):(.+)@([\\w.]+):(\\d+)\\/(.+)$/;
  const match = connStr.match(regex);
  
  return {
    protocol: match[1],
    user: match[2],
    password: match[3],
    host: match[4],
    port: parseInt(match[5]),
    database: match[6]
  };
}`,
  },
  {
    title: "Connection Pool Manager",
    description:
      "Implement a connection pool that tracks active and idle connections. It should have getConnection() (returns idle or creates new if under max), releaseConnection(id), and getStatus(). Max pool size is configurable.",
    functionName: "createConnectionPool",
    starterCode: `function createConnectionPool(maxSize) {
  // Return { getConnection, releaseConnection, getStatus }
}`,
    tests: [
      {
        input: [3],
        expected: "function",
      },
    ],
    difficulty: "Hard",
    topic: "Database Connection",
    answer: `function createConnectionPool(maxSize) {
  let nextId = 1;
  const active = new Map();
  const idle = [];

  return {
    getConnection() {
      if (idle.length > 0) {
        const conn = idle.pop();
        active.set(conn.id, conn);
        return conn;
      }
      if (active.size < maxSize) {
        const conn = { id: nextId++, createdAt: Date.now() };
        active.set(conn.id, conn);
        return conn;
      }
      return null; // pool exhausted
    },
    releaseConnection(id) {
      const conn = active.get(id);
      if (conn) {
        active.delete(id);
        idle.push(conn);
        return true;
      }
      return false;
    },
    getStatus() {
      return { active: active.size, idle: idle.length, total: active.size + idle.length, max: maxSize };
    }
  };
}`,
  },

  // ── CRUD Operations ──
  {
    title: "In-Memory CRUD Store",
    description:
      "Implement an in-memory data store with create(item), read(id), update(id, changes), delete(id), and list() methods. Auto-generate IDs. Return null for missing items.",
    functionName: "createStore",
    starterCode: `function createStore() {
  // Return { create, read, update, delete: del, list }
}`,
    tests: [
      {
        input: [],
        expected: "function",
      },
    ],
    difficulty: "Easy",
    topic: "CRUD Operations",
    answer: `function createStore() {
  let nextId = 1;
  const items = new Map();

  return {
    create(item) {
      const id = nextId++;
      const record = { id, ...item, createdAt: new Date().toISOString() };
      items.set(id, record);
      return record;
    },
    read(id) {
      return items.get(id) || null;
    },
    update(id, changes) {
      const item = items.get(id);
      if (!item) return null;
      const updated = { ...item, ...changes, updatedAt: new Date().toISOString() };
      items.set(id, updated);
      return updated;
    },
    delete(id) {
      return items.delete(id);
    },
    list() {
      return Array.from(items.values());
    }
  };
}`,
  },
  {
    title: "Bulk Upsert Operation",
    description:
      "Implement a bulkUpsert function. Given an existing array of records (with 'id') and an array of new records, insert records with new IDs and update existing ones where IDs match. Return the merged array.",
    functionName: "bulkUpsert",
    starterCode: `function bulkUpsert(existing, incoming) {
  // Merge incoming into existing: update if id matches, insert if new
}`,
    tests: [
      {
        input: [
          [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 },
          ],
          [
            { id: 2, name: "Bob", age: 31 },
            { id: 3, name: "Charlie", age: 28 },
          ],
        ],
        expected: [
          { id: 1, name: "Alice", age: 25 },
          { id: 2, name: "Bob", age: 31 },
          { id: 3, name: "Charlie", age: 28 },
        ],
      },
    ],
    difficulty: "Medium",
    topic: "CRUD Operations",
    answer: `function bulkUpsert(existing, incoming) {
  const map = new Map(existing.map(item => [item.id, { ...item }]));
  
  for (const item of incoming) {
    if (map.has(item.id)) {
      map.set(item.id, { ...map.get(item.id), ...item });
    } else {
      map.set(item.id, { ...item });
    }
  }
  
  return Array.from(map.values());
}`,
  },
  {
    title: "Soft Delete with Restore",
    description:
      "Implement a store that supports soft-delete. delete(id) marks an item with { deleted: true, deletedAt }. restore(id) removes those fields. list() returns only non-deleted items. listDeleted() returns deleted items.",
    functionName: "createSoftDeleteStore",
    starterCode: `function createSoftDeleteStore(initialItems) {
  // Return { delete, restore, list, listDeleted, get }
}`,
    tests: [
      {
        input: [
          [
            { id: 1, name: "Task A" },
            { id: 2, name: "Task B" },
          ],
        ],
        expected: "function",
      },
    ],
    difficulty: "Medium",
    topic: "CRUD Operations",
    answer: `function createSoftDeleteStore(initialItems) {
  const items = new Map(initialItems.map(i => [i.id, { ...i }]));

  return {
    delete(id) {
      const item = items.get(id);
      if (!item || item.deleted) return null;
      item.deleted = true;
      item.deletedAt = new Date().toISOString();
      return item;
    },
    restore(id) {
      const item = items.get(id);
      if (!item || !item.deleted) return null;
      delete item.deleted;
      delete item.deletedAt;
      return item;
    },
    list() {
      return Array.from(items.values()).filter(i => !i.deleted);
    },
    listDeleted() {
      return Array.from(items.values()).filter(i => i.deleted);
    },
    get(id) {
      return items.get(id) || null;
    }
  };
}`,
  },

  // ── MongoDB ──
  {
    title: "MongoDB Aggregation – Group & Sum",
    description:
      "Given an array of order documents { category, amount, status }, write a function that simulates a MongoDB aggregation: group by 'category', sum 'amount', count orders, and only include orders where status is 'completed'. Sort by totalAmount descending.",
    functionName: "aggregateOrders",
    starterCode: `function aggregateOrders(orders) {
  // 1. Filter completed orders
  // 2. Group by category
  // 3. Sum amounts and count
  // 4. Sort by totalAmount descending
}`,
    tests: [
      {
        input: [
          [
            { category: "Electronics", amount: 500, status: "completed" },
            { category: "Books", amount: 50, status: "completed" },
            { category: "Electronics", amount: 300, status: "completed" },
            { category: "Books", amount: 30, status: "pending" },
            { category: "Clothing", amount: 200, status: "completed" },
          ],
        ],
        expected: [
          { _id: "Electronics", totalAmount: 800, count: 2 },
          { _id: "Clothing", totalAmount: 200, count: 1 },
          { _id: "Books", totalAmount: 50, count: 1 },
        ],
      },
    ],
    difficulty: "Medium",
    topic: "MongoDB",
    answer: `function aggregateOrders(orders) {
  const completed = orders.filter(o => o.status === 'completed');
  
  const grouped = {};
  for (const order of completed) {
    if (!grouped[order.category]) {
      grouped[order.category] = { _id: order.category, totalAmount: 0, count: 0 };
    }
    grouped[order.category].totalAmount += order.amount;
    grouped[order.category].count += 1;
  }
  
  return Object.values(grouped).sort((a, b) => b.totalAmount - a.totalAmount);
}`,
  },
  {
    title: "MongoDB $lookup Simulation (Join)",
    description:
      "Simulate MongoDB's $lookup. Given 'orders' array and 'customers' array, join them on orders.customerId === customers._id. Each order should get a 'customer' field with the matched customer object (or null).",
    functionName: "lookupJoin",
    starterCode: `function lookupJoin(orders, customers) {
  // Join customers into orders on customerId === _id
}`,
    tests: [
      {
        input: [
          [
            { _id: 101, customerId: 1, total: 250 },
            { _id: 102, customerId: 2, total: 100 },
            { _id: 103, customerId: 99, total: 50 },
          ],
          [
            { _id: 1, name: "Alice" },
            { _id: 2, name: "Bob" },
          ],
        ],
        expected: [
          { _id: 101, customerId: 1, total: 250, customer: { _id: 1, name: "Alice" } },
          { _id: 102, customerId: 2, total: 100, customer: { _id: 2, name: "Bob" } },
          { _id: 103, customerId: 99, total: 50, customer: null },
        ],
      },
    ],
    difficulty: "Medium",
    topic: "MongoDB",
    answer: `function lookupJoin(orders, customers) {
  const customerMap = new Map(customers.map(c => [c._id, c]));
  
  return orders.map(order => ({
    ...order,
    customer: customerMap.get(order.customerId) || null
  }));
}`,
  },
  {
    title: "MongoDB $unwind Simulation",
    description:
      "Simulate MongoDB's $unwind. Given an array of documents where a specified field contains an array, flatten it so each element becomes its own document. E.g. { name: 'A', tags: [1,2] } → [{ name: 'A', tags: 1 }, { name: 'A', tags: 2 }].",
    functionName: "unwind",
    starterCode: `function unwind(documents, field) {
  // Flatten the array field into individual documents
}`,
    tests: [
      {
        input: [
          [
            { name: "Product A", tags: ["electronics", "sale"] },
            { name: "Product B", tags: ["books"] },
            { name: "Product C", tags: [] },
          ],
          "tags",
        ],
        expected: [
          { name: "Product A", tags: "electronics" },
          { name: "Product A", tags: "sale" },
          { name: "Product B", tags: "books" },
        ],
      },
    ],
    difficulty: "Medium",
    topic: "MongoDB",
    answer: `function unwind(documents, field) {
  const result = [];
  for (const doc of documents) {
    const arr = doc[field];
    if (Array.isArray(arr) && arr.length > 0) {
      for (const val of arr) {
        result.push({ ...doc, [field]: val });
      }
    }
  }
  return result;
}`,
  },
  {
    title: "MongoDB Aggregation Pipeline Runner",
    description:
      "Implement a simplified aggregation pipeline. Support three stages: $match (filter), $group (group by _id field, with $sum and $count accumulators), and $sort (sort by field, 1=asc, -1=desc). Process stages sequentially.",
    functionName: "runPipeline",
    starterCode: `function runPipeline(collection, pipeline) {
  // Execute each stage in order: $match, $group, $sort
}`,
    tests: [
      {
        input: [
          [
            { dept: "Engineering", salary: 80000, active: true },
            { dept: "Engineering", salary: 90000, active: true },
            { dept: "Marketing", salary: 60000, active: true },
            { dept: "Marketing", salary: 55000, active: false },
          ],
          [
            { $match: { active: true } },
            { $group: { _id: "$dept", totalSalary: { $sum: "$salary" }, count: { $count: true } } },
            { $sort: { totalSalary: -1 } },
          ],
        ],
        expected: [
          { _id: "Engineering", totalSalary: 170000, count: 2 },
          { _id: "Marketing", totalSalary: 60000, count: 1 },
        ],
      },
    ],
    difficulty: "Hard",
    topic: "MongoDB",
    answer: `function runPipeline(collection, pipeline) {
  let data = [...collection];

  for (const stage of pipeline) {
    if (stage.$match) {
      data = data.filter(doc => {
        return Object.entries(stage.$match).every(([key, val]) => doc[key] === val);
      });
    } else if (stage.$group) {
      const groups = {};
      const idField = stage.$group._id.replace('$', '');
      
      for (const doc of data) {
        const key = doc[idField];
        if (!groups[key]) groups[key] = { _id: key };
        
        for (const [accName, accOp] of Object.entries(stage.$group)) {
          if (accName === '_id') continue;
          if (accOp.$sum) {
            const field = accOp.$sum.replace('$', '');
            groups[key][accName] = (groups[key][accName] || 0) + doc[field];
          }
          if (accOp.$count) {
            groups[key][accName] = (groups[key][accName] || 0) + 1;
          }
        }
      }
      data = Object.values(groups);
    } else if (stage.$sort) {
      const [field, order] = Object.entries(stage.$sort)[0];
      data.sort((a, b) => (a[field] - b[field]) * order);
    }
  }

  return data;
}`,
  },

  // ── Models / Sequelize ──
  {
    title: "Define a Sequelize-Style Model Schema",
    description:
      "Create a function that returns a model definition object for a 'User' model. Include fields: id (integer, primaryKey, autoIncrement), username (string, unique, not null), email (string, unique, not null, validate email format), role (enum: 'admin'|'user'|'moderator', default 'user'), and timestamps.",
    functionName: "defineUserModel",
    starterCode: `function defineUserModel() {
  // Return model definition object
}`,
    tests: [
      {
        input: [],
        expected: "object",
      },
    ],
    difficulty: "Easy",
    topic: "Models & Sequelize",
    answer: `function defineUserModel() {
  return {
    modelName: 'User',
    tableName: 'users',
    fields: {
      id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
      username: { type: 'STRING', unique: true, allowNull: false },
      email: { type: 'STRING', unique: true, allowNull: false, validate: { isEmail: true } },
      role: { type: 'ENUM', values: ['admin', 'user', 'moderator'], defaultValue: 'user' }
    },
    timestamps: true
  };
}`,
  },
  {
    title: "Model Validator",
    description:
      "Write a function that validates data against a schema. Schema defines fields with { type, required, minLength, maxLength, min, max, pattern, enum }. Return { valid: boolean, errors: string[] }.",
    functionName: "validateModel",
    starterCode: `function validateModel(schema, data) {
  // Validate data against schema, return { valid, errors }
}`,
    tests: [
      {
        input: [
          {
            name: { type: "string", required: true, minLength: 2 },
            age: { type: "number", required: true, min: 18 },
            role: { type: "string", enum: ["admin", "user"] },
          },
          { name: "A", age: 15, role: "superadmin" },
        ],
        expected: {
          valid: false,
          errors: [
            "name must be at least 2 characters",
            "age must be at least 18",
            "role must be one of: admin, user",
          ],
        },
      },
      {
        input: [
          { name: { type: "string", required: true } },
          { name: "Alice" },
        ],
        expected: { valid: true, errors: [] },
      },
    ],
    difficulty: "Medium",
    topic: "Models & Sequelize",
    answer: `function validateModel(schema, data) {
  const errors = [];

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];

    if (rules.required && (value === undefined || value === null || value === '')) {
      errors.push(field + ' is required');
      continue;
    }

    if (value === undefined || value === null) continue;

    if (rules.type === 'string' && typeof value !== 'string') {
      errors.push(field + ' must be a string');
    }
    if (rules.type === 'number' && typeof value !== 'number') {
      errors.push(field + ' must be a number');
    }

    if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
      errors.push(field + ' must be at least ' + rules.minLength + ' characters');
    }
    if (rules.maxLength && typeof value === 'string' && value.length > rules.maxLength) {
      errors.push(field + ' must be at most ' + rules.maxLength + ' characters');
    }

    if (rules.min !== undefined && typeof value === 'number' && value < rules.min) {
      errors.push(field + ' must be at least ' + rules.min);
    }
    if (rules.max !== undefined && typeof value === 'number' && value > rules.max) {
      errors.push(field + ' must be at most ' + rules.max);
    }

    if (rules.enum && !rules.enum.includes(value)) {
      errors.push(field + ' must be one of: ' + rules.enum.join(', '));
    }
  }

  return { valid: errors.length === 0, errors };
}`,
  },
  {
    title: "Model Associations Builder",
    description:
      "Implement a function that defines relationships between models. Given an array of association definitions { type: 'hasMany'|'belongsTo'|'hasOne'|'belongsToMany', source, target, foreignKey, through? }, return a structured map of each model's relationships.",
    functionName: "buildAssociations",
    starterCode: `function buildAssociations(associations) {
  // Return a map: { ModelName: [{ type, relatedModel, foreignKey, through? }] }
}`,
    tests: [
      {
        input: [
          [
            { type: "hasMany", source: "User", target: "Post", foreignKey: "userId" },
            { type: "belongsTo", source: "Post", target: "User", foreignKey: "userId" },
            { type: "belongsToMany", source: "Post", target: "Tag", foreignKey: "postId", through: "PostTags" },
          ],
        ],
        expected: {
          User: [{ type: "hasMany", relatedModel: "Post", foreignKey: "userId" }],
          Post: [
            { type: "belongsTo", relatedModel: "User", foreignKey: "userId" },
            { type: "belongsToMany", relatedModel: "Tag", foreignKey: "postId", through: "PostTags" },
          ],
        },
      },
    ],
    difficulty: "Medium",
    topic: "Models & Sequelize",
    answer: `function buildAssociations(associations) {
  const map = {};

  for (const assoc of associations) {
    if (!map[assoc.source]) map[assoc.source] = [];
    
    const rel = {
      type: assoc.type,
      relatedModel: assoc.target,
      foreignKey: assoc.foreignKey
    };
    
    if (assoc.through) rel.through = assoc.through;
    
    map[assoc.source].push(rel);
  }

  return map;
}`,
  },
  {
    title: "Query Builder (Sequelize-style)",
    description:
      "Implement a chainable query builder that supports .select(fields), .where(conditions), .orderBy(field, direction), .limit(n), .offset(n). The .build() method returns the final query object.",
    functionName: "createQueryBuilder",
    starterCode: `function createQueryBuilder(tableName) {
  // Return chainable builder with .select(), .where(), .orderBy(), .limit(), .offset(), .build()
}`,
    tests: [
      {
        input: ["users"],
        expected: "function",
      },
    ],
    difficulty: "Hard",
    topic: "Models & Sequelize",
    answer: `function createQueryBuilder(tableName) {
  const query = {
    table: tableName,
    fields: ['*'],
    conditions: {},
    order: null,
    limitVal: null,
    offsetVal: null
  };

  const builder = {
    select(...fields) {
      query.fields = fields;
      return builder;
    },
    where(conditions) {
      Object.assign(query.conditions, conditions);
      return builder;
    },
    orderBy(field, direction = 'ASC') {
      query.order = { field, direction: direction.toUpperCase() };
      return builder;
    },
    limit(n) {
      query.limitVal = n;
      return builder;
    },
    offset(n) {
      query.offsetVal = n;
      return builder;
    },
    build() {
      const result = {
        table: query.table,
        select: query.fields,
        where: query.conditions
      };
      if (query.order) result.orderBy = query.order;
      if (query.limitVal !== null) result.limit = query.limitVal;
      if (query.offsetVal !== null) result.offset = query.offsetVal;
      return result;
    }
  };

  return builder;
}`,
  },

  // ── MongoDB Advanced ──
  {
    title: "MongoDB Index Suggestion Engine",
    description:
      "Given an array of query patterns { fields: string[], frequency: number }, suggest optimal indexes. If multiple queries share a prefix, suggest a compound index. Return sorted by frequency descending.",
    functionName: "suggestIndexes",
    starterCode: `function suggestIndexes(queryPatterns) {
  // Analyze patterns and return suggested indexes
}`,
    tests: [
      {
        input: [
          [
            { fields: ["email"], frequency: 100 },
            { fields: ["status", "createdAt"], frequency: 80 },
            { fields: ["status"], frequency: 50 },
          ],
        ],
        expected: [
          { fields: ["email"], frequency: 100, type: "single" },
          { fields: ["status", "createdAt"], frequency: 80, type: "compound" },
        ],
      },
    ],
    difficulty: "Hard",
    topic: "MongoDB",
    answer: `function suggestIndexes(queryPatterns) {
  const sorted = [...queryPatterns].sort((a, b) => b.frequency - a.frequency);
  const indexes = [];
  const covered = new Set();

  for (const pattern of sorted) {
    const key = pattern.fields.join(',');
    
    // Check if already covered by an existing compound index
    const isCovered = indexes.some(idx => {
      const idxFields = idx.fields;
      return pattern.fields.length <= idxFields.length &&
        pattern.fields.every((f, i) => idxFields[i] === f);
    });

    if (!isCovered && !covered.has(key)) {
      indexes.push({
        fields: pattern.fields,
        frequency: pattern.frequency,
        type: pattern.fields.length > 1 ? 'compound' : 'single'
      });
      // Mark subsets as covered
      for (let i = 1; i <= pattern.fields.length; i++) {
        covered.add(pattern.fields.slice(0, i).join(','));
      }
    }
  }

  return indexes;
}`,
  },
  {
    title: "MongoDB Document Versioning",
    description:
      "Implement a versioned document store. On update, keep the previous version in a 'history' array. Each version records { version, data, updatedAt }. Support get(id), update(id, changes), and getHistory(id).",
    functionName: "createVersionedStore",
    starterCode: `function createVersionedStore(initialDocs) {
  // Return { get, update, getHistory }
}`,
    tests: [
      {
        input: [[{ _id: 1, name: "Doc A", status: "draft" }]],
        expected: "function",
      },
    ],
    difficulty: "Hard",
    topic: "MongoDB",
    answer: `function createVersionedStore(initialDocs) {
  const docs = new Map();
  const histories = new Map();

  for (const doc of initialDocs) {
    docs.set(doc._id, { ...doc, __v: 1 });
    histories.set(doc._id, []);
  }

  return {
    get(id) {
      return docs.get(id) || null;
    },
    update(id, changes) {
      const current = docs.get(id);
      if (!current) return null;
      
      const history = histories.get(id);
      history.push({
        version: current.__v,
        data: { ...current },
        updatedAt: new Date().toISOString()
      });
      
      const updated = { ...current, ...changes, __v: current.__v + 1 };
      docs.set(id, updated);
      return updated;
    },
    getHistory(id) {
      return histories.get(id) || [];
    }
  };
}`,
  },
];
