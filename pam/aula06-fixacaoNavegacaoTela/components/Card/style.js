import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
   card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '10px',
      height: 'auto',
      width: '203px',
      marginRight: '10px',
      paddingTop: '20px',
      paddingBottom: '20px',
      backgroundColor: '#FFF',
      borderRadius: '10px',
      alignSelf: 'stretch'
   },

   imageCardContent: {
      height: '170px',
      width: '165px',
   },

   img: {
      height: '100%',
      width: '100%',
   },

   icon: {
      height: '15px',
      width: '15px',
   },

   textCardContent: {
      display: 'flex',
      rowGap: '7px',
      width: '165px',
      height: 'auto',
   },

   deliveryCardContent: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: '3.5px',
   },

   deliveryText: {
      fontSize: '12px',
      fontWeight: '600',
      fontStyle: 'italic',
      color: '#1F9050',
   },

   assessmentCardContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '3.5px',
   },

   assessmentText: {
      fontSize: '10.2px',
      fontWeight: '400',
      color: '#A5A5A5',
   },

   productNameText: {
      fontSize: '16px',
      fontWeight: '600',
   },

   priceCardContent: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '3.5px',
   },

   oldPriceText: {
      fontSize: '12px',
      fontWeight: '600',
      textDecorationLine: 'line-through',
      color: '#696969',
   },

   newPriceText: {
      fontSize: '17px',
      fontWeight: '700',
      color: '#1EAD2C',
   },

   paymentMethod: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#1EAD2C',
   },

})

export default estilo;