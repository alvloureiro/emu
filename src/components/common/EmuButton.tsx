import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

interface Props {
  label: string;
  onPress: () => void;
}

export const EmuButton: React.FC<Props> = (props) => {
  const {label, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GREENDAY,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  text: {
    color: colors.WHITE,
    textAlign: 'center',
    height: 20,
  },
});
