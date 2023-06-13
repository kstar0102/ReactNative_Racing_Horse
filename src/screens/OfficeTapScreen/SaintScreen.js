import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import LifetimeMaturityTable from '../../components/OfficeTable/LifetimeMaturityTable';
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