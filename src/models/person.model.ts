import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  cpf?: string;

  @property({
    type: 'date',
  })
  dtnascimento?: string;

  @property({
    type: 'string',
  })
  sexo?: string;

  @property({
    type: 'string',
  })
  endereco?: string;

  @property({
    type: 'string',
  })
  cep?: string;

  @property({
    type: 'date',
    required: true,
  })
  dtinclusao: string;

  @property({
    type: 'date',
  })
  dtatualizacao?: string;

  @property({
    type: 'string',
  })
  telefone?: string;

  @property({
    type: 'string',
  })
  profissao?: string;

  @property({
    type: 'string',
  })
  qxprincipal?: string;

  @property({
    type: 'boolean',
  })
  hdacardio?: boolean;

  @property({
    type: 'boolean',
  })
  hdacostas?: boolean;

  @property({
    type: 'boolean',
  })
  hdamovimento?: boolean;

  @property({
    type: 'boolean',
  })
  hdaestatico?: boolean;

  @property({
    type: 'boolean',
  })
  hdametabolica?: boolean;

  @property({
    type: 'boolean',
  })
  hdasubjetivo?: boolean;


  constructor(data?: Partial<Person>) {
    super(data);
  }
}
