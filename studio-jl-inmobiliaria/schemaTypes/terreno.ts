import {defineField, defineType} from 'sanity'

export const terrenoType = defineType({
    name: 'terreno',
    title: 'Terreno',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Titulo',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'location',
        type: 'string',
        title: 'Ubicación',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'area',
        type: 'number',
        title: 'Metros cuadrados del terreno',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'zoning',
        type: 'string',
        title: 'Zonificación',
        description: 'Ejemplo: Residencial, Comercial, Industrial',
      }),
      defineField({
        name: 'images',
        type: 'array',
        title: 'Imágenes del terreno',
        of: [{ type: 'image' }],
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
      }),
    ],
  });