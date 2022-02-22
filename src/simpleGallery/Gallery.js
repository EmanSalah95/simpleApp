import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const Gallery = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1643491815018-d23d3b4247ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1641667599829-0b6d0c92581c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    'https://images.unsplash.com/photo-1643766027895-ec8d2c42a455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ];

  const handleNext = () => {
    console.log(imgIndex, images.length);
    imgIndex < images.length - 1 && setImgIndex(imgIndex + 1);
  };

  const handlePrev = () => {
    console.log(imgIndex, images.length);
    imgIndex > 0 && setImgIndex(imgIndex - 1);
  };

  return (
    <View>
      <Image
        style={styles.img}
        width={50}
        height={50}
        source={{
          uri: images[imgIndex],
        }}
      />

      <View style={styles.btnBar}>
        <View style={styles.btn}>
          <Button disabled={ imgIndex == 0} title="prev" color={"purple"} onPress={handlePrev}></Button>
        </View>

        <View style={styles.btn}>
          <Button disabled={ imgIndex == images.length-1} title="next" color={"purple"} onPress={handleNext}></Button>
        </View>
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  gallery: {
    marginTop: 30,
  },
  img: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginTop: 10,
  },
  btnBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: {
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
  },
});
