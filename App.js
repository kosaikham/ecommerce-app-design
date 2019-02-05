import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import Home from "./src/views/Home";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";
import Address from "./src/views/Address";
import Shipping from "./src/views/Shipping";
import Payment from "./src/views/Payment";
import TermsAndConditions from "./src/views/TermsAndConditions";
import CustomDrawerComponent from "./src/components/CustomDrawerComponent";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const CheckoutTabNavigator = createMaterialTopTabNavigator({
  Address: {
    screen: Address
  },
  Shipping: {
    screen: Shipping
  },
  Payment: {
    screen: Payment
  }
});

const HomeCategoryStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Category: {
      screen: Category
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  HomeCategoryStack: {
    screen: HomeCategoryStack,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Basket: {
    screen: Basket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Basket",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Checkout: {
    screen: CheckoutTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Checkout",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Detail",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Category")}
            name="ios-close"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "TermsAndConditions",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Payment")}
            name="ios-close"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  }
});

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: HomeDrawNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
