import {defineField, defineType} from 'sanity'

export const localType = defineType({
    name: 'local',
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
        name: 'areac',
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
        name: 'image1',
        type: 'array',
        title: 'Imagen fachada',
        of: [{ type: 'image' }],
      }),
      defineField({
        name: 'aditionalImages',
        type: 'array',
        title: 'Imágenes adicionales',
        of: [{ type: 'image' }],
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
      }),
    ],
  });