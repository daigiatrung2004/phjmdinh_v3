{
    "tasks": [
        {
            "attachments": [
                {
                    "id": "ffaf1f8b-d9ec-4da2-9856-cf7386f9aaae",
                    "type": "ElasticNetworkInterface",
                    "status": "ATTACHED",
                    "details": [
                        {
                            "name": "subnetId",
                            "value": "subnet-07ed9813fb2c11702"
                        },
                        {
                            "name": "networkInterfaceId",
                            "value": "eni-07a5188e916c61efc"
                        },
                        {
                            "name": "macAddress",
                            "value": "0e:77:5e:a3:7c:f5"
                        },
                        {
                            "name": "privateDnsName",
                            "value": "ip-172-28-8-237.ap-northeast-1.compute.internal"
                        },
                        {
                            "name": "privateIPv4Address",
                            "value": "172.28.8.237"
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
            "connectivityAt": "2024-12-24T05:02:41.842000+00:00",
            "containers": [
                {
                    "containerArn": "arn:aws:ecs:ap-northeast-1:507721973395:container/BatchCluster/7971df704eae4b509e6d479e28559a7d/849731a7-ebd6-47a3-8fb4-be52459caad6",
                    "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/7971df704eae4b509e6d479e28559a7d",
                    "name": "OnlineATask",
                    "image": "507721973395.dkr.ecr.ap-northeast-1.amazonaws.com/batch:113",
                    "imageDigest": "sha256:eeec6e1049ddf06e9ebe2af233a3f7398fcc1d9154b57c6e9396f26b542016f3",
                    "runtimeId": "7971df704eae4b509e6d479e28559a7d-2522123712",
                    "lastStatus": "RUNNING",
                    "networkBindings": [],
                    "networkInterfaces": [
                        {
                            "attachmentId": "ffaf1f8b-d9ec-4da2-9856-cf7386f9aaae",
                            "privateIpv4Address": "172.28.8.237"
                        }
                    ],
                    "healthStatus": "UNKNOWN",
                    "managedAgents": [
                        {
                            "lastStartedAt": "2024-12-24T05:04:06+00:00",
                            "name": "ExecuteCommandAgent",
                            "lastStatus": "RUNNING"
                        }
                    ],
                    "cpu": "0",
                    "memoryReservation": "128"
                }
            ],
            "cpu": "2048",
            "createdAt": "2024-12-24T05:02:36.093000+00:00",
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
            "pullStartedAt": "2024-12-24T05:02:51.787000+00:00",
            "pullStoppedAt": "2024-12-24T05:03:47.019000+00:00",
            "startedAt": "2024-12-24T05:04:18.113000+00:00",
            "startedBy": "ecs-svc/3674248881058123023",
            "tags": [],
            "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/7971df704eae4b509e6d479e28559a7d",
            "taskDefinitionArn": "arn:aws:ecs:ap-northeast-1:507721973395:task-definition/OnlineATask:135",
            "version": 4,
            "ephemeralStorage": {
                "sizeInGiB": 20
            }
        }
    ],
    "failures": []
}
