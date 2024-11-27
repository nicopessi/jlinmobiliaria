
import {defineField, defineType} from 'sanity'

export const departamentoType = defineType({
    name: 'departamento',
    title: 'Departamento',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Titulo',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'province',
        type: 'string',
        title: 'Provincia',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'address',
        type: 'string',
        title: 'Dirección',
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
        name: 'garage',
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
      defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
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
        name: 'kitchen',      
        type: 'boolean',       
        title: '¿Tiene cocina?',
        description: 'Indica si la propiedad tiene cocina (Sí o No)',
        initialValue: false,
      }),
      defineField({
        name: 'description',
        type: 'string',
        title: 'Descripción',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        title: 'Fecha de publicación',
      }),
    ],
  });