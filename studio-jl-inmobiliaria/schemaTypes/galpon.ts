import {defineField, defineType} from 'sanity'

export const galponType = defineType({
    name: 'galpon',
    title: 'Galpón',
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
        name: 'areac',
        type: 'number',
        title: 'Metros cuadrados cubiertos',
      }),
      defineField({
        name: 'areal',
        type: 'number',
        title: 'Metros cuadrados libres',
      }),
      defineField({
        name: 'height',
        type: 'number',
        title: 'Altura del galpón (en metros)',
      }),
      defineField({
        name: 'images',
        type: 'array',
        title: 'Imágenes del galpón',
        of: [{ type: 'image' }],
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
      }),
    ],
  });