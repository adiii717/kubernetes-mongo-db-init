# kubernetes-mongo-db-init
Create dynamic Mongo DB collection in Kubernetes pod


### Create db_init.js 

We can use configmap to create file

```
kubectl create configmap create-db-configmap --from-file=./create_db.js
```



### Deploy Mongo Database

```
kubectl apply -f deployment.yaml
```
### Verify db

```
kubectl get pods
k exec -it deployments/mongo -- bash
mongo admin -u root -ppassword

use demodb;
db.getCollectionNames()

```