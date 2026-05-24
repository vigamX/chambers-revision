targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the environment that will be used to generate a short unique hash and resource names.')
param environmentName string

@minLength(1)
@description('Primary location for all resources. Must be a region that supports Azure Static Web Apps.')
@allowed([
  'westeurope'
  'westus2'
  'centralus'
  'eastus2'
  'eastasia'
])
param location string

var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))
var tags = {
  'azd-env-name': environmentName
}

resource resourceGroup 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-${environmentName}'
  location: location
  tags: tags
}

module web 'modules/swa.bicep' = {
  name: 'web'
  scope: resourceGroup
  params: {
    name: 'swa-${resourceToken}'
    location: location
    tags: union(tags, { 'azd-service-name': 'web' })
  }
}

output AZURE_LOCATION string = location
output AZURE_RESOURCE_GROUP string = resourceGroup.name
output WEB_URI string = web.outputs.uri
