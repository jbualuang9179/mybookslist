import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'uuid-random';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'JAVA'},
    {id: uuid(), text: 'KOTLIN'},
    {id: uuid(), text: 'JAVASCRIPT'},
    {id: uuid(), text: 'HTML'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    setItems(prevItems => {
      // spread operator
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="My Books List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
