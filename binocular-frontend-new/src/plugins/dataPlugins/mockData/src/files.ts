import { DataPluginFile, DataPluginFiles, PreviousFilePaths } from '../../../interfaces/dataPluginInterfaces/dataPluginFiles.ts';

export default class Files implements DataPluginFiles {
  constructor() {}

  public async getAll() {
    return new Promise<DataPluginFile[]>((resolve) => {
      const files: DataPluginFile[] = [
        {
          path: 'index.js',
          webUrl: 'https://github.com/INSO-TUWien/Binocular',
          maxLength: 5,
          _id: '0',
        },
        {
          path: 'src/app.js',
          webUrl: 'https://github.com/INSO-TUWien/Binocular',
          maxLength: 10,
          _id: '1',
        },
        {
          _id: 'files/375',
          path: '.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/.gitignore',
          maxLength: 25,
        },
        {
          _id: 'files/2549',
          path: 'central-director/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/2545',
          path: 'central-director/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/3217',
          path: 'central-director/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/2553',
          path: 'central-director/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/build-image',
          maxLength: 6,
        },
        {
          _id: 'files/2551',
          path: 'central-director/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/4429',
          path: 'central-director/http/log.http',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/http/log.http',
          maxLength: 6,
        },
        {
          _id: 'files/2559',
          path: 'central-director/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/2557',
          path: 'central-director/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/2561',
          path: 'central-director/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/2599',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/4446',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorController.java',
          maxLength: 28,
        },
        {
          _id: 'files/4444',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorRepository.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorRepository.java',
          maxLength: 6,
        },
        {
          _id: 'files/8004',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/11909',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/8008',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java',
          maxLength: 53,
        },
        {
          _id: 'files/8006',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java',
          maxLength: 40,
        },
        {
          _id: 'files/8010',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/5610',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java',
          maxLength: 45,
        },
        {
          _id: 'files/5616',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java',
          maxLength: 64,
        },
        {
          _id: 'files/8021',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java',
          maxLength: 17,
        },
        {
          _id: 'files/5612',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/LogController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/LogController.java',
          maxLength: 34,
        },
        {
          _id: 'files/4448',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java',
          maxLength: 27,
        },
        {
          _id: 'files/5618',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java',
          maxLength: 18,
        },
        {
          _id: 'files/8012',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java',
          maxLength: 28,
        },
        {
          _id: 'files/8023',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java',
          maxLength: 7,
        },
        {
          _id: 'files/14820',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/EmergencyBreakMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/EmergencyBreakMessage.java',
          maxLength: 5,
        },
        {
          _id: 'files/14818',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/LocationMessage.java',
          maxLength: 7,
        },
        {
          _id: 'files/2595',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/5614',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java',
          maxLength: 48,
        },
        {
          _id: 'files/8018',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java',
          maxLength: 21,
        },
        {
          _id: 'files/8014',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java',
          maxLength: 65,
        },
        {
          _id: 'files/14815',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java',
          maxLength: 36,
        },
        {
          _id: 'files/8016',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java',
          maxLength: 34,
        },
        {
          _id: 'files/5624',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java',
          maxLength: 13,
        },
        {
          _id: 'files/5620',
          path: 'central-director/src/main/java/at/tuwien/dse/central_director/WebClientConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/java/at/tuwien/dse/central_director/WebClientConfig.java',
          maxLength: 38,
        },
        {
          _id: 'files/2583',
          path: 'central-director/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/central-director/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/2597',
          path: 'central-director/src/test/java/at/tuwien/dse/central_director/CentralDirectorApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/test/java/at/tuwien/dse/central_director/CentralDirectorApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/6858',
          path: 'central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java',
          maxLength: 33,
        },
        {
          _id: 'files/2601',
          path: 'central-director/src/test/java/at/tuwien/dse/central_director/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/central-director/src/test/java/at/tuwien/dse/central_director/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/433',
          path: 'data-mock/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/437',
          path: 'data-mock/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/453',
          path: 'data-mock/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/429',
          path: 'data-mock/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/build-image',
          maxLength: 5,
        },
        {
          _id: 'files/1598',
          path: 'data-mock/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/431',
          path: 'data-mock/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/441',
          path: 'data-mock/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/443',
          path: 'data-mock/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/5883',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/BreakController.java',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/BreakController.java',
          maxLength: 26,
        },
        {
          _id: 'files/8315',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java',
          maxLength: 36,
        },
        {
          _id: 'files/8317',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/461',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/8313',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java',
          maxLength: 6,
        },
        {
          _id: 'files/4283',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java',
          maxLength: 63,
        },
        {
          _id: 'files/464',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/PingController.java',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/4286',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/RabbitMQConfig.java',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/RabbitMQConfig.java',
          maxLength: 26,
        },
        {
          _id: 'files/8319',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java',
          maxLength: 79,
        },
        {
          _id: 'files/4284',
          path: 'data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java',
          maxLength: 56,
        },
        {
          _id: 'files/455',
          path: 'data-mock/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/7377',
          path: 'data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java',
          maxLength: 56,
        },
        {
          _id: 'files/467',
          path: 'data-mock/src/test/java/at/tuwien/dse/data_mock/DataMockApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/test/java/at/tuwien/dse/data_mock/DataMockApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/7379',
          path: 'data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java',
          maxLength: 78,
        },
        {
          _id: 'files/1021',
          path: 'data-mock/src/test/java/at/tuwien/dse/data_mock/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/test/java/at/tuwien/dse/data_mock/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/15436',
          path: 'data-mock/src/test/java/at/tuwien/dse/data_mock/service/GpsMockServiceValueTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/data-mock/src/test/java/at/tuwien/dse/data_mock/service/GpsMockServiceValueTest.java',
          maxLength: 61,
        },
        {
          _id: 'files/2182',
          path: 'distance-monitor/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/2184',
          path: 'distance-monitor/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/3221',
          path: 'distance-monitor/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/2190',
          path: 'distance-monitor/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/build-image',
          maxLength: 6,
        },
        {
          _id: 'files/2186',
          path: 'distance-monitor/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/2188',
          path: 'distance-monitor/HELP.md',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/HELP.md',
          maxLength: 28,
        },
        {
          _id: 'files/2192',
          path: 'distance-monitor/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/2196',
          path: 'distance-monitor/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/2200',
          path: 'distance-monitor/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/7164',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitConfig.java',
          maxLength: 29,
        },
        {
          _id: 'files/12107',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java',
          maxLength: 29,
        },
        {
          _id: 'files/7166',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/6299',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java',
          maxLength: 75,
        },
        {
          _id: 'files/2230',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/6295',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java',
          maxLength: 55,
        },
        {
          _id: 'files/6291',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java',
          maxLength: 95,
        },
        {
          _id: 'files/7168',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java',
          maxLength: 28,
        },
        {
          _id: 'files/7172',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java',
          maxLength: 7,
        },
        {
          _id: 'files/14487',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/EmergencyBreakMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/EmergencyBreakMessage.java',
          maxLength: 5,
        },
        {
          _id: 'files/7174',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java',
          maxLength: 7,
        },
        {
          _id: 'files/2237',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/6293',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java',
          maxLength: 31,
        },
        {
          _id: 'files/7170',
          path: 'distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java',
          maxLength: 101,
        },
        {
          _id: 'files/2215',
          path: 'distance-monitor/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/2232',
          path: 'distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/2234',
          path: 'distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/16120',
          path: 'DSE - Architecture and Design Document.pdf',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/DSE - Architecture and Design Document.pdf',
          maxLength: 4349,
        },
        {
          _id: 'files/16121',
          path: 'DSE - Maintenance Manual.pdf',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/DSE - Maintenance Manual.pdf',
          maxLength: 7647,
        },
        {
          _id: 'files/16123',
          path: 'DSE - Project Closure Report.pdf',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/DSE - Project Closure Report.pdf',
          maxLength: 1297,
        },
        {
          _id: 'files/17479',
          path: 'DSE25Group17-Projectplan.pdf',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/DSE25Group17-Projectplan.pdf',
          maxLength: 5588,
        },
        {
          _id: 'files/2905',
          path: 'emergency-brake/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/2903',
          path: 'emergency-brake/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/3223',
          path: 'emergency-brake/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/2907',
          path: 'emergency-brake/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/build-image',
          maxLength: 6,
        },
        {
          _id: 'files/2901',
          path: 'emergency-brake/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/16484',
          path: 'emergency-brake/http/emergencybrake.http',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/http/emergencybrake.http',
          maxLength: 1,
        },
        {
          _id: 'files/2909',
          path: 'emergency-brake/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/2911',
          path: 'emergency-brake/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/2913',
          path: 'emergency-brake/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/15112',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/8786',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java',
          maxLength: 25,
        },
        {
          _id: 'files/8784',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java',
          maxLength: 39,
        },
        {
          _id: 'files/8782',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/6077',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java',
          maxLength: 25,
        },
        {
          _id: 'files/2945',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/6079',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java',
          maxLength: 26,
        },
        {
          _id: 'files/15110',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java',
          maxLength: 27,
        },
        {
          _id: 'files/15116',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/message/EmergencyBreakMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/message/EmergencyBreakMessage.java',
          maxLength: 5,
        },
        {
          _id: 'files/2940',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/8788',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java',
          maxLength: 37,
        },
        {
          _id: 'files/6081',
          path: 'emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/WebClientConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/WebClientConfig.java',
          maxLength: 26,
        },
        {
          _id: 'files/2927',
          path: 'emergency-brake/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/2943',
          path: 'emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/7060',
          path: 'emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeControllerTest.java',
          maxLength: 25,
        },
        {
          _id: 'files/2949',
          path: 'emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/2567',
          path: 'k8s/central-director.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/central-director.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/4260',
          path: 'k8s/data-mock-vehicle-1.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/data-mock-vehicle-1.yaml',
          maxLength: 36,
        },
        {
          _id: 'files/4262',
          path: 'k8s/data-mock-vehicle-2.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/data-mock-vehicle-2.yaml',
          maxLength: 36,
        },
        {
          _id: 'files/1673',
          path: 'k8s/data-mock.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/data-mock.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/14466',
          path: 'k8s/distance-monitor-vehicle-1.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/distance-monitor-vehicle-1.yaml',
          maxLength: 47,
        },
        {
          _id: 'files/14468',
          path: 'k8s/distance-monitor-vehicle-2.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/distance-monitor-vehicle-2.yaml',
          maxLength: 47,
        },
        {
          _id: 'files/2198',
          path: 'k8s/distance-monitor.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/distance-monitor.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/6064',
          path: 'k8s/emergency-brake-vehicle-1.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/emergency-brake-vehicle-1.yaml',
          maxLength: 38,
        },
        {
          _id: 'files/6062',
          path: 'k8s/emergency-brake-vehicle-2.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/emergency-brake-vehicle-2.yaml',
          maxLength: 38,
        },
        {
          _id: 'files/2915',
          path: 'k8s/emergency-brake.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/emergency-brake.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/4962',
          path: 'k8s/location-sender-vehicle-1.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/location-sender-vehicle-1.yaml',
          maxLength: 36,
        },
        {
          _id: 'files/4964',
          path: 'k8s/location-sender-vehicle-2.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/location-sender-vehicle-2.yaml',
          maxLength: 36,
        },
        {
          _id: 'files/1675',
          path: 'k8s/location-sender.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/location-sender.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/1738',
          path: 'k8s/location-tracker.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/location-tracker.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/3472',
          path: 'k8s/passenger-gateway.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/passenger-gateway.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/2047',
          path: 'k8s/rabbitmq-configmap.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/rabbitmq-configmap.yaml',
          maxLength: 50,
        },
        {
          _id: 'files/2045',
          path: 'k8s/rabbitmq.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/rabbitmq.yaml',
          maxLength: 56,
        },
        {
          _id: 'files/1189',
          path: 'k8s/visor-frontend.yaml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/k8s/visor-frontend.yaml',
          maxLength: 34,
        },
        {
          _id: 'files/744',
          path: 'location-sender/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/740',
          path: 'location-sender/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/762',
          path: 'location-sender/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/742',
          path: 'location-sender/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/build-image',
          maxLength: 5,
        },
        {
          _id: 'files/1600',
          path: 'location-sender/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/746',
          path: 'location-sender/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/748',
          path: 'location-sender/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/750',
          path: 'location-sender/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/9007',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/9009',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java',
          maxLength: 29,
        },
        {
          _id: 'files/9011',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/9013',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocation.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocation.java',
          maxLength: 5,
        },
        {
          _id: 'files/12363',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java',
          maxLength: 6,
        },
        {
          _id: 'files/8999',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/9015',
          path: 'location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java',
          maxLength: 43,
        },
        {
          _id: 'files/4981',
          path: 'location-sender/src/main/java/dev/wo/location_sender/LocationController,java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/LocationController,java',
          maxLength: 43,
        },
        {
          _id: 'files/5165',
          path: 'location-sender/src/main/java/dev/wo/location_sender/LocationController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/LocationController.java',
          maxLength: 43,
        },
        {
          _id: 'files/778',
          path: 'location-sender/src/main/java/dev/wo/location_sender/LocationSenderApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/LocationSenderApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/774',
          path: 'location-sender/src/main/java/dev/wo/location_sender/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/4982',
          path: 'location-sender/src/main/java/dev/wo/location_sender/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/RabbitMQConfig.java',
          maxLength: 26,
        },
        {
          _id: 'files/4984',
          path: 'location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java',
          maxLength: 55,
        },
        {
          _id: 'files/765',
          path: 'location-sender/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/9001',
          path: 'location-sender/src/test/java/at/tuwien/dse/location_sender/LocationControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationControllerTest.java',
          maxLength: 1,
        },
        {
          _id: 'files/9005',
          path: 'location-sender/src/test/java/at/tuwien/dse/location_sender/LocationSenderApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationSenderApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/9003',
          path: 'location-sender/src/test/java/at/tuwien/dse/location_sender/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/at/tuwien/dse/location_sender/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/7373',
          path: 'location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java',
          maxLength: 81,
        },
        {
          _id: 'files/776',
          path: 'location-sender/src/test/java/dev/wo/location_sender/LocationSenderApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/dev/wo/location_sender/LocationSenderApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/1100',
          path: 'location-sender/src/test/java/dev/wo/location_sender/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-sender/src/test/java/dev/wo/location_sender/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/1740',
          path: 'location-tracker/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/1742',
          path: 'location-tracker/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/3229',
          path: 'location-tracker/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/1748',
          path: 'location-tracker/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/build-image',
          maxLength: 6,
        },
        {
          _id: 'files/2129',
          path: 'location-tracker/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/5381',
          path: 'location-tracker/http/location.http',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/http/location.http',
          maxLength: 1,
        },
        {
          _id: 'files/1750',
          path: 'location-tracker/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/1746',
          path: 'location-tracker/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/1744',
          path: 'location-tracker/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/9363',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/12506',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java',
          maxLength: 27,
        },
        {
          _id: 'files/9373',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java',
          maxLength: 30,
        },
        {
          _id: 'files/9375',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java',
          maxLength: 22,
        },
        {
          _id: 'files/9361',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java',
          maxLength: 15,
        },
        {
          _id: 'files/3847',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java',
          maxLength: 33,
        },
        {
          _id: 'files/3841',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationDocument.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationDocument.java',
          maxLength: 48,
        },
        {
          _id: 'files/3849',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessage.java',
          maxLength: 55,
        },
        {
          _id: 'files/3845',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java',
          maxLength: 28,
        },
        {
          _id: 'files/3843',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java',
          maxLength: 6,
        },
        {
          _id: 'files/1780',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/9365',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java',
          maxLength: 28,
        },
        {
          _id: 'files/9378',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java',
          maxLength: 7,
        },
        {
          _id: 'files/1778',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/3852',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java',
          maxLength: 45,
        },
        {
          _id: 'files/9367',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java',
          maxLength: 21,
        },
        {
          _id: 'files/9369',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java',
          maxLength: 28,
        },
        {
          _id: 'files/9371',
          path: 'location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java',
          maxLength: 32,
        },
        {
          _id: 'files/1761',
          path: 'location-tracker/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/16206',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/LocationControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/LocationControllerTest.java',
          maxLength: 69,
        },
        {
          _id: 'files/16208',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/PingControllerTest.java',
          maxLength: 27,
        },
        {
          _id: 'files/1776',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/LocationTrackerApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/LocationTrackerApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/1772',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/16211',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationMessageServiceTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationMessageServiceTest.java',
          maxLength: 32,
        },
        {
          _id: 'files/16213',
          path: 'location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationServiceTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationServiceTest.java',
          maxLength: 38,
        },
        {
          _id: 'files/1187',
          path: 'Makefile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/Makefile',
          maxLength: 47,
        },
        {
          _id: 'files/14140',
          path: 'mongodb/docker-compose_rabbitmq.yml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/mongodb/docker-compose_rabbitmq.yml',
          maxLength: 25,
        },
        {
          _id: 'files/3815',
          path: 'mongodb/docker-compose.yml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/mongodb/docker-compose.yml',
          maxLength: 12,
        },
        {
          _id: 'files/11862',
          path: 'mongodb/rabbitmq-definitions.json',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/mongodb/rabbitmq-definitions.json',
          maxLength: 64,
        },
        {
          _id: 'files/3475',
          path: 'passenger-gateway/.gitattributes',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/.gitattributes',
          maxLength: 3,
        },
        {
          _id: 'files/3476',
          path: 'passenger-gateway/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/.gitignore',
          maxLength: 34,
        },
        {
          _id: 'files/3499',
          path: 'passenger-gateway/.mvn/wrapper/maven-wrapper.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/.mvn/wrapper/maven-wrapper.properties',
          maxLength: 20,
        },
        {
          _id: 'files/3478',
          path: 'passenger-gateway/build-image',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/build-image',
          maxLength: 6,
        },
        {
          _id: 'files/3482',
          path: 'passenger-gateway/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/Dockerfile',
          maxLength: 4,
        },
        {
          _id: 'files/3480',
          path: 'passenger-gateway/mvnw',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/mvnw',
          maxLength: 260,
        },
        {
          _id: 'files/3487',
          path: 'passenger-gateway/mvnw.cmd',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/mvnw.cmd',
          maxLength: 150,
        },
        {
          _id: 'files/3488',
          path: 'passenger-gateway/pom.xml',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/pom.xml',
          maxLength: 55,
        },
        {
          _id: 'files/4758',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java',
          maxLength: 24,
        },
        {
          _id: 'files/11426',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java',
          maxLength: 24,
        },
        {
          _id: 'files/11502',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java',
          maxLength: 17,
        },
        {
          _id: 'files/4777',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java',
          maxLength: 50,
        },
        {
          _id: 'files/11454',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java',
          maxLength: 36,
        },
        {
          _id: 'files/11428',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java',
          maxLength: 34,
        },
        {
          _id: 'files/15772',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java',
          maxLength: 28,
        },
        {
          _id: 'files/11452',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java',
          maxLength: 65,
        },
        {
          _id: 'files/5885',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java',
          maxLength: 28,
        },
        {
          _id: 'files/4756',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/DistanceMonitorService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/DistanceMonitorService.java',
          maxLength: 24,
        },
        {
          _id: 'files/7632',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java',
          maxLength: 28,
        },
        {
          _id: 'files/5469',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java',
          maxLength: 53,
        },
        {
          _id: 'files/5471',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationsController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationsController.java',
          maxLength: 33,
        },
        {
          _id: 'files/4754',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java',
          maxLength: 25,
        },
        {
          _id: 'files/5785',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogMessage.java',
          maxLength: 60,
        },
        {
          _id: 'files/5783',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java',
          maxLength: 30,
        },
        {
          _id: 'files/11457',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java',
          maxLength: 6,
        },
        {
          _id: 'files/11459',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LogMessage.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LogMessage.java',
          maxLength: 6,
        },
        {
          _id: 'files/3520',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java',
          maxLength: 14,
        },
        {
          _id: 'files/3523',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java',
          maxLength: 14,
        },
        {
          _id: 'files/11432',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java',
          maxLength: 43,
        },
        {
          _id: 'files/15774',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DataMockService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DataMockService.java',
          maxLength: 53,
        },
        {
          _id: 'files/11505',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DistanceMonitorService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DistanceMonitorService.java',
          maxLength: 29,
        },
        {
          _id: 'files/11450',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/LocationTrackerService.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/LocationTrackerService.java',
          maxLength: 43,
        },
        {
          _id: 'files/4173',
          path: 'passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java',
          maxLength: 17,
        },
        {
          _id: 'files/3513',
          path: 'passenger-gateway/src/main/resources/application.properties',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/main/resources/application.properties',
          maxLength: 2,
        },
        {
          _id: 'files/6941',
          path: 'passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LocationsControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LocationsControllerTest.java',
          maxLength: 24,
        },
        {
          _id: 'files/6939',
          path: 'passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LogsControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LogsControllerTest.java',
          maxLength: 24,
        },
        {
          _id: 'files/3518',
          path: 'passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplicationTests.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplicationTests.java',
          maxLength: 14,
        },
        {
          _id: 'files/3516',
          path: 'passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java',
          webUrl:
            'https://github.com/INSO-World/Binocular/blob/main/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java',
          maxLength: 23,
        },
        {
          _id: 'files/377',
          path: 'README.md',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/README.md',
          maxLength: 3,
        },
        {
          _id: 'files/7358',
          path: 'visor-frontend/.env',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/.env',
          maxLength: 2,
        },
        {
          _id: 'files/1191',
          path: 'visor-frontend/.gitignore',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/.gitignore',
          maxLength: 24,
        },
        {
          _id: 'files/1193',
          path: 'visor-frontend/Dockerfile',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/Dockerfile',
          maxLength: 18,
        },
        {
          _id: 'files/1233',
          path: 'visor-frontend/package-lock.json',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/package-lock.json',
          maxLength: 16219,
        },
        {
          _id: 'files/1229',
          path: 'visor-frontend/package.json',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/package.json',
          maxLength: 42,
        },
        {
          _id: 'files/1257',
          path: 'visor-frontend/public/favicon.ico',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/favicon.ico',
          maxLength: 26,
        },
        {
          _id: 'files/1245',
          path: 'visor-frontend/public/index.html',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/index.html',
          maxLength: 44,
        },
        {
          _id: 'files/1247',
          path: 'visor-frontend/public/logo192.png',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/logo192.png',
          maxLength: 40,
        },
        {
          _id: 'files/1249',
          path: 'visor-frontend/public/logo512.png',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/logo512.png',
          maxLength: 84,
        },
        {
          _id: 'files/1251',
          path: 'visor-frontend/public/manifest.json',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/manifest.json',
          maxLength: 26,
        },
        {
          _id: 'files/1253',
          path: 'visor-frontend/public/robots.txt',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/robots.txt',
          maxLength: 4,
        },
        {
          _id: 'files/1255',
          path: 'visor-frontend/public/vehicle-positions.json',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/public/vehicle-positions.json',
          maxLength: 15,
        },
        {
          _id: 'files/1231',
          path: 'visor-frontend/README.md',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/README.md',
          maxLength: 71,
        },
        {
          _id: 'files/1259',
          path: 'visor-frontend/src/App.css',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/App.css',
          maxLength: 39,
        },
        {
          _id: 'files/1261',
          path: 'visor-frontend/src/App.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/App.js',
          maxLength: 9,
        },
        {
          _id: 'files/1263',
          path: 'visor-frontend/src/App.test.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/App.test.js',
          maxLength: 9,
        },
        {
          _id: 'files/1265',
          path: 'visor-frontend/src/EventLog.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/EventLog.js',
          maxLength: 24,
        },
        {
          _id: 'files/1275',
          path: 'visor-frontend/src/index.css',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/index.css',
          maxLength: 19,
        },
        {
          _id: 'files/1273',
          path: 'visor-frontend/src/index.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/index.js',
          maxLength: 19,
        },
        {
          _id: 'files/1282',
          path: 'visor-frontend/src/layout/Dashboard.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/layout/Dashboard.js',
          maxLength: 19,
        },
        {
          _id: 'files/1267',
          path: 'visor-frontend/src/logo.svg',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/logo.svg',
          maxLength: 1,
        },
        {
          _id: 'files/1269',
          path: 'visor-frontend/src/MapView.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/MapView.js',
          maxLength: 143,
        },
        {
          _id: 'files/1304',
          path: 'visor-frontend/src/mock/simulateMovement.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/mock/simulateMovement.js',
          maxLength: 14,
        },
        {
          _id: 'files/1271',
          path: 'visor-frontend/src/reportWebVitals.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/reportWebVitals.js',
          maxLength: 14,
        },
        {
          _id: 'files/1277',
          path: 'visor-frontend/src/setupTests.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/setupTests.js',
          maxLength: 6,
        },
        {
          _id: 'files/1306',
          path: 'visor-frontend/src/utils/getColorForVin.js',
          webUrl: 'https://github.com/INSO-World/Binocular/blob/main/visor-frontend/src/utils/getColorForVin.js',
          maxLength: 32,
        },
      ];
      resolve(files);
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFilenamesForBranch(branchName: string): Promise<string[]> {
    return Promise.resolve(['index.js', 'src/app.js', 'src/app.css']);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPreviousFilenamesForFilesOnBranch(branchName: string): Promise<PreviousFilePaths[]> {
    return Promise.resolve([]);
  }
}
