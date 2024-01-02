const Greet = () => {
  const myFirstName = "Wassim";
  const myImageSource =
    "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/348274410_2291431047911024_2160905986918774479_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=mb9o57F8S40AX9jxiqe&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDJ9XtlyosLkJMrwhJn_nSwEmXveKxHCq8GnupOu15jYg&oe=6598273C";

  return (
    <div>
      <h1>Hello, {myFirstName ? myFirstName : "there"}!</h1>

      {myFirstName && (
        <img src={myImageSource} alt={`Profile of ${myFirstName}`} />
      )}
    </div>
  );
};

export default Greet;
