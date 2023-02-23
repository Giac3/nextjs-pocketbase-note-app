migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hed71bj0r41gwap")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hed71bj0r41gwap")

  collection.name = "main"

  return dao.saveCollection(collection)
})
