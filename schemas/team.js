export default {
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fieldsets: [
    {name: 'social', title: 'Social profile'}
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Core', value: 'core'},
          {title: 'Mentor', value: 'mentor'},
          {title: 'Ambassador', value: 'ambassador'},
          {title: 'Tech team', value: 'tech-team'},
          {title: 'Contributor', value: 'contributor'}
        ],
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
      fieldset: 'social'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      fieldset: 'social'
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
