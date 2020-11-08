import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type NativeActionEvent = {
  nativeEvent: {
    event: string;
  };
};

type MenuAttributes = {
  /**
   * An attribute indicating the destructive style.
   */
  destructive?: boolean;
  /**
   * An attribute indicating the disabled style.
   */
  disabled?: boolean;
  /**
   * An attribute indicating the hidden style.
   */
  hidden?: boolean;
};

/**
 * The state of the action.
 * - off: A constant indicating the menu element is in the “off” state.
 * - on: A constant indicating the menu element is in the “on” state.
 * - mixed: A constant indicating the menu element is in the “mixed” state.
 */
type MenuState = 'off' | 'on' | 'mixed';

type MenuAction = {
  /**
   * Identifier of the menu action.
   * The value set in this id will be returned when menu is selected.
   */
  id?: string;
  /**
   * The action's title.
   */
  title: string;
  /**
   * (iOS14+ only)
   * An elaborated title that explains the purpose of the action.
   */
  subtitle?: string;
  /**
   * The attributes indicating the style of the action.
   */
  attributes?: MenuAttributes;
  /**
   * (iOS14+ only)
   * The state of the action.
   */
  state?: MenuState;
  /**
   * (iOS13+ only)
   * - The action's image.
   * - Allows icon name included in SF Symbol
   * - TODO: Allow images other than those included in SF Symbol
   */
  image?: string;
};

type MenuComponentProps = {
  style?: StyleProp<ViewStyle>;
  onPressAction?: ({ nativeEvent }: NativeActionEvent) => void;
  actions: MenuAction[];
  /**
   * The title of the menu.
   */
  title?: string;
  /**
   * (iOS14+ only)
   * - The image to display next to the menu's title.
   * - Allows icon name included in SF Symbol
   * - TODO: Allow images other than those included in SF Symbol
   */
  image?: string;
};

const MenuView: React.FC<MenuComponentProps> = () => {
  return <View />;
};

export default MenuView;
