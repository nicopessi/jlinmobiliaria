import { defineConfig } from 'sanity';
import { casasType } from './casas'
import { terrenoType } from './terreno';
import { galponType } from './galpon';
import { cocheraType } from './cochera';
import { oficinaType } from './oficina';
import { departamentoType } from './departamento';

export const schemaTypes = [terrenoType, galponType, cocheraType, oficinaType, casasType, departamentoType]

export default defineConfig({
    name: 'default',
    title: 'Inmobiliaria Database',
  
    projectId: '',
    dataset: 'production',
  
    schema: {
      types: schemaTypes,
    },
  });