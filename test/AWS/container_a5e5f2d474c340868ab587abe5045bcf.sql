{
    "tasks": [
        {
            "attachments": [
                {
                    "id": "14187ccb-7643-436c-aa3e-40186ac3d6a7",
                    "type": "ElasticNetworkInterface",
                    "status": "ATTACHED",
                    "details": [
                        {
                            "name": "subnetId",
                            "value": "subnet-07ed9813fb2c11702"
                        },
                        {
                            "name": "networkInterfaceId",
                            "value": "eni-0ba0ed95e5ad11f24"
                        },
                        {
                            "name": "macAddress",
                            "value": "0e:2e:35:d2:59:4f"
                        },
                        {
                            "name": "privateDnsName",
                            "value": "ip-172-28-8-223.ap-northeast-1.compute.internal"
                        },
                        {
                            "name": "privateIPv4Address",
                            "value": "172.28.8.223"
                        }
                    ]
                }
            ],
            "attributes": [
                {
                    "name": "ecs.cpu-architecture",
                    "value": "x86_64"
              }
            ],
            "availabilityZone": "ap-northeast-1d",
            "capacityProviderName": "FARGATE",
            "clusterArn": "arn:aws:ecs:ap-northeast-1:507721973395:cluster/BatchCluster",
            "connectivity": "CONNECTED",
            "connectivityAt": "2024-12-24T05:02:07.054000+00:00",
            "containers": [
                {
                    "containerArn": "arn:aws:ecs:ap-northeast-1:507721973395:container/BatchCluster/a5e5f2d474c340868ab587abe5045bcf/ebc1fd0f-6a54-4973-94bb-1bcc4877c874",
                    "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/a5e5f2d474c340868ab587abe5045bcf",
                    "name": "OrderTask",
                    "image": "507721973395.dkr.ecr.ap-northeast-1.amazonaws.com/batch:113",
                    "imageDigest": "sha256:eeec6e1049ddf06e9ebe2af233a3f7398fcc1d9154b57c6e9396f26b542016f3",
                    "runtimeId": "a5e5f2d474c340868ab587abe5045bcf-1497048990",
                    "lastStatus": "RUNNING",
                    "networkBindings": [],
                    "networkInterfaces": [
                        {
                            "attachmentId": "14187ccb-7643-436c-aa3e-40186ac3d6a7",
                            "privateIpv4Address": "172.28.8.223"
                        }
                    ],
                    "healthStatus": "UNKNOWN",
                    "managedAgents": [
                        {
                            "lastStartedAt": "2024-12-24T05:03:43.234000+00:00",
                            "name": "ExecuteCommandAgent",
                            "lastStatus": "RUNNING"
                        }
                    ],
                    "cpu": "0",
                    "memoryReservation": "128"
                }
            ],
            "cpu": "1024",
            "createdAt": "2024-12-24T05:01:59.484000+00:00",
            "desiredStatus": "RUNNING",
            "enableExecuteCommand": true,
            "group": "service:OrderService",
            "healthStatus": "UNKNOWN",
            "lastStatus": "RUNNING",
            "launchType": "FARGATE",
            "memory": "4096",
            "overrides": {
                "containerOverrides": [
                    {
                        "name": "OrderTask"
                    }
                ],
                "inferenceAcceleratorOverrides": []
            },
            "platformVersion": "1.4.0",
            "platformFamily": "Linux",
            "pullStartedAt": "2024-12-24T05:02:15.765000+00:00",
            "pullStoppedAt": "2024-12-24T05:03:25.149000+00:00",
            "startedAt": "2024-12-24T05:03:54.528000+00:00",
            "startedBy": "ecs-svc/6758024396752823728",
            "tags": [],
            "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/a5e5f2d474c340868ab587abe5045bcf",
            "taskDefinitionArn": "arn:aws:ecs:ap-northeast-1:507721973395:task-definition/OrderTask:135",
            "version": 5,
            "ephemeralStorage": {
                "sizeInGiB": 20
            }
        }
    ],
    "failures": []
}