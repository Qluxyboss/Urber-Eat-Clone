import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import BottomTab from "../components/BottomTab";
import Categories from "../components/Categories";
import HeaderTaps from "../components/HeaderTaps";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

function HomeScreen(props) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, marginTop: 20 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTaps />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}

export default HomeScreen;
