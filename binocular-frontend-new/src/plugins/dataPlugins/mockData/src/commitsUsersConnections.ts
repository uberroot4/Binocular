import {
  DataPluginCommitsUsersConnection,
  DataPluginCommitsUsersConnections,
} from '../../../interfaces/dataPluginInterfaces/dataPluginCommitsUsersConnections.ts';

export default class CommitsUsersConnections implements DataPluginCommitsUsersConnections {
  constructor() {}

  public async getAll(from: string, to: string) {
    console.log(`Getting Commits-Users-Connections from ${from} to ${to}`);
    return new Promise<DataPluginCommitsUsersConnection[]>((resolve) => {
      const commitsUsersConnections: DataPluginCommitsUsersConnection[] = [
        {
          _id: 'commits-users/369',
          _from: 'commits/363',
          _to: 'users/367',
        },
        {
          _id: 'commits-users/415',
          _from: 'commits/405',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/726',
          _from: 'commits/718',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/1017',
          _from: 'commits/1009',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/1096',
          _from: 'commits/1088',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/1171',
          _from: 'commits/1161',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/1592',
          _from: 'commits/1584',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/1667',
          _from: 'commits/1659',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/1722',
          _from: 'commits/1714',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/2039',
          _from: 'commits/2029',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/2093',
          _from: 'commits/2079',
          _to: 'users/2091',
        },
        {
          _id: 'commits-users/2125',
          _from: 'commits/2117',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/2162',
          _from: 'commits/2154',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/2525',
          _from: 'commits/2517',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/2875',
          _from: 'commits/2867',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/3209',
          _from: 'commits/3201',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/3404',
          _from: 'commits/3396',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/3431',
          _from: 'commits/3423',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/3454',
          _from: 'commits/3446',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/3811',
          _from: 'commits/3803',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/4009',
          _from: 'commits/3997',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/4166',
          _from: 'commits/4158',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/4252',
          _from: 'commits/4244',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/4425',
          _from: 'commits/4417',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/4603',
          _from: 'commits/4591',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/4746',
          _from: 'commits/4738',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/4953',
          _from: 'commits/4945',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/5159',
          _from: 'commits/5151',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/5324',
          _from: 'commits/5316',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/5377',
          _from: 'commits/5369',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/5424',
          _from: 'commits/5416',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/5463',
          _from: 'commits/5455',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/5560',
          _from: 'commits/5552',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/5585',
          _from: 'commits/5577',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/5777',
          _from: 'commits/5769',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/5874',
          _from: 'commits/5866',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/6053',
          _from: 'commits/6045',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6205',
          _from: 'commits/6197',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6275',
          _from: 'commits/6267',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/6483',
          _from: 'commits/6471',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/6635',
          _from: 'commits/6627',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6674',
          _from: 'commits/6666',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6713',
          _from: 'commits/6705',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6792',
          _from: 'commits/6784',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6854',
          _from: 'commits/6846',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/6933',
          _from: 'commits/6925',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/7056',
          _from: 'commits/7048',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/7135',
          _from: 'commits/7127',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/7354',
          _from: 'commits/7346',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/7560',
          _from: 'commits/7552',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/7599',
          _from: 'commits/7591',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/7622',
          _from: 'commits/7614',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/7756',
          _from: 'commits/7744',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/7952',
          _from: 'commits/7944',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8283',
          _from: 'commits/8275',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8497',
          _from: 'commits/8489',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8536',
          _from: 'commits/8528',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8627',
          _from: 'commits/8619',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8675',
          _from: 'commits/8667',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8752',
          _from: 'commits/8744',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/8947',
          _from: 'commits/8939',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/9315',
          _from: 'commits/9307',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/9619',
          _from: 'commits/9611',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/11744',
          _from: 'commits/11736',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/11858',
          _from: 'commits/11850',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/11902',
          _from: 'commits/11894',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12003',
          _from: 'commits/11995',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12095',
          _from: 'commits/12087',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12256',
          _from: 'commits/12248',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12348',
          _from: 'commits/12340',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12497',
          _from: 'commits/12489',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12649',
          _from: 'commits/12641',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12739',
          _from: 'commits/12731',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/12762',
          _from: 'commits/12754',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/12785',
          _from: 'commits/12777',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12818',
          _from: 'commits/12806',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/12845',
          _from: 'commits/12833',
          _to: 'users/2091',
        },
        {
          _id: 'commits-users/14136',
          _from: 'commits/14128',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/14180',
          _from: 'commits/14172',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/14246',
          _from: 'commits/14238',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/14362',
          _from: 'commits/14354',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/14403',
          _from: 'commits/14395',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/14458',
          _from: 'commits/14450',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/14645',
          _from: 'commits/14633',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/14725',
          _from: 'commits/14717',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/14802',
          _from: 'commits/14794',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/14969',
          _from: 'commits/14961',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/15053',
          _from: 'commits/15045',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/15096',
          _from: 'commits/15088',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15275',
          _from: 'commits/15267',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15316',
          _from: 'commits/15308',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15357',
          _from: 'commits/15349',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15432',
          _from: 'commits/15424',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/15542',
          _from: 'commits/15534',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/15581',
          _from: 'commits/15573',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/15622',
          _from: 'commits/15614',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15663',
          _from: 'commits/15655',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/15710',
          _from: 'commits/15702',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/15760',
          _from: 'commits/15752',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/15889',
          _from: 'commits/15881',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/15921',
          _from: 'commits/15913',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/15962',
          _from: 'commits/15954',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/16016',
          _from: 'commits/16008',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/16057',
          _from: 'commits/16049',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/16111',
          _from: 'commits/16103',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/16164',
          _from: 'commits/16156',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/16193',
          _from: 'commits/16185',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/16332',
          _from: 'commits/16324',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/16457',
          _from: 'commits/16449',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/16480',
          _from: 'commits/16472',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/16531',
          _from: 'commits/16519',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/16663',
          _from: 'commits/16655',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/16779',
          _from: 'commits/16771',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/17293',
          _from: 'commits/17285',
          _to: 'users/1169',
        },
        {
          _id: 'commits-users/17322',
          _from: 'commits/17314',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/17345',
          _from: 'commits/17337',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/17415',
          _from: 'commits/17403',
          _to: 'users/2037',
        },
        {
          _id: 'commits-users/17438',
          _from: 'commits/17430',
          _to: 'users/413',
        },
        {
          _id: 'commits-users/17475',
          _from: 'commits/17467',
          _to: 'users/413',
        },
      ];
      resolve(commitsUsersConnections);
    });
  }
}
