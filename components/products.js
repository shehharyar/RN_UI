import { FlatList } from 'react-native';
import { products } from '../utils/data';
import ProductItem from './productItem';
export default function ProductsList() {
  return (
    <FlatList
    
      data={products}
    //   scrollEnabled={true}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductItem
          img={item.imageUrl}
          title={item.name}
          subtitle={item.price}
          isFavourite={item.isFavourite}
        />
      )}
      numColumns={2}
    />
  );
}


