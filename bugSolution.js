```javascript
//Improved aggregation pipeline to handle null and non-numeric values
db.users.aggregate([
  {
    $match: {
      age: { $exists: true, $type: "number" }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
]);
```