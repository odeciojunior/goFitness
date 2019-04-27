import {DefaultCrudRepository} from '@loopback/repository';
import {Person} from '../models';
import {GofitnessDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  constructor(
    @inject('datasources.gofitness') dataSource: GofitnessDataSource,
  ) {
    super(Person, dataSource);
  }
}
