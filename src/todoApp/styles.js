import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerCont: {
    backgroundColor: "purple",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  addCont: {
    marginHorizontal: 10,
  },
  addInput: {
    marginVertical: 10,
  },
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    width: "30%",
    alignSelf: "center",
  },
  listCont: {
    flex: 1,
    marginHorizontal:10
  },
  list: {
  },
  listHeader: {
      backgroundColor: 'purple',
      padding:10,
      marginTop:10,
      alignItems:'center'
},
listHeadText:{
    fontWeight:"bold",
    color:'white'
},
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoCard: {
    marginVertical: 10,
    marginHorizontal:1,
    padding: 10,
  },
  finished: {
    textDecorationLine: "line-through",
  },
});
