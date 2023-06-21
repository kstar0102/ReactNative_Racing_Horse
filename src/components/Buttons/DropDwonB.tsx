import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../containers/colors';

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const DropDownB: FC<Props> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef<GestureResponderEvent>();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string } | undefined>(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <React.Fragment>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}
      >
        <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
        <Text style={styles.buttonText}>
          {(!!selected && selected.label) || label}
        </Text>
      </TouchableOpacity>
      {renderDropdown()}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    
  },
  icon: {
  },
  dropdown: {
    marginTop: -22,
    position: 'absolute',
    left: 23,
    backgroundColor: colors.backgroudColor,
    width: '32%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default DropDownB;
