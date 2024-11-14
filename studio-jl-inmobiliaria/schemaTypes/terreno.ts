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
        name: 'areal',
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