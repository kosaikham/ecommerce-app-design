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

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.params.name,
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-cart"
            color="white"
            size={30}
            style={{
              paddingRight: 10
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
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
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
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
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
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: navigation.state.params.detailName,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Category")}
            name="ios-close"
            color="white"
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
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
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
