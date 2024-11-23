
import {defineField, defineType} from 'sanity'

export const departamentoType = defineType({
    name: 'departamento',
    title: 'Departamentos',
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
        title: 'Ciudad',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'rooms',
        type: 'number',
        title: 'Habitaciones',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'beths',
        type: 'number',
        title: 'Baños',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'floor',
        type: 'number',
        title: 'Piso',
      }),
      defineField({
        name: 'balcony',
        type: 'boolean',
        title: '¿Tiene balcón?',
      }),
      defineField({
        name: 'parking',
        type: 'boolean',
        title: '¿Incluye estacionamiento?',
      }),
      defineField({
        name: 'areac',
        type: 'number',
        title: 'Metros cuadrados cubiertos',
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
        name: 'amenities',
        type: 'array',
        title: 'Amenidades',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
      }),
    ],
  });