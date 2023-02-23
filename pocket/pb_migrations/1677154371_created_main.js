migrate((db) => {
  const collection = new Collection({
    "id": "hed71bj0r41gwap",
    "created": "2023-02-23 12:12:51.042Z",
    "updated": "2023-02-23 12:12:51.042Z",
    "name": "main",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rr5hzc8q",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4jdngllf",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hed71bj0r41gwap");

  return dao.deleteCollection(collection);
})
