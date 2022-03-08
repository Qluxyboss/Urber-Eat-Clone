import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

function Categories(props) {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "cover",
              }}
            />
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Categories;
