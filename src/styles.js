import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  title: {
    marginTop:50,
    color: "#fff",
    fontSize: 36,
  },

  subTitle: {
    color: "#bbb",
    fontSize: 18,
    width: 300,
    marginVertical: 20,

    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    margin: 15,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },

  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#fff",
    width: 300,
  },

  selectBox: {

    marginTop: 12,
    borderWidth: 1,
    borderRadius: 5,

    backgroundColor: "#fff",
    width: 300,
  },

  selectText: {
    paddingHorizontal: 0,
  },

  dropdownList: {
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 12,
    backgroundColor: "gray",
  },

  dropdownText:{
    color: "#fff" 
  },

  button: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8e05c2',

  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Styles;
