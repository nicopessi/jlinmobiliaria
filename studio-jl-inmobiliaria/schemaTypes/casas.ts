import { defineField, defineType } from 'sanity';

export const casasType = defineType({
  name: 'casas',
  title: 'Casas',
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
      type: 'string',
      title: 'Habitaciones',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'beths',
      type: 'string',
      title: 'Baños',
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
      name: 'image1',
      type: 'image',
      title: 'Imagen fachada',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'additionalImages',
      type: 'array',
      title: 'Imágenes adicionales',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Precio',
    }),
    // Agregar el campo 'slug'
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
      name: 'publishedAt',
      type: 'datetime',
      title: 'Fecha de publicación',
    }),
  ],
});
