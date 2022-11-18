import { assert } from 'chai';
import { Client } from 'sitecore-cdp-tenant-sdk';

describe('Basic Test', function () {
let client: Client;
  before(function (
    client = new Client({
      clientId: 'https://cdp.dev.local',
      clientSecret: 'default
      region: 
  ) {});

  it('should return -1 when the value is not present', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
