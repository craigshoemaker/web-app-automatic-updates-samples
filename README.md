# web-app-automatic-updates-samples

Since *local.settings.json* isn't tracked by git, here's what yours should look like at the start of the module.

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<STORAGE_CONNECTION_STRING>",
    "AzureCosmosDBConnectionString": "<COSMOSDB_CONNECTION_STRING>",
    "AzureCosmosDBMasterKey": "<COSMOSDB_MASTER_KEY>",
    "AzureSignalRConnectionString": "<SIGNALR_CONNECTION_STRING>",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  },
  "HOST" : {
    "CORS": "*"
  }
}
```