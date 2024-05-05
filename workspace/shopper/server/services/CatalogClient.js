/** @module CatalogClient */

const ServiceClient = require('./ServiceClient')
/**
 * Service class for interacting with the Item catalog
 */
class CatalogClient {
  /**
   * Get all items from the database, sorted in descending order by creation time
   * @returns {Promise<Array>} - A promise that resolves to an array of Items
   */
  static async getAll() {
    try {
      const response = await  ServiceClient.callService('catalog-service',{
        method:'get',
        url:'/items'
      })
      return response
    }
    catch(error) {
      console.log(error)
      return []
    }
   
  }

  /**
   * Get a single item from the database
   * @param {string} itemId - The id of the item to retrieve
   * @returns {Promise<Object>} - A promise that resolves to an Item object
   */
  static async getOne(itemId) {
    try {
      const response = await  ServiceClient.callService('catalog-service',{
        method:'get',
        url:`/items/${itemId}`
      })
      return response
    }
    catch(error) {
      console.log(error)
      return null;
    }
  }

  /**
   * Create a new item in the database
   * @param {Object} data - The data for the new item
   * @returns {Promise<Object>} - A promise that resolves to the new Item object
   */
  static async create(data) {
    try {
      const response = await  ServiceClient.callService('catalog-service',{
        method:'post',
        url:`/items`,
        data
      })
      return response;
    }
    catch(error) {
      console.log(error)
      return null;
    }
  }

  /**
   * Update an existing item in the database
   * @param {string} itemId - The id of the item to update
   * @param {Object} data - The new data for the item
   * @returns {Promise<Object|null>} - A promise that resolves to the updated Item object, or null if no item was found
   */
  static async update(itemId, data) {
    try {
      const response = await  ServiceClient.callService('catalog-service',{
        method:'put',
        url:`/items/${itemId}`,
        data
      })
      return response;
    }
    catch(error) {
      console.log(error)
      return null;
    }
  }

  /**
   * Remove an item from the database
   * @param {string} itemId - The id of the item to remove
   * @returns {Promise<Object>} - A promise that resolves to the deletion result
   */
  static async remove(itemId) {
    try {
      const response = await  ServiceClient.callService('catalog-service',{
        method:'delete',
        url:`/items/${itemId}`
      })
      return response;
    }
    catch(error) {
      console.log(error)
      return null;
    }
  }
}

module.exports = CatalogClient;
