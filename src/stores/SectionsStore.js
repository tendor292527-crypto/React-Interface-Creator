import shortid from 'shortid'

export default {
  get(section) {
    if (section === 'section1') {
      return {
        type: '1',
        id: shortid.generate(),
        data: {
          title: '',
          subTitle: '',
          linkImage: '',
        },
        edit: true,
      }
    }
    if (section === 'section2') {
      return {
        type: '2',
        id: shortid.generate(),
        data: {
          title: '',
          subTitle: '',
          backgroundColor: '',
          buttonLink: '',
          buttonTarget: '_self',
          buttonLabel: '',
        },
        edit: true,
      }
    }
    if (section === 'section3') {
      return {
        type: '3',
        id: shortid.generate(),
        data: {
          createdAt: '',
          linkImage1: '',
          linkImage2: '',
          linkImage3: '',
        },
        edit: true,
      }
    }

    throw new Error(`This section doesn't exist: ${section}`)
  },
}
