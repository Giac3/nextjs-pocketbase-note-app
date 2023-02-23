migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hed71bj0r41gwap")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4jdngllf",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hed71bj0r41gwap")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
