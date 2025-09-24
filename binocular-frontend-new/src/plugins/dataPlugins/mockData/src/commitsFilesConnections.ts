import {
  DataPluginCommitsFilesConnection,
  DataPluginCommitsFilesConnections,
} from '../../../interfaces/dataPluginInterfaces/dataPluginCommitsFilesConnections.ts';

export default class CommitsFilesConnections implements DataPluginCommitsFilesConnections {
  constructor() {}

  public async getAll(from: string, to: string) {
    console.log(`Getting Commits-Files-Connections from ${from} to ${to}`);
    return new Promise<DataPluginCommitsFilesConnection[]>((resolve) => {
      const commitsFilesConnections: DataPluginCommitsFilesConnection[] = [
        {
          _id: 'commits-files/385',
          _from: 'commits/363',
          _to: 'files/375',
          lineCount: 25,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/69f04264ccdbeb17cbbe991677457ba7cbd9393c/.gitignore#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/387',
          _from: 'commits/363',
          _to: 'files/377',
          lineCount: 3,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/69f04264ccdbeb17cbbe991677457ba7cbd9393c/README.md#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/494',
          _from: 'commits/405',
          _to: 'files/433',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/496',
          _from: 'commits/405',
          _to: 'files/453',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/498',
          _from: 'commits/405',
          _to: 'files/437',
          lineCount: 34,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/500',
          _from: 'commits/405',
          _to: 'files/429',
          lineCount: 5,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/build-image#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/502',
          _from: 'commits/405',
          _to: 'files/431',
          lineCount: 260,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/504',
          _from: 'commits/405',
          _to: 'files/441',
          lineCount: 150,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/506',
          _from: 'commits/405',
          _to: 'files/443',
          lineCount: 55,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/508',
          _from: 'commits/405',
          _to: 'files/461',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/510',
          _from: 'commits/405',
          _to: 'files/464',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/src/main/java/at/tuwien/dse/data_mock/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/512',
          _from: 'commits/405',
          _to: 'files/455',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/514',
          _from: 'commits/405',
          _to: 'files/467',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b5c3d02bc4da69b053e482296655cbec84d0b8b/data-mock/src/test/java/at/tuwien/dse/data_mock/DataMockApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/805',
          _from: 'commits/718',
          _to: 'files/744',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/807',
          _from: 'commits/718',
          _to: 'files/762',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/809',
          _from: 'commits/718',
          _to: 'files/740',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/811',
          _from: 'commits/718',
          _to: 'files/742',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/build-image#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/813',
          _from: 'commits/718',
          _to: 'files/748',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/815',
          _from: 'commits/718',
          _to: 'files/746',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/817',
          _from: 'commits/718',
          _to: 'files/750',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/819',
          _from: 'commits/718',
          _to: 'files/778',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/src/main/java/dev/wo/location_sender/LocationSenderApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/821',
          _from: 'commits/718',
          _to: 'files/774',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/src/main/java/dev/wo/location_sender/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/823',
          _from: 'commits/718',
          _to: 'files/765',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/825',
          _from: 'commits/718',
          _to: 'files/776',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ecb8a9c274f35c452d72d39ddf881aba0a07162d/location-sender/src/test/java/dev/wo/location_sender/LocationSenderApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1026',
          _from: 'commits/1009',
          _to: 'files/1021',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fee1eae7b38077ead8122b98bae7d3697c64c028/data-mock/src/test/java/at/tuwien/dse/data_mock/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1105',
          _from: 'commits/1088',
          _to: 'files/1100',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7a1c8692da8925656b2ea05591e536baee0474c1/location-sender/src/test/java/dev/wo/location_sender/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1392',
          _from: 'commits/1161',
          _to: 'files/377',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/README.md#L169-171',
              newLines: 169,
              newStart: 1,
              oldLines: 2,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 169,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1394',
          _from: 'commits/1161',
          _to: 'files/375',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/.gitignore#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/.gitignore#L0-11',
              newLines: 0,
              newStart: 2,
              oldLines: 11,
              oldStart: 3,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/.gitignore#L18-21',
              newLines: 18,
              newStart: 7,
              oldLines: 3,
              oldStart: 18,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/.gitignore#L13-14',
              newLines: 13,
              newStart: 26,
              oldLines: 1,
              oldStart: 22,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/.gitignore#L20-20',
              newLines: 20,
              newStart: 41,
              oldLines: 0,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 52,
            deletions: 16,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1396',
          _from: 'commits/1161',
          _to: 'files/1187',
          lineCount: 47,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/Makefile#L47-47',
              newLines: 47,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 47,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1398',
          _from: 'commits/1161',
          _to: 'files/1189',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/k8s/visor-frontend.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1400',
          _from: 'commits/1161',
          _to: 'files/1193',
          lineCount: 18,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/Dockerfile#L18-18',
              newLines: 18,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 18,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1402',
          _from: 'commits/1161',
          _to: 'files/1191',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/.gitignore#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1404',
          _from: 'commits/1161',
          _to: 'files/1231',
          lineCount: 71,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/README.md#L71-71',
              newLines: 71,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 71,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1406',
          _from: 'commits/1161',
          _to: 'files/1233',
          lineCount: 16219,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/package-lock.json#L16219-16219',
              newLines: 16219,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 16219,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1408',
          _from: 'commits/1161',
          _to: 'files/1229',
          lineCount: 42,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/package.json#L42-42',
              newLines: 42,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 42,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1410',
          _from: 'commits/1161',
          _to: 'files/1257',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/favicon.ico#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1412',
          _from: 'commits/1161',
          _to: 'files/1245',
          lineCount: 44,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/index.html#L44-44',
              newLines: 44,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 44,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1414',
          _from: 'commits/1161',
          _to: 'files/1247',
          lineCount: 40,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/logo192.png#L40-40',
              newLines: 40,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 40,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1416',
          _from: 'commits/1161',
          _to: 'files/1249',
          lineCount: 84,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/logo512.png#L84-84',
              newLines: 84,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 84,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1418',
          _from: 'commits/1161',
          _to: 'files/1251',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/manifest.json#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1420',
          _from: 'commits/1161',
          _to: 'files/1253',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/robots.txt#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1422',
          _from: 'commits/1161',
          _to: 'files/1259',
          lineCount: 39,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/App.css#L39-39',
              newLines: 39,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 39,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1424',
          _from: 'commits/1161',
          _to: 'files/1255',
          lineCount: 15,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/public/vehicle-positions.json#L15-15',
              newLines: 15,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 15,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1426',
          _from: 'commits/1161',
          _to: 'files/1261',
          lineCount: 9,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/App.js#L9-9',
              newLines: 9,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1428',
          _from: 'commits/1161',
          _to: 'files/1263',
          lineCount: 9,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/App.test.js#L9-9',
              newLines: 9,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1430',
          _from: 'commits/1161',
          _to: 'files/1265',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/EventLog.js#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1432',
          _from: 'commits/1161',
          _to: 'files/1269',
          lineCount: 143,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/MapView.js#L143-143',
              newLines: 143,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 143,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1434',
          _from: 'commits/1161',
          _to: 'files/1275',
          lineCount: 19,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/index.css#L19-19',
              newLines: 19,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1436',
          _from: 'commits/1161',
          _to: 'files/1273',
          lineCount: 19,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/index.js#L19-19',
              newLines: 19,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1438',
          _from: 'commits/1161',
          _to: 'files/1282',
          lineCount: 19,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/layout/Dashboard.js#L19-19',
              newLines: 19,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1440',
          _from: 'commits/1161',
          _to: 'files/1267',
          lineCount: 1,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/logo.svg#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1442',
          _from: 'commits/1161',
          _to: 'files/1304',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/mock/simulateMovement.js#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1444',
          _from: 'commits/1161',
          _to: 'files/1271',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/reportWebVitals.js#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1446',
          _from: 'commits/1161',
          _to: 'files/1277',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/setupTests.js#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1448',
          _from: 'commits/1161',
          _to: 'files/1306',
          lineCount: 32,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/266ef0e225d48a7245baf7d6b93a59064019dd34/visor-frontend/src/utils/getColorForVin.js#L32-32',
              newLines: 32,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 32,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1623',
          _from: 'commits/1584',
          _to: 'files/429',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/data-mock/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1625',
          _from: 'commits/1584',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/Makefile#L4-4',
              newLines: 4,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/Makefile#L4-5',
              newLines: 4,
              newStart: 19,
              oldLines: 1,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1627',
          _from: 'commits/1584',
          _to: 'files/1598',
          lineCount: 4,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/data-mock/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1629',
          _from: 'commits/1584',
          _to: 'files/1600',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/location-sender/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1631',
          _from: 'commits/1584',
          _to: 'files/742',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ac093a9fac9d0a62ca24e34c273a9c3c700be4b4/location-sender/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1688',
          _from: 'commits/1659',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f78f7b4bb777698b3d967ec407acf15848cad5e0/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f78f7b4bb777698b3d967ec407acf15848cad5e0/Makefile#L1-2',
              newLines: 1,
              newStart: 18,
              oldLines: 1,
              oldStart: 18,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f78f7b4bb777698b3d967ec407acf15848cad5e0/Makefile#L3-4',
              newLines: 3,
              newStart: 47,
              oldLines: 1,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 5,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1690',
          _from: 'commits/1659',
          _to: 'files/1675',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f78f7b4bb777698b3d967ec407acf15848cad5e0/k8s/location-sender.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1692',
          _from: 'commits/1659',
          _to: 'files/1673',
          lineCount: 34,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f78f7b4bb777698b3d967ec407acf15848cad5e0/k8s/data-mock.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1813',
          _from: 'commits/1714',
          _to: 'files/1740',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1815',
          _from: 'commits/1714',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/1817',
          _from: 'commits/1714',
          _to: 'files/1738',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/k8s/location-tracker.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1819',
          _from: 'commits/1714',
          _to: 'files/1742',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1821',
          _from: 'commits/1714',
          _to: 'files/1748',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1823',
          _from: 'commits/1714',
          _to: 'files/1750',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1825',
          _from: 'commits/1714',
          _to: 'files/1746',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1827',
          _from: 'commits/1714',
          _to: 'files/1744',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1829',
          _from: 'commits/1714',
          _to: 'files/1780',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1831',
          _from: 'commits/1714',
          _to: 'files/1778',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1833',
          _from: 'commits/1714',
          _to: 'files/1761',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1835',
          _from: 'commits/1714',
          _to: 'files/1776',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/src/test/java/at/tuwien/dse/location_tracker/LocationTrackerApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/1837',
          _from: 'commits/1714',
          _to: 'files/1772',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f454ff1e7a4f7f72302cc6c7fe3a759ec9d6402b/location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2055',
          _from: 'commits/2029',
          _to: 'files/2047',
          lineCount: 50,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8e4503d0b6592518cd1327d89f9ed0866455d3e4/k8s/rabbitmq-configmap.yaml#L50-50',
              newLines: 50,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 50,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2057',
          _from: 'commits/2029',
          _to: 'files/2045',
          lineCount: 56,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/8e4503d0b6592518cd1327d89f9ed0866455d3e4/k8s/rabbitmq.yaml#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2105',
          _from: 'commits/2079',
          _to: 'files/2045',
          lineCount: 56,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/ed082db45ff906f8c63a6a31b5e554d3fec0fb18/k8s/rabbitmq.yaml#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2107',
          _from: 'commits/2079',
          _to: 'files/2047',
          lineCount: 50,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ed082db45ff906f8c63a6a31b5e554d3fec0fb18/k8s/rabbitmq-configmap.yaml#L50-50',
              newLines: 50,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 50,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2134',
          _from: 'commits/2117',
          _to: 'files/2129',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e18c6c9e6e9280989c82a3ecc5a083bf9470bb86/location-tracker/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2277',
          _from: 'commits/2154',
          _to: 'files/2182',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2281',
          _from: 'commits/2154',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/2283',
          _from: 'commits/2154',
          _to: 'files/2184',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2285',
          _from: 'commits/2154',
          _to: 'files/2186',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2287',
          _from: 'commits/2154',
          _to: 'files/2188',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/HELP.md#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2289',
          _from: 'commits/2154',
          _to: 'files/2190',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2291',
          _from: 'commits/2154',
          _to: 'files/2192',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2293',
          _from: 'commits/2154',
          _to: 'files/2196',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2295',
          _from: 'commits/2154',
          _to: 'files/2200',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2297',
          _from: 'commits/2154',
          _to: 'files/2215',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2299',
          _from: 'commits/2154',
          _to: 'files/2237',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2301',
          _from: 'commits/2154',
          _to: 'files/2230',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2303',
          _from: 'commits/2154',
          _to: 'files/2232',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2305',
          _from: 'commits/2154',
          _to: 'files/2234',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2307',
          _from: 'commits/2154',
          _to: 'files/2198',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7ba90b504a6f5602a1cbf150adce011f900e5f52/k8s/distance-monitor.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2635',
          _from: 'commits/2517',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/2637',
          _from: 'commits/2517',
          _to: 'files/2549',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2639',
          _from: 'commits/2517',
          _to: 'files/2545',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2641',
          _from: 'commits/2517',
          _to: 'files/2551',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2643',
          _from: 'commits/2517',
          _to: 'files/2553',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2645',
          _from: 'commits/2517',
          _to: 'files/2557',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2647',
          _from: 'commits/2517',
          _to: 'files/2559',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2649',
          _from: 'commits/2517',
          _to: 'files/2561',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2651',
          _from: 'commits/2517',
          _to: 'files/2599',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2655',
          _from: 'commits/2517',
          _to: 'files/2595',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/src/main/java/at/tuwien/dse/central_director/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2657',
          _from: 'commits/2517',
          _to: 'files/2583',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2659',
          _from: 'commits/2517',
          _to: 'files/2597',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/src/test/java/at/tuwien/dse/central_director/CentralDirectorApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2661',
          _from: 'commits/2517',
          _to: 'files/2601',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/central-director/src/test/java/at/tuwien/dse/central_director/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2663',
          _from: 'commits/2517',
          _to: 'files/2567',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a54300e5a423266578e98bc5b79bdea3d036a062/k8s/central-director.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2981',
          _from: 'commits/2867',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/2983',
          _from: 'commits/2867',
          _to: 'files/2905',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2985',
          _from: 'commits/2867',
          _to: 'files/2903',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2987',
          _from: 'commits/2867',
          _to: 'files/2901',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2989',
          _from: 'commits/2867',
          _to: 'files/2907',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2991',
          _from: 'commits/2867',
          _to: 'files/2909',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2993',
          _from: 'commits/2867',
          _to: 'files/2911',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2995',
          _from: 'commits/2867',
          _to: 'files/2913',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2997',
          _from: 'commits/2867',
          _to: 'files/2945',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/2999',
          _from: 'commits/2867',
          _to: 'files/2940',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3001',
          _from: 'commits/2867',
          _to: 'files/2927',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3003',
          _from: 'commits/2867',
          _to: 'files/2943',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3005',
          _from: 'commits/2867',
          _to: 'files/2949',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3007',
          _from: 'commits/2867',
          _to: 'files/2915',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c653943c508444f3603f3147fd501b900e827125/k8s/emergency-brake.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3258',
          _from: 'commits/3201',
          _to: 'files/375',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/.gitignore#L0-1',
              newLines: 0,
              newStart: 17,
              oldLines: 1,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 0,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3260',
          _from: 'commits/3201',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/Makefile#L0-1',
              newLines: 0,
              newStart: 16,
              oldLines: 1,
              oldStart: 17,
            },
          ],
          stats: {
            additions: 0,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3262',
          _from: 'commits/3201',
          _to: 'files/3217',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/central-director/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3264',
          _from: 'commits/3201',
          _to: 'files/3221',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/distance-monitor/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3266',
          _from: 'commits/3201',
          _to: 'files/3223',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/emergency-brake/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3268',
          _from: 'commits/3201',
          _to: 'files/2045',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/k8s/rabbitmq.yaml#L1-2',
              newLines: 1,
              newStart: 8,
              oldLines: 1,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3270',
          _from: 'commits/3201',
          _to: 'files/3229',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/feb8a8df1873fcfa2d609ffc9e27002b6c4724e3/location-tracker/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3415',
          _from: 'commits/3396',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/5b579633763efcbaa858be91d3529fd54082a726/Makefile#L1-1',
              newLines: 1,
              newStart: 17,
              oldLines: 0,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3438',
          _from: 'commits/3423',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/bbe84e2fa13b2ca9294af34bb3c40f73c8525d93/Makefile#L1-4',
              newLines: 1,
              newStart: 47,
              oldLines: 3,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3559',
          _from: 'commits/3446',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3561',
          _from: 'commits/3446',
          _to: 'files/3472',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/k8s/passenger-gateway.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3563',
          _from: 'commits/3446',
          _to: 'files/3475',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3565',
          _from: 'commits/3446',
          _to: 'files/3476',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3567',
          _from: 'commits/3446',
          _to: 'files/3499',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3569',
          _from: 'commits/3446',
          _to: 'files/3478',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3571',
          _from: 'commits/3446',
          _to: 'files/3482',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3573',
          _from: 'commits/3446',
          _to: 'files/3480',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3575',
          _from: 'commits/3446',
          _to: 'files/3487',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3577',
          _from: 'commits/3446',
          _to: 'files/3488',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3579',
          _from: 'commits/3446',
          _to: 'files/3520',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3581',
          _from: 'commits/3446',
          _to: 'files/3523',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3583',
          _from: 'commits/3446',
          _to: 'files/3513',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3585',
          _from: 'commits/3446',
          _to: 'files/3518',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3587',
          _from: 'commits/3446',
          _to: 'files/3516',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0fd3ca132450c20503b3849edb76c4861bf3b87d/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3885',
          _from: 'commits/3803',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3889',
          _from: 'commits/3803',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/k8s/rabbitmq-configmap.yaml#L2-3',
              newLines: 2,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3891',
          _from: 'commits/3803',
          _to: 'files/1738',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/k8s/location-tracker.yaml#L7-7',
              newLines: 7,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3893',
          _from: 'commits/3803',
          _to: 'files/1744',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L3-5',
              newLines: 3,
              newStart: 2,
              oldLines: 2,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-1',
              newLines: 1,
              newStart: 6,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-1',
              newLines: 1,
              newStart: 13,
              oldLines: 0,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-14',
              newLines: 1,
              newStart: 19,
              oldLines: 13,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-1',
              newLines: 1,
              newStart: 23,
              oldLines: 0,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L26-26',
              newLines: 26,
              newStart: 31,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L7-7',
              newLines: 7,
              newStart: 62,
              oldLines: 0,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/pom.xml#L0-1',
              newLines: 0,
              newStart: 78,
              oldLines: 1,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 42,
            deletions: 17,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3895',
          _from: 'commits/3803',
          _to: 'files/3847',
          lineCount: 33,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L33-33',
              newLines: 33,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 33,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3897',
          _from: 'commits/3803',
          _to: 'files/3841',
          lineCount: 48,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationDocument.java#L48-48',
              newLines: 48,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 48,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3899',
          _from: 'commits/3803',
          _to: 'files/3849',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessage.java#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3901',
          _from: 'commits/3803',
          _to: 'files/3845',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3903',
          _from: 'commits/3803',
          _to: 'files/3852',
          lineCount: 45,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L45-45',
              newLines: 45,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 45,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3905',
          _from: 'commits/3803',
          _to: 'files/3843',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/3907',
          _from: 'commits/3803',
          _to: 'files/1761',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/location-tracker/src/main/resources/application.properties#L7-7',
              newLines: 7,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/3909',
          _from: 'commits/3803',
          _to: 'files/3815',
          lineCount: 12,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f66f600cc068d45f33421e3e83d99345bf2f3696/mongodb/docker-compose.yml#L12-12',
              newLines: 12,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4086',
          _from: 'commits/3997',
          _to: 'files/3472',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/k8s/passenger-gateway.yaml#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4088',
          _from: 'commits/3997',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/Makefile#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/Makefile#L1-4',
              newLines: 1,
              newStart: 47,
              oldLines: 3,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 2,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4090',
          _from: 'commits/3997',
          _to: 'files/3475',
          lineCount: 3,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/.gitattributes#L3-3',
              newLines: 3,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4092',
          _from: 'commits/3997',
          _to: 'files/3476',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/.gitignore#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4094',
          _from: 'commits/3997',
          _to: 'files/3499',
          lineCount: 20,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/.mvn/wrapper/maven-wrapper.properties#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4096',
          _from: 'commits/3997',
          _to: 'files/3482',
          lineCount: 4,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/Dockerfile#L4-4',
              newLines: 4,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4098',
          _from: 'commits/3997',
          _to: 'files/3478',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/build-image#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4100',
          _from: 'commits/3997',
          _to: 'files/3480',
          lineCount: 260,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/mvnw#L260-260',
              newLines: 260,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 260,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4102',
          _from: 'commits/3997',
          _to: 'files/3488',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/pom.xml#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4104',
          _from: 'commits/3997',
          _to: 'files/3487',
          lineCount: 150,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/mvnw.cmd#L150-150',
              newLines: 150,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 150,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4106',
          _from: 'commits/3997',
          _to: 'files/3520',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4108',
          _from: 'commits/3997',
          _to: 'files/3523',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4110',
          _from: 'commits/3997',
          _to: 'files/3513',
          lineCount: 2,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4112',
          _from: 'commits/3997',
          _to: 'files/3518',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4114',
          _from: 'commits/3997',
          _to: 'files/3516',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/49d517d0ac02d154c596406bf01dc61fb8c16495/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4180',
          _from: 'commits/4158',
          _to: 'files/3488',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/91ec8fdad6c448ab40f09e72cc41bce1ee3f069a/passenger-gateway/pom.xml#L6-6',
              newLines: 6,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4182',
          _from: 'commits/4158',
          _to: 'files/4173',
          lineCount: 17,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/91ec8fdad6c448ab40f09e72cc41bce1ee3f069a/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java#L17-17',
              newLines: 17,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4317',
          _from: 'commits/4244',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/Makefile#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4321',
          _from: 'commits/4244',
          _to: 'files/443',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/pom.xml#L1-1',
              newLines: 1,
              newStart: 33,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/pom.xml#L1-2',
              newLines: 1,
              newStart: 36,
              oldLines: 1,
              oldStart: 35,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/pom.xml#L1-1',
              newLines: 1,
              newStart: 39,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/pom.xml#L13-15',
              newLines: 13,
              newStart: 42,
              oldLines: 2,
              oldStart: 40,
            },
          ],
          stats: {
            additions: 16,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4323',
          _from: 'commits/4244',
          _to: 'files/1598',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/Dockerfile#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/Dockerfile#L4-5',
              newLines: 4,
              newStart: 4,
              oldLines: 1,
              oldStart: 2,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/Dockerfile#L3-4',
              newLines: 3,
              newStart: 9,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 9,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4325',
          _from: 'commits/4244',
          _to: 'files/461',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java#L1-1',
              newLines: 1,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java#L1-1',
              newLines: 1,
              newStart: 8,
              oldLines: 0,
              oldStart: 6,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4327',
          _from: 'commits/4244',
          _to: 'files/4286',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/java/at/tuwien/dse/data_mock/RabbitMQConfig.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4329',
          _from: 'commits/4244',
          _to: 'files/4283',
          lineCount: 63,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L63-63',
              newLines: 63,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 63,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4331',
          _from: 'commits/4244',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/resources/application.properties#L16-17',
              newLines: 16,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 16,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4333',
          _from: 'commits/4244',
          _to: 'files/4284',
          lineCount: 56,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4335',
          _from: 'commits/4244',
          _to: 'files/4260',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/k8s/data-mock-vehicle-1.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4337',
          _from: 'commits/4244',
          _to: 'files/4262',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/k8s/data-mock-vehicle-2.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4339',
          _from: 'commits/4244',
          _to: 'files/1673',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/31b061d93c20b618e642afda96dc36aa8b7828bf/k8s/data-mock.yaml#L0-34',
              newLines: 0,
              newStart: 0,
              oldLines: 34,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 34,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/4474',
          _from: 'commits/4417',
          _to: 'files/4429',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/http/log.http#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4479',
          _from: 'commits/4417',
          _to: 'files/4446',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorController.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4478',
          _from: 'commits/4417',
          _to: 'files/2561',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/pom.xml#L6-6',
              newLines: 6,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4481',
          _from: 'commits/4417',
          _to: 'files/4444',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorRepository.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4483',
          _from: 'commits/4417',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/src/main/resources/application.properties#L3-3',
              newLines: 3,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4485',
          _from: 'commits/4417',
          _to: 'files/4448',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4487',
          _from: 'commits/4417',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/k8s/central-director.yaml#L7-7',
              newLines: 7,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4489',
          _from: 'commits/4417',
          _to: 'files/1761',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/location-tracker/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 2,
              oldLines: 1,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f017164d0547d8cccb6de76c68018af09bb58545/location-tracker/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4670',
          _from: 'commits/4591',
          _to: 'files/443',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/pom.xml#L1-1',
              newLines: 1,
              newStart: 33,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/pom.xml#L1-2',
              newLines: 1,
              newStart: 36,
              oldLines: 1,
              oldStart: 35,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/pom.xml#L1-1',
              newLines: 1,
              newStart: 39,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/pom.xml#L13-15',
              newLines: 13,
              newStart: 42,
              oldLines: 2,
              oldStart: 40,
            },
          ],
          stats: {
            additions: 16,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4672',
          _from: 'commits/4591',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/Makefile#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4674',
          _from: 'commits/4591',
          _to: 'files/1598',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/Dockerfile#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/Dockerfile#L4-5',
              newLines: 4,
              newStart: 4,
              oldLines: 1,
              oldStart: 2,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/Dockerfile#L3-4',
              newLines: 3,
              newStart: 9,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 9,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4676',
          _from: 'commits/4591',
          _to: 'files/4283',
          lineCount: 63,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L63-63',
              newLines: 63,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 63,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4678',
          _from: 'commits/4591',
          _to: 'files/461',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java#L1-1',
              newLines: 1,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/java/at/tuwien/dse/data_mock/DataMockApplication.java#L1-1',
              newLines: 1,
              newStart: 8,
              oldLines: 0,
              oldStart: 6,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4680',
          _from: 'commits/4591',
          _to: 'files/4286',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/java/at/tuwien/dse/data_mock/RabbitMQConfig.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4682',
          _from: 'commits/4591',
          _to: 'files/4284',
          lineCount: 56,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4684',
          _from: 'commits/4591',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/data-mock/src/main/resources/application.properties#L16-17',
              newLines: 16,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 16,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4686',
          _from: 'commits/4591',
          _to: 'files/4260',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/k8s/data-mock-vehicle-1.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4688',
          _from: 'commits/4591',
          _to: 'files/4262',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/k8s/data-mock-vehicle-2.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4690',
          _from: 'commits/4591',
          _to: 'files/1673',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/k8s/data-mock.yaml#L0-34',
              newLines: 0,
              newStart: 0,
              oldLines: 34,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 34,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/4692',
          _from: 'commits/4591',
          _to: 'files/3488',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/passenger-gateway/pom.xml#L6-6',
              newLines: 6,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4694',
          _from: 'commits/4591',
          _to: 'files/4173',
          lineCount: 17,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2d230ca26fc5e29845b0f395ebd43a0be808083e/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java#L17-17',
              newLines: 17,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4835',
          _from: 'commits/4738',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 36,
              oldLines: 1,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4837',
          _from: 'commits/4738',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 28,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4839',
          _from: 'commits/4738',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 28,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4841',
          _from: 'commits/4738',
          _to: 'files/2198',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/distance-monitor.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/distance-monitor.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/distance-monitor.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/distance-monitor.yaml#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/distance-monitor.yaml#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4843',
          _from: 'commits/4738',
          _to: 'files/2915',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/emergency-brake.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/emergency-brake.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/emergency-brake.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/emergency-brake.yaml#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/emergency-brake.yaml#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4845',
          _from: 'commits/4738',
          _to: 'files/1675',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-sender.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-sender.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-sender.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-sender.yaml#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-sender.yaml#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4847',
          _from: 'commits/4738',
          _to: 'files/1738',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-tracker.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-tracker.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-tracker.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-tracker.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/location-tracker.yaml#L1-2',
              newLines: 1,
              newStart: 36,
              oldLines: 1,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4849',
          _from: 'commits/4738',
          _to: 'files/3488',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/pom.xml#L5-5',
              newLines: 5,
              newStart: 49,
              oldLines: 0,
              oldStart: 48,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4851',
          _from: 'commits/4738',
          _to: 'files/3472',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/passenger-gateway.yaml#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/passenger-gateway.yaml#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/passenger-gateway.yaml#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/passenger-gateway.yaml#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/k8s/passenger-gateway.yaml#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4853',
          _from: 'commits/4738',
          _to: 'files/4756',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/DistanceMonitorService.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4855',
          _from: 'commits/4738',
          _to: 'files/4758',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4857',
          _from: 'commits/4738',
          _to: 'files/4754',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4859',
          _from: 'commits/4738',
          _to: 'files/3523',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L1-1',
              newLines: 1,
              newStart: 7,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L12-12',
              newLines: 12,
              newStart: 12,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L24-24',
              newLines: 24,
              newStart: 28,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 39,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/4861',
          _from: 'commits/4738',
          _to: 'files/4777',
          lineCount: 50,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L50-50',
              newLines: 50,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 50,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/4863',
          _from: 'commits/4738',
          _to: 'files/3513',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e3d375f89f3e1157fac28a77b50973e8163ab1d8/passenger-gateway/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5035',
          _from: 'commits/4945',
          _to: 'files/443',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/pom.xml#L2-4',
              newLines: 2,
              newStart: 2,
              oldLines: 2,
              oldStart: 2,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/pom.xml#L2-3',
              newLines: 2,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/pom.xml#L0-6',
              newLines: 0,
              newStart: 39,
              oldLines: 6,
              oldStart: 39,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/pom.xml#L6-6',
              newLines: 6,
              newStart: 51,
              oldLines: 0,
              oldStart: 55,
            },
          ],
          stats: {
            additions: 10,
            deletions: 9,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5037',
          _from: 'commits/4945',
          _to: 'files/4283',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-3',
              newLines: 0,
              newStart: 2,
              oldLines: 3,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 4,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 7,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L2-5',
              newLines: 2,
              newStart: 14,
              oldLines: 3,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-1',
              newLines: 0,
              newStart: 17,
              oldLines: 1,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 22,
              oldLines: 2,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L6-13',
              newLines: 6,
              newStart: 28,
              oldLines: 7,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-1',
              newLines: 0,
              newStart: 39,
              oldLines: 1,
              oldStart: 44,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L2-5',
              newLines: 2,
              newStart: 43,
              oldLines: 3,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 47,
              oldLines: 0,
              oldStart: 52,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 49,
              oldLines: 2,
              oldStart: 54,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 52,
              oldLines: 1,
              oldStart: 57,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-2',
              newLines: 0,
              newStart: 53,
              oldLines: 2,
              oldStart: 59,
            },
          ],
          stats: {
            additions: 18,
            deletions: 25,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5039',
          _from: 'commits/4945',
          _to: 'files/4286',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/java/at/tuwien/dse/data_mock/RabbitMQConfig.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/5041',
          _from: 'commits/4945',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/resources/application.properties#L4-5',
              newLines: 4,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/resources/application.properties#L2-4',
              newLines: 2,
              newStart: 6,
              oldLines: 2,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/data-mock/src/main/resources/application.properties#L0-11',
              newLines: 0,
              newStart: 8,
              oldLines: 11,
              oldStart: 6,
            },
          ],
          stats: {
            additions: 6,
            deletions: 14,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5043',
          _from: 'commits/4945',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/k8s/data-mock-vehicle-1.yaml#L2-2',
              newLines: 2,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5045',
          _from: 'commits/4945',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/k8s/data-mock-vehicle-2.yaml#L2-2',
              newLines: 2,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5047',
          _from: 'commits/4945',
          _to: 'files/4962',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/k8s/location-sender-vehicle-1.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5049',
          _from: 'commits/4945',
          _to: 'files/4964',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/k8s/location-sender-vehicle-2.yaml#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5051',
          _from: 'commits/4945',
          _to: 'files/1675',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/k8s/location-sender.yaml#L0-34',
              newLines: 0,
              newStart: 0,
              oldLines: 34,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 34,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/5053',
          _from: 'commits/4945',
          _to: 'files/750',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/pom.xml#L2-4',
              newLines: 2,
              newStart: 2,
              oldLines: 2,
              oldStart: 2,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/pom.xml#L2-3',
              newLines: 2,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/pom.xml#L5-5',
              newLines: 5,
              newStart: 39,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/pom.xml#L1-1',
              newLines: 1,
              newStart: 51,
              oldLines: 0,
              oldStart: 44,
            },
          ],
          stats: {
            additions: 10,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5055',
          _from: 'commits/4945',
          _to: 'files/4981',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/src/main/java/dev/wo/location_sender/LocationController,java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5057',
          _from: 'commits/4945',
          _to: 'files/4982',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/src/main/java/dev/wo/location_sender/RabbitMQConfig.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5059',
          _from: 'commits/4945',
          _to: 'files/4984',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5061',
          _from: 'commits/4945',
          _to: 'files/765',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1c7f40cb087da83a4e45de6a4cd4044cd4f0e51e/location-sender/src/main/resources/application.properties#L9-9',
              newLines: 9,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5218',
          _from: 'commits/5151',
          _to: 'files/4283',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 34,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5220',
          _from: 'commits/5151',
          _to: 'files/4284',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L2-4',
              newLines: 2,
              newStart: 12,
              oldLines: 2,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L2-4',
              newLines: 2,
              newStart: 25,
              oldLines: 2,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L2-4',
              newLines: 2,
              newStart: 29,
              oldLines: 2,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 7,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5222',
          _from: 'commits/5151',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/data-mock/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5224',
          _from: 'commits/5151',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5226',
          _from: 'commits/5151',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5228',
          _from: 'commits/5151',
          _to: 'files/4962',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/k8s/location-sender-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5230',
          _from: 'commits/5151',
          _to: 'files/4981',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/LocationController,java#L0-43',
              newLines: 0,
              newStart: 0,
              oldLines: 43,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 43,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/5232',
          _from: 'commits/5151',
          _to: 'files/4964',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/k8s/location-sender-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5234',
          _from: 'commits/5151',
          _to: 'files/5165',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/LocationController.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5236',
          _from: 'commits/5151',
          _to: 'files/4984',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L2-4',
              newLines: 2,
              newStart: 12,
              oldLines: 2,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L1-4',
              newLines: 1,
              newStart: 24,
              oldLines: 3,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L2-4',
              newLines: 2,
              newStart: 26,
              oldLines: 2,
              oldStart: 28,
            },
          ],
          stats: {
            additions: 6,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5238',
          _from: 'commits/5151',
          _to: 'files/765',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3e49f91436ca0915dbf5641ae45455b691370faa/location-sender/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5341',
          _from: 'commits/5316',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8f5e53205aabbdf1a88111b5bea1ae773c587b8c/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L3-9',
              newLines: 3,
              newStart: 17,
              oldLines: 6,
              oldStart: 17,
            },
          ],
          stats: {
            additions: 3,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5343',
          _from: 'commits/5316',
          _to: 'files/3843',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8f5e53205aabbdf1a88111b5bea1ae773c587b8c/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java#L1-1',
              newLines: 1,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8f5e53205aabbdf1a88111b5bea1ae773c587b8c/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java#L12-13',
              newLines: 12,
              newStart: 6,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 13,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5345',
          _from: 'commits/5316',
          _to: 'files/3845',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8f5e53205aabbdf1a88111b5bea1ae773c587b8c/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5386',
          _from: 'commits/5369',
          _to: 'files/5381',
          lineCount: 1,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de29012701239256862d6d4d558543532f433aa6/location-tracker/http/location.http#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5431',
          _from: 'commits/5416',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b1764e15b6520e4baca9b246454f9896764dadaa/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L1-2',
              newLines: 1,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5484',
          _from: 'commits/5455',
          _to: 'files/4754',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/61c5e1a668a97865d6a1bc952806edac232dc1f0/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L2-2',
              newLines: 2,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/61c5e1a668a97865d6a1bc952806edac232dc1f0/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L3-3',
              newLines: 3,
              newStart: 10,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/61c5e1a668a97865d6a1bc952806edac232dc1f0/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L9-9',
              newLines: 9,
              newStart: 28,
              oldLines: 0,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5486',
          _from: 'commits/5455',
          _to: 'files/5469',
          lineCount: 53,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/61c5e1a668a97865d6a1bc952806edac232dc1f0/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L53-53',
              newLines: 53,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 53,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5488',
          _from: 'commits/5455',
          _to: 'files/5471',
          lineCount: 33,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/61c5e1a668a97865d6a1bc952806edac232dc1f0/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationsController.java#L33-33',
              newLines: 33,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 33,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5567',
          _from: 'commits/5552',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fb4b923a8dd76b92e795237133a0ed38ba73c6bb/k8s/rabbitmq-configmap.yaml#L5-5',
              newLines: 5,
              newStart: 30,
              oldLines: 0,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fb4b923a8dd76b92e795237133a0ed38ba73c6bb/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 44,
              oldLines: 0,
              oldStart: 38,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fb4b923a8dd76b92e795237133a0ed38ba73c6bb/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 60,
              oldLines: 0,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5663',
          _from: 'commits/5577',
          _to: 'files/4444',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorRepository.java#L0-6',
              newLines: 0,
              newStart: 0,
              oldLines: 6,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 6,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/5662',
          _from: 'commits/5577',
          _to: 'files/2561',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/pom.xml#L12-12',
              newLines: 12,
              newStart: 49,
              oldLines: 0,
              oldStart: 48,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5665',
          _from: 'commits/5577',
          _to: 'files/4446',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorController.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/5667',
          _from: 'commits/5577',
          _to: 'files/5610',
          lineCount: 45,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L45-45',
              newLines: 45,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 45,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5669',
          _from: 'commits/5577',
          _to: 'files/5616',
          lineCount: 64,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L64-64',
              newLines: 64,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 64,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5671',
          _from: 'commits/5577',
          _to: 'files/5612',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogController.java#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5673',
          _from: 'commits/5577',
          _to: 'files/4448',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L2-2',
              newLines: 2,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L2-3',
              newLines: 2,
              newStart: 24,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 7,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5677',
          _from: 'commits/5577',
          _to: 'files/5614',
          lineCount: 48,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L48-48',
              newLines: 48,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 48,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5676',
          _from: 'commits/5577',
          _to: 'files/5618',
          lineCount: 18,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java#L18-18',
              newLines: 18,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 18,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5679',
          _from: 'commits/5577',
          _to: 'files/5624',
          lineCount: 13,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L13-13',
              newLines: 13,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 13,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5681',
          _from: 'commits/5577',
          _to: 'files/5620',
          lineCount: 38,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/java/at/tuwien/dse/central_director/WebClientConfig.java#L38-38',
              newLines: 38,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 38,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5683',
          _from: 'commits/5577',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4b2f6438dde71b37815d531f8edc8a99c1d04cc9/central-director/src/main/resources/application.properties#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 3,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5798',
          _from: 'commits/5769',
          _to: 'files/4758',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/19ba714beaec175300f1ff3d87e5811491c39958/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L1-1',
              newLines: 1,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/19ba714beaec175300f1ff3d87e5811491c39958/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L2-2',
              newLines: 2,
              newStart: 9,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/19ba714beaec175300f1ff3d87e5811491c39958/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L9-9',
              newLines: 9,
              newStart: 26,
              oldLines: 0,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5800',
          _from: 'commits/5769',
          _to: 'files/5785',
          lineCount: 60,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/19ba714beaec175300f1ff3d87e5811491c39958/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogMessage.java#L60-60',
              newLines: 60,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 60,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5802',
          _from: 'commits/5769',
          _to: 'files/5783',
          lineCount: 30,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/19ba714beaec175300f1ff3d87e5811491c39958/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java#L30-30',
              newLines: 30,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 30,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5914',
          _from: 'commits/5866',
          _to: 'files/5883',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/data-mock/src/main/java/at/tuwien/dse/data_mock/BreakController.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5917',
          _from: 'commits/5866',
          _to: 'files/4283',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L11-11',
              newLines: 11,
              newStart: 14,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 42,
              oldLines: 1,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L6-6',
              newLines: 6,
              newStart: 53,
              oldLines: 0,
              oldStart: 41,
            },
          ],
          stats: {
            additions: 18,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5919',
          _from: 'commits/5866',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/Makefile#L0-2',
              newLines: 0,
              newStart: 0,
              oldLines: 2,
              oldStart: 1,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/Makefile#L1-6',
              newLines: 1,
              newStart: 6,
              oldLines: 5,
              oldStart: 8,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/Makefile#L4-4',
              newLines: 4,
              newStart: 48,
              oldLines: 0,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 5,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5921',
          _from: 'commits/5866',
          _to: 'files/5885',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/5923',
          _from: 'commits/5866',
          _to: 'files/1269',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L0-1',
              newLines: 0,
              newStart: 7,
              oldLines: 1,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-6',
              newLines: 1,
              newStart: 12,
              oldLines: 5,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L9-9',
              newLines: 9,
              newStart: 20,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-3',
              newLines: 1,
              newStart: 60,
              oldLines: 2,
              oldStart: 56,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-16',
              newLines: 1,
              newStart: 62,
              oldLines: 15,
              oldStart: 59,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 66,
              oldLines: 0,
              oldStart: 76,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 100,
              oldLines: 0,
              oldStart: 109,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L3-4',
              newLines: 3,
              newStart: 123,
              oldLines: 1,
              oldStart: 131,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 127,
              oldLines: 1,
              oldStart: 133,
            },
          ],
          stats: {
            additions: 21,
            deletions: 27,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5925',
          _from: 'commits/5866',
          _to: 'files/1265',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/EventLog.js#L1-7',
              newLines: 1,
              newStart: 3,
              oldLines: 6,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 8,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 3,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/5927',
          _from: 'commits/5866',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/layout/Dashboard.js#L4-4',
              newLines: 4,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/layout/Dashboard.js#L26-26',
              newLines: 26,
              newStart: 10,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 39,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81ad1caab8e785163475d0eb4095f644efa251e3/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 42,
              oldLines: 1,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 33,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6105',
          _from: 'commits/6045',
          _to: 'files/6077',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6107',
          _from: 'commits/6045',
          _to: 'files/6079',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6109',
          _from: 'commits/6045',
          _to: 'files/2913',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/emergency-brake/pom.xml#L5-5',
              newLines: 5,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6111',
          _from: 'commits/6045',
          _to: 'files/6064',
          lineCount: 38,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/k8s/emergency-brake-vehicle-1.yaml#L38-38',
              newLines: 38,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 38,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6113',
          _from: 'commits/6045',
          _to: 'files/6081',
          lineCount: 26,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/WebClientConfig.java#L26-26',
              newLines: 26,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 26,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6115',
          _from: 'commits/6045',
          _to: 'files/2927',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/emergency-brake/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6117',
          _from: 'commits/6045',
          _to: 'files/6062',
          lineCount: 38,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/k8s/emergency-brake-vehicle-2.yaml#L38-38',
              newLines: 38,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 38,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6119',
          _from: 'commits/6045',
          _to: 'files/2915',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d65b6c883a72584a9ee97e14cd61f0a5430a0283/k8s/emergency-brake.yaml#L0-34',
              newLines: 0,
              newStart: 0,
              oldLines: 34,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 34,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/6227',
          _from: 'commits/6197',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6bc3ebc2833b2db1f7095328d08e99dfacc24517/central-director/src/main/resources/application.properties#L5-5',
              newLines: 5,
              newStart: 8,
              oldLines: 0,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6229',
          _from: 'commits/6197',
          _to: 'files/6079',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6bc3ebc2833b2db1f7095328d08e99dfacc24517/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6231',
          _from: 'commits/6197',
          _to: 'files/6077',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6bc3ebc2833b2db1f7095328d08e99dfacc24517/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java#L6-9',
              newLines: 6,
              newStart: 16,
              oldLines: 3,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 6,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6233',
          _from: 'commits/6197',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6bc3ebc2833b2db1f7095328d08e99dfacc24517/k8s/rabbitmq-configmap.yaml#L1-2',
              newLines: 1,
              newStart: 64,
              oldLines: 1,
              oldStart: 64,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6345',
          _from: 'commits/6267',
          _to: 'files/5610',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-3',
              newLines: 2,
              newStart: 7,
              oldLines: 1,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L3-5',
              newLines: 3,
              newStart: 15,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L9-9',
              newLines: 9,
              newStart: 20,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-4',
              newLines: 2,
              newStart: 31,
              oldLines: 2,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-4',
              newLines: 2,
              newStart: 35,
              oldLines: 2,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L9-9',
              newLines: 9,
              newStart: 55,
              oldLines: 0,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L7-8',
              newLines: 7,
              newStart: 65,
              oldLines: 1,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 37,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6347',
          _from: 'commits/6267',
          _to: 'files/5616',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 31,
              oldLines: 1,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L2-4',
              newLines: 2,
              newStart: 42,
              oldLines: 2,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 45,
              oldLines: 1,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 55,
              oldLines: 1,
              oldStart: 55,
            },
          ],
          stats: {
            additions: 6,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6349',
          _from: 'commits/6267',
          _to: 'files/5614',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L0-4',
              newLines: 0,
              newStart: 2,
              oldLines: 4,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L1-19',
              newLines: 1,
              newStart: 12,
              oldLines: 18,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 1,
            deletions: 22,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6351',
          _from: 'commits/6267',
          _to: 'files/2200',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/pom.xml#L6-6',
              newLines: 6,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6353',
          _from: 'commits/6267',
          _to: 'files/6299',
          lineCount: 75,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java#L75-75',
              newLines: 75,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 75,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6355',
          _from: 'commits/6267',
          _to: 'files/6295',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6357',
          _from: 'commits/6267',
          _to: 'files/6291',
          lineCount: 95,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java#L95-95',
              newLines: 95,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 95,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6359',
          _from: 'commits/6267',
          _to: 'files/6293',
          lineCount: 31,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java#L31-31',
              newLines: 31,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 31,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6361',
          _from: 'commits/6267',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/distance-monitor/src/main/resources/application.properties#L5-5',
              newLines: 5,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6364',
          _from: 'commits/6267',
          _to: 'files/3845',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6365',
          _from: 'commits/6267',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/k8s/rabbitmq-configmap.yaml#L5-5',
              newLines: 5,
              newStart: 31,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 66,
              oldLines: 0,
              oldStart: 60,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/k8s/rabbitmq-configmap.yaml#L1-2',
              newLines: 1,
              newStart: 76,
              oldLines: 1,
              oldStart: 64,
            },
          ],
          stats: {
            additions: 13,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6367',
          _from: 'commits/6267',
          _to: 'files/3852',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a8e13f29144c6a3633e5b4b1997cd6b7f459c0a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L1-19',
              newLines: 1,
              newStart: 12,
              oldLines: 18,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 1,
            deletions: 19,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6542',
          _from: 'commits/6471',
          _to: 'files/5610',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-3',
              newLines: 2,
              newStart: 7,
              oldLines: 1,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L3-5',
              newLines: 3,
              newStart: 15,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L9-9',
              newLines: 9,
              newStart: 20,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-4',
              newLines: 2,
              newStart: 31,
              oldLines: 2,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L2-4',
              newLines: 2,
              newStart: 35,
              oldLines: 2,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L9-9',
              newLines: 9,
              newStart: 55,
              oldLines: 0,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L7-8',
              newLines: 7,
              newStart: 65,
              oldLines: 1,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 37,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6547',
          _from: 'commits/6471',
          _to: 'files/5614',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L0-4',
              newLines: 0,
              newStart: 2,
              oldLines: 4,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L1-19',
              newLines: 1,
              newStart: 12,
              oldLines: 18,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 1,
            deletions: 22,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6549',
          _from: 'commits/6471',
          _to: 'files/5616',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 31,
              oldLines: 1,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L2-4',
              newLines: 2,
              newStart: 42,
              oldLines: 2,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 45,
              oldLines: 1,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 55,
              oldLines: 1,
              oldStart: 55,
            },
          ],
          stats: {
            additions: 6,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6551',
          _from: 'commits/6471',
          _to: 'files/2200',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/pom.xml#L6-6',
              newLines: 6,
              newStart: 43,
              oldLines: 0,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6555',
          _from: 'commits/6471',
          _to: 'files/6295',
          lineCount: 55,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java#L55-55',
              newLines: 55,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 55,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6554',
          _from: 'commits/6471',
          _to: 'files/6299',
          lineCount: 75,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java#L75-75',
              newLines: 75,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 75,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6557',
          _from: 'commits/6471',
          _to: 'files/6291',
          lineCount: 95,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java#L95-95',
              newLines: 95,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 95,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6559',
          _from: 'commits/6471',
          _to: 'files/6293',
          lineCount: 31,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java#L31-31',
              newLines: 31,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 31,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6561',
          _from: 'commits/6471',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/distance-monitor/src/main/resources/application.properties#L5-5',
              newLines: 5,
              newStart: 2,
              oldLines: 0,
              oldStart: 1,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6563',
          _from: 'commits/6471',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/k8s/rabbitmq-configmap.yaml#L5-5',
              newLines: 5,
              newStart: 31,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 66,
              oldLines: 0,
              oldStart: 60,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6565',
          _from: 'commits/6471',
          _to: 'files/3845',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6567',
          _from: 'commits/6471',
          _to: 'files/3852',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5387862981a1190a8882de0d56f9a38c44d269b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L1-19',
              newLines: 1,
              newStart: 12,
              oldLines: 18,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 1,
            deletions: 19,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6642',
          _from: 'commits/6627',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/65172bd8fe760662ee3aa4605ec057c92fd8f6c2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/65172bd8fe760662ee3aa4605ec057c92fd8f6c2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L14-14',
              newLines: 14,
              newStart: 16,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6681',
          _from: 'commits/6666',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4da54ba84d1d2aebfbd3fedd14203bb4c222bde4/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L1-3',
              newLines: 1,
              newStart: 24,
              oldLines: 2,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 1,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6750',
          _from: 'commits/6705',
          _to: 'files/2553',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/central-director/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6752',
          _from: 'commits/6705',
          _to: 'files/429',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/data-mock/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6754',
          _from: 'commits/6705',
          _to: 'files/2190',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/distance-monitor/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6756',
          _from: 'commits/6705',
          _to: 'files/2907',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/emergency-brake/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6758',
          _from: 'commits/6705',
          _to: 'files/742',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/location-sender/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6760',
          _from: 'commits/6705',
          _to: 'files/1748',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/location-tracker/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6762',
          _from: 'commits/6705',
          _to: 'files/3478',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a1521327e601811d5cb4a4518d01dfaca607e6a7/passenger-gateway/build-image#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6814',
          _from: 'commits/6784',
          _to: 'files/5612',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2cb8f612e671a4ae653c9d8f3772b5ef476d683a/central-director/src/main/java/at/tuwien/dse/central_director/LogController.java#L0-1',
              newLines: 0,
              newStart: 6,
              oldLines: 1,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 0,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6816',
          _from: 'commits/6784',
          _to: 'files/4448',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2cb8f612e671a4ae653c9d8f3772b5ef476d683a/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L20-20',
              newLines: 20,
              newStart: 31,
              oldLines: 0,
              oldStart: 30,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6818',
          _from: 'commits/6784',
          _to: 'files/5618',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2cb8f612e671a4ae653c9d8f3772b5ef476d683a/central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6820',
          _from: 'commits/6784',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2cb8f612e671a4ae653c9d8f3772b5ef476d683a/central-director/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6863',
          _from: 'commits/6846',
          _to: 'files/6858',
          lineCount: 33,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ca0cafb75a66a10e3655f8db3dad2b3fe80ded/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java#L33-33',
              newLines: 33,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 33,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6964',
          _from: 'commits/6925',
          _to: 'files/4758',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81e30694ea4e1ef64e4a76d7d4fc0cd5dd278abf/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L1-1',
              newLines: 1,
              newStart: 9,
              oldLines: 0,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6966',
          _from: 'commits/6925',
          _to: 'files/6941',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81e30694ea4e1ef64e4a76d7d4fc0cd5dd278abf/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LocationsControllerTest.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6968',
          _from: 'commits/6925',
          _to: 'files/5783',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81e30694ea4e1ef64e4a76d7d4fc0cd5dd278abf/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/6970',
          _from: 'commits/6925',
          _to: 'files/6939',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81e30694ea4e1ef64e4a76d7d4fc0cd5dd278abf/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LogsControllerTest.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/6972',
          _from: 'commits/6925',
          _to: 'files/3516',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/81e30694ea4e1ef64e4a76d7d4fc0cd5dd278abf/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L16-16',
              newLines: 16,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 16,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7065',
          _from: 'commits/7048',
          _to: 'files/7060',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/dd67df45a09cd2226e10025623ac281f9afd8dda/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeControllerTest.java#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7203',
          _from: 'commits/7127',
          _to: 'files/6291',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java#L0-95',
              newLines: 0,
              newStart: 0,
              oldLines: 95,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 95,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/7206',
          _from: 'commits/7127',
          _to: 'files/6295',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java#L0-55',
              newLines: 0,
              newStart: 0,
              oldLines: 55,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 55,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/7209',
          _from: 'commits/7127',
          _to: 'files/2237',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/7210',
          _from: 'commits/7127',
          _to: 'files/6299',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java#L0-75',
              newLines: 0,
              newStart: 0,
              oldLines: 75,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 75,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/7212',
          _from: 'commits/7127',
          _to: 'files/6293',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java#L0-31',
              newLines: 0,
              newStart: 0,
              oldLines: 31,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 31,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/7214',
          _from: 'commits/7127',
          _to: 'files/7168',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7216',
          _from: 'commits/7127',
          _to: 'files/7164',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitConfig.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7218',
          _from: 'commits/7127',
          _to: 'files/7166',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7220',
          _from: 'commits/7127',
          _to: 'files/7172',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7222',
          _from: 'commits/7127',
          _to: 'files/7174',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7224',
          _from: 'commits/7127',
          _to: 'files/7170',
          lineCount: 101,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/382c49d3dee506614fd6a120d47414d22a0d6753/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L101-101',
              newLines: 101,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 101,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7414',
          _from: 'commits/7346',
          _to: 'files/7377',
          lineCount: 56,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7416',
          _from: 'commits/7346',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L1-2',
              newLines: 1,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L90-91',
              newLines: 90,
              newStart: 8,
              oldLines: 1,
              oldStart: 8,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L13-13',
              newLines: 13,
              newStart: 100,
              oldLines: 0,
              oldStart: 10,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L2-4',
              newLines: 2,
              newStart: 116,
              oldLines: 2,
              oldStart: 14,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L1-2',
              newLines: 1,
              newStart: 120,
              oldLines: 1,
              oldStart: 18,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L20-20',
              newLines: 20,
              newStart: 126,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L1-2',
              newLines: 1,
              newStart: 160,
              oldLines: 1,
              oldStart: 38,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L52-53',
              newLines: 52,
              newStart: 163,
              oldLines: 1,
              oldStart: 41,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/Makefile#L5-5',
              newLines: 5,
              newStart: 225,
              oldLines: 0,
              oldStart: 51,
            },
          ],
          stats: {
            additions: 185,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7418',
          _from: 'commits/7346',
          _to: 'files/375',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/.gitignore#L0-1',
              newLines: 0,
              newStart: 47,
              oldLines: 1,
              oldStart: 48,
            },
          ],
          stats: {
            additions: 0,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7420',
          _from: 'commits/7346',
          _to: 'files/7379',
          lineCount: 78,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L78-78',
              newLines: 78,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 78,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7422',
          _from: 'commits/7346',
          _to: 'files/7373',
          lineCount: 81,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java#L81-81',
              newLines: 81,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 81,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7424',
          _from: 'commits/7346',
          _to: 'files/7358',
          lineCount: 2,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/.env#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7426',
          _from: 'commits/7346',
          _to: 'files/1229',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/package.json#L1-1',
              newLines: 1,
              newStart: 19,
              oldLines: 0,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7428',
          _from: 'commits/7346',
          _to: 'files/1265',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/EventLog.js#L45-52',
              newLines: 45,
              newStart: 7,
              oldLines: 7,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 46,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7430',
          _from: 'commits/7346',
          _to: 'files/1269',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/MapView.js#L8-9',
              newLines: 8,
              newStart: 34,
              oldLines: 1,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/MapView.js#L21-40',
              newLines: 21,
              newStart: 119,
              oldLines: 19,
              oldStart: 112,
            },
          ],
          stats: {
            additions: 29,
            deletions: 20,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7432',
          _from: 'commits/7346',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L11-13',
              newLines: 11,
              newStart: 6,
              oldLines: 2,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L3-5',
              newLines: 3,
              newStart: 20,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L13-14',
              newLines: 13,
              newStart: 28,
              oldLines: 1,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 43,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L27-27',
              newLines: 27,
              newStart: 49,
              oldLines: 0,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L7-9',
              newLines: 7,
              newStart: 81,
              oldLines: 2,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/6600f890ebc5e01528bf755c1e43f1b6bba869ee/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 96,
              oldLines: 1,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 64,
            deletions: 10,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7567',
          _from: 'commits/7552',
          _to: 'files/5885',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c85287060f0d6429022b8ce29fadfc88c6d275c6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L2-7',
              newLines: 2,
              newStart: 5,
              oldLines: 5,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c85287060f0d6429022b8ce29fadfc88c6d275c6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c85287060f0d6429022b8ce29fadfc88c6d275c6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L11-22',
              newLines: 11,
              newStart: 11,
              oldLines: 11,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 13,
            deletions: 17,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7606',
          _from: 'commits/7591',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L1-91',
              newLines: 1,
              newStart: 8,
              oldLines: 90,
              oldStart: 8,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 100,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 102,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L1-15',
              newLines: 1,
              newStart: 15,
              oldLines: 14,
              oldStart: 104,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L1-2',
              newLines: 1,
              newStart: 18,
              oldLines: 1,
              oldStart: 120,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/d73339adcb718393cf5a6f50f776bb6cd2a2d9ce/Makefile#L0-41',
              newLines: 0,
              newStart: 72,
              oldLines: 41,
              oldStart: 175,
            },
          ],
          stats: {
            additions: 5,
            deletions: 148,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7656',
          _from: 'commits/7614',
          _to: 'files/3488',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/pom.xml#L5-5',
              newLines: 5,
              newStart: 54,
              oldLines: 0,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7658',
          _from: 'commits/7614',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/Makefile#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/Makefile#L1-2',
              newLines: 1,
              newStart: 86,
              oldLines: 1,
              oldStart: 86,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7660',
          _from: 'commits/7614',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L1-1',
              newLines: 1,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L5-5',
              newLines: 5,
              newStart: 18,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L8-10',
              newLines: 8,
              newStart: 24,
              oldLines: 2,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 14,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7662',
          _from: 'commits/7614',
          _to: 'files/7632',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7664',
          _from: 'commits/7614',
          _to: 'files/5469',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L15-17',
              newLines: 15,
              newStart: 15,
              oldLines: 2,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L1-1',
              newLines: 1,
              newStart: 68,
              oldLines: 0,
              oldStart: 52,
            },
          ],
          stats: {
            additions: 18,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7666',
          _from: 'commits/7614',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/30333c42c89d88b8ab9b842eaf622034d6a3f41b/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L12-24',
              newLines: 12,
              newStart: 16,
              oldLines: 12,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 12,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7838',
          _from: 'commits/7744',
          _to: 'files/375',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/.gitignore#L0-1',
              newLines: 0,
              newStart: 47,
              oldLines: 1,
              oldStart: 48,
            },
          ],
          stats: {
            additions: 0,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7840',
          _from: 'commits/7744',
          _to: 'files/7377',
          lineCount: 56,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L56-56',
              newLines: 56,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 56,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7842',
          _from: 'commits/7744',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L1-2',
              newLines: 1,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L20-20',
              newLines: 20,
              newStart: 24,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 38,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L11-12',
              newLines: 11,
              newStart: 61,
              oldLines: 1,
              oldStart: 41,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/Makefile#L5-5',
              newLines: 5,
              newStart: 82,
              oldLines: 0,
              oldStart: 51,
            },
          ],
          stats: {
            additions: 39,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7844',
          _from: 'commits/7744',
          _to: 'files/7373',
          lineCount: 81,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java#L81-81',
              newLines: 81,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 81,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7846',
          _from: 'commits/7744',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L1-1',
              newLines: 1,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L5-5',
              newLines: 5,
              newStart: 18,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L8-10',
              newLines: 8,
              newStart: 24,
              oldLines: 2,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 14,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7848',
          _from: 'commits/7744',
          _to: 'files/7379',
          lineCount: 78,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L78-78',
              newLines: 78,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 78,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7850',
          _from: 'commits/7744',
          _to: 'files/3488',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/pom.xml#L5-5',
              newLines: 5,
              newStart: 54,
              oldLines: 0,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7852',
          _from: 'commits/7744',
          _to: 'files/5885',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L2-7',
              newLines: 2,
              newStart: 5,
              oldLines: 5,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L11-22',
              newLines: 11,
              newStart: 11,
              oldLines: 11,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 13,
            deletions: 17,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7854',
          _from: 'commits/7744',
          _to: 'files/7632',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7856',
          _from: 'commits/7744',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L12-24',
              newLines: 12,
              newStart: 16,
              oldLines: 12,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 12,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7858',
          _from: 'commits/7744',
          _to: 'files/5469',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L15-17',
              newLines: 15,
              newStart: 15,
              oldLines: 2,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L1-1',
              newLines: 1,
              newStart: 68,
              oldLines: 0,
              oldStart: 52,
            },
          ],
          stats: {
            additions: 18,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7860',
          _from: 'commits/7744',
          _to: 'files/7358',
          lineCount: 2,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/.env#L2-2',
              newLines: 2,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/7862',
          _from: 'commits/7744',
          _to: 'files/1229',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/package.json#L1-1',
              newLines: 1,
              newStart: 19,
              oldLines: 0,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7864',
          _from: 'commits/7744',
          _to: 'files/1265',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/EventLog.js#L45-52',
              newLines: 45,
              newStart: 7,
              oldLines: 7,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 46,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7866',
          _from: 'commits/7744',
          _to: 'files/1269',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/MapView.js#L8-9',
              newLines: 8,
              newStart: 34,
              oldLines: 1,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/MapView.js#L21-40',
              newLines: 21,
              newStart: 119,
              oldLines: 19,
              oldStart: 112,
            },
          ],
          stats: {
            additions: 29,
            deletions: 20,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/7868',
          _from: 'commits/7744',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L11-13',
              newLines: 11,
              newStart: 6,
              oldLines: 2,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L3-5',
              newLines: 3,
              newStart: 20,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L13-14',
              newLines: 13,
              newStart: 28,
              oldLines: 1,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 43,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L27-27',
              newLines: 27,
              newStart: 49,
              oldLines: 0,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L7-9',
              newLines: 7,
              newStart: 81,
              oldLines: 2,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/74b9803b33f6dae9d913594894edd59e69d39d89/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 96,
              oldLines: 1,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 64,
            deletions: 10,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8079',
          _from: 'commits/7944',
          _to: 'files/5610',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L0-74',
              newLines: 0,
              newStart: 0,
              oldLines: 74,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 74,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8081',
          _from: 'commits/7944',
          _to: 'files/5616',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L0-64',
              newLines: 0,
              newStart: 0,
              oldLines: 64,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 64,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8083',
          _from: 'commits/7944',
          _to: 'files/5612',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/LogController.java#L0-33',
              newLines: 0,
              newStart: 0,
              oldLines: 33,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 33,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8085',
          _from: 'commits/7944',
          _to: 'files/4448',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L0-52',
              newLines: 0,
              newStart: 0,
              oldLines: 52,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 52,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8087',
          _from: 'commits/7944',
          _to: 'files/2595',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8089',
          _from: 'commits/7944',
          _to: 'files/5618',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java#L0-18',
              newLines: 0,
              newStart: 0,
              oldLines: 18,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 18,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8091',
          _from: 'commits/7944',
          _to: 'files/5614',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8093',
          _from: 'commits/7944',
          _to: 'files/5620',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/WebClientConfig.java#L0-38',
              newLines: 0,
              newStart: 0,
              oldLines: 38,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 38,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8095',
          _from: 'commits/7944',
          _to: 'files/8004',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8097',
          _from: 'commits/7944',
          _to: 'files/8008',
          lineCount: 53,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L53-53',
              newLines: 53,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 53,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8099',
          _from: 'commits/7944',
          _to: 'files/8006',
          lineCount: 35,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L35-35',
              newLines: 35,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 35,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8101',
          _from: 'commits/7944',
          _to: 'files/8010',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8103',
          _from: 'commits/7944',
          _to: 'files/8021',
          lineCount: 16,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java#L16-16',
              newLines: 16,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 16,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8105',
          _from: 'commits/7944',
          _to: 'files/8012',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8107',
          _from: 'commits/7944',
          _to: 'files/8023',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8109',
          _from: 'commits/7944',
          _to: 'files/8018',
          lineCount: 21,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java#L21-21',
              newLines: 21,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 21,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8111',
          _from: 'commits/7944',
          _to: 'files/8014',
          lineCount: 52,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L52-52',
              newLines: 52,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 52,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8113',
          _from: 'commits/7944',
          _to: 'files/8016',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8115',
          _from: 'commits/7944',
          _to: 'files/5624',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L0-2',
              newLines: 0,
              newStart: 2,
              oldLines: 2,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8117',
          _from: 'commits/7944',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/resources/application.properties#L3-5',
              newLines: 3,
              newStart: 9,
              oldLines: 2,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/central-director/src/main/resources/application.properties#L5-9',
              newLines: 5,
              newStart: 13,
              oldLines: 4,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 11,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8119',
          _from: 'commits/7944',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c4db5320086c038bf885243480d345b2e5209d9e/k8s/central-director.yaml#L12-12',
              newLines: 12,
              newStart: 28,
              oldLines: 0,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8353',
          _from: 'commits/8275',
          _to: 'files/464',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8355',
          _from: 'commits/8275',
          _to: 'files/4283',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-73',
              newLines: 0,
              newStart: 0,
              oldLines: 73,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 73,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8357',
          _from: 'commits/8275',
          _to: 'files/5883',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/BreakController.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8359',
          _from: 'commits/8275',
          _to: 'files/4284',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L0-56',
              newLines: 0,
              newStart: 0,
              oldLines: 56,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 56,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8362',
          _from: 'commits/8275',
          _to: 'files/8315',
          lineCount: 30,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L30-30',
              newLines: 30,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 30,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8363',
          _from: 'commits/8275',
          _to: 'files/8317',
          lineCount: 16,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L16-16',
              newLines: 16,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 16,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8365',
          _from: 'commits/8275',
          _to: 'files/8313',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8367',
          _from: 'commits/8275',
          _to: 'files/8319',
          lineCount: 79,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L79-79',
              newLines: 79,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 79,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8369',
          _from: 'commits/8275',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/resources/application.properties#L6-6',
              newLines: 6,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/resources/application.properties#L2-4',
              newLines: 2,
              newStart: 11,
              oldLines: 2,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 11,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8371',
          _from: 'commits/8275',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8373',
          _from: 'commits/8275',
          _to: 'files/7379',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-1',
              newLines: 0,
              newStart: 7,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-3',
              newLines: 0,
              newStart: 8,
              oldLines: 3,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-2',
              newLines: 0,
              newStart: 13,
              oldLines: 2,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L1-2',
              newLines: 1,
              newStart: 67,
              oldLines: 1,
              oldStart: 71,
            },
          ],
          stats: {
            additions: 4,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8375',
          _from: 'commits/8275',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/29f348ebad60ccb3bae9f9dc45867ddd06637b04/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8504',
          _from: 'commits/8489',
          _to: 'files/7379',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe3a474f0000266a9f2aab887ce8adeffba2bd49/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L4-8',
              newLines: 4,
              newStart: 68,
              oldLines: 4,
              oldStart: 68,
            },
          ],
          stats: {
            additions: 4,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8573',
          _from: 'commits/8528',
          _to: 'files/8006',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L2-2',
              newLines: 2,
              newStart: 17,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L2-4',
              newLines: 2,
              newStart: 29,
              oldLines: 2,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-1',
              newLines: 1,
              newStart: 36,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L0-1',
              newLines: 0,
              newStart: 38,
              oldLines: 1,
              oldStart: 33,
            },
          ],
          stats: {
            additions: 10,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8575',
          _from: 'commits/8528',
          _to: 'files/8008',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L0-1',
              newLines: 0,
              newStart: 19,
              oldLines: 1,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L0-1',
              newLines: 0,
              newStart: 30,
              oldLines: 1,
              oldStart: 32,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8577',
          _from: 'commits/8528',
          _to: 'files/8010',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L3-3',
              newLines: 3,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 7,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L1-4',
              newLines: 1,
              newStart: 14,
              oldLines: 3,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L5-5',
              newLines: 5,
              newStart: 16,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 11,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8579',
          _from: 'commits/8528',
          _to: 'files/8016',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L2-2',
              newLines: 2,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L2-2',
              newLines: 2,
              newStart: 15,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-1',
              newLines: 1,
              newStart: 30,
              oldLines: 0,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8581',
          _from: 'commits/8528',
          _to: 'files/8012',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L2-2',
              newLines: 2,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 5,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8583',
          _from: 'commits/8528',
          _to: 'files/8014',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 7,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 18,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 30,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 37,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 41,
              oldLines: 1,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 43,
              oldLines: 0,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 45,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L6-11',
              newLines: 6,
              newStart: 49,
              oldLines: 5,
              oldStart: 41,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L8-11',
              newLines: 8,
              newStart: 56,
              oldLines: 3,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 24,
            deletions: 10,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8585',
          _from: 'commits/8528',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/79ef3978445de211b1a7f7e4b54b638a17c95b0d/central-director/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8639',
          _from: 'commits/8619',
          _to: 'files/8315',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L2-2',
              newLines: 2,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L3-4',
              newLines: 3,
              newStart: 31,
              oldLines: 1,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L0-1',
              newLines: 0,
              newStart: 34,
              oldLines: 1,
              oldStart: 28,
            },
          ],
          stats: {
            additions: 8,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8641',
          _from: 'commits/8619',
          _to: 'files/8317',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L3-3',
              newLines: 3,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L3-4',
              newLines: 3,
              newStart: 17,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0e78a876563b8aff9e19af0edfc462e8d73a28d0/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L0-1',
              newLines: 0,
              newStart: 20,
              oldLines: 1,
              oldStart: 14,
            },
          ],
          stats: {
            additions: 8,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8702',
          _from: 'commits/8667',
          _to: 'files/7166',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L3-3',
              newLines: 3,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 7,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L1-4',
              newLines: 1,
              newStart: 14,
              oldLines: 3,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L5-5',
              newLines: 5,
              newStart: 16,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 11,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8704',
          _from: 'commits/8667',
          _to: 'files/7168',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L2-2',
              newLines: 2,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L2-2',
              newLines: 2,
              newStart: 14,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L1-1',
              newLines: 1,
              newStart: 24,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L0-1',
              newLines: 0,
              newStart: 26,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 5,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8706',
          _from: 'commits/8667',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-2',
              newLines: 2,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-7',
              newLines: 1,
              newStart: 13,
              oldLines: 6,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-2',
              newLines: 2,
              newStart: 18,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-9',
              newLines: 3,
              newStart: 30,
              oldLines: 6,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 38,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L0-3',
              newLines: 0,
              newStart: 45,
              oldLines: 3,
              oldStart: 50,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-6',
              newLines: 3,
              newStart: 47,
              oldLines: 3,
              oldStart: 54,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L0-1',
              newLines: 0,
              newStart: 56,
              oldLines: 1,
              oldStart: 64,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 68,
              oldLines: 1,
              oldStart: 76,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 70,
              oldLines: 1,
              oldStart: 78,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L0-1',
              newLines: 0,
              newStart: 90,
              oldLines: 1,
              oldStart: 99,
            },
          ],
          stats: {
            additions: 14,
            deletions: 23,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8709',
          _from: 'commits/8667',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/distance-monitor/src/main/resources/application.properties#L9-13',
              newLines: 9,
              newStart: 4,
              oldLines: 4,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 10,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8710',
          _from: 'commits/8667',
          _to: 'files/2198',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fbb6fc446b4b04da60df9b186d577a751e5ee2f1/k8s/distance-monitor.yaml#L9-9',
              newLines: 9,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8817',
          _from: 'commits/8744',
          _to: 'files/6077',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8819',
          _from: 'commits/8744',
          _to: 'files/6079',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8821',
          _from: 'commits/8744',
          _to: 'files/2940',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8823',
          _from: 'commits/8744',
          _to: 'files/6081',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/WebClientConfig.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/8825',
          _from: 'commits/8744',
          _to: 'files/8784',
          lineCount: 39,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L39-39',
              newLines: 39,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 39,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8827',
          _from: 'commits/8744',
          _to: 'files/8786',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8829',
          _from: 'commits/8744',
          _to: 'files/8788',
          lineCount: 37,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L37-37',
              newLines: 37,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 37,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8831',
          _from: 'commits/8744',
          _to: 'files/8782',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/8833',
          _from: 'commits/8744',
          _to: 'files/2927',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/resources/application.properties#L3-5',
              newLines: 3,
              newStart: 4,
              oldLines: 2,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/emergency-brake/src/main/resources/application.properties#L2-2',
              newLines: 2,
              newStart: 8,
              oldLines: 0,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 6,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8835',
          _from: 'commits/8744',
          _to: 'files/6064',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/k8s/emergency-brake-vehicle-1.yaml#L0-2',
              newLines: 0,
              newStart: 19,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/k8s/emergency-brake-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/8837',
          _from: 'commits/8744',
          _to: 'files/6062',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/k8s/emergency-brake-vehicle-2.yaml#L0-2',
              newLines: 0,
              newStart: 19,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/5abbea24efa39d1b6d37fe9670b7acdec78fcdf2/k8s/emergency-brake-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/9067',
          _from: 'commits/8939',
          _to: 'files/4962',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/k8s/location-sender-vehicle-1.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/9069',
          _from: 'commits/8939',
          _to: 'files/4964',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/k8s/location-sender-vehicle-2.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/9071',
          _from: 'commits/8939',
          _to: 'files/8999',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9073',
          _from: 'commits/8939',
          _to: 'files/9007',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9075',
          _from: 'commits/8939',
          _to: 'files/9009',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9077',
          _from: 'commits/8939',
          _to: 'files/9011',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9079',
          _from: 'commits/8939',
          _to: 'files/9013',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocation.java#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9081',
          _from: 'commits/8939',
          _to: 'files/5165',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/dev/wo/location_sender/LocationController.java#L0-43',
              newLines: 0,
              newStart: 0,
              oldLines: 43,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 43,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9083',
          _from: 'commits/8939',
          _to: 'files/9015',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9085',
          _from: 'commits/8939',
          _to: 'files/778',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/dev/wo/location_sender/LocationSenderApplication.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9087',
          _from: 'commits/8939',
          _to: 'files/4982',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/dev/wo/location_sender/RabbitMQConfig.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9089',
          _from: 'commits/8939',
          _to: 'files/4984',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L0-53',
              newLines: 0,
              newStart: 0,
              oldLines: 53,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 53,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9091',
          _from: 'commits/8939',
          _to: 'files/774',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/java/dev/wo/location_sender/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9095',
          _from: 'commits/8939',
          _to: 'files/765',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/resources/application.properties#L5-5',
              newLines: 5,
              newStart: 4,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/main/resources/application.properties#L5-11',
              newLines: 5,
              newStart: 11,
              oldLines: 6,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 11,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/9094',
          _from: 'commits/8939',
          _to: 'files/9005',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationSenderApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9097',
          _from: 'commits/8939',
          _to: 'files/9001',
          lineCount: 1,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationControllerTest.java#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9099',
          _from: 'commits/8939',
          _to: 'files/9003',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/at/tuwien/dse/location_sender/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9101',
          _from: 'commits/8939',
          _to: 'files/7373',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java#L0-81',
              newLines: 0,
              newStart: 0,
              oldLines: 81,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 81,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9103',
          _from: 'commits/8939',
          _to: 'files/776',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/dev/wo/location_sender/LocationSenderApplicationTests.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9105',
          _from: 'commits/8939',
          _to: 'files/1100',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/89d11b84802a01be3f477b90bc9838142a01be3e/location-sender/src/test/java/dev/wo/location_sender/PingControllerTest.java#L0-23',
              newLines: 0,
              newStart: 0,
              oldLines: 23,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 23,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9425',
          _from: 'commits/9307',
          _to: 'files/1738',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/k8s/location-tracker.yaml#L8-8',
              newLines: 8,
              newStart: 28,
              oldLines: 0,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/9427',
          _from: 'commits/9307',
          _to: 'files/3841',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationDocument.java#L0-48',
              newLines: 0,
              newStart: 0,
              oldLines: 48,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 48,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9429',
          _from: 'commits/9307',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L0-42',
              newLines: 0,
              newStart: 0,
              oldLines: 42,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 42,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9431',
          _from: 'commits/9307',
          _to: 'files/3845',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9433',
          _from: 'commits/9307',
          _to: 'files/3849',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessage.java#L0-55',
              newLines: 0,
              newStart: 0,
              oldLines: 55,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 55,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9435',
          _from: 'commits/9307',
          _to: 'files/3852',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9437',
          _from: 'commits/9307',
          _to: 'files/3843',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java#L0-18',
              newLines: 0,
              newStart: 0,
              oldLines: 18,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 18,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9439',
          _from: 'commits/9307',
          _to: 'files/9363',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9441',
          _from: 'commits/9307',
          _to: 'files/1778',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/9443',
          _from: 'commits/9307',
          _to: 'files/9373',
          lineCount: 30,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L30-30',
              newLines: 30,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 30,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9445',
          _from: 'commits/9307',
          _to: 'files/9375',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9447',
          _from: 'commits/9307',
          _to: 'files/9361',
          lineCount: 15,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java#L15-15',
              newLines: 15,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 15,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9449',
          _from: 'commits/9307',
          _to: 'files/9365',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9451',
          _from: 'commits/9307',
          _to: 'files/9378',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9453',
          _from: 'commits/9307',
          _to: 'files/9369',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9455',
          _from: 'commits/9307',
          _to: 'files/9367',
          lineCount: 21,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L21-21',
              newLines: 21,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 21,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9457',
          _from: 'commits/9307',
          _to: 'files/9371',
          lineCount: 32,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L32-32',
              newLines: 32,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 32,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/9459',
          _from: 'commits/9307',
          _to: 'files/1761',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/resources/application.properties#L6-6',
              newLines: 6,
              newStart: 3,
              oldLines: 0,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/0f201eb72206070f97987169170b5b3b26af8af4/location-tracker/src/main/resources/application.properties#L5-9',
              newLines: 5,
              newStart: 13,
              oldLines: 4,
              oldStart: 6,
            },
          ],
          stats: {
            additions: 12,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11558',
          _from: 'commits/9611',
          _to: 'files/3472',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/k8s/passenger-gateway.yaml#L7-7',
              newLines: 7,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11560',
          _from: 'commits/9611',
          _to: 'files/5885',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L0-24',
              newLines: 0,
              newStart: 0,
              oldLines: 24,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 24,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11562',
          _from: 'commits/9611',
          _to: 'files/4758',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L0-37',
              newLines: 0,
              newStart: 0,
              oldLines: 37,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 37,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11564',
          _from: 'commits/9611',
          _to: 'files/4756',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/DistanceMonitorService.java#L0-24',
              newLines: 0,
              newStart: 0,
              oldLines: 24,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 24,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11566',
          _from: 'commits/9611',
          _to: 'files/7632',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11568',
          _from: 'commits/9611',
          _to: 'files/5469',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L0-69',
              newLines: 0,
              newStart: 0,
              oldLines: 69,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 69,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11570',
          _from: 'commits/9611',
          _to: 'files/4754',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L0-39',
              newLines: 0,
              newStart: 0,
              oldLines: 39,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 39,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11572',
          _from: 'commits/9611',
          _to: 'files/5471',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationsController.java#L0-33',
              newLines: 0,
              newStart: 0,
              oldLines: 33,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 33,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11574',
          _from: 'commits/9611',
          _to: 'files/5785',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogMessage.java#L0-60',
              newLines: 0,
              newStart: 0,
              oldLines: 60,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 60,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11576',
          _from: 'commits/9611',
          _to: 'files/5783',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java#L0-30',
              newLines: 0,
              newStart: 0,
              oldLines: 30,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 30,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11578',
          _from: 'commits/9611',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L0-3',
              newLines: 0,
              newStart: 4,
              oldLines: 3,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L0-13',
              newLines: 0,
              newStart: 12,
              oldLines: 13,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 0,
            deletions: 16,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11580',
          _from: 'commits/9611',
          _to: 'files/3523',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L0-53',
              newLines: 0,
              newStart: 0,
              oldLines: 53,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 53,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11582',
          _from: 'commits/9611',
          _to: 'files/4173',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java#L0-17',
              newLines: 0,
              newStart: 0,
              oldLines: 17,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 17,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11584',
          _from: 'commits/9611',
          _to: 'files/11426',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11586',
          _from: 'commits/9611',
          _to: 'files/11502',
          lineCount: 17,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java#L17-17',
              newLines: 17,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11588',
          _from: 'commits/9611',
          _to: 'files/4777',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L0-1',
              newLines: 0,
              newStart: 15,
              oldLines: 1,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L0-1',
              newLines: 0,
              newStart: 26,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L0-1',
              newLines: 0,
              newStart: 37,
              oldLines: 1,
              oldStart: 40,
            },
          ],
          stats: {
            additions: 0,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11590',
          _from: 'commits/9611',
          _to: 'files/11454',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11592',
          _from: 'commits/9611',
          _to: 'files/11428',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11594',
          _from: 'commits/9611',
          _to: 'files/11452',
          lineCount: 65,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L65-65',
              newLines: 65,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 65,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11596',
          _from: 'commits/9611',
          _to: 'files/11457',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11598',
          _from: 'commits/9611',
          _to: 'files/11459',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LogMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11600',
          _from: 'commits/9611',
          _to: 'files/11432',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11602',
          _from: 'commits/9611',
          _to: 'files/11505',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DistanceMonitorService.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11604',
          _from: 'commits/9611',
          _to: 'files/11450',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/LocationTrackerService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11606',
          _from: 'commits/9611',
          _to: 'files/3513',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d5268b32e72e8d9eca411c3cb0ae74657f6a89d2/passenger-gateway/src/main/resources/application.properties#L8-11',
              newLines: 8,
              newStart: 4,
              oldLines: 3,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 9,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11786',
          _from: 'commits/11736',
          _to: 'files/8023',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11788',
          _from: 'commits/11736',
          _to: 'files/8021',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java#L2-3',
              newLines: 2,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11790',
          _from: 'commits/11736',
          _to: 'files/8008',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11792',
          _from: 'commits/11736',
          _to: 'files/8014',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 23,
              oldLines: 2,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11794',
          _from: 'commits/11736',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/main/resources/application.properties#L2-5',
              newLines: 2,
              newStart: 11,
              oldLines: 3,
              oldStart: 14,
            },
          ],
          stats: {
            additions: 2,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11796',
          _from: 'commits/11736',
          _to: 'files/6858',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11799',
          _from: 'commits/11736',
          _to: 'files/2601',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/central-director/src/test/java/at/tuwien/dse/central_director/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11800',
          _from: 'commits/11736',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bcd2432977c2048491012b83542cbb0587f505ef/k8s/central-director.yaml#L1-2',
              newLines: 1,
              newStart: 31,
              oldLines: 1,
              oldStart: 31,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11874',
          _from: 'commits/11850',
          _to: 'files/3815',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/baadab8047ec6dfb8608eae8687149e295782cb3/mongodb/docker-compose.yml#L13-13',
              newLines: 13,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 13,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/11872',
          _from: 'commits/11850',
          _to: 'files/11862',
          lineCount: 64,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/baadab8047ec6dfb8608eae8687149e295782cb3/mongodb/rabbitmq-definitions.json#L64-64',
              newLines: 64,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 64,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11921',
          _from: 'commits/11894',
          _to: 'files/8004',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f7f87f2f877ce4f3f6dc6eced241f7a7e1be6a8d/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/11923',
          _from: 'commits/11894',
          _to: 'files/11909',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f7f87f2f877ce4f3f6dc6eced241f7a7e1be6a8d/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/11925',
          _from: 'commits/11894',
          _to: 'files/8012',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f7f87f2f877ce4f3f6dc6eced241f7a7e1be6a8d/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f7f87f2f877ce4f3f6dc6eced241f7a7e1be6a8d/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12035',
          _from: 'commits/11995',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12037',
          _from: 'commits/11995',
          _to: 'files/443',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/pom.xml#L37-73',
              newLines: 37,
              newStart: 3,
              oldLines: 36,
              oldStart: 3,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/pom.xml#L5-10',
              newLines: 5,
              newStart: 41,
              oldLines: 5,
              oldStart: 40,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/pom.xml#L10-20',
              newLines: 10,
              newStart: 47,
              oldLines: 10,
              oldStart: 46,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/pom.xml#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 57,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/pom.xml#L8-16',
              newLines: 8,
              newStart: 60,
              oldLines: 8,
              oldStart: 59,
            },
          ],
          stats: {
            additions: 61,
            deletions: 60,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12039',
          _from: 'commits/11995',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L3-6',
              newLines: 3,
              newStart: 21,
              oldLines: 3,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L3-6',
              newLines: 3,
              newStart: 25,
              oldLines: 3,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 29,
              oldLines: 2,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 32,
              oldLines: 2,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L6-12',
              newLines: 6,
              newStart: 35,
              oldLines: 6,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 42,
              oldLines: 2,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-18',
              newLines: 1,
              newStart: 45,
              oldLines: 17,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L4-7',
              newLines: 4,
              newStart: 48,
              oldLines: 3,
              oldStart: 64,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L3-4',
              newLines: 3,
              newStart: 53,
              oldLines: 1,
              oldStart: 68,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L19-24',
              newLines: 19,
              newStart: 57,
              oldLines: 5,
              oldStart: 70,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L0-1',
              newLines: 0,
              newStart: 76,
              oldLines: 1,
              oldStart: 76,
            },
          ],
          stats: {
            additions: 47,
            deletions: 47,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12041',
          _from: 'commits/11995',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 7,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 0,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12043',
          _from: 'commits/11995',
          _to: 'files/7377',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 23,
              oldLines: 1,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 39,
              oldLines: 1,
              oldStart: 39,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 44,
              oldLines: 1,
              oldStart: 44,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 46,
              oldLines: 1,
              oldStart: 46,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L2-4',
              newLines: 2,
              newStart: 48,
              oldLines: 2,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 51,
              oldLines: 1,
              oldStart: 51,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 53,
              oldLines: 1,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 12,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12045',
          _from: 'commits/11995',
          _to: 'files/1021',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7d0c8bbc0aa39a8c87eadee9da7364271c0366f5/data-mock/src/test/java/at/tuwien/dse/data_mock/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12144',
          _from: 'commits/12087',
          _to: 'files/12107',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/12146',
          _from: 'commits/12087',
          _to: 'files/2200',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/pom.xml#L1-2',
              newLines: 1,
              newStart: 43,
              oldLines: 1,
              oldStart: 43,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12148',
          _from: 'commits/12087',
          _to: 'files/7164',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitConfig.java#L0-29',
              newLines: 0,
              newStart: 0,
              oldLines: 29,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 29,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/12150',
          _from: 'commits/12087',
          _to: 'files/7168',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12152',
          _from: 'commits/12087',
          _to: 'files/7172',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12154',
          _from: 'commits/12087',
          _to: 'files/7174',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12156',
          _from: 'commits/12087',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-4',
              newLines: 2,
              newStart: 66,
              oldLines: 2,
              oldStart: 66,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12158',
          _from: 'commits/12087',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12160',
          _from: 'commits/12087',
          _to: 'files/2234',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/ffe2e0f084f7cd668b09460595e1c43aa15ebf65/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12288',
          _from: 'commits/12248',
          _to: 'files/2927',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 7,
              oldLines: 1,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12290',
          _from: 'commits/12248',
          _to: 'files/7060',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12292',
          _from: 'commits/12248',
          _to: 'files/8788',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12294',
          _from: 'commits/12248',
          _to: 'files/2949',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12296',
          _from: 'commits/12248',
          _to: 'files/6064',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/k8s/emergency-brake-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12298',
          _from: 'commits/12248',
          _to: 'files/6062',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d3fa1eabd9ee977653ef2c9ebabda44b992bb90c/k8s/emergency-brake-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12391',
          _from: 'commits/12340',
          _to: 'files/750',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/pom.xml#L2-3',
              newLines: 2,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12393',
          _from: 'commits/12340',
          _to: 'files/9013',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocation.java#L0-5',
              newLines: 0,
              newStart: 0,
              oldLines: 5,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 5,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/12395',
          _from: 'commits/12340',
          _to: 'files/9009',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12397',
          _from: 'commits/12340',
          _to: 'files/12363',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/12399',
          _from: 'commits/12340',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L2-4',
              newLines: 2,
              newStart: 23,
              oldLines: 2,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12401',
          _from: 'commits/12340',
          _to: 'files/765',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 7,
              oldLines: 1,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 0,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12403',
          _from: 'commits/12340',
          _to: 'files/9003',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8b5ff72882f19156073b0ab246414e028fdc7aab/location-sender/src/test/java/at/tuwien/dse/location_sender/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12541',
          _from: 'commits/12489',
          _to: 'files/9363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/12543',
          _from: 'commits/12489',
          _to: 'files/12506',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/12545',
          _from: 'commits/12489',
          _to: 'files/1780',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java#L3-6',
              newLines: 3,
              newStart: 9,
              oldLines: 3,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12547',
          _from: 'commits/12489',
          _to: 'files/9365',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12549',
          _from: 'commits/12489',
          _to: 'files/1761',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 9,
              oldLines: 1,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 0,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12551',
          _from: 'commits/12489',
          _to: 'files/9378',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12553',
          _from: 'commits/12489',
          _to: 'files/1776',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/test/java/at/tuwien/dse/location_tracker/LocationTrackerApplicationTests.java#L3-6',
              newLines: 3,
              newStart: 9,
              oldLines: 3,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12555',
          _from: 'commits/12489',
          _to: 'files/1772',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4bcb64d55e51856c486d5500737823bf89d50def/location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12681',
          _from: 'commits/12641',
          _to: 'files/4777',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 26,
              oldLines: 1,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12683',
          _from: 'commits/12641',
          _to: 'files/3513',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/resources/application.properties#L0-1',
              newLines: 0,
              newStart: 5,
              oldLines: 1,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12685',
          _from: 'commits/12641',
          _to: 'files/11426',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12687',
          _from: 'commits/12641',
          _to: 'files/6941',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LocationsControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12689',
          _from: 'commits/12641',
          _to: 'files/6939',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LogsControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12691',
          _from: 'commits/12641',
          _to: 'files/3516',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e622c9329a2d9b6e35518101b43071d3da8debf2/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 35,
              oldLines: 1,
              oldStart: 35,
            },
          ],
          stats: {
            additions: 4,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12746',
          _from: 'commits/12731',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/636468fe7553187a14bca2958de8b6e7f75ea9eb/Makefile#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/636468fe7553187a14bca2958de8b6e7f75ea9eb/Makefile#L2-5',
              newLines: 2,
              newStart: 61,
              oldLines: 3,
              oldStart: 61,
            },
          ],
          stats: {
            additions: 3,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12769',
          _from: 'commits/12754',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/9d42410a4312e126baa7390de390b0fc402523ef/Makefile#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/9d42410a4312e126baa7390de390b0fc402523ef/Makefile#L3-5',
              newLines: 3,
              newStart: 61,
              oldLines: 2,
              oldStart: 61,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/9d42410a4312e126baa7390de390b0fc402523ef/Makefile#L1-2',
              newLines: 1,
              newStart: 86,
              oldLines: 1,
              oldStart: 85,
            },
          ],
          stats: {
            additions: 5,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12792',
          _from: 'commits/12777',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/af6df3bc02b7557449f79bd557c9bc95d2204d70/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 13,
              oldLines: 2,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/12825',
          _from: 'commits/12806',
          _to: 'files/1187',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/0fcd849e5f07c65756d3d5258aa0fa9631298c8d/Makefile#L1-2',
              newLines: 1,
              newStart: 63,
              oldLines: 1,
              oldStart: 63,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/0fcd849e5f07c65756d3d5258aa0fa9631298c8d/Makefile#L1-2',
              newLines: 1,
              newStart: 86,
              oldLines: 1,
              oldStart: 86,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13542',
          _from: 'commits/12833',
          _to: 'files/5616',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessageConsumer.java#L0-64',
              newLines: 0,
              newStart: 0,
              oldLines: 64,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 64,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13544',
          _from: 'commits/12833',
          _to: 'files/5610',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/DistanceMessage.java#L0-74',
              newLines: 0,
              newStart: 0,
              oldLines: 74,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 74,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13546',
          _from: 'commits/12833',
          _to: 'files/5612',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/LogController.java#L0-33',
              newLines: 0,
              newStart: 0,
              oldLines: 33,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 33,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13548',
          _from: 'commits/12833',
          _to: 'files/4448',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/LogDocument.java#L0-52',
              newLines: 0,
              newStart: 0,
              oldLines: 52,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 52,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13550',
          _from: 'commits/12833',
          _to: 'files/5618',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/LogRepository.java#L0-18',
              newLines: 0,
              newStart: 0,
              oldLines: 18,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 18,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13552',
          _from: 'commits/12833',
          _to: 'files/2595',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13554',
          _from: 'commits/12833',
          _to: 'files/5614',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13556',
          _from: 'commits/12833',
          _to: 'files/8008',
          lineCount: 51,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L51-51',
              newLines: 51,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 51,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13558',
          _from: 'commits/12833',
          _to: 'files/5620',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/WebClientConfig.java#L0-38',
              newLines: 0,
              newStart: 0,
              oldLines: 38,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 38,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13560',
          _from: 'commits/12833',
          _to: 'files/11909',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13562',
          _from: 'commits/12833',
          _to: 'files/8006',
          lineCount: 40,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L40-40',
              newLines: 40,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 40,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13564',
          _from: 'commits/12833',
          _to: 'files/8021',
          lineCount: 17,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java#L17-17',
              newLines: 17,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13566',
          _from: 'commits/12833',
          _to: 'files/8010',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13568',
          _from: 'commits/12833',
          _to: 'files/8023',
          lineCount: 7,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java#L7-7',
              newLines: 7,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13570',
          _from: 'commits/12833',
          _to: 'files/8012',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13572',
          _from: 'commits/12833',
          _to: 'files/8018',
          lineCount: 21,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java#L21-21',
              newLines: 21,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 21,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13574',
          _from: 'commits/12833',
          _to: 'files/8016',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13577',
          _from: 'commits/12833',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 3,
              oldLines: 0,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/resources/application.properties#L8-16',
              newLines: 8,
              newStart: 10,
              oldLines: 8,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 13,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13578',
          _from: 'commits/12833',
          _to: 'files/8014',
          lineCount: 65,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L65-65',
              newLines: 65,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 65,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13580',
          _from: 'commits/12833',
          _to: 'files/6858',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/test/java/at/tuwien/dse/central_director/LogControllerTest.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13582',
          _from: 'commits/12833',
          _to: 'files/5624',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L0-2',
              newLines: 0,
              newStart: 2,
              oldLines: 2,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13584',
          _from: 'commits/12833',
          _to: 'files/2601',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/central-director/src/test/java/at/tuwien/dse/central_director/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13586',
          _from: 'commits/12833',
          _to: 'files/443',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/pom.xml#L37-73',
              newLines: 37,
              newStart: 3,
              oldLines: 36,
              oldStart: 3,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/pom.xml#L5-10',
              newLines: 5,
              newStart: 41,
              oldLines: 5,
              oldStart: 40,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/pom.xml#L10-20',
              newLines: 10,
              newStart: 47,
              oldLines: 10,
              oldStart: 46,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/pom.xml#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 57,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/pom.xml#L8-16',
              newLines: 8,
              newStart: 60,
              oldLines: 8,
              oldStart: 59,
            },
          ],
          stats: {
            additions: 61,
            deletions: 60,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13588',
          _from: 'commits/12833',
          _to: 'files/5883',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/BreakController.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13590',
          _from: 'commits/12833',
          _to: 'files/4283',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/GpsMockService.java#L0-73',
              newLines: 0,
              newStart: 0,
              oldLines: 73,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 73,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13592',
          _from: 'commits/12833',
          _to: 'files/464',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13594',
          _from: 'commits/12833',
          _to: 'files/4284',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/VehicleLocation.java#L0-56',
              newLines: 0,
              newStart: 0,
              oldLines: 56,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 56,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13596',
          _from: 'commits/12833',
          _to: 'files/8315',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13598',
          _from: 'commits/12833',
          _to: 'files/8317',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13600',
          _from: 'commits/12833',
          _to: 'files/8313',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13602',
          _from: 'commits/12833',
          _to: 'files/8319',
          lineCount: 79,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L79-79',
              newLines: 79,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 79,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13604',
          _from: 'commits/12833',
          _to: 'files/7377',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 23,
              oldLines: 1,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 39,
              oldLines: 1,
              oldStart: 39,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 44,
              oldLines: 1,
              oldStart: 44,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 46,
              oldLines: 1,
              oldStart: 46,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L2-4',
              newLines: 2,
              newStart: 48,
              oldLines: 2,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 51,
              oldLines: 1,
              oldStart: 51,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L1-2',
              newLines: 1,
              newStart: 53,
              oldLines: 1,
              oldStart: 53,
            },
          ],
          stats: {
            additions: 12,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13606',
          _from: 'commits/12833',
          _to: 'files/455',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/resources/application.properties#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/main/resources/application.properties#L4-9',
              newLines: 4,
              newStart: 8,
              oldLines: 5,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 9,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13608',
          _from: 'commits/12833',
          _to: 'files/7379',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L2-2',
              newLines: 2,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-1',
              newLines: 0,
              newStart: 7,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-3',
              newLines: 0,
              newStart: 8,
              oldLines: 3,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L0-2',
              newLines: 0,
              newStart: 13,
              oldLines: 2,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L5-10',
              newLines: 5,
              newStart: 67,
              oldLines: 5,
              oldStart: 71,
            },
          ],
          stats: {
            additions: 8,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13610',
          _from: 'commits/12833',
          _to: 'files/1021',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/data-mock/src/test/java/at/tuwien/dse/data_mock/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13612',
          _from: 'commits/12833',
          _to: 'files/2200',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/pom.xml#L1-2',
              newLines: 1,
              newStart: 43,
              oldLines: 1,
              oldStart: 43,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13614',
          _from: 'commits/12833',
          _to: 'files/6295',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessage.java#L0-55',
              newLines: 0,
              newStart: 0,
              oldLines: 55,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 55,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13616',
          _from: 'commits/12833',
          _to: 'files/6299',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMessage.java#L0-75',
              newLines: 0,
              newStart: 0,
              oldLines: 75,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 75,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13618',
          _from: 'commits/12833',
          _to: 'files/6291',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/LocationMessageConsumer.java#L0-95',
              newLines: 0,
              newStart: 0,
              oldLines: 95,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 95,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13620',
          _from: 'commits/12833',
          _to: 'files/2237',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13622',
          _from: 'commits/12833',
          _to: 'files/6293',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/RabbitConfig.java#L0-31',
              newLines: 0,
              newStart: 0,
              oldLines: 31,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 31,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13624',
          _from: 'commits/12833',
          _to: 'files/12107',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13626',
          _from: 'commits/12833',
          _to: 'files/7166',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13628',
          _from: 'commits/12833',
          _to: 'files/7168',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13630',
          _from: 'commits/12833',
          _to: 'files/7174',
          lineCount: 7,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java#L7-7',
              newLines: 7,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13632',
          _from: 'commits/12833',
          _to: 'files/7172',
          lineCount: 7,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java#L7-7',
              newLines: 7,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13634',
          _from: 'commits/12833',
          _to: 'files/7170',
          lineCount: 92,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L92-92',
              newLines: 92,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 92,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13636',
          _from: 'commits/12833',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/main/resources/application.properties#L8-13',
              newLines: 8,
              newStart: 3,
              oldLines: 5,
              oldStart: 2,
            },
          ],
          stats: {
            additions: 9,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13638',
          _from: 'commits/12833',
          _to: 'files/6077',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/DataMockService.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13640',
          _from: 'commits/12833',
          _to: 'files/2234',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/distance-monitor/src/test/java/at/tuwien/dse/distance_monitor/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13642',
          _from: 'commits/12833',
          _to: 'files/6079',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeController.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13644',
          _from: 'commits/12833',
          _to: 'files/2940',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13646',
          _from: 'commits/12833',
          _to: 'files/6081',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/WebClientConfig.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13648',
          _from: 'commits/12833',
          _to: 'files/8786',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13650',
          _from: 'commits/12833',
          _to: 'files/8784',
          lineCount: 39,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L39-39',
              newLines: 39,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 39,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13652',
          _from: 'commits/12833',
          _to: 'files/8782',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13654',
          _from: 'commits/12833',
          _to: 'files/8788',
          lineCount: 37,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L37-37',
              newLines: 37,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 37,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13656',
          _from: 'commits/12833',
          _to: 'files/2927',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/main/resources/application.properties#L5-9',
              newLines: 5,
              newStart: 3,
              oldLines: 4,
              oldStart: 2,
            },
          ],
          stats: {
            additions: 6,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13658',
          _from: 'commits/12833',
          _to: 'files/7060',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/EmergencyBrakeControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13660',
          _from: 'commits/12833',
          _to: 'files/2949',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/emergency-brake/src/test/java/at/tuwien/dse/emergency_brake/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13662',
          _from: 'commits/12833',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/central-director.yaml#L12-12',
              newLines: 12,
              newStart: 28,
              oldLines: 0,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13664',
          _from: 'commits/12833',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13666',
          _from: 'commits/12833',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13668',
          _from: 'commits/12833',
          _to: 'files/2198',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/distance-monitor.yaml#L9-9',
              newLines: 9,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13670',
          _from: 'commits/12833',
          _to: 'files/6064',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/emergency-brake-vehicle-1.yaml#L0-2',
              newLines: 0,
              newStart: 19,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/emergency-brake-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13672',
          _from: 'commits/12833',
          _to: 'files/6062',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/emergency-brake-vehicle-2.yaml#L0-2',
              newLines: 0,
              newStart: 19,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/emergency-brake-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13674',
          _from: 'commits/12833',
          _to: 'files/4964',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/location-sender-vehicle-2.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13676',
          _from: 'commits/12833',
          _to: 'files/4962',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/location-sender-vehicle-1.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13679',
          _from: 'commits/12833',
          _to: 'files/1738',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/location-tracker.yaml#L8-8',
              newLines: 8,
              newStart: 28,
              oldLines: 0,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13680',
          _from: 'commits/12833',
          _to: 'files/750',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/pom.xml#L2-3',
              newLines: 2,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13682',
          _from: 'commits/12833',
          _to: 'files/3472',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/k8s/passenger-gateway.yaml#L7-7',
              newLines: 7,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13684',
          _from: 'commits/12833',
          _to: 'files/8999',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13686',
          _from: 'commits/12833',
          _to: 'files/9009',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13688',
          _from: 'commits/12833',
          _to: 'files/9007',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13690',
          _from: 'commits/12833',
          _to: 'files/9011',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13692',
          _from: 'commits/12833',
          _to: 'files/12363',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13694',
          _from: 'commits/12833',
          _to: 'files/9015',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13696',
          _from: 'commits/12833',
          _to: 'files/5165',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/dev/wo/location_sender/LocationController.java#L0-43',
              newLines: 0,
              newStart: 0,
              oldLines: 43,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 43,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13698',
          _from: 'commits/12833',
          _to: 'files/774',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/dev/wo/location_sender/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13700',
          _from: 'commits/12833',
          _to: 'files/778',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/dev/wo/location_sender/LocationSenderApplication.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13702',
          _from: 'commits/12833',
          _to: 'files/4982',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/dev/wo/location_sender/RabbitMQConfig.java#L0-26',
              newLines: 0,
              newStart: 0,
              oldLines: 26,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 26,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13704',
          _from: 'commits/12833',
          _to: 'files/4984',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/java/dev/wo/location_sender/VehicleLocation.java#L0-53',
              newLines: 0,
              newStart: 0,
              oldLines: 53,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 53,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13706',
          _from: 'commits/12833',
          _to: 'files/765',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/resources/application.properties#L4-5',
              newLines: 4,
              newStart: 3,
              oldLines: 1,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/main/resources/application.properties#L5-12',
              newLines: 5,
              newStart: 8,
              oldLines: 7,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 10,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13708',
          _from: 'commits/12833',
          _to: 'files/9001',
          lineCount: 1,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationControllerTest.java#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13710',
          _from: 'commits/12833',
          _to: 'files/9003',
          lineCount: 23,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/at/tuwien/dse/location_sender/PingControllerTest.java#L23-23',
              newLines: 23,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13713',
          _from: 'commits/12833',
          _to: 'files/9005',
          lineCount: 14,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/at/tuwien/dse/location_sender/LocationSenderApplicationTests.java#L14-14',
              newLines: 14,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 14,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13714',
          _from: 'commits/12833',
          _to: 'files/7373',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/dev/wo/location_sender/LocationControllerTest.java#L0-81',
              newLines: 0,
              newStart: 0,
              oldLines: 81,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 81,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13716',
          _from: 'commits/12833',
          _to: 'files/776',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/dev/wo/location_sender/LocationSenderApplicationTests.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13718',
          _from: 'commits/12833',
          _to: 'files/1100',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-sender/src/test/java/dev/wo/location_sender/PingControllerTest.java#L0-23',
              newLines: 0,
              newStart: 0,
              oldLines: 23,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 23,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13720',
          _from: 'commits/12833',
          _to: 'files/3847',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationController.java#L0-42',
              newLines: 0,
              newStart: 0,
              oldLines: 42,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 42,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13722',
          _from: 'commits/12833',
          _to: 'files/3841',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationDocument.java#L0-48',
              newLines: 0,
              newStart: 0,
              oldLines: 48,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 48,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13724',
          _from: 'commits/12833',
          _to: 'files/3849',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessage.java#L0-55',
              newLines: 0,
              newStart: 0,
              oldLines: 55,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 55,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13726',
          _from: 'commits/12833',
          _to: 'files/3845',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationMessageConsumer.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13728',
          _from: 'commits/12833',
          _to: 'files/3843',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationRepository.java#L0-18',
              newLines: 0,
              newStart: 0,
              oldLines: 18,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 18,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13730',
          _from: 'commits/12833',
          _to: 'files/1780',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java#L3-6',
              newLines: 3,
              newStart: 9,
              oldLines: 3,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13732',
          _from: 'commits/12833',
          _to: 'files/1778',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/PingController.java#L0-14',
              newLines: 0,
              newStart: 0,
              oldLines: 14,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 14,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13734',
          _from: 'commits/12833',
          _to: 'files/3852',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/RabbitConfig.java#L0-27',
              newLines: 0,
              newStart: 0,
              oldLines: 27,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 27,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13736',
          _from: 'commits/12833',
          _to: 'files/12506',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13738',
          _from: 'commits/12833',
          _to: 'files/9373',
          lineCount: 30,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L30-30',
              newLines: 30,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 30,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13740',
          _from: 'commits/12833',
          _to: 'files/9375',
          lineCount: 22,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java#L22-22',
              newLines: 22,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13742',
          _from: 'commits/12833',
          _to: 'files/9361',
          lineCount: 15,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java#L15-15',
              newLines: 15,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 15,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13744',
          _from: 'commits/12833',
          _to: 'files/9365',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13746',
          _from: 'commits/12833',
          _to: 'files/9378',
          lineCount: 7,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java#L7-7',
              newLines: 7,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13749',
          _from: 'commits/12833',
          _to: 'files/9367',
          lineCount: 21,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L21-21',
              newLines: 21,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 21,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13750',
          _from: 'commits/12833',
          _to: 'files/9369',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13752',
          _from: 'commits/12833',
          _to: 'files/9371',
          lineCount: 32,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L32-32',
              newLines: 32,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 32,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13756',
          _from: 'commits/12833',
          _to: 'files/1761',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/resources/application.properties#L4-4',
              newLines: 4,
              newStart: 3,
              oldLines: 0,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/main/resources/application.properties#L5-10',
              newLines: 5,
              newStart: 10,
              oldLines: 5,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 10,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13755',
          _from: 'commits/12833',
          _to: 'files/1776',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/test/java/at/tuwien/dse/location_tracker/LocationTrackerApplicationTests.java#L3-6',
              newLines: 3,
              newStart: 9,
              oldLines: 3,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13758',
          _from: 'commits/12833',
          _to: 'files/1772',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13760',
          _from: 'commits/12833',
          _to: 'files/3815',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/mongodb/docker-compose.yml#L13-13',
              newLines: 13,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 13,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13762',
          _from: 'commits/12833',
          _to: 'files/4758',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CentralDirectorService.java#L0-37',
              newLines: 0,
              newStart: 0,
              oldLines: 37,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 37,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13764',
          _from: 'commits/12833',
          _to: 'files/11862',
          lineCount: 64,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/mongodb/rabbitmq-definitions.json#L64-64',
              newLines: 64,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 64,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13766',
          _from: 'commits/12833',
          _to: 'files/5885',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/CorsGlobalConfig.java#L0-24',
              newLines: 0,
              newStart: 0,
              oldLines: 24,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 24,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13768',
          _from: 'commits/12833',
          _to: 'files/7632',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/Location.java#L0-28',
              newLines: 0,
              newStart: 0,
              oldLines: 28,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 28,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13770',
          _from: 'commits/12833',
          _to: 'files/4756',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/DistanceMonitorService.java#L0-24',
              newLines: 0,
              newStart: 0,
              oldLines: 24,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 24,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13772',
          _from: 'commits/12833',
          _to: 'files/5469',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationMessage.java#L0-69',
              newLines: 0,
              newStart: 0,
              oldLines: 69,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 69,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13774',
          _from: 'commits/12833',
          _to: 'files/4754',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationTrackerService.java#L0-39',
              newLines: 0,
              newStart: 0,
              oldLines: 39,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 39,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13776',
          _from: 'commits/12833',
          _to: 'files/5471',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LocationsController.java#L0-33',
              newLines: 0,
              newStart: 0,
              oldLines: 33,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 33,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13778',
          _from: 'commits/12833',
          _to: 'files/5785',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogMessage.java#L0-60',
              newLines: 0,
              newStart: 0,
              oldLines: 60,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 60,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13780',
          _from: 'commits/12833',
          _to: 'files/5783',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/LogsController.java#L0-30',
              newLines: 0,
              newStart: 0,
              oldLines: 30,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 30,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13782',
          _from: 'commits/12833',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L0-3',
              newLines: 0,
              newStart: 4,
              oldLines: 3,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L0-13',
              newLines: 0,
              newStart: 12,
              oldLines: 13,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 0,
            deletions: 16,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13784',
          _from: 'commits/12833',
          _to: 'files/3523',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PingController.java#L0-53',
              newLines: 0,
              newStart: 0,
              oldLines: 53,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 53,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13786',
          _from: 'commits/12833',
          _to: 'files/4173',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/SwaggerUiWebMvcConfigurer.java#L0-17',
              newLines: 0,
              newStart: 0,
              oldLines: 17,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 17,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/13788',
          _from: 'commits/12833',
          _to: 'files/11426',
          lineCount: 24,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java#L24-24',
              newLines: 24,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13790',
          _from: 'commits/12833',
          _to: 'files/11502',
          lineCount: 17,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java#L17-17',
              newLines: 17,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13792',
          _from: 'commits/12833',
          _to: 'files/4777',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-3',
              newLines: 1,
              newStart: 15,
              oldLines: 2,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-3',
              newLines: 1,
              newStart: 26,
              oldLines: 2,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-3',
              newLines: 1,
              newStart: 37,
              oldLines: 2,
              oldStart: 39,
            },
          ],
          stats: {
            additions: 3,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13794',
          _from: 'commits/12833',
          _to: 'files/11454',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13796',
          _from: 'commits/12833',
          _to: 'files/11428',
          lineCount: 34,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L34-34',
              newLines: 34,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 34,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13798',
          _from: 'commits/12833',
          _to: 'files/11452',
          lineCount: 65,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L65-65',
              newLines: 65,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 65,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13800',
          _from: 'commits/12833',
          _to: 'files/11457',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13802',
          _from: 'commits/12833',
          _to: 'files/11459',
          lineCount: 6,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LogMessage.java#L6-6',
              newLines: 6,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 6,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13804',
          _from: 'commits/12833',
          _to: 'files/11432',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13806',
          _from: 'commits/12833',
          _to: 'files/11505',
          lineCount: 29,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DistanceMonitorService.java#L29-29',
              newLines: 29,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 29,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13808',
          _from: 'commits/12833',
          _to: 'files/11450',
          lineCount: 43,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/LocationTrackerService.java#L43-43',
              newLines: 43,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 43,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/13810',
          _from: 'commits/12833',
          _to: 'files/6941',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LocationsControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13812',
          _from: 'commits/12833',
          _to: 'files/3513',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/main/resources/application.properties#L7-11',
              newLines: 7,
              newStart: 3,
              oldLines: 4,
              oldStart: 2,
            },
          ],
          stats: {
            additions: 8,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13814',
          _from: 'commits/12833',
          _to: 'files/6939',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/LogsControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13816',
          _from: 'commits/12833',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 13,
              oldLines: 2,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/13818',
          _from: 'commits/12833',
          _to: 'files/3516',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 20,
              oldLines: 1,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b4d6421803589ab0b509a22cc5864de879803794/passenger-gateway/src/test/java/at/tuwien/dse/passenger_gateway/PingControllerTest.java#L1-2',
              newLines: 1,
              newStart: 35,
              oldLines: 1,
              oldStart: 35,
            },
          ],
          stats: {
            additions: 4,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14150',
          _from: 'commits/14128',
          _to: 'files/3815',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/df77c0a1a27e008bdbba68f7940163cf9f5ca2ba/mongodb/docker-compose.yml#L0-15',
              newLines: 0,
              newStart: 9,
              oldLines: 15,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 0,
            deletions: 15,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14152',
          _from: 'commits/14128',
          _to: 'files/14140',
          lineCount: 25,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/df77c0a1a27e008bdbba68f7940163cf9f5ca2ba/mongodb/docker-compose_rabbitmq.yml#L25-25',
              newLines: 25,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 25,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14194',
          _from: 'commits/14172',
          _to: 'files/8788',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a167b7b0cec544bd2748c80e7fe2e35f1436c9a3/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14193',
          _from: 'commits/14172',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a167b7b0cec544bd2748c80e7fe2e35f1436c9a3/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a167b7b0cec544bd2748c80e7fe2e35f1436c9a3/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-3',
              newLines: 1,
              newStart: 37,
              oldLines: 2,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a167b7b0cec544bd2748c80e7fe2e35f1436c9a3/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L8-8',
              newLines: 8,
              newStart: 60,
              oldLines: 0,
              oldStart: 60,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a167b7b0cec544bd2748c80e7fe2e35f1436c9a3/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 70,
              oldLines: 1,
              oldStart: 63,
            },
          ],
          stats: {
            additions: 11,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14278',
          _from: 'commits/14238',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14280',
          _from: 'commits/14238',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 61,
              oldLines: 1,
              oldStart: 61,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L0-1',
              newLines: 0,
              newStart: 72,
              oldLines: 1,
              oldStart: 73,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L7-8',
              newLines: 7,
              newStart: 74,
              oldLines: 1,
              oldStart: 75,
            },
          ],
          stats: {
            additions: 8,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14282',
          _from: 'commits/14238',
          _to: 'files/7379',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/data-mock/src/test/java/at/tuwien/dse/data_mock/GpsMockServiceTest.java#L1-2',
              newLines: 1,
              newStart: 67,
              oldLines: 1,
              oldStart: 67,
            },
          ],
          stats: {
            additions: 2,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14284',
          _from: 'commits/14238',
          _to: 'files/12363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14286',
          _from: 'commits/14238',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L2-4',
              newLines: 2,
              newStart: 28,
              oldLines: 2,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-3',
              newLines: 1,
              newStart: 34,
              oldLines: 2,
              oldStart: 34,
            },
          ],
          stats: {
            additions: 3,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14288',
          _from: 'commits/14238',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 42,
              oldLines: 0,
              oldStart: 41,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/fe549086605690be605afffb2eb9a5a78742caa1/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 65,
              oldLines: 0,
              oldStart: 63,
            },
          ],
          stats: {
            additions: 4,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14369',
          _from: 'commits/14354',
          _to: 'files/5624',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/507f3a24321c7c39f622333e3fff747acf9b34da/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L1-2',
              newLines: 1,
              newStart: 8,
              oldLines: 1,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14420',
          _from: 'commits/14395',
          _to: 'files/11452',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L3-3',
              newLines: 3,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 33,
              oldLines: 0,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 42,
              oldLines: 0,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 56,
              oldLines: 0,
              oldStart: 44,
            },
          ],
          stats: {
            additions: 15,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14424',
          _from: 'commits/14395',
          _to: 'files/11428',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L4-4',
              newLines: 4,
              newStart: 27,
              oldLines: 0,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14423',
          _from: 'commits/14395',
          _to: 'files/11454',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9a31ab7158f8e1814e31a99e92633a3b3c703a3/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L4-4',
              newLines: 4,
              newStart: 28,
              oldLines: 0,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14521',
          _from: 'commits/14450',
          _to: 'files/14487',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/EmergencyBreakMessage.java#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14523',
          _from: 'commits/14450',
          _to: 'files/12107',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 14,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 14,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14525',
          _from: 'commits/14450',
          _to: 'files/2200',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/pom.xml#L4-4',
              newLines: 4,
              newStart: 49,
              oldLines: 0,
              oldStart: 48,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14527',
          _from: 'commits/14450',
          _to: 'files/7174',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14529',
          _from: 'commits/14450',
          _to: 'files/2215',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/resources/application.properties#L3-4',
              newLines: 3,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14531',
          _from: 'commits/14450',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 10,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L0-1',
              newLines: 0,
              newStart: 20,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-3',
              newLines: 2,
              newStart: 22,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L7-7',
              newLines: 7,
              newStart: 31,
              oldLines: 0,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-4',
              newLines: 2,
              newStart: 39,
              oldLines: 2,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L4-8',
              newLines: 4,
              newStart: 49,
              oldLines: 4,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-5',
              newLines: 3,
              newStart: 54,
              oldLines: 2,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L38-40',
              newLines: 38,
              newStart: 58,
              oldLines: 2,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L4-8',
              newLines: 4,
              newStart: 98,
              oldLines: 4,
              oldStart: 52,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 104,
              oldLines: 1,
              oldStart: 58,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L16-21',
              newLines: 16,
              newStart: 110,
              oldLines: 5,
              oldStart: 64,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L10-10',
              newLines: 10,
              newStart: 133,
              oldLines: 0,
              oldStart: 75,
            },
          ],
          stats: {
            additions: 89,
            deletions: 22,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14533',
          _from: 'commits/14450',
          _to: 'files/14466',
          lineCount: 47,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/distance-monitor-vehicle-1.yaml#L47-47',
              newLines: 47,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 47,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14535',
          _from: 'commits/14450',
          _to: 'files/2198',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/distance-monitor.yaml#L0-43',
              newLines: 0,
              newStart: 0,
              oldLines: 43,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 43,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/14537',
          _from: 'commits/14450',
          _to: 'files/14468',
          lineCount: 47,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/distance-monitor-vehicle-2.yaml#L47-47',
              newLines: 47,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 47,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14539',
          _from: 'commits/14450',
          _to: 'files/2047',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/rabbitmq-configmap.yaml#L5-5',
              newLines: 5,
              newStart: 40,
              oldLines: 0,
              oldStart: 39,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 61,
              oldLines: 0,
              oldStart: 55,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/k8s/rabbitmq-configmap.yaml#L7-7',
              newLines: 7,
              newStart: 91,
              oldLines: 0,
              oldStart: 78,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14541',
          _from: 'commits/14450',
          _to: 'files/1744',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/87c9a79656c3bfadaf0afe9eb9fa1cf9d4019c8c/location-tracker/pom.xml#L17-17',
              newLines: 17,
              newStart: 69,
              oldLines: 0,
              oldStart: 68,
            },
          ],
          stats: {
            additions: 17,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14667',
          _from: 'commits/14633',
          _to: 'files/11454',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LocationsController.java#L4-4',
              newLines: 4,
              newStart: 28,
              oldLines: 0,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14669',
          _from: 'commits/14633',
          _to: 'files/5624',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L1-2',
              newLines: 1,
              newStart: 8,
              oldLines: 1,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14671',
          _from: 'commits/14633',
          _to: 'files/11428',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L3-3',
              newLines: 3,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/LogsController.java#L4-4',
              newLines: 4,
              newStart: 27,
              oldLines: 0,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14673',
          _from: 'commits/14633',
          _to: 'files/11452',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L3-3',
              newLines: 3,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 33,
              oldLines: 0,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 42,
              oldLines: 0,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/64b67c86c01628ef9f16e9ff39eb8b68e67651a6/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L4-4',
              newLines: 4,
              newStart: 56,
              oldLines: 0,
              oldStart: 44,
            },
          ],
          stats: {
            additions: 15,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14752',
          _from: 'commits/14717',
          _to: 'files/9373',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4117560c1c7c6326872548e18c005924d3b4bf85/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L5-5',
              newLines: 5,
              newStart: 29,
              oldLines: 0,
              oldStart: 28,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14754',
          _from: 'commits/14717',
          _to: 'files/9367',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4117560c1c7c6326872548e18c005924d3b4bf85/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L9-9',
              newLines: 9,
              newStart: 20,
              oldLines: 0,
              oldStart: 19,
            },
          ],
          stats: {
            additions: 9,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14756',
          _from: 'commits/14717',
          _to: 'files/14468',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4117560c1c7c6326872548e18c005924d3b4bf85/k8s/distance-monitor-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 46,
              oldLines: 1,
              oldStart: 46,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14758',
          _from: 'commits/14717',
          _to: 'files/3815',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4117560c1c7c6326872548e18c005924d3b4bf85/mongodb/docker-compose.yml#L2-2',
              newLines: 2,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14760',
          _from: 'commits/14717',
          _to: 'files/9371',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4117560c1c7c6326872548e18c005924d3b4bf85/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L12-12',
              newLines: 12,
              newStart: 31,
              oldLines: 0,
              oldStart: 30,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14855',
          _from: 'commits/14794',
          _to: 'files/8012',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-1',
              newLines: 1,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14857',
          _from: 'commits/14794',
          _to: 'files/8008',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L11-11',
              newLines: 11,
              newStart: 50,
              oldLines: 0,
              oldStart: 49,
            },
          ],
          stats: {
            additions: 11,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14859',
          _from: 'commits/14794',
          _to: 'files/11909',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L2-2',
              newLines: 2,
              newStart: 13,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14861',
          _from: 'commits/14794',
          _to: 'files/14820',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/EmergencyBreakMessage.java#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14863',
          _from: 'commits/14794',
          _to: 'files/14818',
          lineCount: 7,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/LocationMessage.java#L7-7',
              newLines: 7,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14865',
          _from: 'commits/14794',
          _to: 'files/14815',
          lineCount: 36,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L36-36',
              newLines: 36,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 36,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/14867',
          _from: 'commits/14794',
          _to: 'files/8014',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 6,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 12,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 18,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 21,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 30,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 33,
              oldLines: 1,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-2',
              newLines: 2,
              newStart: 36,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L14-16',
              newLines: 14,
              newStart: 47,
              oldLines: 2,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L4-6',
              newLines: 4,
              newStart: 64,
              oldLines: 2,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L3-5',
              newLines: 3,
              newStart: 69,
              oldLines: 2,
              oldStart: 43,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L8-14',
              newLines: 8,
              newStart: 75,
              oldLines: 6,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L17-17',
              newLines: 17,
              newStart: 84,
              oldLines: 0,
              oldStart: 54,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 102,
              oldLines: 1,
              oldStart: 56,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 104,
              oldLines: 2,
              oldStart: 58,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 106,
              oldLines: 1,
              oldStart: 61,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L37-37',
              newLines: 37,
              newStart: 109,
              oldLines: 0,
              oldStart: 63,
            },
          ],
          stats: {
            additions: 99,
            deletions: 17,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14869',
          _from: 'commits/14794',
          _to: 'files/2583',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/central-director/src/main/resources/application.properties#L1-1',
              newLines: 1,
              newStart: 13,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14871',
          _from: 'commits/14794',
          _to: 'files/2567',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a655ce09f9c49b533372cfda19522915ec52f7b/k8s/central-director.yaml#L2-2',
              newLines: 2,
              newStart: 32,
              oldLines: 0,
              oldStart: 31,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14991',
          _from: 'commits/14961',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L2-3',
              newLines: 2,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14993',
          _from: 'commits/14961',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 74,
              oldLines: 2,
              oldStart: 74,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 77,
              oldLines: 2,
              oldStart: 77,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 80,
              oldLines: 1,
              oldStart: 80,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14995',
          _from: 'commits/14961',
          _to: 'files/12363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/14997',
          _from: 'commits/14961',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f1406db3bb99d3807223de45d283f14399486ea6/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15060',
          _from: 'commits/15045',
          _to: 'files/11457',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/017c848e8a1435f40e425bc795536eb8f9e94301/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15139',
          _from: 'commits/15088',
          _to: 'files/2913',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/emergency-brake/pom.xml#L5-5',
              newLines: 5,
              newStart: 48,
              oldLines: 0,
              oldStart: 47,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15141',
          _from: 'commits/15088',
          _to: 'files/15110',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15143',
          _from: 'commits/15088',
          _to: 'files/15112',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15145',
          _from: 'commits/15088',
          _to: 'files/15116',
          lineCount: 5,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/message/EmergencyBreakMessage.java#L5-5',
              newLines: 5,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15147',
          _from: 'commits/15088',
          _to: 'files/9361',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java#L1-1',
              newLines: 1,
              newStart: 14,
              oldLines: 0,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15149',
          _from: 'commits/15088',
          _to: 'files/9378',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15151',
          _from: 'commits/15088',
          _to: 'files/11862',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/mongodb/rabbitmq-definitions.json#L20-23',
              newLines: 20,
              newStart: 20,
              oldLines: 3,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/mongodb/rabbitmq-definitions.json#L7-7',
              newLines: 7,
              newStart: 55,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/mongodb/rabbitmq-definitions.json#L7-7',
              newLines: 7,
              newStart: 85,
              oldLines: 0,
              oldStart: 60,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e4221b9a80f78fd428d82db16c045a16d1a60b7f/mongodb/rabbitmq-definitions.json#L1-2',
              newLines: 1,
              newStart: 94,
              oldLines: 1,
              oldStart: 63,
            },
          ],
          stats: {
            additions: 35,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15282',
          _from: 'commits/15267',
          _to: 'files/9371',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/551b1ed83120197aad0f3b157701551b176ed2c5/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 26,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/551b1ed83120197aad0f3b157701551b176ed2c5/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 39,
              oldLines: 0,
              oldStart: 37,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15323',
          _from: 'commits/15308',
          _to: 'files/9369',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/1a9539c363bfa1ded3bf0e12f8aed2133b58cbba/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L1-1',
              newLines: 1,
              newStart: 23,
              oldLines: 0,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15374',
          _from: 'commits/15349',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4f2c588f1687a8ad08103b38ebbb2b66a01e2547/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L1-2',
              newLines: 1,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15376',
          _from: 'commits/15349',
          _to: 'files/12363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4f2c588f1687a8ad08103b38ebbb2b66a01e2547/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L1-2',
              newLines: 1,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15378',
          _from: 'commits/15349',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4f2c588f1687a8ad08103b38ebbb2b66a01e2547/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15446',
          _from: 'commits/15424',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d117807b89fae6da5269364ae9efa9154b8e019e/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L3-6',
              newLines: 3,
              newStart: 25,
              oldLines: 3,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d117807b89fae6da5269364ae9efa9154b8e019e/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 29,
              oldLines: 2,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 5,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15448',
          _from: 'commits/15424',
          _to: 'files/15436',
          lineCount: 61,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/d117807b89fae6da5269364ae9efa9154b8e019e/data-mock/src/test/java/at/tuwien/dse/data_mock/service/GpsMockServiceValueTest.java#L61-61',
              newLines: 61,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 61,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15549',
          _from: 'commits/15534',
          _to: 'files/7377',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L0-1',
              newLines: 0,
              newStart: 6,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L2-4',
              newLines: 2,
              newStart: 17,
              oldLines: 2,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L6-12',
              newLines: 6,
              newStart: 20,
              oldLines: 6,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L6-12',
              newLines: 6,
              newStart: 27,
              oldLines: 6,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L6-12',
              newLines: 6,
              newStart: 34,
              oldLines: 6,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/48276f8b6f7386a78e202dc8ebdf8cfca0726d6f/data-mock/src/test/java/at/tuwien/dse/data_mock/BreakControllerTest.java#L13-26',
              newLines: 13,
              newStart: 41,
              oldLines: 13,
              oldStart: 42,
            },
          ],
          stats: {
            additions: 33,
            deletions: 34,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15588',
          _from: 'commits/15573',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/69177102a2faf3251efbd5570a464330f2e0c741/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/69177102a2faf3251efbd5570a464330f2e0c741/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-4',
              newLines: 2,
              newStart: 29,
              oldLines: 2,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 3,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15629',
          _from: 'commits/15614',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/9f40b2d8d83cc860a8a1b76e32c1e990323fcd42/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 23,
              oldLines: 1,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15680',
          _from: 'commits/15655',
          _to: 'files/2927',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2a16dd8163476c049e21cc84f7c30fed71328562/emergency-brake/src/main/resources/application.properties#L6-7',
              newLines: 6,
              newStart: 7,
              oldLines: 1,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 6,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15682',
          _from: 'commits/15655',
          _to: 'files/6062',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2a16dd8163476c049e21cc84f7c30fed71328562/k8s/emergency-brake-vehicle-2.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15684',
          _from: 'commits/15655',
          _to: 'files/6064',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/2a16dd8163476c049e21cc84f7c30fed71328562/k8s/emergency-brake-vehicle-1.yaml#L8-8',
              newLines: 8,
              newStart: 22,
              oldLines: 0,
              oldStart: 21,
            },
          ],
          stats: {
            additions: 8,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15722',
          _from: 'commits/15702',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 20,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L3-4',
              newLines: 3,
              newStart: 31,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L9-9',
              newLines: 9,
              newStart: 59,
              oldLines: 0,
              oldStart: 55,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L5-5',
              newLines: 5,
              newStart: 70,
              oldLines: 0,
              oldStart: 57,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L7-7',
              newLines: 7,
              newStart: 91,
              oldLines: 0,
              oldStart: 73,
            },
          ],
          stats: {
            additions: 25,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15724',
          _from: 'commits/15702',
          _to: 'files/8315',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/c7774afe0f2a857a18a1cca85a14e44b86d78353/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L10-10',
              newLines: 10,
              newStart: 35,
              oldLines: 0,
              oldStart: 34,
            },
          ],
          stats: {
            additions: 10,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15791',
          _from: 'commits/15752',
          _to: 'files/3472',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bd717cf3524d2ed58f4ea6b20e938c94f0ff9497/k8s/passenger-gateway.yaml#L4-4',
              newLines: 4,
              newStart: 28,
              oldLines: 0,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 4,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15793',
          _from: 'commits/15752',
          _to: 'files/4777',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bd717cf3524d2ed58f4ea6b20e938c94f0ff9497/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L22-22',
              newLines: 22,
              newStart: 46,
              oldLines: 0,
              oldStart: 45,
            },
          ],
          stats: {
            additions: 22,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15795',
          _from: 'commits/15752',
          _to: 'files/15772',
          lineCount: 28,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bd717cf3524d2ed58f4ea6b20e938c94f0ff9497/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L28-28',
              newLines: 28,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 28,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15797',
          _from: 'commits/15752',
          _to: 'files/15774',
          lineCount: 53,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bd717cf3524d2ed58f4ea6b20e938c94f0ff9497/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/DataMockService.java#L53-53',
              newLines: 53,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 53,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/15799',
          _from: 'commits/15752',
          _to: 'files/3513',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bd717cf3524d2ed58f4ea6b20e938c94f0ff9497/passenger-gateway/src/main/resources/application.properties#L3-4',
              newLines: 3,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15901',
          _from: 'commits/15881',
          _to: 'files/4260',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8d4a92aed4c170eb5f6566213570ab5cad210b17/k8s/data-mock-vehicle-1.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8d4a92aed4c170eb5f6566213570ab5cad210b17/k8s/data-mock-vehicle-1.yaml#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 37,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15903',
          _from: 'commits/15881',
          _to: 'files/4262',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8d4a92aed4c170eb5f6566213570ab5cad210b17/k8s/data-mock-vehicle-2.yaml#L1-2',
              newLines: 1,
              newStart: 32,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/8d4a92aed4c170eb5f6566213570ab5cad210b17/k8s/data-mock-vehicle-2.yaml#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 37,
            },
          ],
          stats: {
            additions: 2,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15928',
          _from: 'commits/15913',
          _to: 'files/15110',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/dd5a263c42254b1b4a8a957fc960564f79c3d939/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 1,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15974',
          _from: 'commits/15954',
          _to: 'files/8315',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L0-2',
              newLines: 0,
              newStart: 35,
              oldLines: 2,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 0,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/15976',
          _from: 'commits/15954',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L0-1',
              newLines: 0,
              newStart: 2,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L6-8',
              newLines: 6,
              newStart: 19,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L92-93',
              newLines: 92,
              newStart: 26,
              oldLines: 1,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-3',
              newLines: 1,
              newStart: 122,
              oldLines: 2,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L0-2',
              newLines: 0,
              newStart: 126,
              oldLines: 2,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L2-3',
              newLines: 2,
              newStart: 128,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L0-1',
              newLines: 0,
              newStart: 130,
              oldLines: 1,
              oldStart: 39,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-8',
              newLines: 1,
              newStart: 132,
              oldLines: 7,
              oldStart: 41,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-7',
              newLines: 1,
              newStart: 134,
              oldLines: 6,
              oldStart: 49,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 136,
              oldLines: 1,
              oldStart: 56,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 138,
              oldLines: 1,
              oldStart: 58,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L7-8',
              newLines: 7,
              newStart: 143,
              oldLines: 1,
              oldStart: 63,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L9-10',
              newLines: 9,
              newStart: 151,
              oldLines: 1,
              oldStart: 65,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L8-13',
              newLines: 8,
              newStart: 161,
              oldLines: 5,
              oldStart: 67,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L5-11',
              newLines: 5,
              newStart: 170,
              oldLines: 6,
              oldStart: 73,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L3-3',
              newLines: 3,
              newStart: 176,
              oldLines: 0,
              oldStart: 79,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 182,
              oldLines: 2,
              oldStart: 83,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 185,
              oldLines: 1,
              oldStart: 86,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L16-17',
              newLines: 16,
              newStart: 190,
              oldLines: 1,
              oldStart: 91,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L31-33',
              newLines: 31,
              newStart: 208,
              oldLines: 2,
              oldStart: 94,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/63e408e21669b296083d0c95a9e59a20e8440788/visor-frontend/src/layout/Dashboard.js#L166-168',
              newLines: 166,
              newStart: 241,
              oldLines: 2,
              oldStart: 98,
            },
          ],
          stats: {
            additions: 354,
            deletions: 47,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16023',
          _from: 'commits/16008',
          _to: 'files/15772',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9464a24ad1ee63fe6eec88a98e3dac36df80517/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L1-1',
              newLines: 1,
              newStart: 8,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/e9464a24ad1ee63fe6eec88a98e3dac36df80517/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L2-3',
              newLines: 2,
              newStart: 11,
              oldLines: 1,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16069',
          _from: 'commits/16049',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L0-7',
              newLines: 0,
              newStart: 90,
              oldLines: 7,
              oldStart: 91,
            },
          ],
          stats: {
            additions: 0,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16071',
          _from: 'commits/16049',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L10-10',
              newLines: 10,
              newStart: 28,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L20-20',
              newLines: 20,
              newStart: 130,
              oldLines: 0,
              oldStart: 117,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 152,
              oldLines: 1,
              oldStart: 120,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L3-3',
              newLines: 3,
              newStart: 165,
              oldLines: 0,
              oldStart: 132,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L4-4',
              newLines: 4,
              newStart: 170,
              oldLines: 0,
              oldStart: 134,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L6-7',
              newLines: 6,
              newStart: 175,
              oldLines: 1,
              oldStart: 136,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L20-20',
              newLines: 20,
              newStart: 183,
              oldLines: 0,
              oldStart: 138,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 205,
              oldLines: 1,
              oldStart: 141,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L3-3',
              newLines: 3,
              newStart: 210,
              oldLines: 0,
              oldStart: 145,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L4-4',
              newLines: 4,
              newStart: 215,
              oldLines: 0,
              oldStart: 147,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/b2ffc6a276a5aca13baf80fe3b68485e09a16695/visor-frontend/src/layout/Dashboard.js#L7-8',
              newLines: 7,
              newStart: 220,
              oldLines: 1,
              oldStart: 149,
            },
          ],
          stats: {
            additions: 81,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16134',
          _from: 'commits/16103',
          _to: 'files/16123',
          lineCount: 1297,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a7ea204e64c9112ef77517db292d4aa879109ea0/DSE - Project Closure Report.pdf#L1297-1297',
              newLines: 1297,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1297,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16136',
          _from: 'commits/16103',
          _to: 'files/16120',
          lineCount: 4349,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a7ea204e64c9112ef77517db292d4aa879109ea0/DSE - Architecture and Design Document.pdf#L4349-4349',
              newLines: 4349,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 4349,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16138',
          _from: 'commits/16103',
          _to: 'files/16121',
          lineCount: 7647,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/a7ea204e64c9112ef77517db292d4aa879109ea0/DSE - Maintenance Manual.pdf#L7647-7647',
              newLines: 7647,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 7647,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16171',
          _from: 'commits/16156',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L4-4',
              newLines: 4,
              newStart: 38,
              oldLines: 0,
              oldStart: 37,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L10-14',
              newLines: 10,
              newStart: 44,
              oldLines: 4,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 55,
              oldLines: 2,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 59,
              oldLines: 0,
              oldStart: 48,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 67,
              oldLines: 0,
              oldStart: 54,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L21-21',
              newLines: 21,
              newStart: 76,
              oldLines: 0,
              oldStart: 61,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 145,
              oldLines: 0,
              oldStart: 109,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L6-6',
              newLines: 6,
              newStart: 153,
              oldLines: 0,
              oldStart: 115,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L34-37',
              newLines: 34,
              newStart: 328,
              oldLines: 3,
              oldStart: 285,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L5-15',
              newLines: 5,
              newStart: 364,
              oldLines: 10,
              oldStart: 290,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 371,
              oldLines: 1,
              oldStart: 302,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L16-60',
              newLines: 16,
              newStart: 373,
              oldLines: 44,
              oldStart: 304,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 390,
              oldLines: 0,
              oldStart: 348,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L8-15',
              newLines: 8,
              newStart: 392,
              oldLines: 7,
              oldStart: 350,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L44-73',
              newLines: 44,
              newStart: 402,
              oldLines: 29,
              oldStart: 359,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L78-96',
              newLines: 78,
              newStart: 447,
              oldLines: 18,
              oldStart: 389,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L3-6',
              newLines: 3,
              newStart: 526,
              oldLines: 3,
              oldStart: 408,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L32-36',
              newLines: 32,
              newStart: 531,
              oldLines: 4,
              oldStart: 413,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L46-56',
              newLines: 46,
              newStart: 565,
              oldLines: 10,
              oldStart: 419,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L6-60',
              newLines: 6,
              newStart: 612,
              oldLines: 54,
              oldStart: 430,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/3f7c1bddcf121b7ba1330dcf265dec7b3eb7721b/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 619,
              oldLines: 1,
              oldStart: 485,
            },
          ],
          stats: {
            additions: 325,
            deletions: 191,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16228',
          _from: 'commits/16185',
          _to: 'files/16206',
          lineCount: 69,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f17fc27b3b12dba355d2027cba83df7faf3a799f/location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/LocationControllerTest.java#L69-69',
              newLines: 69,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 69,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16230',
          _from: 'commits/16185',
          _to: 'files/1772',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f17fc27b3b12dba355d2027cba83df7faf3a799f/location-tracker/src/test/java/at/tuwien/dse/location_tracker/PingControllerTest.java#L0-23',
              newLines: 0,
              newStart: 0,
              oldLines: 23,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 0,
            deletions: 23,
          },
          action: 'deleted',
        },
        {
          _id: 'commits-files/16232',
          _from: 'commits/16185',
          _to: 'files/16208',
          lineCount: 27,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f17fc27b3b12dba355d2027cba83df7faf3a799f/location-tracker/src/test/java/at/tuwien/dse/location_tracker/controller/PingControllerTest.java#L27-27',
              newLines: 27,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16234',
          _from: 'commits/16185',
          _to: 'files/16211',
          lineCount: 32,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f17fc27b3b12dba355d2027cba83df7faf3a799f/location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationMessageServiceTest.java#L32-32',
              newLines: 32,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 32,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16236',
          _from: 'commits/16185',
          _to: 'files/16213',
          lineCount: 38,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/f17fc27b3b12dba355d2027cba83df7faf3a799f/location-tracker/src/test/java/at/tuwien/dse/location_tracker/service/LocationServiceTest.java#L38-38',
              newLines: 38,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 38,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16379',
          _from: 'commits/16324',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L11-13',
              newLines: 11,
              newStart: 5,
              oldLines: 2,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 11,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16381',
          _from: 'commits/16324',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 26,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 31,
              oldLines: 0,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 35,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 48,
              oldLines: 0,
              oldStart: 43,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 75,
              oldLines: 0,
              oldStart: 69,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 83,
              oldLines: 1,
              oldStart: 77,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-3',
              newLines: 2,
              newStart: 93,
              oldLines: 1,
              oldStart: 87,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 96,
              oldLines: 1,
              oldStart: 89,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 99,
              oldLines: 1,
              oldStart: 92,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 104,
              oldLines: 0,
              oldStart: 96,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 108,
              oldLines: 0,
              oldStart: 99,
            },
          ],
          stats: {
            additions: 14,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16383',
          _from: 'commits/16324',
          _to: 'files/8315',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L4-4',
              newLines: 4,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L7-7',
              newLines: 7,
              newStart: 26,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L5-5',
              newLines: 5,
              newStart: 40,
              oldLines: 0,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L7-7',
              newLines: 7,
              newStart: 52,
              oldLines: 0,
              oldStart: 35,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16385',
          _from: 'commits/16324',
          _to: 'files/8999',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L14-14',
              newLines: 14,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L5-5',
              newLines: 5,
              newStart: 23,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L1-1',
              newLines: 1,
              newStart: 29,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16387',
          _from: 'commits/16324',
          _to: 'files/9007',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L11-11',
              newLines: 11,
              newStart: 9,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L2-2',
              newLines: 2,
              newStart: 23,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L3-3',
              newLines: 3,
              newStart: 26,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L9-9',
              newLines: 9,
              newStart: 31,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 42,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L10-10',
              newLines: 10,
              newStart: 46,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 58,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L2-2',
              newLines: 2,
              newStart: 60,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 63,
              oldLines: 0,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 40,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16389',
          _from: 'commits/16324',
          _to: 'files/9009',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L13-13',
              newLines: 13,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-1',
              newLines: 1,
              newStart: 27,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L2-2',
              newLines: 2,
              newStart: 29,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L2-2',
              newLines: 2,
              newStart: 32,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L9-9',
              newLines: 9,
              newStart: 36,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L10-10',
              newLines: 10,
              newStart: 50,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-1',
              newLines: 1,
              newStart: 62,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L3-3',
              newLines: 3,
              newStart: 64,
              oldLines: 0,
              oldStart: 25,
            },
          ],
          stats: {
            additions: 42,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16391',
          _from: 'commits/16324',
          _to: 'files/9011',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L11-11',
              newLines: 11,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L8-8',
              newLines: 8,
              newStart: 28,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L2-2',
              newLines: 2,
              newStart: 40,
              oldLines: 0,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 24,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16393',
          _from: 'commits/16324',
          _to: 'files/12363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L23-23',
              newLines: 23,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16395',
          _from: 'commits/16324',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L4-4',
              newLines: 4,
              newStart: 12,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L8-8',
              newLines: 8,
              newStart: 27,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 36,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 41,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 44,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/4d417b4c2b35933d7f7f88924c958260f9106b26/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 51,
              oldLines: 0,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 16,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16464',
          _from: 'commits/16449',
          _to: 'files/377',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L10-11',
              newLines: 10,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 52,
              oldLines: 1,
              oldStart: 43,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 49,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 64,
              oldLines: 1,
              oldStart: 55,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 88,
              oldLines: 1,
              oldStart: 79,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 91,
              oldLines: 1,
              oldStart: 82,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 101,
              oldLines: 1,
              oldStart: 92,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L1-2',
              newLines: 1,
              newStart: 104,
              oldLines: 1,
              oldStart: 95,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L0-1',
              newLines: 0,
              newStart: 156,
              oldLines: 1,
              oldStart: 148,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/4b370df7f69f72e7c6a19d22e5957a5125f9ab5b/README.md#L2-3',
              newLines: 2,
              newStart: 159,
              oldLines: 1,
              oldStart: 151,
            },
          ],
          stats: {
            additions: 20,
            deletions: 11,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16489',
          _from: 'commits/16472',
          _to: 'files/16484',
          lineCount: 1,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/69175b9e8a99cb3ddb693c299c26ca19dfed36e0/emergency-brake/http/emergencybrake.http#L1-1',
              newLines: 1,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 1,
            deletions: 0,
          },
          action: 'added',
        },
        {
          _id: 'commits-files/16583',
          _from: 'commits/16519',
          _to: 'files/377',
          lineCount: 0,
          hunks: [
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L10-11',
              newLines: 10,
              newStart: 37,
              oldLines: 1,
              oldStart: 37,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 52,
              oldLines: 1,
              oldStart: 43,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 49,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 64,
              oldLines: 1,
              oldStart: 55,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 88,
              oldLines: 1,
              oldStart: 79,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 91,
              oldLines: 1,
              oldStart: 82,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 101,
              oldLines: 1,
              oldStart: 92,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L1-2',
              newLines: 1,
              newStart: 104,
              oldLines: 1,
              oldStart: 95,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L0-1',
              newLines: 0,
              newStart: 156,
              oldLines: 1,
              oldStart: 148,
            },
            {
              webUrl: 'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/README.md#L2-3',
              newLines: 2,
              newStart: 159,
              oldLines: 1,
              oldStart: 151,
            },
          ],
          stats: {
            additions: 20,
            deletions: 11,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16585',
          _from: 'commits/16519',
          _to: 'files/8315',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L4-4',
              newLines: 4,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L7-7',
              newLines: 7,
              newStart: 26,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L5-5',
              newLines: 5,
              newStart: 40,
              oldLines: 0,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/controller/BreakController.java#L7-7',
              newLines: 7,
              newStart: 52,
              oldLines: 0,
              oldStart: 35,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16587',
          _from: 'commits/16519',
          _to: 'files/8313',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/dto/VehicleLocationDto.java#L11-13',
              newLines: 11,
              newStart: 5,
              oldLines: 2,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 11,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16589',
          _from: 'commits/16519',
          _to: 'files/8319',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 26,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 31,
              oldLines: 0,
              oldStart: 29,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 35,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 34,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 48,
              oldLines: 0,
              oldStart: 43,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 75,
              oldLines: 0,
              oldStart: 69,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 83,
              oldLines: 1,
              oldStart: 77,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L2-3',
              newLines: 2,
              newStart: 93,
              oldLines: 1,
              oldStart: 87,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 96,
              oldLines: 1,
              oldStart: 89,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-2',
              newLines: 1,
              newStart: 99,
              oldLines: 1,
              oldStart: 92,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 104,
              oldLines: 0,
              oldStart: 96,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/data-mock/src/main/java/at/tuwien/dse/data_mock/service/GpsMockService.java#L1-1',
              newLines: 1,
              newStart: 108,
              oldLines: 0,
              oldStart: 99,
            },
          ],
          stats: {
            additions: 14,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16591',
          _from: 'commits/16519',
          _to: 'files/8999',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L14-14',
              newLines: 14,
              newStart: 6,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L5-5',
              newLines: 5,
              newStart: 23,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/LocationSenderApplication.java#L1-1',
              newLines: 1,
              newStart: 29,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 20,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16593',
          _from: 'commits/16519',
          _to: 'files/9007',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L11-11',
              newLines: 11,
              newStart: 9,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L2-2',
              newLines: 2,
              newStart: 23,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L3-3',
              newLines: 3,
              newStart: 26,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L9-9',
              newLines: 9,
              newStart: 31,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 42,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L10-10',
              newLines: 10,
              newStart: 46,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 58,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L2-2',
              newLines: 2,
              newStart: 60,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 63,
              oldLines: 0,
              oldStart: 23,
            },
          ],
          stats: {
            additions: 40,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16595',
          _from: 'commits/16519',
          _to: 'files/9009',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L13-13',
              newLines: 13,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 24,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-1',
              newLines: 1,
              newStart: 27,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L2-2',
              newLines: 2,
              newStart: 29,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L2-2',
              newLines: 2,
              newStart: 32,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L9-9',
              newLines: 9,
              newStart: 36,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L10-10',
              newLines: 10,
              newStart: 50,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L1-1',
              newLines: 1,
              newStart: 62,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/LocationController.java#L3-3',
              newLines: 3,
              newStart: 64,
              oldLines: 0,
              oldStart: 25,
            },
          ],
          stats: {
            additions: 42,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16597',
          _from: 'commits/16519',
          _to: 'files/9011',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L11-11',
              newLines: 11,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L8-8',
              newLines: 8,
              newStart: 28,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/controller/PingController.java#L2-2',
              newLines: 2,
              newStart: 40,
              oldLines: 0,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 24,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16599',
          _from: 'commits/16519',
          _to: 'files/12363',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/dto/VehicleLocationDto.java#L23-23',
              newLines: 23,
              newStart: 5,
              oldLines: 0,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 23,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16601',
          _from: 'commits/16519',
          _to: 'files/9015',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L4-4',
              newLines: 4,
              newStart: 12,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L8-8',
              newLines: 8,
              newStart: 27,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 36,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 41,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 44,
              oldLines: 0,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/07423275e9535519c5ff8c7e5ba652864f4e8938/location-sender/src/main/java/at/tuwien/dse/location_sender/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 51,
              oldLines: 0,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 16,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16715',
          _from: 'commits/16655',
          _to: 'files/1780',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java#L1-1',
              newLines: 1,
              newStart: 9,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/LocationTrackerApplication.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 2,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16717',
          _from: 'commits/16655',
          _to: 'files/9373',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L1-2',
              newLines: 1,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L2-4',
              newLines: 2,
              newStart: 25,
              oldLines: 2,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/LocationController.java#L2-4',
              newLines: 2,
              newStart: 31,
              oldLines: 2,
              oldStart: 31,
            },
          ],
          stats: {
            additions: 7,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16719',
          _from: 'commits/16655',
          _to: 'files/12506',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L1-2',
              newLines: 1,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 22,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 4,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16721',
          _from: 'commits/16655',
          _to: 'files/9375',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/controller/PingController.java#L2-4',
              newLines: 2,
              newStart: 18,
              oldLines: 2,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 4,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16723',
          _from: 'commits/16655',
          _to: 'files/9361',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/document/LocationDocument.java#L8-13',
              newLines: 8,
              newStart: 11,
              oldLines: 5,
              oldStart: 11,
            },
          ],
          stats: {
            additions: 8,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16725',
          _from: 'commits/16655',
          _to: 'files/9365',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 16,
              oldLines: 1,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/LocationMessageConsumer.java#L2-4',
              newLines: 2,
              newStart: 24,
              oldLines: 2,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 6,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16727',
          _from: 'commits/16655',
          _to: 'files/9378',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/messaging/message/LocationMessage.java#L7-8',
              newLines: 7,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 7,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16729',
          _from: 'commits/16655',
          _to: 'files/9367',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L3-6',
              newLines: 3,
              newStart: 14,
              oldLines: 3,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L1-2',
              newLines: 1,
              newStart: 18,
              oldLines: 1,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L5-10',
              newLines: 5,
              newStart: 21,
              oldLines: 5,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/repository/LocationRepository.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 11,
            deletions: 11,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16731',
          _from: 'commits/16655',
          _to: 'files/9369',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L1-2',
              newLines: 1,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L1-1',
              newLines: 1,
              newStart: 18,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L5-10',
              newLines: 5,
              newStart: 21,
              oldLines: 5,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationMessageService.java#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 26,
            },
          ],
          stats: {
            additions: 9,
            deletions: 8,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/16733',
          _from: 'commits/16655',
          _to: 'files/9371',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 19,
              oldLines: 0,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L5-10',
              newLines: 5,
              newStart: 24,
              oldLines: 5,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 33,
              oldLines: 0,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/de503f7ea317d42d8b2b8a60cedf84bb2b90b69a/location-tracker/src/main/java/at/tuwien/dse/location_tracker/service/LocationService.java#L5-10',
              newLines: 5,
              newStart: 38,
              oldLines: 5,
              oldStart: 36,
            },
          ],
          stats: {
            additions: 14,
            deletions: 12,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17051',
          _from: 'commits/16771',
          _to: 'files/8008',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/WebClientConfig.java#L55-98',
              newLines: 55,
              newStart: 17,
              oldLines: 43,
              oldStart: 17,
            },
          ],
          stats: {
            additions: 56,
            deletions: 44,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17053',
          _from: 'commits/16771',
          _to: 'files/11909',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 12,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 14,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 19,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 28,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 12,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17055',
          _from: 'commits/16771',
          _to: 'files/2599',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorApplication.java#L2-3',
              newLines: 2,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/CentralDirectorApplication.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17057',
          _from: 'commits/16771',
          _to: 'files/8006',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L2-4',
              newLines: 2,
              newStart: 13,
              oldLines: 2,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-2',
              newLines: 1,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-2',
              newLines: 1,
              newStart: 19,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L1-1',
              newLines: 1,
              newStart: 21,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L9-9',
              newLines: 9,
              newStart: 26,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L3-6',
              newLines: 3,
              newStart: 37,
              oldLines: 3,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/LogController.java#L5-5',
              newLines: 5,
              newStart: 44,
              oldLines: 0,
              oldStart: 33,
            },
          ],
          stats: {
            additions: 22,
            deletions: 7,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17059',
          _from: 'commits/16771',
          _to: 'files/8021',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java#L1-2',
              newLines: 1,
              newStart: 8,
              oldLines: 1,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/document/LogDocument.java#L5-10',
              newLines: 5,
              newStart: 10,
              oldLines: 5,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 6,
            deletions: 6,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17061',
          _from: 'commits/16771',
          _to: 'files/8010',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L2-4',
              newLines: 2,
              newStart: 10,
              oldLines: 2,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/controller/PingController.java#L6-6',
              newLines: 6,
              newStart: 16,
              oldLines: 0,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 9,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17063',
          _from: 'commits/16771',
          _to: 'files/8012',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L2-3',
              newLines: 2,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 18,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L1-1',
              newLines: 1,
              newStart: 20,
              oldLines: 0,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L8-8',
              newLines: 8,
              newStart: 25,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/DistanceMessageConsumer.java#L2-4',
              newLines: 2,
              newStart: 35,
              oldLines: 2,
              oldStart: 25,
            },
          ],
          stats: {
            additions: 15,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17065',
          _from: 'commits/16771',
          _to: 'files/8023',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/DistanceMessage.java#L8-9',
              newLines: 8,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17067',
          _from: 'commits/16771',
          _to: 'files/14820',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/EmergencyBreakMessage.java#L4-5',
              newLines: 4,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 4,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17069',
          _from: 'commits/16771',
          _to: 'files/14818',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/messaging/message/LocationMessage.java#L8-9',
              newLines: 8,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17071',
          _from: 'commits/16771',
          _to: 'files/8018',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java#L4-5',
              newLines: 4,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/repository/LogRepository.java#L8-8',
              newLines: 8,
              newStart: 16,
              oldLines: 0,
              oldStart: 12,
            },
          ],
          stats: {
            additions: 12,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17073',
          _from: 'commits/16771',
          _to: 'files/8014',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 23,
              oldLines: 1,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 26,
              oldLines: 1,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L5-9',
              newLines: 5,
              newStart: 28,
              oldLines: 4,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L3-4',
              newLines: 3,
              newStart: 34,
              oldLines: 1,
              oldStart: 33,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L9-9',
              newLines: 9,
              newStart: 43,
              oldLines: 0,
              oldStart: 39,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 53,
              oldLines: 1,
              oldStart: 41,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 55,
              oldLines: 0,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 57,
              oldLines: 2,
              oldStart: 44,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-1',
              newLines: 1,
              newStart: 59,
              oldLines: 0,
              oldStart: 46,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 100,
              oldLines: 2,
              oldStart: 87,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 103,
              oldLines: 2,
              oldStart: 91,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-3',
              newLines: 1,
              newStart: 113,
              oldLines: 2,
              oldStart: 102,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L1-2',
              newLines: 1,
              newStart: 140,
              oldLines: 1,
              oldStart: 130,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L2-3',
              newLines: 2,
              newStart: 153,
              oldLines: 1,
              oldStart: 143,
            },
          ],
          stats: {
            additions: 29,
            deletions: 18,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17075',
          _from: 'commits/16771',
          _to: 'files/14815',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L5-6',
              newLines: 5,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 21,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 23,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L5-5',
              newLines: 5,
              newStart: 30,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LocationService.java#L1-2',
              newLines: 1,
              newStart: 37,
              oldLines: 1,
              oldStart: 27,
            },
          ],
          stats: {
            additions: 14,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17077',
          _from: 'commits/16771',
          _to: 'files/8016',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-2',
              newLines: 1,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-2',
              newLines: 1,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L1-1',
              newLines: 1,
              newStart: 19,
              oldLines: 0,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L9-9',
              newLines: 9,
              newStart: 24,
              oldLines: 0,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/service/LogService.java#L5-5',
              newLines: 5,
              newStart: 39,
              oldLines: 0,
              oldStart: 28,
            },
          ],
          stats: {
            additions: 18,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17079',
          _from: 'commits/16771',
          _to: 'files/5624',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L8-8',
              newLines: 8,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L0-1',
              newLines: 0,
              newStart: 12,
              oldLines: 1,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/central-director/src/main/java/at/tuwien/dse/central_director/util/EmergencyBrake.java#L1-2',
              newLines: 1,
              newStart: 15,
              oldLines: 1,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 9,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17081',
          _from: 'commits/16771',
          _to: 'files/2230',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplication.java#L2-3',
              newLines: 2,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/DistanceMonitorApplication.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17083',
          _from: 'commits/16771',
          _to: 'files/12107',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 12,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 14,
              oldLines: 0,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 18,
              oldLines: 0,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 20,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 23,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 32,
              oldLines: 0,
              oldStart: 22,
            },
          ],
          stats: {
            additions: 14,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17085',
          _from: 'commits/16771',
          _to: 'files/7166',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L2-4',
              newLines: 2,
              newStart: 10,
              oldLines: 2,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/controller/PingController.java#L6-6',
              newLines: 6,
              newStart: 16,
              oldLines: 0,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 9,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17087',
          _from: 'commits/16771',
          _to: 'files/7168',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L2-3',
              newLines: 2,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L2-3',
              newLines: 2,
              newStart: 17,
              oldLines: 1,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L1-1',
              newLines: 1,
              newStart: 20,
              oldLines: 0,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L9-9',
              newLines: 9,
              newStart: 25,
              oldLines: 0,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/LocationMessageConsumer.java#L2-4',
              newLines: 2,
              newStart: 36,
              oldLines: 2,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 17,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17089',
          _from: 'commits/16771',
          _to: 'files/7172',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/DistanceMessage.java#L8-9',
              newLines: 8,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17091',
          _from: 'commits/16771',
          _to: 'files/14487',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/EmergencyBreakMessage.java#L4-5',
              newLines: 4,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 4,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17093',
          _from: 'commits/16771',
          _to: 'files/7174',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/messaging/message/LocationMessage.java#L8-9',
              newLines: 8,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17095',
          _from: 'commits/16771',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L5-6',
              newLines: 5,
              newStart: 17,
              oldLines: 1,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-5',
              newLines: 3,
              newStart: 24,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-4',
              newLines: 2,
              newStart: 28,
              oldLines: 2,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 32,
              oldLines: 0,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-5',
              newLines: 3,
              newStart: 39,
              oldLines: 2,
              oldStart: 33,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 51,
              oldLines: 0,
              oldStart: 43,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-3',
              newLines: 2,
              newStart: 67,
              oldLines: 1,
              oldStart: 59,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L5-7',
              newLines: 5,
              newStart: 76,
              oldLines: 2,
              oldStart: 67,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-3',
              newLines: 2,
              newStart: 86,
              oldLines: 1,
              oldStart: 74,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 89,
              oldLines: 1,
              oldStart: 76,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L2-3',
              newLines: 2,
              newStart: 93,
              oldLines: 1,
              oldStart: 80,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-5',
              newLines: 3,
              newStart: 98,
              oldLines: 2,
              oldStart: 84,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 118,
              oldLines: 0,
              oldStart: 102,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 128,
              oldLines: 0,
              oldStart: 111,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L4-6',
              newLines: 4,
              newStart: 131,
              oldLines: 2,
              oldStart: 114,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-1',
              newLines: 1,
              newStart: 138,
              oldLines: 0,
              oldStart: 118,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-2',
              newLines: 1,
              newStart: 173,
              oldLines: 1,
              oldStart: 153,
            },
          ],
          stats: {
            additions: 38,
            deletions: 18,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17097',
          _from: 'commits/16771',
          _to: 'files/2945',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplication.java#L2-3',
              newLines: 2,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/EmergencyBrakeApplication.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17099',
          _from: 'commits/16771',
          _to: 'files/15112',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java#L1-2',
              newLines: 1,
              newStart: 9,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java#L1-1',
              newLines: 1,
              newStart: 12,
              oldLines: 0,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 15,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/RabbitMQConfig.java#L4-4',
              newLines: 4,
              newStart: 24,
              oldLines: 0,
              oldStart: 18,
            },
          ],
          stats: {
            additions: 10,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17101',
          _from: 'commits/16771',
          _to: 'files/8786',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 13,
              oldLines: 10,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 14,
            deletions: 11,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17103',
          _from: 'commits/16771',
          _to: 'files/8784',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L6-8',
              newLines: 6,
              newStart: 13,
              oldLines: 2,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L3-5',
              newLines: 3,
              newStart: 21,
              oldLines: 2,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L1-1',
              newLines: 1,
              newStart: 25,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L6-6',
              newLines: 6,
              newStart: 30,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/EmergencyBrakeController.java#L2-3',
              newLines: 2,
              newStart: 40,
              oldLines: 1,
              oldStart: 28,
            },
          ],
          stats: {
            additions: 18,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17105',
          _from: 'commits/16771',
          _to: 'files/8782',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java#L2-4',
              newLines: 2,
              newStart: 10,
              oldLines: 2,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/controller/PingController.java#L6-6',
              newLines: 6,
              newStart: 16,
              oldLines: 0,
              oldStart: 15,
            },
          ],
          stats: {
            additions: 9,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17107',
          _from: 'commits/16771',
          _to: 'files/15110',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L1-2',
              newLines: 1,
              newStart: 11,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L2-3',
              newLines: 2,
              newStart: 13,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L1-2',
              newLines: 1,
              newStart: 16,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L1-1',
              newLines: 1,
              newStart: 18,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L8-8',
              newLines: 8,
              newStart: 23,
              oldLines: 0,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/EmergencyBreakConsumer.java#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 24,
            },
          ],
          stats: {
            additions: 14,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17109',
          _from: 'commits/16771',
          _to: 'files/15116',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/messaging/message/EmergencyBreakMessage.java#L4-5',
              newLines: 4,
              newStart: 3,
              oldLines: 1,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 4,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17111',
          _from: 'commits/16771',
          _to: 'files/8788',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L2-4',
              newLines: 2,
              newStart: 13,
              oldLines: 2,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L8-8',
              newLines: 8,
              newStart: 21,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-2',
              newLines: 1,
              newStart: 30,
              oldLines: 1,
              oldStart: 21,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/emergency-brake/src/main/java/at/tuwien/dse/emergency_brake/service/DataMockService.java#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 25,
            },
          ],
          stats: {
            additions: 14,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17113',
          _from: 'commits/16771',
          _to: 'files/3520',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L2-3',
              newLines: 2,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/PassengerGatewayApplication.java#L1-1',
              newLines: 1,
              newStart: 11,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 3,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17115',
          _from: 'commits/16771',
          _to: 'files/11426',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/CorsGlobalConfig.java#L14-28',
              newLines: 14,
              newStart: 8,
              oldLines: 14,
              oldStart: 8,
            },
          ],
          stats: {
            additions: 14,
            deletions: 14,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17117',
          _from: 'commits/16771',
          _to: 'files/11502',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java#L1-2',
              newLines: 1,
              newStart: 7,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/SwaggerUiWebMvcConfigurer.java#L4-4',
              newLines: 4,
              newStart: 10,
              oldLines: 0,
              oldStart: 9,
            },
          ],
          stats: {
            additions: 5,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17119',
          _from: 'commits/16771',
          _to: 'files/4777',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L1-2',
              newLines: 1,
              newStart: 10,
              oldLines: 1,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 13,
              oldLines: 10,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 27,
              oldLines: 10,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 41,
              oldLines: 10,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 55,
              oldLines: 10,
              oldStart: 46,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/config/WebClientConfig.java#L13-23',
              newLines: 13,
              newStart: 69,
              oldLines: 10,
              oldStart: 57,
            },
          ],
          stats: {
            additions: 66,
            deletions: 51,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17121',
          _from: 'commits/16771',
          _to: 'files/15772',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L7-9',
              newLines: 7,
              newStart: 11,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L6-6',
              newLines: 6,
              newStart: 22,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PassengerGatewayController.java#L4-4',
              newLines: 4,
              newStart: 32,
              oldLines: 0,
              oldStart: 20,
            },
          ],
          stats: {
            additions: 17,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17123',
          _from: 'commits/16771',
          _to: 'files/11452',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L8-10',
              newLines: 8,
              newStart: 15,
              oldLines: 2,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L1-2',
              newLines: 1,
              newStart: 25,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L2-4',
              newLines: 2,
              newStart: 32,
              oldLines: 2,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/controller/PingController.java#L6-6',
              newLines: 6,
              newStart: 39,
              oldLines: 0,
              oldStart: 32,
            },
          ],
          stats: {
            additions: 17,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17125',
          _from: 'commits/16771',
          _to: 'files/11457',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LocationMessage.java#L8-9',
              newLines: 8,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 8,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17127',
          _from: 'commits/16771',
          _to: 'files/11432',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L1-2',
              newLines: 1,
              newStart: 14,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L3-5',
              newLines: 3,
              newStart: 17,
              oldLines: 2,
              oldStart: 17,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L1-1',
              newLines: 1,
              newStart: 21,
              oldLines: 0,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L5-5',
              newLines: 5,
              newStart: 26,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L1-2',
              newLines: 1,
              newStart: 33,
              oldLines: 1,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L5-5',
              newLines: 5,
              newStart: 40,
              oldLines: 0,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/service/CentralDirectorService.java#L1-2',
              newLines: 1,
              newStart: 47,
              oldLines: 1,
              oldStart: 35,
            },
          ],
          stats: {
            additions: 17,
            deletions: 5,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17129',
          _from: 'commits/16771',
          _to: 'files/11459',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/passenger-gateway/src/main/java/at/tuwien/dse/passenger_gateway/messaging/message/LogMessage.java#L7-8',
              newLines: 7,
              newStart: 5,
              oldLines: 1,
              oldStart: 5,
            },
          ],
          stats: {
            additions: 7,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17131',
          _from: 'commits/16771',
          _to: 'files/1193',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L14-15',
              newLines: 14,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L2-2',
              newLines: 2,
              newStart: 16,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L3-3',
              newLines: 3,
              newStart: 19,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L2-2',
              newLines: 2,
              newStart: 23,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L2-2',
              newLines: 2,
              newStart: 26,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L3-3',
              newLines: 3,
              newStart: 29,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L4-5',
              newLines: 4,
              newStart: 34,
              oldLines: 1,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L3-3',
              newLines: 3,
              newStart: 39,
              oldLines: 0,
              oldStart: 10,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L2-3',
              newLines: 2,
              newStart: 44,
              oldLines: 1,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L1-1',
              newLines: 1,
              newStart: 48,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/Dockerfile#L2-2',
              newLines: 2,
              newStart: 50,
              oldLines: 0,
              oldStart: 16,
            },
          ],
          stats: {
            additions: 38,
            deletions: 3,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17133',
          _from: 'commits/16771',
          _to: 'files/1231',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L21-22',
              newLines: 21,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 31,
              oldLines: 1,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 34,
              oldLines: 1,
              oldStart: 14,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L10-10',
              newLines: 10,
              newStart: 37,
              oldLines: 0,
              oldStart: 16,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L2-3',
              newLines: 2,
              newStart: 49,
              oldLines: 1,
              oldStart: 19,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 55,
              oldLines: 1,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-14',
              newLines: 1,
              newStart: 73,
              oldLines: 13,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 75,
              oldLines: 1,
              oldStart: 56,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L4-5',
              newLines: 4,
              newStart: 77,
              oldLines: 1,
              oldStart: 58,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 82,
              oldLines: 1,
              oldStart: 60,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L8-9',
              newLines: 8,
              newStart: 84,
              oldLines: 1,
              oldStart: 62,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 93,
              oldLines: 1,
              oldStart: 64,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L6-7',
              newLines: 6,
              newStart: 95,
              oldLines: 1,
              oldStart: 66,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 102,
              oldLines: 1,
              oldStart: 68,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/README.md#L1-2',
              newLines: 1,
              newStart: 104,
              oldLines: 1,
              oldStart: 70,
            },
          ],
          stats: {
            additions: 60,
            deletions: 26,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17135',
          _from: 'commits/16771',
          _to: 'files/1259',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L19-19',
              newLines: 19,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L1-1',
              newLines: 1,
              newStart: 24,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L1-1',
              newLines: 1,
              newStart: 30,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L1-1',
              newLines: 1,
              newStart: 37,
              oldLines: 0,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L1-1',
              newLines: 1,
              newStart: 49,
              oldLines: 0,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.css#L1-1',
              newLines: 1,
              newStart: 54,
              oldLines: 0,
              oldStart: 30,
            },
          ],
          stats: {
            additions: 24,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17137',
          _from: 'commits/16771',
          _to: 'files/1261',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.js#L11-11',
              newLines: 11,
              newStart: 4,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.js#L1-1',
              newLines: 1,
              newStart: 16,
              oldLines: 0,
              oldStart: 4,
            },
          ],
          stats: {
            additions: 12,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17139',
          _from: 'commits/16771',
          _to: 'files/1263',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.test.js#L20-20',
              newLines: 20,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/App.test.js#L7-7',
              newLines: 7,
              newStart: 24,
              oldLines: 0,
              oldStart: 3,
            },
          ],
          stats: {
            additions: 27,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17141',
          _from: 'commits/16771',
          _to: 'files/1265',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L14-14',
              newLines: 14,
              newStart: 3,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 22,
              oldLines: 1,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 29,
              oldLines: 1,
              oldStart: 15,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 36,
              oldLines: 1,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-1',
              newLines: 1,
              newStart: 39,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-1',
              newLines: 1,
              newStart: 43,
              oldLines: 0,
              oldStart: 27,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-1',
              newLines: 1,
              newStart: 45,
              oldLines: 0,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-2',
              newLines: 1,
              newStart: 55,
              oldLines: 1,
              oldStart: 38,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/EventLog.js#L1-1',
              newLines: 1,
              newStart: 64,
              oldLines: 0,
              oldStart: 46,
            },
          ],
          stats: {
            additions: 22,
            deletions: 4,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17143',
          _from: 'commits/16771',
          _to: 'files/1269',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L7-8',
              newLines: 7,
              newStart: 12,
              oldLines: 1,
              oldStart: 12,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L11-12',
              newLines: 11,
              newStart: 26,
              oldLines: 1,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 38,
              oldLines: 1,
              oldStart: 22,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 40,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 43,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L11-12',
              newLines: 11,
              newStart: 48,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 60,
              oldLines: 1,
              oldStart: 30,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 62,
              oldLines: 0,
              oldStart: 31,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 66,
              oldLines: 1,
              oldStart: 35,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 72,
              oldLines: 0,
              oldStart: 40,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 74,
              oldLines: 0,
              oldStart: 41,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 77,
              oldLines: 0,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 82,
              oldLines: 0,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 85,
              oldLines: 0,
              oldStart: 47,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 93,
              oldLines: 0,
              oldStart: 54,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 103,
              oldLines: 0,
              oldStart: 63,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L13-13',
              newLines: 13,
              newStart: 107,
              oldLines: 0,
              oldStart: 66,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 121,
              oldLines: 0,
              oldStart: 67,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L3-4',
              newLines: 3,
              newStart: 123,
              oldLines: 1,
              oldStart: 69,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 129,
              oldLines: 1,
              oldStart: 73,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 133,
              oldLines: 1,
              oldStart: 77,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 149,
              oldLines: 1,
              oldStart: 93,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 151,
              oldLines: 1,
              oldStart: 95,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 164,
              oldLines: 1,
              oldStart: 108,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-2',
              newLines: 1,
              newStart: 167,
              oldLines: 1,
              oldStart: 111,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 170,
              oldLines: 0,
              oldStart: 113,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 175,
              oldLines: 0,
              oldStart: 117,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L2-2',
              newLines: 2,
              newStart: 178,
              oldLines: 0,
              oldStart: 118,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L7-14',
              newLines: 7,
              newStart: 184,
              oldLines: 7,
              oldStart: 123,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/MapView.js#L1-1',
              newLines: 1,
              newStart: 192,
              oldLines: 0,
              oldStart: 130,
            },
          ],
          stats: {
            additions: 82,
            deletions: 20,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17145',
          _from: 'commits/16771',
          _to: 'files/1275',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.css#L16-16',
              newLines: 16,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.css#L9-9',
              newLines: 9,
              newStart: 26,
              oldLines: 0,
              oldStart: 9,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.css#L10-10',
              newLines: 10,
              newStart: 39,
              oldLines: 0,
              oldStart: 13,
            },
          ],
          stats: {
            additions: 35,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17147',
          _from: 'commits/16771',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-3',
              newLines: 2,
              newStart: 4,
              oldLines: 1,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L3-4',
              newLines: 3,
              newStart: 8,
              oldLines: 1,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 14,
              oldLines: 2,
              oldStart: 11,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 17,
              oldLines: 0,
              oldStart: 13,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L18-18',
              newLines: 18,
              newStart: 23,
              oldLines: 0,
              oldStart: 18,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L4-6',
              newLines: 4,
              newStart: 42,
              oldLines: 2,
              oldStart: 20,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L5-8',
              newLines: 5,
              newStart: 48,
              oldLines: 3,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 54,
              oldLines: 1,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 58,
              oldLines: 1,
              oldStart: 32,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 64,
              oldLines: 1,
              oldStart: 38,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L11-12',
              newLines: 11,
              newStart: 68,
              oldLines: 1,
              oldStart: 42,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L11-12',
              newLines: 11,
              newStart: 100,
              oldLines: 1,
              oldStart: 64,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 118,
              oldLines: 1,
              oldStart: 72,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 129,
              oldLines: 1,
              oldStart: 83,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 135,
              oldLines: 1,
              oldStart: 89,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 143,
              oldLines: 0,
              oldStart: 96,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 147,
              oldLines: 0,
              oldStart: 99,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 152,
              oldLines: 0,
              oldStart: 102,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 156,
              oldLines: 1,
              oldStart: 106,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 170,
              oldLines: 0,
              oldStart: 119,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 179,
              oldLines: 1,
              oldStart: 128,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 182,
              oldLines: 0,
              oldStart: 130,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L9-10',
              newLines: 9,
              newStart: 194,
              oldLines: 1,
              oldStart: 142,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 214,
              oldLines: 1,
              oldStart: 154,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 221,
              oldLines: 0,
              oldStart: 160,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L13-13',
              newLines: 13,
              newStart: 233,
              oldLines: 0,
              oldStart: 171,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 247,
              oldLines: 1,
              oldStart: 173,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 249,
              oldLines: 1,
              oldStart: 175,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 270,
              oldLines: 0,
              oldStart: 195,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 272,
              oldLines: 0,
              oldStart: 196,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 282,
              oldLines: 0,
              oldStart: 205,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L11-11',
              newLines: 11,
              newStart: 302,
              oldLines: 0,
              oldStart: 224,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 337,
              oldLines: 0,
              oldStart: 248,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-3',
              newLines: 2,
              newStart: 339,
              oldLines: 1,
              oldStart: 250,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L7-8',
              newLines: 7,
              newStart: 361,
              oldLines: 1,
              oldStart: 271,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 397,
              oldLines: 0,
              oldStart: 300,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 399,
              oldLines: 0,
              oldStart: 301,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 402,
              oldLines: 0,
              oldStart: 303,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 406,
              oldLines: 0,
              oldStart: 305,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L8-11',
              newLines: 8,
              newStart: 412,
              oldLines: 3,
              oldStart: 310,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 426,
              oldLines: 1,
              oldStart: 319,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 436,
              oldLines: 1,
              oldStart: 329,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 448,
              oldLines: 1,
              oldStart: 341,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 468,
              oldLines: 1,
              oldStart: 361,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-3',
              newLines: 2,
              newStart: 480,
              oldLines: 1,
              oldStart: 373,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 490,
              oldLines: 1,
              oldStart: 382,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 492,
              oldLines: 1,
              oldStart: 384,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 496,
              oldLines: 0,
              oldStart: 387,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 511,
              oldLines: 1,
              oldStart: 402,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 525,
              oldLines: 1,
              oldStart: 416,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 535,
              oldLines: 0,
              oldStart: 425,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 558,
              oldLines: 1,
              oldStart: 448,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 587,
              oldLines: 1,
              oldStart: 477,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 590,
              oldLines: 0,
              oldStart: 479,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 598,
              oldLines: 0,
              oldStart: 486,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 606,
              oldLines: 0,
              oldStart: 493,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 622,
              oldLines: 0,
              oldStart: 507,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 639,
              oldLines: 1,
              oldStart: 523,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 655,
              oldLines: 0,
              oldStart: 538,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-4',
              newLines: 2,
              newStart: 665,
              oldLines: 2,
              oldStart: 547,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 672,
              oldLines: 0,
              oldStart: 553,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 684,
              oldLines: 0,
              oldStart: 563,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 702,
              oldLines: 0,
              oldStart: 579,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 707,
              oldLines: 0,
              oldStart: 583,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 714,
              oldLines: 0,
              oldStart: 588,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 722,
              oldLines: 0,
              oldStart: 594,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/layout/Dashboard.js#L2-2',
              newLines: 2,
              newStart: 730,
              oldLines: 0,
              oldStart: 600,
            },
          ],
          stats: {
            additions: 173,
            deletions: 42,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17149',
          _from: 'commits/16771',
          _to: 'files/1273',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.js#L1-2',
              newLines: 1,
              newStart: 6,
              oldLines: 1,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.js#L15-15',
              newLines: 15,
              newStart: 8,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.js#L2-2',
              newLines: 2,
              newStart: 24,
              oldLines: 0,
              oldStart: 8,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/index.js#L3-3',
              newLines: 3,
              newStart: 32,
              oldLines: 0,
              oldStart: 14,
            },
          ],
          stats: {
            additions: 21,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17151',
          _from: 'commits/16771',
          _to: 'files/1304',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/mock/simulateMovement.js#L11-11',
              newLines: 11,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/mock/simulateMovement.js#L5-6',
              newLines: 5,
              newStart: 14,
              oldLines: 1,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/mock/simulateMovement.js#L1-1',
              newLines: 1,
              newStart: 21,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/mock/simulateMovement.js#L1-1',
              newLines: 1,
              newStart: 24,
              oldLines: 0,
              oldStart: 7,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/mock/simulateMovement.js#L1-2',
              newLines: 1,
              newStart: 27,
              oldLines: 1,
              oldStart: 10,
            },
          ],
          stats: {
            additions: 19,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17153',
          _from: 'commits/16771',
          _to: 'files/1271',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L26-27',
              newLines: 26,
              newStart: 1,
              oldLines: 1,
              oldStart: 1,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 28,
              oldLines: 0,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 30,
              oldLines: 0,
              oldStart: 3,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 32,
              oldLines: 0,
              oldStart: 4,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 34,
              oldLines: 0,
              oldStart: 5,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 36,
              oldLines: 0,
              oldStart: 6,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/reportWebVitals.js#L1-1',
              newLines: 1,
              newStart: 38,
              oldLines: 0,
              oldStart: 7,
            },
          ],
          stats: {
            additions: 32,
            deletions: 1,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17155',
          _from: 'commits/16771',
          _to: 'files/1277',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/setupTests.js#L19-19',
              newLines: 19,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 19,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17157',
          _from: 'commits/16771',
          _to: 'files/1306',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L8-8',
              newLines: 8,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L20-40',
              newLines: 20,
              newStart: 10,
              oldLines: 20,
              oldStart: 2,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L16-16',
              newLines: 16,
              newStart: 32,
              oldLines: 0,
              oldStart: 23,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L1-1',
              newLines: 1,
              newStart: 49,
              oldLines: 0,
              oldStart: 24,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L2-2',
              newLines: 2,
              newStart: 51,
              oldLines: 0,
              oldStart: 25,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L1-1',
              newLines: 1,
              newStart: 54,
              oldLines: 0,
              oldStart: 26,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L2-2',
              newLines: 2,
              newStart: 57,
              oldLines: 0,
              oldStart: 28,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/328ff07031c7f7797ab20294414b3fa6fceea7bb/visor-frontend/src/utils/getColorForVin.js#L2-2',
              newLines: 2,
              newStart: 60,
              oldLines: 0,
              oldStart: 29,
            },
          ],
          stats: {
            additions: 52,
            deletions: 20,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17300',
          _from: 'commits/17285',
          _to: 'files/1282',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L3-5',
              newLines: 3,
              newStart: 45,
              oldLines: 2,
              oldStart: 45,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L0-1',
              newLines: 0,
              newStart: 66,
              oldLines: 1,
              oldStart: 66,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 100,
              oldLines: 0,
              oldStart: 99,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L3-12',
              newLines: 3,
              newStart: 102,
              oldLines: 9,
              oldStart: 101,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L22-88',
              newLines: 22,
              newStart: 106,
              oldLines: 66,
              oldStart: 111,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L3-3',
              newLines: 3,
              newStart: 129,
              oldLines: 0,
              oldStart: 177,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L10-11',
              newLines: 10,
              newStart: 133,
              oldLines: 1,
              oldStart: 179,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L17-24',
              newLines: 17,
              newStart: 144,
              oldLines: 7,
              oldStart: 181,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L3-6',
              newLines: 3,
              newStart: 163,
              oldLines: 3,
              oldStart: 190,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 258,
              oldLines: 0,
              oldStart: 284,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-1',
              newLines: 1,
              newStart: 271,
              oldLines: 0,
              oldStart: 296,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 317,
              oldLines: 1,
              oldStart: 342,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L9-10',
              newLines: 9,
              newStart: 319,
              oldLines: 1,
              oldStart: 344,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L0-1',
              newLines: 0,
              newStart: 330,
              oldLines: 1,
              oldStart: 348,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-3',
              newLines: 1,
              newStart: 336,
              oldLines: 2,
              oldStart: 354,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L0-12',
              newLines: 0,
              newStart: 394,
              oldLines: 12,
              oldStart: 414,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 505,
              oldLines: 1,
              oldStart: 536,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 512,
              oldLines: 1,
              oldStart: 543,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 568,
              oldLines: 1,
              oldStart: 599,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L1-2',
              newLines: 1,
              newStart: 636,
              oldLines: 1,
              oldStart: 667,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/bebd472bcc42c76086441df2acf9d87665ba9d86/visor-frontend/src/layout/Dashboard.js#L124-182',
              newLines: 124,
              newStart: 654,
              oldLines: 58,
              oldStart: 685,
            },
          ],
          stats: {
            additions: 203,
            deletions: 168,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17329',
          _from: 'commits/17314',
          _to: 'files/16121',
          lineCount: 0,
          hunks: [],
          stats: {
            additions: 0,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17357',
          _from: 'commits/17337',
          _to: 'files/7170',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/956ab4d0659659df90881e59593abf886aea0830/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L12-23',
              newLines: 12,
              newStart: 112,
              oldLines: 11,
              oldStart: 112,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/956ab4d0659659df90881e59593abf886aea0830/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L1-3',
              newLines: 1,
              newStart: 147,
              oldLines: 2,
              oldStart: 146,
            },
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/956ab4d0659659df90881e59593abf886aea0830/distance-monitor/src/main/java/at/tuwien/dse/distance_monitor/service/DistanceMonitorService.java#L3-3',
              newLines: 3,
              newStart: 149,
              oldLines: 0,
              oldStart: 148,
            },
          ],
          stats: {
            additions: 16,
            deletions: 13,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17359',
          _from: 'commits/17337',
          _to: 'files/8014',
          lineCount: 0,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/956ab4d0659659df90881e59593abf886aea0830/central-director/src/main/java/at/tuwien/dse/central_director/service/DistanceService.java#L14-16',
              newLines: 14,
              newStart: 73,
              oldLines: 2,
              oldStart: 73,
            },
          ],
          stats: {
            additions: 14,
            deletions: 2,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17422',
          _from: 'commits/17403',
          _to: 'files/16121',
          lineCount: 0,
          hunks: [],
          stats: {
            additions: 0,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17455',
          _from: 'commits/17430',
          _to: 'files/16120',
          lineCount: 0,
          hunks: [],
          stats: {
            additions: 0,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17457',
          _from: 'commits/17430',
          _to: 'files/16123',
          lineCount: 0,
          hunks: [],
          stats: {
            additions: 0,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17459',
          _from: 'commits/17430',
          _to: 'files/16121',
          lineCount: 0,
          hunks: [],
          stats: {
            additions: 0,
            deletions: 0,
          },
          action: 'modified',
        },
        {
          _id: 'commits-files/17484',
          _from: 'commits/17467',
          _to: 'files/17479',
          lineCount: 5588,
          hunks: [
            {
              webUrl:
                'https://github.com/INSO-TUWien/Binocular/blob/7e97635f27f378756b9b9b9c04d25f083ee193b8/DSE25Group17-Projectplan.pdf#L5588-5588',
              newLines: 5588,
              newStart: 1,
              oldLines: 0,
              oldStart: 0,
            },
          ],
          stats: {
            additions: 5588,
            deletions: 0,
          },
          action: 'added',
        },
      ];
      resolve(commitsFilesConnections);
    });
  }
}
