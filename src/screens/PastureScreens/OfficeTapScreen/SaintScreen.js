import React from 'react';
import { View, ScrollView } from 'react-native';
import LifetimeMaturityTable from '../../../components/table/LifetimeMaturityTable';

const SaintScreen = () => {
    return (
      <ScrollView>
        <View>
            <LifetimeMaturityTable/>
        </View>
      </ScrollView>
    )
  }
export default SaintScreen;