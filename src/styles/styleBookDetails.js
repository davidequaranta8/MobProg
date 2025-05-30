import { StyleSheet } from 'react-native';

const styleBookDetail = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingTop: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4,
      textAlign: 'center'
    },
    author: {
      fontSize: 16,
      color: '#666666',
      textAlign: 'center',
      marginBottom: 16
    },
    coverImage: {
      width: 160,
      height: 240,
      alignSelf: 'center',
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 20
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 6
    },
    description: {
      fontSize: 14,
      color: '#333333',
      marginBottom: 20
    },
    status: {
      fontSize: 16,
      marginBottom: 12,
      color: '#444'
    },
    starsContainer: {
      flexDirection: 'row',
      marginBottom: 24
    },
    noteBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding:12
  },
  addButton: {
      backgroundColor: '#3366FF',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 40
    },
    addButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    topRightButton: {
      position: 'absolute',
      right: 8,
      padding: 8,
      zIndex: 10
    },
    icondx: {
      width: 24,
      height: 28,
      tintColor: 'black'
    },
    topLeftButton: {
      position: 'absolute',
      left: 8,
      padding: 8,
      zIndex: 10
    },
    iconsx: {
      width: 24,
      height: 24,
      tintColor: 'black' // cosi elimina la scritta
    },
    ratingInput: {
        height: 40,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff'
      },
      ratingStar: { 
        fontSize: 18, 
        marginBottom: 0 , 
        color:'gold' 
      }
  });

  export default styleBookDetail;