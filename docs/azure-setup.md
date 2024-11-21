# Setting Up Resource Group and Web App
Declare Variables (change as needed)
```bash 
webApp="swd-lab-2-webapp"
resourceGroup="swd-lab-2-rg"
appPlan="swd-lab"
runtimeEnv="node|20-lts"
```

Create Resource group
```bash 
az group create --name $resourceGroup
```

Create App Service Plan
```bash 
az appservice plan create \
  --name $appPlan \
  --resource-group $resourceGroup \
  --sku B1 \
  --is-linux
```

Create Web App
```bash 
az webapp create \
  --name $webApp \
  --resource-group $resourceGroup \
  --plan $appPlan \
  --runtime $runtimeEnv
```

Check Web App Status
```bash 
az webapp list \
  --resource-group $resourceGroup \
  --query "[].{hostName: defaultHostName, state: state}" \
  --output table
```