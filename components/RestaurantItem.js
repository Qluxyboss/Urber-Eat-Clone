import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Spag Bar",
    image_url:
      "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 144,
    rating: 0.5,
  },
  {
    name: "Barbeque Spa",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBtAkfA052B6b4DT0fyvMvmu-zpojSqvmPg&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 644,
    rating: 5.5,
  },
  {
    name: "Barbeque Spa",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOlLfoQ_CBqbhal0YQbj4KPbwRQ8gotCPtw&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 644,
    rating: 5.5,
  },
  {
    name: "India's Grill",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItem({ restaurantData }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ image }) => (
  <View>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
