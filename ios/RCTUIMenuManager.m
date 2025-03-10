#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTUIMenu, RCTViewManager)

/**
 * title: Short description to be displayed above the menu.
 */
RCT_EXPORT_VIEW_PROPERTY(title, NSString);
/**
 * actions: Array of actions that are included in the menu
 */
RCT_EXPORT_VIEW_PROPERTY(actions, NSArray);
/**
 * onPressAction: callback to be called once user selects an action
 */
RCT_EXPORT_VIEW_PROPERTY(onPressAction, RCTDirectEventBlock);
/**
 * shouldOpenOnLongPress: determines whether menu should be opened after long press or normal press
 */
RCT_EXPORT_VIEW_PROPERTY(shouldOpenOnLongPress, BOOL)
/**
 * darkMode: determines whether menu should be dark mode or light mode
 */
RCT_EXPORT_VIEW_PROPERTY(darkMode, BOOL)

@end
