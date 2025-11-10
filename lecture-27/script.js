function data() {
  console.log(this);
}
const obj = { name: "hello", dummy:data};
obj.dummy();
data();
