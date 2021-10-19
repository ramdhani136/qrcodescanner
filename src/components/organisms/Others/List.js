import React from 'react';

import {View, Text} from 'react-native';
import {FloatingButton} from '../../atoms';
import {ListItem, PanelList} from '../../moleculs';

const List = ({
  data,
  handleDelete,
  handleSubmit,
  handleSearch,
  toggleFilter,
  handleFilter,
  doc,
  isLoading,
  handleData,
  toggleReload,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        marginTop: 16,
        paddingBottom: 95,
        height: '102%',
      }}>
      <PanelList
        toggleFilter={toggleFilter}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        doc={doc}
      />

      <ListItem
        data={data}
        handleDelete={handleDelete}
        isLoading={isLoading}
        handleData={handleData}
        toggleReload={toggleReload}
      />
      <FloatingButton
        style={{bottom: 120}}
        data={data}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

export default List;
