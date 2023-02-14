import { assert } from 'chai';
import { Client, RegionOptions, TemplateType } from 'sitecore-personalize-tenant-sdk';

describe('Basic Test', function () {
  let client: Client;
  before(async () => {
    client = new Client({
      clientId: 'psfu6uh05hsr9c34rptlr06dn864cqrx',
      clientSecret: 'uz9h803ertuvxcb9jh2cu05t87at85nl',
      region: RegionOptions.EU,
    });

    await client.Authenticate();
  });

  it('Test Authentication', async () => {
    let value = await client.Templates.GetAllTemplates(TemplateType.Web);

    assert.isNotEmpty(value);
  });
});
