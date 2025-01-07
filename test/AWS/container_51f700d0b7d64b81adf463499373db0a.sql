{
    "tasks": [
        {
            "attachments": [
                {
                    "id": "6e78c6f4-3ad0-45e3-921d-ed6770502dbb",
                    "type": "ElasticNetworkInterface",
                    "status": "ATTACHED",
                    "details": [
                        {
                            "name": "subnetId",
                            "value": "subnet-07ed9813fb2c11702"
                        },
                        {
                            "name": "networkInterfaceId",
                            "value": "eni-05b3389022c5d058a"
                        },
                        {
                            "name": "macAddress",
                            "value": "0e:f4:4c:82:78:11"
                        },
                        {
                            "name": "privateDnsName",
                            "value": "ip-172-28-8-239.ap-northeast-1.compute.internal"
                        },
                        {
                            "name": "privateIPv4Address",
                            "value": "172.28.8.239"
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
            "connectivityAt": "2024-12-24T05:02:43.621000+00:00",
            "containers": [
                {
                    "containerArn": "arn:aws:ecs:ap-northeast-1:507721973395:container/BatchCluster/51f700d0b7d64b81adf463499373db0a/89ebc217-b4fd-4d1f-9d0b-0741bca21238",
                    "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/51f700d0b7d64b81adf463499373db0a",
                    "name": "ExportTask",
                    "image": "507721973395.dkr.ecr.ap-northeast-1.amazonaws.com/batch:113",
                    "imageDigest": "sha256:eeec6e1049ddf06e9ebe2af233a3f7398fcc1d9154b57c6e9396f26b542016f3",
                    "runtimeId": "51f700d0b7d64b81adf463499373db0a-1925289170",
                    "lastStatus": "RUNNING",
                    "networkBindings": [],
                    "networkInterfaces": [
                        {
                            "attachmentId": "6e78c6f4-3ad0-45e3-921d-ed6770502dbb",
                            "privateIpv4Address": "172.28.8.239"
                        }
                    ],
                    "healthStatus": "UNKNOWN",
                    "managedAgents": [
                        {
                            "lastStartedAt": "2024-12-24T05:04:02.607000+00:00",
                            "name": "ExecuteCommandAgent",
                            "lastStatus": "RUNNING"
                        }
                    ],
                    "cpu": "0",
                    "memoryReservation": "128"
                }
            ],
            "cpu": "4096",
            "createdAt": "2024-12-24T05:02:37.988000+00:00",
            "desiredStatus": "RUNNING",
            "enableExecuteCommand": true,
            "group": "service:ExportService",
            "healthStatus": "UNKNOWN",
            "lastStatus": "RUNNING",
            "launchType": "FARGATE",
            "memory": "16384",
            "overrides": {
                "containerOverrides": [
                    {
                        "name": "ExportTask"
                    }
                ],
                "inferenceAcceleratorOverrides": []
            },
            "platformVersion": "1.4.0",
            "platformFamily": "Linux",
            "pullStartedAt": "2024-12-24T05:02:52.177000+00:00",
            "pullStoppedAt": "2024-12-24T05:03:32.130000+00:00",
            "startedAt": "2024-12-24T05:04:09.766000+00:00",
            "startedBy": "ecs-svc/1135295236820658484",
            "tags": [],
            "taskArn": "arn:aws:ecs:ap-northeast-1:507721973395:task/BatchCluster/51f700d0b7d64b81adf463499373db0a",
            "taskDefinitionArn": "arn:aws:ecs:ap-northeast-1:507721973395:task-definition/ExportTask:141",
            "version": 4,
            "ephemeralStorage": {
                "sizeInGiB": 20
            }
        }
    ],
    "failures": []
}