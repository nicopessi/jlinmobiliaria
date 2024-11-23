import {defineField, defineType} from 'sanity'

export const localType = defineType({
    name: 'local',
    title: 'local',
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
        title: 'Piso de la local',
      }),
      defineField({
        name: 'areac',
        type: 'number',
        title: 'Metros cuadrados de la local',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'rooms',
        type: 'number',
        title: 'Número de ambientes',
      }),
      defineField({
        name: 'beths',
        type: 'number',
        title: 'Cantidad de baños',
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
      type: 'image',
      title: 'Imagen fachada',
      options: {
        hotspot: true,
      },
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