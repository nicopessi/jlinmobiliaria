import {defineField, defineType} from 'sanity'

export const cocheraType = defineType({
    name: 'cochera',
    title: 'Cochera',
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
        name: 'type',
        type: 'string',
        title: 'Tipo de cochera',
        options: {
          list: [
            { title: 'Cubierta', value: 'Cubierta' },
            { title: 'Descubierta', value: 'Descubierta' },
          ],
        },
      }),
      defineField({
        name: 'dimensions',
        type: 'string',
        title: 'Dimensiones (largo x ancho)',
      }),
      defineField({
        name: 'securityFeatures',
        type: 'array',
        title: 'Características de seguridad',
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