import _extends from"@babel/runtime/helpers/extends";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";var _jsxFileName="/Users/alpha2/Documents/Projects/Armillary/react-native-safe-area-context/src/index.tsx";import*as React from'react';import{StyleSheet,View}from'react-native';import NativeSafeAreaView from'./NativeSafeAreaView';export var SafeAreaContext=React.createContext(null);export function SafeAreaProvider(_ref){var children=_ref.children,initialSafeAreaInsets=_ref.initialSafeAreaInsets;var parentInsets=useParentSafeArea();var _React$useState=React.useState(initialSafeAreaInsets||parentInsets),_React$useState2=_slicedToArray(_React$useState,2),insets=_React$useState2[0],setInsets=_React$useState2[1];var onInsetsChange=React.useCallback(function(event){setInsets(event.nativeEvent.insets);},[]);return React.createElement(NativeSafeAreaView,{style:styles.fill,onInsetsChange:onInsetsChange,__source:{fileName:_jsxFileName,lineNumber:26}},insets!=null?React.createElement(SafeAreaContext.Provider,{value:insets,__source:{fileName:_jsxFileName,lineNumber:28}},children):null);}var styles=StyleSheet.create({fill:{flex:1}});export var SafeAreaConsumer=SafeAreaContext.Consumer;function useParentSafeArea(){return React.useContext(SafeAreaContext);}export function useSafeArea(){var safeArea=React.useContext(SafeAreaContext);if(safeArea==null){throw new Error('No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');}return safeArea;}export function SafeAreaView(_ref2){var style=_ref2.style,rest=_objectWithoutProperties(_ref2,["style"]);var insets=useSafeArea();return React.createElement(View,_extends({style:[{paddingTop:insets.top,paddingRight:insets.right,paddingBottom:insets.bottom,paddingLeft:insets.left},style]},rest,{__source:{fileName:_jsxFileName,lineNumber:63}}));}
//# sourceMappingURL=index.js.map