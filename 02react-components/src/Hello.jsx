function Hello() {
  //let myName = "Archit";
  let fullName = () => {
    return "Archit Lokhande";
  };
  return <h3>This is the future speaking. I am {fullName()}</h3>;
}

export default Hello;
