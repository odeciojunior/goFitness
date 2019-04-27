import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './gofitness.datasource.json';

export class GofitnessDataSource extends juggler.DataSource {
  static dataSourceName = 'gofitness';

  constructor(
    @inject('datasources.config.gofitness', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
