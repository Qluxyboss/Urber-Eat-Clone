import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <IconText icon="home" text="Home" />
      <IconText icon="search" text="Browse" />
      <IconText icon="shopping-bag" text="Grocery" />
      <IconText icon="receipt" text="Orders" />
      <IconText icon="user" text="Account" />
    </View>
  );
}

const IconText = ({ icon, text }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
