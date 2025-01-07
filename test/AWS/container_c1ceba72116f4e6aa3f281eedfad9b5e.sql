{
    "tasks": [
        {
            "attachments": [
                {
                    "id": "6e6c03d8-ce67-4a59-9e22-c0b473305ef5",
                    "type": "ElasticNetworkInterface",
                    "status": "ATTACHED",
                    "details": [
                        {
                            "name": "subnetId",
                            "value": "subnet-0ff3c52baf2cbce60"
                        },
                        {
                            "name": "networkInterfaceId",
                            "value": "eni-04e0a443a96adba91"
                        },
                        {
                            "name": "macAddress",
                            "value": "06:ec:3e:c5:e7:df"
                        },
                        {
                            "name": "privateDnsName",
                            "value": "ip-172-28-8-153.ap-northeast-1.compute.internal"
                        },
                        {
                            "name": "privateIPv4Address",
                            "value": "172.28.8.153"
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
            "availabilityZone": "ap-northeast-1a",
            "capacityProviderName": "FARGATE",
            "clusterArn": "arn:aws:ecs:ap-northeast-1:507721973395:cluster/BatchCluster",
            "connectivity": "CONNECTED",
            "connectivityAt": "2024-12-24T05:02:10.544000+00:00",
            "containers": [
                {
                    "containerArn": "arn:aws:ecs:ap-northeast-1:507721973395:container/BatchCluster/c1ceba72116f4e6aa3f281eedfad9b5e/61637ee5-15ba-48a0-ac14-a190237e6dd0",
                    "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/c1ceba72116f4e6aa3f281eedfad9b5e",
                    "name": "OnlineATask",
                    "image": "507721973395.dkr.ecr.ap-northeast-1.amazonaws.com/batch:113",
                    "imageDigest": "sha256:eeec6e1049ddf06e9ebe2af233a3f7398fcc1d9154b57c6e9396f26b542016f3",
                    "runtimeId": "c1ceba72116f4e6aa3f281eedfad9b5e-2522123712",
                    "lastStatus": "RUNNING",
                    "networkBindings": [],
                    "networkInterfaces": [
                        {
                            "attachmentId": "6e6c03d8-ce67-4a59-9e22-c0b473305ef5",
                            "privateIpv4Address": "172.28.8.153"
                        }
                    ],
                    "healthStatus": "UNKNOWN",
                    "managedAgents": [
                        {
                            "lastStartedAt": "2024-12-24T05:03:45.363000+00:00",
                            "name": "ExecuteCommandAgent",
                            "lastStatus": "RUNNING"
                        }
                    ],
                    "cpu": "0",
                  "memoryReservation": "128"
                }
            ],
            "cpu": "2048",
            "createdAt": "2024-12-24T05:02:06.905000+00:00",
            "desiredStatus": "RUNNING",
            "enableExecuteCommand": true,
            "group": "service:OnlineAService",
            "healthStatus": "UNKNOWN",
            "lastStatus": "RUNNING",
            "launchType": "FARGATE",
            "memory": "8192",
            "overrides": {
                "containerOverrides": [
                    {
                        "name": "OnlineATask"
                    }
                ],
                "inferenceAcceleratorOverrides": []
            },
            "platformVersion": "1.4.0",
            "platformFamily": "Linux",
            "pullStartedAt": "2024-12-24T05:02:30.611000+00:00",
            "pullStoppedAt": "2024-12-24T05:03:25.741000+00:00",
            "startedAt": "2024-12-24T05:03:56.435000+00:00",
            "startedBy": "ecs-svc/3674248881058123023",
            "tags": [],
            "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/c1ceba72116f4e6aa3f281eedfad9b5e",
            "taskDefinitionArn": "arn:aws:ecs:ap-northeast-1:507721973395:task-definition/OnlineATask:135",
            "version": 5,
            "ephemeralStorage": {
                "sizeInGiB": 20
            }
        }
    ],
    "failures": []
}