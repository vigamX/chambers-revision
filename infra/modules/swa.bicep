@description('Name of the Static Web App.')
param name string

@description('Region. Must be one of the SWA-supported regions.')
param location string

@description('Tags applied to the resource. Must include azd-service-name.')
param tags object

resource site 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    allowConfigFileUpdates: true
    stagingEnvironmentPolicy: 'Enabled'
    provider: 'Custom'
  }
}

output uri string = 'https://${site.properties.defaultHostname}'
output name string = site.name
