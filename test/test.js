/* global describe, it */

var io = require('../lib/index')
var chai = require('chai')
var assert = chai.assert
var path = require('path')
var _ = require('underscore')

function testDataPath (name) {
  return path.join(__dirname, 'data', name)
}

function assertBasicValid (json) {
  assert.lengthOf(json, 2)
  assert.typeOf(json[0], 'object')
  assert(_.isEqual(_.keys(json[0]), ['name', 'occupation', 'height']), 'headers match keys')
}

describe('readCsvSync()', function () {
  describe('empty', function () {
    it('should be empty', function () {
      assert.lengthOf(io.readCsvSync(testDataPath('csv/empty.csv')), 0)
    })
  })

  describe('basic', function () {
    it('should match expected json', function () {
      var json = io.readCsvSync(testDataPath('csv/basic.csv'))
      assertBasicValid(json)
    })
  })
})

describe('readDataSync()', function () {
  describe('csv', function () {
    it('should match expected json', function () {
      var json = io.readDataSync(testDataPath('csv/basic.csv'))
      assertBasicValid(json)
    })
  })

  describe('json', function () {
    it('should match expected json', function () {
      var json = io.readDataSync(testDataPath('json/basic.json'))
      assertBasicValid(json)
    })
  })

  describe('psv', function () {
    it('should match expected json', function () {
      var json = io.readDataSync(testDataPath('psv/basic.psv'))
      assertBasicValid(json)
    })
  })

  describe('tsv', function () {
    it('should match expected json', function () {
      var json = io.readDataSync(testDataPath('tsv/basic.tsv'))
      assertBasicValid(json)
    })
  })
})

describe('readJsonSync()', function () {
  describe('empty', function () {
    it('should be empty', function () {
      assert.lengthOf(io.readJsonSync(testDataPath('json/empty.json')), 0)
    })
  })

  describe('basic', function () {
    it('should match expected json', function () {
      var json = io.readJsonSync(testDataPath('json/basic.json'))
      assertBasicValid(json)
    })
  })
})

describe('readPsvSync()', function () {
  describe('empty', function () {
    it('should be empty', function () {
      assert.lengthOf(io.readPsvSync(testDataPath('psv/empty.psv')), 0)
    })
  })

  describe('basic', function () {
    it('should match expected json', function () {
      var json = io.readPsvSync(testDataPath('psv/basic.psv'))
      assertBasicValid(json)
    })
  })
})

describe('readTsvSync()', function () {
  describe('empty', function () {
    it('should be empty', function () {
      assert.lengthOf(io.readTsvSync(testDataPath('tsv/empty.tsv')), 0)
    })
  })

  describe('basic', function () {
    it('should match expected json', function () {
      var json = io.readTsvSync(testDataPath('tsv/basic.tsv'))
      assertBasicValid(json)
    })
  })
})
