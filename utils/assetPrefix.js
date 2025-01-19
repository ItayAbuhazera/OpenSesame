const getAssetPrefix = () => {
    if (process.env.NODE_ENV === 'production') {
      return '/OpenSesame'
    }
    return ''
  }
  
  export default getAssetPrefix