import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

function HeaderTaps() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pick Up"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

export default HeaderTaps;

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 50,
        }}
        onPress={() => props.setActiveTab(props.text)}
      >
        <Text
          style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
