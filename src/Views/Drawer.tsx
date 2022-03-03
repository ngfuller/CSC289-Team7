import {Component} from 'react';
import {Animated} from 'react-native';

/*
StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});
*/

interface SidebarProps {
  isOpen: boolean;
}

class Sidebar extends Component<SidebarProps> {
  state = {
    anim: new Animated.Value(this.props.isOpen ? 0 : 1),
  };

  componentWillReceiveProps(nextProps: SidebarProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      Animated.timing(this.state.anim, {
        useNativeDriver: false,
        toValue: nextProps.isOpen ? 1 : 0,
      }).start();
    }
  }
}

export default Sidebar;
