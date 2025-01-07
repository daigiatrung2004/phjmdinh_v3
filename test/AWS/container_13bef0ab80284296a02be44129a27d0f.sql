{
    "tasks": [
        {
            "attachments": [
                {
                    "id": "fcf6a4a6-b9ac-4e1c-b0d1-2fa2d5f49717",
                    "type": "ElasticNetworkInterface",
                    "status": "ATTACHED",
                    "details": [
                        {
                            "name": "subnetId",
                            "value": "subnet-07ed9813fb2c11702"
                        },
                        {
                            "name": "networkInterfaceId",
                            "value": "eni-031c51b97cc468ba3"
                        },
                        {
                            "name": "macAddress",
                            "value": "0e:a2:c7:ef:64:1d"
                        },
                        {
                            "name": "privateDnsName",
                            "value": "ip-172-28-8-221.ap-northeast-1.compute.internal"
                        },
                        {
                            "name": "privateIPv4Address",
                            "value": "172.28.8.221"
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
            "connectivityAt": "2024-12-24T05:02:27.781000+00:00",
            "containers": [
                {
                    "containerArn": "arn:aws:ecs:ap-northeast-1:507721973395:container/BatchCluster/13bef0ab80284296a02be44129a27d0f/31fbdca8-b77e-4b1d-a140-b0dbbd13ecb2",
                    "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/13bef0ab80284296a02be44129a27d0f",
                    "name": "OnlineHTask",
                    "image": "507721973395.dkr.ecr.ap-northeast-1.amazonaws.com/batch:113",
                    "imageDigest": "sha256:eeec6e1049ddf06e9ebe2af233a3f7398fcc1d9154b57c6e9396f26b542016f3",
                    "runtimeId": "13bef0ab80284296a02be44129a27d0f-2191182331",
                    "lastStatus": "RUNNING",
                    "networkBindings": [],
                    "networkInterfaces": [
                        {
                            "attachmentId": "fcf6a4a6-b9ac-4e1c-b0d1-2fa2d5f49717",
                            "privateIpv4Address": "172.28.8.221"
                        }
                    ],
                    "healthStatus": "UNKNOWN",
                    "managedAgents": [
                        {
                            "lastStartedAt": "2024-12-24T05:03:54.073000+00:00",
                            "name": "ExecuteCommandAgent",
                            "lastStatus": "RUNNING"
                        }
                    ],
                    "cpu": "0",
                    "memoryReservation": "128"
                }
            ],
            "cpu": "2048",
            "createdAt": "2024-12-24T05:02:23.969000+00:00",
            "desiredStatus": "RUNNING",
            "enableExecuteCommand": true,
            "group": "service:OnlineHService",
            "healthStatus": "UNKNOWN",
            "lastStatus": "RUNNING",
            "launchType": "FARGATE",
            "memory": "8192",
            "overrides": {
                "containerOverrides": [
                    {
                        "name": "OnlineHTask"
                    }
                ],
                "inferenceAcceleratorOverrides": []
            },
            "platformVersion": "1.4.0",
            "platformFamily": "Linux",
            "pullStartedAt": "2024-12-24T05:02:42.386000+00:00",
            "pullStoppedAt": "2024-12-24T05:03:25.802000+00:00",
            "startedAt": "2024-12-24T05:03:55.813000+00:00",
            "startedBy": "ecs-svc/6055477379981168632",
            "tags": [],
            "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/13bef0ab80284296a02be44129a27d0f",
            "taskDefinitionArn": "arn:aws:ecs:ap-northeast-1:507721973395:task-definition/OnlineHTask:139",
            "version": 4,
            "ephemeralStorage": {
                "sizeInGiB": 20
            }
        }
    ],
    "failures": []
}