import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex  justify-between items-center p-4 border-b-4 mb-8">
      <h1 className="text-3xl font-bold">Serenity lounge</h1>
      <img src={profile} alt="" srcset="" />
    </header>
  );
};

export default Header;
