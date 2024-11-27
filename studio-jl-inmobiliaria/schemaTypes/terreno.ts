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
        name: 'province',
        type: 'string',
        title: 'Provincia',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'location',
        type: 'string',
        title: 'Localidad',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'address',
        type: 'string',
        title: 'Dirección',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'areac',
        type: 'number',
        title: 'Metros cuadrados cubiertos',
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
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Precio'
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
        name: 'patio',      
        type: 'boolean',       
        title: '¿Tiene patio?',
        description: 'Indica si la propiedad tiene patio (Sí o No)',
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