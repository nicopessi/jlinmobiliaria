import {defineField, defineType} from 'sanity'

export const oficinaType = defineType({
    name: 'oficina',
    title: 'Oficina',
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
        name: 'floor',
        type: 'number',
        title: 'Piso de la oficina',
      }),
      defineField({
        name: 'area',
        type: 'number',
        title: 'Metros cuadrados de la oficina',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'rooms',
        type: 'number',
        title: 'Número de ambientes',
      }),
      defineField({
        name: 'amenities',
        type: 'array',
        title: 'Amenidades',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      }),
      defineField({
        name: 'images',
        type: 'array',
        title: 'Imágenes de la oficina',
        of: [{ type: 'image' }],
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
      }),
    ],
  });